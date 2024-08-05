n.d(t, {
  Z: function() {
return T;
  }
});
var i = n(735250);
n(470079);
var s = n(120356),
  a = n.n(s),
  r = n(481060),
  l = n(385499),
  o = n(702346),
  c = n(739566),
  u = n(464891),
  d = n(83561),
  _ = n(981631),
  E = n(674563),
  I = n(689938),
  m = n(713389);

function T(e) {
  let {
message: t,
compact: n,
usernameHook: s
  } = e, T = (0, c.ZP)(t), h = s(T), {
avatarSrc: N,
eventHandlers: {
  onMouseEnter: C,
  onMouseLeave: f
}
  } = (0, d.m)(!0), p = '' !== t.content ? new Date(t.content).toLocaleString(I.Z.getLocale(), {
hour: 'numeric',
minute: '2-digit',
month: '2-digit',
day: '2-digit',
year: 'numeric'
  }) : '';
  return (0, i.jsx)('div', {
onMouseEnter: C,
onMouseLeave: f,
children: (0, i.jsx)(o.Z, {
  className: a()(m.mainContainer, {
    [m.compact]: n
  }),
  iconNode: n ? null : (0, i.jsx)(d.S, {
    src: N
  }),
  iconContainerClassName: m.iconContainer,
  compact: n,
  children: (0, i.jsxs)('div', {
    className: a()(m.content, {
      [m.compact]: n
    }),
    children: [
      (0, i.jsx)(u.nD, {
        message: t,
        messageClassname: m.spanCorrection,
        className: a()(m.usernameContainer, m.spanCorrection, {
          [m.compact]: n
        }),
        username: (0, i.jsxs)('div', {
          className: m.spanCorrection,
          children: [
            (0, i.jsx)(r.Text, {
              variant: 'text-md/normal',
              color: 'text-brand',
              tag: 'span',
              className: m.username,
              children: I.Z.Messages.GUILD_AUTOMOD_USERNAME
            }),
            (0, i.jsx)(l.Z, {
              type: E.Hb.SYSTEM_DM,
              className: m.systemTag
            })
          ]
        }),
        compact: n,
        showTimestamp: !0
      }),
      (0, i.jsx)('div', {
        className: a()(m.__invalid_messageContent, {
          [m.compact]: n
        }),
        children: t.type === _.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED ? I.Z.Messages.GUILD_SERVER_LOCKDOWN_ENABLED_SYSTEM_MESSAGE_SHORT.format({
          username: T.nick,
          usernameHook: h,
          time: p
        }) : I.Z.Messages.GUILD_SERVER_LOCKDOWN_DISABLED_SYSTEM_MESSAGE.format({
          username: T.nick,
          usernameHook: h
        })
      })
    ]
  })
})
  });
}