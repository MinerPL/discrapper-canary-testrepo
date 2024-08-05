n.d(t, {
  Z: function() {
return h;
  }
});
var i = n(735250);
n(470079);
var s = n(120356),
  a = n.n(s),
  r = n(442837),
  l = n(481060),
  o = n(385499),
  c = n(430824),
  u = n(702346),
  d = n(739566),
  _ = n(464891),
  E = n(83561),
  I = n(674563),
  m = n(689938),
  T = n(713389);

function h(e) {
  var t;
  let {
message: n,
compact: s,
usernameHook: h,
channel: N
  } = e, C = (0, r.e7)([c.Z], () => c.Z.getGuild(N.guild_id)), f = (0, d.ZP)(n), p = h(f), {
avatarSrc: g,
eventHandlers: {
  onMouseEnter: S,
  onMouseLeave: A
}
  } = (0, E.m)(!0);
  return (0, i.jsx)('div', {
onMouseEnter: S,
onMouseLeave: A,
children: (0, i.jsx)(u.Z, {
  className: a()(T.mainContainer, {
    [T.compact]: s
  }),
  iconNode: s ? null : (0, i.jsx)(E.S, {
    src: g
  }),
  iconContainerClassName: T.iconContainer,
  compact: s,
  children: (0, i.jsxs)('div', {
    className: a()(T.content, {
      [T.compact]: s
    }),
    children: [
      (0, i.jsx)(_.nD, {
        message: n,
        messageClassname: T.spanCorrection,
        className: a()(T.usernameContainer, T.spanCorrection, {
          [T.compact]: s
        }),
        username: (0, i.jsxs)('div', {
          className: T.spanCorrection,
          children: [
            (0, i.jsx)(l.Text, {
              variant: 'text-md/normal',
              color: 'text-brand',
              tag: 'span',
              className: T.username,
              children: m.Z.Messages.GUILD_AUTOMOD_USERNAME
            }),
            (0, i.jsx)(o.Z, {
              type: I.Hb.SYSTEM_DM,
              className: T.systemTag
            })
          ]
        }),
        compact: s,
        showTimestamp: !0
      }),
      (0, i.jsx)('div', {
        className: a()(T.__invalid_messageContent, {
          [T.compact]: s
        }),
        children: m.Z.Messages.GUILD_RAID_REPORT_SYSTEM_MESSAGE.format({
          username: f.nick,
          usernameHook: p,
          guildName: null !== (t = null == C ? void 0 : C.name) && void 0 !== t ? t : ''
        })
      })
    ]
  })
})
  });
}