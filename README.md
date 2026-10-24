# 📝 PaperCraft AI (`scholar.steamcraft.online`)

> **Scientific Manuscript & IMRaD Structural Integrity Auditor**  
> *AI-Powered Academic Writing Assistant, Statistical Discrepancy Detector & SINTA/Scopus Pre-flight Engine.*

[![SteamCraft Ecosystem](https://img.shields.io/badge/Ecosystem-steamcraft.online-0284c7?style=for-the-badge&logo=googlechrome&logoColor=white)](https://steamcraft.online)
[![VeriLab AI Engine](https://img.shields.io/badge/VeriLab%20AI-verilab.steamcraft.online-10b981?style=for-the-badge&logo=fastapi&logoColor=white)](https://verilab.steamcraft.online)
[![Creator Portfolio](https://img.shields.io/badge/Creator-Muhammad%20Naza%20Firmansyah-6366f1?style=for-the-badge&logo=github&logoColor=white)](https://portofolionaza.steamcraft.online)

---

## 🌟 Ikhtisar Proyek

**PaperCraft AI** adalah platform audit naskah ilmiah cerdas yang dirancang untuk membantu mahasiswa, dosen, dan peneliti menyempurnakan manuskrip publikasi sebelum disubmit ke jurnal terakreditasi nasional (**SINTA 1–6**) maupun bereputasi internasional (**Scopus Q1–Q4 / WoS**).

Platform ini menjadi pilar riset akademis dalam ekosistem **SteamCraft Online** dan terintegrasi langsung dengan microservice **VeriLab AI** untuk verifikasi statistik data eksperimen.

---

## 🚀 Fitur Utama

1. **IMRaD Structural Auditor (7 Parameter Inti)**:
   - Evaluasi kesesuaian judul (variabel kunci & <22 kata).
   - Analisis kepadatan abstrak (150–250 kata, latar belakang, metodologi, temuan kunci).
   - Pengecekan *Research Gap* & kebaruan (*novelty*) pada bagian Pendahuluan.
   - Pengecekan replikabilitas, transparansi dataset, dan izin etik pada bagian Metode.
   - Deteksi uji signifikansi statistik empiris pada bagian Hasil.
   - Komparasi literatur benchmark dan limitasi pada bagian Pembahasan.

2. **Statistical Claim & Discrepancy Engine**:
   - Ekstraksi otomatis klaim p-value, akurasi, Macro-F1, $R^2$, dan statistik uji $\chi^2$ / McNemar.
   - Indikator kesimpulan uji hipotesis (Signifikan $\alpha = 0.05$ vs Gagal Tolak $H_0$).
   - Jembatan koneksi langsung (*API Bridge*) ke **VeriLab AI Microservice** (`verilab-api.onrender.com`).

3. **Citation & Reference Cross-Matcher**:
   - Pemindaian sitasi di dalam teks (*in-text citations*, e.g., `Firmansyah et al., 2025`).
   - Pencocokan silang otomatis dengan Daftar Pustaka (*References*).
   - Deteksi *Missing References* (disitir di teks tapi tidak ada di pustaka) dan *Unused References* (tertera di pustaka tapi belum disitir).

4. **SINTA & Scopus Pre-Flight Rubric**:
   - Kalkulasi skor kesiapan publikasi (*Readiness Index 0–100%*).
   - Estimasi waktu baca (*reading time*) dan statistik jumlah kata.
   - Ekspor ringkasan dossier audit ilmiah siap cetak.

---

## 🛠️ Arsitektur Teknologi

- **Frontend**: React 19 dengan TypeScript
- **Styling**: Tailwind CSS v4 (@tailwindcss/vite) + Lucide Icons
- **Bundler & Dev Server**: Vite 8 (Host `0.0.0.0`, Port `3001`)
- **Scientific Backend**: VeriLab AI FastAPI Microservice (Docker on Render Cloud)

---

## 💻 Menjalankan Secara Lokal

```powershell
# Masuk ke direktori
cd "C:\Kebutuhan Data Pribadi\PaperCraft AI"

# Jalankan development server
npm run dev
```

Buka peramban di `http://localhost:3001` untuk mengakses antarmuka PaperCraft AI.

Untuk melakukan build produksi:
```powershell
npm run build
```

---

## 👤 Pengembang & Kepemilikan

- **Lead Developer & System Architect**: **Muhammad Naza Firmansyah**
- **Institusi**: Program Studi Sains Data, Universitas Negeri Surabaya (UNESA)
- **Portofolio**: [portofolionaza.steamcraft.online](https://portofolionaza.steamcraft.online)
- **Ekosistem**: [steamcraft.online](https://steamcraft.online) &bull; [verilab.steamcraft.online](https://verilab.steamcraft.online)
