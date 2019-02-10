function jumlahGanjil(str) {
    var y = 'abcdefghijklmnopqrstuvwxyz'.split('')
    var arr = str.split('')
    var newIndex = 0
    var jumlah = 0

    for (i = 0; i < str.length; i = i + 2) {
        var arr1 = y.indexOf(arr[i])
        jumlah += arr1
        newIndex = jumlah

    }
    return newIndex


}
console.log(jumlahGanjil('afikri'))