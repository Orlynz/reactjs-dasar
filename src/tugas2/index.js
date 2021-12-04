import React from "react";
import NavbarComponent from "./NavbarComponent";
import Table from "./Table";
import Formulir from "./Formulir";
import Footer from "./Footer";

export default class Crud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handphone: [
        {
          nama: "iPhone 12 Pro",
          jumlah: 6,
          harga: 18299000,
        },
        {
          nama: "iPhone 13 Pro Max",
          jumlah: 8,
          harga: 19999000,
        },
        {
          nama: "iPhone SE",
          jumlah: 15,
          harga: 10499000,
        },
        {
          nama: "iPhone 11",
          jumlah: 10,
          harga: 14999000,
        },
        {
          nama: "iPhone XS Max",
          jumlah: 13,
          harga: 21599000,
        },
        {
          nama: "iPhone XR",
          jumlah: 21,
          harga: 14699000,
        },
        {
          nama: "iPhone X",
          jumlah: 11,
          harga: 17399000,
        },
        {
          nama: "iPhone 13 Mini",
          jumlah: 9,
          harga: 18999000,
        },
        {
          nama: "iPhone 8 Plus",
          jumlah: 16,
          harga: 13499000,
        },
        {
          nama: "iPhone 8",
          jumlah: 20,
          harga: 12500000,
        },
      ],
      nama: "",
      jumlah: "",
      harga: "",
      id: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.id === "") {
      this.setState({
        handphone: [
          ...this.state.handphone,
          {
            id: this.state.handphone.length + 1,
            nama: this.state.nama,
            jumlah: this.state.jumlah,
            harga: this.state.harga,
          },
        ],
      });
    } else {
      const handphoneYangSelainDipilih = this.state.handphone
        .filter((apel) => apel.id !== this.state.id)
        .map((filterApel) => {
          return filterApel;
        });
      this.setState({
        handphone: [
          ...handphoneYangSelainDipilih,
          {
            id: this.state.handphone.length + 1,
            nama: this.state.nama,
            jumlah: this.state.jumlah,
            harga: this.state.harga,
          },
        ],
      });
    }
    this.setState({
      nama: "",
      jumlah: "",
      harga: "",
      id: "",
    });
  };
  editData = (id) => {
    const handphoneYangDipilih = this.state.handphone
      .filter((apel) => apel.id === id)
      .map((filterApel) => {
        return filterApel;
      });
    this.setState({
      nama: handphoneYangDipilih[0].nama,
      jumlah: handphoneYangDipilih[0].jumlah,
      harga: handphoneYangDipilih[0].harga,
      id: handphoneYangDipilih[0].id,
    });
  };
  hapusData = (id) => {
    const handphoneBaru = this.state.handphone
      .filter((apel) => apel.id !== id)
      .map((filterApel) => {
        return filterApel;
      });
    this.setState({
      handphone: handphoneBaru,
    });
  };

  render() {
    return (
      <div style={{ background: "silver" }}>
        <NavbarComponent />
        <div className="Container mt-5 pt-2"></div>
        <h1 style={{ fontFamily: "cursive", textAlign: "center" }}>
          WELCOME TO MY SHOP DUDE :)
        </h1>
        <div className="container mt-2">
          <Formulir
            style={{ marginBottom: 3 }}
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
        <div className="container mt-4">
          <Table
            handphone={this.state.handphone}
            hapusData={this.hapusData}
            editData={this.editData}
          />
        </div>
        <Footer />
      </div>
    );
  }
}
