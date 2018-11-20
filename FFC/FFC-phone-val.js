function telephoneCheck(str) {
  // Good luck!
  // result to return
  var result = true;
  // count string length
  var size = str.length;
  // check pre-reqs
  if(size < 9){ return false; }
  var arr = [1,2,3,4,5,6,7,8,9,0];

  // check for open and closing brackets
  var bracket = false;
  if(str.includes("(")){
    // check string includes closing bracket
    if(!str.includes(")")){ return false; }
  }
  // check string doesnt contain just a closing bracket
  if(str.includes(")")){
    if(!str.includes("(")){ return false; }
    bracket = true;
  }
  if(bracket){
    str.replace("(", "");
    str.replace(")", "");
  }
  // check if dashed
  if(str.includes("-")){
    if(str[0] === "-"){ return false; }
    str.replace("-", "");
  }

  for(var i=0;i<size-1;i++){
    var s = str[i];
    if(s.isNum){
        result = true;
    } else {
      return false;
    }
  }

  var regex = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$/;
  return regex.test(str);
  // return result
  //return result;
}

telephoneCheck("555-555-5555");
