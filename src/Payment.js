import React, { Component } from "react";
import "./Payment.css";
import { Image } from "react-bootstrap";
import ModalKonfirmasi from "./ModalKonfirmasi";
import DropdownWrapper from "react-dropdown-wrapper";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import find from "./_actions/getUserA";
import { connect } from "react-redux";

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  }
  render() {
    const { dataLu } = this.props.findUser;
    console.log("INI => ", this.props.findUser);
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
        <div className="mid-payment">
          <div className="invoice">Invoice</div>
          <div className="invoice-left">
            <div className="invoice-left-top">
              <div className="alert">
                <img src={require("./img/alert.png")} />
                <div className="alert-ket">
                  Silakan melakukan pembayaran memalui M-Banking, E-Banking dan
                  ATM Ke No.rek Yang Tertera.
                </div>
                <div className="alert-rek">No.rek: 1234567890</div>
              </div>
            </div>
            <div className="invoice-left-mid">
              <div className="detail"></div>
              <div className="landtick">LandTick</div>
              <div className="tanda-pengenal">No. Tanda Pengenal</div>
              <div className="nama-pemesan">Nama Pemesan</div>
              <div className="no-hp">No. Handphone</div>
              <div className="email">Email</div>
              <div className="batas-invoice"></div>
              <div className="ktp">31175033003970001</div>
              <div className="nama">{dataLu.username}</div>
              <div className="nomor">{dataLu.phone}</div>
              <div className="nama-email-invoice">{dataLu.email}</div>
            </div>
            <div className="invoice-left-bot">
              <div className="rincian">Rincian Harga</div>
              <div className="detail-rincian">
                <p className="isi-detail-rincian">Argo Wilis (Dewasa) x1</p>
                <div className="detail-rincian-harga">Rp 250.000</div>
              </div>
              <div className="total">
                <div className="total1">Total</div>
                <div className="total-harga">RP 250.000</div>
              </div>

              <div className="img-payment">
                <input
                  type="file"
                  onChange={this.handleChange}
                  className="input-img"
                />
                <img src={this.state.file} id="img-upload" />
              </div>

              <div className="upload-payment">Upload Payment Proof</div>
            </div>
            <ModalKonfirmasi />
          </div>
          <div className="invoice-right">
            <div className="invoice-right-head">
              <div className="kereta">Kereta Api</div>
              <div className="tanggal">Saturday 29 Februari 2020</div>
              <img src={require("./img/barcode.png")} />
            </div>
            <div className="invoice-right-mid">
              <div className="nama-kereta">Argo Wilis</div>
              <div className="nama-kelas">Eksekutif</div>
              <div className="bulet "></div>
              <div className="garis"></div>
              <div className="bulet bot"></div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Payment);
