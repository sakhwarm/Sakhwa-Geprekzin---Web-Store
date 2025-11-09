<?php
$geprekzin= [
    [
      "nama" =>"Paket Geprekzin Nasi", 
      "gambar" =>"img/geprek1.jpg", 
      "harga" => 15000, 
      "kategori" => "Paket Geprekzin"
    ],
    [
      "nama" => "Paket Geprekzin Mie", 
      "gambar" => "img/geprek2.jpg", 
      "harga" => 13000, 
      "kategori" => "Paket Geprekzin"
    ],
    [
      "nama" => "Sambal Geprekzin", 
      "gambar" => "img/geprek3.jpg", 
      "harga" => 5000, 
      "kategori" => "Geprekzin Aja"
    ],
    [
      "nama" => "Ayam Geprekzin", 
      "gambar" => "img/geprek4.jpg", 
      "harga" => 10000, 
      "kategori" => "Geprekzin Aja"
    ],
    [
      "nama" => "Nugget Geprekzin", 
      "gambar" => "img/geprek5.jpg", 
      "harga" => 10000, 
      "kategori" => "Geprekzin Aja"
    ],
    [
      "nama" => "Ayam Mozarella Geprekzin", 
      "gambar" => "img/geprek6.jpg", 
      "harga" => 12000, 
      "kategori" => "Geprekzin Aja"
      ]
];
?>

<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sakhwa Geprekzin</title>
  <link rel="stylesheet" href="style.css" />
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>
<body>
  <header>
    <div class="brand">Sakhwa Geprekzin</div>
  </header>

  <section class="hero">
    <h1>Selamat Datang di Web Store Sakhwa Geprekzin</h1>
    <p>Pilih Geprekzin favoritmu!</p>
    <div class="filter-buttons">
      <button class="filter-btn active" data-filter="all">Tampilkan Semua</button>
      <button class="filter-btn" data-filter="Paket Geprekzin">Paket Geprekzin</button>
      <button class="filter-btn" data-filter="Geprekzin Aja">Geprekzin Aja</button>
    </div>
  </section>

  <main class="product-grid">
    <?php foreach ($geprekzin as $geprek): ?>
      <div class="product" data-category="<?= $geprek['kategori'] ?>">
        <img src="<?= $geprek['gambar'] ?>" alt="<?= $geprek['nama'] ?>">
        <h3><?= $geprek['nama'] ?></h3>
        <p>Rp <?= number_format($geprek['harga'], 0, ',', '.') ?></p>
        <button class="addBtn" data-name="<?= $geprek['nama'] ?>">Tambah ke Keranjang</button>
      </div>
    <?php endforeach; ?>
  </main>

  <section class="cart-section">
    <h2>Keranjang Pesanan</h2>
    <ul id="cartList"></ul>
    <h3 id="totalHarga">Total: Rp 0</h3>
    <button id="clearCart">Hapus Semua</button>
  </section>

  <script src="script.js"></script>
</body>
</html>
