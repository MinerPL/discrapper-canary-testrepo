"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
});
var l = a("37983"),
  n = a("884691"),
  r = a("77078"),
  i = a("5431"),
  s = a("464135"),
  u = a("28388"),
  o = a("141210"),
  d = a("204839");

function c(e) {
  let {
    isLoading: t,
    onDoneLoading: a,
    videoURL: c,
    audioURL: f,
    transitionState: m
  } = e, {
    videoPlayerRef: v,
    cropData: p,
    applicationAudioEnabled: h,
    voiceAudioEnabled: x
  } = (0, o.useEditModalContext)(), C = n.useCallback(() => {
    var e;
    null === (e = v.current) || void 0 === e || e.seek(p.start), a()
  }, [a, p.start]);
  return n.useEffect(() => {
    function e(e) {
      var t, a;
      if ((null === (t = document.activeElement) || void 0 === t ? void 0 : t.tagName) === "INPUT") return;
      let l = v.current;
      if (null == l) return;
      let n = null === (a = v.current) || void 0 === a ? void 0 : a.videoElement;
      if (null == n) return;
      let r = (0, u.default)(n.duration, e.shiftKey),
        i = !1;
      switch (e.key) {
        case " ":
          i = !0, n.paused ? l.play() : l.pause();
          break;
        case "ArrowLeft":
          i = !0, l.seek(Math.max(n.currentTime - r, p.start));
          break;
        case "ArrowRight":
          i = !0, l.seek(Math.min(n.currentTime + r, p.end))
      }
      i && (e.stopPropagation(), e.preventDefault())
    }
    return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
  }, [p.start, p.end, v]), (0, l.jsxs)("div", {
    className: d.editorPane,
    children: [(0, l.jsx)("div", {
      className: d.videoSizer,
      children: (0, l.jsx)(i.default, {
        applicationAudioEnabled: h,
        voiceAudioEnabled: x,
        ref: v,
        audioSrc: f,
        src: c,
        isLoading: t,
        onDoneLoading: C,
        startTime: p.start,
        endTime: p.end
      })
    }), !t && m && [r.ModalTransitionState.ENTERED, r.ModalTransitionState.HIDDEN].includes(m) ? (0, l.jsx)(s.default, {
      sourceURL: c
    }) : null]
  })
}