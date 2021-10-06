import React from 'react';
import ModalComponent from './ModalComponent';

function ModalContainer({ modalOpen, setModalOpen }) {
  return <ModalComponent modalOpen={modalOpen} setModalOpen={setModalOpen} />;
}
export default ModalContainer;
