"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  i = n("77078"),
  s = n("132755"),
  r = n("78404"),
  u = n("520497"),
  o = n("812809"),
  d = n("129722"),
  c = n("859971"),
  f = n("477633"),
  h = n("782340"),
  m = n("610078"),
  g = a.memo(function(e) {
    let {
      sound: t,
      volume: n,
      disabled: g
    } = e, [v, S] = a.useState(!1), E = a.useRef(null), {
      file: p,
      audio: N,
      loadAudioFromFile: _
    } = (0, d.useAudioTrimmerStore)(), O = a.useMemo(() => (0, u.default)(t.soundId), [t]);
    return a.useEffect(() => {
      null == E.current && (E.current = (0, c.loadAudioFileFromUrl)(O, t.name).then(_))
    }, [O, _, t.name]), (0, l.jsxs)("div", {
      className: m.previewContainer,
      children: [(0, l.jsx)(i.Clickable, {
        onClick: g ? void 0 : function() {
          null != N && (N.paused ? (N.volume = (0, o.default)(n), N.currentTime = 0, N.play(), S(!0), N.addEventListener("ended", () => S(!1), {
            once: !0
          })) : (N.pause(), S(!1)))
        },
        className: m.playButton,
        "aria-label": v ? h.default.Messages.STOP : h.default.Messages.PLAY,
        children: v ? (0, l.jsx)(r.default, {
          className: m.playIcon
        }) : (0, l.jsx)(s.default, {
          className: m.playIcon
        })
      }), (0, l.jsx)("div", {
        className: m.waveformContainer,
        children: (0, l.jsx)(f.default, {
          className: m.waveform,
          file: p,
          audio: N
        })
      })]
    })
  })