import React from "react";

// Bootstrap Component
import { Modal, Button } from "react-bootstrap";
import Header from "react-bootstrap/ModalHeader";
import Title from "react-bootstrap/ModalTitle";
import Body from "react-bootstrap/ModalBody";
import Footer from "react-bootstrap/ModalFooter";

function BaseDialog({
  show = false,
  setShow,
  title,
  enableFooter = false,
  onClickSaveButton = null,

  size = "lg",
  children,
}) {
  return (
    <Modal show={show} size={size} onHide={() => setShow(false)} centered>
      <Header closeButton>
        <Title>{title}</Title>
      </Header>
      <Body>{children}</Body>
      {enableFooter && (
        <Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={onClickSaveButton}>
            Save
          </Button>
        </Footer>
      )}
    </Modal>
  );
}

export default BaseDialog;
