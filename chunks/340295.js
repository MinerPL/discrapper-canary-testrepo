var i = n(735250),
  a = n(470079),
  l = n(481060),
  s = n(287734),
  r = n(305325),
  o = n(281956),
  c = n(584729),
  d = n(27457),
  u = n(354459),
  h = n(689938),
  p = n(272956);
t.Z = function(e) {
  var t, n;
  let {
participants: m,
channel: _,
hasConnectPermission: f
  } = e, E = m.filter(u.Io), C = (0, o.J)(_.guild_id), g = a.useCallback(() => {
C ? (0, r.hk)(_.guild_id, () => s.default.selectVoiceChannel(_.id)) : s.default.selectVoiceChannel(_.id);
  }, [
_.id,
_.guild_id,
C
  ]), I = 4 === E.length ? 2 : 3;
  return (0, i.jsxs)('div', {
className: p.container,
children: [
  (0, i.jsx)('div', {
    className: p.tiles,
    style: {
      maxWidth: 168 * I
    },
    children: E.slice(0, 5).map(e => (0, i.jsx)(d.ZP, {
      participant: e,
      channel: _,
      className: p.tile,
      paused: !0,
      inCall: !0,
      noVideoRender: !0,
      inPopout: !1,
      width: 48
    }, e.id))
  }),
  (0, i.jsx)(l.Heading, {
    className: p.channelName,
    variant: 'heading-xxl/semibold',
    children: _.name
  }),
  (0, i.jsx)('div', {
    className: p.participantsRow,
    children: (0, i.jsx)(l.Text, {
      color: 'header-secondary',
      variant: 'text-sm/normal',
      children: (t = _, 0 === (n = E).length ? h.Z.Messages.CURRENTLY_IN_VOICE_EMPTY : 1 === n.length ? h.Z.Messages.CURRENTLY_IN_VOICE_1.format({
        a: (0, c.Z)(t, n[0])
      }) : 2 === n.length ? h.Z.Messages.CURRENTLY_IN_VOICE_2.format({
        a: (0, c.Z)(t, n[0]),
        b: (0, c.Z)(t, n[1])
      }) : n.length > 2 ? h.Z.Messages.CURRENTLY_IN_VOICE_2_N.format({
        a: (0, c.Z)(t, n[0]),
        b: (0, c.Z)(t, n[1]),
        n: n.length - 2
      }) : void 0)
    })
  }),
  (0, i.jsx)(l.Button, {
    disabled: !f,
    className: p.joinButton,
    color: f ? l.Button.Colors.GREEN : l.Button.Colors.PRIMARY,
    onClick: g,
    size: l.Button.Sizes.MEDIUM,
    children: f ? h.Z.Messages.JOIN_VOICE : h.Z.Messages.CHANNEL_LOCKED_SHORT
  })
]
  });
};