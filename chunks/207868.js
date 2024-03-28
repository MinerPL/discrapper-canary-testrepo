"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("392711"),
  i = n.n(s),
  r = n("442837"),
  o = n("557135"),
  u = n("590293"),
  d = n("66999"),
  c = n("665906"),
  f = n("496675"),
  h = n("979651"),
  m = n("125015"),
  p = n("502568"),
  E = n("585483"),
  C = n("981631"),
  g = n("689938");
t.default = l.memo(function(e) {
  let {
    channel: t
  } = e, n = (0, u.default)(), s = (0, r.useStateFromStores)([h.default], () => h.default.isInChannel(t.id)), S = (0, r.useStateFromStores)([h.default], () => !i().isEmpty(h.default.getVoiceStatesForChannel(t.id))), _ = (0, r.useStateFromStores)([f.default], () => f.default.can(C.Permissions.CONNECT, t)), {
    needSubscriptionToAccess: T
  } = (0, d.default)(t.id), I = (0, c.useIsActiveChannelOrUnarchivableThread)(t), A = l.useCallback(() => {
    o.default.handleVoiceConnect({
      channel: t,
      connected: s,
      needSubscriptionToAccess: T,
      locked: !1
    })
  }, [t, s, T]);
  return (l.useEffect(() => (E.ComponentDispatch.subscribe(C.ComponentActions.CALL_START, A), () => {
    E.ComponentDispatch.unsubscribe(C.ComponentActions.CALL_START, A)
  }), [A]), c.VoiceInThreadsExperiment.useExperiment({
    guildId: t.guild_id,
    location: "63250c_1"
  }, {
    autoTrackExposure: !1
  }).enabled && !n && !s && _ && I && t.isVocalThread()) ? (0, a.jsx)(p.default.Icon, {
    icon: m.default,
    onClick: A,
    tooltip: S ? g.default.Messages.JOIN_VOICE_CALL : g.default.Messages.START_VOICE_CALL
  }) : null
})