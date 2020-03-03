import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ModalLogin.css";
import "./App.css";
import Dashboard from "./Dashboard";

export default class ModalLogin extends Component {
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
        <Button className="btn-login" onClick={() => this.handleModal(show)}>
          Login
        </Button>

        <Modal
          className="modal-login"
          show={show}
          onHide={() => this.handleModal(show)}
        >
          <div>
            <Modal.Header className="modal-header-login" closeButton>
              <Modal.Title className="title-login">Form Login</Modal.Title>
            </Modal.Header>
          </div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="form-email">
              <Form.Control
                type="Email"
                placeholder="Email"
                className="form-control-email"
                name="email"
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
        </Modal>
      </>
    );
  }
}
