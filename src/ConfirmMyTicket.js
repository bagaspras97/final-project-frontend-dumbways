import React, { Component } from "react";
import "./MyTicket.css";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ConfirmMyTicket.css";
import DropdownWrapper from "react-dropdown-wrapper";
import find from "./_actions/getUserA";
import { connect } from "react-redux";

class ConfirmMyTicket extends Component {
  render() {
    const { dataLu } = this.props.findUser;
    return (
      <div>
        <div className="nav-head" id="nav-head">
          <Link to="/dashboard">
            <div className="nav-head-left">LandTick</div>
          </Link>
          <div className="nav-head-right">
            <div className="nama">{dataLu.username}</div>

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
                      <Link to="/myticket">
                        <div className="dropdown-item">Tiket Saya</div>
                      </Link>
                      <Link to="/payment">
                        <div className="dropdown-item">Payment</div>
                        <div className="line-border"></div>
                      </Link>
                      <Link to="/">
                        <div className="dropdown-item">Logout</div>
                      </Link>
                    </div>
                  )}
                </>
              )}
            </DropdownWrapper>
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
                <img
                  className="gambar-barcode"
                  src={require("./img/capture.png")}
                />
              </div>
              <div className="isi-ket">
                <div className="nama-kereta">Argo Wilis</div>
                <div className="nama-kelas">Eksekutif</div>
                <div className="status">approved</div>
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
              </div>
              <div className="ktp">31175033003970001</div>
              <div className="nama">{dataLu.username}</div>
              <div className="nomor">{dataLu.phone}</div>
              <div className="nama-email">{dataLu.email}</div>
            </div>
          </div>
        </div>
        <div className="footer footer-admin"></div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("DATA REDUX", state);
  return {
    findUser: state.findUser
  };
};
const mapDispatchToProps = dispatch => {
  return {
    find: data => dispatch(find(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ConfirmMyTicket);
