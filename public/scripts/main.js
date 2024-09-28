/*
 * Contoh kode untuk membaca query parameter,
 * Siapa tau relevan! :)
 * */

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

// Coba olah data ini hehe :)

/*
 * Contoh penggunaan DOM di dalam class
 * */
const app = new App();

app.loadButton.addEventListener("click", () => {
  app.clear();
  app.loadFilter().then(() => app.run());
});

app.init();

const loadButton = document.getElementById("load-btn");
const tipeDriver = document.getElementById("tipeDriver");
const tanggal = document.getElementById("tanggal");
const waktuJemput = document.getElementById("waktuJemput");
const jumlahPenumpang = document.getElementById("jumlahPenumpang");

function validateForm() {
  const isTipeDriverSelected = tipeDriver.value !== "default";
  const isTanggalSelected = tanggal.value !== "";
  const isWaktuSelected = waktuJemput.value !== "false";

  if (isTipeDriverSelected && isTanggalSelected && isWaktuSelected) {
    loadButton.disabled = false;
  } else {
    loadButton.disabled = true;
  }
}

tipeDriver.addEventListener("change", validateForm);
tanggal.addEventListener("change", validateForm);
waktuJemput.addEventListener("change", validateForm);
jumlahPenumpang.addEventListener("input", validateForm);

window.addEventListener("load", () => {
  validateForm();
});
