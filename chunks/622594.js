t(47120);
var l, a, i = t(735250),
  s = t(470079),
  r = t(120356),
  u = t.n(r),
  o = t(259580),
  c = t(70956),
  d = t(586826),
  f = t(174727),
  m = t(882126),
  h = t(943351),
  g = t(921112);
(a = l || (l = {}))[a.START = 0] = 'START', a[a.PLAYHEAD = 1] = 'PLAYHEAD', a[a.END = 2] = 'END', n.Z = s.memo(function(e) {
  let {
playing: n,
onPausePlayback: t,
onPlaybackChange: l,
onChangePosition: a,
disabled: r = !1
  } = e, p = {
...h.nl
  }, {
audio: N
  } = (0, d.p)(), _ = null != N, v = s.useRef(null), D = s.useRef(null), O = s.useRef(null), [S, x] = s.useState(0), [y, E] = s.useState(0), [A, b] = s.useState(0), [M, C] = s.useState(!1), [j, I] = s.useState(!1), [w, U] = s.useState(!1), [L, Z] = s.useState(0), [R, P] = s.useState(-1), T = s.useMemo(() => L / p.fineTuningScale, [
p.fineTuningScale,
L
  ]);
  s.useEffect(() => {
if (null == N)
  return;
let e = N.duration * c.Z.Millis.SECOND;
x(0), E(0), b(e), Z(e);
  }, [N]);
  let B = s.useCallback((e, n) => {
  if (t(), 0 === e.button)
    switch (n) {
      case 0:
        C(!0);
        break;
      case 1:
        I(!0);
        break;
      case 2:
        U(!0);
    }
}, [t]),
k = s.useCallback(e => {
  switch (e) {
    case 0:
      C(!1);
      break;
    case 1:
      I(!1);
      break;
    case 2:
      U(!1);
  }
  P(-1);
}, []),
F = s.useCallback(e => {
  if (null == N || !M)
    return;
  let n = parseInt(e.target.value),
    t = n > A ? A : n;
  l((0, f.my)(t)), x(t), E(t);
}, [
  N,
  l,
  A,
  M
]),
G = s.useCallback(e => {
  if (null == N || !j)
    return;
  let n = parseInt(e.target.value);
  n < S ? (l((0, f.my)(S)), E(S)) : n > A ? (l((0, f.my)(A)), E(A)) : (l((0, f.my)(n)), E(n));
}, [
  N,
  l,
  A,
  j,
  S
]),
H = s.useCallback(e => {
  if (null == N || !w)
    return;
  let n = parseInt(e.target.value),
    t = n > S ? n : S;
  l((0, f.my)(S)), E(S), b(t);
}, [
  N,
  l,
  w,
  S
]);
  return s.useEffect(() => {
null != a && _ && a({
  startPositionMs: S,
  endPositionMs: A,
  playheadPositionMs: y
});
  }, [
S,
A,
a,
_,
y
  ]), s.useEffect(() => {
let e;
if (null != N)
  return n && (e = setInterval(() => {
    N.currentTime < (0, f.my)(A) ? N.currentTime >= (0, f.my)(y) && E(N.currentTime * c.Z.Millis.SECOND) : (t((0, f.my)(S)), E(S));
  }, 16)), () => {
    clearInterval(e);
  };
  }, [
N,
A,
t,
y,
n,
S
  ]), s.useEffect(() => {
if (p.fineTuningDelay <= 0)
  return;
let e = setTimeout(() => {
  M && S == S && -1 === R ? P(S) : w && A == A && -1 === R ? P(A) : j && y == y && -1 === R && P(y);
}, p.fineTuningDelay);
return () => {
  clearTimeout(e);
};
  }, [
p.fineTuningDelay,
w,
A,
R,
j,
y,
M,
S
  ]), (0, i.jsxs)('div', {
className: u()(g.timeline, {
  [g.initialized]: _
}),
children: [
  (0, i.jsxs)('div', {
    className: g.rangeHandleContainer,
    children: [
      (0, i.jsxs)('div', {
        className: g.rangeHandleFrame,
        children: [
          (0, i.jsx)('input', {
            ref: v,
            className: u()(g.rangeHandle, g.rangeHandleStart),
            type: 'range',
            min: (0, f.ao)(R, T, L),
            max: (0, f.MN)(R, T, L),
            value: S,
            onChange: F,
            onMouseDown: e => B(e, 0),
            onMouseUp: () => k(0),
            disabled: !_ || r
          }),
          (0, i.jsx)('input', {
            ref: O,
            className: u()(g.rangeHandle, g.rangeHandleEnd),
            type: 'range',
            min: (0, f.ao)(R, T, L),
            max: (0, f.MN)(R, T, L),
            value: A,
            onChange: H,
            onMouseDown: e => B(e, 2),
            onMouseUp: () => k(2),
            disabled: !_ || r
          })
        ]
      }),
      (0, i.jsx)('div', {
        className: g.__invalid_handlePlayheadTrack,
        children: (0, i.jsx)('input', {
          ref: D,
          className: u()(g.rangeHandle, g.rangeHandlePlayhead),
          type: 'range',
          min: (0, f.ao)(R, T, L),
          max: (0, f.MN)(R, T, L),
          value: y,
          onChange: G,
          onMouseDown: e => B(e, 1),
          onMouseUp: () => k(1),
          disabled: !_ || r
        })
      })
    ]
  }),
  (0, i.jsxs)('div', {
    className: g.handleContainer,
    children: [
      (0, i.jsxs)('div', {
        className: u()(g.handleFrame, {
          [g.startDragging]: M,
          [g.endDragging]: w
        }),
        style: {
          left: ''.concat((0, f.pN)(S, R, T, L), '%'),
          right: ''.concat((0, f.kD)(A, R, T, L), '%')
        },
        children: [
          (0, i.jsx)('div', {
            className: u()(g.handleIconFrame, g.handleIconFrameStart),
            children: (0, i.jsx)('div', {
              className: u()(g.handleIconContainer, g.__invalid_start),
              children: (0, i.jsx)(o.Z, {
                direction: o.Z.Directions.RIGHT,
                className: g.handleIcon,
                width: 16,
                height: 16
              })
            })
          }),
          (0, i.jsx)('div', {
            className: u()(g.handleIconFrame, g.handleIconFrameEnd),
            children: (0, i.jsx)('div', {
              className: u()(g.handleIconContainer, g.__invalid_end),
              children: (0, i.jsx)(o.Z, {
                direction: o.Z.Directions.LEFT,
                className: g.handleIcon,
                width: 16,
                height: 16
              })
            })
          })
        ]
      }),
      (0, i.jsx)('div', {
        className: g.playheadTrack,
        children: (0, i.jsx)('div', {
          className: u()(g.playhead, {
            [g.dragging]: j || M || w || n
          }),
          style: {
            left: ''.concat((0, f.pN)(y, R, T, L), '%')
          }
        })
      })
    ]
  }),
  (0, i.jsx)('div', {
    className: g.waveformContainer,
    children: (0, i.jsx)(m.Z, {
      fineTuning: R,
      fineTuningResolution: T,
      duration: L
    })
  })
]
  });
});