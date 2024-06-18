"use strict";
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(465670),
  o = n(666272),
  a = n(921944),
  l = n(689938),
  u = n(978790);
t.Z = e => {
  let {
    markAsDismissed: t
  } = e;
  return (0, i.jsxs)("div", {
    className: u.wrapper,
    children: [(0, i.jsx)(o.Z, {
      className: u.icon
    }), (0, i.jsx)("div", {
      className: u.content,
      children: (0, i.jsx)(r.Text, {
        variant: "text-xs/normal",
        children: l.Z.Messages.EMOJI_PICKER_FAVORITES_TIP
      })
    }), (0, i.jsx)(r.Clickable, {
      onClick: () => t(a.L.UNKNOWN),
      children: (0, i.jsx)(s.Z, {
        className: u.close
      })
    })]
  })
}