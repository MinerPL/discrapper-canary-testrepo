"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  i = n("414456"),
  s = n.n(i),
  r = n("77078"),
  u = n("132755"),
  o = n("78404"),
  d = n("718517"),
  c = n("812809"),
  f = n("129722"),
  h = n("278175"),
  m = n("859971"),
  g = n("846325"),
  v = n("687702");
let S = 10 * d.default.Millis.SECOND,
  E = {
    startPositionMs: 0,
    endPositionMs: 2 * S,
    playheadPositionMs: 0
  };
var p = a.memo(function(e) {
  var t;
  let {
    className: n,
    volume: i,
    disabled: S = !1,
    onChange: p
  } = e, {
    audio: N
  } = (0, f.useAudioTrimmerStore)(), [_, O] = a.useState(!1), [A, D] = a.useState(E), {
    playheadPositionMs: b,
    endPositionMs: C,
    startPositionMs: x
  } = A, M = null != N, I = C - x, y = I > g.MAX_SOUND_LENGTH_SECONDS * d.default.Millis.SECOND;
  a.useEffect(() => {
    null != N && D({
      playheadPositionMs: 0,
      endPositionMs: N.duration * d.default.Millis.SECOND,
      startPositionMs: 0
    })
  }, [N]);
  let T = a.useCallback(e => {
      null != N && (N.pause(), null != e && (N.currentTime = e), O(!1))
    }, [N]),
    R = a.useCallback(() => {
      if (null != N) {
        if (_) {
          T();
          return
        }
        b >= C ? N.currentTime = (0, m.toSeconds)(x) : N.currentTime = (0, m.toSeconds)(b), N.volume = (0, c.default)(i), N.play(), O(!0)
      }
    }, [N, C, T, b, _, x, i]),
    w = a.useCallback(e => {
      D(e), null == p || p({
        startMs: e.startPositionMs,
        endMs: e.endPositionMs
      })
    }, [p]),
    L = a.useCallback(e => {
      null != N && (N.currentTime = e)
    }, [N]);
  return (0, l.jsxs)("div", {
    className: s(v.container, {
      [v.initialized]: M,
      [v.disabled]: !M || S
    }, n),
    children: [(0, l.jsxs)("div", {
      className: v.playButtonContainer,
      children: [(0, l.jsx)(r.Clickable, {
        className: v.playButton,
        onClick: M ? R : void 0,
        children: _ ? (0, l.jsx)(o.default, {
          className: v.playButtonIcon
        }) : (0, l.jsx)(u.default, {
          className: v.playButtonIcon
        })
      }), (0, l.jsx)("div", {
        className: v.durationContainer,
        children: (0, l.jsx)(r.Text, {
          className: v.duration,
          variant: "text-xs/normal",
          color: y ? "text-warning" : "text-positive",
          children: (t = I, "".concat((0, m.toSeconds)(t).toFixed(2), "s"))
        })
      })]
    }), (0, l.jsx)(h.default, {
      playing: _,
      onPlaybackChange: L,
      onPausePlayback: T,
      onChangePosition: w,
      disabled: S
    })]
  })
})