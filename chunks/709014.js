"use strict";
n.d(t, {
  L: function() {
    return I
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(906280),
  l = n.n(a),
  u = n(186325),
  _ = n(390507),
  d = n(679400),
  c = n(580747),
  E = n(108447);
let I = r.forwardRef(function(e, t) {
  let {
    color: s,
    src: a,
    size: I = "md",
    width: T,
    height: h,
    className: S,
    initialAnimation: f,
    markers: N
  } = e, [A, m] = r.useState(null), O = r.useRef(null), R = r.useRef(null), C = r.useRef(null), p = "custom" === I ? {
    width: T,
    height: h
  } : (0, _.m)(I), g = !(0, c.Z)("lottie_hover_multiple_loop"), L = r.useContext(u.S).reducedMotion.enabled, {
    enabled: v
  } = d.Z.useExperiment({
    location: "LottieIcon web entry point"
  }), D = L || !v;
  return r.useImperativeHandle(t, () => ({
    play: e => {
      if (null != C.current) {
        if (R.current = e, D) {
          let t = N[e];
          C.current.resetSegments(!0), C.current.setSegment(t.start + t.duration, t.start + t.duration), C.current.stop()
        } else C.current.setLoop(!g && e.includes("hover")), C.current.resetSegments(!0), C.current.playSegments([N[e].start, N[e].start + N[e].duration], !0)
      }
    },
    stop: () => {
      if (null == C.current || D) return
    },
    stopIfPlaying: e => {
      null != C.current && !D && R.current === e && (C.current.resetSegments(!0), C.current.setSegment(N[e].start, N[e].start), C.current.stop())
    }
  }), [D, g, N]), r.useEffect(() => {
    null == A && a().then(e => m(e.default))
  }, [A, a]), r.useEffect(() => (n.e("23755").then(n.t.bind(n, 500923, 23)).then(e => {
    var t;
    let n, {
        default: i
      } = e,
      r = null !== (t = R.current) && void 0 !== t ? t : f;
    if (null != r && null != N[r]) {
      let e = N[r];
      n = [e.start, e.start + e.duration]
    }
    null != O.current && (C.current = i.loadAnimation({
      container: O.current,
      renderer: "svg",
      loop: !1,
      autoplay: !1,
      animationData: l()(A),
      initialSegment: n
    }))
  }), () => {
    var e;
    null === (e = C.current) || void 0 === e || e.destroy()
  }), [A, f, N]), (0, i.jsx)("div", {
    style: {
      "--__lottieIconColor": null != s && "string" == typeof s ? s : null == s ? void 0 : s.css,
      display: "flex",
      ...p
    },
    className: o()(E.lottieIcon, S),
    ref: O
  })
})