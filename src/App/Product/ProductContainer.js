import React, { useState, useEffect } from 'react';
import ProductComponent from './ProductComponent';
import ModalContainer from '../Modal/ModalContainer';
import { getProduct } from '../../api';

function ProductContainer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [product, setProduct] = useState();
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

  console.log('prod', product);

  return (
    <>
      <ProductComponent setModalOpen={setModalOpen} product={product} />
      <ModalContainer modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
}

export default ProductContainer;
