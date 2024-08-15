t.r(e), t.d(e, {
  SubscriptionDetailsModal: function() {
return f;
  }
});
var i = t(735250),
  l = t(470079),
  r = t(269210),
  o = t(752843),
  s = t(481060),
  a = t(757746),
  c = t(930155),
  d = t(889989),
  u = t(73346),
  S = t(591759),
  m = t(886253),
  I = t(680005),
  x = t(938337);

function f(n) {
  var e;
  let {
appId: t,
groupListingId: f,
groupListingType: _,
guildId: p,
onClose: h,
skuId: T,
transitionState: v,
onHeaderTitleClick: E
  } = n, {
data: N
  } = (0, c.H)(T), {
data: g
  } = (0, a.Z)(T), L = l.useMemo(() => {
var n;
return (null == g ? void 0 : g.thumbnail) != null && null !== (n = S.Z.toURLSafe((0, u._W)(t, g.thumbnail, 256))) && void 0 !== n ? n : void 0;
  }, [
t,
null == g ? void 0 : g.thumbnail
  ]), R = l.useMemo(() => {
let n = null == g ? void 0 : g.benefits;
if (null != n && 0 !== n.length)
  return n.map(n => ({
    id: n.id,
    title: n.name,
    description: n.description,
    icon: (0, d.n)(t, n.icon)
  }));
  }, [
t,
null == g ? void 0 : g.benefits
  ]);
  return null == g || null == N || 0 === N.length ? null : (0, i.jsx)(m.A, {
appId: t,
skuId: T,
transitionState: v,
onHeaderTitleClick: null != E ? E : h,
onClose: h,
footer: (0, i.jsx)(I.p, {
  appId: t,
  groupListingId: f,
  groupListingType: _,
  guildId: p,
  skuId: T,
  subPlan: N[0]
}),
children: (0, i.jsx)(x.i, {
  appId: t,
  skuId: T,
  benefits: null != R ? R.map(n => (0, i.jsx)(r.G, {
    name: n.title,
    icon: n.icon,
    description: n.description
  }, n.id)) : void 0,
  description: null !== (e = g.description) && void 0 !== e ? e : void 0,
  imgSrc: L,
  title: N[0].name,
  tag: (0, i.jsx)(o.Z, {
    type: _
  }),
  FallbackIcon: s.BadgeIcon
})
  });
}