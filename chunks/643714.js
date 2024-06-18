"use strict";
n.d(e, {
  _: function() {
    return a
  }
});
var r = n(529866),
  i = n(65534),
  s = n(450436);
class a {
  constructor() {
    a.prototype.__init.call(this), a.prototype.__init2.call(this)
  }
  __init() {
    this.name = "BrowserProfilingIntegration"
  }
  __init2() {
    this.getCurrentHub = void 0
  }
  setupOnce(t, e) {
    this.getCurrentHub = e;
    let n = this.getCurrentHub().getClient();
    n && "function" == typeof n.on ? (n.on("startTransaction", t => {
      (0, i.sA)(t)
    }), n.on("beforeEnvelope", t => {
      if (!s.wh.size) return;
      let e = (0, s.AJ)(t);
      if (!e.length) return;
      let n = [];
      for (let t of e) {
        let e = t && t.contexts,
          i = e && e.profile && e.profile.profile_id;
        if (!i) {
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.log("[Profiling] cannot find profile for a transaction without a profile context");
          continue
        }
        e && e.profile && delete e.profile;
        let a = s.wh.get(i);
        if (!a) {
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.log(`[Profiling] Could not retrieve profile for transaction: ${i}`);
          continue
        }
        s.wh.delete(i);
        let o = (0, s.nm)(i, a, t);
        o && n.push(o)
      }(0, s.db)(t, n)
    })) : r.kg.warn("[Profiling] Client does not support hooks, profiling will be disabled")
  }
}