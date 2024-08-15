var n = r(292403),
  a = r(539339),
  o = Object.prototype.hasOwnProperty;
e.exports = function(e) {
  if (!n(e))
return a(e);
  var t = [];
  for (var r in Object(e))
o.call(e, r) && 'constructor' != r && t.push(r);
  return t;
};