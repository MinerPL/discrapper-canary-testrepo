var n = e(292403),
  o = e(539339),
  i = Object.prototype.hasOwnProperty;
t.exports = function(t) {
  if (!n(t)) return o(t);
  var r = [];
  for (var e in Object(t)) i.call(t, e) && "constructor" != e && r.push(e);
  return r
}