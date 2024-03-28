"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("735250");
s("470079");
var n = s("803997"),
  l = s.n(n),
  i = s("873546"),
  r = s("481060"),
  o = s("993413"),
  d = s("689938"),
  u = s("644576");

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
        className: l()(u.baseLayout, n),
        children: [t, !i.isMobile && E()]
      })]
    })
  })
}