"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("737960"),
  u = n("141681"),
  o = n("271938"),
  d = n("145131"),
  c = n("659500"),
  f = n("119106"),
  h = n("573540"),
  m = n("972155"),
  p = n("732961"),
  E = n("153984"),
  g = n("49111"),
  S = n("99795"),
  C = n("772313"),
  _ = (0, r.default)(e => {
    let {
      participants: t,
      filteredParticipants: n,
      selectedParticipant: s,
      participantsVersion: r,
      layout: _,
      onSelectParticipant: I,
      onContextMenuParticipant: T,
      onFullscreenParticipant: v,
      channel: x,
      hasConnectPermission: N,
      className: A,
      inCall: M,
      showParticipants: R = !0,
      paused: j = !1,
      width: L,
      height: y,
      idle: O,
      mode: P,
      popoutWindow: D,
      awaitingRemoteSessionInfo: b
    } = e;
    l.useEffect(() => {
      c.ComponentDispatch.dispatch(g.ComponentActions.REMEASURE_TARGET)
    }, [L, y]);
    let U = l.useMemo(() => n.filter(e => e.type !== S.ParticipantTypes.ACTIVITY || !e.participants.has(o.default.getId())), [n, r]);
    if ((null == b ? void 0 : b.channelId) === x.id) return (0, a.jsx)(h.default, {
      height: y
    });
    if ((null == x ? void 0 : x.isGuildVocal()) && !M) return (0, a.jsx)(f.default, {
      channel: x,
      participants: t,
      hasConnectPermission: N
    });
    if (P === g.ChannelModes.VOICE) return (0, a.jsx)(u.default, {
      guildId: x.guild_id,
      width: L,
      className: C.voiceCallWrapper,
      participants: t,
      onContextMenu: T
    });
    if (n = M ? n : t, null == s) return 0 === n.length ? (0, a.jsx)(E.default, {
      className: i(C.videoGrid, C.hiddenParticipants),
      channelId: x.id,
      width: L
    }) : (0, a.jsx)(d.default, {
      className: C.videoGridWrapper,
      justify: d.default.Justify.CENTER,
      align: d.default.Align.CENTER,
      children: (0, a.jsx)(m.default, {
        channel: x,
        className: C.videoGrid,
        participants: U,
        totalNumberOfParticipants: t.length,
        onClick: I,
        onDoubleClick: v,
        onContextMenu: T,
        paused: j,
        inCall: M
      })
    });
    return (0, a.jsx)(p.default, {
      onFullscreenParticipant: v,
      onContextMenuParticipant: T,
      onSelectParticipant: I,
      selectedParticipant: s,
      filteredParticipants: U,
      participants: t,
      popoutWindow: D,
      className: A,
      idle: O,
      height: y,
      width: L,
      layout: _,
      inCall: M,
      channel: x,
      showParticipants: R
    })
  })