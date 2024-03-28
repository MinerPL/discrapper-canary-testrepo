"use strict";
a.r(n), a.d(n, {
  default: function() {
    return o
  }
});
var d = a("735250");
a("470079");
var t = a("481060"),
  l = a("239091"),
  s = a("592125"),
  u = a("626135"),
  i = a("479313"),
  r = a("981631"),
  c = a("689938");

function o(e) {
  let {
    summary: n,
    onSelect: a
  } = e;
  return (0, d.jsx)(t.Menu, {
    onSelect: a,
    navId: "channel-summaries-context-menu",
    "aria-label": c.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: l.closeContextMenu,
    children: (0, d.jsx)(t.MenuGroup, {
      children: (0, d.jsx)(t.MenuItem, {
        id: "delete-summary",
        color: "danger",
        label: c.default.Messages.SUMMARIES_DELETE_SUMMARY,
        action: () => {
          (0, i.deleteSummary)(n);
          let e = s.default.getChannel(n.channelId);
          u.default.track(r.AnalyticEvents.SUMMARY_DELETED, {
            guild_id: null == e ? void 0 : e.guild_id,
            channel_id: null == e ? void 0 : e.id,
            summary_id: n.id,
            start_message_id: n.startId,
            end_message_id: n.endId
          })
        }
      })
    })
  })
}