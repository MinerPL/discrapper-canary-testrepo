"use strict";
r.r(t), r.d(t, {
  default: function() {
    return c
  }
});
var n = r("884691"),
  a = r.n(n),
  o = r("416037"),
  i = r.n(o),
  u = r("849122"),
  l = r("123090"),
  s = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
  },
  f = function(e) {
    var t = e.colors,
      r = e.onClick,
      n = void 0 === r ? function() {} : r,
      o = e.onSwatchHover,
      i = (0, u.default)({
        default: {
          colors: {
            margin: "0 -10px",
            padding: "10px 0 0 10px",
            borderTop: "1px solid #eee",
            display: "flex",
            flexWrap: "wrap",
            position: "relative"
          },
          swatchWrap: {
            width: "16px",
            height: "16px",
            margin: "0 10px 10px 0"
          },
          swatch: {
            borderRadius: "3px",
            boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15)"
          }
        },
        "no-presets": {
          colors: {
            display: "none"
          }
        }
      }, {
        "no-presets": !t || !t.length
      }),
      f = function(e, t) {
        n({
          hex: e,
          source: "hex"
        }, t)
      };
    return a.createElement("div", {
      style: i.colors,
      className: "flexbox-fix"
    }, t.map(function(e) {
      var t = "string" == typeof e ? {
          color: e
        } : e,
        r = "" + t.color + (t.title || "");
      return a.createElement("div", {
        key: r,
        style: i.swatchWrap
      }, a.createElement(l.Swatch, s({}, t, {
        style: i.swatch,
        onClick: f,
        onHover: o,
        focusStyle: {
          boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px " + t.color
        }
      })))
    }))
  };
f.propTypes = {
  colors: i.arrayOf(i.oneOfType([i.string, i.shape({
    color: i.string,
    title: i.string
  })])).isRequired
};
var c = f