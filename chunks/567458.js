"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("921944"),
  i = n("689938"),
  r = n("957701");

function o(e) {
  let {
    markAsDismissed: t
  } = e;
  return (0, a.jsxs)("div", {
    className: r.container,
    children: [(0, a.jsx)("div", {
      className: r.pointer
    }), (0, a.jsx)(s.Text, {
      variant: "text-sm/normal",
      className: r.content,
      children: i.default.Messages.HUB_PRIVACY_SETTINGS_TOOLTIP
    }), (0, a.jsx)(s.Button, {
      look: s.Button.Looks.INVERTED,
      fullWidth: !0,
      onClick: () => {
        t(l.ContentDismissActionType.AUTO)
      },
      children: i.default.Messages.GOT_IT
    })]
  })
}