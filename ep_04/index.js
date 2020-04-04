function consecutive(str) {

  // 1. split the string into an array, where each letter is it's own index
  var arr = str.split('');

  // 2. create an empy object, that will hold letter: amount of time it shows up
  var object = {};

  // 3. variable that holds the current letter you're on
  var currentChar = '';

  // 4. variable that will hold the length of the current letter we're on
  var baseCount = 0;

  // 5. variable of the length of the longest sequence
  var maxCount = 0;

  // loop through and iterate through the string(array) until you reach the end
  for(var i=0; i<=arr.length; i++) {

    // if the base count is greater than the max count, then...
    if(baseCount > maxCount) {

      // update the maxCount to show the actual current max consecutive letters
      maxCount = baseCount;

      // clear out the current object and ...
      object = {};

      // let the object reflect currentLetter: current max value
      object[currentChar] = maxCount;
      
    }

    console.log('baseCount: ' + baseCount);
    console.log('maxCount: ' + maxCount);
    console.log('currentChar: ' + currentChar);
    console.log('----------------------------------');


    // set a variable that holds the index (position) you're at within the array
    var char = arr[i];

    // if the current character is not empty AND the character that we're on is not currentChar, then...
    if(currentChar !== '' && char != currentChar) {

      // set base count to zero
      baseCount = 0;
    }

    // add 1 to the base count
    baseCount++;

    // and set the currentChar to char
    currentChar = char;
  }
  return object;
}


console.log(consecutive("AABCDDBBBEEEEA"))

