import React, { Component } from "react";
import { Modal, Image, Form, Button } from "react-bootstrap";
import "./EditStatus.css";

export default class EditStatus extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }
  handleModal = visible => {
    this.setState({ show: !visible });
  };
  render() {
    const { show } = this.state;
    return (
      <>
        <img
          className="edit"
          src={require("./img/pen.png")}
          onClick={() => this.handleModal(show)}
        />
        <Modal size="sm" show={show} onHide={() => this.handleModal(show)}>
          <div className="landtick">LandTick</div>
          <Image
            className="close"
            src={require("./img/close.png")}
            onClick={() => this.handleModal(show)}
          />
          <Form.Group controlId="formBasicEmail" className="jumlah-tiket">
            <Form.Control type="text" placeholder="1" disabled />
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className="nama-pembeli">
            <Form.Control type="text" placeholder="Jauhari" disabled />
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className="pulang-pergi">
            <Form.Control type="text" placeholder="Jakarta-Surabaya" disabled />
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className="bukti-pembayaran">
            <Form.Control type="text" placeholder="bukti.jpg" disabled />
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className="bukti-pembayaran">
            <Form.Control type="text" placeholder="Approved" />
          </Form.Group>
          <Button>Save</Button>
        </Modal>
      </>
    );
  }
}
