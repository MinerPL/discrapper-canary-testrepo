t.r(n), t(47120), t(653041);
var o = t(735250),
  r = t(470079),
  a = t(338545),
  i = t(481060),
  s = t(442837),
  l = t(607070),
  c = t(963202),
  u = t(863249),
  d = t(944163),
  m = t(246364),
  f = t(983736),
  p = t(937111),
  h = t(200305),
  _ = t(271383),
  x = t(594174),
  b = t(153124),
  C = t(231467),
  I = t(981631),
  N = t(308083),
  E = t(689938),
  g = t(928779);
let v = {
mass: 1,
tension: 600,
friction: 60
  },
  R = [{
  position: 0,
  alpha: 0
},
{
  position: 0.19,
  alpha: 0.262
},
{
  position: 0.34,
  alpha: 0.459
},
{
  position: 0.47,
  alpha: 0.618
},
{
  position: 0.57,
  alpha: 0.722
},
{
  position: 0.65,
  alpha: 0.806
},
{
  position: 0.73,
  alpha: 0.874
},
{
  position: 0.8,
  alpha: 0.925
},
{
  position: 0.86,
  alpha: 0.958
},
{
  position: 0.91,
  alpha: 0.979
},
{
  position: 0.95,
  alpha: 0.992
},
{
  position: 0.98,
  alpha: 0.998
},
{
  position: 1,
  alpha: 1
}
  ];

function T(e) {
  let {
children: n,
containerRef: t,
faderSize: a,
faderEdgeThreshold: s
  } = e, l = r.useRef(null), [c, u] = r.useState(0), [d, m] = r.useState(0), [f, p] = r.useState(0), h = r.useCallback(() => {
null != l.current && (u(l.current.getDistanceFromTop()), m(l.current.getDistanceFromBottom()), p(l.current.getScrollerState().offsetHeight));
  }, []);
  r.useEffect(() => {
if (h(), null == t.current)
  return;
let e = new ResizeObserver(() => {
  h();
});
return e.observe(t.current), () => {
  e.disconnect();
};
  }, [
l,
t,
h
  ]);
  let _ = r.useMemo(() => {
if (0 === c && 0 === d)
  return {};
let e = [];
if (e.push('to bottom'), c > 0) {
  let n = s > 0 ? 1 - Math.min(s, c) / s : 1;
  for (let t = 0; t < R.length; t++) {
    let {
      position: o,
      alpha: r
    } = R[t], i = (o * a).toFixed(2);
    e.push('hsla(0, 0%, 0%, '.concat(n + r * (1 - n), ') ').concat(i, 'px'));
  }
}
if (d > 0) {
  let n = f - a,
    t = s > 0 ? 1 - Math.min(s, d) / s : 1;
  for (let o = R.length - 1; o >= 0; o--) {
    let {
      position: r,
      alpha: i
    } = R[o], s = (n + (1 - r) * a).toFixed(2);
    e.push('hsla(0, 0%, 0%, '.concat(t + i * (1 - t), ') ').concat(s, 'px'));
  }
}
return {
  maskImage: 'linear-gradient('.concat(e.join(','), ')')
};
  }, [
d,
c,
s,
a,
f
  ]);
  return (0, o.jsx)(i.AdvancedScrollerNone, {
ref: l,
style: _,
className: g.scroller,
onScroll: h,
children: n
  });
}

