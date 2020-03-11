import React, { Component } from "react";
import "./AddTicket.css";
import { Form, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import DropdownWrapper from "react-dropdown-wrapper";
import { addTicket } from "./_actions/addTicketA";
import { connect } from "react-redux";

class AddTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      data: [],
      name_train: "",
      id: "",
      dateStart: "",
      startStation: "",
      startTime: "",
      destinationStation: "",
      arivalTime: "",
      price: "",
      qty: ""
    };
  }
  handleModal = visible => {
    this.setState({ show: !visible });
  };

  handleSubmit = e => {
    e.preventDefault();

    const data = {
      name_train: this.state.name_train,
      id_type: {
        id: this.state.id
      },
      dateStart: this.state.dateStart,
      startStation: this.state.startStation,
      startTime: this.state.startTime,
      destinationStation: this.state.destinationStation,
      arivalTime: this.state.arivalTime,
      price: this.state.price,
      qty: this.state.qty
    };
    console.log(data);
    this.props.addTicket(data);
  };

  handleChangeInput = e => {
    console.log(e.target.name + " : " + e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { ifSuccess } = this.props.addTicket;
    return (
      <>
        <div className="header-tiket">
          <div className="nav-head" id="nav-head">
            <div className="nav-head-left">LandTick</div>
            <div className="nav-head-right-tiket">
              <div>Admin</div>
              {/* <img src={require("./img/user.png")} /> */}
              <DropdownWrapper
                closeOnEsc
                onStateChange={console.log}
                wrapperProps={{
                  className: "dropdown-wrapper"
                }}
              >
                {({ changeStatus, isShow }) => (
                  <>
                    <Image
                      id="admin"
                      src={require("./img/user.png")}
                      onClick={() => changeStatus(!isShow)}
                    />
                    {isShow && (
                      <div className="dropdown" id="dr-admin">
                        <Link to="/addticket">
                          <div className="dropdown-item dr-item-admin">
                            Tambah Tiket
                          </div>
                        </Link>
                        <Link to="/">
                          <div className="dropdown-item dr-item-admin">
                            Logout
                          </div>
                        </Link>
                      </div>
                    )}
                  </>
                )}
              </DropdownWrapper>
            </div>
          </div>
        </div>
        <div className="tambah-tiket">Tambah Tiket</div>
        <div className="form-tambah-tiket">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail" className="form-nama-kereta">
              <Form.Control
                type="text"
                placeholder="Nama Kereta"
                name="name_train"
                onChange={this.handleChangeInput}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail" className="form-nama-kereta">
              <Form.Control
                as="select"
                placeholder="Jenis Kereta"
                name="id"
                onChange={this.handleChangeInput}
              >
                <option>Jenis Kereta</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className="form-nama-kereta">
              <Form.Control
                type="date"
                placeholder="Tanggal Keberangkatan"
                name="dateStart"
                onChange={this.handleChangeInput}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail" className="form-nama-kereta">
              <Form.Control
                type="text"
                placeholder="Stasiun Keberangkatan"
                name="startStation"
                onChange={this.handleChangeInput}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail" className="form-nama-kereta">
              <Form.Control
                type="time"
                placeholder="Jam Keberangkatan"
                name="startTime"
                onChange={this.handleChangeInput}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail" className="form-nama-kereta">
              <Form.Control
                type="text"
                placeholder="Stasiun Tujuan"
                name="destinationStation"
                onChange={this.handleChangeInput}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail" className="form-nama-kereta">
              <Form.Control
                type="time"
                placeholder="Jam Tiba"
                name="arivalTime"
                onChange={this.handleChangeInput}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail" className="form-nama-kereta">
              <Form.Control
                type="text"
                placeholder="Harga Tiket"
                name="price"
                onChange={this.handleChangeInput}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail" className="form-nama-kereta">
              <Form.Control
                type="text"
                placeholder="Quantity"
                name="qty"
                onChange={this.handleChangeInput}
              />
            </Form.Group>
            <Button className="btn-save" type="submit">
              Save
            </Button>
            {ifSuccess
              ? (window.location.href = "http://localhost:3000/admin")
              : null}
          </Form>
        </div>
        <div className="footer footer-admin"></div>
      </>
    );
  }
}

const mapStateToProp = state => {
  return {
    addTicketR: state.addTicketR
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTicket: data => dispatch(addTicket(data))
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(AddTicket);
