"use strict";
r.r(t);
var n = r("470079"),
  a = r.n(n),
  o = r("476400"),
  i = r.n(o),
  l = r("844303"),
  u = r("329022"),
  s = r("707850"),
  f = r("13942"),
  c = r("464854"),
  d = function(e) {
    var t = e.onChange,
      r = e.onSwatchHover,
      n = e.hex,
      o = e.colors,
      i = e.width,
      d = e.triangle,
      p = e.styles,
      h = e.className,
      b = (0, l.default)((0, s.default)({
        default: {
          card: {
            width: i,
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
        "hide-triangle": "hide" === d,
        "top-left-triangle": "top-left" === d,
        "top-right-triangle": "top-right" === d
      }),
      v = function(e, r) {
        f.isValidHex(e) && t({
          hex: e,
          source: "hex"
        }, r)
      };
    return a().createElement("div", {
      style: b.card,
      className: "twitter-picker " + (void 0 === h ? "" : h)
    }, a().createElement("div", {
      style: b.triangleShadow
    }), a().createElement("div", {
      style: b.triangle
    }), a().createElement("div", {
      style: b.body
    }, (0, u.default)(o, function(e, t) {
      return a().createElement(c.Swatch, {
        key: t,
        color: e,
        hex: e,
        style: b.swatch,
        onClick: v,
        onHover: r,
        focusStyle: {
          boxShadow: "0 0 4px " + e
        }
      })
    }), a().createElement("div", {
      style: b.hash
    }, "#"), a().createElement(c.EditableInput, {
      label: null,
      style: {
        input: b.input
      },
      value: n.replace("#", ""),
      onChange: v
    }), a().createElement("div", {
      style: b.clear
    })))
  };
d.propTypes = {
  width: i().oneOfType([i().string, i().number]),
  triangle: i().oneOf(["hide", "top-left", "top-right"]),
  colors: i().arrayOf(i().string),
  styles: i().object
}, d.defaultProps = {
  width: 276,
  colors: ["#FF6900", "#FCB900", "#7BDCB5", "#00D084", "#8ED1FC", "#0693E3", "#ABB8C3", "#EB144C", "#F78DA7", "#9900EF"],
  triangle: "top-left",
  styles: {}
}, (0, c.ColorWrap)(d)