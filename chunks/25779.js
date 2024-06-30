r.d(e, {
    e: function () {
        return E;
    },
    j: function () {
        return c;
    }
}), r(47120);
var n = r(846297), _ = r(887117), a = r(138122), i = r(97145);
let o = [
    'oppobrowser',
    'realmebrowser',
    'heytapbrowser'
];
function E() {
    let t = window;
    return null != t.jQuery || null != t.$ || null != t.BetterDiscord || null != t.BdApi || null != t.rambox;
}
let s = (0, i.f)({
    maxBudgetMinute: 1,
    maxBudgetHour: 3
});
function c() {
    var t;
    n.S1({
        tunnel: '/error-reporting-proxy/web',
        dsn: 'https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984',
        autoSessionTracking: !1,
        environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
        release: 'discord_web-cb6e309d60fdefff13d04d1941b1c093fdc265f3',
        beforeSend: t => {
            var e, r;
            return !(null != (e = t).exception && null != e.exception.values && e.exception.values.every(t => null == t.stacktrace || null != t.stacktrace.frames && 1 === t.stacktrace.frames.length) && 'canary' !== window.GLOBAL_ENV.RELEASE_CHANNEL || o.some(t => window.navigator.appVersion.toLowerCase().indexOf(t) >= 0)) && !E() && !('Aborted' === (r = t).message || 'cancel captcha' === r.message) && s() ? t : null;
        },
        integrations: [
            new _.Integrations.GlobalHandlers({
                onerror: !0,
                onunhandledrejection: !0
            }),
            new _.Integrations.Breadcrumbs({
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0
            })
        ],
        ignoreErrors: [
            'EADDRINUSE',
            'BetterDiscord',
            'EnhancedDiscord',
            'Powercord',
            'RecipeWebview',
            'jQuery',
            'localStorage',
            'has already been declared',
            'Cannot call hover while not dragging.',
            'Cannot call beginDrag while dragging.',
            'getHostNode',
            'setupCSS',
            'on missing remote object',
            'ChunkLoadError',
            'Cannot find module \'discord_utils\'',
            'Failed to setup Krisp module',
            'Error invoking remote method \'DISCORD_NATIVE_MODULES_INSTALL\': Error: Module updater is not available!',
            'Non-Error promise rejection captured with keys:',
            'Request has been terminated',
            'Cannot resolve a Slate point from DOM point',
            'Failed to fetch',
            'no suitable image found',
            'ResizeObserver loop limit exceeded',
            'ResizeObserver loop completed with undelivered notifications.',
            'The play() request was interrupted',
            'could not play audio',
            'notosans-400-normalitalic'
        ],
        denyUrls: [
            /recaptcha/,
            /mobilediscord\.com/,
            /betterdiscord:\/\//
        ]
    }), a.YA('buildNumber', (t = '306479', '306479'));
    a.YA('builtAt', String('1719715929159'));
    let e = window.GLOBAL_ENV.SENTRY_TAGS;
    if (null != e && 'object' == typeof e)
        for (let t in e)
            a.YA(t, e[t]);
    return _;
}
