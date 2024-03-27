"use strict";
r.r(t), r.d(t, {
  default: function() {
    return s
  }
});
var n = r("884691"),
  a = r.n(n),
  o = r("849122"),
  i = r("987236"),
  u = r("892023"),
  l = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
  },
  s = (0, i.handleFocus)(function(e) {
    var t = e.color,
      r = e.style,
      n = e.onClick,
      i = void 0 === n ? function() {} : n,
      s = e.onHover,
      f = e.title,
      c = void 0 === f ? t : f,
      d = e.children,
      p = e.focus,
      h = e.focusStyle,
      b = "transparent" === t,
      v = (0, o.default)({
        default: {
          swatch: l({
            background: t,
            height: "100%",
            width: "100%",
            cursor: "pointer",
            position: "relative",
            outline: "none"
          }, r, p ? void 0 === h ? {} : h : {})
        }
      }),
      g = {};
    return s && (g.onMouseOver = function(e) {
      return s(t, e)
    }), a.createElement("div", l({
      style: v.swatch,
      onClick: function(e) {
        return i(t, e)
      },
      title: c,
      tabIndex: 0,
      onKeyDown: function(e) {
        return 13 === e.keyCode && i(t, e)
      }
    }, g), d, b && a.createElement(u.default, {
      borderRadius: v.swatch.borderRadius,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)"
    }))
  })