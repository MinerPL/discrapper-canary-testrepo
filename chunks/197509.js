"use strict";
n.r(t), n.d(t, {
  createCreatorMonetizationEnableRequest: function() {
    return o
  },
  getCreatorMonetizationEligibility: function() {
    return u
  },
  acceptCreatorMonetizationTerms: function() {
    return c
  },
  acceptCreatorMonetizationTermsV2: function() {
    return d
  },
  getCreatorMonetizationOnboardingMarketing: function() {
    return f
  },
  fetchCreatorMonetizationNagActivateEligibility: function() {
    return p
  },
  ownershipTransferOnboard: function() {
    return _
  },
  acceptNewTerms: function() {
    return E
  },
  acceptNewTermsDemonetized: function() {
    return m
  },
  removeMonetization: function() {
    return I
  }
});
var r = n("872717"),
  i = n("913144"),
  s = n("651057"),
  a = n("49111"),
  l = n("988268");
async function o(e) {
  await r.HTTP.post({
    url: a.Endpoints.CREATOR_MONETIZATION_ENABLE_REQUESTS(e)
  })
}
async function u(e) {
  let t = await r.HTTP.get({
    url: a.Endpoints.CREATOR_MONETIZATION_ELIGIBILITY(e)
  });
  return t.body
}
async function c(e, t) {
  await r.HTTP.post({
    url: a.Endpoints.CREATOR_MONETIZATION_ACCEPT_TERMS(e, t)
  })
}
async function d(e) {
  await r.HTTP.post({
    url: a.Endpoints.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(e)
  })
}
async function f(e) {
  let t = await r.HTTP.get({
    url: a.Endpoints.CREATOR_MONETIZATION_MARKETING_ONBOARDING(e)
  });
  return t.body
}
async function p(e) {
  try {
    let t = await r.HTTP.get({
      url: a.Endpoints.CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY,
      query: {
        nag_guild_ids: e
      }
    });
    i.default.dispatch({
      type: "CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS",
      eligibleGuilds: t.body.eligible_guilds
    })
  } catch (e) {}
}
async function _(e, t) {
  let n = await r.HTTP.post({
      url: a.Endpoints.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(e),
      body: {
        team_id: t
      }
    }),
    s = n.body;
  return null != s.application && i.default.dispatch({
    type: "APPLICATION_FETCH_SUCCESS",
    application: s.application
  }), s
}

function E(e) {
  return r.HTTP.post({
    url: a.Endpoints.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(e)
  })
}

function m(e) {
  return r.HTTP.post({
    url: a.Endpoints.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(e)
  })
}
async function T(e) {
  await r.HTTP.post({
    url: a.Endpoints.CREATOR_MONETIZATION_REMOVE_MONETIZATION(e),
    body: {}
  })
}
async function I(e) {
  return await T(e), await s.default.getApplicationsForGuild(e, {
    type: l.ApplicationTypes.GUILD_ROLE_SUBSCRIPTIONS,
    includeTeam: !0
  })
}