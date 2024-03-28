"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("816782"),
  i = n("367907"),
  r = n("433355"),
  o = n("914010"),
  u = n("158010"),
  d = n("502568"),
  c = n("981631"),
  f = n("689938");

function h(e) {
  let {
    channelId: t
  } = e, n = (0, l.useStateFromStores)([r.default], () => r.default.getSection(t)), h = (0, l.useStateFromStores)([o.default], () => o.default.getGuildId()), m = n === c.ChannelSections.MEMBERS;
  return (0, a.jsx)(d.Icon, {
    tooltip: m ? f.default.Messages.MEMBER_LIST_SHOWN : f.default.Messages.MEMBER_LIST_HIDDEN,
    icon: u.default,
    onClick: () => {
      i.default.trackWithMetadata(c.AnalyticEvents.MEMBER_LIST_TOGGLED, {
        channel_id: t,
        guild_id: h,
        member_list_open: !m
      }), s.default.toggleMembersSection()
    },
    selected: m
  })
}