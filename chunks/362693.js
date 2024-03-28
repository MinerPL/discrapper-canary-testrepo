"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
});
var l = a("735250"),
  n = a("470079"),
  i = a("481060"),
  r = a("673462"),
  s = a("826078"),
  u = a("917042"),
  o = a("20437"),
  d = a("573233");

function c(e) {
  let {
    isLoading: t,
    onDoneLoading: a,
    videoURL: c,
    audioURL: m,
    transitionState: f
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
      let i = (0, u.default)(n.duration, e.shiftKey),
        r = !1;
      switch (e.key) {
        case " ":
          r = !0, n.paused ? l.play() : l.pause();
          break;
        case "ArrowLeft":
          r = !0, l.seek(Math.max(n.currentTime - i, p.start));
          break;
        case "ArrowRight":
          r = !0, l.seek(Math.min(n.currentTime + i, p.end))
      }
      r && (e.stopPropagation(), e.preventDefault())
    }
    return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
  }, [p.start, p.end, v]), (0, l.jsxs)("div", {
    className: d.editorPane,
    children: [(0, l.jsx)("div", {
      className: d.videoSizer,
      children: (0, l.jsx)(r.default, {
        applicationAudioEnabled: h,
        voiceAudioEnabled: x,
        ref: v,
        audioSrc: m,
        src: c,
        isLoading: t,
        onDoneLoading: C,
        startTime: p.start,
        endTime: p.end
      })
    }), !t && f && [i.ModalTransitionState.ENTERED, i.ModalTransitionState.HIDDEN].includes(f) ? (0, l.jsx)(s.default, {
      sourceURL: c
    }) : null]
  })
}