"use strict";
t.r(n), t.d(n, {
  default: function() {
    return o
  }
});
var l = t("37983");
t("884691");
var i = t("77078"),
  r = t("272030"),
  a = t("861370"),
  s = t("970755"),
  u = t("782340");

function o(e) {
  let {
    channel: n,
    integration: t,
    onSelect: o
  } = e, c = (0, a.default)({
    id: n.id,
    label: u.default.Messages.COPY_ID_APPLICATION
  });
  return (0, l.jsxs)(i.Menu, {
    "aria-label": u.default.Messages.MANAGE_INTEGRATION,
    navId: "manage-integration",
    onClose: r.closeContextMenu,
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