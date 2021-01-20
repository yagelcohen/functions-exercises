//Question 1
function myReverse(str) {
  return str.split("").reverse().join("");
    return "str";
}

//Question 2

function allCombinations(str){
  list_of_strings = new Array();
  for(i=0;i<str.length;i++) {
      for(j=i+1;j<str.length+1;j++) {
          list_of_strings.push(str.slice(i, j));
      }
  }
  return list_of_strings;
}

//Question 3
let string = "i Am A Cyber4s Student";
function allCaps(str) {
  let answer = str[0]=str[0].toUpperCase();
  for(let i=1; i<str.length; i++){
      if(str[i-1] === " "){
         answer += str[i].toUpperCase();
      }else{answer+=str[i];}
  }
  return answer;
}
//Question 4
function myPower(x, n) {
  let ans = 1;
  for (var i =1; i <= n; i++)
  {
          ans *= x;        
  }
  return ans;
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
