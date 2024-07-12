n.d(t, {
  C: function() {
return S;
  },
  Z: function() {
return h;
  }
});
var s = n(735250);
n(470079);
var a = n(990547),
  i = n(481060),
  r = n(213609),
  l = n(605288),
  o = n(787051),
  c = n(346163),
  d = n(587431),
  u = n(271267),
  _ = n(320893),
  I = n(81509),
  E = n(662379),
  T = n(60533),
  m = n(581050),
  N = n(675523);

function S(e) {
  let {
onboardingMarketing: t,
onboardingMarketingError: n
  } = e, a = e => {
let {
  children: t
} = e;
return (0, s.jsxs)(s.Fragment, {
  children: [
    (0, s.jsx)(i.FormDivider, {
      className: N.sectionDivider
    }),
    t
  ]
});
  }, r = (0, s.jsx)(a, {
children: (0, s.jsx)(E.Z, {})
  }, m.q.HOW_IT_WORKS), l = (0, s.jsx)(a, {
children: (0, s.jsx)(_.Z, {})
  }, m.q.BENEFITS);
  return null != n || (null == t ? void 0 : t.sections) == null ? (0, s.jsxs)(s.Fragment, {
children: [
  r,
  l
]
  }) : (0, s.jsx)(s.Fragment, {
children: t.sections.map(e => {
  switch (e.type) {
    case m.q.HOW_IT_WORKS:
      return r;
    case m.q.BENEFITS:
      return l;
    case m.q.OTHER_CREATORS:
      return (0, s.jsx)(a, {
        children: (0, s.jsx)(I.Z, {
          highlightedCreators: e.creators
        })
      }, m.q.OTHER_CREATORS);
  }
})
  });
}

function h(e) {
  let {
guild: t
  } = e, n = (0, c.Z)(t), {
eligibilityLoading: _,
eligibilityError: I,
eligibility: E
  } = n, m = (0, l.j)(E), {
isLoading: h,
error: g,
creatorMonetizationOnboardingMarketing: C
  } = (0, o.Z)(t.id);
  return ((0, r.Z)({
type: a.ImpressionTypes.PANE,
name: a.ImpressionNames.ENABLE_CREATOR_MONETIZATION_ACCEPT_TERMS_LANDING,
properties: {
  guild_id: t.id,
  is_owner: n.isGuildOwner,
  is_eligible: n.eligibleForMonetization,
  ineligible_reasons: m
}
  }, {
disableTrack: null == t.id || null == E
  }), _ || null == E || h) ? (0, s.jsx)(i.Spinner, {}) : E.actionRequired ? (0, s.jsx)(T.Z, {
guild: t
  }) : null != I ? (0, s.jsx)(d.Z, {
children: I.message
  }) : (0, s.jsxs)('div', {
className: N.container,
children: [
  (0, s.jsx)(u.Z, {
    guild: t,
    monetizationEligibility: n
  }),
  (0, s.jsx)(S, {
    onboardingMarketing: C,
    onboardingMarketingError: g
  })
]
  });
}