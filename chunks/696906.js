o(789020);
var t = o(735250),
  i = o(470079),
  a = o(512722),
  r = o.n(a),
  d = o(442837),
  l = o(570140),
  c = o(821849),
  s = o(906732),
  u = o(887706),
  f = o(728345),
  _ = o(724870),
  m = o(594174),
  p = o(509545),
  I = o(55563),
  h = o(551428),
  b = o(630388),
  C = o(270144),
  g = o(171246),
  y = o(689011),
  x = o(714441),
  v = o(981631),
  B = o(689938);
n.Z = e => {
  var n;
  let o, {
  guildId: a,
  groupListingId: S,
  analyticsLocation: M,
  showBenefitsFirst: w,
  skuId: T,
  onComplete: k,
  forcesTransitionToGuild: L
} = e,
j = (0, d.e7)([I.Z], () => null != T ? I.Z.get(T) : void 0, [T]),
G = (0, d.e7)([h.Z], () => null != T ? h.Z.getForSKU(T) : void 0, [T]),
N = (0, d.e7)([p.Z], () => null != T ? p.Z.getForSKU(T) : void 0, [T]),
O = null != N ? N[0] : void 0,
A = null == j ? void 0 : j.applicationId,
P = (null == G ? void 0 : G.published) === !0 && null != j && (0, b.yE)(j.flags, v.l4R.AVAILABLE),
Z = null == O ? void 0 : O.skuId,
{
  data: E
} = (0, f.I)(A),
R = (0, C._k)(S, {
  includeSoftDeleted: !0
}).map(e => e.subscription_plans[0].id),
{
  analyticsLocations: U
} = (0, s.ZP)(),
{
  activeSubscription: F,
  activeEntitlement: D
} = (0, C.F5)(A, a),
H = (0, C.CR)(A, a),
W = (0, u.Z)(),
V = null != j && (0, g.KW)(j.flags),
z = null != D && D.userId === (null === (n = m.default.getCurrentUser()) || void 0 === n ? void 0 : n.id),
K = null == D || z,
Y = null == D || R.length > 1,
q = null != a || H.length > 0,
J = V && z,
X = null != O && null != E && K && Y && (q || V) && !J;
  return K ? q ? J && null != O && (o = B.Z.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({
tierName: O.name
  })) : o = B.Z.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : o = B.Z.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, i.useEffect(() => {
P && null != Z && W && !(p.Z.isFetchingForSKU(Z) || p.Z.isLoadedForSKU(Z)) && l.Z.wait(() => {
  (0, c.GZ)(Z);
});
  }, [
P,
Z,
W
  ]), {
openModal: i.useCallback(() => {
  r()(null != E, 'No application'), r()(null != O, 'No subscription plan'), r()(P, 'Cannot purchase this unpublished plan');
  let e = () => {
    (0, _.h)({
      activeSubscription: F,
      analyticsSubscriptionType: v.NYc.APPLICATION,
      analyticsLocations: U,
      analyticsLocation: M,
      renderHeader: (e, n, o) => (0, t.jsx)(y.t, {
        step: o,
        onClose: () => n(!1)
      }),
      initialPlanId: O.id,
      skuId: O.skuId,
      guildId: a,
      eligibleApplicationSubscriptionGuilds: H,
      planGroup: R,
      applicationId: E.id,
      showBenefitsFirst: w,
      onComplete: k,
      forcesTransitionToGuild: L
    });
  };
  !q && V ? (0, x.i)({
    applicationName: E.name,
    onConfirm: e,
    onCancel: () => {}
  }) : e();
}, [
  P,
  O,
  R,
  E,
  a,
  q,
  V,
  U,
  M,
  F,
  w,
  H,
  k,
  L
]),
canOpenModal: X,
cannotOpenReason: o
  };
};