"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  u = n("481060"),
  i = n("897353"),
  s = n("936908"),
  r = n("22382"),
  o = n("747071"),
  d = n("586826"),
  c = n("174727"),
  f = n("990792"),
  m = n("689938"),
  h = n("935003");
t.default = l.memo(function(e) {
  let {
    sound: t,
    volume: n,
    disabled: g
  } = e, [S, p] = l.useState(!1), N = l.useRef(null), {
    file: v,
    audio: _,
    loadAudioFromFile: D
  } = (0, d.useAudioTrimmerStore)(), O = l.useMemo(() => (0, r.default)(t.soundId), [t]);
  return l.useEffect(() => {
    null == N.current && (N.current = (0, c.loadAudioFileFromUrl)(O, t.name).then(D))
  }, [O, D, t.name]), (0, a.jsxs)("div", {
    className: h.previewContainer,
    children: [(0, a.jsx)(u.Clickable, {
      onClick: g ? void 0 : function() {
        null != _ && (_.paused ? (_.volume = (0, o.default)(n), _.currentTime = 0, _.play(), p(!0), _.addEventListener("ended", () => p(!1), {
          once: !0
        })) : (_.pause(), p(!1)))
      },
      className: h.playButton,
      "aria-label": S ? m.default.Messages.STOP : m.default.Messages.PLAY,
      children: S ? (0, a.jsx)(s.default, {
        className: h.playIcon
      }) : (0, a.jsx)(i.default, {
        className: h.playIcon
      })
    }), (0, a.jsx)("div", {
      className: h.waveformContainer,
      children: (0, a.jsx)(f.default, {
        className: h.waveform,
        file: v,
        audio: _
      })
    })]
  })
})