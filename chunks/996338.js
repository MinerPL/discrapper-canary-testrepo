"use strict";
var r = n(470079),
  i = n(844303),
  a = n(13942),
  o = n(464854);
t.Z = function(e) {
  var t = e.onChange,
    n = e.rgb,
    s = e.hsl,
    u = e.hex,
    c = e.disableAlpha,
    l = (0, i.default)({
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
      disableAlpha: c
    }),
    d = function(e, r) {
      e.hex ? a.FX(e.hex) && t({
        hex: e.hex,
        source: "hex"
      }, r) : e.r || e.g || e.b ? t({
        r: e.r || n.r,
        g: e.g || n.g,
        b: e.b || n.b,
        a: n.a,
        source: "rgb"
      }, r) : e.a && (e.a < 0 ? e.a = 0 : e.a > 100 && (e.a = 100), e.a /= 100, t({
        h: s.h,
        s: s.s,
        l: s.l,
        a: e.a,
        source: "rgb"
      }, r))
    };
  return r.createElement("div", {
    style: l.fields,
    className: "flexbox-fix"
  }, r.createElement("div", {
    style: l.double
  }, r.createElement(o.Vm, {
    style: {
      input: l.input,
      label: l.label
    },
    label: "hex",
    value: u.replace("#", ""),
    onChange: d
  })), r.createElement("div", {
    style: l.single
  }, r.createElement(o.Vm, {
    style: {
      input: l.input,
      label: l.label
    },
    label: "r",
    value: n.r,
    onChange: d,
    dragLabel: "true",
    dragMax: "255"
  })), r.createElement("div", {
    style: l.single
  }, r.createElement(o.Vm, {
    style: {
      input: l.input,
      label: l.label
    },
    label: "g",
    value: n.g,
    onChange: d,
    dragLabel: "true",
    dragMax: "255"
  })), r.createElement("div", {
    style: l.single
  }, r.createElement(o.Vm, {
    style: {
      input: l.input,
      label: l.label
    },
    label: "b",
    value: n.b,
    onChange: d,
    dragLabel: "true",
    dragMax: "255"
  })), r.createElement("div", {
    style: l.alpha
  }, r.createElement(o.Vm, {
    style: {
      input: l.input,
      label: l.label
    },
    label: "a",
    value: Math.round(100 * n.a),
    onChange: d,
    dragLabel: "true",
    dragMax: "100"
  })))
}