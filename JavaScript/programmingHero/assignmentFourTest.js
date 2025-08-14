
function  resultReport( marks ) {
        

    if(!Array.isArray(marks)) { 
        return "Invalid"; 
     }
    if(marks.length === 0){
        
        return {finalScore:0 ,pass:0 ,fail: 0};

    }


    let passNum=0, failNum=0, totalMark=0 ; 

    for (let i of marks ) { 
        totalMark += i ;
        if(i >=40){
            passNum ++ ;
        }else { 
            failNum++;
        }
    }

    
    return { 
        finalScore : Math.round (totalMark /marks.length),
        pass :passNum , 
        fail : failNum
    };

}


 

console.log(resultReport("90, 80, 70")); 
// Expected Output: "Invalid"

