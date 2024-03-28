"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("442837"),
  l = n("358221"),
  s = n("430824"),
  i = n("496675"),
  r = n("431328"),
  o = n("501655"),
  u = n("146085"),
  d = n("71275"),
  c = n("981631");

function f(e) {
  var t;
  let n = (0, a.useStateFromStores)([l.default], () => l.default.getStageVideoLimitBoostUpsellDismissed(e.id), [e.id]),
    f = (0, r.useActualStageSpeakerCount)(e.id),
    h = (0, r.useStageParticipantsCount)(e.id, o.StageChannelParticipantNamedIndex.AUDIENCE),
    m = (0, d.useStageHasMedia)(e.id),
    p = (0, a.useStateFromStores)([s.default], () => s.default.getGuild(e.guild_id), [e.guild_id]),
    E = (0, a.useStateFromStores)([i.default], () => i.default.can(u.MODERATE_STAGE_CHANNEL_PERMISSIONS, e), [e]),
    C = null !== (t = null == p ? void 0 : p.maxStageVideoChannelUsers) && void 0 !== t ? t : 0,
    g = !(null == p ? void 0 : p.isCommunity()) && C > c.MAX_STAGE_VIDEO_USER_LIMIT_TIER3;
  return m && !n && E && !g && f + h >= C
}