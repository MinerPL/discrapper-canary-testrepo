"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var u = n("735250");
n("470079");
var r = n("442837"),
  a = n("481060"),
  s = n("223245"),
  l = n("246946"),
  i = n("689938");

function o() {
  let e = (0, r.useStateFromStores)([l.default], () => l.default.enabled, []);
  return (0, u.jsx)(a.MenuCheckboxItem, {
    id: "streamer-mode-toggle",
    label: i.default.Messages.ENABLE_STREAMER_MODE_LABEL,
    action: () => {
      s.default.setEnabled(!e)
    },
    checked: e
  })
}