"use strict";
var r = n(470079),
  i = n(844303),
  a = n(13942),
  o = n(464854);
t.Z = function(e) {
  var t = e.onChange,
    n = e.rgb,
    s = e.hsv,
    u = e.hex,
    c = (0, i.default)({
      default: {
        fields: {
          paddingTop: "5px",
          paddingBottom: "9px",
          width: "80px",
          position: "relative"
        },
        divider: {
          height: "5px"
        },
        RGBwrap: {
          position: "relative"
        },
        RGBinput: {
          marginLeft: "40%",
          width: "40%",
          height: "18px",
          border: "1px solid #888888",
          boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
          marginBottom: "5px",
          fontSize: "13px",
          paddingLeft: "3px",
          marginRight: "10px"
        },
        RGBlabel: {
          left: "0px",
          top: "0px",
          width: "34px",
          textTransform: "uppercase",
          fontSize: "13px",
          height: "18px",
          lineHeight: "22px",
          position: "absolute"
        },
        HEXwrap: {
          position: "relative"
        },
        HEXinput: {
          marginLeft: "20%",
          width: "80%",
          height: "18px",
          border: "1px solid #888888",
          boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
          marginBottom: "6px",
          fontSize: "13px",
          paddingLeft: "3px"
        },
        HEXlabel: {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "14px",
          textTransform: "uppercase",
          fontSize: "13px",
          height: "18px",
          lineHeight: "22px"
        },
        fieldSymbols: {
          position: "absolute",
          top: "5px",
          right: "-7px",
          fontSize: "13px"
        },
        symbol: {
          height: "20px",
          lineHeight: "22px",
          paddingBottom: "7px"
        }
      }
    }),
    l = function(e, r) {
      e["#"] ? a.FX(e["#"]) && t({
        hex: e["#"],
        source: "hex"
      }, r) : e.r || e.g || e.b ? t({
        r: e.r || n.r,
        g: e.g || n.g,
        b: e.b || n.b,
        source: "rgb"
      }, r) : (e.h || e.s || e.v) && t({
        h: e.h || s.h,
        s: e.s || s.s,
        v: e.v || s.v,
        source: "hsv"
      }, r)
    };
  return r.createElement("div", {
    style: c.fields
  }, r.createElement(o.Vm, {
    style: {
      wrap: c.RGBwrap,
      input: c.RGBinput,
      label: c.RGBlabel
    },
    label: "h",
    value: Math.round(s.h),
    onChange: l
  }), r.createElement(o.Vm, {
    style: {
      wrap: c.RGBwrap,
      input: c.RGBinput,
      label: c.RGBlabel
    },
    label: "s",
    value: Math.round(100 * s.s),
    onChange: l
  }), r.createElement(o.Vm, {
    style: {
      wrap: c.RGBwrap,
      input: c.RGBinput,
      label: c.RGBlabel
    },
    label: "v",
    value: Math.round(100 * s.v),
    onChange: l
  }), r.createElement("div", {
    style: c.divider
  }), r.createElement(o.Vm, {
    style: {
      wrap: c.RGBwrap,
      input: c.RGBinput,
      label: c.RGBlabel
    },
    label: "r",
    value: n.r,
    onChange: l
  }), r.createElement(o.Vm, {
    style: {
      wrap: c.RGBwrap,
      input: c.RGBinput,
      label: c.RGBlabel
    },
    label: "g",
    value: n.g,
    onChange: l
  }), r.createElement(o.Vm, {
    style: {
      wrap: c.RGBwrap,
      input: c.RGBinput,
      label: c.RGBlabel
    },
    label: "b",
    value: n.b,
    onChange: l
  }), r.createElement("div", {
    style: c.divider
  }), r.createElement(o.Vm, {
    style: {
      wrap: c.HEXwrap,
      input: c.HEXinput,
      label: c.HEXlabel
    },
    label: "#",
    value: u.replace("#", ""),
    onChange: l
  }), r.createElement("div", {
    style: c.fieldSymbols
  }, r.createElement("div", {
    style: c.symbol
  }, "\xb0"), r.createElement("div", {
    style: c.symbol
  }, "%"), r.createElement("div", {
    style: c.symbol
  }, "%")))
}