"use strict";
s.r(e), s("47120");
var l = s("735250"),
  a = s("470079"),
  i = s("803997"),
  n = s.n(i),
  r = s("802433"),
  o = s("680295"),
  d = s("250604"),
  u = s("241822");
e.default = t => {
  let {
    profileEffectId: e,
    isHovering: s,
    forCollectedModal: i = !1,
    isPurchased: c,
    removeSetHeight: f = !1
  } = t, p = i ? 250 : .1, [h, m] = a.useState(!0);
  return (a.useEffect(() => {
    if (!0 !== i) m(!1);
    else {
      let t = setTimeout(() => {
        m(!1)
      }, p);
      return () => {
        clearTimeout(t)
      }
    }
  }, [p, i]), null != e) ? (0, l.jsxs)("div", {
    className: n()(d.previewContainer, {
      [d.previewContainerAnimation]: i,
      [d.previewContainerSetHeight]: !f
    }),
    children: [(0, l.jsx)("img", {
      src: u,
      alt: " ",
      className: i ? d.previewForCollected : d.preview,
      "aria-hidden": !0
    }), !h && (0, l.jsx)("div", {
      className: c ? d.purchasedEffect : void 0,
      children: (0, l.jsx)(o.default, {
        profileEffectId: e,
        useThumbnail: !0,
        autoPlay: i,
        restartMethod: r.RestartMethod.FromStart,
        resetOnHover: !0,
        isHovering: s,
        introDelay: p,
        useOpacityOnHover: !1,
        shopPreview: !0
      })
    })]
  }) : null
}