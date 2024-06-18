"use strict";
t.d(s, {
  Q: function() {
    return _
  },
  Z: function() {
    return m
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(481060),
  a = t(957011),
  r = t(759231),
  o = t(587431),
  c = t(756066),
  d = t(689938),
  u = t(843804),
  E = t(270395);
let _ = "role_subscriptions_eligibility_modal";

function I(e) {
  let {
    guild: s,
    eligibility: i,
    eligibilityLoading: a,
    eligibilityError: o,
    refreshEligibility: c
  } = e;
  return (0, n.jsxs)(l.Button, {
    color: l.ButtonColors.CUSTOM,
    className: u.ineligibleButton,
    innerClassName: u.ineligibleButtonContent,
    grow: !0,
    onClick: function() {
      (0, l.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([t.e("99387"), t.e("21863")]).then(t.bind(t, 466501));
        return t => (0, n.jsx)(e, {
          ...t,
          eligibility: i,
          eligibilityLoading: a,
          eligibilityError: o,
          refreshEligibility: c,
          guildId: s.id
        })
      }, {
        modalKey: _
      })
    },
    size: l.Button.Sizes.LARGE,
    children: [(0, n.jsx)(r.Z, {
      height: 16,
      width: 16
    }), d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_START_EARNING_CTA]
  })
}

function T(e) {
  let {
    guild: s,
    checkboxText: t
  } = e, {
    canSubmitAcceptance: r,
    error: c,
    loading: E,
    submitAcceptTermsRequest: _
  } = (0, a.Z)(s.id), [I, T] = i.useState(!1);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(l.Checkbox, {
      onChange: function() {
        T(e => !e)
      },
      size: 20,
      type: l.Checkbox.Types.INVERTED,
      value: I,
      children: (0, n.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: t
      })
    }), (0, n.jsx)(l.Spacer, {
      size: 24
    }), (0, n.jsx)(l.Button, {
      className: u.ctaButton,
      disabled: !I || !r,
      grow: !0,
      onClick: _,
      size: l.Button.Sizes.LARGE,
      submitting: E,
      children: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_START_EARNING_CTA
    }), null != c && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(l.Spacer, {
        size: 24
      }), (0, n.jsx)(o.Z, {
        children: c.getAnyErrorMessage()
      })]
    })]
  })
}

function N(e) {
  let {
    guild: s,
    monetizationEligibility: t
  } = e, {
    eligibilityLoading: i,
    eligibilityError: l,
    refreshEligibility: a,
    eligibility: r,
    eligibleForMonetization: o,
    acceptTermsCheckboxText: d,
    wasRejectedInV1: u
  } = t;
  return o ? u ? (0, n.jsx)(c.Z, {
    ...t
  }) : (0, n.jsx)(T, {
    guild: s,
    checkboxText: d
  }) : (0, n.jsx)(I, {
    guild: s,
    eligibility: r,
    eligibilityLoading: i,
    eligibilityError: l,
    refreshEligibility: a
  })
}

function m(e) {
  let {
    guild: s,
    monetizationEligibility: t
  } = e;
  return (0, n.jsxs)("div", {
    className: u.ctaContainer,
    children: [(0, n.jsx)("img", {
      className: u.heroBanner,
      src: E,
      alt: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_HERO_BANNER_ALT
    }), (0, n.jsxs)("div", {
      className: u.ctaContent,
      children: [(0, n.jsx)(l.Heading, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_DESKTOP_V2_TITLE
      }), (0, n.jsx)(l.Spacer, {
        size: 12
      }), (0, n.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_V2_SUBTITLE
      }), (0, n.jsx)(l.Spacer, {
        size: 24
      }), (0, n.jsx)(N, {
        guild: s,
        monetizationEligibility: t
      })]
    })]
  })
}