"use strict";
t.__esModule = !0, t.default = void 0;
var o = u(n(476400)),
  i = u(n(470079)),
  r = n(823189),
  a = n(381862);

function u(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}

function s() {
  return (s = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
    }
    return e
  }).apply(this, arguments)
}

function l(e) {
  if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e
}
var c = Object.values || function(e) {
    return Object.keys(e).map(function(t) {
      return e[t]
    })
  },
  p = function(e) {
    function t(t, n) {
      var o, i = (o = e.call(this, t, n) || this).handleExited.bind(l(l(o)));
      return o.state = {
        handleExited: i,
        firstRender: !0
      }, o
    }
    n = t, o = e, n.prototype = Object.create(o.prototype), n.prototype.constructor = n, n.__proto__ = o;
    var n, o, r = t.prototype;
    return r.getChildContext = function() {
      return {
        transitionGroup: {
          isMounting: !this.appeared
        }
      }
    }, r.componentDidMount = function() {
      this.appeared = !0, this.mounted = !0
    }, r.componentWillUnmount = function() {
      this.mounted = !1
    }, t.getDerivedStateFromProps = function(e, t) {
      var n = t.children,
        o = t.handleExited;
      return {
        children: t.firstRender ? (0, a.getInitialChildMapping)(e, o) : (0, a.getNextChildMapping)(e, n, o),
        firstRender: !1
      }
    }, r.handleExited = function(e, t) {
      var n = (0, a.getChildMapping)(this.props.children);
      !(e.key in n) && (e.props.onExited && e.props.onExited(t), this.mounted && this.setState(function(t) {
        var n = s({}, t.children);
        return delete n[e.key], {
          children: n
        }
      }))
    }, r.render = function() {
      var e = this.props,
        t = e.component,
        n = e.childFactory,
        o = function(e, t) {
          if (null == e) return {};
          var n, o, i = {},
            r = Object.keys(e);
          for (o = 0; o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && (i[n] = e[n]);
          return i
        }(e, ["component", "childFactory"]),
        r = c(this.state.children).map(n);
      return (delete o.appear, delete o.enter, delete o.exit, null === t) ? r : i.default.createElement(t, o, r)
    }, t
  }(i.default.Component);
p.childContextTypes = {
  transitionGroup: o.default.object.isRequired
}, p.propTypes = {}, p.defaultProps = {
  component: "div",
  childFactory: function(e) {
    return e
  }
};
var d = (0, r.polyfill)(p);
t.default = d, e.exports = t.default