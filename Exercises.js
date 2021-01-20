//Question 1
function myReverse(str) {
  return str.split("").reverse().join("");
    return "str";
}

//Question 2

function allCombinations(str){
  let str1 =" "
let combinations = [];
    for (i=0; i<=str.length; i++){
        for (j=i; j<=str.length; j++){
         combinations.push(str.substring(i,j));
        }
    }
    return combinations;
}

//Question 3
function allCaps(isArray) {
  let string = "";
 isArray1 = string.split("")
isArray[0]=isArray[0].toUpperCase()
    for(let i=0; i<isArray.length; i++){
        if(isArray[i] === " "){
          isArray[i+1] = isArray[i+1].toUpperCase();
        }
    }
    string=isArray.join("");   
    return isArray;
}   

        
//Question 4
function myPower(x, n) {
  let answer = " ";
    answer = x**n ;
    return answer;
  }
  

//Question 5
function getFirstNotRepeating(myArray){
     let sent = " ";
   myArray1 = sent.split("");
    for(i=0; i<myArray.length; i++){
        let count = 0;
        for(j=0; j<myArray.length; j++){
            if(myArray[i]===myArray[j] && i !== j){
              count += 1;
        }
    } if(count === 0){ return myArray[i];}
    }
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  // your code here
  return "I'm not interested in the bonus question :(";
}

// *** Playground ***
// Feel free to run and test your code here on your own

// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
