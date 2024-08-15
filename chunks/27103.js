n.d(t, {
  Z: function() {
return m;
  }
});
var i = n(735250);
n(470079);
var a = n(120356),
  s = n.n(a),
  r = n(481060),
  l = n(385499),
  o = n(739566),
  c = n(464891),
  u = n(83561),
  d = n(834129),
  _ = n(674563),
  E = n(689938),
  I = n(549766);

function m(e) {
  let {
message: t,
compact: n,
usernameHook: a
  } = e, m = (0, o.ZP)(t), T = a(m), {
avatarSrc: h,
eventHandlers: {
  onMouseEnter: N,
  onMouseLeave: f
}
  } = (0, u.m)(!0);
  return (0, i.jsx)('div', {
onMouseEnter: N,
onMouseLeave: f,
children: (0, i.jsx)(d.Z, {
  className: s()(I.mainContainer, {
    [I.compact]: n
  }),
  iconNode: n ? null : (0, i.jsx)(u.S, {
    src: h
  }),
  iconContainerClassName: I.iconContainer,
  compact: n,
  children: (0, i.jsxs)('div', {
    className: s()(I.content, {
      [I.compact]: n
    }),
    children: [
      (0, i.jsx)(c.nD, {
        message: t,
        messageClassname: I.spanCorrection,
        className: s()(I.usernameContainer, I.spanCorrection, {
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
        className: s()(I.__invalid_messageContent, {
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