import React, { Component } from "react";
import { Modal, Button, Form, ButtonToolbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ModalLogin.css";
import "./App.css";
import Dashboard from "./Dashboard";
import ModalDaftar from "./ModalDaftar";
import { Redirect } from "react-router-dom";
import { login } from "./_actions/login";
import { connect } from "react-redux";

class ModalLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      data: [],
      username: "",
      password: ""
    };
  }

  handleModal = visible => {
    this.setState({ show: !visible });
  };

  handleSubmit = e => {
    e.preventDefault();

    const data = {
      username: this.state.username,
      password: this.state.password
    };
    console.log(data);
    this.props.login(data);
  };

  handleChangeInput = e => {
    console.log(e.target.name + " : " + e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { show } = this.state;
    // const { data } = this.props.loginR;
    // const { message, token, status } = this.props.loginR.dataUser;
    const { data, isLogin } = this.props.loginR;
    console.log(data);
    if (isLogin === true && data.status === false) {
      window.localStorage.setItem("token", data.token);
      window.location.href = "http://localhost:3000/dashboard";
    } else if (isLogin === true && data.status === true) {
      window.localStorage.setItem("token", data.token);
      window.location.href = "http://localhost:3000/admin";
    }

    return (
      <>
        {/* {data.token != null ? <Redirect to="/dashboard" /> : null} */}
        <Button className="btn-login" onClick={() => this.handleModal(show)}>
          Login
        </Button>

        <Modal
          className="modal-login"
          show={show}
          onHide={() => this.handleModal(show)}
        >
          <div>
            <Modal.Header className="modal-header-login">
              <Modal.Title className="title-login">Form Login</Modal.Title>
            </Modal.Header>
          </div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="form-username">
              <Form.Control
                type="text"
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
              {/* <Link to="/dashboard"> */}
              <button type="submit" className="submit">
                Submit
              </button>
              {/* </Link> */}
            </div>
          </Form>
          <div className="modal-bot">
            Belum Punya Akun ? Klik
            <span> disini</span>
          </div>
        </Modal>
      </>
    );
  }
}

const mapStateToProp = state => {
  return {
    // loginR: state.loginR
    loginR: state.loginR
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: data => dispatch(login(data))
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(ModalLogin);
