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
  var t, n, d, _, E, f, h, p, m, I, T, g, S;
  let A = (0, r.e7)([a.default], () => a.default.getUser(e.author_id)),
{
  activity: N,
  activityApplication: v,
  fallbackApplication: O
} = (0, u.qy)(e),
R = (0, o.wh)('useRichActivityDataForEntry'),
{
  coverImageUrl: C
} = (0, i.$)(null === (t = null != O ? O : v) || void 0 === t ? void 0 : t.id),
y = null !== (f = null === (n = null != O ? O : v) || void 0 === n ? void 0 : n.getIconURL(c.Si.LARGE)) && void 0 !== f ? f : void 0;
  if (!R || null == N)
return {
  isRich: !1,
  richIcon: void 0,
  iconUrl: y,
  iconFallbackUrl: void 0,
  iconTitle: void 0,
  coverImageUrl: C,
  appName: (0, l.dX)(e) ? e.extra.game_name : void 0,
  user: A,
  inExperiment: R,
  activity: void 0,
  state: void 0,
  details: void 0,
  party: void 0
};
  let D = null !== (h = null === (d = N.assets) || void 0 === d ? void 0 : d.large_image) && void 0 !== h ? h : null === (_ = N.assets) || void 0 === _ ? void 0 : _.small_image,
L = null != v && null != D ? (0, s.getAssetImage)(v.id, D, [
  c.Si.LARGE,
  c.Si.LARGE
]) : void 0;
  let b = null === (E = (null === (I = (m = N).assets) || void 0 === I ? void 0 : I.large_image) != null ? null === (g = m.assets) || void 0 === g ? void 0 : g.large_text : (null === (T = m.assets) || void 0 === T ? void 0 : T.small_image) != null ? null === (S = m.assets) || void 0 === S ? void 0 : S.small_text : void 0) || void 0 === E ? void 0 : E.trim(),
M = null !== (p = N.name) && void 0 !== p ? p : 'game_name' in e.extra ? e.extra.game_name : void 0,
P = N.details,
U = N.state,
w = N.party;
  return {
isRich: null != L || null != b || null != P || null != U || null != w,
richIcon: L,
coverImageUrl: C,
iconUrl: null != L ? L : y,
iconFallbackUrl: null != L ? y : void 0,
iconTitle: b,
user: A,
activity: N,
state: U,
details: P,
party: w,
appName: M,
inExperiment: R
  };
}