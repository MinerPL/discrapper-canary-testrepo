"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("781738");
var r = n("37983");
n("884691");
var a = n("414456"),
  i = n.n(a),
  l = n("77078"),
  o = n("254490"),
  s = n("891653"),
  u = n("632892"),
  d = n("881049");

function c(e) {
  let {
    errors: t
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: t.map((e, t) => (0, r.jsx)(l.Text, {
      variant: "text-xs/normal",
      color: "text-danger",
      className: d.errorMessage,
      children: e.replace(/[0-9.,]+ ?kb/g, e => {
        let t = 1024 * parseInt(e, 10);
        return isNaN(t) ? e : (0, o.sizeString)(t)
      })
    }, t))
  })
}

function f(e) {
  let {
    title: t,
    titleIcon: n,
    titleId: a,
    description: o,
    children: f,
    className: v,
    errors: C,
    disabled: h = !1,
    hideDivider: m = !1,
    showBorder: p = !1,
    borderType: g,
    hasBackground: S = !1,
    forcedDivider: x = !1,
    showPremiumIcon: F = !1
  } = e;
  return (0, r.jsx)("div", {
    className: i(d.customizationSection, v, {
      [d.disabled]: h,
      [d.hideDivider]: m,
      [d.showBorder]: p,
      [d.withDivider]: x
    }),
    children: (0, r.jsxs)(u.default, {
      className: d.customizationSectionBorder,
      backgroundClassName: d.customizationSectionBackground,
      isShown: p,
      type: g,
      hasBackground: S,
      children: [(0, r.jsxs)(l.FormTitle, {
        className: d.title,
        id: a,
        children: [t, F && (0, r.jsx)(s.default, {}), n]
      }), null != o ? (0, r.jsx)(l.FormText, {
        type: l.FormText.Types.DESCRIPTION,
        className: d.sectionDescription,
        children: o
      }) : null, f, null != C && (0, r.jsx)(c, {
        errors: C
      })]
    })
  })
}