n.d(t, {
  Z: function() {
return m;
  }
});
var r = n(430198),
  i = n(897345),
  a = n(697379),
  o = n(241559),
  s = n(819553),
  l = n(931261),
  u = n(994592),
  c = n(911560),
  d = n(592125),
  _ = n(430824),
  E = n(823379),
  f = n(754688),
  h = n(981631),
  p = n(176505);
async function m(e) {
  let {
guildId: t,
channelId: n
  } = e, m = _.Z.getGuild(t), I = _.Z.getRoles(t);
  if (null == m && t !== h.ME)
return !1;
  if (null == n)
return !0;
  if ((0, p.AB)(n))
switch (n) {
  case p.oC.ROLE_SUBSCRIPTIONS:
    return (0, u.on)(t, I);
  case p.oC.GUILD_SHOP:
    return (0, i.r)(m, I);
  case p.oC.MEMBER_APPLICATIONS:
    return (0, a.v)(t);
  case p.oC.GUILD_HOME:
    return (0, l.s)(t);
  case p.oC.CHANNEL_BROWSER:
    return null != m && m.hasFeature(h.oNc.COMMUNITY);
  case p.oC.GUILD_ONBOARDING:
    return s.ZP.shouldShowOnboarding(t);
  case p.oC.CUSTOMIZE_COMMUNITY:
    return null != m && m.hasFeature(h.oNc.COMMUNITY);
  case p.oC.MEMBER_SAFETY:
    return (0, o.lv)(t);
  default:
    (0, E.vE)(n);
}
  let T = d.Z.getChannel(n);
  return (null != T || (await c.Z.loadThread(n), null != (T = d.Z.getChannel(n)))) && ((0, f.YO)(T) || r.Z.isChannelGatedAndVisible(t, n));
}