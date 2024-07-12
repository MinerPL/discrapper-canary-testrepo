var r = n(4609),
  i = Math.max;
e.exports = function(e, t, n) {
  return t = i(void 0 === t ? e.length - 1 : t, 0),
function() {
  for (var a = arguments, o = -1, s = i(a.length - t, 0), l = Array(s); ++o < s;)
    l[o] = a[t + o];
  o = -1;
  for (var u = Array(t + 1); ++o < t;)
    u[o] = a[o];
  return u[t] = n(l), r(e, this, u);
};
};