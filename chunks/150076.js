"use strict";
n.d(t, {
  h: function() {
    return f
  }
});
var r = n(707908),
  i = n(695170),
  a = n(805817),
  o = n(812975),
  s = n(347874),
  u = n(686942),
  c = n(829105),
  l = n(613607),
  d = n(68808);

function f(e, t) {
  var n = t.dtstart,
    c = t.freq,
    f = t.interval,
    m = t.until,
    g = t.bysetpos,
    _ = t.count;
  if (0 === _ || 0 === f) return h(e);
  var b = d.o.fromDate(n),
    v = new a.Z(t);
  v.rebuild(b.year, b.month);
  for (var y = function(e, t, n) {
      var i = n.freq,
        a = n.byhour,
        c = n.byminute,
        l = n.bysecond;
      return (0, r.e)(i) ? (0, s.hl)(n) : i >= o.Ci.HOURLY && (0, u.Dw)(a) && !(0, u.q9)(a, t.hour) || i >= o.Ci.MINUTELY && (0, u.Dw)(c) && !(0, u.q9)(c, t.minute) || i >= o.Ci.SECONDLY && (0, u.Dw)(l) && !(0, u.q9)(l, t.second) ? [] : e.gettimeset(i)(t.hour, t.minute, t.second, t.millisecond)
    }(v, b, t);;) {
    var E = v.getdayset(c)(b.year, b.month, b.day),
      S = E[0],
      x = E[1],
      w = E[2],
      C = function(e, t, n, r, i) {
        for (var a = !1, o = t; o < n; o++) {
          var s = e[o];
          (a = function(e, t, n) {
            var r = n.bymonth,
              i = n.byweekno,
              a = n.byweekday,
              o = n.byeaster,
              s = n.bymonthday,
              c = n.bynmonthday,
              l = n.byyearday;
            return (0, u.Dw)(r) && !(0, u.q9)(r, e.mmask[t]) || (0, u.Dw)(i) && !e.wnomask[t] || (0, u.Dw)(a) && !(0, u.q9)(a, e.wdaymask[t]) || (0, u.Dw)(e.nwdaymask) && !e.nwdaymask[t] || null !== o && !(0, u.q9)(e.eastermask, t) || ((0, u.Dw)(s) || (0, u.Dw)(c)) && !(0, u.q9)(s, e.mdaymask[t]) && !(0, u.q9)(c, e.nmdaymask[t]) || (0, u.Dw)(l) && (t < e.yearlen && !(0, u.q9)(l, t + 1) && !(0, u.q9)(l, -e.yearlen + t) || t >= e.yearlen && !(0, u.q9)(l, t + 1 - e.yearlen) && !(0, u.q9)(l, -e.nextyearlen + t - e.yearlen))
          }(r, s, i)) && (e[s] = null)
        }
        return a
      }(S, x, w, v, t);
    if ((0, u.Dw)(g)) {
      for (var T = (0, l.f)(g, y, x, w, v, S), D = 0; D < T.length; D++) {
        var M = T[D];
        if (m && M > m) return h(e);
        if (M >= n) {
          var O = p(M, t);
          if (!e.accept(O) || _ && !--_) return h(e)
        }
      }
    } else
      for (var D = x; D < w; D++) {
        var A = S[D];
        if (!!(0, u.EN)(A))
          for (var k = (0, i.zU)(v.yearordinal + A), R = 0; R < y.length; R++) {
            var N = y[R],
              M = (0, i.$e)(k, N);
            if (m && M > m) return h(e);
            if (M >= n) {
              var O = p(M, t);
              if (!e.accept(O) || _ && !--_) return h(e)
            }
          }
      }
    if (0 === t.interval) return h(e);
    if (b.add(t, C), b.year > i.VQ) return h(e);
    !(0, r.e)(c) && (y = v.gettimeset(c)(b.hour, b.minute, b.second, 0)), v.rebuild(b.year, b.month)
  }
}

function p(e, t) {
  return new c.M(e, t.tzid).rezonedDate()
}

function h(e) {
  return e.getValue()
}