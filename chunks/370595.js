"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("735250");
n("470079");
var l = n("803997"),
  s = n.n(l),
  i = n("329800"),
  r = n("481060"),
  o = n("991570"),
  u = n("50493"),
  d = n("689938"),
  c = n("372792"),
  f = n("196958");

function h(e) {
  let {
    userId: t,
    guildId: n,
    onNavigate: l,
    backPanel: h = u.ModViewPanel.INFO
  } = e, m = (0, o.useProfileThemedPanelBackground)(t, n, .8, r.tokens.colors.BACKGROUND_SECONDARY);
  return (0, a.jsxs)("div", {
    className: s()(f.header),
    style: {
      backgroundColor: m
    },
    children: [(0, a.jsx)("div", {
      className: s()(f.headerTitle),
      children: (0, a.jsxs)(r.Clickable, {
        className: s()(c.backButton),
        onClick: () => null == l ? void 0 : l(h),
        children: [(0, a.jsx)(i.ArrowSmallLeftIcon, {
          className: s()(c.__invalid_backButtonIcon),
          width: 20,
          height: 20
        }), (0, a.jsx)(r.Heading, {
          variant: "heading-md/semibold",
          children: d.default.Messages.BACK
        })]
      })
    }), (0, a.jsx)("div", {
      className: s()(c.__invalid_options),
      children: (0, a.jsx)(r.KeyCombo, {
        shortcut: "esc",
        keyClassName: c.keyComboInner,
        className: c.keyComboContainer
      })
    })]
  })
}