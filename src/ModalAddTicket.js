import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import "./ModalKonfirmasi.css";
import { Link } from "react-router-dom";
import "./Dashboard.css";

export default class ModalAddTicket extends Component {
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
        {/* <Button className="btn-payment" onClick={() => this.handleModal(show)}>
          Bayar Sekarang
        </Button> */}

        <div
          className="content-2-list-ket satu"
          onClick={() => this.handleModal(show)}
        >
          <div className="kereta">
            <div>Argo Wilis</div>
            <span>Eksekutif</span>
          </div>
          <div className="jam-berangkat">
            <div>05.00</div>
            <span>Gambir</span>
          </div>
          <div className="jam-tiba">
            <div>10.00</div>
            <span>Surabaya</span>
          </div>
          <div className="durasi">5 jam</div>
          <div className="harga">Rp 250.000</div>
        </div>

        <Modal
          id="modalbayar"
          show={show}
          onHide={() => this.handleModal(show)}
        >
          <div id="bayar">
            Tiket anda berhasil di tambahkan silakan segera melakukan pembayaran
            <Link to="/konfirmasitiket">
              <Link to="/myticket">
                <span> Disini</span>
              </Link>
            </Link>
          </div>
        </Modal>
      </>
    );
  }
}
