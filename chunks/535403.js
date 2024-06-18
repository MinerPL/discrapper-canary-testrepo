"use strict";
var r = n(470079),
  i = n(476400),
  a = n.n(i),
  o = n(844303),
  s = n(829307),
  u = n(464854),
  c = n(654474),
  l = n(252053),
  d = n(175445),
  f = function(e) {
    var t = e.width,
      n = e.onChange,
      i = e.rgb,
      a = e.hsl,
      f = e.hsv,
      p = e.hex,
      h = e.header,
      m = e.styles,
      g = e.className,
      _ = (0, o.default)((0, s.Z)({
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
            background: "rgba(" + i.r + ", " + i.g + ", " + i.b + ", 1)",
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
      }, void 0 === m ? {} : m));
    return r.createElement("div", {
      style: _.picker,
      className: "google-picker " + (void 0 === g ? "" : g)
    }, r.createElement("div", {
      style: _.head
    }, h), r.createElement("div", {
      style: _.swatch
    }), r.createElement("div", {
      style: _.saturation
    }, r.createElement(u.OQ, {
      hsl: a,
      hsv: f,
      pointer: c.C,
      onChange: n
    })), r.createElement("div", {
      style: _.body
    }, r.createElement("div", {
      style: _.controls,
      className: "flexbox-fix"
    }, r.createElement("div", {
      style: _.hue
    }, r.createElement(u.PS, {
      style: _.Hue,
      hsl: a,
      radius: "4px",
      pointer: l.Z,
      onChange: n
    }))), r.createElement(d.Z, {
      rgb: i,
      hsl: a,
      hex: p,
      hsv: f,
      onChange: n
    })))
  };
f.propTypes = {
  width: a().oneOfType([a().string, a().number]),
  styles: a().object,
  header: a().string
}, f.defaultProps = {
  width: 652,
  styles: {},
  header: "Color picker"
}, (0, u.t1)(f)