"use strict";
n.d(t, {
  D: function() {
    return a
  }
});
var r = n(812975),
  i = n(686942);

function a(e, t, n, a, o, s) {
  var u = {
      lastyear: e,
      lastmonth: t,
      nwdaymask: []
    },
    c = [];
  if (s.freq === r.Ci.YEARLY) {
    if ((0, i.cS)(s.bymonth)) c = [
      [0, n]
    ];
    else
      for (var l = 0; l < s.bymonth.length; l++) t = s.bymonth[l], c.push(a.slice(t - 1, t + 1))
  } else s.freq === r.Ci.MONTHLY && (c = [a.slice(t - 1, t + 1)]);
  if ((0, i.cS)(c)) return u;
  u.nwdaymask = (0, i.rx)(0, n);
  for (var l = 0; l < c.length; l++) {
    for (var d = c[l], f = d[0], p = d[1] - 1, h = 0; h < s.bynweekday.length; h++) {
      var m = void 0,
        g = s.bynweekday[h],
        _ = g[0],
        b = g[1];
      b < 0 ? (m = p + (b + 1) * 7, m -= (0, i.Vy)(o[m] - _, 7)) : (m = f + (b - 1) * 7, m += (0, i.Vy)(7 - o[m] + _, 7)), f <= m && m <= p && (u.nwdaymask[m] = 1)
    }
  }
  return u
}