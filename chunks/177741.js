let n;
i.r(t), i.d(t, {
  WowMomentTypes: function() {
return a;
  },
  prefetch: function() {
return v;
  }
}), i(315314), i(610138), i(216116), i(78328), i(815648), i(47120);
var a, o, r = i(735250),
  s = i(470079),
  c = i(120356),
  u = i.n(c),
  d = i(338545),
  m = i(442837),
  l = i(481060),
  p = i(570140),
  M = i(607070),
  w = i(70097),
  _ = i(626135),
  h = i(526167),
  W = i(585483),
  E = i(138464),
  g = i(438820),
  T = i(831474),
  f = i(631274),
  S = i(194077),
  I = i(724688),
  b = i(981631),
  P = i(238115),
  y = i(422138),
  x = i(113386),
  C = i(48547);
async function v(e) {
try {
  p.Z.dispatch({
    type: 'PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA',
    value: !0
  });
  let t = e ? f : y;
  window.matchMedia('(min-width: 1012px) and (max-width: 1980px)').matches || window.matchMedia('(min-height: 720px) and (max-height: 1408px)').matches ? t = e ? S : x : (window.matchMedia('(min-width: 1980px)').matches || window.matchMedia('(min-height: 1408px)').matches) && (t = e ? I : C);
  let i = await fetch(t).then(async e => {
    let t = await e.blob();
    return window.URL.createObjectURL(t);
  });
  p.Z.dispatch({
    type: 'PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS',
    wumpusMedia: i
  });
} catch (e) {
  p.Z.dispatch({
    type: 'PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA',
    value: !1
  });
}
  }
  (o = a || (a = {})).WUMPUS_FLIGHT = 'wumpus_flight', o.GRADIENT_HIGHLIGHT = 'gradient_highlight';
t.default = function() {
  let e = (0, m.e7)([M.Z], () => M.Z.useReducedMotion),
{
  wumpusMedia: t,
  isFetchingMedia: i,
  canPlayWowMoment: a
} = (0, m.cj)([g.Z], () => ({
  wumpusMedia: g.Z.wowMomentWumpusMedia,
  isFetchingMedia: g.Z.isFetchingWowMomentMedia,
  canPlayWowMoment: g.Z.canPlayWowMoment
})),
[o, c] = s.useState(!1),
p = (0, h.vu)(),
f = (0, h.rO)(),
S = p > 52 || -1 === p || f,
I = f ? 'video/mp4' : 'video/webm';
  S && !e && a && null === t && !1 === i && v(f), s.useEffect(() => {
function t() {
  let {
    enabled: t
  } = T.o.getCurrentConfig({
    location: 'PremumSubscriptionWowMoment.tsx'
  });
  t && !e && g.Z.canPlayWowMoment && (c(!0), n = setTimeout(() => {
    c(!1), x(!0), _.default.track(b.rMx.PREMIUM_WOW_MOMENT_VIEWED, {
      wow_moment_type: 'gradient_highlight'
    });
  }, 2000));
}
return W.S.subscribe(b.CkL.PREMIUM_SUBSCRIPTION_CREATED, t), () => {
  W.S.unsubscribe(b.CkL.PREMIUM_SUBSCRIPTION_CREATED, t);
};
  }, [
e,
S
  ]);
  let [y, x] = s.useState(!1), [C, F] = s.useState(!1), U = (0, l.useSpring)({
opacity: y ? 0.2 : 0,
config: {
  duration: 100
}
  }), H = (0, l.useSpring)({
x: C ? '100%' : '-100%',
config: {
  duration: 500
}
  }, C ? 'respect-motion-settings' : 'animate-never');
  s.useEffect(() => {
let e = -1;
return y && (e = window.setTimeout(() => {
  F(!0);
}, 1000)), () => {
  window.clearTimeout(e);
};
  }, [y]), s.useEffect(() => {
let e = -1;
return C && (e = window.setTimeout(() => {
  F(!1), x(!1);
}, 1000)), () => {
  window.clearTimeout(e);
};
  }, [C]);
  let N = o && null !== t,
O = N || y;
  return (0, r.jsxs)('div', {
className: u()({
  [P.wrapper]: !O,
  [P.activeWrapper]: O
}),
children: [
  N && (0, r.jsx)(w.Z, {
    autoPlay: !0,
    className: P.videoWrapper,
    onPlay: () => {
      clearTimeout(n), _.default.track(b.rMx.PREMIUM_WOW_MOMENT_VIEWED, {
        wow_moment_type: 'wumpus_flight'
      });
    },
    onTimeUpdate: e => {
      e.currentTarget.currentTime > 4 && (0, E.H)(!0);
    },
    onEnded: () => {
      c(!1);
    },
    children: (0, r.jsx)('source', {
      src: t,
      type: I
    })
  }),
  (0, r.jsx)(d.animated.div, {
    className: P.gadientHighlight,
    style: U
  }),
  (0, r.jsx)(d.animated.div, {
    className: P.swipeWrapper,
    style: H,
    children: (0, r.jsxs)('svg', {
      className: P.swipe,
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