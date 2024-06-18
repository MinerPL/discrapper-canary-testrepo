"use strict";
n.d(e, {
  Pd: function() {
    return o
  }
});
var r = n(529866),
  i = n(50074),
  s = n(128603);

function a(t, e) {
  ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.info(`[Offline]: ${t}`, e)
}

function o(t) {
  return e => {
    let n;
    let r = t(e),
      o = e.createStore ? e.createStore(e) : void 0,
      u = 5e3;

    function l(t) {
      if (!!o) n && clearTimeout(n), "number" != typeof(n = setTimeout(async () => {
        n = void 0;
        let t = await o.pop();
        t && (a("Attempting to send previously queued event"), d(t).catch(t => {
          a("Failed to retry sending", t)
        }))
      }, t)) && n.unref && n.unref()
    }

    function c() {
      if (!n) l(u), u = Math.min(2 * u, 36e5)
    }
    async function d(t) {
      try {
        let e = await r.send(t),
          n = 100;
        if (e) {
          if (e.headers && e.headers["retry-after"]) n = (0, s.JY)(e.headers["retry-after"]);
          else if ((e.statusCode || 0) >= 400) return e
        }
        return l(n), u = 5e3, e
      } catch (r) {
        var n, d, h;
        if (o && await (n = t, d = r, h = u, !(0, i.R)(n, ["replay_event", "replay_recording", "client_report"]) && (!e.shouldStore || e.shouldStore(n, d, h)))) return await o.insert(t), c(), a("Error sending. Event queued", r), {};
        throw r
      }
    }
    return e.flushAtStartup && c(), {
      send: d,
      flush: t => r.flush(t)
    }
  }
}