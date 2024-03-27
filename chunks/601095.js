"use strict";
a.r(t), a.d(t, {
  default: function() {
    return u
  }
}), a("222007");
var r = a("37983"),
  n = a("884691"),
  o = a("414456"),
  s = a.n(o),
  i = a("859498"),
  l = a("635471"),
  c = a("126746"),
  d = a("93902"),
  u = e => {
    let {
      profileEffectId: t,
      isHovering: a,
      forCollectedModal: o = !1,
      isPurchased: u,
      removeSetHeight: f = !1
    } = e, C = o ? 250 : .1, [g, p] = n.useState(!0);
    return (n.useEffect(() => {
      if (!0 !== o) p(!1);
      else {
        let e = setTimeout(() => {
          p(!1)
        }, C);
        return () => {
          clearTimeout(e)
        }
      }
    }, [C, o]), null != t) ? (0, r.jsxs)("div", {
      className: s(c.previewContainer, {
        [c.previewContainerAnimation]: o,
        [c.previewContainerSetHeight]: !f
      }),
      children: [(0, r.jsx)("img", {
        src: d,
        alt: " ",
        className: o ? c.previewForCollected : c.preview,
        "aria-hidden": !0
      }), !g && (0, r.jsx)("div", {
        className: u ? c.purchasedEffect : void 0,
        children: (0, r.jsx)(l.default, {
          profileEffectId: t,
          useThumbnail: !0,
          autoPlay: o,
          restartMethod: i.RestartMethod.FromStart,
          resetOnHover: !0,
          isHovering: a,
          introDelay: C,
          useOpacityOnHover: !1,
          shopPreview: !0
        })
      })]
    }) : null
  }