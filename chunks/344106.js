r.d(e, {
    QD: function () {
        return E;
    }
});
var n = r(529866), _ = r(862315), a = r(336344);
let i = [
        /^Script error\.?$/,
        /^Javascript error: Script error\.? on line 0$/
    ], o = [
        /^.*healthcheck.*$/,
        /^.*healthy.*$/,
        /^.*live.*$/,
        /^.*ready.*$/,
        /^.*heartbeat.*$/,
        /^.*\/health$/,
        /^.*\/healthz$/
    ];
class E {
    static __initStatic() {
        this.id = 'InboundFilters';
    }
    __init() {
        this.name = E.id;
    }
    constructor(t = {}) {
        this._options = t, E.prototype.__init.call(this);
    }
    setupOnce(t, e) {
        let r = t => {
            let r = e();
            if (r) {
                let e = r.getIntegration(E);
                if (e) {
                    let E = r.getClient(), c = E ? E.getOptions() : {};
                    return function (t, e) {
                        return e.ignoreInternal && function (t) {
                            try {
                                return 'SentryError' === t.exception.values[0].type;
                            } catch (t) {
                            }
                            return !1;
                        }(t) ? (('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n.kg.warn(`Event dropped due to being internal Sentry Error.
Event: ${ (0, _.jH)(t) }`), !0) : function (t, e) {
                            return !t.type && !!e && !!e.length && function (t) {
                                if (t.message)
                                    return [t.message];
                                if (t.exception) {
                                    let {values: e} = t.exception;
                                    try {
                                        let {
                                            type: t = '',
                                            value: r = ''
                                        } = e && e[e.length - 1] || {};
                                        return [
                                            `${ r }`,
                                            `${ t }: ${ r }`
                                        ];
                                    } catch (e) {
                                        ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n.kg.error(`Cannot extract message for event ${ (0, _.jH)(t) }`);
                                    }
                                }
                                return [];
                            }(t).some(t => (0, a.U0)(t, e));
                        }(t, e.ignoreErrors) ? (('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n.kg.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${ (0, _.jH)(t) }`), !0) : function (t, e) {
                            if ('transaction' !== t.type || !e || !e.length)
                                return !1;
                            let r = t.transaction;
                            return !!r && (0, a.U0)(r, e);
                        }(t, e.ignoreTransactions) ? (('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n.kg.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${ (0, _.jH)(t) }`), !0) : function (t, e) {
                            if (!e || !e.length)
                                return !1;
                            let r = s(t);
                            return !!r && (0, a.U0)(r, e);
                        }(t, e.denyUrls) ? (('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n.kg.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${ (0, _.jH)(t) }.
Url: ${ s(t) }`), !0) : !function (t, e) {
                            if (!e || !e.length)
                                return !0;
                            let r = s(t);
                            return !r || (0, a.U0)(r, e);
                        }(t, e.allowUrls) && (('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n.kg.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${ (0, _.jH)(t) }.
Url: ${ s(t) }`), !0);
                    }(t, function (t = {}, e = {}) {
                        return {
                            allowUrls: [
                                ...t.allowUrls || [],
                                ...e.allowUrls || []
                            ],
                            denyUrls: [
                                ...t.denyUrls || [],
                                ...e.denyUrls || []
                            ],
                            ignoreErrors: [
                                ...t.ignoreErrors || [],
                                ...e.ignoreErrors || [],
                                ...t.disableErrorDefaults ? [] : i
                            ],
                            ignoreTransactions: [
                                ...t.ignoreTransactions || [],
                                ...e.ignoreTransactions || [],
                                ...t.disableTransactionDefaults ? [] : o
                            ],
                            ignoreInternal: void 0 === t.ignoreInternal || t.ignoreInternal
                        };
                    }(e._options, c)) ? null : t;
                }
            }
            return t;
        };
        r.id = this.name, t(r);
    }
}
E.__initStatic();
function s(t) {
    try {
        let e;
        try {
            e = t.exception.values[0].stacktrace.frames;
        } catch (t) {
        }
        return e ? function (t = []) {
            for (let e = t.length - 1; e >= 0; e--) {
                let r = t[e];
                if (r && '<anonymous>' !== r.filename && '[native code]' !== r.filename)
                    return r.filename || null;
            }
            return null;
        }(e) : null;
    } catch (e) {
        return ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n.kg.error(`Cannot extract url for event ${ (0, _.jH)(t) }`), null;
    }
}
