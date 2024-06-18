"use strict";
var r = n(470079),
  i = n(476400),
  a = n.n(i),
  o = n(844303),
  s = n(329022),
  u = n(829307),
  c = n(464854),
  l = n(844515),
  d = function(e) {
    var t = e.width,
      n = e.colors,
      i = e.onChange,
      a = e.onSwatchHover,
      c = e.triangle,
      d = e.styles,
      f = e.className,
      p = (0, o.default)((0, u.Z)({
        default: {
          card: {
            width: t,
            background: "#fff",
            border: "1px solid rgba(0,0,0,0.2)",
            boxShadow: "0 3px 12px rgba(0,0,0,0.15)",
            borderRadius: "4px",
            position: "relative",
            padding: "5px",
            display: "flex",
            flexWrap: "wrap"
          },
          triangle: {
            position: "absolute",
            border: "7px solid transparent",
            borderBottomColor: "#fff"
          },
          triangleShadow: {
            position: "absolute",
            border: "8px solid transparent",
            borderBottomColor: "rgba(0,0,0,0.15)"
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
            top: "-14px",
            left: "10px"
          },
          triangleShadow: {
            top: "-16px",
            left: "9px"
          }
        },
        "top-right-triangle": {
          triangle: {
            top: "-14px",
            right: "10px"
          },
          triangleShadow: {
            top: "-16px",
            right: "9px"
          }
        },
        "bottom-left-triangle": {
          triangle: {
            top: "35px",
            left: "10px",
            transform: "rotate(180deg)"
          },
          triangleShadow: {
            top: "37px",
            left: "9px",
            transform: "rotate(180deg)"
          }
        },
        "bottom-right-triangle": {
          triangle: {
            top: "35px",
            right: "10px",
            transform: "rotate(180deg)"
          },
          triangleShadow: {
            top: "37px",
            right: "9px",
            transform: "rotate(180deg)"
          }
        }
      }, void 0 === d ? {} : d), {
        "hide-triangle": "hide" === c,
        "top-left-triangle": "top-left" === c,
        "top-right-triangle": "top-right" === c,
        "bottom-left-triangle": "bottom-left" === c,
        "bottom-right-triangle": "bottom-right" === c
      }),
      h = function(e, t) {
        return i({
          hex: e,
          source: "hex"
        }, t)
      };
    return r.createElement("div", {
      style: p.card,
      className: "github-picker " + (void 0 === f ? "" : f)
    }, r.createElement("div", {
      style: p.triangleShadow
    }), r.createElement("div", {
      style: p.triangle
    }), (0, s.Z)(n, function(e) {
      return r.createElement(l.Z, {
        color: e,
        key: e,
        onClick: h,
        onSwatchHover: a
      })
    }))
  };
d.propTypes = {
  width: a().oneOfType([a().string, a().number]),
  colors: a().arrayOf(a().string),
  triangle: a().oneOf(["hide", "top-left", "top-right", "bottom-left", "bottom-right"]),
  styles: a().object
}, d.defaultProps = {
  width: 200,
  colors: ["#B80000", "#DB3E00", "#FCCB00", "#008B02", "#006B76", "#1273DE", "#004DCF", "#5300EB", "#EB9694", "#FAD0C3", "#FEF3BD", "#C1E1C5", "#BEDADC", "#C4DEF6", "#BED3F3", "#D4C4FB"],
  triangle: "top-left",
  styles: {}
}, (0, c.t1)(d)