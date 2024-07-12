n.d(t, {
  Z: function() {
return T;
  }
});
var s = n(735250);
n(470079);
var a = n(990547),
  i = n(481060),
  r = n(213609),
  l = n(787051),
  o = n(696936),
  c = n(539290),
  d = n(975464),
  u = n(689938),
  _ = n(705968),
  I = n(270395);

function E(e) {
  let {
config: t
  } = e, {
noticeText: n,
ctaLabel: a,
ctaClickable: r,
onCtaClicked: l
  } = t;
  return (0, s.jsxs)('div', {
className: _.__invalid_ctaContainer,
children: [
  (0, s.jsx)('img', {
    className: _.__invalid_heroBanner,
    src: I,
    alt: u.Z.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_HERO_BANNER_ALT
  }),
  (0, s.jsxs)('div', {
    className: _.__invalid_ctaContent,
    children: [
      (0, s.jsx)(i.Heading, {
        variant: 'heading-xl/semibold',
        color: 'header-primary',
        children: u.Z.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_DESKTOP_V2_TITLE
      }),
      (0, s.jsx)(i.Spacer, {
        size: 12
      }),
      (0, s.jsx)(i.Text, {
        variant: 'text-md/normal',
        color: 'header-secondary',
        children: u.Z.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_V2_SUBTITLE
      }),
      (0, s.jsx)(i.Spacer, {
        size: 24
      }),
      (0, s.jsx)(c.Z, {
        className: _.waitlist,
        color: o.W.BROWN,
        buttonPosition: c.E.RIGHT,
        notice: n,
        ctaLabel: a,
        ctaDisabled: !r,
        ctaClassName: _.waitlistCtaButton,
        onClick: l
      })
    ]
  })
]
  });
}

function T(e) {
  let {
guild: t,
config: n
  } = e, {
isLoading: o,
error: c,
creatorMonetizationOnboardingMarketing: u
  } = (0, l.Z)(t.id);
  return ((0, r.Z)({
type: a.ImpressionTypes.PANE,
name: a.ImpressionNames.ENABLE_CREATOR_MONETIZATION_WAITLIST_LANDING,
properties: {
  guild_id: t.id
}
  }), o) ? (0, s.jsx)(i.Spinner, {}) : (0, s.jsxs)('div', {
className: _.__invalid_container,
children: [
  (0, s.jsx)(E, {
    config: n
  }),
  (0, s.jsx)(d.C, {
    onboardingMarketing: u,
    onboardingMarketingError: c
  })
]
  });
}