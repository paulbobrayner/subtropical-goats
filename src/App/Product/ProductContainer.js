import React, { useState, useEffect } from 'react';
import ProductComponent from './ProductComponent';
import ModalContainer from '../Modal/ModalContainer';
import { getProduct, getReviews } from '../../api';

function ProductContainer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [product, setProduct] = useState();
  const [reviews, setReviews] = useState();

  const productId = 1;

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

  useEffect(
    function initReviews() {
      getReviews(productId).then((response) => {
        if (response) {
          setReviews(response);
        }
      });
    },
    [productId, setReviews, getReviews]
  );

  return (
    <>
      <ProductComponent
        setModalOpen={setModalOpen}
        product={product}
        reviews={reviews}
      />
      <ModalContainer modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
}

export default ProductContainer;
