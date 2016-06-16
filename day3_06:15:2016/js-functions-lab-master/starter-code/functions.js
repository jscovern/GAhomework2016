// Question 1
function maxOfTwoNumbers(num1,num2) {
    if (num1 > num2) {
        return num1;
        }   else{
            return num2;
    }
}
maxOfTwoNumbers(234,134);



// Question 2
function maxOfThree(num1,num2,num3) {
    	if (num1 > num2 && num1 > num3){
        	return num1;
        }
        if(num2 > num1 && num2 > num3){
            return num2;
    	}
    	if(num3 > num1 && num3 > num2){
            return num3;
    	}
}
maxOfThree(105,110,40);



// Question 3
function isCharacterAVowel(letter) {
				if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){
					return true;
				}else{
					return false;
				}
}

isCharacterAVowel("u");



// Question 4
function sumArray(array){
  var total = 0,
      len = array.length;

  for (var i = 0; i < len; i++){
    total += array[i];
  }

  return total;
}

var my_array = [1,1,1,1];

sumArray(my_array) ;




// Question 4
function multiply (array) {
        var sum=1;
        for (var i=0; i<array.length; i++) {
            sum = sum * array[i];
        } 
        return sum;
    }

multiply([3,3,2]);





// Question 5
var numberOfArguments = function(){
  return arguments.length;
};

numberOfArguments("hi", 1, "the")



// Question 6
var reverseString = function (str){
  var arr = str.split('');
  var revArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  return revArr.join('');
};

reverseString( "the" );



// Question 7
function findLongestWord (arr) {
  longest = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > longest) {
      longest = arr[i].length;
    }
  }
  return longest;
}


// Question 8
function filterLongWords (arr,num) {
  newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if(arr[i].length > num){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}


// Bonus 1
function charactersOccurencesCount() {
  
}

