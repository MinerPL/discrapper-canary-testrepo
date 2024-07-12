n.d(t, {
  Z: function() {
return E;
  }
});
var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(481060),
  o = n(239091),
  c = n(586902),
  d = n(40851),
  u = n(484459),
  h = n(103575),
  p = n(409216),
  m = n(768581),
  _ = n(121866);

function f(e) {
  let {
channel: t,
speaker: l,
className: p
  } = e, f = (0, d.bp)(), {
reducedMotion: E
  } = a.useContext(r.AccessibilityPreferencesContext), C = (0, c.Z)({
userId: l.id
  }), g = null != l.member ? (0, m.CA)(l.member) : null, I = e => {
(0, o.jW)(e, async () => {
  let {
    default: e
  } = await Promise.all([
    n.e('79695'),
    n.e('17400'),
    n.e('12435'),
    n.e('17463')
  ]).then(n.bind(n, 757387));
  return n => (0, i.jsx)(e, {
    ...n,
    user: l.user,
    guildId: t.guild_id,
    channel: t,
    showMediaItems: !0,
    showStageChannelItems: !0,
    showChatItems: !1
  });
}, {
  context: f
});
  };
  return (0, i.jsx)(r.Popout, {
preload: () => (0, u.W)(l.user, {
  guildId: t.guild_id,
  channelId: t.id
}),
renderPopout: e => (0, i.jsx)(h.Z, {
  ...e,
  location: 'StageSpeakerSummary',
  guildId: t.guild_id,
  channelId: t.id,
  userId: l.id
}),
position: 'right',
spacing: 8,
children: e => (0, i.jsx)(r.Tooltip, {
  text: l.userNick,
  position: 'bottom',
  children: n => (0, i.jsx)(r.Clickable, {
    ...n,
    ...e,
    onClick: t => {
      t.stopPropagation(), e.onClick(t);
    },
    onContextMenu: I,
    children: (0, i.jsx)(r.Avatar, {
      src: null != g ? g : l.user.getAvatarURL(t.guild_id, 24),
      size: r.AvatarSizes.SIZE_24,
      className: s()(_.avatar, p),
      'aria-label': l.userNick,
      isSpeaking: C && !E.enabled
    })
  })
})
  });
}

function E(e) {
  let {
speakers: t,
channel: n
  } = e;
  return (0, i.jsx)(p.Z, {
className: _.summary,
guildId: n.guild_id,
users: t,
max: 10,
renderUser: (e, t, a) => (0, i.jsx)(f, {
  channel: n,
  speaker: e,
  className: t
}, a),
renderMoreUsers: (e, t, n) => (0, i.jsx)('div', {
  className: s()(_.speakers, t),
  children: e
}, n)
  });
}