//di indonesi punya beberapa mata uang pecahan
//(100,200,500,1000,2000,5000,10000,20000,50000,75000,100000)
//mbak salsa ingin membeli makan siang untuk temanteman nya sejumlah
//1.340.800. berapa jumlah uang yang harus di siap kan oleh mbak salsa ?
// pecahan -> jumlah 
//100k -> 13
//20k -> 2
//500 -> 1
//200 -> 1
//100 -> 1

let pecahan = [100000, 75000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100]

let nominal = 1340800
let hasil = []

for (let index = 0; index < pecahan.length; index++) {
    if (nominal >= pecahan[index]) {

        let jumlahuang = Math.floor(nominal / pecahan[index])

        nominal = nominal % pecahan[index]

        hasil.push({
            pecahan: pecahan[index],
            jumlah: jumlahuang
        })


    }

}

console.log(hasil)