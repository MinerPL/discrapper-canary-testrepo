"use strict";
Object.defineProperty(t, "__esModule", {
  value: !0
}), t.Swatch = void 0;
var r = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  },
  i = u(n(470079)),
  a = u(n(844303)),
  o = n(207545),
  s = u(n(263081));

function u(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var c = t.Swatch = function(e) {
  var t = e.color,
    n = e.style,
    o = e.onClick,
    u = void 0 === o ? function() {} : o,
    c = e.onHover,
    l = e.title,
    d = void 0 === l ? t : l,
    f = e.children,
    p = e.focus,
    h = e.focusStyle,
    m = "transparent" === t,
    g = (0, a.default)({
      default: {
        swatch: r({
          background: t,
          height: "100%",
          width: "100%",
          cursor: "pointer",
          position: "relative",
          outline: "none"
        }, n, p ? void 0 === h ? {} : h : {})
      }
    }),
    _ = {};
  return c && (_.onMouseOver = function(e) {
    return c(t, e)
  }), i.default.createElement("div", r({
    style: g.swatch,
    onClick: function(e) {
      return u(t, e)
    },
    title: d,
    tabIndex: 0,
    onKeyDown: function(e) {
      return 13 === e.keyCode && u(t, e)
    }
  }, _), f, m && i.default.createElement(s.default, {
    borderRadius: g.swatch.borderRadius,
    boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)"
  }))
};
t.default = (0, o.handleFocus)(c)