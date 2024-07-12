var n = Number.isNaN || function(e) {
  return 'number' == typeof e && e != e;
};

function o(e, t) {
  if (e.length !== t.length)
return !1;
  for (var o, r, i = 0; i < e.length; i++) {
;
if (o = e[i], !(o === (r = t[i]) || n(o) && n(r)))
  return !1;
  }
  return !0;
}
t.Z = function(e, t) {
  void 0 === t && (t = o);
  var n, r, i = [],
a = !1;
  return function() {
for (var o = [], u = 0; u < arguments.length; u++)
  o[u] = arguments[u];
return a && n === this && t(o, i) ? r : (r = e.apply(this, o), a = !0, n = this, i = o, r);
  };
};