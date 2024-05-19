"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("112724"),
  o = n("613611"),
  u = n("351248"),
  d = n("285952"),
  c = n("585483"),
  f = n("340295"),
  h = n("171277"),
  m = n("677845"),
  p = n("430371"),
  E = n("236564"),
  C = n("981631"),
  g = n("354459"),
  S = n("825532");
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
    channel: N,
    hasConnectPermission: v,
    className: x,
    inCall: M,
    showParticipants: R = !0,
    paused: y = !1,
    width: L,
    height: O,
    idle: j,
    mode: P,
    popoutWindow: D,
    awaitingRemoteSessionInfo: b,
    forceShowToggleParticipants: U
  } = e;
  l.useEffect(() => {
    c.ComponentDispatch.dispatch(C.ComponentActions.REMEASURE_TARGET)
  }, [L, O]);
  let F = l.useMemo(() => n.filter(e => e.type !== g.ParticipantTypes.ACTIVITY || !e.participants.some(e => (0, o.isActivityParticipantCurrentUserCurrentSession)(e))), [n, r]);
  if ((null == b ? void 0 : b.channelId) === N.id) return (0, a.jsx)(h.default, {
    height: O
  });
  if ((null == N ? void 0 : N.isGuildVocal()) && !M) return (0, a.jsx)(f.default, {
    channel: N,
    participants: t,
    hasConnectPermission: v
  });
  if (P === C.ChannelModes.VOICE) return (0, a.jsx)(u.default, {
    guildId: N.guild_id,
    width: L,
    className: S.voiceCallWrapper,
    participants: t,
    onContextMenu: I
  });
  if (n = M ? n : t, null == s) return 0 === n.length ? (0, a.jsx)(E.default, {
    className: i()(S.videoGrid, S.hiddenParticipants),
    channelId: N.id,
    width: L
  }) : (0, a.jsx)(d.default, {
    className: S.videoGridWrapper,
    justify: d.default.Justify.CENTER,
    align: d.default.Align.CENTER,
    children: (0, a.jsx)(m.default, {
      channel: N,
      className: S.videoGrid,
      participants: F,
      totalNumberOfParticipants: t.length,
      onClick: T,
      onDoubleClick: A,
      onContextMenu: I,
      paused: y,
      inCall: M
    })
  });
  return (0, a.jsx)(p.default, {
    onFullscreenParticipant: A,
    onContextMenuParticipant: I,
    onSelectParticipant: T,
    selectedParticipant: s,
    filteredParticipants: F,
    participants: t,
    popoutWindow: D,
    className: x,
    idle: j,
    height: O,
    width: L,
    layout: _,
    inCall: M,
    channel: N,
    showParticipants: R,
    forceShowToggleParticipants: U
  })
})