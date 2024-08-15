e = n.nmd(e);
var r = n(325237),
  i = t && !t.nodeType && t,
  a = i && e && !e.nodeType && e,
  s = a && a.exports === i ? r.Buffer : void 0,
  o = s ? s.allocUnsafe : void 0;
e.exports = function(e, t) {
  if (t)
return e.slice();
  var n = e.length,
r = o ? o(n) : new e.constructor(n);
  return e.copy(r), r;
};