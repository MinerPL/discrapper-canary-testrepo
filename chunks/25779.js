r.d(t, {
    e: function () {
        return c;
    },
    j: function () {
        return u;
    }
}),
    r(47120);
var n = r(509068),
    a = r(804410),
    o = r(408720),
    i = r(233517),
    _ = r(931327),
    E = r(97145);
let s = ['oppobrowser', 'realmebrowser', 'heytapbrowser'];
function c() {
    let e = window;
    return null != e.jQuery || null != e.$ || null != e.BetterDiscord || null != e.BdApi || null != e.rambox;
}
let I = (0, E.f)({
    maxBudgetMinute: 1,
    maxBudgetHour: 3
});
function u() {
    var e;
    n.S1({
        tunnel: '/error-reporting-proxy/web',
        dsn: 'https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984',
        autoSessionTracking: !1,
        environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
        release: 'discord_web-bc2b6876928fe1b9eab8fb3c6c361089d71a6fc8',
        beforeSend: function (e, t) {
            var r, n;
            return !((null != (r = e).exception && null != r.exception.values && r.exception.values.every((e) => null == e.stacktrace || (null != e.stacktrace.frames && 1 === e.stacktrace.frames.length)) && 'canary' !== window.GLOBAL_ENV.RELEASE_CHANNEL) || s.some((e) => window.navigator.appVersion.toLowerCase().indexOf(e) >= 0)) && !c() && !('Aborted' === (n = e).message || 'cancel captcha' === n.message) && I() ? e : null;
        },
        integrations: [
            a.k({
                onerror: !0,
                onunhandledrejection: !0
            }),
            o.f({
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
        i.YA('buildNumber', ((e = '319217'), '319217'));
    i.YA('builtAt', String('1723793199718'));
    let t = window.GLOBAL_ENV.SENTRY_TAGS;
    if (null != t && 'object' == typeof t) for (let e in t) i.YA(e, t[e]);
    return _;
}
