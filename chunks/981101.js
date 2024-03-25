"use strict";
r.r(t), r.d(t, {
  default: function() {
    return u
  }
});
var n = r("884691"),
  a = r.n(n),
  o = r("849122"),
  i = r("123090"),
  u = function(e) {
    var t = e.hex,
      r = e.rgb,
      n = e.onChange,
      u = (0, o.default)({
        default: {
          fields: {
            display: "flex",
            paddingBottom: "6px",
            paddingRight: "5px",
            position: "relative"
          },
          active: {
            position: "absolute",
            top: "6px",
            left: "5px",
            height: "9px",
            width: "9px",
            background: t
          },
          HEXwrap: {
            flex: "6",
            position: "relative"
          },
          HEXinput: {
            width: "80%",
            padding: "0px",
            paddingLeft: "20%",
            border: "none",
            outline: "none",
            background: "none",
            fontSize: "12px",
            color: "#333",
            height: "16px"
          },
          HEXlabel: {
            display: "none"
          },
          RGBwrap: {
            flex: "3",
            position: "relative"
          },
          RGBinput: {
            width: "70%",
            padding: "0px",
            paddingLeft: "30%",
            border: "none",
            outline: "none",
            background: "none",
            fontSize: "12px",
            color: "#333",
            height: "16px"
          },
          RGBlabel: {
            position: "absolute",
            top: "3px",
            left: "0px",
            lineHeight: "16px",
            textTransform: "uppercase",
            fontSize: "12px",
            color: "#999"
          }
        }
      }),
      l = function(e, t) {
        e.r || e.g || e.b ? n({
          r: e.r || r.r,
          g: e.g || r.g,
          b: e.b || r.b,
          source: "rgb"
        }, t) : n({
          hex: e.hex,
          source: "hex"
        }, t)
      };
    return a.createElement("div", {
      style: u.fields,
      className: "flexbox-fix"
    }, a.createElement("div", {
      style: u.active
    }), a.createElement(i.EditableInput, {
      style: {
        wrap: u.HEXwrap,
        input: u.HEXinput,
        label: u.HEXlabel
      },
      label: "hex",
      value: t,
      onChange: l
    }), a.createElement(i.EditableInput, {
      style: {
        wrap: u.RGBwrap,
        input: u.RGBinput,
        label: u.RGBlabel
      },
      label: "r",
      value: r.r,
      onChange: l
    }), a.createElement(i.EditableInput, {
      style: {
        wrap: u.RGBwrap,
        input: u.RGBinput,
        label: u.RGBlabel
      },
      label: "g",
      value: r.g,
      onChange: l
    }), a.createElement(i.EditableInput, {
      style: {
        wrap: u.RGBwrap,
        input: u.RGBinput,
        label: u.RGBlabel
      },
      label: "b",
      value: r.b,
      onChange: l
    }))
  }