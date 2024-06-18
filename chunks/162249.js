"use strict";
var r = n(470079),
  i = n(844303),
  a = n(230866),
  o = n(827622),
  s = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  },
  u = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }
    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t
    }
  }();

function c(e, t) {
  if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && ("object" == typeof t || "function" == typeof t) ? t : e
}
var l = function(e) {
  function t() {
    ! function(e, t) {
      if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }(this, t);
    for (var e, n, r, i = arguments.length, o = Array(i), s = 0; s < i; s++) o[s] = arguments[s];
    return n = r = c(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(o))), r.handleChange = function(e) {
      var t = a.T(e, r.props.hsl, r.props.direction, r.props.a, r.container);
      t && "function" == typeof r.props.onChange && r.props.onChange(t, e)
    }, r.handleMouseDown = function(e) {
      r.handleChange(e), window.addEventListener("mousemove", r.handleChange), window.addEventListener("mouseup", r.handleMouseUp)
    }, r.handleMouseUp = function() {
      r.unbindEventListeners()
    }, r.unbindEventListeners = function() {
      window.removeEventListener("mousemove", r.handleChange), window.removeEventListener("mouseup", r.handleMouseUp)
    }, c(r, n)
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
  }(t, e), u(t, [{
    key: "componentWillUnmount",
    value: function() {
      this.unbindEventListeners()
    }
  }, {
    key: "render",
    value: function() {
      var e = this,
        t = this.props.rgb,
        n = (0, i.default)({
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
          overwrite: s({}, this.props.style)
        }, {
          vertical: "vertical" === this.props.direction,
          overwrite: !0
        });
      return r.createElement("div", {
        style: n.alpha
      }, r.createElement("div", {
        style: n.checkboard
      }, r.createElement(o.Z, {
        renderers: this.props.renderers
      })), r.createElement("div", {
        style: n.gradient
      }), r.createElement("div", {
        style: n.container,
        ref: function(t) {
          return e.container = t
        },
        onMouseDown: this.handleMouseDown,
        onTouchMove: this.handleChange,
        onTouchStart: this.handleChange
      }, r.createElement("div", {
        style: n.pointer
      }, this.props.pointer ? r.createElement(this.props.pointer, this.props) : r.createElement("div", {
        style: n.slider
      }))))
    }
  }]), t
}(r.PureComponent || r.Component);
t.Z = l