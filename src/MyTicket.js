import React, { Component } from "react";
import "./MyTicket.css";
import { Button } from "react-bootstrap";

export default class MyTicket extends Component {
  render() {
    return (
      <div>
        <div className="header-tiket">
          <div className="nav-head ">
            <div className="nav-head-left">LandTick</div>
            <div className="nav-head-right-tiket">
              <div> Jauhari</div>
              <img src={require("./img/user.png")} />
            </div>
          </div>
        </div>
        <div className="content-tiket">
          <div className="content-tiketsaya">
            <div className="title">Tiket Saya</div>
            <div className="isi">
              <div className="tiket-landtick">LandTick</div>
              <div className="isi-tanggal">
                <div>Kereta Api</div>
                <span>Saturday, 29 Februari 2070</span>
              </div>
              <div className="isi-ket">
                <div className="nama-kereta">Argo Wilis</div>
                <div className="nama-kelas">Eksekutif</div>
                <div className="status">pending</div>
                <div className="bulet atas"></div>
                <div className="garis"></div>
                <div className="bulet bawah"></div>
                <div className="keberangkatan">
                  <div>05.00</div>
                  <span>29 Februari 2020</span>
                </div>
                <div className="tiba-tujuan">
                  <div>10.00</div>
                  <span>29 Februari 2020</span>
                </div>
                <div className="stasiun-keberangkatan">
                  <div>Jakarta</div>
                  <span>Stasiun Gambir</span>
                </div>
                <div className="stasiun-tujuan">
                  <div>Surabaya</div>
                  <span>Stasiun Surabaya</span>
                </div>
                <div className="tanda-pengenal">No. Tanda Pengenal</div>
                <div className="nama-pemesan">Nama Pemesan</div>
                <div className="no-hp">No. Handphone</div>
                <div className="email">Email</div>
                <div className="batas"></div>
                <Button className="btn-bayar">Bayar Sekarang</Button>
              </div>
              <div className="ktp">31175033003970001</div>
              <div className="nama">Jauhari</div>
              <div className="nomor">08123456789</div>
              <div className="nama-email">Jauhari@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
