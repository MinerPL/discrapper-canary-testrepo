"use strict";
a.r(t), a("47120"), a("653041");
var l = a("735250"),
  n = a("470079"),
  i = a("392711"),
  r = a("98650"),
  s = a("810090"),
  u = a("573233");

function o(e) {
  let {
    setRef: t,
    audioTrackLabel: a,
    src: i,
    muted: r
  } = e, s = n.useCallback(e => {
    t(e, a)
  }, [t, a]), o = n.useCallback(e => {
    Object.values(e.currentTarget.audioTracks).forEach(e => {
      e.enabled = a === e.label
    })
  }, [a]);
  return (0, l.jsx)("audio", {
    id: "ClipsPlayerAudioTrack:".concat(a),
    className: u.hidden,
    ref: s,
    src: i,
    muted: r,
    preload: "auto",
    onLoadedMetadata: o
  })
}
t.default = n.forwardRef(function(e, t) {
  let {
    src: a,
    audioSrc: d,
    applicationAudioEnabled: c,
    voiceAudioEnabled: m,
    isLoading: f,
    onDoneLoading: v,
    startTime: p = 0,
    endTime: h
  } = e, x = n.useRef({}), [C, E] = n.useState([]), g = n.useRef(!1), N = n.useCallback(() => {
    let e = x.current.main;
    if (null == e) return;
    let t = (0, i.round)(e.currentTime, 3),
      a = (0, i.round)(p, 3);
    if (t >= (null != h ? (0, i.round)(h, 3) : (0, i.round)(e.duration, 3)) || t < a) {
      for (let e of Object.values(x.current)) null != e && (e.currentTime = p);
      return !0
    }
  }, [p, h]);
  (0, r.default)(() => {
    g.current && N() && I()
  });
  let I = n.useCallback(() => {
      for (let e of (g.current = !0, N(), Object.values(x.current))) null != e && e.play()
    }, [N]),
    _ = n.useCallback(() => {
      for (let e of Object.values(x.current)) null != e && e.pause()
    }, []),
    L = n.useCallback(e => {
      var t;
      for (let a of ((null === (t = x.current.main) || void 0 === t ? void 0 : t.paused) && (g.current = !1), Object.values(x.current))) null != a && (a.currentTime = e)
    }, []),
    j = n.useCallback(() => {
      var e;
      (null === (e = x.current.main) || void 0 === e ? void 0 : e.paused) ? I(): _()
    }, [I, _]),
    M = n.useCallback(e => {
      x.current.main = e
    }, []),
    S = n.useCallback(e => {
      let t = [];
      for (let a of Object.values(e.currentTarget.audioTracks)) a.label.includes(":application") ? a.enabled = !0 : a.label.includes(":voice") ? (a.enabled = !1, !t.includes(a.label) && t.push(a.label)) : a.enabled = !1;
      E(t)
    }, []),
    T = n.useCallback((e, t) => {
      x.current[t] = e
    }, []);
  return (n.useImperativeHandle(t, () => ({
    play: I,
    seek: L,
    pause: _,
    videoElement: x.current.main
  })), null == a) ? null : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(s.default, {
      onClick: j,
      className: f ? u.hidden : u.displayVideo,
      ref: M,
      src: a,
      muted: !0,
      onLoadedData: v,
      preload: "auto"
    }), (0, l.jsx)("audio", {
      id: "ClipsPlayerAudioTrack:application",
      src: d,
      muted: !c,
      preload: "auto",
      className: u.hidden,
      ref: e => T(e, "application"),
      onLoadedMetadata: S
    }), C.map(e => (0, l.jsx)(o, {
      audioTrackLabel: e,
      setRef: T,
      src: d,
      muted: !m
    }, e))]
  })
})