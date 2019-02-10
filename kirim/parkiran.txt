function parkiran(input) {
    total = 0
    for (i=1; i<=input; i++) { //for (start; batas; tambahnya)
        if (i<=2) {
            total += 2000
        } else {
            total += 500
        }
        

    }
    return total
}

console.log(parkiran(3))