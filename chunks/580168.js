"use strict";
n.r(t), n.d(t, {
  QuestsBarBackgroundAnimation: function() {
    return S
  }
}), n("47120"), n("724458");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("392711"),
  o = n.n(r),
  u = n("442837"),
  d = n("451478"),
  c = n("301822"),
  f = n("302221"),
  E = n("311676");
let h = [0, .5, 1],
  _ = {
    "layers[1].shapes[1].g.k.k": [0, .522, .278, .776, .5, .522, .278, .776, 1, .522, .278, .776],
    "layers[2].shapes[1].g.k.k": [0, .714, .271, .757, .5, .714, .271, .757, 1, .714, .271, .757]
  },
  C = new Map;
async function m(e, t) {
  let a = C.get(e);
  if (null != a) return a;
  let s = (await n.e("30166").then(n.t.bind(n, "235630", 19))).default;
  return function(e, t, n) {
    for (let a in t) {
      let s = t[a],
        l = o().get(e, a);
      if (null == l) continue;
      let i = l.map((e, t) => s[t] === e ? n[t] : e);
      o().set(e, a, i)
    }
  }(s, _, t), C.set(e, s), s
}

function S(e) {
  var t;
  let {
    quest: n,
    isExpanded: l,
    isExpansionAnimationComplete: r,
    useReducedMotion: o
  } = e, _ = (0, u.useStateFromStores)([d.default], () => d.default.isFocused()), C = s.useRef(null), [S, I] = s.useState(!1), p = s.useMemo(() => {
    if (null == n) return null;
    let e = (0, f.hexToRgb)(n.config.colors.primary),
      t = {
        r: e.r / 255,
        g: e.g / 255,
        b: e.b / 255
      };
    return h.reduce((e, n) => [...e, n, t.r, t.g, t.b], [])
  }, [n]), T = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, g = !o && _;
  s.useEffect(() => {
    var e, t, n, a;
    _ ? g && (null === (a = C.current) || void 0 === a || null === (n = a.animation) || void 0 === n || n.play()) : null === (t = C.current) || void 0 === t || null === (e = t.animation) || void 0 === e || e.goToAndStop(0, !0)
  }, [g, _]);
  let A = s.useCallback(() => {
    I(!0)
  }, []);
  return (0, a.jsx)(a.Fragment, {
    children: null != p && !T && (!l || l && !r) && (0, a.jsx)("div", {
      className: E.lottieAnimationBackgroundWrapper,
      children: (0, a.jsx)(c.default, {
        ref: C,
        onComplete: A,
        importData: () => m(n.id, p),
        shouldAnimate: !S && g,
        className: i()(E.lottieAnimation, E.lottieAnimationBackground),
        loop: 0
      })
    })
  })
}