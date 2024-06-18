"use strict";
n.d(t, {
  Z: function() {
    return d
  }
});
var s = n(735250);
n(470079);
var r = n(990547),
  i = n(481060),
  a = n(213609),
  l = n(819570),
  o = n(760213),
  u = n(689938),
  c = n(101669);

function d(e) {
  let {
    onDismiss: t
  } = e;
  return (0, a.Z)({
    type: r.ImpressionTypes.MODAL,
    name: r.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING
  }), (0, s.jsxs)(l.ZP, {
    className: c.chooseAccountAuthBox,
    children: [(0, s.jsx)(l.Dx, {
      children: u.Z.Messages.SWITCH_ACCOUNTS_CHOOSE_ACCOUNT
    }), (0, s.jsx)(i.Text, {
      className: c.chooseAccountHelpText,
      variant: "text-md/normal",
      color: "header-secondary",
      children: u.Z.Messages.SWITCH_ACCOUNTS_CHOOSE_ACCOUNT_HELPER
    }), (0, s.jsx)(o.Z, {
      actionText: u.Z.Messages.SWITCH_ACCOUNTS_ACTION_LOG_IN,
      onAction: e => {
        e === o.W.LOGIN_REQUIRED && t()
      }
    }), (0, s.jsx)("div", {
      className: c.actions,
      children: (0, s.jsx)(i.Button, {
        className: c.__invalid_chooseAccountButton,
        look: i.Button.Looks.LINK,
        color: i.Button.Colors.PRIMARY,
        onClick: t,
        size: i.Button.Sizes.MEDIUM,
        children: (0, s.jsx)(i.Text, {
          variant: "text-sm/normal",
          children: u.Z.Messages.SWITCH_ACCOUNTS_ADD_AN_ACCOUNT_BUTTON
        })
      })
    })]
  })
}