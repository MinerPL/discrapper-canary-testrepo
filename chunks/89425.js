"use strict";
n.d(t, {
  Z: function() {
    return d
  }
}), n(411104);
var i = n(430198),
  r = n(557135),
  s = n(66999),
  o = n(592125),
  a = n(496675),
  l = n(944486),
  u = n(979651);
class _ extends Error {}
async function d(e) {
  let {
    channelId: t,
    timeoutMs: n = 1e4,
    bypassChangeModal: d = !1
  } = e, c = o.Z.getChannel(t);
  if (null == c || !await r.Z.handleVoiceConnect({
      bypassGuildIdCheck: !0,
      bypassChangeModal: d,
      channel: c,
      connected: u.Z.isInChannel(t),
      needSubscriptionToAccess: (0, s.$)(t, o.Z, i.Z, a.Z).needSubscriptionToAccess
    })) return !1;
  let E = new Promise((e, i) => {
    let r = setTimeout(() => {
      i(new _("Joining voice channel has timed out."))
    }, n);
    l.Z.addConditionalChangeListener(() => l.Z.getVoiceChannelId() !== t || (clearTimeout(r), e(), !1))
  });
  try {
    await E
  } catch (e) {
    if (e instanceof _) return !1;
    throw e
  }
  return !0
}