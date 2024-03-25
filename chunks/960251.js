"use strict";
r.r(t);
var n = r("884691"),
  a = r.n(n),
  o = r("416037"),
  i = r.n(o),
  u = r("849122"),
  l = r("882982"),
  s = r("123090"),
  f = r("15523"),
  c = r("786412"),
  d = r("861550"),
  p = function(e) {
    var t = e.width,
      r = e.onChange,
      n = e.disableAlpha,
      o = e.rgb,
      i = e.hsl,
      p = e.hsv,
      h = e.hex,
      b = e.renderers,
      v = e.styles,
      g = e.className,
      x = e.defaultView,
      y = (0, u.default)((0, l.default)({
        default: {
          picker: {
            width: t,
            background: "#fff",
            borderRadius: "2px",
            boxShadow: "0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)",
            boxSizing: "initial",
            fontFamily: "Menlo"
          },
          saturation: {
            width: "100%",
            paddingBottom: "55%",
            position: "relative",
            borderRadius: "2px 2px 0 0",
            overflow: "hidden"
          },
          Saturation: {
            radius: "2px 2px 0 0"
          },
          body: {
            padding: "16px 16px 12px"
          },
          controls: {
            display: "flex"
          },
          color: {
            width: "32px"
          },
          swatch: {
            marginTop: "6px",
            width: "16px",
            height: "16px",
            borderRadius: "8px",
            position: "relative",
            overflow: "hidden"
          },
          active: {
            absolute: "0px 0px 0px 0px",
            borderRadius: "8px",
            boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
            background: "rgba(" + o.r + ", " + o.g + ", " + o.b + ", " + o.a + ")",
            zIndex: "2"
          },
          toggles: {
            flex: "1"
          },
          hue: {
            height: "10px",
            position: "relative",
            marginBottom: "8px"
          },
          Hue: {
            radius: "2px"
          },
          alpha: {
            height: "10px",
            position: "relative"
          },
          Alpha: {
            radius: "2px"
          }
        },
        disableAlpha: {
          color: {
            width: "22px"
          },
          alpha: {
            display: "none"
          },
          hue: {
            marginBottom: "0px"
          },
          swatch: {
            width: "10px",
            height: "10px",
            marginTop: "0px"
          }
        }
      }, void 0 === v ? {} : v), {
        disableAlpha: n
      });
    return a.createElement("div", {
      style: y.picker,
      className: "chrome-picker " + (void 0 === g ? "" : g)
    }, a.createElement("div", {
      style: y.saturation
    }, a.createElement(s.Saturation, {
      style: y.Saturation,
      hsl: i,
      hsv: p,
      pointer: d.default,
      onChange: r
    })), a.createElement("div", {
      style: y.body
    }, a.createElement("div", {
      style: y.controls,
      className: "flexbox-fix"
    }, a.createElement("div", {
      style: y.color
    }, a.createElement("div", {
      style: y.swatch
    }, a.createElement("div", {
      style: y.active
    }), a.createElement(s.Checkboard, {
      renderers: b
    }))), a.createElement("div", {
      style: y.toggles
    }, a.createElement("div", {
      style: y.hue
    }, a.createElement(s.Hue, {
      style: y.Hue,
      hsl: i,
      pointer: c.default,
      onChange: r
    })), a.createElement("div", {
      style: y.alpha
    }, a.createElement(s.Alpha, {
      style: y.Alpha,
      rgb: o,
      hsl: i,
      pointer: c.default,
      renderers: b,
      onChange: r
    })))), a.createElement(f.default, {
      rgb: o,
      hsl: i,
      hex: h,
      view: x,
      onChange: r,
      disableAlpha: n
    })))
  };
p.propTypes = {
  width: i.oneOfType([i.string, i.number]),
  disableAlpha: i.bool,
  styles: i.object,
  defaultView: i.oneOf(["hex", "rgb", "hsl"])
}, p.defaultProps = {
  width: 225,
  disableAlpha: !1,
  styles: {}
}, (0, s.ColorWrap)(p)