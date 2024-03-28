"use strict";
n.r(t), n.d(t, {
  InstantInviteSettingsPage: function() {
    return g
  }
});
var l = n("735250");
n("470079");
var a = n("803997"),
  s = n.n(a),
  i = n("481060"),
  r = n("410030"),
  o = n("948851"),
  u = n("868728"),
  d = n("689938"),
  c = n("651937"),
  I = n("794711");
let g = e => {
  let {
    handleDone: t,
    headerId: n,
    modalState: a,
    shouldHideTemporaryInviteToggle: g,
    onGenerateNewLink: h,
    onToggleTemporary: E,
    onSelectMaxAge: f,
    onSelectMaxUses: _
  } = e, T = (0, r.default)(), {
    maxAge: v,
    maxUses: m,
    temporary: N
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
          className: s()(I.marginReset, c.headerCloseButtonSpacing, c.headerText),
          children: d.default.Messages.INVITE_SETTINGS_TITLE
        })
      })]
    }), (0, l.jsx)(o.default, {
      shouldHideTemporaryInviteToggle: g,
      maxAge: v,
      maxUses: m,
      temporary: N,
      onToggleTemporary: E,
      onSelectMaxAge: f,
      onSelectMaxUses: _,
      onGenerateNewLink: h
    }), (0, l.jsx)(i.ModalFooter, {
      className: c.settingsFooter,
      children: (0, l.jsx)(u.default, {
        theme: T,
        onConfirm: () => {
          h(), t()
        },
        onDismiss: t
      })
    })]
  })
}