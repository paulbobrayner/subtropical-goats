import React, { useState, useEffect, useCallback } from 'react';
import { io } from 'socket.io-client';

import ProductComponent from './ProductComponent';
import ModalContainer from '../Modal/ModalContainer';
import { getProduct, getReviews } from '../../api';

function ProductContainer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [product, setProduct] = useState();
  const [reviews, setReviews] = useState();

  const productId = 1;
  const socket = io(process.env.SOCKET_URL, {
    withCredentials: true,
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
      console.log('updated review data-->', data);
      setReviews(data);
    });
  }, [socket]);

  useEffect(function initReviews() {
    fetchReviews();
  }, []);

  return (
    <>
      <ProductComponent
        setModalOpen={setModalOpen}
        product={product}
        reviews={reviews}
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
