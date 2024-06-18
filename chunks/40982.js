"use strict";
var r = n(470079),
  i = n(476400),
  a = n.n(i),
  o = n(844303),
  s = n(829307),
  u = n(464854),
  c = n(996338),
  l = n(691507),
  d = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  },
  f = function(e) {
    var t = e.width,
      n = e.rgb,
      i = e.hex,
      a = e.hsv,
      f = e.hsl,
      p = e.onChange,
      h = e.onSwatchHover,
      m = e.disableAlpha,
      g = e.presetColors,
      _ = e.renderers,
      b = e.styles,
      v = void 0 === b ? {} : b,
      y = e.className,
      E = (0, o.default)((0, s.Z)({
        default: d({
          picker: {
            width: t,
            padding: "10px 10px 0",
            boxSizing: "initial",
            background: "#fff",
            borderRadius: "4px",
            boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)"
          },
          saturation: {
            width: "100%",
            paddingBottom: "75%",
            position: "relative",
            overflow: "hidden"
          },
          Saturation: {
            radius: "3px",
            shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
          },
          controls: {
            display: "flex"
          },
          sliders: {
            padding: "4px 0",
            flex: "1"
          },
          color: {
            width: "24px",
            height: "24px",
            position: "relative",
            marginTop: "4px",
            marginLeft: "4px",
            borderRadius: "3px"
          },
          activeColor: {
            absolute: "0px 0px 0px 0px",
            borderRadius: "2px",
            background: "rgba(" + n.r + "," + n.g + "," + n.b + "," + n.a + ")",
            boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
          },
          hue: {
            position: "relative",
            height: "10px",
            overflow: "hidden"
          },
          Hue: {
            radius: "2px",
            shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
          },
          alpha: {
            position: "relative",
            height: "10px",
            marginTop: "4px",
            overflow: "hidden"
          },
          Alpha: {
            radius: "2px",
            shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
          }
        }, v),
        disableAlpha: {
          color: {
            height: "10px"
          },
          hue: {
            height: "10px"
          },
          alpha: {
            display: "none"
          }
        }
      }, v), {
        disableAlpha: m
      });
    return r.createElement("div", {
      style: E.picker,
      className: "sketch-picker " + (void 0 === y ? "" : y)
    }, r.createElement("div", {
      style: E.saturation
    }, r.createElement(u.OQ, {
      style: E.Saturation,
      hsl: f,
      hsv: a,
      onChange: p
    })), r.createElement("div", {
      style: E.controls,
      className: "flexbox-fix"
    }, r.createElement("div", {
      style: E.sliders
    }, r.createElement("div", {
      style: E.hue
    }, r.createElement(u.PS, {
      style: E.Hue,
      hsl: f,
      onChange: p
    })), r.createElement("div", {
      style: E.alpha
    }, r.createElement(u.xV, {
      style: E.Alpha,
      rgb: n,
      hsl: f,
      renderers: _,
      onChange: p
    }))), r.createElement("div", {
      style: E.color
    }, r.createElement(u.QN, null), r.createElement("div", {
      style: E.activeColor
    }))), r.createElement(c.Z, {
      rgb: n,
      hsl: f,
      hex: i,
      onChange: p,
      disableAlpha: m
    }), r.createElement(l.Z, {
      colors: g,
      onClick: p,
      onSwatchHover: h
    }))
  };
f.propTypes = {
  disableAlpha: a().bool,
  width: a().oneOfType([a().string, a().number]),
  styles: a().object
}, f.defaultProps = {
  disableAlpha: !1,
  width: 200,
  styles: {},
  presetColors: ["#D0021B", "#F5A623", "#F8E71C", "#8B572A", "#7ED321", "#417505", "#BD10E0", "#9013FE", "#4A90E2", "#50E3C2", "#B8E986", "#000000", "#4A4A4A", "#9B9B9B", "#FFFFFF"]
}, (0, u.t1)(f)