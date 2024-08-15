x.d(i, {
  B0: function() {
return S;
  },
  ZP: function() {
return T;
  },
  _I: function() {
return v;
  },
  xm: function() {
return g;
  }
});
var k = x(735250),
  r = x(470079),
  s = x(120356),
  t = x.n(s),
  o = x(500923),
  n = x.n(o),
  m = x(442837),
  e = x(481060),
  p = x(607070),
  l = x(367907),
  h = x(626135),
  d = x(768581),
  c = x(956664),
  y = x(45966),
  f = x(819553),
  u = x(487533),
  G = x(279876),
  A = x(180504),
  E = x(614725),
  D = x(535170),
  B = x(981631),
  V = x(689938),
  b = x(185203);

function F(a) {
  let i = (0, m.e7)([p.Z], () => p.Z.useReducedMotion),
x = r.useRef(null);
  return r.useEffect(() => {
let k;
return null != x.current && (k = n().loadAnimation({
  container: x.current,
  renderer: 'svg',
  loop: !0,
  autoplay: !i,
  animationData: JSON.parse(JSON.stringify(a))
})), () => {
  null == k || k.destroy();
};
  }, [
x,
i,
a
  ]), x;
}

function g() {
  let a = F(A);
  return (0, k.jsx)('div', {
className: t()(b.leftArt, b.altFloat),
children: (0, k.jsx)('div', {
  ref: a,
  className: b.grillingIsland
})
  });
}

function S() {
  let a = F(D);
  return (0, k.jsx)('div', {
className: t()(b.rightArt, b.altFloat),
children: (0, k.jsx)('div', {
  ref: a,
  className: b.waffleIsland
})
  });
}

function v(a) {
  let {
guild: i,
mainIslandClassName: x,
balloonDogClassName: s
  } = a, o = (0, m.e7)([p.Z], () => p.Z.useReducedMotion), e = r.useRef(null), l = F(G), h = d.ZP.getGuildIconURL({
id: i.id,
icon: i.icon,
size: 96
  });
  return r.useEffect(() => {
let a;
return null != e.current && null != h ? (0, c.OF)(h).then(i => {
  let x = (0, u.Z)(JSON.parse(JSON.stringify(E)), h, i[0]);
  a = n().loadAnimation({
    container: e.current,
    renderer: 'svg',
    loop: !0,
    autoplay: !o,
    animationData: x
  });
}) : null != e.current && (a = n().loadAnimation({
  container: e.current,
  renderer: 'svg',
  loop: !0,
  autoplay: !o,
  animationData: JSON.parse(JSON.stringify(E))
})), () => {
  null == a || a.destroy();
};
  }, [
h,
e,
o
  ]), (0, k.jsxs)('div', {
className: t()(b.centerArt, b.float),
children: [
  (0, k.jsx)('div', {
    className: t()(b.balloonDog, s),
    ref: l
  }),
  (0, k.jsx)('div', {
    className: t()(b.mainIsland, x),
    ref: e
  })
]
  });
}

function T(a) {
  let {
guild: i,
onStart: x,
onboardingStatus: s,
headerId: t,
disableTracking: o
  } = a, n = (0, m.e7)([y.Z], () => y.Z.isLoading()), p = r.useRef(!1);
  r.useEffect(() => {
if (!o)
  return h.default.track(B.rMx.GUILD_ONBOARDING_STEP_VIEWED, {
    ...(0, l.hH)(i.id),
    step: -1,
    required: !0
  }), () => {
    h.default.track(B.rMx.GUILD_ONBOARDING_STEP_COMPLETED, {
      ...(0, l.hH)(i.id),
      step: -1,
      skipped: !p.current,
      is_final_step: !1,
      in_onboarding: !0
    });
  };
  }, [
i.id,
p,
o
  ]);
  let d = () => {
p.current = !0, x();
  };
  return r.useEffect(() => {
setTimeout(() => {
  d();
}, 3000);
  }, []), (0, k.jsx)(k.Fragment, {
children: (0, k.jsx)('div', {
  className: b.coverContainer,
  children: (0, k.jsxs)('div', {
    className: b.centerContent,
    children: [
      (0, k.jsx)(v, {
        guild: i
      }),
      (0, k.jsxs)('div', {
        className: b.coverContent,
        children: [
          (0, k.jsx)(e.Text, {
            className: b.coverTitle,
            variant: 'text-md/medium',
            color: 'always-white',
            id: t,
            children: V.Z.Messages.WELCOME_CTA_TITLE_MOBILE.format({
              guildName: null == i ? void 0 : i.name
            })
          }),
          n ? (0, k.jsx)(e.Spinner, {
            className: b.__invalid_subtitle
          }) : s === f.uX.NOT_APPLICABLE ? (0, k.jsx)(e.Heading, {
            className: b.__invalid_subtitle,
            variant: 'heading-xl/semibold',
            color: 'always-white',
            children: V.Z.Messages.ONBOARDING_NO_PROMPTS
          }) : (0, k.jsx)(e.Heading, {
            className: b.__invalid_subtitle,
            variant: 'heading-xl/semibold',
            color: 'always-white',
            children: V.Z.Messages.ONBOARDING_COVER_WELCOME_SUBTITLE
          })
        ]
      })
    ]
  })
})
  });
}