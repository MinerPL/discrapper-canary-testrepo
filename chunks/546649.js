"use strict";
t.r(n), t.d(n, {
  default: function() {
    return a
  }
});
var l = t("735250");
t("470079");
var u = t("481060"),
  o = t("239091"),
  i = t("299206"),
  s = t("461757"),
  c = t("689938");

function a(e) {
  let {
    channel: n,
    channelId: t,
    originalLink: a,
    messageId: r,
    onSelect: d
  } = e, f = (0, s.default)(n, a, r), C = (0, i.default)({
    id: t,
    label: c.default.Messages.COPY_ID_CHANNEL
  });
  return (0, l.jsxs)(u.Menu, {
    navId: "channel-mention-context",
    onClose: o.closeContextMenu,
    onSelect: d,
    "aria-label": c.default.Messages.CHANNEL_MENTION_ACTIONS_MENU_LABEL,
    children: [(0, l.jsx)(u.MenuGroup, {
      children: f
    }, "channel-mention-actions"), (0, l.jsx)(u.MenuGroup, {
      children: C
    }, "developer-actions")]
  })
}