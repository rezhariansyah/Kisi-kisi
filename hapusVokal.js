function hapusVokal(nama) {
    var str = nama.replace(/a/g, '').replace(/i/g, '').replace(/u/g, '').replace(/e/g, '').replace(/o/g, '')
    return str;
}

console.log(hapusVokal('purwadhika'))