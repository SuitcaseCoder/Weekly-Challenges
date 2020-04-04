function consecutive(str)
{
  var arr = str.split('');
  var object = {};
  var pChar = '';
  var baseCount = 0;
  var maxCount = 0;

  for(var i=0; i<=arr.length; i++)
  {
    if(baseCount > maxCount)
    {
      maxCount = baseCount;
      object = {};
      object[pChar] = maxCount;
    }

    var char = arr[i];
    if(pChar !== '' && char != pChar)
    {
      baseCount = 0;
    }
    baseCount++;
    pChar = char;
  }
  return object;
}


console.log(consecutive("AABCDDBBBEEEEA"))
