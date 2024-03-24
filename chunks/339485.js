"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("819855"),
  i = n("77078"),
  r = n("782340");

function u(e) {
  let {
    onConfirm: t,
    onDismiss: n,
    theme: u
  } = e;
  return (0, l.jsxs)(a.Fragment, {
    children: [(0, l.jsx)(i.Button, {
      onClick: t,
      children: r.default.Messages.GENERATE_A_NEW_LINK
    }), (0, l.jsx)(i.Button, {
      look: i.Button.Looks.LINK,
      color: (0, s.isThemeLight)(u) ? i.Button.Colors.PRIMARY : i.Button.Colors.WHITE,
      onClick: n,
      children: r.default.Messages.CANCEL
    })]
  })
}