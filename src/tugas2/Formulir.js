import React from "react";
import { Form, Button, Col, Row, Card } from "react-bootstrap";

const formulir = ({ nama, jumlah, harga, handleChange, handleSubmit, id }) => {
  return (
    <Card
      bg="dark"
      className="text-light"
      style={{ padding: "18px", borderRadius: "10px" }}
    >
      <Row>
        <Col>
          <h4 className="text-center">{id ? "Edit Data" : "Tambah Data"}</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Nama
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="nama"
                  placeholder="Nama Handphone..."
                  required
                  value={nama}
                  onChange={(event) => handleChange(event)}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                QTY
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="number"
                  name="jumlah"
                  placeholder="Jumlah..."
                  required
                  value={jumlah}
                  onChange={(event) => handleChange(event)}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Harga
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="number"
                  name="harga"
                  placeholder="harga..."
                  required
                  value={harga}
                  onChange={(event) => handleChange(event)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2"></Form.Label>
              <Col sm="10">
                <Button variant="outline-light" type="submit">
                  Tambah
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Card>
  );
};
export default formulir;
