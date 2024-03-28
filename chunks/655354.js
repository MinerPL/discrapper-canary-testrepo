"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("481060"),
  o = n("689938"),
  u = n("277036");

function d(e) {
  let {
    className: t,
    onJump: n
  } = e, [l, d] = a.useState(!1);
  return (0, s.jsx)(r.Clickable, {
    className: i()(u.jumpButton, t),
    onClick: e => {
      d(!0), n(e)
    },
    children: l ? (0, s.jsx)(r.Spinner, {
      type: r.Spinner.Type.PULSING_ELLIPSIS
    }) : (0, s.jsx)(r.Text, {
      variant: "text-xs/normal",
      className: u.text,
      children: o.default.Messages.JUMP
    })
  })
}