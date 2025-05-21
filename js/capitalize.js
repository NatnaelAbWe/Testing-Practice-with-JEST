function strCapitalize(str){
    if(typeof(str) !== 'string'){
        throw new Error('pls enter a string');
    }
    else{
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

export {strCapitalize}