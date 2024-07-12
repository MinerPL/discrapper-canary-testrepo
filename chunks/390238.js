n.r(a), n.d(a, {
  default: function() {
return w;
  }
}), n(47120);
var r = n(735250),
  o = n(470079),
  t = n(120356),
  i = n.n(t),
  s = n(887024),
  d = n(442837),
  l = n(481060),
  c = n(607070),
  u = n(530618),
  C = n(810090),
  h = n(272008),
  g = n(497505),
  m = n(918701),
  f = n(566078),
  _ = n(644646),
  x = n(114732),
  p = n(675654),
  j = n(689938),
  b = n(325966);

function v(e) {
  var a;
  let {
transitionState: n,
onClose: t,
quest: C,
location: _,
reward: j
  } = e, v = o.useRef(null), [w, R] = o.useState(null), S = o.useRef(new s.qA()), y = (0, d.e7)([c.Z], () => c.Z.useReducedMotion), A = (0, m.j8)(C), M = (null === (a = C.userStatus) || void 0 === a ? void 0 : a.claimedAt) != null, [T, k] = o.useState(M ? 'claimed' : 'loading');
  o.useEffect(() => {
if (!M) {
  let e = f.r.build(C.config),
    a = e.rewardPlatforms.length > 0 ? e.rewardPlatforms[0] : g.y$.CROSS_PLATFORM;
  (0, h.QB)(C.id, a, _).then(() => k('claimed')).catch(() => k('error'));
}
  }, [
C,
_,
M
  ]);
  let E = 'loading' === T;
  return (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsx)(s.O_, {
    ref: R,
    className: b.confettiCanvas,
    environment: S.current
  }),
  (0, r.jsx)('div', {
    ref: v,
    children: (0, r.jsx)(l.ModalRoot, {
      transitionState: n,
      size: l.ModalSize.DYNAMIC,
      className: i()(b.rootContainer, {
        [b.rootContainerLoading]: E
      }),
      hideShadow: !0,
      children: E ? (0, r.jsx)(l.Spinner, {
        type: l.Spinner.Type.SPINNING_CIRCLE
      }) : 'error' === T ? (0, r.jsx)(x.Z, {
        onClose: t
      }) : (0, r.jsx)(N, {
        quest: C,
        primaryColor: C.config.colors.primary,
        secondaryColor: C.config.colors.secondary,
        rewardName: j.messages.name,
        backgroundUrl: A,
        location: _,
        onClose: t
      })
    })
  }),
  !y && !M && 'claimed' === T && (0, r.jsx)(u.Z, {
    confettiTarget: v.current,
    confettiCanvas: w,
    sprites: p.CA,
    colors: p.Br
  })
]
  });
}

function N(e) {
  let {
quest: a,
rewardName: n,
primaryColor: o,
secondaryColor: t,
backgroundUrl: s,
location: d,
onClose: c
  } = e;
  return (0, r.jsxs)('div', {
className: b.claimedRootContainer,
children: [
  (0, r.jsxs)('div', {
    className: b.headerContainer,
    children: [
      (0, r.jsx)(C.Z, {
        className: b.headerBackground,
        autoPlay: !1,
        loop: !1,
        muted: !0,
        playsInline: !0,
        controls: !1,
        poster: s
      }),
      (0, r.jsxs)('div', {
        className: b.headerForeground,
        children: [
          (0, r.jsx)('div', {
            className: b.previewContainer,
            children: (0, r.jsx)(_.Z, {
              autoplay: !0,
              className: i()(b.rewardTile),
              learnMoreStyle: null,
              quest: a,
              questContent: d
            })
          }),
          (0, r.jsx)(l.ModalCloseButton, {
            className: b.close,
            withCircleBackground: !0,
            onClick: c
          })
        ]
      })
    ]
  }),
  (0, r.jsx)(l.ModalFooter, {
    className: b.footerContainer,
    separator: !1,
    children: (0, r.jsxs)('div', {
      className: b.gradient,
      style: {
        backgroundImage: 'linear-gradient(180deg, '.concat(o, ', ').concat(t, ')')
      },
      children: [
        (0, r.jsx)(l.Heading, {
          variant: 'heading-lg/bold',
          color: 'always-white',
          className: b.heading,
          children: j.Z.Messages.QUESTS_REWARD_AVATAR_DECORATION_HEADER
        }),
        (0, r.jsx)(l.Text, {
          variant: 'text-sm/normal',
          color: 'always-white',
          className: b.text,
          children: j.Z.Messages.QUESTS_REWARD_MODAL_FOOTER_IN_GAME_BODY.format({
            rewardName: n
          })
        })
      ]
    })
  })
]
  });
}

function w(e) {
  let {
quest: a,
location: n,
onClose: t,
transitionState: i
  } = e, s = o.useMemo(() => (0, m.K)(a.config), [a]);
  return null == s ? null : (0, r.jsx)(v, {
onClose: t,
transitionState: i,
quest: a,
location: n,
reward: s
  });
}