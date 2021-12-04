import React from "react";
import { Form, Button, Col, Row, Container, Card } from "react-bootstrap";

const formulir = () => {
  return (
    <div className="mt-3 mb-3" style={{ margin: "300px" }}>
      <Container>
        <Card bg="dark" className="text-light" style={{ padding: "18px" }}>
          <Row>
            <Col>
              <h4 className="text-center">Tambah Handphone</h4>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form>
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
                      type="text"
                      name="deskripsi"
                      placeholder="Jumlah..."
                      required
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
                      placeholder="harga..."
                      required
                      name="harga"
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
      </Container>
    </div>
  );
};
export default formulir;
