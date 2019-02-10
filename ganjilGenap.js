function ganjilGenap(nilai) {
    if (nilai % 2 == 0) {
        hasil = (nilai + ' adalah bilangan genap')

    } else {
        hasil = (nilai + ' adalah bilangan ganjil')
    }
    return hasil
} 
console.log(ganjilGenap(61))