n.d(t, {
  Q: function() {
return _;
  },
  Z: function() {
return m;
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  i = n(481060),
  r = n(957011),
  l = n(587431),
  o = n(756066),
  c = n(689938),
  d = n(32033),
  u = n(270395);
let _ = 'role_subscriptions_eligibility_modal';

function I(e) {
  let {
guild: t,
eligibility: a,
eligibilityLoading: r,
eligibilityError: l,
refreshEligibility: o
  } = e;
  return (0, s.jsxs)(i.Button, {
color: i.ButtonColors.CUSTOM,
className: d.ineligibleButton,
innerClassName: d.ineligibleButtonContent,
grow: !0,
onClick: function() {
  (0, i.openModalLazy)(async () => {
    let {
      default: e
    } = await n.e('21863').then(n.bind(n, 466501));
    return n => (0, s.jsx)(e, {
      ...n,
      eligibility: a,
      eligibilityLoading: r,
      eligibilityError: l,
      refreshEligibility: o,
      guildId: t.id
    });
  }, {
    modalKey: _
  });
},
size: i.Button.Sizes.LARGE,
children: [
  (0, s.jsx)(i.CircleExclamationPointIcon, {
    size: 'xs',
    color: 'currentColor'
  }),
  c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_START_EARNING_CTA
]
  });
}

function E(e) {
  let {
guild: t,
checkboxText: n
  } = e, {
canSubmitAcceptance: o,
error: u,
loading: _,
submitAcceptTermsRequest: I
  } = (0, r.Z)(t.id), [E, T] = a.useState(!1);
  return (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsx)(i.Checkbox, {
    onChange: function() {
      T(e => !e);
    },
    size: 20,
    type: i.Checkbox.Types.INVERTED,
    value: E,
    children: (0, s.jsx)(i.Text, {
      variant: 'text-sm/normal',
      color: 'header-secondary',
      children: n
    })
  }),
  (0, s.jsx)(i.Spacer, {
    size: 24
  }),
  (0, s.jsx)(i.Button, {
    className: d.ctaButton,
    disabled: !E || !o,
    grow: !0,
    onClick: I,
    size: i.Button.Sizes.LARGE,
    submitting: _,
    children: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_START_EARNING_CTA
  }),
  null != u && (0, s.jsxs)(s.Fragment, {
    children: [
      (0, s.jsx)(i.Spacer, {
        size: 24
      }),
      (0, s.jsx)(l.Z, {
        children: u.getAnyErrorMessage()
      })
    ]
  })
]
  });
}

function T(e) {
  let {
guild: t,
monetizationEligibility: n
  } = e, {
eligibilityLoading: a,
eligibilityError: i,
refreshEligibility: r,
eligibility: l,
eligibleForMonetization: c,
acceptTermsCheckboxText: d,
wasRejectedInV1: u
  } = n;
  return c ? u ? (0, s.jsx)(o.Z, {
...n
  }) : (0, s.jsx)(E, {
guild: t,
checkboxText: d
  }) : (0, s.jsx)(I, {
guild: t,
eligibility: l,
eligibilityLoading: a,
eligibilityError: i,
refreshEligibility: r
  });
}

function m(e) {
  let {
guild: t,
monetizationEligibility: n
  } = e;
  return (0, s.jsxs)('div', {
className: d.ctaContainer,
children: [
  (0, s.jsx)('img', {
    className: d.heroBanner,
    src: u,
    alt: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_HERO_BANNER_ALT
  }),
  (0, s.jsxs)('div', {
    className: d.ctaContent,
    children: [
      (0, s.jsx)(i.Heading, {
        variant: 'heading-xl/semibold',
        color: 'header-primary',
        children: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_DESKTOP_V2_TITLE
      }),
      (0, s.jsx)(i.Spacer, {
        size: 12
      }),
      (0, s.jsx)(i.Text, {
        variant: 'text-md/normal',
        color: 'header-secondary',
        children: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_V2_SUBTITLE
      }),
      (0, s.jsx)(i.Spacer, {
        size: 24
      }),
      (0, s.jsx)(T, {
        guild: t,
        monetizationEligibility: n
      })
    ]
  })
]
  });
}