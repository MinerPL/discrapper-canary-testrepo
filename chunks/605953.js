"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("479313"),
  i = n("765104"),
  r = n("839523"),
  o = n("502568"),
  u = n("626135"),
  d = n("981631"),
  c = n("814249"),
  f = n("689938");

function h(e) {
  let {
    channel: t
  } = e, n = (0, l.useStateFromStores)([i.default], () => i.default.shouldShowTopicsBar());
  return (0, a.jsx)(o.default.Icon, {
    icon: r.default,
    onClick: () => {
      u.default.track(d.AnalyticEvents.SUMMARIES_SIDEBAR_TOGGLED, {
        summaries_sidebar_open: !n,
        source: c.SummariesSidebarToggledSource.TOOLBAR_BUTTON,
        guild_id: t.guild_id,
        channel_id: t.id,
        channel_type: t.type
      }), (0, s.toggleTopicsBar)()
    },
    tooltip: n ? f.default.Messages.SUMMARIES_SHOWN : f.default.Messages.SUMMARIES_HIDDEN,
    selected: n,
    "aria-expanded": n
  })
}