import React from "react";
import { Card, Button } from "react-bootstrap";

const footer = () => {
  return (
    <div className="mt-3 text-white">
      <Card className="text-center" bg="dark">
        <Card.Header>Apel</Card.Header>
        <Card.Body>
          <Card.Title>Terimakasih Sudah Membeli Produk Kami</Card.Title>
          <Card.Text>
            Apel Inc. adalah perusahaan teknologi multinasional yang berpusat di
            Cupertino, California, yang merancang, mengembangkan, dan menjual
            barang elektronik konsumen, perangkat lunak komputer, dan layanan
            daring
          </Card.Text>
          <Button variant="outline-light">Kritik & Saran</Button>
        </Card.Body>
        <Card.Footer className="text-white">
          Orlynz Sambora Rahmatullah
        </Card.Footer>
      </Card>
    </div>
  );
};
export default footer;
