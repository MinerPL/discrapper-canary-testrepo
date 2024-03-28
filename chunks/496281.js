"use strict";
t.r(n), t.d(n, {
  default: function() {
    return o
  }
});
var l = t("735250");
t("470079");
var i = t("481060"),
  a = t("239091"),
  r = t("299206"),
  s = t("943209"),
  u = t("689938");

function o(e) {
  let {
    channel: n,
    integration: t,
    onSelect: o
  } = e, c = (0, r.default)({
    id: n.id,
    label: u.default.Messages.COPY_ID_APPLICATION
  });
  return (0, l.jsxs)(i.Menu, {
    "aria-label": u.default.Messages.MANAGE_INTEGRATION,
    navId: "manage-integration",
    onClose: a.closeContextMenu,
    onSelect: o,
    children: [(0, l.jsx)(i.MenuGroup, {
      children: (0, l.jsx)(i.MenuItem, {
        id: "remove-integration",
        label: u.default.Messages.BOT_PROFILE_REMOVE_PRIVATE_CHANNEL_INTEGRATION,
        action: () => {
          (0, s.deletePrivateChannelIntegration)(n.id, t.application.id), null != o && o()
        },
        color: "danger"
      })
    }), (0, l.jsx)(i.MenuGroup, {
      children: c
    })]
  })
}