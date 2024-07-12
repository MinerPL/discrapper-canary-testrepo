n.d(t, {
  f: function() {
return a;
  }
});
var r = n(695170),
  i = n(686942);

function a(e, t, n, a, o, s) {
  for (var l = [], u = 0; u < e.length; u++) {
var c = void 0,
  d = void 0,
  _ = e[u];
_ < 0 ? (c = Math.floor(_ / t.length), d = (0, i.Vy)(_, t.length)) : (c = Math.floor((_ - 1) / t.length), d = (0, i.Vy)(_ - 1, t.length));
for (var E = [], f = n; f < a; f++) {
  var h = s[f];
  (0, i.EN)(h) && E.push(h);
}
var p = void 0;
p = c < 0 ? E.slice(c)[0] : E[c];
var m = t[d],
  I = (0, r.zU)(o.yearordinal + p),
  T = (0, r.$e)(I, m);
!(0, i.q9)(l, T) && l.push(T);
  }
  return (0, r.DY)(l), l;
}