t.d(n, {
  H: function() {
return b;
  },
  o: function() {
return U;
  }
}), t(47120), t(518263), t(970173), t(520712), t(268111), t(941497), t(32026), t(480839), t(744285), t(492257), t(873817), t(863942), t(642549), t(653041), t(724458);
var l = t(735250),
  s = t(470079),
  a = t(120356),
  r = t.n(a),
  i = t(788900),
  o = t(268146),
  c = t(442837),
  u = t(141038),
  d = t(846519),
  m = t(481060),
  E = t(224706),
  _ = t(600164),
  S = t(152708),
  g = t(594190),
  C = t(569984),
  h = t(918701),
  Z = t(977156),
  N = t(28798),
  I = t(131951),
  x = t(449224),
  f = t(358085),
  R = t(463727),
  A = t(855403),
  T = t(989941),
  v = t(958707),
  L = t(133179),
  p = t(46140),
  M = t(65154),
  O = t(689938),
  j = t(511923);
async function P() {
  let e = I.Z.getVideoDevices(),
n = (0, u.Z)(I.Z.getMediaEngine(), [
  o.vA.WINDOW,
  o.vA.SCREEN
], {
  width: 176,
  height: 99
}),
t = D(),
l = await t,
s = await n,
a = s.filter(e => e.id.startsWith(o.vA.SCREEN)),
r = function(e, n) {
  let t = {};
  return n.forEach(e => {
    t[e.id] = e;
  }), e.forEach(e => {
    t[e.id] = e;
  }), Object.values(t);
}(s.filter(e => e.id.startsWith(o.vA.WINDOW)), l),
c = [
  'GQgGHISKZ5aYqYeYhX9isDUHGw',
  'bAgKFITWhoVvmHVRuokCdjVQaA',
  'XAgGDIJ/ipadd3iCiYUcWpCZBA',
  'HRkGDIT5aXRneomGdlvUawB7qA',
  'I9gNDISmlqqPmHiKd3isTp/5lg',
  'XxgGBIIwT2ZGpneUeZev6fWLXQ',
  'KzsKNIZDeYmfd3ihe1bXfr8Jxg',
  'J9cRDIJ6iHd/d4h4eIUJf5LyRw',
  'DggKFIQwtndKe3hVfXnAWQmddQ',
  'WggKDILeh3ePZpd6l4jln1b5SQ',
  '4PgJJIJVl3eAaod2iJeHj7tE8Q'
];
  return {
windowSources: r,
screenSources: a,
cameraSources: Object.entries(e).filter(e => {
  let [n, t] = e;
  return !t.disabled;
}).map((e, n) => {
  let [t, l] = e, s = c[n % c.length], a = Uint8Array.from(atob(s), e => e.charCodeAt(0)), r = (0, i.xS)(a);
  return {
    id: 'camera:' + l.id,
    name: l.name,
    url: r
  };
})
  };
}
async function D() {
  let e = g.ZP.getRunningGames();
  return (await Promise.all(e.map(async e => {
let n;
if (null == e.name)
  return null;
try {
  n = await E.Z.identifyGame(e.pid, e.name);
} catch (e) {
  return null;
}
let t = e.windowHandle,
  l = e.name,
  s = n.icon;
return null != t && null != l && null != s ? {
  id: 'window:'.concat(t),
  name: l,
  url: 'data:image/bmp;base64,'.concat(s)
} : null;
  }))).filter(e => null !== e);
}

function G(e) {
  let n = (0, f.isWindows)() ? (0, T.Z)(g.ZP, x.Z) : null,
t = g.ZP.getRunningGames();
  return null != n && (0, A.Z)(e.id, n.windowHandle) ? 2 : null != t.find(n => (0, A.Z)(e.id, n.windowHandle)) ? 1 : 0;
}

