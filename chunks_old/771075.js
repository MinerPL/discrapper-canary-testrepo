"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
});
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("77078"),
  o = s("925993"),
  d = s("461380"),
  u = s("556081"),
  c = s("216947"),
  E = s("49111"),
  _ = s("782340"),
  I = s("854743");

function T(e) {
  let {
    guild: t
  } = e, n = t.verificationLevel, T = l.useMemo(() => (0, o.getVerificationLevelText)(n), [n]);
  return (0, a.jsxs)(r.Clickable, {
    onClick: () => (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await s.el("161069").then(s.bind(s, "161069"));
      return s => (0, a.jsx)(e, {
        ...s,
        guild: t,
        hideColors: !0
      })
    }),
    className: i(I.simpleItemWrapper, I.clickable),
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
        className: I.pillRow,
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