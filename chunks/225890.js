"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("442837"),
  i = n("305325"),
  r = n("281956"),
  o = n("922482"),
  u = n("592125"),
  d = n("271383"),
  c = n("430824"),
  f = n("594174"),
  E = n("897285"),
  _ = n("924301"),
  T = n("482241"),
  m = n("11868"),
  I = n("231338");

function p(e) {
  let {
    code: t
  } = e, [n, p, h] = t.split("-"), {
    guildScheduledEvent: N,
    guild: S,
    channel: C,
    isMember: A
  } = (0, l.useStateFromStoresObject)([_.default, c.default, u.default, d.default, f.default], () => {
    var e, t;
    let s = null !== (t = _.default.getGuildScheduledEvent(p)) && void 0 !== t ? t : void 0,
      a = c.default.getGuild(n),
      l = u.default.getChannel(null == s ? void 0 : s.channel_id);
    return {
      guildScheduledEvent: s,
      guild: a,
      channel: l,
      isMember: d.default.isMember(n, null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.id)
    }
  }, [n, p]);
  return a.useEffect(() => {
    (null == N ? void 0 : N.id) == null && T.default.fetchGuildEvent(n, p), E.default.getGuildEventUserCounts(n, p, null != h ? [h] : []), E.default.getGuildEventsForCurrentUser(n)
  }, [p, n, null == N ? void 0 : N.id, h]), (0, s.jsx)(m.default, {
    guild: S,
    channel: C,
    guildScheduledEvent: N,
    isMember: A,
    onAcceptInstantInvite: I.NOOP,
    onTransitionToInviteChannel: function() {
      if ((0, r.shouldShowMembershipVerificationGate)(n)) {
        (0, i.openMemberVerificationModal)(n);
        return
      }(null == C ? void 0 : C.isGuildStageVoice()) ? (0, o.connectAndOpen)(C) : (null == C ? void 0 : C.isGuildVoice()) && T.default.joinVoiceEvent(C.guild_id, C.id)
    },
    recurrenceId: h
  })
}