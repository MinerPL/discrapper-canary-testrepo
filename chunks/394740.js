n.d(t, {
  Z: function() {
return v;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(780384),
  l = n(481060),
  u = n(2052),
  c = n(410030),
  d = n(100527),
  _ = n(906732),
  E = n(98278),
  f = n(197115),
  h = n(626135),
  p = n(74538),
  m = n(706667),
  I = n(409673),
  T = n(981631),
  g = n(474936),
  S = n(689938),
  A = n(493277),
  N = n(900566);

function v(e) {
  var t;
  let {
onClose: a,
closePopout: v,
sound: O,
channel: R
  } = e, C = (0, c.ZP)(), [y, D] = i.useState(!1), {
location: L
  } = (0, u.O)(), b = i.useMemo(() => ({
...L,
section: T.jXE.SOUNDBOARD_SOUND_PICKER
  }), [L]), {
analyticsLocations: M
  } = (0, _.ZP)(d.Z.PREMIUM_UPSELL), {
previewSound: P
  } = (0, m.Z)(O, null !== (t = null == R ? void 0 : R.id) && void 0 !== t ? t : null), U = (0, I.K_)({
sound: O,
previewSound: P,
tooltipPosition: 'left'
  }), w = (0, o.ap)(C) ? n(537381) : n(341048);
  i.useEffect(() => {
h.default.track(T.rMx.PREMIUM_UPSELL_VIEWED, {
  type: g.cd.SOUND_PICKER_SOUND_CLICKED,
  is_external: !0,
  location: {
    ...b,
    object: T.qAy.SOUNDBOARD_SOUND
  },
  location_stack: M,
  sku_id: p.ZP.getSkuIdForPremiumType(g.p9.TIER_2)
});
  }, [
M,
b
  ]);
  let x = i.useCallback(() => {
h.default.track(T.rMx.PREMIUM_PROMOTION_OPENED, {
  location_section: T.jXE.SOUNDBOARD_SOUND_PICKER_UPSELL
}), (0, E.z)(), v();
  }, [v]);
  return (0, r.jsxs)('div', {
className: s()(N.premiumPromo, A.container),
children: [
  (0, r.jsx)(l.Clickable, {
    className: N.premiumPromoClose,
    onClick: a,
    children: S.Z.Messages.CLOSE
  }),
  (0, r.jsx)('img', {
    'aria-hidden': !0,
    alt: '',
    className: s()(N.premiumPromoImage, N.premiumPromoImageSmaller, A.image),
    src: w
  }),
  (0, r.jsx)(l.Heading, {
    variant: 'heading-lg/normal',
    color: 'header-primary',
    className: N.premiumPromoTitle,
    children: S.Z.Messages.SOUNDBOARD_NITRO_UPSELL_TITLE
  }),
  (0, r.jsx)(l.Text, {
    variant: 'text-md/normal',
    color: 'header-secondary',
    className: N.premiumPromoDescription,
    children: S.Z.Messages.SOUNDBOARD_NITRO_UPSELL_BODY.format({
      onClick: x
    })
  }),
  (0, r.jsxs)('div', {
    className: A.buttonContainer,
    children: [
      (0, r.jsx)('div', {
        className: A.previewButtonContainer,
        children: U
      }),
      (0, r.jsx)(f.Z, {
        subscriptionTier: g.Si.TIER_2,
        submitting: y,
        premiumModalAnalyticsLocation: {
          section: T.jXE.SOUNDBOARD_SOUND_PICKER,
          object: T.qAy.BUTTON_CTA
        },
        size: l.Button.Sizes.SMALL,
        color: l.Button.Colors.GREEN,
        onClick: () => {
          D(!0);
        },
        onSubscribeModalClose: e => {
          D(!1), e && a();
        }
      })
    ]
  })
]
  });
}