n.d(t, {
  r: function() {
return _;
  }
});
var r = n(717029),
  i = n(25487),
  a = n(846042);

function o(e) {
  return (o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
return typeof e;
  } : function(e) {
return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
  })(e);
}

function s(e, t) {
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
    return t && ('object' === o(t) || 'function' == typeof t) ? t : u(e);
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
return d(u(e = f.call.apply(f, [this].concat(n))), 'priority', 70), d(u(e), 'incompatibleTokens', [
  'a',
  'b',
  'h',
  'K',
  'k',
  't',
  'T'
]), e;
  }
  return r = h, _ = [{
  key: 'parse',
  value: function(e, t, n) {
    switch (t) {
      case 'H':
        return (0, a.ie)(i.z.hour23h, e);
      case 'Ho':
        return n.ordinalNumber(e, {
          unit: 'hour'
        });
      default:
        return (0, a.ZL)(t.length, e);
    }
  }
},
{
  key: 'validate',
  value: function(e, t) {
    return t >= 0 && t <= 23;
  }
},
{
  key: 'set',
  value: function(e, t, n) {
    return e.setUTCHours(n, 0, 0, 0), e;
  }
}
  ], s(r.prototype, _), h;
}(r._);