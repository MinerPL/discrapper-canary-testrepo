"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("481060"),
  r = n("287734"),
  o = n("358221"),
  u = n("305325"),
  d = n("281956"),
  c = n("27457"),
  f = n("823379"),
  h = n("5192"),
  m = n("501655"),
  p = n("689938"),
  E = n("726951");
let C = (e, t) => h.default.getName(e.getGuildId(), e.id, t.user);
t.default = function(e) {
  var t, n;
  let {
    participants: h,
    channel: g,
    hasConnectPermission: S
  } = e, _ = (0, d.useShowMemberVerificationGate)(g.guild_id), T = l.useCallback(() => {
    _ ? (0, u.openMemberVerificationModal)(g.guild_id, () => r.default.selectVoiceChannel(g.id)) : r.default.selectVoiceChannel(g.id)
  }, [g.id, g.guild_id, _]), I = h.filter(e => e.type === m.StageChannelParticipantTypes.VOICE), A = 4 === I.length ? 2 : 3, v = (0, s.useStateFromStoresArray)([o.default], () => I.map(e => o.default.getParticipant(g.id, e.id)).filter(f.isNotNullish), [g.id, I]);
  return (0, a.jsxs)("div", {
    className: E.container,
    children: [(0, a.jsx)("div", {
      className: E.tiles,
      style: {
        maxWidth: 168 * A
      },
      children: v.slice(0, 5).map(e => (0, a.jsx)(c.default, {
        participant: e,
        channel: g,
        className: E.tile,
        paused: !0,
        inCall: !0,
        noVideoRender: !0,
        inPopout: !1,
        width: 48
      }, e.id))
    }), (0, a.jsx)(i.Heading, {
      className: E.channelName,
      variant: "heading-xxl/semibold",
      children: g.name
    }), (0, a.jsx)("div", {
      className: E.participantsRow,
      children: (0, a.jsx)(i.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: (t = g, 0 === (n = I).length ? p.default.Messages.CURRENTLY_IN_STAGE_EMPTY : 1 === n.length ? p.default.Messages.CURRENTLY_IN_STAGE_1.format({
          a: C(t, n[0])
        }) : 2 === n.length ? p.default.Messages.CURRENTLY_IN_STAGE_2.format({
          a: C(t, n[0]),
          b: C(t, n[1])
        }) : n.length > 2 ? p.default.Messages.CURRENTLY_IN_STAGE_2_N.format({
          a: C(t, n[0]),
          b: C(t, n[1]),
          n: n.length - 2
        }) : void 0)
      })
    }), (0, a.jsx)(i.Button, {
      disabled: !S,
      className: E.joinButton,
      color: S ? i.Button.Colors.GREEN : i.Button.Colors.PRIMARY,
      onClick: T,
      size: i.Button.Sizes.MEDIUM,
      children: S ? p.default.Messages.STAGE_CHANNEL_JOIN : p.default.Messages.CHANNEL_LOCKED_SHORT
    })]
  })
}