"use strict";
n.d(t, {
  Z: function() {
    return S
  }
});
var i = n(430198),
  r = n(897345),
  s = n(697379),
  o = n(241559),
  a = n(819553),
  l = n(931261),
  u = n(994592),
  _ = n(911560),
  d = n(592125),
  c = n(430824),
  E = n(823379),
  I = n(754688),
  T = n(981631),
  h = n(176505);
async function S(e) {
  let {
    guildId: t,
    channelId: n
  } = e, S = c.Z.getGuild(t), f = c.Z.getRoles(t);
  if (null == S && t !== T.ME) return !1;
  if (null == n) return !0;
  if ((0, h.AB)(n)) switch (n) {
    case h.oC.ROLE_SUBSCRIPTIONS:
      return (0, u.on)(t, f);
    case h.oC.GUILD_SHOP:
      return (0, r.r)(S, f);
    case h.oC.MEMBER_APPLICATIONS:
      return (0, s.v)(t);
    case h.oC.GUILD_HOME:
      return (0, l.s)(t);
    case h.oC.CHANNEL_BROWSER:
      return null != S && S.hasFeature(T.oNc.COMMUNITY);
    case h.oC.GUILD_ONBOARDING:
      return a.ZP.shouldShowOnboarding(t);
    case h.oC.CUSTOMIZE_COMMUNITY:
      return null != S && S.hasFeature(T.oNc.COMMUNITY);
    case h.oC.MEMBER_SAFETY:
      return (0, o.lv)(t);
    default:
      (0, E.vE)(n)
  }
  let N = d.Z.getChannel(n);
  return (null != N || (await _.Z.loadThread(n), null != (N = d.Z.getChannel(n)))) && ((0, I.YO)(N) || i.Z.isChannelGatedAndVisible(t, n))
}