"use strict";
var r = n(470079),
  i = n(476400),
  a = n.n(i),
  o = n(844303),
  s = n(829307),
  u = n(13942),
  c = n(464854),
  l = n(465995),
  d = function(e) {
    var t = e.onChange,
      n = e.onSwatchHover,
      i = e.hex,
      a = e.colors,
      d = e.width,
      f = e.triangle,
      p = e.styles,
      h = e.className,
      m = "transparent" === i,
      g = function(e, n) {
        u.FX(e) && t({
          hex: e,
          source: "hex"
        }, n)
      },
      _ = (0, o.default)((0, s.Z)({
        default: {
          card: {
            width: d,
            background: "#fff",
            boxShadow: "0 1px rgba(0,0,0,.1)",
            borderRadius: "6px",
            position: "relative"
          },
          head: {
            height: "110px",
            background: i,
            borderRadius: "6px 6px 0 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative"
          },
          body: {
            padding: "10px"
          },
          label: {
            fontSize: "18px",
            color: u.Qg(i),
            position: "relative"
          },
          triangle: {
            width: "0px",
            height: "0px",
            borderStyle: "solid",
            borderWidth: "0 10px 10px 10px",
            borderColor: "transparent transparent " + i + " transparent",
            position: "absolute",
            top: "-10px",
            left: "50%",
            marginLeft: "-10px"
          },
          input: {
            width: "100%",
            fontSize: "12px",
            color: "#666",
            border: "0px",
            outline: "none",
            height: "22px",
            boxShadow: "inset 0 0 0 1px #ddd",
            borderRadius: "4px",
            padding: "0 7px",
            boxSizing: "border-box"
          }
        },
        "hide-triangle": {
          triangle: {
            display: "none"
          }
        }
      }, void 0 === p ? {} : p), {
        "hide-triangle": "hide" === f
      });
    return r.createElement("div", {
      style: _.card,
      className: "block-picker " + (void 0 === h ? "" : h)
    }, r.createElement("div", {
      style: _.triangle
    }), r.createElement("div", {
      style: _.head
    }, m && r.createElement(c.QN, {
      borderRadius: "6px 6px 0 0"
    }), r.createElement("div", {
      style: _.label
    }, i)), r.createElement("div", {
      style: _.body
    }, r.createElement(l.Z, {
      colors: a,
      onClick: g,
      onSwatchHover: n
    }), r.createElement(c.Vm, {
      style: {
        input: _.input
      },
      value: i,
      onChange: g
    })))
  };
d.propTypes = {
  width: a().oneOfType([a().string, a().number]),
  colors: a().arrayOf(a().string),
  triangle: a().oneOf(["top", "hide"]),
  styles: a().object
}, d.defaultProps = {
  width: 170,
  colors: ["#D9E3F0", "#F47373", "#697689", "#37D67A", "#2CCCE4", "#555555", "#dce775", "#ff8a65", "#ba68c8"],
  triangle: "top",
  styles: {}
}, (0, c.t1)(d)