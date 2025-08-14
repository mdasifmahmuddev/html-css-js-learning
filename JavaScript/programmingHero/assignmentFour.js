
//Problem-01 : Train TT's Fine Calculator 

 
function totalFine( fare ) {

    if(typeof fare !== "number" || fare <=0 ){
            return "Invalid";
    }

    return fare * 1.2 + 30;
           
}
 




//Problem-02 : Clean & Capitalize Characters

function  onlyCharacter( str ) {

    if(typeof str !== "string" ){
     return "Invalid";
    }

  return str.replace(/\s+/g, "").toUpperCase();

 }



// Problem-03 : FIFA Best Team Award 

function  bestTeam( player1, player2 ) {

    if(typeof player1 !=="object"||typeof player2 !=="object" || player1 ==null || player2 ==null){ 
        return "Invalid";
    }

const PlayerOneTotal =(player1.foul ||0 ) + (player1.cardY || 0) +(player1.cardR || 0) ;
const PlayerTwoTotal =(player2.foul ||0 ) + (player2.cardY || 0) +(player2.cardR || 0) ;

 if(PlayerOneTotal < PlayerTwoTotal){
    return player1.name; 

 } else if(PlayerTwoTotal < PlayerOneTotal){ 
    return player2.name ;
 }else { 
    return "Tie"
 }

}

 

// Problem-04: Same Same But Different   

function  isSame(arr1 , arr2 ) {
        
    if(!Array.isArray(arr1) || !Array.isArray(arr2)  )return "Invalid" ;
    return arr1.length === arr2.length && arr1.every((val,i)=>val === arr2[i]);

}


//Problem-05: Exam Result Report Generator


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

 



