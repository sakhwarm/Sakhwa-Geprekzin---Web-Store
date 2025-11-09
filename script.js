// kategori produk
const buttons = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".product");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const kategori = button.dataset.filter;
    products.forEach((prod) => {
      if (kategori === "all" || prod.dataset.category === kategori) {
        prod.style.display = "block";
      } else {
        prod.style.display = "none";
      }
    });
  });
});

const cartList = document.getElementById("cartList");
const clearBtn = document.getElementById("clearCart");
const addBtns = document.querySelectorAll(".addBtn");
const cartSection = document.querySelector(".cart-section");
const totalHargaEl = document.getElementById("totalHarga");
let cartItems = [];

//untuk menghitung total
function updateTotal() {
  let total = 0;
  cartItems.forEach((item) => {
    // ngambil angka dari teks harga, contoh: "Rp 120.000" jadi 120000
    const angka = parseInt(item.harga.replace(/[^0-9]/g, ""));
    if (!isNaN(angka)) {
      total += angka;
    }
  });
  totalHargaEl.textContent = "Total: Rp " + total.toLocaleString("id-ID");
}

//tambah ke keranjang
addBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.parentElement;
    const nama = card.querySelector("h3").textContent;
    const harga = card.querySelector("p").textContent;

    // ngecek produk double ga
    if (cartItems.some((item) => item.nama === nama)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Produk sudah ada di keranjang!",
        confirmButtonColor: "#6c63ff",
      });
      return;
    }

    // simpan data produk
    const item = { nama, harga };
    cartItems.push(item);

    // menampilkan produk di list
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${nama} - <strong>${harga}</strong></span>
      <button class="hapusBtn">Hapus</button>
    `;
    cartList.appendChild(li);

    // update total harga
    updateTotal();

    // auto scroll ke keranjang
    cartSection.scrollIntoView({ behavior: "smooth" });

    // tombol hapus item
    li.querySelector(".hapusBtn").addEventListener("click", () => {
      Swal.fire({
        title: "Yakin ingin menghapus produk ini?",
        showCancelButton: true,
        confirmButtonText: "Hapus",
        cancelButtonText: "Batal",
        confirmButtonColor: "#6c63ff",
        cancelButtonColor: "#6e6e6e",
      }).then((result) => {
        if (result.isConfirmed) {
          li.remove();
          cartItems = cartItems.filter((i) => i.nama !== nama);
          updateTotal();

          Swal.fire({
            icon: "success",
            title: "Berhasil dihapus!",
            text: "Produk telah dihapus dari keranjang.",
            confirmButtonColor: "#6c63ff",
            timer: 1500,
          });
        }
      });
    });
  });
});

// untuk hapus semua produk
clearBtn.addEventListener("click", () => {
  Swal.fire({
    title: "Hapus semua produk?",
    showCancelButton: true,
    confirmButtonText: "Ya, hapus semua",
    cancelButtonText: "Batal",
    confirmButtonColor: "#6c63ff",
    cancelButtonColor: "#6e6e6e",
  }).then((result) => {
    if (result.isConfirmed) {
      cartList.innerHTML = "";
      cartItems = [];
      updateTotal();

      Swal.fire({
        icon: "success",
        title: "Semua produk berhasil dihapus!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  });
});
