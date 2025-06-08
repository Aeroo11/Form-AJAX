# Dokumentasi Form AJAX

![image](https://github.com/user-attachments/assets/224fab76-a215-4520-ab54-7cd675566d18)


## Deskripsi
Proyek ini adalah implementasi form sederhana menggunakan AJAX (Asynchronous JavaScript and XML) yang memungkinkan pengiriman data form tanpa perlu me-refresh halaman. Proyek ini menggunakan HTML, CSS, JavaScript, dan PHP.

## Struktur Proyek

Form-AJAX/
├── index.html
├── style.css
├── script.js
└── process.php


## Komponen Utama

### 1. Form HTML (index.html)
Form terdiri dari 3 field input:
- Nama (text)
- Email (email)
- Pesan (textarea)

html
<form id="contactForm">
    <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
    </div>
    
    <div class="form-group">
        <label for="email">Email Address:</label>
        <input type="email" id="email" name="email" required>
    </div>
    
    <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
    </div>
    
    <button type="submit" id="submitBtn">Submit</button>
</form>


### 2. Styling (style.css)
Style CSS mengatur tampilan form dengan fitur:
- Layout responsif dengan max-width 600px
- Styling untuk input fields dan button
- Feedback visual untuk success/error messages
- Warna tema:
  - Button: Hijau (#4CAF50)
  - Success message: Background hijau muda (#f0fff0)
  - Error message: Background merah muda (#fff0f0)

### 3. AJAX Implementation (script.js)
Implementasi AJAX menggunakan XMLHttpRequest dengan fitur:

javascript
// Event listener untuk form submission
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Mengambil data form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Membuat objek data
    const postData = {
        title: name,
        body: message,
        userId: 1,
        email: email
    };
    
    // Konfigurasi AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');


### 4. Server-side Processing (process.php)
PHP script menangani:
- Validasi input
- Sanitasi data
- Response handling

Fitur validasi meliputi:
php
// Validasi data
$errors = [];
if (empty($name)) {
    $errors[] = "Name is required";
}
if (empty($email)) {
    $errors[] = "Email is required";
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "Invalid email format";
}
if (empty($message)) {
    $errors[] = "Message is required";
}


## Fitur-fitur

1. *Validasi Form*
   - Validasi required fields di sisi client
   - Validasi email format di sisi server
   - Sanitasi input untuk mencegah XSS

2. *Feedback User*
   - Pesan sukses dengan detail submission
   - Pesan error jika terjadi masalah
   - Visual feedback dengan warna berbeda untuk sukses/error
   - Auto-hide untuk pesan sukses setelah 5 detik

3. *Error Handling*
   - Handling network errors
   - Validasi server-side
   - Response status handling

4. *UX Improvements*
   - Form reset setelah successful submission
   - Responsive design
   - Visual feedback untuk interaksi button

## Cara Penggunaan

1. Pastikan server mendukung PHP
2. Upload semua file ke server web
3. Akses melalui browser dengan membuka file index.html
4. Isi form dengan data yang valid
5. Submit form dan lihat respon AJAX tanpa refresh halaman

## Catatan Teknis

- Project menggunakan vanilla JavaScript tanpa dependencies
- AJAX requests menggunakan XMLHttpRequest API
- PHP minimum version: 5.6+ (recommended 7.0+)
- Cross-browser compatible
- Responsive design untuk berbagai ukuran layar
