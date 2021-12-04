import React from "react";
import NavbarComponent from "./NavbarComponent";
import Table from "./Table";
import Formulir from "./Formulir";
import Footer from "./Footer";

export default class Crud extends React.Component {
  render() {
    return (
      <div style={{ background: "silver" }}>
        <NavbarComponent />
        <div className="Container mt-5 pt-2"></div>
        <h1 style={{ fontFamily: "cursive" }}>WELCOME TO MY SHOP DUDE :)</h1>
        <Formulir />
        <Table />
        <Footer />
      </div>
    );
  }
}
