t(789020);
var i = t(735250),
  r = t(470079),
  o = t(512722),
  l = t.n(o),
  u = t(442837),
  s = t(570140),
  a = t(821849),
  c = t(906732),
  d = t(887706),
  _ = t(728345),
  f = t(724870),
  E = t(594174),
  I = t(509545),
  g = t(55563),
  p = t(551428),
  S = t(630388),
  C = t(270144),
  m = t(171246),
  T = t(689011),
  h = t(714441),
  A = t(981631),
  N = t(689938);
n.Z = e => {
  var n;
  let t, {
  guildId: o,
  groupListingId: v,
  analyticsLocation: R,
  showBenefitsFirst: L,
  skuId: b,
  onComplete: O,
  forcesTransitionToGuild: M
} = e,
Z = (0, u.e7)([g.Z], () => null != b ? g.Z.get(b) : void 0, [b]),
D = (0, u.e7)([p.Z], () => null != b ? p.Z.getForSKU(b) : void 0, [b]),
U = (0, u.e7)([I.Z], () => null != b ? I.Z.getForSKU(b) : void 0, [b]),
P = null != U ? U[0] : void 0,
x = null == Z ? void 0 : Z.applicationId,
G = (null == D ? void 0 : D.published) === !0 && null != Z && (0, S.yE)(Z.flags, A.l4R.AVAILABLE),
y = null == P ? void 0 : P.skuId,
{
  data: w
} = (0, _.I)(x),
j = (0, C._k)(v, {
  includeSoftDeleted: !0
}).map(e => e.subscription_plans[0].id),
{
  analyticsLocations: F
} = (0, c.ZP)(),
{
  activeSubscription: B,
  activeEntitlement: k
} = (0, C.F5)(x, o),
H = (0, C.CR)(x, o),
W = (0, d.Z)(),
V = null != Z && (0, m.KW)(Z.flags),
Y = null != k && k.userId === (null === (n = E.default.getCurrentUser()) || void 0 === n ? void 0 : n.id),
K = null == k || Y,
z = null == k || j.length > 1,
J = null != o || H.length > 0,
q = V && Y,
X = null != P && null != w && K && z && (J || V) && !q;
  return K ? J ? q && null != P && (t = N.Z.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({
tierName: P.name
  })) : t = N.Z.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : t = N.Z.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, r.useEffect(() => {
G && null != y && W && !(I.Z.isFetchingForSKU(y) || I.Z.isLoadedForSKU(y)) && s.Z.wait(() => {
  (0, a.GZ)(y);
});
  }, [
G,
y,
W
  ]), {
openModal: r.useCallback(() => {
  l()(null != w, 'No application'), l()(null != P, 'No subscription plan'), l()(G, 'Cannot purchase this unpublished plan');
  let e = () => {
    (0, f.h)({
      activeSubscription: B,
      analyticsSubscriptionType: A.NYc.APPLICATION,
      analyticsLocations: F,
      analyticsLocation: R,
      renderHeader: (e, n, t) => (0, i.jsx)(T.t, {
        step: t,
        onClose: () => n(!1)
      }),
      initialPlanId: P.id,
      skuId: P.skuId,
      guildId: o,
      eligibleApplicationSubscriptionGuilds: H,
      planGroup: j,
      applicationId: w.id,
      showBenefitsFirst: L,
      onComplete: O,
      forcesTransitionToGuild: M
    });
  };
  !J && V ? (0, h.i)({
    applicationName: w.name,
    onConfirm: e,
    onCancel: () => {}
  }) : e();
}, [
  G,
  P,
  j,
  w,
  o,
  J,
  V,
  F,
  R,
  B,
  L,
  H,
  O,
  M
]),
canOpenModal: X,
cannotOpenReason: t
  };
};