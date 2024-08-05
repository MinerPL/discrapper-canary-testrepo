var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(112724),
  o = n(613611),
  c = n(351248),
  u = n(285952),
  d = n(585483),
  h = n(340295),
  p = n(171277),
  m = n(677845),
  _ = n(430371),
  f = n(236564),
  E = n(981631),
  g = n(354459),
  C = n(524465);
t.Z = (0, r.Z)(e => {
  let {
participants: t,
filteredParticipants: n,
selectedParticipant: s,
participantsVersion: r,
layout: I,
onSelectParticipant: x,
onContextMenuParticipant: T,
onFullscreenParticipant: N,
channel: v,
hasConnectPermission: S,
className: Z,
inCall: A,
showParticipants: M = !0,
paused: b = !1,
width: R,
height: j,
idle: L,
mode: P,
popoutWindow: O,
awaitingRemoteSessionInfo: y
  } = e;
  a.useEffect(() => {
d.S.dispatch(E.CkL.REMEASURE_TARGET);
  }, [
R,
j
  ]);
  let D = a.useMemo(() => n.filter(e => e.type !== g.fO.ACTIVITY || !e.participants.some(e => (0, o.J)(e))), [
n,
r
  ]);
  if ((null == y ? void 0 : y.channelId) === v.id)
return (0, i.jsx)(p.Z, {
  height: j
});
  if ((null == v ? void 0 : v.isGuildVocal()) && !A)
return (0, i.jsx)(h.Z, {
  channel: v,
  participants: t,
  hasConnectPermission: S
});
  if (P === E.WtW.VOICE)
return (0, i.jsx)(c.Z, {
  guildId: v.guild_id,
  width: R,
  className: C.voiceCallWrapper,
  participants: t,
  onContextMenu: T
});
  if (n = A ? n : t, null == s)
return 0 === n.length ? (0, i.jsx)(f.Z, {
  className: l()(C.videoGrid, C.hiddenParticipants),
  channelId: v.id,
  width: R
}) : (0, i.jsx)(u.Z, {
  className: C.videoGridWrapper,
  justify: u.Z.Justify.CENTER,
  align: u.Z.Align.CENTER,
  children: (0, i.jsx)(m.Z, {
    channel: v,
    className: C.videoGrid,
    participants: D,
    totalNumberOfParticipants: t.length,
    onClick: x,
    onDoubleClick: N,
    onContextMenu: T,
    paused: b,
    inCall: A
  })
});
  return (0, i.jsx)(_.Z, {
onFullscreenParticipant: N,
onContextMenuParticipant: T,
onSelectParticipant: x,
selectedParticipant: s,
filteredParticipants: D,
participants: t,
popoutWindow: O,
className: Z,
idle: L,
height: j,
width: R,
layout: I,
inCall: A,
channel: v,
showParticipants: M
  });
});