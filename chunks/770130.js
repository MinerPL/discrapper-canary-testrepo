"use strict";
t.__esModule = !0, t.default = void 0,
  function(e) {
    if (e && e.__esModule) return;
    var t = {};
    if (null != e) {
      for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
          var o = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
          o.get || o.set ? Object.defineProperty(t, n, o) : t[n] = e[n]
        }
    }
    t.default = e
  }(n(476400));
var o = u(n(121116)),
  i = u(n(938398)),
  r = u(n(470079)),
  a = u(n(562249));

function u(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
n(53165);

function s() {
  return (s = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
    }
    return e
  }).apply(this, arguments)
}
var l = function(e, t) {
    return e && t && t.split(" ").forEach(function(t) {
      return (0, o.default)(e, t)
    })
  },
  c = function(e, t) {
    return e && t && t.split(" ").forEach(function(t) {
      return (0, i.default)(e, t)
    })
  },
  p = function(e) {
    function t() {
      for (var t, n = arguments.length, o = Array(n), i = 0; i < n; i++) o[i] = arguments[i];
      return (t = e.call.apply(e, [this].concat(o)) || this).onEnter = function(e, n) {
        var o = t.getClassNames(n ? "appear" : "enter").className;
        t.removeClasses(e, "exit"), l(e, o), t.props.onEnter && t.props.onEnter(e, n)
      }, t.onEntering = function(e, n) {
        var o = t.getClassNames(n ? "appear" : "enter").activeClassName;
        t.reflowAndAddClass(e, o), t.props.onEntering && t.props.onEntering(e, n)
      }, t.onEntered = function(e, n) {
        var o = t.getClassNames("appear").doneClassName,
          i = t.getClassNames("enter").doneClassName;
        t.removeClasses(e, n ? "appear" : "enter"), l(e, n ? o + " " + i : i), t.props.onEntered && t.props.onEntered(e, n)
      }, t.onExit = function(e) {
        var n = t.getClassNames("exit").className;
        t.removeClasses(e, "appear"), t.removeClasses(e, "enter"), l(e, n), t.props.onExit && t.props.onExit(e)
      }, t.onExiting = function(e) {
        var n = t.getClassNames("exit").activeClassName;
        t.reflowAndAddClass(e, n), t.props.onExiting && t.props.onExiting(e)
      }, t.onExited = function(e) {
        var n = t.getClassNames("exit").doneClassName;
        t.removeClasses(e, "exit"), l(e, n), t.props.onExited && t.props.onExited(e)
      }, t.getClassNames = function(e) {
        var n = t.props.classNames,
          o = "string" == typeof n,
          i = o && n ? n + "-" : "",
          r = o ? i + e : n[e],
          a = o ? r + "-active" : n[e + "Active"],
          u = o ? r + "-done" : n[e + "Done"];
        return {
          className: r,
          activeClassName: a,
          doneClassName: u
        }
      }, t
    }
    n = t, o = e, n.prototype = Object.create(o.prototype), n.prototype.constructor = n, n.__proto__ = o;
    var n, o, i = t.prototype;
    return i.removeClasses = function(e, t) {
      var n = this.getClassNames(t),
        o = n.className,
        i = n.activeClassName,
        r = n.doneClassName;
      o && c(e, o), i && c(e, i), r && c(e, r)
    }, i.reflowAndAddClass = function(e, t) {
      t && (e && e.scrollTop, l(e, t))
    }, i.render = function() {
      var e = s({}, this.props);
      return delete e.classNames, r.default.createElement(a.default, s({}, e, {
        onEnter: this.onEnter,
        onEntered: this.onEntered,
        onEntering: this.onEntering,
        onExit: this.onExit,
        onExiting: this.onExiting,
        onExited: this.onExited
      }))
    }, t
  }(r.default.Component);
p.defaultProps = {
  classNames: ""
}, p.propTypes = {};
t.default = p, e.exports = t.default