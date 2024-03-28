"use strict";
r.r(t);
var n = r("470079"),
  a = r.n(n),
  o = r("844303"),
  i = r("464854");
t.default = function(e) {
  var t = e.hex,
    r = e.rgb,
    n = e.onChange,
    l = (0, o.default)({
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
    u = function(e, t) {
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
  return a().createElement("div", {
    style: l.fields,
    className: "flexbox-fix"
  }, a().createElement("div", {
    style: l.active
  }), a().createElement(i.EditableInput, {
    style: {
      wrap: l.HEXwrap,
      input: l.HEXinput,
      label: l.HEXlabel
    },
    label: "hex",
    value: t,
    onChange: u
  }), a().createElement(i.EditableInput, {
    style: {
      wrap: l.RGBwrap,
      input: l.RGBinput,
      label: l.RGBlabel
    },
    label: "r",
    value: r.r,
    onChange: u
  }), a().createElement(i.EditableInput, {
    style: {
      wrap: l.RGBwrap,
      input: l.RGBinput,
      label: l.RGBlabel
    },
    label: "g",
    value: r.g,
    onChange: u
  }), a().createElement(i.EditableInput, {
    style: {
      wrap: l.RGBwrap,
      input: l.RGBinput,
      label: l.RGBlabel
    },
    label: "b",
    value: r.b,
    onChange: u
  }))
}