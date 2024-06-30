r.d(e, {
    Uv: function () {
        return s;
    },
    sA: function () {
        return c;
    }
});
var n = r(876122), _ = r(529866), a = r(862315), i = r(643487), o = r(450436);
let E = !1;
function s(t) {
    return t ? c(t) : (('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && _.kg.log('[Profiling] Transaction is undefined, skipping profiling'), t);
}
function c(t) {
    let e;
    let r = i.m9.Profiler;
    if ('function' != typeof r)
        return ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && _.kg.log('[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object.'), t;
    if (E)
        return ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && _.kg.log('[Profiling] Profiling has been disabled for the duration of the current user session.'), t;
    let s = (0, n.Gd)().getClient(), c = s && s.getOptions();
    if (!c)
        return ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && _.kg.log('[Profiling] Profiling disabled, no options found.'), t;
    let I = c.profilesSampleRate;
    if (!(0, o.X2)(I))
        return ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && _.kg.warn('[Profiling] Discarding profile because of invalid sample rate.'), t;
    if (!I)
        return ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && _.kg.log('[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0'), t;
    if (!(!0 === I || Math.random() < I))
        return ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && _.kg.log(`[Profiling] Discarding profile because it's not included in the random sample (sampling rate = ${ Number(I) })`), t;
    let R = Math.floor(3000);
    try {
        e = new r({
            sampleInterval: 10,
            maxBufferSize: R
        });
    } catch (t) {
        ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && (_.kg.log('[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing \'Document-Policy\': \'js-profiling\' header.'), _.kg.log('[Profiling] Disabling profiling for current user session.')), E = !0;
    }
    if (!e)
        return t;
    ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && _.kg.log(`[Profiling] started profiling transaction: ${ t.name || t.description }`);
    let u = (0, a.DM)();
    async function T() {
        if (!t || !e)
            return null;
        let r = t.startChild({
            description: 'profiler.stop',
            op: 'profiler'
        });
        return e.stop().then(e => (r.finish(), l && (i.m9.clearTimeout(l), l = void 0), ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && _.kg.log(`[Profiling] stopped profiling of transaction: ${ t.name || t.description }`), e) ? ((0, o.M$)(u, e), null) : (('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && _.kg.log(`[Profiling] profiler returned null profile for: ${ t.name || t.description }`, 'this may indicate an overlapping transaction or a call to stopProfiling with a profile title that was never started'), null)).catch(t => (r.finish(), ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && _.kg.log('[Profiling] error while stopping profiler:', t), null));
    }
    let l = i.m9.setTimeout(() => {
            ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && _.kg.log('[Profiling] max profile duration elapsed, stopping profiling for:', t.name || t.description), T();
        }, 30000), A = t.finish.bind(t);
    return t.finish = function () {
        return t ? (T().then(() => {
            t.setContext('profile', { profile_id: u }), A();
        }, () => {
            A();
        }), t) : A();
    }, t;
}
