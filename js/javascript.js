function calculateBMI() {
    // Mengambil nilai dari elemen input
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const age = document.getElementById('age').value;

    // Validasi untuk pastikan semua input diisi
    if (weight === '' || isNaN(weight) || height === '' || isNaN(height) || age === '' || isNaN(age)) {
        alert('Tolong Isikan Semua Form.');
        return;
    }

    // Menghitung BMI
    const bmi = calculateBMIValue(weight, height);
    // Menentukan kategori BMI
    const bmiCategory = determineBMICategory(bmi);
    // Menampilkan hasil perhitungan
    displayResult(bmi, bmiCategory);
}

// Fungsi untuk menghitung nilai BMI
function calculateBMIValue(weight, height) {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(2);
}

// Fungsi untuk menentukan kategori BMI
function determineBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Kekurangan Berat Badan';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return 'Normal';
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        return 'Kelebihan Berat Badan';
    } else {
        return 'Kegemukan (Obesitas)';
    }
}

// Fungsi untuk mereset formulir
function resetForm() {
    document.getElementById('gender').value = 'male';
    document.getElementById('weight').value = '';
    document.getElementById('age').value = '';
    document.getElementById('height').value = '';
    // Menghapus hasil perhitungan
    document.getElementById('result').innerHTML = '';
}

// Fungsi untuk menampilkan hasil perhitungan
function displayResult(bmi, bmiCategory) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Hasil BMI Anda:: ${bmi}</p><p>Category: ${bmiCategory}</p>`;
}
