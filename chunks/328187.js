"use strict";
n.d(t, {
  Z: function() {
    return s
  }
});
var i = n(512722),
  r = n.n(i);

function s(e, t) {
  if (r()(e.length >= t, "Waveform smaller than samples"), e.length === t) return e;
  let n = e.length / t,
    i = [],
    s = 0;
  for (; i.length < t;) {
    let t = Math.round((i.length + 1) * n),
      r = 0,
      o = 0;
    for (let n = s; n < t && n < e.length; n++) r += e[n], o++;
    i[i.length] = r / o, s = t
  }
  return i
}