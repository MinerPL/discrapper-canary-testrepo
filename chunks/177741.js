let n;
i.r(t), i.d(t, {
  WowMomentTypes: function() {
return a;
  },
  prefetch: function() {
return C;
  }
}), i(315314), i(610138), i(216116), i(78328), i(815648), i(47120);
var a, o, r = i(735250),
  s = i(470079),
  c = i(120356),
  u = i.n(c),
  d = i(338545),
  m = i(442837),
  l = i(570140),
  p = i(607070),
  M = i(810090),
  w = i(626135),
  _ = i(526167),
  h = i(585483),
  W = i(138464),
  E = i(438820),
  T = i(831474),
  g = i(631274),
  f = i(194077),
  S = i(724688),
  I = i(981631),
  b = i(238115),
  P = i(422138),
  y = i(113386),
  x = i(48547);
async function C(e) {
try {
  l.Z.dispatch({
    type: 'PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA',
    value: !0
  });
  let t = e ? g : P;
  window.matchMedia('(min-width: 1012px) and (max-width: 1980px)').matches || window.matchMedia('(min-height: 720px) and (max-height: 1408px)').matches ? t = e ? f : y : (window.matchMedia('(min-width: 1980px)').matches || window.matchMedia('(min-height: 1408px)').matches) && (t = e ? S : x);
  let i = await fetch(t).then(async e => {
    let t = await e.blob();
    return window.URL.createObjectURL(t);
  });
  l.Z.dispatch({
    type: 'PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS',
    wumpusMedia: i
  });
} catch (e) {
  l.Z.dispatch({
    type: 'PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA',
    value: !1
  });
}
  }
  (o = a || (a = {})).WUMPUS_FLIGHT = 'wumpus_flight', o.GRADIENT_HIGHLIGHT = 'gradient_highlight';
t.default = function() {
  let e = (0, m.e7)([p.Z], () => p.Z.useReducedMotion),
{
  wumpusMedia: t,
  isFetchingMedia: i,
  canPlayWowMoment: a
} = (0, m.cj)([E.Z], () => ({
  wumpusMedia: E.Z.wowMomentWumpusMedia,
  isFetchingMedia: E.Z.isFetchingWowMomentMedia,
  canPlayWowMoment: E.Z.canPlayWowMoment
})),
[o, c] = s.useState(!1),
l = (0, _.vu)(),
g = (0, _.rO)(),
f = l > 52 || -1 === l || g,
S = g ? 'video/mp4' : 'video/webm';
  f && !e && a && null === t && !1 === i && C(g), s.useEffect(() => {
function t() {
  let {
    enabled: t
  } = T.o.getCurrentConfig({
    location: 'PremumSubscriptionWowMoment.tsx'
  });
  t && !e && E.Z.canPlayWowMoment && (c(!0), n = setTimeout(() => {
    c(!1), y(!0), w.default.track(I.rMx.PREMIUM_WOW_MOMENT_VIEWED, {
      wow_moment_type: 'gradient_highlight'
    });
  }, 2000));
}
return h.S.subscribe(I.CkL.PREMIUM_SUBSCRIPTION_CREATED, t), () => {
  h.S.unsubscribe(I.CkL.PREMIUM_SUBSCRIPTION_CREATED, t);
};
  }, [
e,
f
  ]);
  let [P, y] = s.useState(!1), [x, F] = s.useState(!1), U = (0, d.useSpring)({
opacity: P ? 0.2 : 0,
config: {
  duration: 100
},
immediate: e
  }), v = (0, d.useSpring)({
x: x ? '100%' : '-100%',
config: {
  duration: 500
},
immediate: e || !x
  });
  s.useEffect(() => {
let e = -1;
return P && (e = window.setTimeout(() => {
  F(!0);
}, 1000)), () => {
  window.clearTimeout(e);
};
  }, [P]), s.useEffect(() => {
let e = -1;
return x && (e = window.setTimeout(() => {
  F(!1), y(!1);
}, 1000)), () => {
  window.clearTimeout(e);
};
  }, [x]);
  let H = o && null !== t,
N = H || P;
  return (0, r.jsxs)('div', {
className: u()({
  [b.wrapper]: !N,
  [b.activeWrapper]: N
}),
children: [
  H && (0, r.jsx)(M.Z, {
    autoPlay: !0,
    className: b.videoWrapper,
    onPlay: () => {
      clearTimeout(n), w.default.track(I.rMx.PREMIUM_WOW_MOMENT_VIEWED, {
        wow_moment_type: 'wumpus_flight'
      });
    },
    onTimeUpdate: e => {
      e.currentTarget.currentTime > 4 && (0, W.H)(!0);
    },
    onEnded: () => {
      c(!1);
    },
    children: (0, r.jsx)('source', {
      src: t,
      type: S
    })
  }),
  (0, r.jsx)(d.animated.div, {
    className: b.gadientHighlight,
    style: U
  }),
  (0, r.jsx)(d.animated.div, {
    className: b.swipeWrapper,
    style: v,
    children: (0, r.jsxs)('svg', {
      className: b.swipe,
      viewBox: '0 0 848 1024',
      fill: 'none',
      children: [
        (0, r.jsx)('path', {
          d: 'M257.206 1024L0 0H341.333L598.539 1024H257.206Z',
          fill: 'white'
        }),
        (0, r.jsx)('path', {
          d: 'M847.975 1024H690.436L433.231 0H590.769L847.975 1024Z',
          fill: 'white'
        })
      ]
    })
  })
]
  });
};