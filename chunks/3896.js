"use strict";
t.d(s, {
  Z: function() {
    return T
  }
});
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(481060),
  o = t(456935),
  c = t(259580),
  d = t(916187),
  u = t(736921),
  E = t(981631),
  _ = t(689938),
  I = t(212723);

function T(e) {
  let {
    guild: s
  } = e, l = s.verificationLevel, T = i.useMemo(() => (0, o.I9)(l), [l]);
  return (0, n.jsxs)(r.Clickable, {
    onClick: () => (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("72458")]).then(t.bind(t, 694278));
      return t => (0, n.jsx)(e, {
        ...t,
        guild: s,
        hideColors: !0
      })
    }),
    className: a()(I.simpleItemWrapper, I.clickable),
    children: [(0, n.jsxs)("div", {
      className: I.itemContent,
      children: [(0, n.jsx)(r.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: _.Z.Messages.FORM_LABEL_VERIFICATION_LEVEL
      }), (0, n.jsx)(r.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: _.Z.Messages.GUILD_SETTINGS_SAFETY_VERIFICATION_DESCRIPTION
      }), (0, n.jsx)("div", {
        className: I.__invalid_pillRow,
        children: (0, n.jsxs)(r.Text, {
          variant: "text-xs/medium",
          color: "interactive-normal",
          className: I.valuePill,
          children: [l === E.sFg.VERY_HIGH ? (0, n.jsx)(u.Z, {
            width: 16,
            height: 16
          }) : (0, n.jsx)(d.Z, {
            width: 16,
            height: 16
          }), T]
        })
      })]
    }), (0, n.jsx)(c.Z, {
      height: 24,
      width: 24,
      direction: c.Z.Directions.RIGHT,
      className: I.caret
    })]
  })
}