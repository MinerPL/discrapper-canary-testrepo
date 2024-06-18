"use strict";
n.d(t, {
  Z: function() {
    return h
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(580552),
  u = n(240991),
  _ = n(278297),
  d = n(626135),
  c = n(981631),
  E = n(596401),
  I = n(689938),
  T = n(946278);

function h(e) {
  let {
    userBio: t,
    className: n,
    animateOnHover: s = !1,
    isHovering: h = !1,
    lineClamp: S = 6,
    setLineClamp: f = !0,
    textColor: N,
    userId: A
  } = e, m = r.useMemo(() => null != t ? (0, u.YP)(t) : null, [t]);
  if (null == t && null == A) return null;
  if ((0, l.Z)(A)) {
    let e = () => {
      d.default.track(c.rMx.CHANGE_LOG_CTA_CLICKED, {
        cta_type: "profile_bio",
        target: E.D2
      })
    };
    m = (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)("span", {
        children: I.Z.Messages.SYSTEM_DM_CHANGELOG_BIO
      }), (0, i.jsx)("br", {}), (0, i.jsx)("br", {}), (0, i.jsx)("span", {
        children: I.Z.Messages.SYSTEM_DM_CHANGELOG_BIO_WITH_CTA.format({
          blogHook: (t, n) => (0, i.jsx)(a.Anchor, {
            onClick: e,
            target: "_blank",
            rel: "noreferrer noopener",
            href: E.D2,
            children: t
          }, n)
        })
      })]
    })
  }
  return (0, i.jsx)("div", {
    className: o()(n, T.markup),
    children: (0, i.jsx)(a.Text, {
      variant: "text-sm/normal",
      lineClamp: f ? S : void 0,
      color: void 0 !== N ? N : void 0,
      children: (0, i.jsx)(_.G.Provider, {
        value: {
          disableAnimations: s && !h,
          disableInteractions: !1
        },
        children: m
      })
    })
  })
}