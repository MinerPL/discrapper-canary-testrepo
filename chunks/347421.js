r.d(e, {
    q: function () {
        return s;
    }
});
var n = r(765497), _ = r(50074), a = r(128603), i = r(880803), o = r(529866), E = r(303155);
function s(t, e, r = (0, n.x)(t.bufferSize || 30)) {
    let s = {};
    function I(n) {
        let I = [];
        if ((0, _.gv)(n, (e, r) => {
                let n = (0, _.mL)(r);
                if ((0, a.Q)(s, n)) {
                    let _ = c(e, r);
                    t.recordDroppedEvent('ratelimit_backoff', n, _);
                } else
                    I.push(e);
            }), 0 === I.length)
            return (0, i.WD)();
        let R = (0, _.Jd)(n[0], I), u = e => {
                (0, _.gv)(R, (r, n) => {
                    let a = c(r, n);
                    t.recordDroppedEvent(e, (0, _.mL)(n), a);
                });
            };
        return r.add(() => e({ body: (0, _.V$)(R, t.textEncoder) }).then(t => (void 0 !== t.statusCode && (t.statusCode < 200 || t.statusCode >= 300) && ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn(`Sentry responded with status code ${ t.statusCode } to sent event.`), s = (0, a.WG)(s, t), t), t => {
            throw u('network_error'), t;
        })).then(t => t, t => {
            if (t instanceof E.b)
                return ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.error('Skipped sending event because buffer is full.'), u('queue_overflow'), (0, i.WD)();
            throw t;
        });
    }
    return I.__sentry__baseTransport__ = !0, {
        send: I,
        flush: t => r.drain(t)
    };
}
function c(t, e) {
    if ('event' === e || 'transaction' === e)
        return Array.isArray(t) ? t[1] : void 0;
}
