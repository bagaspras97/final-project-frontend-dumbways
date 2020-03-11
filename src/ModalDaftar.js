import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./App.css";
import "./ModalLogin.css";
import "./ModalDaftar.css";
import { Redirect } from "react-router-dom";
import { register } from "./_actions/register";
import { connect } from "react-redux";

class ModalDaftar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      data: [],
      name: "",
      username: "",
      email: "",
      password: "",
      gender: "",
      phone: "",
      address: ""
    };
  }

  handleModal = visible => {
    this.setState({ show: !visible });
  };

  handleSubmit = e => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      gender: this.state.gender,
      phone: this.state.phone,
      address: this.state.address
    };
    console.log(data);
    this.props.register(data);
  };

  handleChangeInput = e => {
    console.log(e.target.name + " : " + e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { show } = this.state;
    const { data } = this.props.registerR;

    return (
      <>
        {data.token != null ? <Redirect to="/dashboard" /> : null}
        <Button className="btn-daftar" onClick={() => this.handleModal(show)}>
          Daftar
        </Button>
        <Modal
          className="modal-login"
          show={show}
          onHide={() => this.handleModal(show)}
        >
          <div>
            <Modal.Header className="modal-header-login">
              <Modal.Title className="title-login">Form Daftar</Modal.Title>
            </Modal.Header>
          </div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="form-nama-lengkap">
              <Form.Control
                type="text"
                placeholder="Nama Lengkap"
                className="form-control-email"
                name="name"
                onChange={this.handleChangeInput}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="form-username">
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                onChange={this.handleChangeInput}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="form-email">
              <Form.Control
                type="text"
                placeholder="Email"
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
            <Form.Group className="form-jenis-kelamin">
              <Form.Control
                as="select"
                placeholder="Jenis Kelamin"
                name="gender"
                onChange={this.handleChangeInput}
              >
                <option>Jenis Kelamin</option>
                <option>Laki-Laki</option>
                <option>Perempuan</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="form-phone">
              <Form.Control
                type="text"
                placeholder="No. Telepon"
                name="phone"
                onChange={this.handleChangeInput}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="form-alamat">
              <Form.Control
                as="textarea"
                placeholder="Alamat"
                name="address"
                onChange={this.handleChangeInput}
                rows="3"
              ></Form.Control>
            </Form.Group>

            <div className="div-submit">
              {/* <Link to="/dashboard"> */}
              <button type="submit" className="submit">
                Submit
              </button>
              {/* </Link> */}
            </div>
          </Form>
        </Modal>
      </>
    );
  }
}
const mapStateToProp = state => {
  return {
    registerR: state.registerR
  };
};

const mapDispatchToProps = dispatch => {
  return {
    register: data => dispatch(register(data))
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(ModalDaftar);
