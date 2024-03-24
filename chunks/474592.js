"use strict";
n.r(t), n.d(t, {
  InstantInviteSettingsPage: function() {
    return f
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("77078"),
  r = n("841098"),
  u = n("825691"),
  o = n("339485"),
  d = n("782340"),
  c = n("696862"),
  h = n("890957");
let f = e => {
  let {
    handleDone: t,
    headerId: n,
    modalState: a,
    shouldHideTemporaryInviteToggle: f,
    onGenerateNewLink: I,
    onToggleTemporary: g,
    onSelectMaxAge: E,
    onSelectMaxUses: v
  } = e, T = (0, r.default)(), {
    maxAge: m,
    maxUses: p,
    temporary: _
  } = a;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(i.ModalHeader, {
      children: [(0, l.jsx)(i.ModalCloseButton, {
        className: c.closeButton,
        onClick: t
      }), (0, l.jsx)("div", {
        className: c.headerContainer,
        children: (0, l.jsx)(i.FormTitle, {
          id: n,
          tag: "h2",
          className: s(h.marginReset, c.headerCloseButtonSpacing, c.headerText),
          children: d.default.Messages.INVITE_SETTINGS_TITLE
        })
      })]
    }), (0, l.jsx)(u.default, {
      shouldHideTemporaryInviteToggle: f,
      maxAge: m,
      maxUses: p,
      temporary: _,
      onToggleTemporary: g,
      onSelectMaxAge: E,
      onSelectMaxUses: v,
      onGenerateNewLink: I
    }), (0, l.jsx)(i.ModalFooter, {
      className: c.settingsFooter,
      children: (0, l.jsx)(o.default, {
        theme: T,
        onConfirm: () => {
          I(), t()
        },
        onDismiss: t
      })
    })]
  })
}