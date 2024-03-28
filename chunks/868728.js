"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("780384"),
  i = n("481060"),
  r = n("689938");

function o(e) {
  let {
    onConfirm: t,
    onDismiss: n,
    theme: o
  } = e;
  return (0, l.jsxs)(a.Fragment, {
    children: [(0, l.jsx)(i.Button, {
      onClick: t,
      children: r.default.Messages.GENERATE_A_NEW_LINK
    }), (0, l.jsx)(i.Button, {
      look: i.Button.Looks.LINK,
      color: (0, s.isThemeLight)(o) ? i.Button.Colors.PRIMARY : i.Button.Colors.WHITE,
      onClick: n,
      children: r.default.Messages.CANCEL
    })]
  })
}