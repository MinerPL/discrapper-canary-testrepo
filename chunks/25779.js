a.d(e, { j: () => u }), a(47120);
var r = a(509068),
    n = a(804410),
    _ = a(408720),
    o = a(233517),
    i = a(931327),
    c = a(903772),
    s = a(97145);
let E = ['oppobrowser', 'realmebrowser', 'heytapbrowser'],
    l = (0, s.f)({
        maxBudgetMinute: 1,
        maxBudgetHour: 3
    });
function u() {
    r.S1({
        tunnel: '/error-reporting-proxy/web',
        dsn: 'https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984',
        autoSessionTracking: !1,
        environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
        release: 'discord_web-7a34ac95b4f9cbcb99b12c3b87b30ed4ff73b5d0',
        beforeSend: function (t, e) {
            return !((null != t.exception && null != t.exception.values && t.exception.values.every((t) => null == t.stacktrace || (null != t.stacktrace.frames && 1 === t.stacktrace.frames.length)) && 'canary' !== window.GLOBAL_ENV.RELEASE_CHANNEL) || E.some((t) => window.navigator.appVersion.toLowerCase().indexOf(t) >= 0)) && !(0, c.e)() && 'Aborted' !== t.message && 'cancel captcha' !== t.message && l() ? t : null;
        },
        integrations: [
            n.k({
                onerror: !0,
                onunhandledrejection: !0
            }),
            _.f({
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0
            })
        ],
        ignoreErrors: ['EADDRINUSE', 'BetterDiscord', 'EnhancedDiscord', 'Powercord', 'RecipeWebview', 'jQuery', 'localStorage', 'has already been declared', 'Cannot call hover while not dragging.', 'Cannot call beginDrag while dragging.', 'getHostNode', 'setupCSS', 'on missing remote object', 'ChunkLoadError', "Cannot find module 'discord_utils'", 'Failed to setup Krisp module', "Error invoking remote method 'DISCORD_NATIVE_MODULES_INSTALL': Error: Module updater is not available!", 'Non-Error promise rejection captured with keys:', 'Request has been terminated', 'Cannot resolve a Slate point from DOM point', 'Failed to fetch', 'no suitable image found', 'ResizeObserver loop limit exceeded', 'ResizeObserver loop completed with undelivered notifications.', 'The play() request was interrupted', 'could not play audio', 'notosans-400-normalitalic'],
        denyUrls: [/recaptcha/, /mobilediscord\.com/, /betterdiscord:\/\//]
    }),
        o.YA('buildNumber', '385814'),
        o.YA('builtAt', String('1743706574859'));
    let t = window.GLOBAL_ENV.SENTRY_TAGS;
    if (null != t && 'object' == typeof t) for (let e in t) o.YA(e, t[e]);
    return i;
}
