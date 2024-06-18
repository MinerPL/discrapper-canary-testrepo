"use strict";
n.d(e, {
  q: function() {
    return l
  }
});
var r = n(765497),
  i = n(50074),
  s = n(128603),
  a = n(880803),
  o = n(529866),
  u = n(303155);

function l(t, e, n = (0, r.x)(t.bufferSize || 30)) {
  let l = {};

  function d(r) {
    let d = [];
    if ((0, i.gv)(r, (e, n) => {
        let r = (0, i.mL)(n);
        if ((0, s.Q)(l, r)) {
          let i = c(e, n);
          t.recordDroppedEvent("ratelimit_backoff", r, i)
        } else d.push(e)
      }), 0 === d.length) return (0, a.WD)();
    let h = (0, i.Jd)(r[0], d),
      _ = e => {
        (0, i.gv)(h, (n, r) => {
          let s = c(n, r);
          t.recordDroppedEvent(e, (0, i.mL)(r), s)
        })
      };
    return n.add(() => e({
      body: (0, i.V$)(h, t.textEncoder)
    }).then(t => (void 0 !== t.statusCode && (t.statusCode < 200 || t.statusCode >= 300) && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn(`Sentry responded with status code ${t.statusCode} to sent event.`), l = (0, s.WG)(l, t), t), t => {
      throw _("network_error"), t
    })).then(t => t, t => {
      if (t instanceof u.b) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.error("Skipped sending event because buffer is full."), _("queue_overflow"), (0, a.WD)();
      throw t
    })
  }
  return d.__sentry__baseTransport__ = !0, {
    send: d,
    flush: t => n.drain(t)
  }
}

function c(t, e) {
  if ("event" === e || "transaction" === e) return Array.isArray(t) ? t[1] : void 0
}