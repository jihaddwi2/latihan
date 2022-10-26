//pak syahril mempunyai anak dengan data sebagai berikut
//nama johncena tinggi 1,8 berat 80
//nama boby lesley tinggi 1,6 berat 90
//nama under taker tinggi 1,76 berat 100
//nama khali tinggi 2 berat 120
//nama ray mysterio 1,4 berat 30 (body mass index = berat / tinggi^2 )

let anak = [
    { nama: "johncena", tinggi: 1.8, berat: 80 },
    { nama: "boby lesley", tinggi: 1.6, berat: 90 },
    { nama: "under taker", tinggi: 1.76, berat: 100 },
    { nama: "khali", tinggi: 2, berat: 120 },
    { nama: "ray mysterio", tinggi: 1.4, berat: 30 },

]

for (let index = 0; index < anak.length; index++) {
    let bmi = anak[index].berat / (anak[index].tinggi * anak[index].tinggi)

    if (bmi < 18.5) {
        console.log(anak[index].nama + " (underweight) = " + bmi)
    }
    else if (bmi < 18.5, bmi > 24.9) {
        console.log(anak[index].nama + " (normalweight) = " + bmi)
    }
    else if (bmi < 25.0, bmi > 29.9) {
        console.log(anak[index].nama + " (overweight) = " + bmi)
    }
    else if (bmi > 30.0, bmi < 40.0) {
        console.log(anak[index].nama + " (obese) = " + bmi)
    }


}