function j(e) {
  let {
guildId: n,
formState: t,
updateFormState: r
  } = e;
  return (0, o.jsxs)('div', {
className: g.verificationForm,
children: [
  (0, o.jsx)(i.Heading, {
    variant: 'heading-xxl/normal',
    color: 'header-primary',
    children: E.Z.Messages.CLAN_DISCOVERY_PROFILE_TITLE
  }),
  (0, o.jsx)(i.Text, {
    variant: 'text-md/normal',
    color: 'header-secondary',
    children: E.Z.Messages.CLAN_DISCOVERY_PROFILE_SUBTITLE
  }),
  (0, o.jsx)(h.Y, {
    guildId: n,
    formState: t,
    updateFormState: r
  })
]
  });
}
n.default = function(e) {
  var n, t, h, R;
  let {
clan: y,
prioritizedGameIds: F,
transitionState: B,
onClose: S
  } = e, A = (0, b.Dt)(), M = (0, s.e7)([d.Z], () => d.Z.get(y.id)), [O, P] = r.useState(null !== (h = null == M ? void 0 : M.formFields) && void 0 !== h ? h : []), k = (0, s.e7)([x.default], () => x.default.getCurrentUser()), q = (0, s.e7)([_.ZP], () => _.ZP.isMember(y.id, null == k ? void 0 : k.id), [
y,
k
  ]), L = (0, s.e7)([p.Z], () => {
var e;
return (null === (e = p.Z.getRequest(y.id)) || void 0 === e ? void 0 : e.applicationStatus) === m.wB.SUBMITTED;
  }), D = null == k ? void 0 : k.verified, Z = null == k ? void 0 : k.isPhoneVerified(), [w, H] = r.useState(''), {
enableApplication: V
  } = (0, c.Fg)('discovery');
  r.useEffect(() => {
u.Z.fetchVerificationForm(y.id);
  }, [y.id]), r.useEffect(() => {
null != M && P(M.formFields);
  }, [M]);
  let Y = r.useCallback(async e => {
  await u.Z.submitVerificationForm(y.id, e);
}, [y.id]),
U = r.useCallback(async () => {
  try {
    await Y({
      ...null != M ? M : d.t,
      formFields: O
    }), S();
  } catch (e) {
    H(null == e ? void 0 : e.message);
  }
}, [
  Y,
  S,
  M,
  O
]),
z = !((null == M ? void 0 : null === (n = M.guild) || void 0 === n ? void 0 : n.verification_level) === I.sFg.VERY_HIGH ? Z : D || Z) || O.some(e => !(0, f.OA)(e)),
G = (null !== (R = null == M ? void 0 : null === (t = M.guild) || void 0 === t ? void 0 : t.approximate_member_count) && void 0 !== R ? R : 0) >= N.Du,
K = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
Q = (0, i.useSpring)({
  from: {
    opacity: 0,
    transform: 'translateY('.concat(K ? 0 : 40, 'px)')
  },
  to: {
    opacity: 1,
    transform: 'translateY(0px)'
  },
  config: v,
  delay: 500
}, 'animate-always'),
W = r.useRef(null);
  return (0, o.jsxs)(i.ModalRoot, {
transitionState: B,
'aria-labelledby': A,
size: i.ModalSize.DYNAMIC,
className: g.container,
hideShadow: !0,
children: [
  (0, o.jsxs)(a.animated.div, {
    className: g.body,
    style: Q,
    children: [
      (0, o.jsx)('div', {
        className: g.applicationContainer,
        ref: W,
        children: (0, o.jsx)(T, {
          containerRef: W,
          faderSize: 180,
          faderEdgeThreshold: 48,
          children: (0, o.jsx)(j, {
            guildId: y.id,
            formState: O,
            updateFormState: P
          })
        })
      }),
      (0, o.jsx)('div', {
        className: g.verticalRule
      }),
      (0, o.jsxs)('div', {
        className: g.clanContainer,
        children: [
          (0, o.jsx)(C.xV, {
            clan: y,
            className: g.profileCard,
            prioritizedGameIds: F,
            expanded: !0,
            isMember: q,
            hasPendingJoinRequest: L,
            atMaxMemberCapacity: G
          }),
          (0, o.jsx)(i.Tooltip, {
            text: E.Z.Messages.CLAN_DISCOVERY_APPLICATION_DISABLED_TOOLTIP,
            shouldShow: !V,
            children: e => (0, o.jsxs)('div', {
              className: g.applyButtonContainer,
              children: [
                (0, o.jsxs)(i.Button, {
                  ...e,
                  type: 'submit',
                  onClick: U,
                  fullWidth: !0,
                  disabled: z || !V || null == M,
                  innerClassName: g.applyButtonInner,
                  children: [
                    G && (0, o.jsx)(i.WarningIcon, {
                      size: 'custom',
                      color: 'white',
                      width: 20,
                      height: 20
                    }),
                    E.Z.Messages.APPLY
                  ]
                }),
                '' !== w && (0, o.jsx)(i.Text, {
                  variant: 'text-sm/normal',
                  color: 'text-danger',
                  children: w
                })
              ]
            })
          }),
          G && (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(i.Text, {
                variant: 'text-xs/medium',
                color: 'text-warning',
                className: g.maxCapacityText,
                children: E.Z.Messages.CLAN_DISCOVERY_APPLICATION_MAX_MEMBERS
              }),
              (0, o.jsx)('hr', {
                className: g.separator
              })
            ]
          }),
          (0, o.jsx)(i.Text, {
            variant: 'text-xs/medium',
            color: 'text-muted',
            className: g.noticeText,
            children: E.Z.Messages.CLAN_APPLICATION_GDM_CONSENT
          }),
          (0, o.jsx)(i.Text, {
            variant: 'text-xs/medium',
            color: 'text-muted',
            className: g.noticeText,
            children: E.Z.Messages.MEMBER_VERIFICATION_WARNING
          })
        ]
      })
    ]
  }),
  (0, o.jsx)('div', {
    className: g.closeButtonContainer,
    children: (0, o.jsx)(i.Button, {
      onClick: S,
      look: i.ButtonLooks.OUTLINED,
      color: i.ButtonColors.PRIMARY,
      children: E.Z.Messages.CLOSE
    })
  })
]
  });
};