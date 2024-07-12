n.d(t, {
  n: function() {
return I;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(442837),
  l = n(607070),
  u = n(451478),
  c = n(119837),
  d = n(802433),
  _ = n(658312),
  E = n(729436),
  f = n(710867),
  h = n(312904),
  p = n(186917),
  m = n(453925);
let I = e => {
let {
  bannerAdjustment: t = 0,
  maxLoops: n,
  resetOnHover: a = !1,
  isHovering: s = !1,
  useOpacityOnHover: l = !0,
  autoPlay: u = !0,
  restartMethod: f,
  urlQueryString: p,
  profileEffectConfig: I,
  noBorderRadius: T = !1,
  introDelay: g = c.lG
} = e, S = i.useRef(null), [A, N] = i.useState([]);
(0, h.Z)(I);
let [v, O] = i.useState(0), [R, C] = i.useState(0), {
  accessibilityLabel: y
} = I, [D, L] = i.useState(-g), {
  stop: b,
  reset: M,
  ticking: P
} = (0, _.Z)(e => {
  L(t => t + e);
});
i.useEffect(() => {
  L(-g), N((0, E.H)(I.effects));
}, [I]), i.useEffect(() => {
  let e = 0,
    t = 1 / 0;
  A.forEach(n => {
    let r = n.start + n.duration;
    r > e && (e = r), n.loop && n.start < t && (t = n.start);
  }), O(t), C(e);
}, [
  C,
  A
]);
let [U, w] = i.useState(!1);
return i.useEffect(() => {
  !0 !== u && !s && (b(), L(0)), !s && U && P.current && (b(), L(0)), a && s && !P.current && (M(), I.animationType === d.Q.PERSISTENT ? L(f === d.j.FromStart ? 0 : v) : L(0));
}, [
  s,
  U,
  v,
  a,
  b,
  M,
  P,
  I.animationType,
  u,
  f
]), (0, r.jsx)('div', {
  ref: S,
  className: o()(m.profileEffects, {
    [m.hovered]: s && l
  }),
  children: (0, r.jsx)('div', {
    className: T ? m.innerNoRadius : m.inner,
    children: A.map((e, i) => {
      var a, o, s, l, _, E, f, h;
      if (!P.current) {
        if (I.animationType === d.Q.PERSISTENT && null != I.staticFrameSrc && 0 === i && !0 === u) {
          let {
            staticFrameSrc: n
          } = I;
          return (0, r.jsx)('img', {
            className: m.effect,
            style: {
              top: null !== (_ = null === (s = e.position) || void 0 === s ? void 0 : s.y) && void 0 !== _ ? _ : 0 - t,
              left: null !== (E = null === (l = e.position) || void 0 === l ? void 0 : l.x) && void 0 !== E ? E : 0
            },
            src: n,
            alt: y
          }, e.src + i);
        }
        return (0, r.jsx)('img', {
          src: c.td,
          alt: y
        }, e.src + i);
      }
      if (D < e.start || !e.loop && D > e.duration + e.start)
        return (0, r.jsx)('img', {
          src: c.td,
          alt: y
        }, e.src + i);
      if (I.animationType === d.Q.PERSISTENT && !U && null != n && D >= R && w(!0), e.loop && void 0 !== e.loopDelay && e.loopDelay > 0) {
        let t = e.duration + e.loopDelay,
          a = Math.floor((D - e.start) / t);
        if (D - e.start - a * t > e.duration)
          return I.animationType === d.Q.INTERMITTENT && !U && null != n && a >= n && w(!0), (0, r.jsx)('img', {
            src: c.td,
            alt: y
          }, e.src + i);
      }
      return (0, r.jsx)('img', {
        src: null != p ? ''.concat(e.src, '?query=').concat(p) : e.src,
        className: m.effect,
        style: {
          top: (null !== (f = null === (a = e.position) || void 0 === a ? void 0 : a.y) && void 0 !== f ? f : 0) - t,
          left: null !== (h = null === (o = e.position) || void 0 === o ? void 0 : o.x) && void 0 !== h ? h : 0
        },
        alt: y
      }, e.src + i);
    })
  })
});
  },
  T = e => {
let {
  config: t,
  useThumbnail: n,
  bannerAdjustment: i = 0,
  noBorderRadius: a,
  isHovering: s = !1,
  useOpacityOnHover: l = !0
} = e, {
  reducedMotionSrc: u,
  thumbnailPreviewSrc: c,
  accessibilityLabel: d
} = t;
return (0, r.jsx)('div', {
  className: o()(m.profileEffects, {
    [m.hovered]: s && l
  }),
  children: (0, r.jsx)('div', {
    className: a ? m.innerNoRadius : m.inner,
    children: (0, r.jsx)('img', {
      src: n && !s ? c : u,
      className: m.effect,
      style: {
        top: 0 - i
      },
      alt: d
    })
  })
});
  };
t.Z = e => {
  let t = (0, s.e7)([u.Z], () => u.Z.isFocused()),
n = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
[a, o] = i.useState(!1),
{
  preset: c
} = (0, p.Z)(e.profileEffectId, () => o(!1));
  return null != c && (t || e.shopPreview || c.config.animationType !== d.Q.INTERMITTENT) ? !t && e.shopPreview || !t && c.config.animationType === d.Q.PERSISTENT || n || !1 === e.autoPlay && !1 === e.isHovering ? (0, r.jsx)(T, {
useThumbnail: e.useThumbnail,
config: c.config,
bannerAdjustment: e.bannerAdjustment,
noBorderRadius: e.noBorderRadius,
isHovering: e.isHovering,
useOpacityOnHover: e.useOpacityOnHover
  }) : a ? (0, r.jsx)(I, {
profileEffectConfig: c.config,
...e
  }) : (0, r.jsx)(f.Z, {
profileEffectConfig: c.config,
onReady: () => {
  o(!0);
}
  }) : null;
};