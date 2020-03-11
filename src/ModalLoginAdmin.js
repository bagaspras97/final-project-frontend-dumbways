import React, { Component } from "react";
import { Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class ModalLoginAdmin extends Component {
  constructor(props) {
    super(props);
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
        <Modal className="modal-login" onHide={() => false}>
          <div>
            <Modal.Header className="modal-header-login" closeButton>
              <Modal.Title className="title-login">Form Login</Modal.Title>
            </Modal.Header>
          </div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="form-email">
              <Form.Control
                type="Email"
                placeholder="Username"
                className="form-control-email"
                name="username"
                onChange={this.handleChangeInput}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="form-password">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.handleChangeInput}
              ></Form.Control>
            </Form.Group>

            <div className="div-submit">
              <Link to="/dashboard">
                <button type="submit" className="submit">
                  Submit
                </button>
              </Link>
            </div>
          </Form>
          <div className="modal-bot">
            Belum Punya Akun ? Klik <span>disini</span>
          </div>
        </Modal>
      </>
    );
  }
}
