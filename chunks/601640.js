n.d(t, {
  r: function() {
return l;
  }
});
var r = n(595490),
  i = n.n(r),
  a = n(470079),
  s = n(175806);

function o(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++)
r[n] = e[n];
  return r;
}

function l(e, t, n) {
  var r, l, u = (l = 2, function(e) {
  if (Array.isArray(e))
    return e;
}(r = (0, a.useState)(function() {
  return t(e);
})) || function(e, t) {
  var n, r, i = null == e ? null : 'undefined' != typeof Symbol && e[Symbol.iterator] || e['@@iterator'];
  if (null != i) {
    var a = [],
      s = !0,
      o = !1;
    try {
      for (i = i.call(e); !(s = (n = i.next()).done) && (a.push(n.value), !t || a.length !== t); s = !0);
    } catch (e) {
      o = !0, r = e;
    } finally {
      try {
        !s && null != i.return && i.return();
      } finally {
        if (o)
          throw r;
      }
    }
    return a;
  }
}(r, 2) || function(e, t) {
  if (e) {
    if ('string' == typeof e)
      return o(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if ('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)
      return Array.from(e);
    if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return o(e, t);
  }
}(r, l) || function() {
  throw TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}()),
c = u[0],
d = u[1],
_ = (0, a.useCallback)(function() {
  var r = t(e);
  !i()(c, r) && (d(r), n && n());
}, [
  c,
  e,
  n
]);
  return (0, s.L)(_), [
c,
_
  ];
}