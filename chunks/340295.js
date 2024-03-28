"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("481060"),
  i = n("287734"),
  r = n("305325"),
  o = n("281956"),
  u = n("584729"),
  d = n("27457"),
  c = n("354459"),
  f = n("689938"),
  h = n("726951");
t.default = function(e) {
  var t, n;
  let {
    participants: m,
    channel: p,
    hasConnectPermission: E
  } = e, C = m.filter(c.isUserParticipant), g = (0, o.useShowMemberVerificationGate)(p.guild_id), S = l.useCallback(() => {
    g ? (0, r.openMemberVerificationModal)(p.guild_id, () => i.default.selectVoiceChannel(p.id)) : i.default.selectVoiceChannel(p.id)
  }, [p.id, p.guild_id, g]), _ = 4 === C.length ? 2 : 3;
  return (0, a.jsxs)("div", {
    className: h.container,
    children: [(0, a.jsx)("div", {
      className: h.tiles,
      style: {
        maxWidth: 168 * _
      },
      children: C.slice(0, 5).map(e => (0, a.jsx)(d.default, {
        participant: e,
        channel: p,
        className: h.tile,
        paused: !0,
        inCall: !0,
        noVideoRender: !0,
        inPopout: !1,
        width: 48
      }, e.id))
    }), (0, a.jsx)(s.Heading, {
      className: h.channelName,
      variant: "heading-xxl/semibold",
      children: p.name
    }), (0, a.jsx)("div", {
      className: h.participantsRow,
      children: (0, a.jsx)(s.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: (t = p, 0 === (n = C).length ? f.default.Messages.CURRENTLY_IN_VOICE_EMPTY : 1 === n.length ? f.default.Messages.CURRENTLY_IN_VOICE_1.format({
          a: (0, u.default)(t, n[0])
        }) : 2 === n.length ? f.default.Messages.CURRENTLY_IN_VOICE_2.format({
          a: (0, u.default)(t, n[0]),
          b: (0, u.default)(t, n[1])
        }) : n.length > 2 ? f.default.Messages.CURRENTLY_IN_VOICE_2_N.format({
          a: (0, u.default)(t, n[0]),
          b: (0, u.default)(t, n[1]),
          n: n.length - 2
        }) : void 0)
      })
    }), (0, a.jsx)(s.Button, {
      disabled: !E,
      className: h.joinButton,
      color: E ? s.Button.Colors.GREEN : s.Button.Colors.PRIMARY,
      onClick: S,
      size: s.Button.Sizes.MEDIUM,
      children: E ? f.default.Messages.JOIN_VOICE : f.default.Messages.CHANNEL_LOCKED_SHORT
    })]
  })
}