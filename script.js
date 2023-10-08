// TUGAS JAVASCRIPT 1
// Penggunaan If Else
let angka = 1

if (angka === 5) {
    console.log("Angka tepat di 5");
}
else if (angka > 5) {
    console.log("Angka lebih besar dari 5");
}
else {
    console.log("Angka kurang dari 5");
}

// Penggunaan Nester If
let nama = "Sapitri";
let password = "1234lima";

if(nama === "Sapitri"){
    if(password === "1234lima") {
        console.log("Selamat Datang Sapitri Anda Berhasil Masuk");
    }
    else{
        console.log("Ups! Password yang Anda Masukkan Salah ");
    }
}
else{
    console.log("Nama yang Anda Masukkan Salah");
}

// Penggunaan Switch Case
let username = prompt("Maukkan Usename Anda : ")

switch(username) {
    case "Sapitri" :
        alert("Nama yang anda masukkan Sapitri")
        break;
    case "Ira Kusuma Wardani" :
        alert("NAma yang Anda Masukkan Ira Kusuma Wardani")
        break;
    case "Dinda Kirana" :
        alert("Nama yang Anda Masukkan Dinda Kirana")
        break;
    default :
        alert("Nama yang Anda Masukkan Tidak Sesuai Dengan Ketentuan")
        break;
}

// Penggunaan While
let jumlah_rumah = 15;
let rumah_jadi = 10;
let no_rumah = 1;

while(no_rumah <= rumah_jadi) {
    console.log("Angkot No. " + no_rumah + " Sudah Selesai Renovasi");

no_rumah++;
} 

// Penggunaan For
for(no_rumah = rumah_jadi + 1; no_rumah <= jumlah_rumah; no_rumah++) {
    console.log("Angkot No. " + no_rumah + " Belum Selesai Renovasi");
}

// Penggunaan Do While
let nomor = 0;
do {
    nomor++;
    console.log("Nomor " + nomor);
}while(nomor < 10);

// Penggunaan function
function total_volume_kubus(a, b) {
    let volume1;
    let volume2;
    let total;

    volume1 = a * a * a;
    volume2 = b * b * b;

    total = volume1 + volume2;

    return total;
}

console.log(total_volume_kubus(6, 8));

