var r = n(195168),
  i = 'object' == typeof exports && exports && !exports.nodeType && exports,
  a = i && 'object' == typeof module && module && !module.nodeType && module,
  o = a && a.exports === i ? r.Z.Buffer : void 0,
  s = o ? o.allocUnsafe : void 0;
t.Z = function(e, t) {
  if (t)
return e.slice();
  var n = e.length,
r = s ? s(n) : new e.constructor(n);
  return e.copy(r), r;
};