"use strict";
t.d(s, {
  SR: function() {
    return c
  },
  Vk: function() {
    return o
  },
  r2: function() {
    return u
  },
  xl: function() {
    return d
  }
});
var n = t(544891),
  i = t(570140),
  l = t(981631);
let a = 36288e5;

function r(e, s) {
  let t = new Date,
    i = new Date(t.getTime() - (t.getDay() + 1) * 864e5 - a);
  return n.tn.get({
    url: s(e),
    query: {
      start: i.toISOString(),
      end: t.toISOString(),
      interval: 2
    },
    oldFormErrors: !0
  })
}

function o(e) {
  return r(e, l.ANM.GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW).then(s => {
    let {
      body: t
    } = s;
    i.Z.dispatch({
      type: "GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_SUCCESS",
      guildId: e,
      stats: t.slice(0, 2)
    })
  }, e => {
    i.Z.dispatch({
      type: "GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_FAILURE",
      error: e.body
    })
  })
}

function c(e) {
  return r(e, l.ANM.GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW).then(s => {
    let {
      body: t
    } = s;
    i.Z.dispatch({
      type: "GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_SUCCESS",
      guildId: e,
      stats: t.slice(0, 2)
    })
  }, e => {
    i.Z.dispatch({
      type: "GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_FAILURE",
      error: e.body
    })
  })
}

function d(e) {
  return r(e, l.ANM.GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION).then(s => {
    let {
      body: t
    } = s, n = t.filter(e => e.hasOwnProperty("pct_retained")).map(e => {
      let {
        interval_start_timestamp: s,
        pct_retained: t,
        ...n
      } = e;
      return {
        interval_start_timestamp: s,
        pct_retained: t
      }
    });
    i.Z.dispatch({
      type: "GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_SUCCESS",
      guildId: e,
      stats: n.slice(0, 2)
    })
  }, e => {
    i.Z.dispatch({
      type: "GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_FAILURE",
      error: e.body
    })
  })
}

function u(e) {
  return n.tn.get({
    url: l.ANM.GUILD_ANALYTICS_MEMBER_INSIGHTS(e)
  }).then(s => {
    i.Z.dispatch({
      type: "GUILD_ANALYTICS_MEMBER_INSIGHTS_FETCH_SUCCESS",
      guildId: e,
      hasAccessRate: s.body.has_access_rate,
      accessRate: s.body.access_rate
    })
  }, () => {})
}