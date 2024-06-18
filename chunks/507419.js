"use strict";
t(47120);
var l = t(735250),
  a = t(470079),
  s = t(481060),
  i = t(897353),
  r = t(936908),
  u = t(22382),
  o = t(747071),
  c = t(586826),
  d = t(174727),
  f = t(990792),
  m = t(689938),
  h = t(330875);
n.Z = a.memo(function(e) {
  let {
    sound: n,
    volume: t,
    disabled: g
  } = e, [p, N] = a.useState(!1), v = a.useRef(null), {
    file: _,
    audio: D,
    loadAudioFromFile: O
  } = (0, c.p)(), x = a.useMemo(() => (0, u.Z)(n.soundId), [n]);
  return a.useEffect(() => {
    null == v.current && (v.current = (0, d.XG)(x, n.name).then(O))
  }, [x, O, n.name]), (0, l.jsxs)("div", {
    className: h.previewContainer,
    children: [(0, l.jsx)(s.Clickable, {
      onClick: g ? void 0 : function() {
        null != D && (D.paused ? (D.volume = (0, o.Z)(t), D.currentTime = 0, D.play(), N(!0), D.addEventListener("ended", () => N(!1), {
          once: !0
        })) : (D.pause(), N(!1)))
      },
      className: h.playButton,
      "aria-label": p ? m.Z.Messages.STOP : m.Z.Messages.PLAY,
      children: p ? (0, l.jsx)(r.Z, {
        className: h.playIcon
      }) : (0, l.jsx)(i.Z, {
        className: h.playIcon
      })
    }), (0, l.jsx)("div", {
      className: h.waveformContainer,
      children: (0, l.jsx)(f.Z, {
        className: h.waveform,
        file: _,
        audio: D
      })
    })]
  })
})