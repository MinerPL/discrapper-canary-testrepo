var n = r(42848),
  a = 1 / 0;
e.exports = function(e) {
  if ('string' == typeof e || n(e))
return e;
  var t = e + '';
  return '0' == t && 1 / e == -a ? '-0' : t;
};