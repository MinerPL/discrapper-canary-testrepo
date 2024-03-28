"use strict";
a.r(t), a.d(t, {
  ensureGuildHomeSession: function() {
    return r
  },
  saveGuildHomeScrollPosition: function() {
    return d
  },
  trackGuildHomeOpened: function() {
    return u
  }
});
var l = a("570140"),
  n = a("626135"),
  s = a("601410"),
  i = a("981631");

function d(e, t) {
  l.default.dispatch({
    type: "GUILD_HOME_SET_SCROLL_POSITION",
    guildId: e,
    scrollPosition: t
  })
}

function r(e) {
  l.default.dispatch({
    type: "GUILD_HOME_ENSURE_HOME_SESSION",
    guildId: e
  })
}

function u(e, t) {
  n.default.track(i.AnalyticEvents.HOME_OPENED, {
    guild_id: e,
    home_session_id: s.default.getHomeSessionId(e),
    home_session_source: t
  })
}