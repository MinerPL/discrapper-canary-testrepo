n.d(t, {
  E: function() {
return s;
  }
});
var r = n(324409),
  i = n(209851),
  o = n(175806),
  u = n(402540),
  a = n(368030);

function c(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++)
r[n] = e[n];
  return r;
}

function s(e, t, n) {
  var s = (0, i.N)(),
l = (0, a.W)(e, t),
f = (0, u.b)(e);
  (0, o.L)(function() {
var e, i, o = (i = 2, function(e) {
    if (Array.isArray(e))
      return e;
  }(e = (0, r.n)(f, l, s)) || function(e, t) {
    var n, r, i = null == e ? null : 'undefined' != typeof Symbol && e[Symbol.iterator] || e['@@iterator'];
    if (null != i) {
      var o = [],
        u = !0,
        a = !1;
      try {
        for (i = i.call(e); !(u = (n = i.next()).done) && (o.push(n.value), !t || o.length !== t); u = !0);
      } catch (e) {
        a = !0, r = e;
      } finally {
        try {
          !u && null != i.return && i.return();
        } finally {
          if (a)
            throw r;
        }
      }
      return o;
    }
  }(e, 2) || function(e, t) {
    if (e) {
      if ('string' == typeof e)
        return c(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      if ('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)
        return Array.from(e);
      if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return c(e, t);
    }
  }(e, i) || function() {
    throw TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
  }()),
  u = o[0],
  a = o[1];
return t.receiveHandlerId(u), n.receiveHandlerId(u), a;
  }, [
s,
t,
l,
n,
f.map(function(e) {
  return e.toString();
}).join('|')
  ]);
}