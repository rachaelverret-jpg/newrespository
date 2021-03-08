function hasOddNumber(arr){
return arr.some(function(val){
    return val % 2 !== 0;
})

}
function hasAZero(num){
    return num.toString().split('').some(function(val){

   return val === '0'})
}

function hasOnlyOddNumbers(arr){
    return arr.every(function(val){
        return val % 2 !== 0;
    })
}
function hasNoDuplicates(arr){
    return arr.every(function(val){
        return val % 2 !==0;
    })
}
function hasCertainKey(arr, key){
    return arr.every(function(val){
        return key in val
    })
}
function hasCertainVAlue(arr, key, searchValue){
    return arr.every(function(val){
        return val[key] === searchValue
    })
}