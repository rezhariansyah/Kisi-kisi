arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

function jumlahAlpha(abjad) {
    
    for (i = 0; i < abjad.length; i++) {
        indexNow = arr.indexOf(abjad[i])
        if(indexNow > 25) {
            indexNow -= 26
        }

        str += arr[indexNow]
        

    }
    return str
}

console.log(jumlahAlpha('abc'))