"use strict";
t(47120);
var l = t(735250),
  a = t(470079),
  s = t(120356),
  i = t.n(s),
  r = t(481060),
  u = t(897353),
  o = t(936908),
  c = t(70956),
  d = t(747071),
  f = t(586826),
  m = t(622594),
  h = t(174727),
  g = t(710111),
  p = t(622627);
let N = {
  startPositionMs: 0,
  endPositionMs: 2 * (10 * c.Z.Millis.SECOND),
  playheadPositionMs: 0
};
n.Z = a.memo(function(e) {
  var n;
  let {
    className: t,
    volume: s,
    disabled: v = !1,
    onChange: _
  } = e, {
    audio: D
  } = (0, f.p)(), [O, x] = a.useState(!1), [S, E] = a.useState(N), {
    playheadPositionMs: y,
    endPositionMs: A,
    startPositionMs: b
  } = S, M = null != D, j = A - b, w = j > g.YW * c.Z.Millis.SECOND;
  a.useEffect(() => {
    null != D && E({
      playheadPositionMs: 0,
      endPositionMs: D.duration * c.Z.Millis.SECOND,
      startPositionMs: 0
    })
  }, [D]);
  let C = a.useCallback(e => {
      null != D && (D.pause(), null != e && (D.currentTime = e), x(!1))
    }, [D]),
    Z = a.useCallback(() => {
      if (null != D) {
        if (O) {
          C();
          return
        }
        y >= A ? D.currentTime = (0, h.my)(b) : D.currentTime = (0, h.my)(y), D.volume = (0, d.Z)(s), D.play(), x(!0)
      }
    }, [D, A, C, y, O, b, s]),
    I = a.useCallback(e => {
      E(e), null == _ || _({
        startMs: e.startPositionMs,
        endMs: e.endPositionMs
      })
    }, [_]),
    L = a.useCallback(e => {
      null != D && (D.currentTime = e)
    }, [D]);
  return (0, l.jsxs)("div", {
    className: i()(p.container, {
      [p.initialized]: M,
      [p.disabled]: !M || v
    }, t),
    children: [(0, l.jsxs)("div", {
      className: p.playButtonContainer,
      children: [(0, l.jsx)(r.Clickable, {
        className: p.playButton,
        onClick: M ? Z : void 0,
        children: O ? (0, l.jsx)(o.Z, {
          className: p.playButtonIcon
        }) : (0, l.jsx)(u.Z, {
          className: p.playButtonIcon
        })
      }), (0, l.jsx)("div", {
        className: p.durationContainer,
        children: (0, l.jsx)(r.Text, {
          className: p.__invalid_duration,
          variant: "text-xs/normal",
          color: w ? "text-warning" : "text-positive",
          children: (n = j, "".concat((0, h.my)(n).toFixed(2), "s"))
        })
      })]
    }), (0, l.jsx)(m.Z, {
      playing: O,
      onPlaybackChange: L,
      onPausePlayback: C,
      onChangePosition: I,
      disabled: v
    })]
  })
})