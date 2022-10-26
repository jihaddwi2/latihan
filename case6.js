//bu naura adaalah guru ilmu goib mempunyai data nilai siswa yang di ajar sebagai berikut
//nama kairo tugas 80 uh 70 uas 98
//nama yaya tugas 90 uh 60 uas 50
//nama ciciko tugas 70 uh 70 uas 85
//bu naura igin menghitung nilai akhir dari setiap siswanya dengan rumus tugas 30% uh 40% uas 30%
//bantulah bu naura untuk menghitung nilai tersebut

let nilaisiswa = [
    { nama: "kairo", tugas: 80, uh: 70, uas: 98 },
    { nama: "yaya", tugas: 90, uh: 60, uas: 50 },
    { nama: "ciciko", tugas: 70, uh: 70, uas: 85 },
]

let nilaikairo = {
    tugas: nilaisiswa[0].tugas * (30 / 100),
    uh: nilaisiswa[0].uh * (40 / 100),
    uas: nilaisiswa[0].uas * (30 / 100),
}

let nilaiyaya = {
    tugas: nilaisiswa[1].tugas * (30 / 100),
    uh: nilaisiswa[1].uh * (40 / 100),
    uas: nilaisiswa[1].uas * (30 / 100),
}

let nilaiciciko = {
    tugas: nilaisiswa[2].tugas * (30 / 100),
    uh: nilaisiswa[2].uh * (40 / 100),
    uas: nilaisiswa[2].uas * (30 / 100),
}

let nilaiakhirkairo = nilaikairo.tugas + nilaikairo.uas + nilaikairo.uh
let nilaiakhiryaya = nilaiyaya.tugas + nilaiyaya.uas + nilaiyaya.uh
let nilaiakhirciciko = nilaiciciko.tugas + nilaiciciko.uas + nilaiciciko.uh

console.log("nilai akhir kairo :" + nilaiakhirkairo)
console.log("nilai akhir yaya :" + nilaiakhiryaya)
console.log("nilai akhir ciciko :" + nilaiakhirciciko)

