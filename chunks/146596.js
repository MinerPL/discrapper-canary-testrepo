"use strict";
s.r(t), s.d(t, {
  fetchEngagementOverview: function() {
    return o
  },
  fetchGrowthActivationOverview: function() {
    return d
  },
  fetchGrowthActivationRetention: function() {
    return u
  },
  fetchMemberInsights: function() {
    return c
  }
});
var a = s("544891"),
  l = s("570140"),
  n = s("981631");
let i = 36288e5;

function r(e, t) {
  let s = new Date,
    l = new Date(s.getTime() - (s.getDay() + 1) * 864e5 - i);
  return a.HTTP.get({
    url: t(e),
    query: {
      start: l.toISOString(),
      end: s.toISOString(),
      interval: 2
    },
    oldFormErrors: !0
  })
}

function o(e) {
  return r(e, n.Endpoints.GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW).then(t => {
    let {
      body: s
    } = t;
    l.default.dispatch({
      type: "GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_SUCCESS",
      guildId: e,
      stats: s.slice(0, 2)
    })
  }, e => {
    l.default.dispatch({
      type: "GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_FAILURE",
      error: e.body
    })
  })
}

function d(e) {
  return r(e, n.Endpoints.GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW).then(t => {
    let {
      body: s
    } = t;
    l.default.dispatch({
      type: "GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_SUCCESS",
      guildId: e,
      stats: s.slice(0, 2)
    })
  }, e => {
    l.default.dispatch({
      type: "GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_FAILURE",
      error: e.body
    })
  })
}

function u(e) {
  return r(e, n.Endpoints.GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION).then(t => {
    let {
      body: s
    } = t, a = s.filter(e => e.hasOwnProperty("pct_retained")).map(e => {
      let {
        interval_start_timestamp: t,
        pct_retained: s,
        ...a
      } = e;
      return {
        interval_start_timestamp: t,
        pct_retained: s
      }
    });
    l.default.dispatch({
      type: "GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_SUCCESS",
      guildId: e,
      stats: a.slice(0, 2)
    })
  }, e => {
    l.default.dispatch({
      type: "GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_FAILURE",
      error: e.body
    })
  })
}

function c(e) {
  return a.HTTP.get({
    url: n.Endpoints.GUILD_ANALYTICS_MEMBER_INSIGHTS(e)
  }).then(t => {
    l.default.dispatch({
      type: "GUILD_ANALYTICS_MEMBER_INSIGHTS_FETCH_SUCCESS",
      guildId: e,
      hasAccessRate: t.body.has_access_rate,
      accessRate: t.body.access_rate
    })
  }, () => {})
}