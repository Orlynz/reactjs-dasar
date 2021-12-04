import React from "react";

const makanan = [
  {
    nama: "Soto",
    harga: 12000,
  },
  {
    nama: "Bakso",
    harga: 10000,
  },
  {
    nama: "Mie Ayam",
    harga: 15000,
  },
  {
    nama: "Nasi Goreng",
    harga: 20000,
  },
];

const total_bayar = makanan.reduce(
  (total_harga, makanan) => total_harga + makanan.harga,
  0
);

const Map = () => {
  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {makanan.map((makanan, index) => (
          <p>
            {index + 1}. {makanan.nama} = Rp {makanan.harga}
          </p>
        ))}
      </ul>
      <h2>Map Filter Harga yang lebih dari 11000</h2>
      <ul>
        {makanan
          .filter((makanan) => makanan.harga > 11000)
          .map((makanan, index) => (
            <p>
              {index + 1}. {makanan.nama} = Rp {makanan.harga}
            </p>
          ))}
      </ul>
      <h3>Total Bayar : Rp {total_bayar}</h3>
    </div>
  );
};

export default Map;
