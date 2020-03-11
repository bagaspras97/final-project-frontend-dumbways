import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import "./ModalKonfirmasi.css";
import { Link } from "react-router-dom";

export default class ModalKonfirmasi extends Component {
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
        <Button className="btn-payment" onClick={() => this.handleModal(show)}>
          Bayar Sekarang
        </Button>
        <Modal
          id="modalbayar"
          show={show}
          onHide={() => this.handleModal(show)}
        >
          <div id="bayar">
            Pembayaran Anda Akan di Konfirmasi dalam 1 x 24 Jam Untuk melihat
            pesanan Klik{" "}
            <Link to="/konfirmasitiket">
              <span>Disini </span>
            </Link>
            Terimakasih
          </div>
        </Modal>
      </>
    );
  }
}
