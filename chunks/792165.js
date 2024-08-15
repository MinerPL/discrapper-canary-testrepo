n.d(t, {
  o: function() {
return C;
  }
});
var i = n(735250);
n(470079);
var a = n(442837),
  s = n(693789),
  r = n(260034),
  l = n(993365),
  o = n(481060),
  c = n(230711),
  u = n(197115),
  d = n(504983),
  _ = n(594174),
  E = n(74538),
  I = n(981631),
  m = n(921944),
  T = n(474936),
  h = n(526761),
  N = n(689938),
  f = n(641969);

function C(e) {
  var t;
  let {
onClose: n,
markAsDismissed: C
  } = e, p = (0, a.e7)([_.default], () => _.default.getCurrentUser());
  let g = (t = null == p ? void 0 : p.premiumType) === T.p9.TIER_2 ? N.Z.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_TIER_2 : null == t ? N.Z.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_NON_SUB : N.Z.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_NON_TIER_2,
S = E.ZP.canUseCustomCallSounds(p);
  return (0, i.jsxs)(d.Z, {
isShown: !0,
type: d.Y.PREMIUM,
className: f.upsellOuter,
backgroundClassName: f.upsellInner,
children: [
  null != C ? (0, i.jsx)(o.Clickable, {
    className: f.close,
    onClick: () => null == C ? void 0 : C(m.L.DISMISS),
    'aria-label': N.Z.Messages.CLOSE,
    children: (0, i.jsx)(o.XSmallIcon, {
      size: 'xs',
      color: 'currentColor',
      className: f.closeIcon
    })
  }) : null,
  (0, i.jsxs)('div', {
    className: f.upsellTitle,
    children: [
      (0, i.jsx)(o.NitroWheelIcon, {
        size: 'sm',
        color: 'currentColor',
        className: f.nitroWheel
      }),
      (0, i.jsx)(r.X, {
        variant: 'heading-sm/bold',
        children: N.Z.Messages.CALL_SOUNDS_UPSELL_TITLE_NON_SUB
      })
    ]
  }),
  (0, i.jsx)(l.x, {
    variant: 'text-sm/normal',
    children: g
  }),
  S ? (0, i.jsx)(s.zx, {
    onClick: function() {
      c.Z.open(I.oAB.VOICE, h.GA), null == n || n(), null == C || C(m.L.PRIMARY);
    },
    children: N.Z.Messages.CHECK_IT_OUT
  }) : (0, i.jsx)(u.Z, {
    buttonText: N.Z.Messages.PREMIUM_UPSELL_GET_NITRO,
    subscriptionTier: T.Si.TIER_2,
    premiumModalAnalyticsLocation: {
      section: I.jXE.SOUNDBOARD_SOUND_PICKER,
      object: I.qAy.BUTTON_CTA
    },
    color: s.zx.Colors.GREEN,
    onSubscribeModalClose: () => null == C ? void 0 : C(m.L.PRIMARY)
  })
]
  });
}