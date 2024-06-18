"use strict";
n.d(t, {
  n: function() {
    return f
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(607070),
  u = n(451478),
  _ = n(119837),
  d = n(802433),
  c = n(658312),
  E = n(729436),
  I = n(710867),
  T = n(312904),
  h = n(186917),
  S = n(935689);
let f = e => {
    let {
      bannerAdjustment: t = 0,
      maxLoops: n,
      resetOnHover: s = !1,
      isHovering: a = !1,
      useOpacityOnHover: l = !0,
      autoPlay: u = !0,
      restartMethod: I,
      urlQueryString: h,
      profileEffectConfig: f,
      noBorderRadius: N = !1,
      introDelay: A = _.lG
    } = e, m = r.useRef(null), [O, R] = r.useState([]);
    (0, T.Z)(f);
    let [C, p] = r.useState(0), [g, L] = r.useState(0), {
      accessibilityLabel: v
    } = f, [D, M] = r.useState(-A), {
      stop: P,
      reset: y,
      ticking: U
    } = (0, c.Z)(e => {
      M(t => t + e)
    });
    r.useEffect(() => {
      M(-A), R((0, E.H)(f.effects))
    }, [f]), r.useEffect(() => {
      let e = 0,
        t = 1 / 0;
      O.forEach(n => {
        let i = n.start + n.duration;
        i > e && (e = i), n.loop && n.start < t && (t = n.start)
      }), p(t), L(e)
    }, [L, O]);
    let [b, G] = r.useState(!1);
    return r.useEffect(() => {
      !0 !== u && !a && (P(), M(0)), !a && b && U.current && (P(), M(0)), s && a && !U.current && (y(), f.animationType === d.Q.PERSISTENT ? M(I === d.j.FromStart ? 0 : C) : M(0))
    }, [a, b, C, s, P, y, U, f.animationType, u, I]), (0, i.jsx)("div", {
      ref: m,
      className: o()(S.profileEffects, {
        [S.hovered]: a && l
      }),
      children: (0, i.jsx)("div", {
        className: N ? S.innerNoRadius : S.inner,
        children: O.map((e, r) => {
          var s, o, a, l, c, E, I, T;
          if (!U.current) {
            if (f.animationType === d.Q.PERSISTENT && null != f.staticFrameSrc && 0 === r && !0 === u) {
              let {
                staticFrameSrc: n
              } = f;
              return (0, i.jsx)("img", {
                className: S.effect,
                style: {
                  top: null !== (c = null === (a = e.position) || void 0 === a ? void 0 : a.y) && void 0 !== c ? c : 0 - t,
                  left: null !== (E = null === (l = e.position) || void 0 === l ? void 0 : l.x) && void 0 !== E ? E : 0
                },
                src: n,
                alt: v
              }, e.src + r)
            }
            return (0, i.jsx)("img", {
              src: _.td,
              alt: v
            }, e.src + r)
          }
          if (D < e.start || !e.loop && D > e.duration + e.start) return (0, i.jsx)("img", {
            src: _.td,
            alt: v
          }, e.src + r);
          if (f.animationType === d.Q.PERSISTENT && !b && null != n && D >= g && G(!0), e.loop && void 0 !== e.loopDelay && e.loopDelay > 0) {
            let t = e.duration + e.loopDelay,
              s = Math.floor((D - e.start) / t);
            if (D - e.start - s * t > e.duration) return f.animationType === d.Q.INTERMITTENT && !b && null != n && s >= n && G(!0), (0, i.jsx)("img", {
              src: _.td,
              alt: v
            }, e.src + r)
          }
          return (0, i.jsx)("img", {
            src: null != h ? "".concat(e.src, "?query=").concat(h) : e.src,
            className: S.effect,
            style: {
              top: (null !== (I = null === (s = e.position) || void 0 === s ? void 0 : s.y) && void 0 !== I ? I : 0) - t,
              left: null !== (T = null === (o = e.position) || void 0 === o ? void 0 : o.x) && void 0 !== T ? T : 0
            },
            alt: v
          }, e.src + r)
        })
      })
    })
  },
  N = e => {
    let {
      config: t,
      useThumbnail: n,
      bannerAdjustment: r = 0,
      noBorderRadius: s,
      isHovering: a = !1,
      useOpacityOnHover: l = !0
    } = e, {
      reducedMotionSrc: u,
      thumbnailPreviewSrc: _,
      accessibilityLabel: d
    } = t;
    return (0, i.jsx)("div", {
      className: o()(S.profileEffects, {
        [S.hovered]: a && l
      }),
      children: (0, i.jsx)("div", {
        className: s ? S.innerNoRadius : S.inner,
        children: (0, i.jsx)("img", {
          src: n && !a ? _ : u,
          className: S.effect,
          style: {
            top: 0 - r
          },
          alt: d
        })
      })
    })
  };
t.Z = e => {
  let t = (0, a.e7)([u.Z], () => u.Z.isFocused()),
    n = (0, a.e7)([l.Z], () => l.Z.useReducedMotion),
    [s, o] = r.useState(!1),
    {
      preset: _
    } = (0, h.Z)(e.profileEffectId, () => o(!1));
  return null != _ && (t || e.shopPreview || _.config.animationType !== d.Q.INTERMITTENT) ? !t && e.shopPreview || !t && _.config.animationType === d.Q.PERSISTENT || n || !1 === e.autoPlay && !1 === e.isHovering ? (0, i.jsx)(N, {
    useThumbnail: e.useThumbnail,
    config: _.config,
    bannerAdjustment: e.bannerAdjustment,
    noBorderRadius: e.noBorderRadius,
    isHovering: e.isHovering,
    useOpacityOnHover: e.useOpacityOnHover
  }) : s ? (0, i.jsx)(f, {
    profileEffectConfig: _.config,
    ...e
  }) : (0, i.jsx)(I.Z, {
    profileEffectConfig: _.config,
    onReady: () => {
      o(!0)
    }
  }) : null
}