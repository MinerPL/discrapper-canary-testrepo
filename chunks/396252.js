n.d(t, {
  Z: function() {
return h;
  }
});
var i = n(735250);
n(470079);
var a = n(120356),
  s = n.n(a),
  r = n(442837),
  l = n(481060),
  o = n(430824),
  c = n(467679),
  d = n(702346),
  u = n(739566),
  _ = n(464891),
  E = n(83561),
  I = n(674563),
  m = n(689938),
  T = n(713389);

function h(e) {
  var t;
  let {
message: n,
compact: a,
usernameHook: h,
channel: N
  } = e, f = (0, r.e7)([o.Z], () => o.Z.getGuild(N.guild_id)), p = (0, u.ZP)(n), C = h(p), {
avatarSrc: g,
eventHandlers: {
  onMouseEnter: S,
  onMouseLeave: A
}
  } = (0, E.m)(!0);
  return (0, i.jsx)('div', {
onMouseEnter: S,
onMouseLeave: A,
children: (0, i.jsx)(d.Z, {
  className: s()(T.mainContainer, {
    [T.compact]: a
  }),
  iconNode: a ? null : (0, i.jsx)(E.S, {
    src: g
  }),
  iconContainerClassName: T.iconContainer,
  compact: a,
  children: (0, i.jsxs)('div', {
    className: s()(T.content, {
      [T.compact]: a
    }),
    children: [
      (0, i.jsx)(_.nD, {
        message: n,
        messageClassname: T.spanCorrection,
        className: s()(T.usernameContainer, T.spanCorrection, {
          [T.compact]: a
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
            (0, i.jsx)(c.Z, {
              type: I.Hb.SYSTEM_DM,
              className: T.systemTag
            })
          ]
        }),
        compact: a,
        showTimestamp: !0
      }),
      (0, i.jsx)('div', {
        className: s()(T.__invalid_messageContent, {
          [T.compact]: a
        }),
        children: m.Z.Messages.GUILD_RAID_REPORT_SYSTEM_MESSAGE.format({
          username: p.nick,
          usernameHook: C,
          guildName: null !== (t = null == f ? void 0 : f.name) && void 0 !== t ? t : ''
        })
      })
    ]
  })
})
  });
}