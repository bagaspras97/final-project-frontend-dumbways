import React, { Component } from "react";
import "./Home.css";
import "./Dashboard.css";
import { Button, Form, Image } from "react-bootstrap";
import DropdownWrapper from "react-dropdown-wrapper";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="nav-head">
            <div className="nav-head-left">LandTick</div>
            <div className="nav-head-right">
              <div className="nama">Jauhari</div>

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
                      className="user"
                      src={require("./img/user.png")}
                      onClick={() => changeStatus(!isShow)}
                    />
                    {isShow && (
                      <div className="dropdown">
                        <div className="dropdown-item">Tiket Saya</div>
                        <Link to="/myticket">
                          <div className="dropdown-item">Payment</div>
                        </Link>
                        <div className="dropdown-item">Logout</div>
                      </div>
                    )}
                  </>
                )}
              </DropdownWrapper>
            </div>
          </div>
          <div className="mid-head">
            <div className="mid-head-left satu">
              Selamat Pagi, Ticket Seekers!
            </div>
            <div className="mid-head-left dua">
              Ingin Pulkam dengan Good Deal ?
            </div>
            <div className="mid-head-left tiga">
              Masuk atau Daftar Sekarang ! !
            </div>
            <div className="foto1"></div>
            <div className="foto2"></div>
          </div>
        </div>

        <div className="content-1">
          <div className="content-1-left">
            <div className="content-1-left-top">
              <div className="train-logo"></div>
              <div className="tiket">Tiket Kereta Api</div>
            </div>
          </div>
          <div className="content-1-right">
            <div className="title">Tiket Kereta Api</div>
            <div className="asal">Asal</div>
            <Form.Control
              className="form-asal"
              type="email"
              placeholder="Jakarta"
            />
            <div className="tanggal-berangkat">Tanggal Berangkat</div>
            <Form.Control
              className="form-tanggal-berangkat"
              type="email"
              placeholder="DD-MM-YY"
            />
            <Form.Check
              className="checkbox"
              type="checkbox"
              label="Pulang-Pergi"
            />
            <div className="rectangle">
              <Image src={require("./img/swap.png")} />
            </div>
            <div className="tujuan">Tujuan</div>
            <Form.Control
              className="form-tujuan"
              type="email"
              placeholder="Surabaya"
            />
            <div className="dewasa">Dewasa</div>
            <div className="bayi">Bayi</div>
            <input placeholder="0" className="increament" type="number" />
            <input placeholder="0" className="decreament" type="number" />
            <Button className="cari-tiket">Cari Tiket</Button>
          </div>
        </div>
        <div className="content-2">
          <div className="content-2-list">
            <div className="content-2-list-header">
              <div className="nama">Nama Kereta</div>
              <img className="right1" src={require("./img/right.png")} />
              <div className="berangkat">Berangkat</div>
              <img className="right2" src={require("./img/right.png")} />
              <div className="tiba">Tiba</div>
              <img className="right3" src={require("./img/right.png")} />
              <div className="durasi">Durasi</div>
              <div className="harga">Harga Per Orang</div>
            </div>
            <div className="content-2-list-ket satu">
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
            <div className="content-2-list-ket dua">
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
            <div className="content-2-list-ket tiga">
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
          </div>
        </div>

        <div className="footer"></div>
      </div>
    );
  }
}
