"use strict";
t.r(r), t.d(r, {
  default: function() {
    return g
  }
}), t("47120");
var a = t("735250");
t("470079");
var n = t("346652"),
  i = t("692547"),
  o = t("410030"),
  l = t("68588"),
  s = t("981631"),
  c = t("779869");
let d = {
  base00: i.default.colors.BACKGROUND_SECONDARY.css,
  base03: i.default.colors.TEXT_WARNING.css,
  base07: i.default.colors.TEXT_NORMAL.css,
  base08: i.default.colors.TEXT_MUTED.css,
  base09: i.default.colors.TEXT_POSITIVE.css,
  base0B: i.default.colors.TEXT_WARNING.css,
  base0D: i.default.colors.TEXT_BRAND.css
};

function u(e) {
  let r = {};
  for (let [t, a] of Object.entries(e)) r[t] = a;
  return r
}
let h = u(d),
  p = u(d);

function m(e) {
  return s.TOKEN_REGEX.test(e) ? (0, a.jsx)(l.default, {
    type: l.default.Types.TEXT,
    children: () => (0, a.jsx)(a.Fragment, {
      children: e
    })
  }) : e
}

function g(e) {
  let {
    data: r
  } = e, t = (0, o.default)();
  return (0, a.jsx)("div", {
    className: c.inspectorWrapper,
    children: (0, a.jsx)(n.JSONTree, {
      data: r,
      theme: "light" === t ? p : h,
      invertTheme: !1,
      valueRenderer: m
    })
  })
}