import React, { useState, useEffect, useCallback } from 'react';
import ProductComponent from './ProductComponent';
import ModalContainer from '../Modal/ModalContainer';
import { getProduct, getReviews } from '../../api';

function ProductContainer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [product, setProduct] = useState();
  const [reviews, setReviews] = useState();
  const [postReviewSuccess, setPostReviewSuccess] = useState();

  const productId = 1;

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

  useEffect(function initReviews() {
    fetchReviews();
  }, []);

  useEffect(
    function reFetchReviews() {
      if (postReviewSuccess) {
        fetchReviews();
      }
    },
    [postReviewSuccess]
  );

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
        setPostReviewSuccess={setPostReviewSuccess}
      />
    </>
  );
}

export default ProductContainer;
