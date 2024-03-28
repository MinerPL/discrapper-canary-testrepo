"use strict";
n.r(t), n.d(t, {
  acceptCreatorMonetizationTerms: function() {
    return c
  },
  acceptCreatorMonetizationTermsV2: function() {
    return d
  },
  acceptNewTerms: function() {
    return E
  },
  acceptNewTermsDemonetized: function() {
    return I
  },
  createCreatorMonetizationEnableRequest: function() {
    return o
  },
  fetchCreatorMonetizationNagActivateEligibility: function() {
    return p
  },
  getCreatorMonetizationEligibility: function() {
    return u
  },
  getCreatorMonetizationOnboardingMarketing: function() {
    return f
  },
  ownershipTransferOnboard: function() {
    return _
  },
  removeMonetization: function() {
    return m
  }
});
var i = n("544891"),
  r = n("570140"),
  s = n("728345"),
  a = n("981631"),
  l = n("674563");
async function o(e) {
  await i.HTTP.post({
    url: a.Endpoints.CREATOR_MONETIZATION_ENABLE_REQUESTS(e)
  })
}
async function u(e) {
  return (await i.HTTP.get({
    url: a.Endpoints.CREATOR_MONETIZATION_ELIGIBILITY(e)
  })).body
}
async function c(e, t) {
  await i.HTTP.post({
    url: a.Endpoints.CREATOR_MONETIZATION_ACCEPT_TERMS(e, t)
  })
}
async function d(e) {
  await i.HTTP.post({
    url: a.Endpoints.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(e)
  })
}
async function f(e) {
  return (await i.HTTP.get({
    url: a.Endpoints.CREATOR_MONETIZATION_MARKETING_ONBOARDING(e)
  })).body
}
async function p(e) {
  try {
    let t = await i.HTTP.get({
      url: a.Endpoints.CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY,
      query: {
        nag_guild_ids: e
      }
    });
    r.default.dispatch({
      type: "CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS",
      eligibleGuilds: t.body.eligible_guilds
    })
  } catch (e) {}
}
async function _(e, t) {
  let n = (await i.HTTP.post({
    url: a.Endpoints.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(e),
    body: {
      team_id: t
    }
  })).body;
  return null != n.application && r.default.dispatch({
    type: "APPLICATION_FETCH_SUCCESS",
    application: n.application
  }), n
}

function E(e) {
  return i.HTTP.post({
    url: a.Endpoints.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(e)
  })
}

function I(e) {
  return i.HTTP.post({
    url: a.Endpoints.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(e)
  })
}
async function T(e) {
  await i.HTTP.post({
    url: a.Endpoints.CREATOR_MONETIZATION_REMOVE_MONETIZATION(e),
    body: {}
  })
}
async function m(e) {
  return await T(e), await s.default.getApplicationsForGuild(e, {
    type: l.ApplicationTypes.GUILD_ROLE_SUBSCRIPTIONS,
    includeTeam: !0
  })
}