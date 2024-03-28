"use strict";
n.r(t);
var a, s = n("442837"),
  l = n("570140"),
  i = n("914010"),
  r = n("626135"),
  o = n("981631");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let d = {};

function c(e) {
  var t;
  if (null == e || e === o.ME || e === o.FAVORITES) return !1;
  let n = null !== (t = d[e]) && void 0 !== t ? t : 0;
  if (Date.now() <= n + 288e5) return !1;
  d[e] = Date.now(), r.default.track(o.AnalyticEvents.HIGHLIGHTS_TEST_LOADED, {
    guild_id: e
  })
}
class f extends(a = s.default.PersistedStore) {
  initialize(e) {
    this.waitFor(i.default), null != e && (d = e.lastHighlightsLoadMillis)
  }
  getState() {
    return {
      lastHighlightsLoadMillis: d
    }
  }
}
u(f, "displayName", "HighlightsTestStore"), u(f, "persistKey", "HighlightsTestStore"), new f(l.default, {
  CONNECTION_OPEN: function() {
    return c(i.default.getGuildId())
  },
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t
    } = e;
    return c(t)
  }
})