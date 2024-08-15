n.d(t, {
  t: function() {
return _;
  }
});
var r = n(717029),
  i = n(25487),
  a = n(846042);

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
var _ = function(e) {
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
  }(h, e);
  var t, n, r, _, E, f = (t = h, n = function() {
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

  function h() {
var e;
! function(e, t) {
  if (!(e instanceof t))
    throw TypeError('Cannot call a class as a function');
}(this, h);
for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
  n[r] = arguments[r];
return d(u(e = f.call.apply(f, [this].concat(n))), 'priority', 110), d(u(e), 'incompatibleTokens', [
  'Y',
  'R',
  'q',
  'Q',
  'M',
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
  return r = h, _ = [{
  key: 'parse',
  value: function(e, t, n) {
    var r = function(e) {
      return e - 1;
    };
    switch (t) {
      case 'L':
        return (0, a.jg)((0, a.ie)(i.z.month, e), r);
      case 'LL':
        return (0, a.jg)((0, a.ZL)(2, e), r);
      case 'Lo':
        return (0, a.jg)(n.ordinalNumber(e, {
          unit: 'month'
        }), r);
      case 'LLL':
        return n.month(e, {
          width: 'abbreviated',
          context: 'standalone'
        }) || n.month(e, {
          width: 'narrow',
          context: 'standalone'
        });
      case 'LLLLL':
        return n.month(e, {
          width: 'narrow',
          context: 'standalone'
        });
      default:
        return n.month(e, {
          width: 'wide',
          context: 'standalone'
        }) || n.month(e, {
          width: 'abbreviated',
          context: 'standalone'
        }) || n.month(e, {
          width: 'narrow',
          context: 'standalone'
        });
    }
  }
},
{
  key: 'validate',
  value: function(e, t) {
    return t >= 0 && t <= 11;
  }
},
{
  key: 'set',
  value: function(e, t, n) {
    return e.setUTCMonth(n, 1), e.setUTCHours(0, 0, 0, 0), e;
  }
}
  ], o(r.prototype, _), h;
}(r._);