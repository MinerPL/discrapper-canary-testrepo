"use strict";
n.r(t), n.d(t, {
  InstantInviteSettingsPage: function() {
    return g
  }
});
var l = n("37983");
n("884691");
var i = n("414456"),
  a = n.n(i),
  s = n("77078"),
  r = n("841098"),
  o = n("825691"),
  u = n("339485"),
  d = n("782340"),
  c = n("435808"),
  f = n("926622");
let g = e => {
  let {
    handleDone: t,
    headerId: n,
    modalState: i,
    shouldHideTemporaryInviteToggle: g,
    onGenerateNewLink: h,
    onToggleTemporary: I,
    onSelectMaxAge: m,
    onSelectMaxUses: E,
    guild: p
  } = e, v = (0, r.default)(), {
    maxAge: _,
    maxUses: T,
    temporary: N
  } = i;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(s.ModalHeader, {
      children: [(0, l.jsx)(s.ModalCloseButton, {
        className: c.closeButton,
        onClick: t
      }), (0, l.jsx)("div", {
        className: c.headerContainer,
        children: (0, l.jsx)(s.FormTitle, {
          id: n,
          tag: "h2",
          className: a(f.marginReset, c.headerCloseButtonSpacing, c.headerText),
          children: d.default.Messages.INVITE_SETTINGS_TITLE
        })
      })]
    }), (0, l.jsx)(o.default, {
      guildId: p.id,
      shouldHideTemporaryInviteToggle: g,
      maxAge: _,
      maxUses: T,
      temporary: N,
      onToggleTemporary: I,
      onSelectMaxAge: m,
      onSelectMaxUses: E,
      onGenerateNewLink: h
    }), (0, l.jsx)(s.ModalFooter, {
      className: c.settingsFooter,
      children: (0, l.jsx)(u.default, {
        guildId: null == p ? void 0 : p.id,
        maxAge: _,
        theme: v,
        onConfirm: () => {
          h(), t()
        },
        onDismiss: t
      })
    })]
  })
}