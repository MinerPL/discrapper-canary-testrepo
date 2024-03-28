"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("757143");
var i = n("735250");
n("470079");
var s = n("803997"),
  a = n.n(s),
  l = n("481060"),
  r = n("403182"),
  u = n("587446"),
  o = n("504983"),
  c = n("669967");

function d(e) {
  let {
    errors: t
  } = e;
  return (0, i.jsx)(i.Fragment, {
    children: t.map((e, t) => (0, i.jsx)(l.Text, {
      variant: "text-xs/normal",
      color: "text-danger",
      className: c.errorMessage,
      children: e.replace(/[0-9.,]+ ?kb/g, e => {
        let t = 1024 * parseInt(e, 10);
        return isNaN(t) ? e : (0, r.sizeString)(t)
      })
    }, t))
  })
}

function m(e) {
  let {
    title: t,
    titleIcon: n,
    titleId: s,
    description: r,
    children: m,
    className: f,
    errors: p,
    disabled: S = !1,
    hideDivider: _ = !1,
    showBorder: I = !1,
    borderType: E,
    hasBackground: P = !1,
    forcedDivider: T = !1,
    showPremiumIcon: N = !1
  } = e;
  return (0, i.jsx)("div", {
    className: a()(c.customizationSection, f, {
      [c.disabled]: S,
      [c.hideDivider]: _,
      [c.showBorder]: I,
      [c.withDivider]: T
    }),
    children: (0, i.jsxs)(o.default, {
      className: c.customizationSectionBorder,
      backgroundClassName: c.customizationSectionBackground,
      isShown: I,
      type: E,
      hasBackground: P,
      children: [(0, i.jsxs)(l.FormTitle, {
        className: c.title,
        id: s,
        children: [t, N && (0, i.jsx)(u.default, {}), n]
      }), null != r ? (0, i.jsx)(l.FormText, {
        type: l.FormText.Types.DESCRIPTION,
        className: c.sectionDescription,
        children: r
      }) : null, m, null != p && (0, i.jsx)(d, {
        errors: p
      })]
    })
  })
}