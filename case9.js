//raju sedang menunggu harbolnas. market place shippy sedang membuat
//diskon besar besaran. raju memilih barang spt berikut
//mouse sejumlah 10 (20000)
//ram sejumlah 5 (100000)
//Rg45 sejumlah 100 (1000)
//motherboard 3 (100000)
//aplikasi shippy memberi diskon 10% jika item yang dibeli lebih dari 5
//berapa nominal yang harus di bayar raju ?

let barang = [
    { barang: "mouse", jumlah: 10, harga: 20000 },
    { barang: "ram", jumlah: 5, harga: 100000 },
    { barang: "rg45", jumlah: 100, harga: 1000 },
    { barang: "motherboard", jumlah: 3, harga: 500000 }

]
let total = 0


for (let index = 0; index < barang.length; index++) {
    if (barang[index].jumlah > 5) {
        diskon = barang[index].harga * (10/100) 
        let jumlahdiskon = barang[index].harga - diskon

        total += jumlahdiskon * barang[index].jumlah
    }
    else (  
        total += barang[index].harga * barang[index].jumlah
    )
}
console.log("yang harus di bayar adalah Rp"+total)

