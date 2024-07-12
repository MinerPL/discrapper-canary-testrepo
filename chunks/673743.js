var n = r(84297).IteratorPrototype,
  o = r(803938),
  i = r(879),
  c = r(865312),
  u = r(874652),
  a = function() {
return this;
  };
t.exports = function(t, e, r, s) {
  var f = e + ' Iterator';
  return t.prototype = o(n, {
next: i(+!s, r)
  }), c(t, f, !1, !0), u[f] = a, t;
};