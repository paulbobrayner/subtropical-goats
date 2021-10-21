import React, { useState, useEffect, useCallback } from 'react';
import { io } from 'socket.io-client';

import ProductComponent from './ProductComponent';
import ModalContainer from '../Modal/ModalContainer';
import { getProduct, getReviews } from '../../api';

function ProductContainer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [product, setProduct] = useState();
  const [reviews, setReviews] = useState();
  const [averageRating, setAverageRating] = useState();

  const productId = 1;
  const socket = io(process.env.SOCKET_URL, {
    reconnectionDelay: 1000,
    reconnection: true,
    rejectUnauthorized: false,
    transports: ['websocket'],
  });

  const fetchReviews = useCallback(() => {
    getReviews(productId).then((response) => {
      if (response) {
        setReviews(response);
      }
    });
  }, [productId, setProduct, getProduct]);

  useEffect(
    function initProduct() {
      getProduct(productId).then((response) => {
        if (response) {
          setProduct(response);
        }
      });
    },
    [productId, setProduct, getProduct]
  );

  useEffect(() => {
    socket.on('reviewsUpdate', (data) => {
      setReviews(data);
    });
  }, [socket]);

  useEffect(function initReviews() {
    fetchReviews();
  }, []);

  useEffect(
    function initAverageRating() {
      if (reviews && reviews.length > 0) {
        const total = reviews.reduce((a, b) => a + +b.rating, 0);
        const average = total / reviews.length;

        setAverageRating(average.toFixed(1));
      }
    },
    [reviews, setAverageRating]
  );

  return (
    <>
      <ProductComponent
        setModalOpen={setModalOpen}
        product={product}
        reviews={reviews}
        averageRating={averageRating}
      />
      <ModalContainer
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        productId={productId}
        socket={socket}
      />
    </>
  );
}

export default ProductContainer;
