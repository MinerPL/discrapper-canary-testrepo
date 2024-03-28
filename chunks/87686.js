"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  u = n("803997"),
  i = n.n(u),
  s = n("481060"),
  r = n("897353"),
  o = n("936908"),
  d = n("70956"),
  c = n("747071"),
  f = n("586826"),
  m = n("622594"),
  h = n("174727"),
  g = n("710111"),
  S = n("742625");
let p = {
  startPositionMs: 0,
  endPositionMs: 10 * d.default.Millis.SECOND * 2,
  playheadPositionMs: 0
};
t.default = l.memo(function(e) {
  var t;
  let {
    className: n,
    volume: u,
    disabled: N = !1,
    onChange: v
  } = e, {
    audio: _
  } = (0, f.useAudioTrimmerStore)(), [D, O] = l.useState(!1), [A, x] = l.useState(p), {
    playheadPositionMs: E,
    endPositionMs: M,
    startPositionMs: C
  } = A, b = null != _, y = M - C, I = y > g.MAX_SOUND_LENGTH_SECONDS * d.default.Millis.SECOND;
  l.useEffect(() => {
    null != _ && x({
      playheadPositionMs: 0,
      endPositionMs: _.duration * d.default.Millis.SECOND,
      startPositionMs: 0
    })
  }, [_]);
  let j = l.useCallback(e => {
      null != _ && (_.pause(), null != e && (_.currentTime = e), O(!1))
    }, [_]),
    U = l.useCallback(() => {
      if (null != _) {
        if (D) {
          j();
          return
        }
        E >= M ? _.currentTime = (0, h.toSeconds)(C) : _.currentTime = (0, h.toSeconds)(E), _.volume = (0, c.default)(u), _.play(), O(!0)
      }
    }, [_, M, j, E, D, C, u]),
    L = l.useCallback(e => {
      x(e), null == v || v({
        startMs: e.startPositionMs,
        endMs: e.endPositionMs
      })
    }, [v]),
    T = l.useCallback(e => {
      null != _ && (_.currentTime = e)
    }, [_]);
  return (0, a.jsxs)("div", {
    className: i()(S.container, {
      [S.initialized]: b,
      [S.disabled]: !b || N
    }, n),
    children: [(0, a.jsxs)("div", {
      className: S.playButtonContainer,
      children: [(0, a.jsx)(s.Clickable, {
        className: S.playButton,
        onClick: b ? U : void 0,
        children: D ? (0, a.jsx)(o.default, {
          className: S.playButtonIcon
        }) : (0, a.jsx)(r.default, {
          className: S.playButtonIcon
        })
      }), (0, a.jsx)("div", {
        className: S.durationContainer,
        children: (0, a.jsx)(s.Text, {
          className: S.__invalid_duration,
          variant: "text-xs/normal",
          color: I ? "text-warning" : "text-positive",
          children: (t = y, "".concat((0, h.toSeconds)(t).toFixed(2), "s"))
        })
      })]
    }), (0, a.jsx)(m.default, {
      playing: D,
      onPlaybackChange: T,
      onPausePlayback: j,
      onChangePosition: L,
      disabled: N
    })]
  })
})