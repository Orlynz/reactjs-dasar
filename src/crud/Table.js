import React from "react";
import { Table, Container } from "react-bootstrap";

const table = ({ bukus, editData, hapusData }) => {
  return (
    <Container>
      <Table striped bordered hover size="sm" className="text-center">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Buku</th>
            <th>Deskripsi</th>
            <th>Harga Buku</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {bukus.map((buku, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{buku.nama}</td>
                <td>{buku.deskripsi}</td>
                <td>Rp {buku.harga}</td>
                <td>
                  <button
                    className="btn btn-warning mr-1"
                    style={{ marginRight: 5 }}
                    onClick={() => editData(buku.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger mr-1"
                    onClick={() => hapusData(buku.id)}
                  >
                    Ilang
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default table;
