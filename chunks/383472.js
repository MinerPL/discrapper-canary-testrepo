"use strict";
var r = n(470079),
  i = n(844303),
  a = n(829307),
  o = n(13942),
  s = n(464854);
(0, s.t1)(function(e) {
  var t = e.onChange,
    n = e.hex,
    u = e.rgb,
    c = e.styles,
    l = void 0 === c ? {} : c,
    d = e.className,
    f = (0, i.default)((0, a.Z)({
      default: {
        material: {
          width: "98px",
          height: "98px",
          padding: "16px",
          fontFamily: "Roboto"
        },
        HEXwrap: {
          position: "relative"
        },
        HEXinput: {
          width: "100%",
          marginTop: "12px",
          fontSize: "15px",
          color: "#333",
          padding: "0px",
          border: "0px",
          borderBottom: "2px solid " + n,
          outline: "none",
          height: "30px"
        },
        HEXlabel: {
          position: "absolute",
          top: "0px",
          left: "0px",
          fontSize: "11px",
          color: "#999999",
          textTransform: "capitalize"
        },
        Hex: {
          style: {}
        },
        RGBwrap: {
          position: "relative"
        },
        RGBinput: {
          width: "100%",
          marginTop: "12px",
          fontSize: "15px",
          color: "#333",
          padding: "0px",
          border: "0px",
          borderBottom: "1px solid #eee",
          outline: "none",
          height: "30px"
        },
        RGBlabel: {
          position: "absolute",
          top: "0px",
          left: "0px",
          fontSize: "11px",
          color: "#999999",
          textTransform: "capitalize"
        },
        split: {
          display: "flex",
          marginRight: "-10px",
          paddingTop: "11px"
        },
        third: {
          flex: "1",
          paddingRight: "10px"
        }
      }
    }, l)),
    p = function(e, n) {
      e.hex ? o.FX(e.hex) && t({
        hex: e.hex,
        source: "hex"
      }, n) : (e.r || e.g || e.b) && t({
        r: e.r || u.r,
        g: e.g || u.g,
        b: e.b || u.b,
        source: "rgb"
      }, n)
    };
  return r.createElement(s.xZ, {
    styles: l
  }, r.createElement("div", {
    style: f.material,
    className: "material-picker " + (void 0 === d ? "" : d)
  }, r.createElement(s.Vm, {
    style: {
      wrap: f.HEXwrap,
      input: f.HEXinput,
      label: f.HEXlabel
    },
    label: "hex",
    value: n,
    onChange: p
  }), r.createElement("div", {
    style: f.split,
    className: "flexbox-fix"
  }, r.createElement("div", {
    style: f.third
  }, r.createElement(s.Vm, {
    style: {
      wrap: f.RGBwrap,
      input: f.RGBinput,
      label: f.RGBlabel
    },
    label: "r",
    value: u.r,
    onChange: p
  })), r.createElement("div", {
    style: f.third
  }, r.createElement(s.Vm, {
    style: {
      wrap: f.RGBwrap,
      input: f.RGBinput,
      label: f.RGBlabel
    },
    label: "g",
    value: u.g,
    onChange: p
  })), r.createElement("div", {
    style: f.third
  }, r.createElement(s.Vm, {
    style: {
      wrap: f.RGBwrap,
      input: f.RGBinput,
      label: f.RGBlabel
    },
    label: "b",
    value: u.b,
    onChange: p
  })))))
})