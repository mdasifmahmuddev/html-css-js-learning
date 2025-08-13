function  isSame(arr1 , arr2 ) {
        
    if(!Array.isArray(arr1) || !Array.isArray(arr2)  )return "Invalid" ;
     return arr1.length === arr2.length && arr1.every((val,i)=>val === arr2[i]);


}

