"use strict";
n.d(t, {
  D: function() {
    return s
  }
});
var r = n(182823),
  i = n(882932),
  a = n(251433),
  o = n(616073);

function s(e) {
  let {
    value: t = 0,
    minValue: n = 0,
    maxValue: s = 100,
    valueLabel: u,
    isIndeterminate: c,
    formatOptions: l = {
      style: "percent"
    }
  } = e, d = (0, r.zL)(e, {
    labelable: !0
  }), {
    labelProps: f,
    fieldProps: p
  } = (0, a.N)({
    ...e,
    labelElementType: "span"
  }), h = ((t = (0, i.uZ)(t, n, s)) - n) / (s - n), m = (0, o.Ux)(l);
  if (!c && !u) {
    let e = "percent" === l.style ? h : t;
    u = m.format(e)
  }
  return {
    progressBarProps: (0, r.dG)(d, {
      ...p,
      "aria-valuenow": c ? void 0 : t,
      "aria-valuemin": n,
      "aria-valuemax": s,
      "aria-valuetext": c ? void 0 : u,
      role: "progressbar"
    }),
    labelProps: f
  }
}