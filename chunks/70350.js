"use strict";
n.r(t), n.d(t, {
  QuestsBarBackgroundAnimation: function() {
    return I
  }
}), n("222007"), n("808653");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("917351"),
  o = n.n(r),
  u = n("446674"),
  d = n("471671"),
  c = n("491605"),
  f = n("284679"),
  E = n("335294");
let h = [0, .5, 1],
  _ = {
    "layers[1].shapes[1].g.k.k": [0, .522, .278, .776, .5, .522, .278, .776, 1, .522, .278, .776],
    "layers[2].shapes[1].g.k.k": [0, .714, .271, .757, .5, .714, .271, .757, 1, .714, .271, .757]
  },
  C = new Map;
async function S(e, t) {
  let a = C.get(e);
  if (null != a) return a;
  let s = (await n.el("723469").then(n.t.bind(n, "723469", 19))).default;
  return function(e, t, n) {
    for (let a in t) {
      let s = t[a],
        l = o.get(e, a);
      if (null == l) continue;
      let i = l.map((e, t) => s[t] === e ? n[t] : e);
      o.set(e, a, i)
    }
  }(s, _, t), C.set(e, s), s
}

function I(e) {
  var t;
  let {
    quest: n,
    isExpanded: l,
    isExpansionAnimationComplete: r,
    useReducedMotion: o
  } = e, _ = (0, u.useStateFromStores)([d.default], () => d.default.isFocused()), C = s.useRef(null), [I, m] = s.useState(!1), p = s.useMemo(() => {
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
    m(!0)
  }, []);
  return (0, a.jsx)(a.Fragment, {
    children: null != p && !T && (!l || l && !r) && (0, a.jsx)("div", {
      className: E.lottieAnimationBackgroundWrapper,
      children: (0, a.jsx)(c.default, {
        ref: C,
        onComplete: A,
        importData: () => S(n.id, p),
        shouldAnimate: !I && g,
        className: i(E.lottieAnimation, E.lottieAnimationBackground),
        loop: 0
      })
    })
  })
}