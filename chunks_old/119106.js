"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("77078"),
  i = n("987317"),
  r = n("233322"),
  u = n("157186"),
  o = n("491519"),
  d = n("679243"),
  c = n("99795"),
  f = n("782340"),
  h = n("139559"),
  m = function(e) {
    var t, n;
    let {
      participants: m,
      channel: p,
      hasConnectPermission: E
    } = e, g = m.filter(c.isUserParticipant), S = (0, u.useShowMemberVerificationGate)(p.guild_id), C = l.useCallback(() => {
      S ? (0, r.openMemberVerificationModal)(p.guild_id, () => i.default.selectVoiceChannel(p.id)) : i.default.selectVoiceChannel(p.id)
    }, [p.id, p.guild_id, S]), _ = 4 === g.length ? 2 : 3;
    return (0, a.jsxs)("div", {
      className: h.container,
      children: [(0, a.jsx)("div", {
        className: h.tiles,
        style: {
          maxWidth: 168 * _
        },
        children: g.slice(0, 5).map(e => (0, a.jsx)(d.default, {
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
          children: (t = p, 0 === (n = g).length ? f.default.Messages.CURRENTLY_IN_VOICE_EMPTY : 1 === n.length ? f.default.Messages.CURRENTLY_IN_VOICE_1.format({
            a: (0, o.default)(t, n[0])
          }) : 2 === n.length ? f.default.Messages.CURRENTLY_IN_VOICE_2.format({
            a: (0, o.default)(t, n[0]),
            b: (0, o.default)(t, n[1])
          }) : n.length > 2 ? f.default.Messages.CURRENTLY_IN_VOICE_2_N.format({
            a: (0, o.default)(t, n[0]),
            b: (0, o.default)(t, n[1]),
            n: n.length - 2
          }) : void 0)
        })
      }), (0, a.jsx)(s.Button, {
        disabled: !E,
        className: h.joinButton,
        color: E ? s.Button.Colors.GREEN : s.Button.Colors.PRIMARY,
        onClick: C,
        size: s.Button.Sizes.MEDIUM,
        children: E ? f.default.Messages.JOIN_VOICE : f.default.Messages.CHANNEL_LOCKED_SHORT
      })]
    })
  }