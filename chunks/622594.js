"use strict";
t(47120);
var l, a, s = t(735250),
  i = t(470079),
  r = t(120356),
  u = t.n(r),
  o = t(259580),
  c = t(70956),
  d = t(586826),
  f = t(174727),
  m = t(882126),
  h = t(943351),
  g = t(997239);
(a = l || (l = {}))[a.START = 0] = "START", a[a.PLAYHEAD = 1] = "PLAYHEAD", a[a.END = 2] = "END", n.Z = i.memo(function(e) {
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
  } = (0, d.p)(), v = null != N, _ = i.useRef(null), D = i.useRef(null), O = i.useRef(null), [x, S] = i.useState(0), [E, y] = i.useState(0), [A, b] = i.useState(0), [M, j] = i.useState(!1), [w, C] = i.useState(!1), [Z, I] = i.useState(!1), [L, U] = i.useState(0), [R, T] = i.useState(-1), P = i.useMemo(() => L / p.fineTuningScale, [p.fineTuningScale, L]);
  i.useEffect(() => {
    if (null == N) return;
    let e = N.duration * c.Z.Millis.SECOND;
    S(0), y(0), b(e), U(e)
  }, [N]);
  let B = i.useCallback((e, n) => {
      if (t(), 0 === e.button) switch (n) {
        case 0:
          j(!0);
          break;
        case 1:
          C(!0);
          break;
        case 2:
          I(!0)
      }
    }, [t]),
    k = i.useCallback(e => {
      switch (e) {
        case 0:
          j(!1);
          break;
        case 1:
          C(!1);
          break;
        case 2:
          I(!1)
      }
      T(-1)
    }, []),
    F = i.useCallback(e => {
      if (null == N || !M) return;
      let n = parseInt(e.target.value),
        t = n > A ? A : n;
      l((0, f.my)(t)), S(t), y(t)
    }, [N, l, A, M]),
    G = i.useCallback(e => {
      if (null == N || !w) return;
      let n = parseInt(e.target.value);
      n < x ? (l((0, f.my)(x)), y(x)) : n > A ? (l((0, f.my)(A)), y(A)) : (l((0, f.my)(n)), y(n))
    }, [N, l, A, w, x]),
    H = i.useCallback(e => {
      if (null == N || !Z) return;
      let n = parseInt(e.target.value),
        t = n > x ? n : x;
      l((0, f.my)(x)), y(x), b(t)
    }, [N, l, Z, x]);
  return i.useEffect(() => {
    null != a && v && a({
      startPositionMs: x,
      endPositionMs: A,
      playheadPositionMs: E
    })
  }, [x, A, a, v, E]), i.useEffect(() => {
    let e;
    if (null != N) return n && (e = setInterval(() => {
      N.currentTime < (0, f.my)(A) ? N.currentTime >= (0, f.my)(E) && y(N.currentTime * c.Z.Millis.SECOND) : (t((0, f.my)(x)), y(x))
    }, 16)), () => {
      clearInterval(e)
    }
  }, [N, A, t, E, n, x]), i.useEffect(() => {
    if (p.fineTuningDelay <= 0) return;
    let e = setTimeout(() => {
      M && x == x && -1 === R ? T(x) : Z && A == A && -1 === R ? T(A) : w && E == E && -1 === R && T(E)
    }, p.fineTuningDelay);
    return () => {
      clearTimeout(e)
    }
  }, [p.fineTuningDelay, Z, A, R, w, E, M, x]), (0, s.jsxs)("div", {
    className: u()(g.timeline, {
      [g.initialized]: v
    }),
    children: [(0, s.jsxs)("div", {
      className: g.rangeHandleContainer,
      children: [(0, s.jsxs)("div", {
        className: g.rangeHandleFrame,
        children: [(0, s.jsx)("input", {
          ref: _,
          className: u()(g.rangeHandle, g.rangeHandleStart),
          type: "range",
          min: (0, f.ao)(R, P, L),
          max: (0, f.MN)(R, P, L),
          value: x,
          onChange: F,
          onMouseDown: e => B(e, 0),
          onMouseUp: () => k(0),
          disabled: !v || r
        }), (0, s.jsx)("input", {
          ref: O,
          className: u()(g.rangeHandle, g.rangeHandleEnd),
          type: "range",
          min: (0, f.ao)(R, P, L),
          max: (0, f.MN)(R, P, L),
          value: A,
          onChange: H,
          onMouseDown: e => B(e, 2),
          onMouseUp: () => k(2),
          disabled: !v || r
        })]
      }), (0, s.jsx)("div", {
        className: g.__invalid_handlePlayheadTrack,
        children: (0, s.jsx)("input", {
          ref: D,
          className: u()(g.rangeHandle, g.rangeHandlePlayhead),
          type: "range",
          min: (0, f.ao)(R, P, L),
          max: (0, f.MN)(R, P, L),
          value: E,
          onChange: G,
          onMouseDown: e => B(e, 1),
          onMouseUp: () => k(1),
          disabled: !v || r
        })
      })]
    }), (0, s.jsxs)("div", {
      className: g.handleContainer,
      children: [(0, s.jsxs)("div", {
        className: u()(g.handleFrame, {
          [g.startDragging]: M,
          [g.endDragging]: Z
        }),
        style: {
          left: "".concat((0, f.pN)(x, R, P, L), "%"),
          right: "".concat((0, f.kD)(A, R, P, L), "%")
        },
        children: [(0, s.jsx)("div", {
          className: u()(g.handleIconFrame, g.handleIconFrameStart),
          children: (0, s.jsx)("div", {
            className: u()(g.handleIconContainer, g.__invalid_start),
            children: (0, s.jsx)(o.Z, {
              direction: o.Z.Directions.RIGHT,
              className: g.handleIcon,
              width: 16,
              height: 16
            })
          })
        }), (0, s.jsx)("div", {
          className: u()(g.handleIconFrame, g.handleIconFrameEnd),
          children: (0, s.jsx)("div", {
            className: u()(g.handleIconContainer, g.__invalid_end),
            children: (0, s.jsx)(o.Z, {
              direction: o.Z.Directions.LEFT,
              className: g.handleIcon,
              width: 16,
              height: 16
            })
          })
        })]
      }), (0, s.jsx)("div", {
        className: g.playheadTrack,
        children: (0, s.jsx)("div", {
          className: u()(g.playhead, {
            [g.dragging]: w || M || Z || n
          }),
          style: {
            left: "".concat((0, f.pN)(E, R, P, L), "%")
          }
        })
      })]
    }), (0, s.jsx)("div", {
      className: g.waveformContainer,
      children: (0, s.jsx)(m.Z, {
        fineTuning: R,
        fineTuningResolution: P,
        duration: L
      })
    })]
  })
})