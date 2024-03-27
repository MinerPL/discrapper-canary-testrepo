"use strict";
n.r(e), n.d(e, {
  createCreatorMonetizationEnableRequest: function() {
    return T
  },
  getCreatorMonetizationEligibility: function() {
    return c
  },
  acceptCreatorMonetizationTerms: function() {
    return l
  },
  acceptCreatorMonetizationTermsV2: function() {
    return u
  },
  getCreatorMonetizationOnboardingMarketing: function() {
    return E
  },
  fetchCreatorMonetizationNagActivateEligibility: function() {
    return d
  },
  ownershipTransferOnboard: function() {
    return _
  },
  acceptNewTerms: function() {
    return C
  },
  acceptNewTermsDemonetized: function() {
    return R
  },
  removeMonetization: function() {
    return A
  }
});
var i = n("872717"),
  a = n("913144"),
  o = n("651057"),
  r = n("49111"),
  s = n("988268");
async function T(t) {
  await i.HTTP.post({
    url: r.Endpoints.CREATOR_MONETIZATION_ENABLE_REQUESTS(t)
  })
}
async function c(t) {
  let e = await i.HTTP.get({
    url: r.Endpoints.CREATOR_MONETIZATION_ELIGIBILITY(t)
  });
  return e.body
}
async function l(t, e) {
  await i.HTTP.post({
    url: r.Endpoints.CREATOR_MONETIZATION_ACCEPT_TERMS(t, e)
  })
}
async function u(t) {
  await i.HTTP.post({
    url: r.Endpoints.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(t)
  })
}
async function E(t) {
  let e = await i.HTTP.get({
    url: r.Endpoints.CREATOR_MONETIZATION_MARKETING_ONBOARDING(t)
  });
  return e.body
}
async function d(t) {
  try {
    let e = await i.HTTP.get({
      url: r.Endpoints.CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY,
      query: {
        nag_guild_ids: t
      }
    });
    a.default.dispatch({
      type: "CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS",
      eligibleGuilds: e.body.eligible_guilds
    })
  } catch (t) {}
}
async function _(t, e) {
  let n = await i.HTTP.post({
      url: r.Endpoints.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(t),
      body: {
        team_id: e
      }
    }),
    o = n.body;
  return null != o.application && a.default.dispatch({
    type: "APPLICATION_FETCH_SUCCESS",
    application: o.application
  }), o
}

function C(t) {
  return i.HTTP.post({
    url: r.Endpoints.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(t)
  })
}

function R(t) {
  return i.HTTP.post({
    url: r.Endpoints.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(t)
  })
}
async function O(t) {
  await i.HTTP.post({
    url: r.Endpoints.CREATOR_MONETIZATION_REMOVE_MONETIZATION(t),
    body: {}
  })
}
async function A(t) {
  return await O(t), await o.default.getApplicationsForGuild(t, {
    type: s.ApplicationTypes.GUILD_ROLE_SUBSCRIPTIONS,
    includeTeam: !0
  })
}