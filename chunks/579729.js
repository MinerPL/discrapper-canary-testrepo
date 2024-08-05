n.d(t, {
  Z: function() {
return h;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(481060),
  s = n(367907),
  o = n(10718),
  l = n(69626),
  u = n(626135),
  c = n(659101),
  d = n(981631),
  _ = n(689938),
  E = n(183992),
  f = n(655899);

function h(e) {
  let {
applicationId: t,
commandIds: n,
channel: h,
guildId: p,
onClick: m
  } = e, {
commands: I
  } = o.Qm(h, t, n), T = i.useMemo(() => null == I ? void 0 : I.filter(e => !0 !== e.nsfw), [I]), g = i.useCallback(e => {
null == m || m(), u.default.track(d.rMx.POPULAR_APPLICATION_COMMAND_CLICKED, {
  application_id: t,
  command_id: e,
  guild_id: p,
  ...(0, s.JS)(h.id)
});
  }, [
t,
h.id,
p,
m
  ]);
  return null == T || 0 === T.length ? null : (0, r.jsxs)(c.Z, {
children: [
  (0, r.jsx)(a.Heading, {
    variant: 'eyebrow',
    className: f.title,
    children: _.Z.Messages.BOT_PROFILE_SLASH_COMMANDS
  }),
  (0, r.jsx)('ul', {
    className: E.popularApplicationCommandsList,
    children: T.map(e => (0, r.jsx)('li', {
      children: (0, r.jsx)(l.wz, {
        commandId: e.id,
        commandName: e.displayName,
        commandDescription: e.displayDescription,
        onClick: g,
        guildId: p,
        channelId: h.id
      })
    }, e.id))
  })
]
  });
}