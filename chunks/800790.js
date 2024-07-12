var n = r(292403),
  _ = r(539339),
  a = Object.prototype.hasOwnProperty;
t.exports = function(t) {
  if (!n(t))
return _(t);
  var e = [];
  for (var r in Object(t))
a.call(t, r) && 'constructor' != r && e.push(r);
  return e;
};