# Monitoring Suhu Kelembapan dan Gas untuk Optimasi Lingkungan

Repo ini berisi kode untuk memantau suhu, kelembapan, dan konsentrasi gas di lingkungan tertentu dengan tujuan melakukan optimasi untuk kesejahteraan lingkungan. Aplikasi ini menggunakan tiga bagian utama: Frontend, Backend, dan Websocket, masing-masingnya diimplementasikan dengan teknologi yang berbeda.

## Komponen

### Frontend
Repo Frontend: [https://github.com/ryotwell/iot.app](https://github.com/ryotwell/iot.app)

Frontend menggunakan Next.js untuk mengembangkan antarmuka pengguna yang responsif dan interaktif.

#### Konfigurasi Lingkungan untuk Frontend:
```plaintext
NEXT_PUBLIC_BACKEND_URL=http://example.com
NEXT_PUBLIC_SOCKET_URL=http://example.com:5050
```

### Backend
Repo Backend: [https://github.com/ryotwell/iot.api](https://github.com/ryotwell/iot.api)

Backend menggunakan Laravel sebagai kerangka kerja untuk mengelola logika bisnis dan menyediakan antarmuka API untuk Frontend.

#### Konfigurasi Lingkungan untuk Backend:
```plaintext
APP_URL=http://example.com
FRONTEND_URL=http://example.com:8000
SOCKET_URL=http://example.com:5050
```

### Websocket
Repo Websocket: [https://github.com/ryotwell/iot.socket](https://github.com/ryotwell/iot.socket)

Websocket mengimplementasikan fitur real-time.

#### Konfigurasi Lingkungan untuk Websocket:
```plaintext
APP_URL=http://example.com:5050
BACKEND_URL=http://example.com
FRONTEND_URL=http://example.com:8000
```

#### Kontribusi:

Kontribusi dalam bentuk pull request selalu dipersilakan. Pastikan untuk membuka issue terlebih dahulu untuk mendiskusikan perubahan yang ingin Anda usulkan.

## Anggota Kelompok

Berikut adalah anggota kelompok yang terlibat dalam proyek ini:

- **Zulzario Zaeri (220602030)**
- **M. Taufik Hidayat (220602017)**
- **Dwi Hartilawati (220602007)**

