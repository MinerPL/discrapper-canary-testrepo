var r, i = n(531478).codes,
  a = i.ERR_MISSING_ARGS,
  s = i.ERR_STREAM_DESTROYED;

function o(e) {
  if (e)
throw e;
}

function l(e) {
  e();
}

function u(e, t) {
  return e.pipe(t);
}
e.exports = function() {
  for (var e, t, i = arguments.length, c = Array(i), d = 0; d < i; d++)
c[d] = arguments[d];
  var _ = (e = c).length && 'function' == typeof e[e.length - 1] ? e.pop() : o;
  if (Array.isArray(c[0]) && (c = c[0]), c.length < 2)
throw new a('streams');
  var E = c.map(function(e, i) {
var a, o, u, d, f, h, p, m, I = i < c.length - 1;
return a = e, o = I, u = i > 0, f = d = function(e) {
    !t && (t = e), e && E.forEach(l), !I && (E.forEach(l), _(t));
  }, h = !1, d = function() {
    !h && (h = !0, f.apply(void 0, arguments));
  }, p = !1, a.on('close', function() {
    p = !0;
  }), void 0 === r && (r = n(133495)), r(a, {
    readable: o,
    writable: u
  }, function(e) {
    if (e)
      return d(e);
    p = !0, d();
  }), m = !1,
  function(e) {
    if (!p) {
      if (!m) {
        var t;
        if (m = !0, (t = a).setHeader && 'function' == typeof t.abort)
          return a.abort();
        if ('function' == typeof a.destroy)
          return a.destroy();
        d(e || new s('pipe'));
      }
    }
  };
  });
  return c.reduce(u);
};