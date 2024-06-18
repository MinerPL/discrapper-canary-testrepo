"use strict";
Object.defineProperty(t, "__esModule", {
  value: !0
}), t.Alpha = void 0;
var r = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  },
  i = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }
    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t
    }
  }(),
  a = n(470079),
  o = l(a),
  s = l(n(844303)),
  u = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t.default = e, t
  }(n(531262)),
  c = l(n(263081));

function l(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}

function d(e, t) {
  if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && ("object" == typeof t || "function" == typeof t) ? t : e
}
var f = t.Alpha = function(e) {
  function t() {
    ! function(e, t) {
      if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }(this, t);
    for (var e, n, r, i = arguments.length, a = Array(i), o = 0; o < i; o++) a[o] = arguments[o];
    return n = r = d(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a))), r.handleChange = function(e) {
      var t = u.calculateChange(e, r.props.hsl, r.props.direction, r.props.a, r.container);
      t && "function" == typeof r.props.onChange && r.props.onChange(t, e)
    }, r.handleMouseDown = function(e) {
      r.handleChange(e), window.addEventListener("mousemove", r.handleChange), window.addEventListener("mouseup", r.handleMouseUp)
    }, r.handleMouseUp = function() {
      r.unbindEventListeners()
    }, r.unbindEventListeners = function() {
      window.removeEventListener("mousemove", r.handleChange), window.removeEventListener("mouseup", r.handleMouseUp)
    }, d(r, n)
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
  }(t, e), i(t, [{
    key: "componentWillUnmount",
    value: function() {
      this.unbindEventListeners()
    }
  }, {
    key: "render",
    value: function() {
      var e = this,
        t = this.props.rgb,
        n = (0, s.default)({
          default: {
            alpha: {
              absolute: "0px 0px 0px 0px",
              borderRadius: this.props.radius
            },
            checkboard: {
              absolute: "0px 0px 0px 0px",
              overflow: "hidden",
              borderRadius: this.props.radius
            },
            gradient: {
              absolute: "0px 0px 0px 0px",
              background: "linear-gradient(to right, rgba(" + t.r + "," + t.g + "," + t.b + ", 0) 0%,\n           rgba(" + t.r + "," + t.g + "," + t.b + ", 1) 100%)",
              boxShadow: this.props.shadow,
              borderRadius: this.props.radius
            },
            container: {
              position: "relative",
              height: "100%",
              margin: "0 3px"
            },
            pointer: {
              position: "absolute",
              left: 100 * t.a + "%"
            },
            slider: {
              width: "4px",
              borderRadius: "1px",
              height: "8px",
              boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
              background: "#fff",
              marginTop: "1px",
              transform: "translateX(-2px)"
            }
          },
          vertical: {
            gradient: {
              background: "linear-gradient(to bottom, rgba(" + t.r + "," + t.g + "," + t.b + ", 0) 0%,\n           rgba(" + t.r + "," + t.g + "," + t.b + ", 1) 100%)"
            },
            pointer: {
              left: 0,
              top: 100 * t.a + "%"
            }
          },
          overwrite: r({}, this.props.style)
        }, {
          vertical: "vertical" === this.props.direction,
          overwrite: !0
        });
      return o.default.createElement("div", {
        style: n.alpha
      }, o.default.createElement("div", {
        style: n.checkboard
      }, o.default.createElement(c.default, {
        renderers: this.props.renderers
      })), o.default.createElement("div", {
        style: n.gradient
      }), o.default.createElement("div", {
        style: n.container,
        ref: function(t) {
          return e.container = t
        },
        onMouseDown: this.handleMouseDown,
        onTouchMove: this.handleChange,
        onTouchStart: this.handleChange
      }, o.default.createElement("div", {
        style: n.pointer
      }, this.props.pointer ? o.default.createElement(this.props.pointer, this.props) : o.default.createElement("div", {
        style: n.slider
      }))))
    }
  }]), t
}(a.PureComponent || a.Component);
t.default = f