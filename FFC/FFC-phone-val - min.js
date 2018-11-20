function telephoneCheck(str) {
  // Good luck!
  // count string length
  var size = str.length;
  // check pre-reqs
  if(size < 9 ){ return false; }

  var regex = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$/;
  return regex.test(str);
}

telephoneCheck("555-555-5555");
