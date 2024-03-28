"use strict";
r.r(t);
var n = r("470079"),
  a = r.n(n),
  o = r("844303"),
  i = r("13942"),
  l = r("464854");
t.default = function(e) {
  var t = e.onChange,
    r = e.rgb,
    n = e.hsl,
    u = e.hex,
    s = e.disableAlpha,
    f = (0, o.default)({
      default: {
        fields: {
          display: "flex",
          paddingTop: "4px"
        },
        single: {
          flex: "1",
          paddingLeft: "6px"
        },
        alpha: {
          flex: "1",
          paddingLeft: "6px"
        },
        double: {
          flex: "2"
        },
        input: {
          width: "80%",
          padding: "4px 10% 3px",
          border: "none",
          boxShadow: "inset 0 0 0 1px #ccc",
          fontSize: "11px"
        },
        label: {
          display: "block",
          textAlign: "center",
          fontSize: "11px",
          color: "#222",
          paddingTop: "3px",
          paddingBottom: "4px",
          textTransform: "capitalize"
        }
      },
      disableAlpha: {
        alpha: {
          display: "none"
        }
      }
    }, {
      disableAlpha: s
    }),
    c = function(e, a) {
      e.hex ? i.isValidHex(e.hex) && t({
        hex: e.hex,
        source: "hex"
      }, a) : e.r || e.g || e.b ? t({
        r: e.r || r.r,
        g: e.g || r.g,
        b: e.b || r.b,
        a: r.a,
        source: "rgb"
      }, a) : e.a && (e.a < 0 ? e.a = 0 : e.a > 100 && (e.a = 100), e.a /= 100, t({
        h: n.h,
        s: n.s,
        l: n.l,
        a: e.a,
        source: "rgb"
      }, a))
    };
  return a().createElement("div", {
    style: f.fields,
    className: "flexbox-fix"
  }, a().createElement("div", {
    style: f.double
  }, a().createElement(l.EditableInput, {
    style: {
      input: f.input,
      label: f.label
    },
    label: "hex",
    value: u.replace("#", ""),
    onChange: c
  })), a().createElement("div", {
    style: f.single
  }, a().createElement(l.EditableInput, {
    style: {
      input: f.input,
      label: f.label
    },
    label: "r",
    value: r.r,
    onChange: c,
    dragLabel: "true",
    dragMax: "255"
  })), a().createElement("div", {
    style: f.single
  }, a().createElement(l.EditableInput, {
    style: {
      input: f.input,
      label: f.label
    },
    label: "g",
    value: r.g,
    onChange: c,
    dragLabel: "true",
    dragMax: "255"
  })), a().createElement("div", {
    style: f.single
  }, a().createElement(l.EditableInput, {
    style: {
      input: f.input,
      label: f.label
    },
    label: "b",
    value: r.b,
    onChange: c,
    dragLabel: "true",
    dragMax: "255"
  })), a().createElement("div", {
    style: f.alpha
  }, a().createElement(l.EditableInput, {
    style: {
      input: f.input,
      label: f.label
    },
    label: "a",
    value: Math.round(100 * r.a),
    onChange: c,
    dragLabel: "true",
    dragMax: "100"
  })))
}