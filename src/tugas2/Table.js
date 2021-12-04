import React from "react";
import { Table } from "react-bootstrap";

const map = ({ handphone, editData, hapusData }) => {
  return (
    <Table className="text-center" striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Handphone</th>
          <th>QTY</th>
          <th>Harga</th>
          <th>Total Harga</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {handphone.map((apel, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{apel.nama}</td>
            <td>{apel.jumlah}</td>
            <td>Rp {apel.harga}</td>
            <td>Rp {apel.harga * apel.jumlah}</td>
            <td>
              <button
                className="btn btn-outline-light"
                style={{ marginRight: 5 }}
                onClick={() => editData(apel.id)}
                type="submit"
              >
                Edit
              </button>
              <button
                className="btn btn-outline-light"
                onClick={() => hapusData(apel.id)}
                type="submit"
              >
                Hapus
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default map;
