import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const SuccessModal = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>Woohoo, form successfully validated</Modal.Body>
        <Modal.Footer>
          <Link to="/viewEmployee">
            <Button variant="secondary">
              Close
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SuccessModal;
