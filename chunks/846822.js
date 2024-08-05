n.d(t, {
  I: function() {
return o;
  }
});
var r = n(470079),
  i = Object.assign || function(e) {
for (var t = 1; t < arguments.length; t++) {
  var n = arguments[t];
  for (var r in n)
    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
}
return e;
  },
  a = function() {
function e(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
return function(t, n, r) {
  return n && e(t.prototype, n), r && e(t, r), t;
};
  }();

function s(e, t) {
  if (!e)
throw ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
}
var o = function(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'span';
  return function(n) {
function o() {
  ! function(e, t) {
    if (!(e instanceof t))
      throw TypeError('Cannot call a class as a function');
  }(this, o);
  for (var e, t, n, r = arguments.length, i = Array(r), a = 0; a < r; a++)
    i[a] = arguments[a];
  return t = n = s(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [this].concat(i))), n.state = {
    focus: !1
  }, n.handleFocus = function() {
    return n.setState({
      focus: !0
    });
  }, n.handleBlur = function() {
    return n.setState({
      focus: !1
    });
  }, s(n, t);
}
return ! function(e, t) {
  if ('function' != typeof t && null !== t)
    throw TypeError('Super expression must either be null or a function, not ' + typeof t);
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}(o, n), a(o, [{
  key: 'render',
  value: function() {
    return r.createElement(t, {
      onFocus: this.handleFocus,
      onBlur: this.handleBlur
    }, r.createElement(e, i({}, this.props, this.state)));
  }
}]), o;
  }(r.Component);
};