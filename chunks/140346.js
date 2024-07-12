n.d(t, {
  x: function() {
return d;
  }
});
var r = n(717029),
  i = n(846042);

function a(e) {
  return (a = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
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

function s(e, t) {
  return (s = Object.setPrototypeOf || function(e, t) {
return e.__proto__ = t, e;
  })(e, t);
}

function l(e) {
  if (void 0 === e)
throw ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return e;
}

function u(e) {
  return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
return e.__proto__ || Object.getPrototypeOf(e);
  })(e);
}

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
var d = function(e) {
  ! function(e, t) {
if ('function' != typeof t && null !== t)
  throw TypeError('Super expression must either be null or a function');
e.prototype = Object.create(t && t.prototype, {
  constructor: {
    value: e,
    writable: !0,
    configurable: !0
  }
}), t && s(e, t);
  }(f, e);
  var t, n, r, d, _, E = (t = f, n = function() {
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
var e, r = u(t);
return e = n ? Reflect.construct(r, arguments, u(this).constructor) : r.apply(this, arguments),
  function(e, t) {
    return t && ('object' === a(t) || 'function' == typeof t) ? t : l(e);
  }(this, e);
  });

  function f() {
var e;
! function(e, t) {
  if (!(e instanceof t))
    throw TypeError('Cannot call a class as a function');
}(this, f);
for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
  n[r] = arguments[r];
return c(l(e = E.call.apply(E, [this].concat(n))), 'priority', 120), c(l(e), 'incompatibleTokens', [
  'Y',
  'R',
  'Q',
  'M',
  'L',
  'w',
  'I',
  'd',
  'D',
  'i',
  'e',
  'c',
  't',
  'T'
]), e;
  }
  return r = f, d = [{
  key: 'parse',
  value: function(e, t, n) {
    switch (t) {
      case 'q':
      case 'qq':
        return (0, i.ZL)(t.length, e);
      case 'qo':
        return n.ordinalNumber(e, {
          unit: 'quarter'
        });
      case 'qqq':
        return n.quarter(e, {
          width: 'abbreviated',
          context: 'standalone'
        }) || n.quarter(e, {
          width: 'narrow',
          context: 'standalone'
        });
      case 'qqqqq':
        return n.quarter(e, {
          width: 'narrow',
          context: 'standalone'
        });
      default:
        return n.quarter(e, {
          width: 'wide',
          context: 'standalone'
        }) || n.quarter(e, {
          width: 'abbreviated',
          context: 'standalone'
        }) || n.quarter(e, {
          width: 'narrow',
          context: 'standalone'
        });
    }
  }
},
{
  key: 'validate',
  value: function(e, t) {
    return t >= 1 && t <= 4;
  }
},
{
  key: 'set',
  value: function(e, t, n) {
    return e.setUTCMonth((n - 1) * 3, 1), e.setUTCHours(0, 0, 0, 0), e;
  }
}
  ], o(r.prototype, d), f;
}(r._);