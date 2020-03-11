import React, { Component } from "react";
import { Modal, Image, Form, Button } from "react-bootstrap";
import "./EditStatus.css";
import "./TicketDetailCustom.css";

export default class TicketDetail extends Component {
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
          className="search"
          src={require("./img/search.png")}
          onClick={() => this.handleModal(show)}
        />
        <Modal size="md" show={show} onHide={() => this.handleModal(show)}>
          <div className="landtick">LandTick</div>
          <Image
            className="close"
            src={require("./img/close.png")}
            onClick={() => this.handleModal(show)}
          />
          <div id="invoice-admin">INVOICE</div>
          <div id="kode-invoice">Kode Invoice : INV0101</div>
          <div id="kereta-tanggal">
            <div id="kereta">Kereta Api</div>
            <div id="tanggal">Saturday,29 Februari 2020</div>
          </div>
          <div className="rectangle" id="custom-rectangle-top"></div>
          <div className="garis" id="custom-garis"></div>
          <div className="rectangle" id="custom-rectangle-bot"></div>
          <div id="kereta-kelas">
            <div id="kereta">Argo Wilis</div>
            <div id="kelas">Eksekutif</div>
          </div>
          <Image id="barcode" src={require("./img/barcode1.png")} />
          <div id="upload-proof"></div>
          <div id="tanggal-berangkat">
            <div id="jam">05.00</div>
            <div id="tanggal">22 Februari</div>
          </div>
          <div id="stasiun-berangkat">
            <div id="kota">Jakarta</div>
            <div id="stasiun">Stasiun Gambir</div>
          </div>
          <div id="tanggal-tiba">
            <div id="jam">10.00</div>
            <div id="tanggal">22 Februari</div>
          </div>
          <div id="stasiun-tiba">
            <div id="kota">Surabaya</div>
            <div id="stasiun">Stasiun Surabaya</div>
          </div>
          <div id="batas-top"></div>
          <div id="header-rincian">
            <div id="no-ktp">No. Tanda Pengenal</div>
            <div id="nama-pemesan">Nama Pemesan</div>
            <div id="no-hp">No. Handphone</div>
            <div id="email">Email</div>
          </div>
          <div id="isi-rincian">
            <div id="no-ktp">31175033003970001</div>
            <div id="nama-pemesan">Jauhari</div>
            <div id="no-hp">08123456789</div>
            <div id="email">jauhari@gmail.com</div>
          </div>
          <div id="batas-bot"></div>
          <div id="total-harga">
            <div id="total">Total</div>
            <div id="harga">Rp 250.000</div>
          </div>
        </Modal>
      </>
    );
  }
}
