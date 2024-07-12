var e = n(56135),
  i = Object.prototype,
  o = i.hasOwnProperty,
  u = i.toString,
  c = e ? e.toStringTag : void 0;
t.exports = function(t) {
  var r = o.call(t, c),
n = t[c];
  try {
t[c] = void 0;
var e = !0;
  } catch (t) {}
  var i = u.call(t);
  return e && (r ? t[c] = n : delete t[c]), i;
};