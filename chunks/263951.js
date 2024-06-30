r.d(e, {
    R: function () {
        return o;
    }
});
var n = r(529866), _ = r(868145), a = r(793884), i = r(607190);
function o(t, e = !0, r = !0) {
    let o;
    if (!i.m || !i.m.location) {
        ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n.kg.warn('Could not initialize routing instrumentation due to invalid location');
        return;
    }
    let E = i.m.location.href;
    e && (o = t({
        name: i.m.location.pathname,
        startTimestamp: _.Z1 ? _.Z1 / 1000 : void 0,
        op: 'pageload',
        metadata: { source: 'url' }
    })), r && (0, a.oq)('history', ({
        to: e,
        from: r
    }) => {
        if (void 0 === r && E && -1 !== E.indexOf(e)) {
            E = void 0;
            return;
        }
        r !== e && (E = void 0, o && (('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n.kg.log(`[Tracing] Finishing current transaction with op: ${ o.op }`), o.finish()), o = t({
            name: i.m.location.pathname,
            op: 'navigation',
            metadata: { source: 'url' }
        }));
    });
}
