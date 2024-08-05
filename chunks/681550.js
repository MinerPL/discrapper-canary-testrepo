n.d(t, {
  G: function() {
return f;
  }
});
var r = n(846042),
  i = n(717029),
  a = n(25487);

function s(e) {
  return (s = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
return typeof e;
  } : function(e) {
return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
  })(e);
}

function o(e, t) {
  for (var n = 0; n < t.length; n++) {
var r = t[n];
r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}

function l(e, t) {
  return (l = Object.setPrototypeOf || function(e, t) {
return e.__proto__ = t, e;
  })(e, t);
}

function u(e) {
  if (void 0 === e)
throw ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return e;
}

function c(e) {
  return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
return e.__proto__ || Object.getPrototypeOf(e);
  })(e);
}

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
var _ = [
31,
28,
31,
30,
31,
30,
31,
31,
30,
31,
30,
31
  ],
  E = [
31,
29,
31,
30,
31,
30,
31,
31,
30,
31,
30,
31
  ],
  f = function(e) {
! function(e, t) {
  if ('function' != typeof t && null !== t)
    throw TypeError('Super expression must either be null or a function');
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && l(e, t);
}(m, e);
var t, n, i, f, h, p = (t = m, n = function() {
  if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if ('function' == typeof Proxy)
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
  } catch (e) {
    return !1;
  }
}(), function() {
  var e, r = c(t);
  return e = n ? Reflect.construct(r, arguments, c(this).constructor) : r.apply(this, arguments),
    function(e, t) {
      return t && ('object' === s(t) || 'function' == typeof t) ? t : u(e);
    }(this, e);
});

function m() {
  var e;
  ! function(e, t) {
    if (!(e instanceof t))
      throw TypeError('Cannot call a class as a function');
  }(this, m);
  for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return d(u(e = p.call.apply(p, [this].concat(n))), 'priority', 90), d(u(e), 'subPriority', 1), d(u(e), 'incompatibleTokens', [
    'Y',
    'R',
    'q',
    'Q',
    'w',
    'I',
    'D',
    'i',
    'e',
    'c',
    't',
    'T'
  ]), e;
}
return i = m, f = [{
    key: 'parse',
    value: function(e, t, n) {
      switch (t) {
        case 'd':
          return (0, r.ie)(a.z.date, e);
        case 'do':
          return n.ordinalNumber(e, {
            unit: 'date'
          });
        default:
          return (0, r.ZL)(t.length, e);
      }
    }
  },
  {
    key: 'validate',
    value: function(e, t) {
      var n = e.getUTCFullYear(),
        i = (0, r.kT)(n),
        a = e.getUTCMonth();
      return i ? t >= 1 && t <= E[a] : t >= 1 && t <= _[a];
    }
  },
  {
    key: 'set',
    value: function(e, t, n) {
      return e.setUTCDate(n), e.setUTCHours(0, 0, 0, 0), e;
    }
  }
], o(i.prototype, f), m;
  }(i._);