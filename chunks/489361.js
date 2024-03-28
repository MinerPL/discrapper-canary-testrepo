"use strict";
a.r(t);
var l, n = a("442837"),
  s = a("570140");

function i(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let d = {};
class r extends(l = n.default.PersistedStore) {
  initialize(e) {
    var t;
    null != e && (d = null !== (t = e.numCleanLoadsForGuild) && void 0 !== t ? t : {})
  }
  getState() {
    return {
      numCleanLoadsForGuild: d
    }
  }
  getTotalNumCleanLoads() {
    let e = 0;
    for (let a in d) {
      var t;
      e += null !== (t = d[a]) && void 0 !== t ? t : 0
    }
    return e
  }
}
i(r, "displayName", "GuildHomeFeedbackStore"), i(r, "persistKey", "GuildHomeFeedbackStore"), t.default = new r(s.default, {
  GUILD_FEED_FETCH_SUCCESS: function(e) {
    var t;
    let {
      guildId: a,
      fresh: l
    } = e;
    if (!l) return !1;
    d[a] = Math.min(50, (null !== (t = d[a]) && void 0 !== t ? t : 0) + 1)
  },
  LOGOUT: function() {
    d = {}
  }
})