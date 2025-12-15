function hitungVolumeBalok() {
    const panjang = parseFloat(document.getElementById('panjang').value);
    const lebar = parseFloat(document.getElementById('lebar').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);

    if (isNaN(panjang) || isNaN(lebar) || isNaN(tinggi) || panjang <= 0 || lebar <= 0 || tinggi <= 0) {
        alert("🚨 Harap masukkan nilai numerik yang valid (lebih dari 0) untuk semua dimensi.");
        return; 
    }

    const volume = panjang * lebar * tinggi;

    alert(`🎉 Hasil Perhitungan Volume Balok:\nPanjang: ${panjang}\nLebar: ${lebar}\nTinggi: ${tinggi}\n-------------------------\nVolume: ${volume}`);
}