"use strict";
t.r(n), t.d(n, {
  default: function() {
    return r
  }
});
var l = t("37983");
t("884691");
var u = t("77078"),
  o = t("272030"),
  i = t("861370"),
  c = t("818059"),
  s = t("782340");

function r(e) {
  let {
    channel: n,
    channelId: t,
    originalLink: r,
    messageId: a,
    onSelect: d
  } = e, f = (0, c.default)(n, r, a), C = (0, i.default)({
    id: t,
    label: s.default.Messages.COPY_ID_CHANNEL
  });
  return (0, l.jsxs)(u.Menu, {
    navId: "channel-mention-context",
    onClose: o.closeContextMenu,
    onSelect: d,
    "aria-label": s.default.Messages.CHANNEL_MENTION_ACTIONS_MENU_LABEL,
    children: [(0, l.jsx)(u.MenuGroup, {
      children: f
    }, "channel-mention-actions"), (0, l.jsx)(u.MenuGroup, {
      children: C
    }, "developer-actions")]
  })
}