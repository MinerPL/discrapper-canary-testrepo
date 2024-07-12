n.d(t, {
  m: function() {
return a;
  }
});
var r = n(239189),
  i = n(217348),
  a = function(e, t, n) {
if (i.is.fun(e))
  return e;
if (i.is.arr(e))
  return a({
    range: e,
    output: t,
    extrapolate: n
  });
if (i.is.str(e.output[0]))
  return r.createStringInterpolator(e);
var o = e.output,
  s = e.range || [
    0,
    1
  ],
  l = e.extrapolateLeft || e.extrapolate || 'extend',
  u = e.extrapolateRight || e.extrapolate || 'extend',
  c = e.easing || function(e) {
    return e;
  };
return function(t) {
  var n = function(e, t) {
    for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
    return n - 1;
  }(t, s);
  return function(e, t, n, r, i, a, o, s, l) {
    var u = l ? l(e) : e;
    if (u < t) {
      if ('identity' === o)
        return u;
      'clamp' === o && (u = t);
    }
    if (u > n) {
      if ('identity' === s)
        return u;
      'clamp' === s && (u = n);
    }
    return r === i ? r : t === n ? e <= t ? r : i : (t === -1 / 0 ? u = -u : n === 1 / 0 ? u -= t : u = (u - t) / (n - t), u = a(u), r === -1 / 0 ? u = -u : i === 1 / 0 ? u += r : u = u * (i - r) + r, u);
  }(t, s[n], s[n + 1], o[n], o[n + 1], c, l, u, e.map);
};
  };