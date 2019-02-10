function jumlahAbjad(x) {
    var str = 'abcdefghijklmnopqrstuvwxyz'.split('')
    var arr = x.split('')
    var newIndex = 0
    var jumlah = 0

    for (i = 0; i < x.length; i++) {
        var arr1 = str.indexOf(arr[i])
        jumlah += arr1 + 1
        newIndex = jumlah

    }
    return newIndex


}
console.log(jumlahAbjad('fikri'))