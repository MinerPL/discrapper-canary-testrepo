n.d(t, {
  Z: function() {
return m;
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
  _ = n(674563),
  E = n(689938),
  I = n(713389);

function m(e) {
  let {
message: t,
compact: n,
usernameHook: s
  } = e, m = (0, c.ZP)(t), T = s(m), {
avatarSrc: h,
eventHandlers: {
  onMouseEnter: N,
  onMouseLeave: C
}
  } = (0, d.m)(!0);
  return (0, i.jsx)('div', {
onMouseEnter: N,
onMouseLeave: C,
children: (0, i.jsx)(o.Z, {
  className: a()(I.mainContainer, {
    [I.compact]: n
  }),
  iconNode: n ? null : (0, i.jsx)(d.S, {
    src: h
  }),
  iconContainerClassName: I.iconContainer,
  compact: n,
  children: (0, i.jsxs)('div', {
    className: a()(I.content, {
      [I.compact]: n
    }),
    children: [
      (0, i.jsx)(u.nD, {
        message: t,
        messageClassname: I.spanCorrection,
        className: a()(I.usernameContainer, I.spanCorrection, {
          [I.compact]: n
        }),
        username: (0, i.jsxs)('div', {
          className: I.spanCorrection,
          children: [
            (0, i.jsx)(r.Text, {
              variant: 'text-md/normal',
              color: 'text-brand',
              tag: 'span',
              className: I.username,
              children: E.Z.Messages.GUILD_AUTOMOD_USERNAME
            }),
            (0, i.jsx)(l.Z, {
              type: _.Hb.SYSTEM_DM,
              className: I.systemTag
            })
          ]
        }),
        compact: n,
        showTimestamp: !0
      }),
      (0, i.jsx)('div', {
        className: a()(I.__invalid_messageContent, {
          [I.compact]: n
        }),
        children: E.Z.Messages.GUILD_REPORT_FALSE_ALARM_SYSTEM_MESSAGE_SHORT.format({
          username: m.nick,
          usernameHook: T
        })
      })
    ]
  })
})
  });
}