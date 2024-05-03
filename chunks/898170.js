"use strict";
n.r(t), n.d(t, {
  QuestBarBackgroundAnimation: function() {
    return S
  }
}), n("47120"), n("724458");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("392711"),
  o = n.n(r),
  u = n("442837"),
  d = n("451478"),
  c = n("301822"),
  f = n("302221"),
  E = n("651596");
let h = [0, .5, 1],
  _ = {
    "layers[1].shapes[1].g.k.k": [0, .522, .278, .776, .5, .522, .278, .776, 1, .522, .278, .776],
    "layers[2].shapes[1].g.k.k": [0, .714, .271, .757, .5, .714, .271, .757, 1, .714, .271, .757]
  };
async function C(e, t) {
  let a = (await n.e("30166").then(n.t.bind(n, "235630", 19))).default;
  return function(e, t, n) {
    for (let a in t) {
      let t = o().get(e, a);
      if (null == t) continue;
      let s = t.map((e, t) => {
        var a;
        return null !== (a = n[t]) && void 0 !== a ? a : e
      });
      o().set(e, a, s)
    }
  }(a, _, t), a
}

function S(e) {
  var t;
  let {
    animationClassName: n,
    className: l,
    quest: r,
    useReducedMotion: o
  } = e, _ = (0, u.useStateFromStores)([d.default], () => d.default.isFocused()), S = s.useRef(null), [m, p] = s.useState(!1), I = s.useMemo(() => {
    if (null == r) return null;
    let e = (0, f.hexToRgb)(r.config.colors.primary),
      t = {
        r: e.r / 255,
        g: e.g / 255,
        b: e.b / 255
      },
      n = h.reduce((e, n) => [...e, n, t.r, t.g, t.b], []);
    return C(r.id, n)
  }, [r]), T = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, g = !o && _;
  s.useEffect(() => {
    var e, t, n, a;
    _ ? g && (null === (a = S.current) || void 0 === a || null === (n = a.animation) || void 0 === n || n.play()) : null === (t = S.current) || void 0 === t || null === (e = t.animation) || void 0 === e || e.goToAndStop(0, !0)
  }, [g, _]);
  let A = s.useCallback(() => {
    p(!0)
  }, []);
  return null == I || T ? (0, a.jsx)("div", {
    className: E.backgroundFallback,
    style: {
      backgroundImage: "linear-gradient(90deg, ".concat(r.config.colors.primary, ", ").concat(r.config.colors.secondary, ")")
    }
  }) : (0, a.jsx)("div", {
    className: i()(E.lottieAnimationBackgroundWrapper, l),
    children: (0, a.jsx)(c.default, {
      ref: S,
      onComplete: A,
      importData: () => I,
      shouldAnimate: !m && g,
      className: i()(E.lottieAnimation, E.lottieAnimationBackground, n),
      loop: 0,
      rendererSettings: {
        preserveAspectRatio: "none"
      }
    }, r.config.colors.primary)
  })
}