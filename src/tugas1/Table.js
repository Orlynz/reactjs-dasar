import React from "react";
import { Table, Container } from "react-bootstrap";
const handphone = [
  {
    nama: "iPhone 12 Pro",
    QTY: 6,
    harga: 18299000,
  },
  {
    nama: "iPhone 13 Pro Max",
    QTY: 8,
    harga: 19999000,
  },
  {
    nama: "iPhone SE",
    QTY: 15,
    harga: 10499000,
  },
  {
    nama: "iPhone 11",
    QTY: 10,
    harga: 14999000,
  },
  {
    nama: "iPhone XS Max",
    QTY: 13,
    harga: 21599000,
  },
  {
    nama: "iPhone XR",
    QTY: 21,
    harga: 14699000,
  },
  {
    nama: "iPhone X",
    QTY: 11,
    harga: 17399000,
  },
  {
    nama: "iPhone 13 Mini",
    QTY: 9,
    harga: 18999000,
  },
  {
    nama: "iPhone 8 Plus",
    QTY: 16,
    harga: 13499000,
  },
  {
    nama: "iPhone 8",
    QTY: 20,
    harga: 12500000,
  },
];
const map = () => {
  return (
    <Container>
      <Table className="text-center" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Handphone</th>
            <th>QTY</th>
            <th>Harga</th>
            <th>Total Harga</th>
          </tr>
        </thead>
        <tbody>
          {handphone.map((handphone, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{handphone.nama}</td>
              <td>{handphone.QTY}</td>
              <td>Rp {handphone.harga}</td>
              <td>Rp {handphone.harga * handphone.QTY}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default map;
