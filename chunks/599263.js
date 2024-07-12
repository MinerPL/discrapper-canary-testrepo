n.r(t), n.d(t, {
  default: function() {
return M;
  }
}), n(47120);
var s = n(735250),
  r = n(470079),
  o = n(120356),
  l = n.n(o),
  i = n(338545),
  a = n(442837),
  d = n(481060),
  c = n(749210),
  u = n(830064),
  m = n(393238),
  p = n(607070),
  h = n(480608),
  g = n(160404),
  x = n(703656),
  f = n(430824),
  _ = n(257915),
  N = n(768581),
  I = n(302221),
  b = n(956664),
  C = n(549817),
  E = n(45966),
  v = n(819553),
  j = n(548473),
  O = n(15320),
  Z = n(973051),
  B = n(981631),
  R = n(689938),
  T = n(423779);
async function D(e) {
  let t = await new Promise((t, n) => {
let s = new Image();
s.crossOrigin = 'Anonymous', s.onerror = e => {
  n(e), s.onerror = s.onload = null, s = null;
}, s.onload = () => {
  t((0, b.XN)(s, 2, 10)), s.onerror = s.onload = null, s = null;
}, s.src = e;
  });
  return null == t ? void 0 : t.map(e => {
let [t, n, s] = e;
return (0, I.vq)(t, n, s);
  });
}

function M(e) {
  let {
guildId: t
  } = e, n = (0, a.e7)([p.Z], () => p.Z.useReducedMotion), {
ref: o,
width: b,
height: M
  } = (0, m.Z)(), [P, k] = r.useState(), S = (0, a.Wu)([E.Z], () => E.Z.getOnboardingPromptsForOnboarding(t)), L = (0, a.e7)([E.Z], () => E.Z.getEnabled(t)), A = r.useCallback((e, n, s) => {
C.Z.selectOption(t, e, n, s);
  }, [t]), w = r.useCallback(() => {
C.Z.completeOnboarding(t, S);
  }, [
t,
S
  ]), F = (0, a.e7)([f.Z], () => f.Z.getGuild(t)), U = r.useMemo(() => null == F ? null : N.ZP.getGuildSplashURL({
id: F.id,
splash: F.splash
  }), [F]), G = (0, a.e7)([v.ZP], () => v.ZP.getCurrentOnboardingStep(t)), [H, y] = r.useState(null != U ? null : 'cover');
  null != U && null == P && D(U).then(e => {
k(e[0]);
  });
  let q = r.useCallback(e => {
  y(G), C.Z.setUserOnboardingStep(t, e);
}, [
  t,
  G
]),
V = (0, a.e7)([g.Z], () => g.Z.isFullServerPreview(t)),
z = (0, a.e7)([v.ZP], () => v.ZP.getOnboardingStatus(t)),
Y = null != S && S.length > 0,
Q = r.useCallback(() => {
  (0, v.kp)(z) && L && Y ? q(0) : w();
}, [
  z,
  L,
  Y,
  q,
  w
]);
  r.useEffect(() => {
if (!v.ZP.shouldShowOnboarding(t))
  return c.Z.escapeToDefaultChannel(t);
(0, h.E)(t);
  }, [t]);
  let W = (0, i.useTransition)(G, {
  config: i.config.default,
  from: {
    scale: 0.8,
    opacity: 0
  },
  enter: {
    scale: 1,
    opacity: 1
  },
  immediate: n || 'cover' !== H && null !== H
}),
X = v.ZP.shouldShowOnboarding(t),
K = null == F;
  if (r.useEffect(() => {
  if (!X || K) {
    let e = setTimeout(() => {
      (0, x.uL)(B.Z5c.CHANNEL(t));
    }, 1000);
    return () => clearTimeout(e);
  }
}, [
  X,
  K,
  t
]), !v.ZP.shouldShowOnboarding(t) || null == F)
return null;
  let J = () => {
switch (G) {
  case 'cover':
    return (0, s.jsx)(j.ZP, {
      guild: F,
      onboardingStatus: v.uX.READY,
      onStart: Q,
      disableTracking: V
    });
  case 'rules':
    return (0, s.jsx)(Z.Z, {
      setCurrentStep: q,
      previousPromptIndex: S.length - 1,
      guild: F,
      prompts: S,
      completeOnboarding: w,
      disableTracking: V
    });
  case null:
    return null;
  default:
    return (0, s.jsx)(O.Z, {
      guild: F,
      prompts: S,
      step: G,
      selectOption: A,
      completeOnboarding: w,
      setCurrentStep: q,
      disableTracking: V
    });
}
  };
  return (0, s.jsxs)('div', {
className: T.main,
ref: o,
children: [
  null != U ? (0, s.jsx)(_.Z, {
    className: l()(T.artwork),
    src: U,
    width: b,
    height: M,
    imageClassName: T.cover
  }) : (0, s.jsx)(u.Z, {
    className: T.artwork,
    preserveAspectRatio: 'xMinYMin slice'
  }),
  null != P && (0, s.jsx)('div', {
    className: T.gradient,
    style: {
      background: 'linear-gradient(180deg, '.concat((0, I.aD)(P, 0.16), ' 0%, ').concat((0, I.aD)(P, 1), ' 100%)')
    }
  }),
  (0, s.jsx)('div', {
    className: T.gradient
  }),
  W((e, t, n) => {
    let {
      key: r
    } = n;
    return (0, s.jsx)(i.animated.div, {
      style: e,
      children: J()
    }, r);
  }),
  'cover' === G && (0, s.jsx)('div', {
    className: T.bottomCenterContent,
    children: (0, s.jsx)(d.Heading, {
      variant: 'heading-sm/normal',
      color: 'header-secondary',
      children: R.Z.Messages.ONBOARDING_COVER_PRIVACY_POLICY.format({
        privacyLink: B.EYA.PRIVACY
      })
    })
  })
]
  });
}