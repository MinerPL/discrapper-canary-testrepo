"use strict";
t.d(s, {
  E8: function() {
    return v
  },
  T8: function() {
    return b
  }
});
var n = t(180650),
  a = t(44315),
  i = t(981631),
  l = t(689938),
  r = t(994745),
  o = t(341364),
  c = t(763542),
  u = t(354873),
  d = t(525071),
  C = t(737140),
  E = t(194349),
  f = t(523569),
  m = t(55817),
  p = t(696228),
  g = t(202796),
  h = t(570593),
  x = t(199546),
  _ = t(613540),
  I = t(769411);
let T = () => l.Z.Messages.MOST_POPULAR,
  N = () => l.Z.Messages.APPLICATION_STORE_NEW_RELEASE,
  S = () => l.Z.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
  L = () => l.Z.Messages.TAKE_ME_THERE,
  b = [{
    id: "category_anime",
    backgroundStaticSrc: C,
    backgroundVideoSrc: r,
    overflowSrcStatic: d,
    overflowSrcAnimatedBackground: u,
    overflowSrcAnimated: c,
    logoSrc: o,
    textColor: (0, a.Lq)(i.Ilk.BLACK_500),
    badge: {
      label: T
    },
    cta: {
      label: L,
      categorySkuId: n.T.ANIME_V2
    }
  }, {
    id: "category_galaxy",
    backgroundStaticSrc: I,
    backgroundVideoSrc: x,
    logoSrc: _,
    textColor: (0, a.Lq)(i.Ilk.WHITE_100),
    badge: {
      label: N,
      date: new Date
    },
    cta: {
      label: L,
      categorySkuId: n.T.GALAXY
    }
  }, {
    id: "category_disxcore",
    backgroundStaticSrc: h,
    overflowSrcStatic: g,
    logoSrc: p,
    textColor: (0, a.Lq)(i.Ilk.WHITE_100),
    badge: {
      label: S
    },
    cta: {
      label: L,
      categorySkuId: n.T.DISXCORE
    }
  }, {
    id: "category_cyberpunk",
    backgroundStaticSrc: m,
    backgroundVideoSrc: E,
    logoSrc: f,
    textColor: (0, a.Lq)(i.Ilk.WHITE_100),
    badge: {
      label: T
    },
    cta: {
      label: L,
      categorySkuId: n.T.CYBERPUNK
    }
  }],
  v = (e, s) => {
    let {
      overflowSrcStatic: t,
      overflowSrcAnimated: n,
      overflowSrcAnimatedBackground: a
    } = e;
    return null == t ? [] : s || null == n ? [t] : null == a ? [n] : [a, n]
  }