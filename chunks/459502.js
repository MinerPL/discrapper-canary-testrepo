n.d(t, {
  Z: function() {
return f;
  }
}), n(724458);
var i = n(735250);
n(470079);
var a = n(442837),
  l = n(692547),
  s = n(481060),
  r = n(889161),
  o = n(592125),
  c = n(15274),
  d = n(924301),
  u = n(554747),
  h = n(854698),
  p = n(688641),
  m = n(689938),
  _ = n(942979);

function f(e) {
  let {
channelId: t
  } = e, f = (0, a.e7)([o.Z], () => o.Z.getChannel(t), [t]), E = (0, u.sz)(t), C = null != (0, u.qY)(t), {
canManageGuildEvent: g
  } = (0, r.XJ)(f), I = (0, a.cj)([d.ZP], () => E.reduce((e, t) => (e[t.id] = d.ZP.getUserCount(t.id, (0, h.DK)(t)), e), {}));
  return E.length < 1 || C ? null : (0, i.jsx)(i.Fragment, {
children: E.map(e => (0, i.jsx)(p.Z, {
  icon: (0, i.jsx)(s.CalendarIcon, {
    size: 'custom',
    color: 'currentColor',
    height: 20,
    width: 20
  }),
  color: l.Z.unsafe_rawColors.GREEN_360.css,
  title: (g(e) ? m.Z.Messages.GUILD_EVENT_START_PROMPT : m.Z.Messages.GUILD_EVENT_UPCOMING_PROMPT).format({
    eventName: e.name
  }),
  description: m.Z.Messages.GUILD_EVENT_START_PROMPT_DESCRIPTION.format({
    startTime: (0, h.ub)(e.scheduled_start_time).startDateTimeString
  }),
  onClick: () => {
    var t;
    g(t = e) ? (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([
        n.e('22347'),
        n.e('84722'),
        n.e('80797')
      ]).then(n.bind(n, 296864));
      return n => (0, i.jsx)(e, {
        ...n,
        event: t
      });
    }) : (0, c.bO)({
      eventId: t.id,
      parentGuildId: t.guild_id
    });
  },
  userCount: I[e.id],
  className: _.eventPrompt
}, e.id))
  });
}