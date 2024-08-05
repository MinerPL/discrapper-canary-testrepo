n.d(t, {
  n: function() {
return d;
  }
});
var r = n(442837),
  i = n(210753),
  a = n(594174),
  s = n(81063),
  o = n(162461),
  l = n(26033),
  u = n(561308),
  c = n(701488);

function d(e) {
  var t, n, d, _, E, f, h;
  let p = (0, r.e7)([a.default], () => a.default.getUser(e.author_id)),
{
  activity: m,
  activityApplication: I,
  fallbackApplication: T
} = (0, u.qy)(e),
g = (0, o.wh)('useRichActivityDataForEntry'),
{
  coverImageUrl: S
} = (0, i.$)(null === (t = null != T ? T : I) || void 0 === t ? void 0 : t.id),
A = null !== (E = null === (n = null != T ? T : I) || void 0 === n ? void 0 : n.getIconURL(c.Si.LARGE)) && void 0 !== E ? E : void 0;
  if (!g || null == m)
return {
  isRich: !1,
  richIcon: void 0,
  iconUrl: A,
  iconFallbackUrl: void 0,
  iconTitle: void 0,
  coverImageUrl: S,
  appName: (0, l.dX)(e) ? e.extra.game_name : void 0,
  user: p,
  inExperiment: g,
  activity: void 0,
  state: void 0,
  details: void 0,
  party: void 0
};
  let N = null != I && (null === (d = m.assets) || void 0 === d ? void 0 : d.large_image) != null ? (0, s.getAssetImage)(I.id, m.assets.large_image, [
  c.Si.LARGE,
  c.Si.LARGE
]) : void 0,
v = null !== (f = null === (_ = m.assets) || void 0 === _ ? void 0 : _.large_text) && void 0 !== f ? f : void 0,
O = null !== (h = m.name) && void 0 !== h ? h : 'game_name' in e.extra ? e.extra.game_name : void 0,
R = m.details,
C = m.state,
y = m.party;
  return {
isRich: null != N || null != v || null != R || null != C || null != y,
richIcon: N,
coverImageUrl: S,
iconUrl: null != N ? N : A,
iconFallbackUrl: null != N ? A : void 0,
iconTitle: v,
user: p,
activity: m,
state: C,
details: R,
party: y,
appName: O,
inExperiment: g
  };
}