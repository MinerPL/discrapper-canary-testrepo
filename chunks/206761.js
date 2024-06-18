"use strict";
var r = n(470079),
  i = n(844303),
  a = n(846822),
  o = n(827622),
  s = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  };
t.Z = (0, a.I)(function(e) {
  var t = e.color,
    n = e.style,
    a = e.onClick,
    u = void 0 === a ? function() {} : a,
    c = e.onHover,
    l = e.title,
    d = void 0 === l ? t : l,
    f = e.children,
    p = e.focus,
    h = e.focusStyle,
    m = "transparent" === t,
    g = (0, i.default)({
      default: {
        swatch: s({
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
  }), r.createElement("div", s({
    style: g.swatch,
    onClick: function(e) {
      return u(t, e)
    },
    title: d,
    tabIndex: 0,
    onKeyDown: function(e) {
      return 13 === e.keyCode && u(t, e)
    }
  }, _), f, m && r.createElement(o.Z, {
    borderRadius: g.swatch.borderRadius,
    boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)"
  }))
})