"use strict";
t.__esModule = !0, t.default = void 0, a(n(476400));
var o = a(n(470079)),
  i = n(699581),
  r = a(n(79125));

function a(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var u = function(e) {
  function t() {
    for (var t, n = arguments.length, o = Array(n), i = 0; i < n; i++) o[i] = arguments[i];
    return (t = e.call.apply(e, [this].concat(o)) || this).handleEnter = function() {
      for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
      return t.handleLifecycle("onEnter", 0, n)
    }, t.handleEntering = function() {
      for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
      return t.handleLifecycle("onEntering", 0, n)
    }, t.handleEntered = function() {
      for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
      return t.handleLifecycle("onEntered", 0, n)
    }, t.handleExit = function() {
      for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
      return t.handleLifecycle("onExit", 1, n)
    }, t.handleExiting = function() {
      for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
      return t.handleLifecycle("onExiting", 1, n)
    }, t.handleExited = function() {
      for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
      return t.handleLifecycle("onExited", 1, n)
    }, t
  }
  n = t, a = e, n.prototype = Object.create(a.prototype), n.prototype.constructor = n, n.__proto__ = a;
  var n, a, u = t.prototype;
  return u.handleLifecycle = function(e, t, n) {
    var r, a = this.props.children,
      u = o.default.Children.toArray(a)[t];
    u.props[e] && (r = u.props)[e].apply(r, n), this.props[e] && this.props[e]((0, i.findDOMNode)(this))
  }, u.render = function() {
    var e = this.props,
      t = e.children,
      n = e.in,
      i = function(e, t) {
        if (null == e) return {};
        var n, o, i = {},
          r = Object.keys(e);
        for (o = 0; o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && (i[n] = e[n]);
        return i
      }(e, ["children", "in"]),
      a = o.default.Children.toArray(t),
      u = a[0],
      s = a[1];
    return delete i.onEnter, delete i.onEntering, delete i.onEntered, delete i.onExit, delete i.onExiting, delete i.onExited, o.default.createElement(r.default, i, n ? o.default.cloneElement(u, {
      key: "first",
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : o.default.cloneElement(s, {
      key: "second",
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }))
  }, t
}(o.default.Component);
u.propTypes = {};
t.default = u, e.exports = t.default