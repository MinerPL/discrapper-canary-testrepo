n.d(t, {
  P: function() {
return C;
  },
  e: function() {
return f;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(481060),
  r = n(239091),
  l = n(739566),
  o = n(942951),
  c = n(484459),
  u = n(103575),
  d = n(594174),
  _ = n(702346),
  E = n(768581),
  I = n(91047),
  m = n(628566),
  T = n(693912),
  h = n(981631);

function N(e, t) {
  return s.useCallback(s => (l, o) => {
var _;
let T = E.ZP.getApplicationIconURL({
    id: s.id,
    icon: s.icon,
    bot: s.bot,
    botIconFirst: !0
  }),
  h = d.default.getUser(null === (_ = s.bot) || void 0 === _ ? void 0 : _.id),
  N = m.Z.getIntegration(e.id, s.id),
  C = e.isPrivate() && null != N ? t => {
    (0, r.jW)(t, async () => {
      let {
        default: t
      } = await n.e('30887').then(n.bind(n, 496281));
      return n => (0, i.jsx)(t, {
        ...n,
        channel: e,
        integration: N
      });
    });
  } : null != h ? t => (0, I.Pv)(t, h, e) : void 0,
  {
    bot: f
  } = s;
return null == f ? l : (0, i.jsx)(a.Popout, {
  position: 'right',
  preload: () => (0, c.W)(f.id, T, {
    guildId: e.guild_id,
    channelId: e.id
  }),
  renderPopout: n => (0, i.jsx)(u.Z, {
    ...n,
    location: 'PrivateChannelIntegrationSystemMessage',
    userId: f.id,
    guildId: e.guild_id,
    channelId: e.id,
    messageId: t.id
  }),
  children: e => (0, i.jsx)(a.Anchor, {
    ...e,
    onContextMenu: C,
    children: l
  })
}, o);
  }, [
e,
t.id
  ]);
}

function C(e) {
  let {
message: t,
channel: s,
compact: a
  } = e, r = (0, l.ZP)(t), c = t.application, u = (0, o.l)({
user: t.author,
channelId: s.id,
guildId: s.guild_id,
messageId: t.id
  }), d = N(s, t);
  return (0, i.jsx)(_.Z, {
icon: n(570111),
timestamp: t.timestamp,
compact: a,
children: (0, T.DS)({
  application: c,
  username: r.nick,
  usernameHook: u(r),
  applicationNameHook: null != c ? d(c) : h.dG4
})
  });
}

function f(e) {
  let {
message: t,
channel: s,
compact: a
  } = e, r = (0, l.ZP)(t), c = t.application, u = (0, o.l)({
user: t.author,
channelId: s.id,
guildId: s.guild_id,
messageId: t.id
  }), d = N(s, t);
  return (0, i.jsx)(_.Z, {
icon: n(474019),
timestamp: t.timestamp,
compact: a,
children: (0, T.nh)({
  application: c,
  username: r.nick,
  usernameHook: u(r),
  applicationNameHook: null != c ? d(c) : h.dG4
})
  });
}