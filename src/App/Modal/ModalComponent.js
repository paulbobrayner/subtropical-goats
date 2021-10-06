import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ModalComponent({ modalOpen, setModalOpen }) {
  return (
    <Modal show={modalOpen} onHide={() => setModalOpen(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setModalOpen(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={() => setModalOpen(false)}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;
