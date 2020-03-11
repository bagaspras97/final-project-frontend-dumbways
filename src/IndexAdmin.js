import React, { Component } from "react";
import "./IndexAdmin.css";
import EditStatus from "./EditStatus";
import TicketDetail from "./TicketDetail";
import ModalDaftar from "./ModalDaftar";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import DropdownWrapper from "react-dropdown-wrapper";

export default class IndexAdmin extends Component {
  render() {
    return (
      <>
        <div className="header-tiket">
          <div className="nav-head" id="nav-head">
            <div className="nav-head-left">LandTick</div>
            <div className="nav-head-right-tiket">
              <div>Admin</div>
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
        <div className="transaksi">List Transaksi</div>
        <div className="table-transaksi">
          <div className="baris-head">
            <div className="nomor">No</div>
            <div className="users">Users</div>
            <div className="tiket">Tiket</div>
            <div className="bukti-transfer">Bukti Transfer</div>
            <div className="status-payment">Status Payment</div>
            <div className="action">Action</div>
          </div>
          <div className="baris">
            <div className="nomor">1</div>
            <div className="users">Jauhari</div>
            <div className="tiket">Surabaya-Jakarta</div>
            <div className="bukti-transfer">bukti.jpg</div>
            <div className="status-payment">Approved</div>
            <TicketDetail />
            <EditStatus />
            <img className="trash" src={require("./img/delete.png")} />
            <div></div>
          </div>
        </div>
        <div className="footer footer-admin"></div>
      </>
    );
  }
}
