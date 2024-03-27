"use strict";
r.r(t), r.d(t, {
  default: function() {
    return l
  }
}), r("781738");
var n = r("884691"),
  a = r.n(n),
  o = r("849122"),
  i = r("281859"),
  u = r("123090"),
  l = function(e) {
    var t = e.onChange,
      r = e.rgb,
      n = e.hsv,
      l = e.hex,
      s = (0, o.default)({
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
      f = function(e, a) {
        e["#"] ? i.isValidHex(e["#"]) && t({
          hex: e["#"],
          source: "hex"
        }, a) : e.r || e.g || e.b ? t({
          r: e.r || r.r,
          g: e.g || r.g,
          b: e.b || r.b,
          source: "rgb"
        }, a) : (e.h || e.s || e.v) && t({
          h: e.h || n.h,
          s: e.s || n.s,
          v: e.v || n.v,
          source: "hsv"
        }, a)
      };
    return a.createElement("div", {
      style: s.fields
    }, a.createElement(u.EditableInput, {
      style: {
        wrap: s.RGBwrap,
        input: s.RGBinput,
        label: s.RGBlabel
      },
      label: "h",
      value: Math.round(n.h),
      onChange: f
    }), a.createElement(u.EditableInput, {
      style: {
        wrap: s.RGBwrap,
        input: s.RGBinput,
        label: s.RGBlabel
      },
      label: "s",
      value: Math.round(100 * n.s),
      onChange: f
    }), a.createElement(u.EditableInput, {
      style: {
        wrap: s.RGBwrap,
        input: s.RGBinput,
        label: s.RGBlabel
      },
      label: "v",
      value: Math.round(100 * n.v),
      onChange: f
    }), a.createElement("div", {
      style: s.divider
    }), a.createElement(u.EditableInput, {
      style: {
        wrap: s.RGBwrap,
        input: s.RGBinput,
        label: s.RGBlabel
      },
      label: "r",
      value: r.r,
      onChange: f
    }), a.createElement(u.EditableInput, {
      style: {
        wrap: s.RGBwrap,
        input: s.RGBinput,
        label: s.RGBlabel
      },
      label: "g",
      value: r.g,
      onChange: f
    }), a.createElement(u.EditableInput, {
      style: {
        wrap: s.RGBwrap,
        input: s.RGBinput,
        label: s.RGBlabel
      },
      label: "b",
      value: r.b,
      onChange: f
    }), a.createElement("div", {
      style: s.divider
    }), a.createElement(u.EditableInput, {
      style: {
        wrap: s.HEXwrap,
        input: s.HEXinput,
        label: s.HEXlabel
      },
      label: "#",
      value: l.replace("#", ""),
      onChange: f
    }), a.createElement("div", {
      style: s.fieldSymbols
    }, a.createElement("div", {
      style: s.symbol
    }, "\xb0"), a.createElement("div", {
      style: s.symbol
    }, "%"), a.createElement("div", {
      style: s.symbol
    }, "%")))
  }