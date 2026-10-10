<<<<<<< HEAD
# Nurul Globe — Full Offline/Web/PWA Starter

Nurul Globe adalah aplikasi Islami modular dengan halaman terpisah, UI responsif, Firebase, PWA, dan konfigurasi Capacitor Android.

## Firebase
Konfigurasi sudah diarahkan ke project:
`nextmusic-e6295`

Tidak ada project Firebase baru yang dibuat.

## Jalankan
```bash
npm install
cp .env.example .env.local
npm run dev
```

Buka `http://localhost:3000`.

## Build
```bash
npm run build
npm start
```

## Android
Untuk build Capacitor, Next.js perlu diekspor ke folder `out`. Atur deployment/export sesuai pipeline Android yang digunakan, lalu:
```bash
npx cap add android
npm run android:sync
npm run android:open
```

## Iklan
Masukkan `NEXT_PUBLIC_ADSENSE_CLIENT_ID` dan `NEXT_PUBLIC_ADSENSE_SLOT` dari akun iklan milik sendiri. Tidak ada ID iklan palsu di source.

## Catatan
Beberapa data eksternal memiliki fallback lokal agar UI tetap dapat dibuka saat API tidak tersedia. Firebase dipakai sebagai backend/auth ketika konfigurasi layanan tersebut diaktifkan.
=======
# islam
>>>>>>> 079e56d6abee09c9d68ce58a2fc0d9a48b464041
