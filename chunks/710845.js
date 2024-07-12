n(47120);
var r = n(259443),
  i = n(569611);
let a = Date.now(),
  o = a;
(0, r._)(function(e, t, n) {
  for (var r = arguments.length, s = Array(r > 3 ? r - 3 : 0), l = 3; l < r; l++)
s[l - 3] = arguments[l];
  let u = Date.now(),
c = ((u - a) / 1000).toFixed(3),
d = ((u - o) / 1000).toFixed(3),
_ = 'Σ:'.concat(c, 's, Δ:').concat(d, 's');
  o = u, i.Hj({
name: e,
timing: _
  }, n, ...s), 'file-only' !== t && console[t]('%c['.concat(e, ']'), '\nfont-weight: bold;\ncolor: purple;\n', n, ...s);
}), t.Z = r.Y;