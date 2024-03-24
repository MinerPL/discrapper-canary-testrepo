"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  l = s.n(n),
  i = s("394846"),
  r = s("77078"),
  o = s("570697"),
  d = s("782340"),
  u = s("475830");

function c(e) {
  let {
    children: t,
    className: s,
    layoutClassName: n,
    profilePreview: c,
    previewTitle: S
  } = e, E = () => (0, a.jsx)(o.default, {
    title: null != S ? S : d.default.Messages.PROFILE_CUSTOMIZATION_PREVIEW,
    className: u.preview,
    children: c
  });
  return (0, a.jsx)("div", {
    className: s,
    children: (0, a.jsxs)(r.FormSection, {
      className: u.profileCustomizationSection,
      children: [i.isMobile && E(), (0, a.jsxs)("div", {
        className: l(u.baseLayout, n),
        children: [t, !i.isMobile && E()]
      })]
    })
  })
}