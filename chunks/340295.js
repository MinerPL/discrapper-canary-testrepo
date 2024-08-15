var i = n(735250),
  a = n(470079),
  s = n(481060),
  l = n(287734),
  r = n(305325),
  o = n(281956),
  c = n(584729),
  u = n(27457),
  d = n(354459),
  h = n(689938),
  m = n(226409);
t.Z = function(e) {
  var t, n;
  let {
participants: p,
channel: _,
hasConnectPermission: f
  } = e, E = p.filter(d.Io), g = (0, o.J)(_.guild_id), C = a.useCallback(() => {
g ? (0, r.hk)(_.guild_id, () => l.default.selectVoiceChannel(_.id)) : l.default.selectVoiceChannel(_.id);
  }, [
_.id,
_.guild_id,
g
  ]), I = 4 === E.length ? 2 : 3;
  return (0, i.jsxs)('div', {
className: m.container,
children: [
  (0, i.jsx)('div', {
    className: m.tiles,
    style: {
      maxWidth: 168 * I
    },
    children: E.slice(0, 5).map(e => (0, i.jsx)(u.ZP, {
      participant: e,
      channel: _,
      className: m.tile,
      paused: !0,
      inCall: !0,
      noVideoRender: !0,
      inPopout: !1,
      width: 48
    }, e.id))
  }),
  (0, i.jsx)(s.Heading, {
    className: m.channelName,
    variant: 'heading-xxl/semibold',
    children: _.name
  }),
  (0, i.jsx)('div', {
    className: m.participantsRow,
    children: (0, i.jsx)(s.Text, {
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
  (0, i.jsx)(s.Button, {
    disabled: !f,
    className: m.joinButton,
    color: f ? s.Button.Colors.GREEN : s.Button.Colors.PRIMARY,
    onClick: C,
    size: s.Button.Sizes.MEDIUM,
    children: f ? h.Z.Messages.JOIN_VOICE : h.Z.Messages.CHANNEL_LOCKED_SHORT
  })
]
  });
};