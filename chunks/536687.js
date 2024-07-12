n.d(t, {
  R: function() {
return s;
  },
  Z: function() {
return A;
  }
});
var i, s, a = n(470079),
  r = n(442837),
  l = n(179360),
  o = n(897285),
  c = n(300213),
  d = n(554747),
  u = n(499137),
  _ = n(929507),
  h = n(270144),
  E = n(400271),
  I = n(678513),
  m = n(899667),
  g = n(496675),
  p = n(541566),
  T = n(192513),
  S = n(255791),
  C = n(70956),
  f = n(267642),
  N = n(981631);

function A(e) {
  var t;
  let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : N.lds,
{
  lastFetchedAt: i
} = (0, r.cj)([m.Z], () => ({
  appliedGuildBoosts: m.Z.getAppliedGuildBoostsForGuild(n),
  lastFetchedAt: m.Z.getLastFetchedAtForGuild(n)
})),
{
  lastDismissedGracePeriod: s,
  isGracePeriodVisible: A
} = (0, r.cj)([p.Z], () => ({
  lastDismissedGracePeriod: p.Z.getLastDismissedGracePeriodForGuild(n),
  isGracePeriodVisible: p.Z.isVisible(n)
})),
Z = (0, r.e7)([E.Z], () => E.Z.isVisible(e)),
L = (0, r.e7)([S.Z], () => S.Z.isVisible(e)),
v = (0, r.e7)([g.Z], () => g.Z.can(N.Plq.ADMINISTRATOR, e)),
O = null != s && Date.now() - s <= N.Dge,
R = null != e ? e.premiumSubscriberCount : 0,
x = (0, f.rF)(R, n) !== N.Eu4.NONE,
b = null != i && Date.now() - i <= 43200000,
P = !b && !O && v && x,
M = (0, c.m)(n),
D = (0, r.e7)([T.Z], () => T.Z.isVisible(e)),
y = _.Z.useShouldShowChannelNotice(n),
j = (0, h.h6)(e),
{
  enableStudyGroup: U
} = (0, u.s)(e),
G = j.length > 0,
k = U && !(null == e ? void 0 : e.hasFeature(N.oNc.HUB)),
w = (0, d.Vm)(n),
B = (0, r.e7)([I.Z], () => null != I.Z.getActiveGuildSignUp(n));
  if (a.useEffect(() => {
  o.Z.getGuildEventsForCurrentUser(n);
}, [n]), a.useEffect(() => {
  let e = -1;
  return P && (e = window.setTimeout(() => {
    null != n && (0, l.C0)(n);
  }, 30 * Math.random() * C.Z.Millis.SECOND)), () => {
    window.clearTimeout(e);
  };
}, [
  n,
  P
]), Z)
return 0;
  if (A)
return 1;
  if (L)
return 2;
  else if (M || null != w)
return 3;
  else if (D)
return 4;
  else if (y)
return 5;
  else if (G)
return 6;
  else if (k)
return 7;
  else if (B)
return 8;
  return null;
}
(i = s || (s = {}))[i.ENABLE_PUBLIC_GUILD = 0] = 'ENABLE_PUBLIC_GUILD', i[i.APPLIED_GUILD_BOOST_GRACE_PERIOD = 1] = 'APPLIED_GUILD_BOOST_GRACE_PERIOD', i[i.MAX_MEMBER_COUNT = 2] = 'MAX_MEMBER_COUNT', i[i.GUILD_LIVE_CHANNEL = 3] = 'GUILD_LIVE_CHANNEL', i[i.GUILD_MFA_WARNING = 4] = 'GUILD_MFA_WARNING', i[i.COMMANDS_MIGRATION = 5] = 'COMMANDS_MIGRATION', i[i.APPLICATION_SUBSCRIPTION_EXPIRATION = 6] = 'APPLICATION_SUBSCRIPTION_EXPIRATION', i[i.HUB_STUDY_ROOM = 7] = 'HUB_STUDY_ROOM', i[i.SIGNUP = 8] = 'SIGNUP', i[i.CLAN_UPSELL = 9] = 'CLAN_UPSELL';