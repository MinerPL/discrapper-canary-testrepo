"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("37983");
n("884691");
var l = n("414456"),
  s = n.n(l),
  i = n("891722"),
  r = n("77078"),
  u = n("763225"),
  o = n("789150"),
  d = n("782340"),
  c = n("823494"),
  f = n("865331");

function h(e) {
  let {
    userId: t,
    guildId: n,
    onNavigate: l,
    backPanel: h = o.ModViewPanel.INFO
  } = e, m = (0, u.useProfileThemedPanelBackground)(t, n, .8, r.tokens.colors.BACKGROUND_SECONDARY);
  return (0, a.jsxs)("div", {
    className: s(f.header),
    style: {
      backgroundColor: m
    },
    children: [(0, a.jsx)("div", {
      className: s(f.headerTitle),
      children: (0, a.jsxs)(r.Clickable, {
        className: s(c.backButton),
        onClick: () => null == l ? void 0 : l(h),
        children: [(0, a.jsx)(i.ArrowSmallLeftIcon, {
          className: s(c.backButtonIcon),
          width: 20,
          height: 20
        }), (0, a.jsx)(r.Heading, {
          variant: "heading-md/semibold",
          children: d.default.Messages.BACK
        })]
      })
    }), (0, a.jsx)("div", {
      className: s(c.options),
      children: (0, a.jsx)(r.KeyCombo, {
        shortcut: "esc",
        keyClassName: c.keyComboInner,
        className: c.keyComboContainer
      })
    })]
  })
}