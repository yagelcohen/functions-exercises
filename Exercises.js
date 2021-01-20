//Question 1
function myReverse(str) {
  return str.split("").reverse().join("");
    return "str";
}
  str = Number(myReverse(str))

//Question 2
let str =" "
let combinations = [];
function allCombinations(str){
    for (i=0; i<=str.length; i++){
        for (j=i; j<=str.length; j++){
         combinations.push(str.substring(i,j));
        }
    }
    return combinations;
}
        allCombinations(str)
//Question 3
let string = "my name is yagel";
let myArray = string.split("")
myArray[0]=myArray[0].toUpperCase()
function allCaps(myArray) {
    for(let i=0; i<myArray.length; i++){
        if(myArray[i] === " "){
            myArray[i+1] = myArray[i+1].toUpperCase();
        }
    }
    return myArray;
}
        allCaps(myArray);
        string=myArray.join("");
//Question 4
let answer = " "
function myPower(x, n) {
    answer = x**n 
    return answer;
  }
  myPower(x,n)
  

//Question 5
function getFirstNotRepeating(str) {
  // your code here
  return "";
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
