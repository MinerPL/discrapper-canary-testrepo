"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("222007");
var l, a, i = n("37983"),
  s = n("884691"),
  r = n("414456"),
  u = n.n(r),
  o = n("461380"),
  d = n("718517"),
  c = n("129722"),
  f = n("859971"),
  h = n("184692"),
  m = n("89050"),
  g = n("936854");
(a = l || (l = {}))[a.START = 0] = "START", a[a.PLAYHEAD = 1] = "PLAYHEAD", a[a.END = 2] = "END";
var v = s.memo(function(e) {
  let {
    playing: t,
    onPausePlayback: n,
    onPlaybackChange: l,
    onChangePosition: a,
    disabled: r = !1
  } = e, v = {
    ...m.defaultWaveformConfig
  }, {
    audio: S
  } = (0, c.useAudioTrimmerStore)(), E = null != S, p = s.useRef(null), N = s.useRef(null), _ = s.useRef(null), [O, A] = s.useState(0), [D, b] = s.useState(0), [C, x] = s.useState(0), [M, I] = s.useState(!1), [y, T] = s.useState(!1), [R, w] = s.useState(!1), [L, P] = s.useState(0), [U, j] = s.useState(-1), F = s.useMemo(() => L / v.fineTuningScale, [v.fineTuningScale, L]);
  s.useEffect(() => {
    if (null == S) return;
    let e = S.duration * d.default.Millis.SECOND;
    A(0), b(0), x(e), P(e)
  }, [S]);
  let V = s.useCallback((e, t) => {
      if (n(), 0 === e.button) switch (t) {
        case 0:
          I(!0);
          break;
        case 1:
          T(!0);
          break;
        case 2:
          w(!0)
      }
    }, [n]),
    B = s.useCallback(e => {
      switch (e) {
        case 0:
          I(!1);
          break;
        case 1:
          T(!1);
          break;
        case 2:
          w(!1)
      }
      j(-1)
    }, []),
    k = s.useCallback(e => {
      if (null == S || !M) return;
      let t = parseInt(e.target.value),
        n = t > C ? C : t;
      l((0, f.toSeconds)(n)), A(n), b(n)
    }, [S, l, C, M]),
    G = s.useCallback(e => {
      if (null == S || !y) return;
      let t = parseInt(e.target.value);
      t < O ? (l((0, f.toSeconds)(O)), b(O)) : t > C ? (l((0, f.toSeconds)(C)), b(C)) : (l((0, f.toSeconds)(t)), b(t))
    }, [S, l, C, y, O]),
    H = s.useCallback(e => {
      if (null == S || !R) return;
      let t = parseInt(e.target.value),
        n = t > O ? t : O;
      l((0, f.toSeconds)(O)), b(O), x(n)
    }, [S, l, R, O]);
  return s.useEffect(() => {
    null != a && E && a({
      startPositionMs: O,
      endPositionMs: C,
      playheadPositionMs: D
    })
  }, [O, C, a, E, D]), s.useEffect(() => {
    let e;
    if (null != S) return t && (e = setInterval(() => {
      S.currentTime < (0, f.toSeconds)(C) ? S.currentTime >= (0, f.toSeconds)(D) && b(S.currentTime * d.default.Millis.SECOND) : (n((0, f.toSeconds)(O)), b(O))
    }, 16)), () => {
      clearInterval(e)
    }
  }, [S, C, n, D, t, O]), s.useEffect(() => {
    if (v.fineTuningDelay <= 0) return;
    let e = setTimeout(() => {
      M && O == O && -1 === U ? j(O) : R && C == C && -1 === U ? j(C) : y && D == D && -1 === U && j(D)
    }, v.fineTuningDelay);
    return () => {
      clearTimeout(e)
    }
  }, [v.fineTuningDelay, R, C, U, y, D, M, O]), (0, i.jsxs)("div", {
    className: u(g.timeline, {
      [g.initialized]: E
    }),
    children: [(0, i.jsxs)("div", {
      className: g.rangeHandleContainer,
      children: [(0, i.jsxs)("div", {
        className: g.rangeHandleFrame,
        children: [(0, i.jsx)("input", {
          ref: p,
          className: u(g.rangeHandle, g.rangeHandleStart),
          type: "range",
          min: (0, f.getMinValue)(U, F, L),
          max: (0, f.getMaxValue)(U, F, L),
          value: O,
          onChange: k,
          onMouseDown: e => V(e, 0),
          onMouseUp: () => B(0),
          disabled: !E || r
        }), (0, i.jsx)("input", {
          ref: _,
          className: u(g.rangeHandle, g.rangeHandleEnd),
          type: "range",
          min: (0, f.getMinValue)(U, F, L),
          max: (0, f.getMaxValue)(U, F, L),
          value: C,
          onChange: H,
          onMouseDown: e => V(e, 2),
          onMouseUp: () => B(2),
          disabled: !E || r
        })]
      }), (0, i.jsx)("div", {
        className: g.handlePlayheadTrack,
        children: (0, i.jsx)("input", {
          ref: N,
          className: u(g.rangeHandle, g.rangeHandlePlayhead),
          type: "range",
          min: (0, f.getMinValue)(U, F, L),
          max: (0, f.getMaxValue)(U, F, L),
          value: D,
          onChange: G,
          onMouseDown: e => V(e, 1),
          onMouseUp: () => B(1),
          disabled: !E || r
        })
      })]
    }), (0, i.jsxs)("div", {
      className: g.handleContainer,
      children: [(0, i.jsxs)("div", {
        className: u(g.handleFrame, {
          [g.startDragging]: M,
          [g.endDragging]: R
        }),
        style: {
          left: "".concat((0, f.getStartHandleValue)(O, U, F, L), "%"),
          right: "".concat((0, f.getEndHandleValue)(C, U, F, L), "%")
        },
        children: [(0, i.jsx)("div", {
          className: u(g.handleIconFrame, g.handleIconFrameStart),
          children: (0, i.jsx)("div", {
            className: u(g.handleIconContainer, g.start),
            children: (0, i.jsx)(o.default, {
              direction: o.default.Directions.RIGHT,
              className: g.handleIcon,
              width: 16,
              height: 16
            })
          })
        }), (0, i.jsx)("div", {
          className: u(g.handleIconFrame, g.handleIconFrameEnd),
          children: (0, i.jsx)("div", {
            className: u(g.handleIconContainer, g.end),
            children: (0, i.jsx)(o.default, {
              direction: o.default.Directions.LEFT,
              className: g.handleIcon,
              width: 16,
              height: 16
            })
          })
        })]
      }), (0, i.jsx)("div", {
        className: g.playheadTrack,
        children: (0, i.jsx)("div", {
          className: u(g.playhead, {
            [g.dragging]: y || M || R || t
          }),
          style: {
            left: "".concat((0, f.getStartHandleValue)(D, U, F, L), "%")
          }
        })
      })]
    }), (0, i.jsx)("div", {
      className: g.waveformContainer,
      children: (0, i.jsx)(h.default, {
        fineTuning: U,
        fineTuningResolution: F,
        duration: L
      })
    })]
  })
})