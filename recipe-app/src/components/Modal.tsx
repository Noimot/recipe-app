import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';

export default function MyVerticallyCenteredModal({show, hide, title, text, onClick}) {
  return (
    <Modal
    //   {...props}
    show={show}
    hide={hide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete Recipe
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {text}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={hide} variant='danger'>Close</Button>
        <Button onClick={onClick} variant='success'>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
}
