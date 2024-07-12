var n = r(92801),
  _ = r(58834);
t.exports = function(t) {
  for (var e = _(t), r = e.length; r--;) {
var a = e[r],
  i = t[a];
e[r] = [
  a,
  i,
  n(i)
];
  }
  return e;
};