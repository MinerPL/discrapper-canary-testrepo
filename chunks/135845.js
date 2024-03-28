"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var s = n("735250");
n("470079");
var a = n("512722"),
  l = n.n(a),
  i = n("442837"),
  r = n("131704"),
  o = n("601964"),
  u = n("199902"),
  d = n("914010"),
  c = n("197409"),
  f = n("358595"),
  E = n("981631"),
  _ = n("245335"),
  T = n("689938"),
  m = n("558338");

function I(e) {
  let t, n, a, {
      invite: I,
      currentUserId: p,
      guild: h,
      onTransitionToInviteChannel: N,
      onAcceptInstantInvite: S
    } = e,
    C = null == h ? void 0 : h.id,
    A = (0, i.useStateFromStores)([d.default], () => d.default.getGuildId()),
    g = (0, i.useStateFromStores)([u.default], () => null != I && null != I.target_user ? u.default.getActiveStreamForUser(I.target_user.id, C) : null, [I, C]),
    M = (0, i.useStateFromStores)([u.default], () => null != I && null != I.target_user ? u.default.getStreamForUser(I.target_user.id, C) : null, [I, C]),
    R = null != I && I.target_type === _.InviteTargetTypes.STREAM && null != I.target_user && null != g,
    O = null != I && null != M && null != I.channel && null != I.guild && M.channelId === I.channel.id && M.guildId === I.guild.id;
  l()(null != I, "Invite cannot be null");
  let {
    target_type: v,
    target_user: L
  } = I;
  l()(v === _.InviteTargetTypes.STREAM && null != L, "invalid streaming invite");
  let x = p === L.id,
    D = I.state === E.InviteStates.ACCEPTING,
    P = null != h;
  if (null == h) {
    if (null == I.guild) return (0, s.jsx)(f.default, {});
    h = new o.default(I.guild)
  }
  let y = null != I.channel ? (0, r.createChannelRecordFromInvite)(I.channel) : null,
    U = R ? N : S;
  P && !O ? a = x ? T.default.Messages.INVITE_BUTTON_STREAM_ENDED_STREAMER : T.default.Messages.INVITE_BUTTON_STREAM_ENDED.format({
    name: L.username
  }) : (t = T.default.Messages.WATCH, n = c.default.Button.Colors.GREEN, R && (t = T.default.Messages.INVITE_BUTTON_STREAM_WATCHING, n = c.default.Button.Colors.PRIMARY), a = x ? T.default.Messages.INVITE_BUTTON_STREAMER : T.default.Messages.INVITE_BUTTON_STREAMING.format({
    name: L.username
  }));
  let b = A === h.id && null != y ? (0, s.jsx)(c.default.Channel, {
    channel: y
  }) : T.default.Messages.INVITE_BUTTON_STREAMING_SUBTEXT.format({
    guildName: h.name
  });
  return (0, s.jsxs)(c.default, {
    children: [(0, s.jsx)(c.default.Header, {
      text: T.default.Messages.INVITE_BUTTON_TITLE_STREAMING
    }), (0, s.jsxs)(c.default.Body, {
      children: [(0, s.jsxs)("div", {
        className: m.headerLine,
        children: [(0, s.jsx)(c.default.Icon, {
          guild: h,
          onClick: P && O ? U : void 0
        }), (0, s.jsx)(c.default.Info, {
          title: a,
          onClick: P && O ? U : void 0,
          children: b
        })]
      }), O ? (0, s.jsx)(c.default.Button, {
        disabled: P && !O,
        onClick: U,
        submitting: D,
        isDisabled: R && O,
        color: n,
        children: t
      }) : null]
    })]
  })
}