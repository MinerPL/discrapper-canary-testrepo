r.d(t, {
  Z: function() {
return i;
  }
});
var a = r(870271);

function n(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var r = 0, a = Array(t); r < t; r++)
a[r] = e[r];
  return a;
}

function s(e, t, r) {
  var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1 / 0;
  if ('Object' === e) {
var o = Object.getOwnPropertyNames(t);
r && o.sort(!0 === r ? void 0 : r), i = {
  entries: (o = o.slice(a, s + 1)).map(function(e) {
    return {
      key: e,
      value: t[e]
    };
  })
};
  } else if ('Array' === e)
i = {
  entries: t.slice(a, s + 1).map(function(e, t) {
    return {
      key: t + a,
      value: e
    };
  })
};
  else {
var i, c, u = 0,
  l = [],
  b = !0,
  f = 'function' == typeof t.set,
  d = function(e, t) {
    var r = 'undefined' != typeof Symbol && e[Symbol.iterator] || e['@@iterator'];
    if (!r) {
      if (Array.isArray(e) || (r = function(e, t) {
          if (e) {
            if ('string' == typeof e)
              return n(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            if ('Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r)
              return Array.from(e);
            if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
              return n(e, t);
          }
        }(e))) {
        r && (e = r);
        var a = 0,
          s = function() {};
        return {
          s: s,
          n: function() {
            return a >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[a++]
            };
          },
          e: function(e) {
            throw e;
          },
          f: s
        };
      }
      throw TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    var o, i = !0,
      c = !1;
    return {
      s: function() {
        r = r.call(e);
      },
      n: function() {
        var e = r.next();
        return i = e.done, e;
      },
      e: function(e) {
        c = !0, o = e;
      },
      f: function() {
        try {
          !i && null != r.return && r.return();
        } finally {
          if (c)
            throw o;
        }
      }
    };
  }(t);
try {
  for (d.s(); !(c = d.n()).done;) {
    var h = c.value;
    if (u > s) {
      b = !1;
      break;
    }
    a <= u && (f && Array.isArray(h) ? 'string' == typeof h[0] || 'number' == typeof h[0] ? l.push({
      key: h[0],
      value: h[1]
    }) : l.push({
      key: '[entry '.concat(u, ']'),
      value: {
        '[key]': h[0],
        '[value]': h[1]
      }
    }) : l.push({
      key: u,
      value: h
    })), u++;
  }
} catch (e) {
  d.e(e);
} finally {
  d.f();
}
i = {
  hasMore: !b,
  entries: l
};
  }
  return i;
}

function o(e, t, r) {
  for (var a = []; t - e > r * r;)
r *= r;
  for (var n = e; n <= t; n += r)
a.push({
  from: n,
  to: Math.min(t, n + r - 1)
});
  return a;
}

function i(e, t, r, n) {
  var i, c, u, l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
b = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1 / 0,
f = s.bind(null, e, t, r);
  if (!n)
return f().entries;
  var d = b < 1 / 0;
  var h = Math.min(b - l, (i = e, c = t, 'Object' === i ? Object.keys(c).length : 'Array' === i ? c.length : 1 / 0));
  if ('Iterable' !== e) {
if (h <= n || n < 7)
  return f(l, b).entries;
  } else if (h <= n && !d)
return f(l, b).entries;
  if ('Iterable' === e) {
var p = f(l, l + n - 1),
  g = p.hasMore,
  y = p.entries;
u = g ? [].concat((0, a.Z)(y), (0, a.Z)(o(l + n, l + 2 * n - 1, n))) : y;
  } else
u = d ? o(l, b, n) : [].concat((0, a.Z)(f(0, n - 5).entries), (0, a.Z)(o(n - 4, h - 5, n)), (0, a.Z)(f(h - 4, h - 1).entries));
  return u;
}