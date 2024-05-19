"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var i = n("735250"),
  r = n("470079"),
  a = n("120356"),
  s = n.n(a),
  o = n("481060"),
  l = n("580552"),
  u = n("240991"),
  d = n("278297"),
  _ = n("626135"),
  c = n("981631"),
  E = n("596401"),
  I = n("689938"),
  T = n("946278");

function f(e) {
  let {
    userBio: t,
    className: n,
    animateOnHover: a = !1,
    isHovering: f = !1,
    lineClamp: S = 6,
    setLineClamp: h = !0,
    textColor: A,
    userId: m
  } = e, N = r.useMemo(() => null != t ? (0, u.parseBioReact)(t) : null, [t]);
  if (null == t && null == m) return null;
  if ((0, l.default)(m)) {
    let e = () => {
      _.default.track(c.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
        cta_type: "profile_bio",
        target: E.CHANGELOG_URL
      })
    };
    N = (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)("span", {
        children: I.default.Messages.SYSTEM_DM_CHANGELOG_BIO
      }), (0, i.jsx)("br", {}), (0, i.jsx)("br", {}), (0, i.jsx)("span", {
        children: I.default.Messages.SYSTEM_DM_CHANGELOG_BIO_WITH_CTA.format({
          blogHook: (t, n) => (0, i.jsx)(o.Anchor, {
            onClick: e,
            target: "_blank",
            rel: "noreferrer noopener",
            href: E.CHANGELOG_URL,
            children: t
          }, n)
        })
      })]
    })
  }
  return (0, i.jsx)("div", {
    className: s()(n, T.markup),
    children: (0, i.jsx)(o.Text, {
      variant: "text-sm/normal",
      lineClamp: h ? S : void 0,
      color: void 0 !== A ? A : void 0,
      children: (0, i.jsx)(d.MessagesInteractionContext.Provider, {
        value: {
          disableAnimations: a && !f,
          disableInteractions: !1
        },
        children: N
      })
    })
  })
}