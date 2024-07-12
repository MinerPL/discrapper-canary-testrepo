n.d(t, {
  Z: function() {
return h;
  }
});
var i = n(735250);
n(470079);
var a = n(512722),
  s = n.n(a),
  r = n(442837),
  l = n(131704),
  o = n(601964),
  c = n(199902),
  d = n(914010),
  u = n(197409),
  _ = n(358595),
  E = n(981631),
  I = n(245335),
  m = n(689938),
  T = n(182578);

function h(e) {
  let t, n, a, {
  invite: h,
  currentUserId: N,
  guild: f,
  onTransitionToInviteChannel: p,
  onAcceptInstantInvite: C
} = e,
g = null == f ? void 0 : f.id,
S = (0, r.e7)([d.Z], () => d.Z.getGuildId()),
A = (0, r.e7)([c.Z], () => null != h && null != h.target_user ? c.Z.getActiveStreamForUser(h.target_user.id, g) : null, [
  h,
  g
]),
R = (0, r.e7)([c.Z], () => null != h && null != h.target_user ? c.Z.getStreamForUser(h.target_user.id, g) : null, [
  h,
  g
]),
x = null != h && h.target_type === I.Iq.STREAM && null != h.target_user && null != A,
O = null != h && null != R && null != h.channel && null != h.guild && R.channelId === h.channel.id && R.guildId === h.guild.id;
  s()(null != h, 'Invite cannot be null');
  let {
target_type: M,
target_user: v
  } = h;
  s()(M === I.Iq.STREAM && null != v, 'invalid streaming invite');
  let L = N === v.id,
Z = h.state === E.r2o.ACCEPTING,
P = null != f;
  if (null == f) {
if (null == h.guild)
  return (0, i.jsx)(_.Z, {});
f = new o.ZP(h.guild);
  }
  let b = null != h.channel ? (0, l.jD)(h.channel) : null,
D = x ? p : C;
  P && !O ? a = L ? m.Z.Messages.INVITE_BUTTON_STREAM_ENDED_STREAMER : m.Z.Messages.INVITE_BUTTON_STREAM_ENDED.format({
name: v.username
  }) : (t = m.Z.Messages.WATCH, n = u.Z.Button.Colors.GREEN, x && (t = m.Z.Messages.INVITE_BUTTON_STREAM_WATCHING, n = u.Z.Button.Colors.PRIMARY), a = L ? m.Z.Messages.INVITE_BUTTON_STREAMER : m.Z.Messages.INVITE_BUTTON_STREAMING.format({
name: v.username
  }));
  let j = S === f.id && null != b ? (0, i.jsx)(u.Z.Channel, {
channel: b
  }) : m.Z.Messages.INVITE_BUTTON_STREAMING_SUBTEXT.format({
guildName: f.name
  });
  return (0, i.jsxs)(u.Z, {
children: [
  (0, i.jsx)(u.Z.Header, {
    text: m.Z.Messages.INVITE_BUTTON_TITLE_STREAMING
  }),
  (0, i.jsxs)(u.Z.Body, {
    children: [
      (0, i.jsxs)('div', {
        className: T.headerLine,
        children: [
          (0, i.jsx)(u.Z.Icon, {
            guild: f,
            onClick: P && O ? D : void 0
          }),
          (0, i.jsx)(u.Z.Info, {
            title: a,
            onClick: P && O ? D : void 0,
            children: j
          })
        ]
      }),
      O ? (0, i.jsx)(u.Z.Button, {
        disabled: P && !O,
        onClick: D,
        submitting: Z,
        isDisabled: x && O,
        color: n,
        children: t
      }) : null
    ]
  })
]
  });
}