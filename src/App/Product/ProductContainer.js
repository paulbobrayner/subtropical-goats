import React, { useState, useEffect } from 'react';
import ProductComponent from './ProductComponent';
import ModalContainer from '../Modal/ModalContainer';

function ProductContainer() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ProductComponent setModalOpen={setModalOpen} />
      <ModalContainer modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
}

export default ProductContainer;
