let n;
r.d(e, {
    Cf: function () {
        return i;
    },
    RU: function () {
        return a;
    },
    kg: function () {
        return n;
    }
});
var _ = r(24716);
let a = [
    'debug',
    'info',
    'warn',
    'error',
    'log',
    'assert',
    'trace'
];
function i(t) {
    if (!('console' in _.n2))
        return t();
    let e = _.n2.console, r = {};
    a.forEach(t => {
        let n = e[t] && e[t].__sentry_original__;
        t in e && n && (r[t] = e[t], e[t] = n);
    });
    try {
        return t();
    } finally {
        Object.keys(r).forEach(t => {
            e[t] = r[t];
        });
    }
}
function o() {
    let t = !1, e = {
            enable: () => {
                t = !0;
            },
            disable: () => {
                t = !1;
            }
        };
    return 'undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? a.forEach(r => {
        e[r] = (...e) => {
            t && i(() => {
                _.n2.console[r](`Sentry Logger [${ r }]:`, ...e);
            });
        };
    }) : a.forEach(t => {
        e[t] = () => void 0;
    }), e;
}
'undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? n = (0, _.YO)('logger', o) : n = o();
