t.d(n, {
  $J: function() {
return h;
  },
  He: function() {
return l;
  },
  av: function() {
return f;
  },
  df: function() {
return C;
  },
  hY: function() {
return _;
  },
  oL: function() {
return g;
  },
  wE: function() {
return d;
  },
  wZ: function() {
return m;
  },
  yk: function() {
return c;
  },
  zo: function() {
return u;
  }
});
var a = t(544891),
  r = t(570140),
  i = t(728345),
  s = t(981631),
  o = t(674563);
async function l(e) {
  await a.tn.post({
url: s.ANM.CREATOR_MONETIZATION_ENABLE_REQUESTS(e)
  });
}
async function c(e) {
  return (await a.tn.get({
url: s.ANM.CREATOR_MONETIZATION_ELIGIBILITY(e)
  })).body;
}
async function d(e, n) {
  await a.tn.post({
url: s.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS(e, n)
  });
}
async function u(e) {
  await a.tn.post({
url: s.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(e)
  });
}
async function m(e) {
  return (await a.tn.get({
url: s.ANM.CREATOR_MONETIZATION_MARKETING_ONBOARDING(e)
  })).body;
}
async function f(e) {
  try {
let n = await a.tn.get({
  url: s.ANM.CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY,
  query: {
    nag_guild_ids: e
  }
});
r.Z.dispatch({
  type: 'CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS',
  eligibleGuilds: n.body.eligible_guilds
});
  } catch (e) {}
}
async function C(e, n) {
  let t = (await a.tn.post({
url: s.ANM.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(e),
body: {
  team_id: n
}
  })).body;
  return null != t.application && r.Z.dispatch({
type: 'APPLICATION_FETCH_SUCCESS',
application: t.application
  }), t;
}

function _(e) {
  return a.tn.post({
url: s.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(e)
  });
}

function h(e) {
  return a.tn.post({
url: s.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(e)
  });
}
async function x(e) {
  await a.tn.post({
url: s.ANM.CREATOR_MONETIZATION_REMOVE_MONETIZATION(e),
body: {}
  });
}
async function g(e) {
  return await x(e), await i.Z.getApplicationsForGuild(e, {
type: o.wW.GUILD_ROLE_SUBSCRIPTIONS,
includeTeam: !0
  });
}