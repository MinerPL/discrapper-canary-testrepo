var n = e(466293),
  o = Object.prototype,
  i = o.hasOwnProperty,
  a = o.toString,
  u = n ? n.toStringTag : void 0;
t.exports = function(t) {
  var r = i.call(t, u),
    e = t[u];
  try {
    t[u] = void 0;
    var n = !0
  } catch (t) {}
  var o = a.call(t);
  return n && (r ? t[u] = e : delete t[u]), o
}