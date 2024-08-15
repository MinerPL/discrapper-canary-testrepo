var r = n(584428),
  i = n(438330);
e.exports = function(e) {
  for (var t = i(e), n = t.length; n--;) {
var a = t[n],
  s = e[a];
t[n] = [
  a,
  s,
  r(s)
];
  }
  return t;
};