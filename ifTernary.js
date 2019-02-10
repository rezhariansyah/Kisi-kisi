function ganjilGenap(input) {
    
    if(hasil = (input&2==0)) {
        hasil = 'genap'
    } else {
        hasil = 'ganjil'
    }
    
    return hasil    

}

console.log(ganjilGenap(3))