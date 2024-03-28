"use strict";
n.r(t), n("47120");
var a, l, u = n("735250"),
  i = n("470079"),
  s = n("803997"),
  r = n.n(s),
  o = n("259580"),
  d = n("70956"),
  c = n("586826"),
  f = n("174727"),
  m = n("882126"),
  h = n("943351"),
  g = n("551641");
(l = a || (a = {}))[l.START = 0] = "START", l[l.PLAYHEAD = 1] = "PLAYHEAD", l[l.END = 2] = "END", t.default = i.memo(function(e) {
  let {
    playing: t,
    onPausePlayback: n,
    onPlaybackChange: a,
    onChangePosition: l,
    disabled: s = !1
  } = e, S = {
    ...h.defaultWaveformConfig
  }, {
    audio: p
  } = (0, c.useAudioTrimmerStore)(), N = null != p, v = i.useRef(null), _ = i.useRef(null), D = i.useRef(null), [O, A] = i.useState(0), [x, E] = i.useState(0), [M, C] = i.useState(0), [b, y] = i.useState(!1), [I, j] = i.useState(!1), [U, L] = i.useState(!1), [T, w] = i.useState(0), [R, P] = i.useState(-1), F = i.useMemo(() => T / S.fineTuningScale, [S.fineTuningScale, T]);
  i.useEffect(() => {
    if (null == p) return;
    let e = p.duration * d.default.Millis.SECOND;
    A(0), E(0), C(e), w(e)
  }, [p]);
  let B = i.useCallback((e, t) => {
      if (n(), 0 === e.button) switch (t) {
        case 0:
          y(!0);
          break;
        case 1:
          j(!0);
          break;
        case 2:
          L(!0)
      }
    }, [n]),
    k = i.useCallback(e => {
      switch (e) {
        case 0:
          y(!1);
          break;
        case 1:
          j(!1);
          break;
        case 2:
          L(!1)
      }
      P(-1)
    }, []),
    V = i.useCallback(e => {
      if (null == p || !b) return;
      let t = parseInt(e.target.value),
        n = t > M ? M : t;
      a((0, f.toSeconds)(n)), A(n), E(n)
    }, [p, a, M, b]),
    H = i.useCallback(e => {
      if (null == p || !I) return;
      let t = parseInt(e.target.value);
      t < O ? (a((0, f.toSeconds)(O)), E(O)) : t > M ? (a((0, f.toSeconds)(M)), E(M)) : (a((0, f.toSeconds)(t)), E(t))
    }, [p, a, M, I, O]),
    G = i.useCallback(e => {
      if (null == p || !U) return;
      let t = parseInt(e.target.value),
        n = t > O ? t : O;
      a((0, f.toSeconds)(O)), E(O), C(n)
    }, [p, a, U, O]);
  return i.useEffect(() => {
    null != l && N && l({
      startPositionMs: O,
      endPositionMs: M,
      playheadPositionMs: x
    })
  }, [O, M, l, N, x]), i.useEffect(() => {
    let e;
    if (null != p) return t && (e = setInterval(() => {
      p.currentTime < (0, f.toSeconds)(M) ? p.currentTime >= (0, f.toSeconds)(x) && E(p.currentTime * d.default.Millis.SECOND) : (n((0, f.toSeconds)(O)), E(O))
    }, 16)), () => {
      clearInterval(e)
    }
  }, [p, M, n, x, t, O]), i.useEffect(() => {
    if (S.fineTuningDelay <= 0) return;
    let e = setTimeout(() => {
      b && O == O && -1 === R ? P(O) : U && M == M && -1 === R ? P(M) : I && x == x && -1 === R && P(x)
    }, S.fineTuningDelay);
    return () => {
      clearTimeout(e)
    }
  }, [S.fineTuningDelay, U, M, R, I, x, b, O]), (0, u.jsxs)("div", {
    className: r()(g.timeline, {
      [g.initialized]: N
    }),
    children: [(0, u.jsxs)("div", {
      className: g.rangeHandleContainer,
      children: [(0, u.jsxs)("div", {
        className: g.rangeHandleFrame,
        children: [(0, u.jsx)("input", {
          ref: v,
          className: r()(g.rangeHandle, g.rangeHandleStart),
          type: "range",
          min: (0, f.getMinValue)(R, F, T),
          max: (0, f.getMaxValue)(R, F, T),
          value: O,
          onChange: V,
          onMouseDown: e => B(e, 0),
          onMouseUp: () => k(0),
          disabled: !N || s
        }), (0, u.jsx)("input", {
          ref: D,
          className: r()(g.rangeHandle, g.rangeHandleEnd),
          type: "range",
          min: (0, f.getMinValue)(R, F, T),
          max: (0, f.getMaxValue)(R, F, T),
          value: M,
          onChange: G,
          onMouseDown: e => B(e, 2),
          onMouseUp: () => k(2),
          disabled: !N || s
        })]
      }), (0, u.jsx)("div", {
        className: g.__invalid_handlePlayheadTrack,
        children: (0, u.jsx)("input", {
          ref: _,
          className: r()(g.rangeHandle, g.rangeHandlePlayhead),
          type: "range",
          min: (0, f.getMinValue)(R, F, T),
          max: (0, f.getMaxValue)(R, F, T),
          value: x,
          onChange: H,
          onMouseDown: e => B(e, 1),
          onMouseUp: () => k(1),
          disabled: !N || s
        })
      })]
    }), (0, u.jsxs)("div", {
      className: g.handleContainer,
      children: [(0, u.jsxs)("div", {
        className: r()(g.handleFrame, {
          [g.startDragging]: b,
          [g.endDragging]: U
        }),
        style: {
          left: "".concat((0, f.getStartHandleValue)(O, R, F, T), "%"),
          right: "".concat((0, f.getEndHandleValue)(M, R, F, T), "%")
        },
        children: [(0, u.jsx)("div", {
          className: r()(g.handleIconFrame, g.handleIconFrameStart),
          children: (0, u.jsx)("div", {
            className: r()(g.handleIconContainer, g.__invalid_start),
            children: (0, u.jsx)(o.default, {
              direction: o.default.Directions.RIGHT,
              className: g.handleIcon,
              width: 16,
              height: 16
            })
          })
        }), (0, u.jsx)("div", {
          className: r()(g.handleIconFrame, g.handleIconFrameEnd),
          children: (0, u.jsx)("div", {
            className: r()(g.handleIconContainer, g.__invalid_end),
            children: (0, u.jsx)(o.default, {
              direction: o.default.Directions.LEFT,
              className: g.handleIcon,
              width: 16,
              height: 16
            })
          })
        })]
      }), (0, u.jsx)("div", {
        className: g.playheadTrack,
        children: (0, u.jsx)("div", {
          className: r()(g.playhead, {
            [g.dragging]: I || b || U || t
          }),
          style: {
            left: "".concat((0, f.getStartHandleValue)(x, R, F, T), "%")
          }
        })
      })]
    }), (0, u.jsx)("div", {
      className: g.waveformContainer,
      children: (0, u.jsx)(m.default, {
        fineTuning: R,
        fineTuningResolution: F,
        duration: T
      })
    })]
  })
})