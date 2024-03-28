"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
});
var a = s("735250"),
  l = s("470079"),
  n = s("803997"),
  i = s.n(n),
  r = s("481060"),
  o = s("456935"),
  d = s("259580"),
  u = s("916187"),
  c = s("736921"),
  E = s("981631"),
  _ = s("689938"),
  I = s("893079");

function T(e) {
  let {
    guild: t
  } = e, n = t.verificationLevel, T = l.useMemo(() => (0, o.getVerificationLevelText)(n), [n]);
  return (0, a.jsxs)(r.Clickable, {
    onClick: () => (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("72458")]).then(s.bind(s, "694278"));
      return s => (0, a.jsx)(e, {
        ...s,
        guild: t,
        hideColors: !0
      })
    }),
    className: i()(I.simpleItemWrapper, I.clickable),
    children: [(0, a.jsxs)("div", {
      className: I.itemContent,
      children: [(0, a.jsx)(r.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: _.default.Messages.FORM_LABEL_VERIFICATION_LEVEL
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: _.default.Messages.GUILD_SETTINGS_SAFETY_VERIFICATION_DESCRIPTION
      }), (0, a.jsx)("div", {
        className: I.__invalid_pillRow,
        children: (0, a.jsxs)(r.Text, {
          variant: "text-xs/medium",
          color: "interactive-normal",
          className: I.valuePill,
          children: [n === E.VerificationLevels.VERY_HIGH ? (0, a.jsx)(c.default, {
            width: 16,
            height: 16
          }) : (0, a.jsx)(u.default, {
            width: 16,
            height: 16
          }), T]
        })
      })]
    }), (0, a.jsx)(d.default, {
      height: 24,
      width: 24,
      direction: d.default.Directions.RIGHT,
      className: I.caret
    })]
  })
}