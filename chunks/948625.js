n.d(t, {
  E8: function() {
return A;
  },
  yc: function() {
return P;
  }
});
var s = n(180650),
  r = n(44315),
  a = n(981631),
  o = n(689938),
  i = n(994745),
  c = n(341364),
  l = n(763542),
  d = n(354873),
  u = n(525071),
  f = n(737140),
  p = n(194349),
  g = n(523569),
  C = n(55817),
  _ = n(696228),
  m = n(202796),
  b = n(570593),
  h = n(199546),
  x = n(613540),
  E = n(769411),
  I = n(125257),
  v = n(6412),
  L = n(238286);
let S = () => o.Z.Messages.LIMITED_TIME,
  T = () => o.Z.Messages.MOST_POPULAR,
  N = () => o.Z.Messages.APPLICATION_STORE_NEW_RELEASE,
  O = () => o.Z.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
  k = () => o.Z.Messages.TAKE_ME_THERE,
  j = [{
  id: 'category_tide',
  backgroundStaticSrc: L,
  overflowSrcStatic: v,
  logoSrc: I,
  textColor: (0, r.Lq)(a.Ilk.WHITE_100),
  badge: {
    label: S
  },
  cta: {
    label: k,
    categorySkuId: s.T.TIDE
  }
},
{
  id: 'category_anime',
  backgroundStaticSrc: f,
  backgroundVideoSrc: i,
  overflowSrcStatic: u,
  overflowSrcAnimatedBackground: d,
  overflowSrcAnimated: l,
  logoSrc: c,
  textColor: (0, r.Lq)(a.Ilk.BLACK_500),
  badge: {
    label: T
  },
  cta: {
    label: k,
    categorySkuId: s.T.ANIME_V2
  }
},
{
  id: 'category_galaxy',
  backgroundStaticSrc: E,
  backgroundVideoSrc: h,
  logoSrc: x,
  textColor: (0, r.Lq)(a.Ilk.WHITE_100),
  badge: {
    label: N
  },
  cta: {
    label: k,
    categorySkuId: s.T.GALAXY
  }
},
{
  id: 'category_disxcore',
  backgroundStaticSrc: b,
  overflowSrcStatic: m,
  logoSrc: _,
  textColor: (0, r.Lq)(a.Ilk.WHITE_100),
  badge: {
    label: O
  },
  cta: {
    label: k,
    categorySkuId: s.T.DISXCORE
  }
},
{
  id: 'category_cyberpunk',
  backgroundStaticSrc: C,
  backgroundVideoSrc: p,
  logoSrc: g,
  textColor: (0, r.Lq)(a.Ilk.WHITE_100),
  badge: {
    label: T
  },
  cta: {
    label: k,
    categorySkuId: s.T.CYBERPUNK
  }
}
  ],
  P = e => j.filter(t => {
var n;
let s = null === (n = t.cta) || void 0 === n ? void 0 : n.categorySkuId;
return null == s || null != e[s];
  }),
  A = (e, t) => {
let {
  overflowSrcStatic: n,
  overflowSrcAnimated: s,
  overflowSrcAnimatedBackground: r
} = e;
return null == n ? [] : t || null == s ? [n] : null == r ? [s] : [
  r,
  s
];
  };