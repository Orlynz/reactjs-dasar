import React from "react";

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

const total_kabeh = handphone.reduce(
  (total_harga, handphone) => total_harga + handphone.harga,
  0
);

const Map = () => {
  return (
    <div>
      <h2>Toko Ipon :)</h2>
      <table>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>QTY</th>
          <th>Harga</th>
          <th>Total Harga</th>
        </tr>
        {handphone.map((handphone, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{handphone.nama}</td>
            <td>{handphone.QTY}</td>
            <td>Rp {handphone.harga}</td>
            <td>Rp {handphone.harga * handphone.QTY}</td>
          </tr>
        ))}
      </table>

      <h2>iPhone MURAHH!!</h2>
      <ul>
        {handphone
          .filter((handphone) => handphone.harga < 15000000)
          .map((handphone, index) => (
            <p>
              {index + 1}. {handphone.nama} = Rp {handphone.harga}
            </p>
          ))}
      </ul>
      <h3>Total Bayar : Rp {total_kabeh}</h3>
    </div>
  );
};

export default Map;
