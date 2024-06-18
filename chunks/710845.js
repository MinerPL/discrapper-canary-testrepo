"use strict";
n(47120);
var i = n(259443),
  r = n(569611);
let s = Date.now(),
  o = s;
(0, i._)(function(e, t, n) {
  for (var i = arguments.length, a = Array(i > 3 ? i - 3 : 0), l = 3; l < i; l++) a[l - 3] = arguments[l];
  let u = Date.now(),
    _ = ((u - s) / 1e3).toFixed(3),
    d = ((u - o) / 1e3).toFixed(3),
    c = "Σ:".concat(_, "s, Δ:").concat(d, "s");
  o = u, r.Hj({
    name: e,
    timing: c
  }, n, ...a), "file-only" !== t && console[t]("%c[".concat(e, "]"), "\nfont-weight: bold;\ncolor: purple;\n", n, ...a)
}), t.Z = i.Y