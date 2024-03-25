"use strict";
r.r(t);
var n = r("884691"),
  a = r.n(n),
  o = r("416037"),
  i = r.n(o),
  u = r("849122"),
  l = r("882982"),
  s = r("123090"),
  f = r("347415"),
  c = r("591660"),
  d = r("119909"),
  p = function(e) {
    var t = e.width,
      r = e.onChange,
      n = e.rgb,
      o = e.hsl,
      i = e.hsv,
      p = e.hex,
      h = e.header,
      b = e.styles,
      v = e.className,
      g = (0, u.default)((0, l.default)({
        default: {
          picker: {
            width: t,
            background: "#fff",
            border: "1px solid #dfe1e5",
            boxSizing: "initial",
            display: "flex",
            flexWrap: "wrap",
            borderRadius: "8px 8px 0px 0px"
          },
          head: {
            height: "57px",
            width: "100%",
            paddingTop: "16px",
            paddingBottom: "16px",
            paddingLeft: "16px",
            fontSize: "20px",
            boxSizing: "border-box",
            fontFamily: "Roboto-Regular,HelveticaNeue,Arial,sans-serif"
          },
          saturation: {
            width: "70%",
            padding: "0px",
            position: "relative",
            overflow: "hidden"
          },
          swatch: {
            width: "30%",
            height: "228px",
            padding: "0px",
            background: "rgba(" + n.r + ", " + n.g + ", " + n.b + ", 1)",
            position: "relative",
            overflow: "hidden"
          },
          body: {
            margin: "auto",
            width: "95%"
          },
          controls: {
            display: "flex",
            boxSizing: "border-box",
            height: "52px",
            paddingTop: "22px"
          },
          color: {
            width: "32px"
          },
          hue: {
            height: "8px",
            position: "relative",
            margin: "0px 16px 0px 16px",
            width: "100%"
          },
          Hue: {
            radius: "2px"
          }
        }
      }, void 0 === b ? {} : b));
    return a.createElement("div", {
      style: g.picker,
      className: "google-picker " + (void 0 === v ? "" : v)
    }, a.createElement("div", {
      style: g.head
    }, h), a.createElement("div", {
      style: g.swatch
    }), a.createElement("div", {
      style: g.saturation
    }, a.createElement(s.Saturation, {
      hsl: o,
      hsv: i,
      pointer: f.default,
      onChange: r
    })), a.createElement("div", {
      style: g.body
    }, a.createElement("div", {
      style: g.controls,
      className: "flexbox-fix"
    }, a.createElement("div", {
      style: g.hue
    }, a.createElement(s.Hue, {
      style: g.Hue,
      hsl: o,
      radius: "4px",
      pointer: c.default,
      onChange: r
    }))), a.createElement(d.default, {
      rgb: n,
      hsl: o,
      hex: p,
      hsv: i,
      onChange: r
    })))
  };
p.propTypes = {
  width: i.oneOfType([i.string, i.number]),
  styles: i.object,
  header: i.string
}, p.defaultProps = {
  width: 652,
  styles: {},
  header: "Color picker"
}, (0, s.ColorWrap)(p)