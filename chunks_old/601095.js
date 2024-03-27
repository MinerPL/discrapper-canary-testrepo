"use strict";
s.r(e), s.d(e, {
  default: function() {
    return c
  }
}), s("222007");
var l = s("37983"),
  i = s("884691"),
  a = s("414456"),
  n = s.n(a),
  r = s("859498"),
  o = s("635471"),
  u = s("126746"),
  d = s("93902"),
  c = t => {
    let {
      profileEffectId: e,
      isHovering: s,
      forCollectedModal: a = !1,
      isPurchased: c,
      removeSetHeight: f = !1
    } = t, p = a ? 250 : .1, [h, m] = i.useState(!0);
    return (i.useEffect(() => {
      if (!0 !== a) m(!1);
      else {
        let t = setTimeout(() => {
          m(!1)
        }, p);
        return () => {
          clearTimeout(t)
        }
      }
    }, [p, a]), null != e) ? (0, l.jsxs)("div", {
      className: n(u.previewContainer, {
        [u.previewContainerAnimation]: a,
        [u.previewContainerSetHeight]: !f
      }),
      children: [(0, l.jsx)("img", {
        src: d,
        alt: " ",
        className: a ? u.previewForCollected : u.preview,
        "aria-hidden": !0
      }), !h && (0, l.jsx)("div", {
        className: c ? u.purchasedEffect : void 0,
        children: (0, l.jsx)(o.default, {
          profileEffectId: e,
          useThumbnail: !0,
          autoPlay: a,
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