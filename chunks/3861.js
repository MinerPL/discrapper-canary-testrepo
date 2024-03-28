"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("112724"),
  o = n("351248"),
  u = n("314897"),
  d = n("285952"),
  c = n("585483"),
  f = n("340295"),
  h = n("171277"),
  m = n("677845"),
  p = n("430371"),
  E = n("236564"),
  C = n("981631"),
  g = n("354459"),
  S = n("328363");
t.default = (0, r.default)(e => {
  let {
    participants: t,
    filteredParticipants: n,
    selectedParticipant: s,
    participantsVersion: r,
    layout: _,
    onSelectParticipant: T,
    onContextMenuParticipant: I,
    onFullscreenParticipant: A,
    channel: v,
    hasConnectPermission: N,
    className: x,
    inCall: M,
    showParticipants: R = !0,
    paused: L = !1,
    width: y,
    height: O,
    idle: j,
    mode: P,
    popoutWindow: D,
    awaitingRemoteSessionInfo: b
  } = e;
  l.useEffect(() => {
    c.ComponentDispatch.dispatch(C.ComponentActions.REMEASURE_TARGET)
  }, [y, O]);
  let U = l.useMemo(() => n.filter(e => e.type !== g.ParticipantTypes.ACTIVITY || !e.participants.has(u.default.getId())), [n, r]);
  if ((null == b ? void 0 : b.channelId) === v.id) return (0, a.jsx)(h.default, {
    height: O
  });
  if ((null == v ? void 0 : v.isGuildVocal()) && !M) return (0, a.jsx)(f.default, {
    channel: v,
    participants: t,
    hasConnectPermission: N
  });
  if (P === C.ChannelModes.VOICE) return (0, a.jsx)(o.default, {
    guildId: v.guild_id,
    width: y,
    className: S.voiceCallWrapper,
    participants: t,
    onContextMenu: I
  });
  if (n = M ? n : t, null == s) return 0 === n.length ? (0, a.jsx)(E.default, {
    className: i()(S.videoGrid, S.hiddenParticipants),
    channelId: v.id,
    width: y
  }) : (0, a.jsx)(d.default, {
    className: S.videoGridWrapper,
    justify: d.default.Justify.CENTER,
    align: d.default.Align.CENTER,
    children: (0, a.jsx)(m.default, {
      channel: v,
      className: S.videoGrid,
      participants: U,
      totalNumberOfParticipants: t.length,
      onClick: T,
      onDoubleClick: A,
      onContextMenu: I,
      paused: L,
      inCall: M
    })
  });
  return (0, a.jsx)(p.default, {
    onFullscreenParticipant: A,
    onContextMenuParticipant: I,
    onSelectParticipant: T,
    selectedParticipant: s,
    filteredParticipants: U,
    participants: t,
    popoutWindow: D,
    className: x,
    idle: j,
    height: O,
    width: y,
    layout: _,
    inCall: M,
    channel: v,
    showParticipants: R
  })
})