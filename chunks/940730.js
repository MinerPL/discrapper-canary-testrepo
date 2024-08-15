n.d(t, {
  Z: function() {
return f;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(367907),
  s = n(10718),
  o = n(69626),
  l = n(626135),
  u = n(785717),
  c = n(678738),
  d = n(981631),
  _ = n(689938),
  E = n(421802);

function f(e) {
  let {
applicationId: t,
commandIds: n,
guildId: f,
channel: h,
onClick: p
  } = e, {
trackUserProfileAction: m
  } = (0, u.KZ)(), {
commands: I
  } = s.Qm(h, t, n), T = i.useMemo(() => null == I ? void 0 : I.filter(e => {
let {
  nsfw: t
} = e;
return !0 !== t;
  }), [I]);
  if (null == T || 0 === T.length)
return null;
  let g = e => {
null == p || p(), m({
  action: 'PRESS_APP_COMMAND'
}), l.default.track(d.rMx.POPULAR_APPLICATION_COMMAND_CLICKED, {
  application_id: t,
  command_id: e,
  guild_id: f,
  ...(0, a.JS)(h.id)
});
  };
  return (0, r.jsx)(c.Z, {
heading: _.Z.Messages.COMMANDS,
children: (0, r.jsx)('ul', {
  className: E.list,
  children: T.map(e => (0, r.jsx)('li', {
    children: (0, r.jsx)(o.wz, {
      commandId: e.id,
      commandName: e.displayName,
      commandDescription: e.displayDescription,
      onClick: g,
      guildId: f,
      channelId: h.id
    })
  }, e.id))
})
  });
}