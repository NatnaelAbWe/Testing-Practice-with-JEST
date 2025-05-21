function analyzeArray (arr){
    const sum = arr.reduce((accumlator, currentVal) => accumlator + currentVal,0)
    const maximum = Math.max(...arr)
    const minimum = Math.min(...arr)
    const length = arr.length

    return {
        average: sum/ length,
        max: maximum,
        min: minimum,
        length: length
    }
}


export {analyzeArray}


