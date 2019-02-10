function angkaTerbesar(a, b, c) {
    var hasilTerbesar = 0
    if (a >= hasilTerbesar) {
        hasilTerbesar = a
    }

    if (b >= hasilTerbesar) {
        hasilTerbesar = b
    }

    if (c >= hasilTerbesar) {
        hasilTerbesar = c
    }

    return (hasilTerbesar)


}
console.log(angkaTerbesar(3, 14, 2))