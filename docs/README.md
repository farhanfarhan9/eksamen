## Dokumentasi Project

### Development

Ketik `yarn install` di root project. Setelah itu copy **.env.example** menjadi **.env** dan ubah konfigurasi HOST dan PORT webpack dev server sesuai yang diinginkan di dalam file **.env**. Untuk webpack, babel, postcss tidak perlu dikonfigurasi dan cukup edit file yang berada di dalam folder **./src**.

Untuk menjalankan webpack-dev-server, ketik `yarn dev` setelah itu akses development server yang berada di http://localhost:3000 dengan asumsi file .env sesuai dengan .env.example.

### Struktur Folder

| nama | deskripsi |
| ------------ | ------------ |
| docs/ | folder dokumentasi|
| src/ | lokasi kode project |
| .babelrc | file konfigurasi babel |
| .env.example | template dotenv |
| .eslintrc.js | file konfigurasi eslint |
| .gitignore | kofigurasi ignore files/folders ketika commit |
| LICENSE | Lisensi |
| package.json | file konfigurasi project npm |
| postcss.config.js | file konfigurasi postcss |
| README.md | project's readme |
| tailwind.config.js | file konfigurasi tailwindcss |
| webpack.config.js | file konfigurasi webpack |
| yarn.lock | lockdown versi dependensi di semua contributor |

#### src/
Di dalam folder ini masih ada folder-folder lain, deskripsinya sebagai berikut:

| nama | deskripsi |
| ------------ | ------------ |
| api/ | folder untuk kode yang berhubungan dengan server atau api termasuk model dan routes api |
| cli/ | berisikan file command line |
| components/ | berisikan file component Vue. Untuk halaman ada di folder **pages/** |
| pages/ | berisikan file component Vue untuk halaman |
| statics/ | berisikan file seperti gambar maupun file-file static lainnya termasuk template index.html aplikasi Vue |
| store/ | berisikan store untuk Vuex |
| styles/ | semua file css kita taruh disini termasuk entrypoint untuk memanggil tailwindcss |
| App.vue | Vue component sebagai entry point render vue instance |
| index.js | entrypoint untuk front-end dan vue instance |
| routes.js | definisi routes untuk vue-router |
