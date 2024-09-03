# Pengujian Otomatis untuk Proyek SCONE

## Deskripsi

Pengujian otomatis ini dirancang untuk proyek SCONE menggunakan Cypress. Tujuan dari pengujian ini adalah untuk memastikan bahwa aplikasi SCONE berfungsi dengan baik dan benar melalui berbagai skenario end-to-end. Cypress adalah alat pengujian end-to-end yang kuat yang memungkinkan pengujian aplikasi web dengan cepat dan andal.

## Instalasi

Untuk memulai, Anda perlu menginstal Cypress dan dependensi lainnya. Ikuti langkah-langkah berikut:

1. **Clone repositori ini:**

   ```bash
   git clone https://github.com/krivson/scone-cypress.git
   ```

2. **Masuk ke direktori proyek:**

   ```bash
   cd scone-cypress
   ```

3. **Instal dependensi:**

   ```bash
   npm install
   ```

   Ini akan menginstal Cypress serta dependensi lain yang diperlukan untuk proyek ini.

## Menjalankan Pengujian

Setelah instalasi, Anda dapat menjalankan pengujian dengan menggunakan perintah berikut:

```bash
npx cypress open
```

Perintah ini akan membuka antarmuka Cypress dan memungkinkan Anda memilih pengujian untuk dijalankan secara interaktif.

Jika Anda ingin menjalankan pengujian dalam mode headless (tanpa antarmuka grafis), gunakan perintah berikut:

```bash
npx cypress run
```

## Struktur Proyek

- `cypress/` - Folder ini berisi semua pengujian Cypress, termasuk file spesifikasi dan konfigurasi.

  - `e2e/` - Tempat file pengujian end-to-end disimpan.
  - `fixtures/` - Berisi data uji statis yang digunakan dalam pengujian.
  - `support/` - Berisi file utilitas dan perintah khusus yang digunakan dalam pengujian.

- `cypress.config.js` - File konfigurasi Cypress.

## Menulis Pengujian

Pengujian Cypress ditulis dalam file JavaScript di dalam folder `cypress/e2e/`. Anda dapat menulis pengujian dengan menggunakan API Cypress untuk mengontrol aplikasi dan memverifikasi perilakunya.

Contoh pengujian sederhana:

```javascript
describe("Halaman Utama", () => {
  it("Harus memuat halaman dengan benar", () => {
    cy.visit("/");
    cy.contains("Selamat datang di SCONE");
  });
});
```

## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, silakan buat pull request atau buka isu untuk mendiskusikan perubahan yang ingin Anda buat.