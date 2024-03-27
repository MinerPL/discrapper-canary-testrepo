"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var u = n("37983");
n("884691");
var r = n("446674"),
  a = n("77078"),
  l = n("52289"),
  s = n("102985"),
  i = n("782340");

function o() {
  let e = (0, r.useStateFromStores)([s.default], () => s.default.enabled, []);
  return (0, u.jsx)(a.MenuCheckboxItem, {
    id: "streamer-mode-toggle",
    label: i.default.Messages.ENABLE_STREAMER_MODE_LABEL,
    action: () => {
      l.default.setEnabled(!e)
    },
    checked: e
  })
}