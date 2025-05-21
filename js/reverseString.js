function reverseStr(str){
    if(typeof(str) !== 'string'){
        throw new Error('not a string')
    }
    else{
        return str.split('').reverse().join('')
    }
}

export {reverseStr}