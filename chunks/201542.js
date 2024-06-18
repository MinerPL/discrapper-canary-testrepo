"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(607070),
  _ = n(62170),
  d = n(715246),
  c = n(80618),
  E = n(786048),
  I = n(897353),
  T = n(585483),
  h = n(70956),
  S = n(36703),
  f = n(347312),
  N = n(981631),
  A = n(689938),
  m = n(750892);
let O = r.lazy(() => Promise.all([n.e("26460"), n.e("89792")]).then(n.bind(n, 711635)));

function R(e) {
  let {
    played: t,
    duration: n,
    currentTime: r
  } = e, s = null == n ? "--:--" : t ? (0, d.yv)(Math.ceil(n - r)) : (0, d.yv)(Math.ceil(n));
  return (0, i.jsx)(l.Text, {
    variant: "text-sm/normal",
    className: m.duration,
    tabularNumbers: !0,
    children: s
  })
}
t.Z = r.memo(function(e) {
  var t, n, s, d, C, p;
  let g, {
      src: L,
      volume: v = 1,
      onVolumeChange: D,
      onMute: M,
      waveform: P,
      durationSecs: y,
      onVolumeShow: U,
      onVolumeHide: b,
      onPlay: G,
      onPause: w,
      onError: k
    } = e,
    B = r.useRef(null),
    [x, V] = r.useState(0),
    [Z, H] = r.useState(y),
    [F, Y] = r.useState(!1),
    [j, W] = r.useState(!1),
    [K, z] = r.useState(!1),
    [q, X] = r.useState(!1),
    [Q, J] = r.useState("none"),
    [$, ee] = r.useState(() => "function" == typeof v ? v() : v),
    et = r.useRef(void 0),
    en = r.useCallback(() => {
      W(e => !e)
    }, []),
    ei = r.useCallback(() => {
      J("metadata")
    }, []),
    er = r.useCallback(e => {
      let t = e.currentTarget.duration;
      if (!isNaN(t)) H(t)
    }, []),
    es = r.useCallback(() => {
      if (W(!1), null == et.current) et.current = setTimeout(() => {
        X(!1), et.current = void 0
      }, 500)
    }, []),
    eo = r.useCallback(() => {
      if (!K) es()
    }, [es, K]),
    ea = r.useCallback(() => {
      let e = B.current;
      if (null == e) return;
      let t = e.error;
      null == k || k(t)
    }, [k]),
    el = r.useCallback(e => {
      let t = (0, S.A)(e, 1);
      Y(0 === t), ee(t), null == D || D(t)
    }, [D]),
    eu = r.useCallback(() => {
      Y(!F), null == M || M(!F)
    }, [F, M]),
    e_ = r.useCallback(() => {
      z(!0)
    }, []),
    ed = r.useCallback(() => {
      z(!1), x === Z && es()
    }, [x, Z, es]),
    ec = r.useCallback(e => {
      let t = B.current;
      if (null == Z || null == t) return;
      let n = e * Z;
      V(n), t.currentTime = n, X(!0), clearTimeout(et.current), et.current = void 0
    }, [Z]);
  r.useEffect(() => {
    !q && j && X(!0)
  }, [j, q]);
  let eE = r.useRef(null);
  r.useEffect(() => {
    if (q || j) {
      if (j) {
        var e, t;
        eE.current = performance.now(), null == G || G(!1, x, (null !== (t = null === (e = B.current) || void 0 === e ? void 0 : e.duration) && void 0 !== t ? t : 0) * h.Z.Millis.SECOND)
      } else {
        let e = performance.now(),
          t = eE.current;
        null == w || w(x, null != t ? (e - t) / 1e3 : 0), eE.current = null
      }
    }
  }, [j]), t = B, n = j, s = V, r.useEffect(() => {
    let e;
    return ! function i() {
      let r = t.current;
      if (null == r) return;
      if (s(r.currentTime), !!n) e = requestAnimationFrame(i)
    }(), () => {
      null != e && cancelAnimationFrame(e)
    }
  }, [t, n, s]), d = L, C = j, p = W, r.useEffect(() => {
    if (!!C) return T.S.dispatch(N.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, {
      src: d
    }), T.S.subscribe(N.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, e), () => {
      T.S.unsubscribe(N.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, e)
    };

    function e(e) {
      let {
        src: t
      } = e;
      if (d !== t) p(!1)
    }
  }, [d, C, p]);
  let eI = j ? E.Z : I.Z,
    eT = j ? A.Z.Messages.PAUSE : A.Z.Messages.PLAY;
  "Safari" === platform.name ? g = (0, i.jsx)(r.Suspense, {
    children: (0, i.jsx)(O, {
      ref: B,
      className: m.audioElement,
      src: L,
      preload: Q,
      playing: j && !K,
      onEnded: eo,
      onLoadedMetadata: er,
      onError: ea,
      muted: F,
      volume: $
    })
  }) : g = (0, i.jsx)(_.Z, {
    ref: B,
    className: m.audioElement,
    controls: !1,
    preload: Q,
    onEnded: eo,
    onLoadedMetadata: er,
    onError: ea,
    muted: F,
    volume: $,
    playing: j && !K,
    children: (0, i.jsx)("source", {
      src: L
    })
  });
  let eh = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
    {
      enabled: eS
    } = (0, l.useRedesignIconContext)();
  return (0, i.jsxs)("div", {
    className: o()(m.container, {
      [m.playing]: j
    }),
    onMouseEnter: ei,
    children: [(0, i.jsx)("div", {
      className: m.rippleContainer,
      children: (0, i.jsx)("div", {
        className: o()(m.ripple, {
          [m.reducedMotion]: eh
        })
      })
    }), (0, i.jsx)(l.Clickable, {
      className: m.playButtonContainer,
      onClick: en,
      "aria-label": eT,
      children: (0, i.jsx)(eI, {
        className: o()(m.playIcon, {
          [m.oldPlayIconSpacing]: !eS && !j
        }),
        width: 18,
        height: 18
      })
    }), (0, i.jsx)(f.Z, {
      className: m.waveform,
      waveform: P,
      currentTime: x,
      duration: null != Z ? Z : 1,
      playing: j,
      played: q,
      onDrag: ec,
      onDragStart: e_,
      onDragEnd: ed
    }), (0, i.jsx)(R, {
      played: q,
      currentTime: x,
      duration: Z
    }), (0, i.jsx)(c.Z, {
      className: m.volumeButton,
      iconClassName: m.volumeButtonIcon,
      sliderWrapperClassName: m.volumeSlider,
      muted: F,
      value: (0, S.P)($, 1),
      minValue: 0,
      maxValue: 1,
      currentWindow: window,
      onValueChange: el,
      onToggleMute: eu,
      onVolumeShow: U,
      onVolumeHide: b
    }), g]
  })
})