"use strict";
Object.defineProperty(t, "__esModule", {
  value: !0
}), t.hover = void 0;
var n = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
  },
  a = function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }(r("470079"));

function o(e, t) {
  if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && ("object" == typeof t || "function" == typeof t) ? t : e
}
var i = t.hover = function(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
  return function(r) {
    function i() {
      ! function(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
      }(this, i);
      for (var r, l, u, s = arguments.length, f = Array(s), c = 0; c < s; c++) f[c] = arguments[c];
      return l = u = o(this, (r = i.__proto__ || Object.getPrototypeOf(i)).call.apply(r, [this].concat(f))), u.state = {
        hover: !1
      }, u.handleMouseOver = function() {
        return u.setState({
          hover: !0
        })
      }, u.handleMouseOut = function() {
        return u.setState({
          hover: !1
        })
      }, u.render = function() {
        return a.default.createElement(t, {
          onMouseOver: u.handleMouseOver,
          onMouseOut: u.handleMouseOut
        }, a.default.createElement(e, n({}, u.props, u.state)))
      }, o(u, l)
    }
    return ! function(e, t) {
      if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(i, r), i
  }(a.default.Component)
};
t.default = i