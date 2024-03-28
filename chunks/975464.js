"use strict";
s.r(t), s.d(t, {
  MarketingSections: function() {
    return m
  },
  default: function() {
    return N
  }
});
var a = s("735250");
s("470079");
var l = s("990547"),
  n = s("481060"),
  i = s("213609"),
  r = s("605288"),
  o = s("787051"),
  d = s("346163"),
  u = s("587431"),
  c = s("271267"),
  E = s("320893"),
  _ = s("81509"),
  I = s("662379"),
  T = s("60533"),
  S = s("581050"),
  f = s("127732");

function m(e) {
  let {
    onboardingMarketing: t,
    onboardingMarketingError: s
  } = e, l = e => {
    let {
      children: t
    } = e;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(n.FormDivider, {
        className: f.sectionDivider
      }), t]
    })
  }, i = (0, a.jsx)(l, {
    children: (0, a.jsx)(I.default, {})
  }, S.CreatorMonetizationOnboardingMarketingSection.HOW_IT_WORKS), r = (0, a.jsx)(l, {
    children: (0, a.jsx)(E.default, {})
  }, S.CreatorMonetizationOnboardingMarketingSection.BENEFITS);
  return null != s || (null == t ? void 0 : t.sections) == null ? (0, a.jsxs)(a.Fragment, {
    children: [i, r]
  }) : (0, a.jsx)(a.Fragment, {
    children: t.sections.map(e => {
      switch (e.type) {
        case S.CreatorMonetizationOnboardingMarketingSection.HOW_IT_WORKS:
          return i;
        case S.CreatorMonetizationOnboardingMarketingSection.BENEFITS:
          return r;
        case S.CreatorMonetizationOnboardingMarketingSection.OTHER_CREATORS:
          return (0, a.jsx)(l, {
            children: (0, a.jsx)(_.default, {
              highlightedCreators: e.creators
            })
          }, S.CreatorMonetizationOnboardingMarketingSection.OTHER_CREATORS)
      }
    })
  })
}

function N(e) {
  let {
    guild: t
  } = e, s = (0, d.default)(t), {
    eligibilityLoading: E,
    eligibilityError: _,
    eligibility: I
  } = s, S = (0, r.useCreatorMonetizationIneligibleReasons)(I), {
    isLoading: N,
    error: g,
    creatorMonetizationOnboardingMarketing: h
  } = (0, o.default)(t.id);
  return ((0, i.default)({
    type: l.ImpressionTypes.PANE,
    name: l.ImpressionNames.ENABLE_CREATOR_MONETIZATION_ACCEPT_TERMS_LANDING,
    properties: {
      guild_id: t.id,
      is_owner: s.isGuildOwner,
      is_eligible: s.eligibleForMonetization,
      ineligible_reasons: S
    }
  }, {
    disableTrack: null == t.id || null == I
  }), E || null == I || N) ? (0, a.jsx)(n.Spinner, {}) : I.actionRequired ? (0, a.jsx)(T.default, {
    guild: t
  }) : null != _ ? (0, a.jsx)(u.default, {
    children: _.message
  }) : (0, a.jsxs)("div", {
    className: f.container,
    children: [(0, a.jsx)(c.default, {
      guild: t,
      monetizationEligibility: s
    }), (0, a.jsx)(m, {
      onboardingMarketing: h,
      onboardingMarketingError: g
    })]
  })
}