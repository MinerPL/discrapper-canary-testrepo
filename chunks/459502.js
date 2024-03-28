"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("724458");
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("692547"),
  i = n("481060"),
  r = n("889161"),
  o = n("592125"),
  u = n("305878"),
  d = n("15274"),
  c = n("924301"),
  f = n("554747"),
  h = n("854698"),
  m = n("688641"),
  p = n("689938"),
  E = n("678452");

function C(e) {
  let {
    channelId: t
  } = e, C = (0, l.useStateFromStores)([o.default], () => o.default.getChannel(t), [t]), g = (0, f.useImminentUpcomingGuildEvents)(t), S = null != (0, f.useActiveEvent)(t), {
    canManageGuildEvent: _
  } = (0, r.useManageResourcePermissions)(C), T = (0, l.useStateFromStoresObject)([c.default], () => g.reduce((e, t) => (e[t.id] = c.default.getUserCount(t.id, (0, h.getNextRecurrenceIdInEvent)(t)), e), {}));
  return g.length < 1 || S ? null : (0, a.jsx)(a.Fragment, {
    children: g.map(e => (0, a.jsx)(m.default, {
      icon: (0, a.jsx)(u.default, {
        height: 20,
        width: 20
      }),
      color: s.default.unsafe_rawColors.GREEN_360.css,
      title: (_(e) ? p.default.Messages.GUILD_EVENT_START_PROMPT : p.default.Messages.GUILD_EVENT_UPCOMING_PROMPT).format({
        eventName: e.name
      }),
      description: p.default.Messages.GUILD_EVENT_START_PROMPT_DESCRIPTION.format({
        startTime: (0, h.getEventTimeData)(e.scheduled_start_time).startDateTimeString
      }),
      onClick: () => {
        var t;
        _(t = e) ? (0, i.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("22347"), n.e("84722")]).then(n.bind(n, "296864"));
          return n => (0, a.jsx)(e, {
            ...n,
            event: t
          })
        }) : (0, d.openGuildEventDetails)({
          eventId: t.id,
          parentGuildId: t.guild_id
        })
      },
      userCount: T[e.id],
      className: E.eventPrompt
    }, e.id))
  })
}