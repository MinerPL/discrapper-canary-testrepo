"use strict";
var r = n(470079),
  i = n(476400),
  a = n.n(i),
  o = n(844303),
  s = n(329022),
  u = n(829307),
  c = n(13942),
  l = n(464854),
  d = function(e) {
    var t = e.onChange,
      n = e.onSwatchHover,
      i = e.hex,
      a = e.colors,
      d = e.width,
      f = e.triangle,
      p = e.styles,
      h = e.className,
      m = (0, o.default)((0, u.Z)({
        default: {
          card: {
            width: d,
            background: "#fff",
            border: "0 solid rgba(0,0,0,0.25)",
            boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
            borderRadius: "4px",
            position: "relative"
          },
          body: {
            padding: "15px 9px 9px 15px"
          },
          label: {
            fontSize: "18px",
            color: "#fff"
          },
          triangle: {
            width: "0px",
            height: "0px",
            borderStyle: "solid",
            borderWidth: "0 9px 10px 9px",
            borderColor: "transparent transparent #fff transparent",
            position: "absolute"
          },
          triangleShadow: {
            width: "0px",
            height: "0px",
            borderStyle: "solid",
            borderWidth: "0 9px 10px 9px",
            borderColor: "transparent transparent rgba(0,0,0,.1) transparent",
            position: "absolute"
          },
          hash: {
            background: "#F0F0F0",
            height: "30px",
            width: "30px",
            borderRadius: "4px 0 0 4px",
            float: "left",
            color: "#98A1A4",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          input: {
            width: "100px",
            fontSize: "14px",
            color: "#666",
            border: "0px",
            outline: "none",
            height: "28px",
            boxShadow: "inset 0 0 0 1px #F0F0F0",
            boxSizing: "content-box",
            borderRadius: "0 4px 4px 0",
            float: "left",
            paddingLeft: "8px"
          },
          swatch: {
            width: "30px",
            height: "30px",
            float: "left",
            borderRadius: "4px",
            margin: "0 6px 6px 0"
          },
          clear: {
            clear: "both"
          }
        },
        "hide-triangle": {
          triangle: {
            display: "none"
          },
          triangleShadow: {
            display: "none"
          }
        },
        "top-left-triangle": {
          triangle: {
            top: "-10px",
            left: "12px"
          },
          triangleShadow: {
            top: "-11px",
            left: "12px"
          }
        },
        "top-right-triangle": {
          triangle: {
            top: "-10px",
            right: "12px"
          },
          triangleShadow: {
            top: "-11px",
            right: "12px"
          }
        }
      }, void 0 === p ? {} : p), {
        "hide-triangle": "hide" === f,
        "top-left-triangle": "top-left" === f,
        "top-right-triangle": "top-right" === f
      }),
      g = function(e, n) {
        c.FX(e) && t({
          hex: e,
          source: "hex"
        }, n)
      };
    return r.createElement("div", {
      style: m.card,
      className: "twitter-picker " + (void 0 === h ? "" : h)
    }, r.createElement("div", {
      style: m.triangleShadow
    }), r.createElement("div", {
      style: m.triangle
    }), r.createElement("div", {
      style: m.body
    }, (0, s.Z)(a, function(e, t) {
      return r.createElement(l.m4, {
        key: t,
        color: e,
        hex: e,
        style: m.swatch,
        onClick: g,
        onHover: n,
        focusStyle: {
          boxShadow: "0 0 4px " + e
        }
      })
    }), r.createElement("div", {
      style: m.hash
    }, "#"), r.createElement(l.Vm, {
      label: null,
      style: {
        input: m.input
      },
      value: i.replace("#", ""),
      onChange: g
    }), r.createElement("div", {
      style: m.clear
    })))
  };
d.propTypes = {
  width: a().oneOfType([a().string, a().number]),
  triangle: a().oneOf(["hide", "top-left", "top-right"]),
  colors: a().arrayOf(a().string),
  styles: a().object
}, d.defaultProps = {
  width: 276,
  colors: ["#FF6900", "#FCB900", "#7BDCB5", "#00D084", "#8ED1FC", "#0693E3", "#ABB8C3", "#EB144C", "#F78DA7", "#9900EF"],
  triangle: "top-left",
  styles: {}
}, (0, l.t1)(d)