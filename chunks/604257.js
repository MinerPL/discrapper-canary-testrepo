t.exports = function(t) {
  return function(e, r, n) {
for (var _ = -1, a = Object(e), i = n(e), o = i.length; o--;) {
  var E = i[t ? o : ++_];
  if (!1 === r(a[E], E, a))
    break;
}
return e;
  };
};