"use strict";
Object.defineProperty(t, "__esModule", {
  value: !0
}), t.active = void 0;
var r = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  },
  i = function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }(n(470079));

function a(e, t) {
  if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && ("object" == typeof t || "function" == typeof t) ? t : e
}
var o = t.active = function(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
  return function(n) {
    function o() {
      ! function(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
      }(this, o);
      for (var n, s, u, c = arguments.length, l = Array(c), d = 0; d < c; d++) l[d] = arguments[d];
      return s = u = a(this, (n = o.__proto__ || Object.getPrototypeOf(o)).call.apply(n, [this].concat(l))), u.state = {
        active: !1
      }, u.handleMouseDown = function() {
        return u.setState({
          active: !0
        })
      }, u.handleMouseUp = function() {
        return u.setState({
          active: !1
        })
      }, u.render = function() {
        return i.default.createElement(t, {
          onMouseDown: u.handleMouseDown,
          onMouseUp: u.handleMouseUp
        }, i.default.createElement(e, r({}, u.props, u.state)))
      }, a(u, s)
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
    }(o, n), o
  }(i.default.Component)
};
t.default = o