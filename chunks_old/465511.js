"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  l = n("994428"),
  i = n("782340"),
  r = n("540675");

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