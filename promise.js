// topik volume of cube
// jika sisi nya minus maka akan muncul error 


let volumeCube = (side) => {
    return new Promise((resolve, rejected) => {
        if(side < 0){
            rejected(`Invalid side`)
        }

        let result = Math.pow(side, 3)
        resolve(result)
    })
}


volumeCube(-10)

// than() -> di jalankan jika sukses
// than() -> menangkap data dari resolve
.then(result => {
    console.log(`volume of cube is ${result}`);
})
// catch() -> di jalankan jika ada error
// catch() -> menangkap data dari rejected
.catch(error => {
    console.log(`Error kutil: ${error}`);
})