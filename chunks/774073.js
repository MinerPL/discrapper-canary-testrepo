n.d(t, {
  W1: function() {
return m;
  },
  z6: function() {
return I;
  }
}), n(653041);
var r, i, a = n(470079),
  o = n(512722),
  s = n.n(o),
  l = n(683076),
  u = n(442837),
  c = n(224706),
  d = n(669764),
  _ = n(626135),
  E = n(539746),
  f = n(981631);
(i = r || (r = {})).NoMatch = 'no match', i.NSFW = 'nsfw', i.NoSummary = 'no summary', i.NoReleaseDate = 'no release date', i.NoCoverImage = 'no cover image';
let h = function(e, t) {
let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
  r = arguments.length > 3 ? arguments[3] : void 0;
_.default.track(f.rMx.GAME_PROFILE_ENTRY_POINT_AVAILABLE, {
  game_profile_available: e,
  application_id: t,
  rejection_reason: n,
  source: r
});
  },
  p = e => {
let t = [];
return null == e ? ['no match'] : (e.themes.includes(l.i.EROTIC) && t.push('nsfw'), (null == e.summary || 0 === e.summary.length) && t.push('no summary'), (null == e.summary || 0 === e.summary.length) && t.push('no summary'), (null == e.coverImageUrl || 0 === e.coverImageUrl.length) && t.push('no cover image'), t);
  },
  m = e => 0 === p(e).length,
  I = e => 0 === p(d.Z.getGame(e)).length;
t.ZP = e => {
  let {
location: t,
applicationId: n = '',
autoTrackExposure: r = !0,
source: i,
trackEntryPointImpression: o = !0
  } = e, l = (0, E.x)(t, r);
  a.useEffect(() => {
l && null != n && '' !== n && c.Z.getDetectableGamesSupplemental([n]);
  }, [
n,
l
  ]);
  let _ = (0, u.e7)([d.Z], () => d.Z.getGame(n)),
f = a.useMemo(() => null != _ && m(_), [_]);
  return l && o && !1 === d.Z.isFetching(n) && (s()(null != i, 'Cannot track a Game Profile Entry Point Impressions without a source.'), h(f, n, p(_), i)), {
shouldOpenGameProfile: l && f,
applicationId: n
  };
};