function U(e) {
  let {
selectedSource: n,
onChangeSelectedSource: t
  } = e, {
enableGoLiveCaptureCard: a
  } = R.Z.useExperiment({
location: 'GoLive_Source_Select'
  }), i = I.Z.supports(M.AN.GO_LIVE_HARDWARE), [u, E] = s.useState(null), [x, f] = s.useState(null), [T, D] = s.useState(null), U = null != T && T.length > 0, [b, w] = s.useState(o.vA.WINDOW), [k, B] = s.useState(!1), V = s.useRef(null), y = s.useRef(new d.Xp()), W = (0, c.e7)([g.ZP], () => g.ZP.getRunningGames()), H = function(e, n, t) {
let l = (0, Z.Zy)({
  location: p.dr.STREAM_SOURCE_SELECT
});
return s.useMemo(() => {
  if (null == t || !l)
    return null;
  for (let l of t) {
    var s, a;
    let t = n.find(e => (0, A.Z)(l.id, e.windowHandle));
    if ((null == t ? void 0 : t.id) == null)
      continue;
    let r = (0, h.lQ)(e, t.id);
    if (null != r && (null === (s = r.userStatus) || void 0 === s ? void 0 : s.enrolledAt) != null && (null === (a = r.userStatus) || void 0 === a ? void 0 : a.completedAt) == null)
      return {
        source: l,
        quest: r
      };
  }
  return null;
}, [
  l,
  e,
  n,
  t
]);
  }((0, c.e7)([C.Z], () => C.Z.quests), W, x), F = s.useMemo(() => null == x ? null : [...x].sort((e, n) => (null == H ? void 0 : H.source.id) === e.id ? -1 : (null == H ? void 0 : H.source.id) === n.id ? 1 : G(n) - G(e)), [
H,
x
  ]);
  s.useEffect(() => {
let e = y.current;
return P().then(e => {
  let {
    screenSources: n,
    windowSources: t,
    cameraSources: l
  } = e;
  E(n), f(t), D(l);
}), e.start(1000, async () => {
  let {
    screenSources: e,
    windowSources: n,
    cameraSources: t
  } = await P();
  E(e), f(n), D(t);
}), () => {
  e.stop();
};
  }, []);
  let z = s.useCallback(e => {
  null !== e && (V.current = e, B(!e.isScrolledToTop()));
}, []),
K = function(e) {
  switch (e) {
    case o.vA.WINDOW:
      return F;
    case o.vA.SCREEN:
      return u;
    case o.vA.CAMERA:
      return T;
  }
}(b);
  if (null == K)
return (0, l.jsx)(_.Z, {
  className: j.spinner,
  justify: _.Z.Justify.CENTER,
  align: _.Z.Align.CENTER,
  children: (0, l.jsx)(m.Spinner, {})
});
  let Y = K.map(e => {
let {
  id: s
} = e, a = (null == n ? void 0 : n.id) === s;
return (0, l.jsx)(m.Clickable, {
  className: r()(j.tile, {
    [j.selected]: a
  }),
  onClick: () => t(e, null),
  children: (0, l.jsx)(L.Z, {
    source: e,
    selectedSource: n
  }, e.id)
}, s);
  });

  function J() {
let e = V.current;
null != e && B(!e.isScrolledToTop());
  }
  return (0, l.jsxs)(s.Fragment, {
children: [
  (0, l.jsxs)('div', {
    className: j.segmentContainer,
    children: [
      (0, l.jsx)(v.Z, {
        separator: k
      }),
      (0, l.jsx)(m.SegmentedControl, {
        options: function() {
          let e = [{
              name: O.Z.Messages.GO_LIVE_MODAL_APPLICATIONS,
              value: o.vA.WINDOW
            },
            {
              name: O.Z.Messages.GO_LIVE_MODAL_SCREENS,
              value: o.vA.SCREEN
            }
          ];
          return a && i && U && e.push({
            name: O.Z.Messages.GO_LIVE_MODAL_CAPTURE,
            value: o.vA.CAMERA
          }), e;
        }(),
        value: b,
        onChange: e => {
          let {
            value: n
          } = e;
          return w(n);
        },
        className: j.segmentControl,
        optionClassName: j.segmentControlOption
      })
    ]
  }),
  b === o.vA.CAMERA ? (0, l.jsx)('div', {
    className: j.sourceContainer,
    children: (0, l.jsx)(m.AdvancedScroller, {
      ref: z,
      className: j.sourceScroller,
      onScroll: J,
      children: (0, l.jsx)(S.Z, {
        layout: S.Z.Layout.WRAP,
        columns: 2,
        className: j.sourceContainer,
        children: Y
      })
    })
  }) : (0, l.jsxs)(m.AdvancedScroller, {
    ref: z,
    className: j.sourceScroller,
    onScroll: J,
    children: [
      b === o.vA.WINDOW && null != H && (0, l.jsx)(N.Z, {
        quest: H.quest
      }),
      (0, l.jsx)(S.Z, {
        layout: S.Z.Layout.WRAP,
        columns: 2,
        className: j.sourceContainer,
        children: Y
      })
    ]
  })
]
  });
}

function b(e) {
  let {
onSourceSelect: n
  } = e, t = s.useMemo(() => ({
'prepicked:window': O.Z.Messages.GO_LIVE_MODAL_WINDOW,
'prepicked:screen': O.Z.Messages.GO_LIVE_MODAL_SCREEN
  }), []), [a, r] = s.useState([]), [i, o] = s.useState(t), c = s.useRef(new d.Xp());
  s.useEffect(() => {
let e = c.current,
  n = () => {
    let e = Object.entries(I.Z.getVideoDevices()).filter(e => {
      let [n, t] = e;
      return !t.disabled;
    });
    r(e), o({
      ...t,
      ...e.reduce((e, n) => {
        let [t, l] = n;
        return {
          ...e,
          ['camera:' + t]: l.name
        };
      }, {})
    });
  };
return n(), e.start(1000, n), () => {
  e.stop();
};
  }, [t]);
  let u = s.useRef({}),
E = s.useCallback(e => {
  var t;
  let {
    value: l
  } = e;
  n({
    id: l,
    name: null !== (t = i[l]) && void 0 !== t ? t : '',
    url: ''
  });
}, [
  n,
  i
]);
  return u.current = {
'prepicked:window': O.Z.Messages.GO_LIVE_MODAL_WINDOW,
'prepicked:screen': O.Z.Messages.GO_LIVE_MODAL_SCREEN,
...a
  }, (0, l.jsxs)('div', {
children: [
  (0, l.jsx)(m.RadioGroup, {
    className: j.nativePickerContainer,
    onChange: E,
    options: [{
        name: O.Z.Messages.GO_LIVE_MODAL_WINDOW,
        value: 'prepicked:window'
      },
      {
        name: O.Z.Messages.GO_LIVE_MODAL_SCREEN,
        value: 'prepicked:screen'
      }
    ]
  }),
  0 === a.length ? null : (0, l.jsxs)('div', {
    children: [
      (0, l.jsx)(m.Text, {
        className: j.nativePickerLabel,
        variant: 'text-sm/bold',
        color: 'interactive-normal',
        children: O.Z.Messages.GO_LIVE_MODAL_CAPTURE
      }),
      (0, l.jsx)(m.RadioGroup, {
        className: j.nativePickerContainer,
        onChange: E,
        options: a.map(e => {
          let [n, t] = e;
          return {
            name: t.name,
            value: 'camera:' + t.id
          };
        })
      })
    ]
  })
]
  });
}