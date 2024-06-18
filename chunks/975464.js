"use strict";
t.d(s, {
  C: function() {
    return S
  },
  Z: function() {
    return h
  }
});
var n = t(735250);
t(470079);
var i = t(990547),
  l = t(481060),
  a = t(213609),
  r = t(605288),
  o = t(787051),
  c = t(346163),
  d = t(587431),
  u = t(271267),
  E = t(320893),
  _ = t(81509),
  I = t(662379),
  T = t(60533),
  N = t(581050),
  m = t(744493);

function S(e) {
  let {
    onboardingMarketing: s,
    onboardingMarketingError: t
  } = e, i = e => {
    let {
      children: s
    } = e;
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(l.FormDivider, {
        className: m.sectionDivider
      }), s]
    })
  }, a = (0, n.jsx)(i, {
    children: (0, n.jsx)(I.Z, {})
  }, N.q.HOW_IT_WORKS), r = (0, n.jsx)(i, {
    children: (0, n.jsx)(E.Z, {})
  }, N.q.BENEFITS);
  return null != t || (null == s ? void 0 : s.sections) == null ? (0, n.jsxs)(n.Fragment, {
    children: [a, r]
  }) : (0, n.jsx)(n.Fragment, {
    children: s.sections.map(e => {
      switch (e.type) {
        case N.q.HOW_IT_WORKS:
          return a;
        case N.q.BENEFITS:
          return r;
        case N.q.OTHER_CREATORS:
          return (0, n.jsx)(i, {
            children: (0, n.jsx)(_.Z, {
              highlightedCreators: e.creators
            })
          }, N.q.OTHER_CREATORS)
      }
    })
  })
}

function h(e) {
  let {
    guild: s
  } = e, t = (0, c.Z)(s), {
    eligibilityLoading: E,
    eligibilityError: _,
    eligibility: I
  } = t, N = (0, r.j)(I), {
    isLoading: h,
    error: g,
    creatorMonetizationOnboardingMarketing: x
  } = (0, o.Z)(s.id);
  return ((0, a.Z)({
    type: i.ImpressionTypes.PANE,
    name: i.ImpressionNames.ENABLE_CREATOR_MONETIZATION_ACCEPT_TERMS_LANDING,
    properties: {
      guild_id: s.id,
      is_owner: t.isGuildOwner,
      is_eligible: t.eligibleForMonetization,
      ineligible_reasons: N
    }
  }, {
    disableTrack: null == s.id || null == I
  }), E || null == I || h) ? (0, n.jsx)(l.Spinner, {}) : I.actionRequired ? (0, n.jsx)(T.Z, {
    guild: s
  }) : null != _ ? (0, n.jsx)(d.Z, {
    children: _.message
  }) : (0, n.jsxs)("div", {
    className: m.container,
    children: [(0, n.jsx)(u.Z, {
      guild: s,
      monetizationEligibility: t
    }), (0, n.jsx)(S, {
      onboardingMarketing: x,
      onboardingMarketingError: g
    })]
  })
}