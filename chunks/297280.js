r.d(e, {
    d: function () {
        return I;
    }
});
var n = r(876122), _ = r(793884), a = r(46834), i = r(829919), o = r(529866), E = r(862315), s = r(590171), c = r(643487);
class I {
    static __initStatic() {
        this.id = 'GlobalHandlers';
    }
    __init() {
        this.name = I.id;
    }
    __init2() {
        this._installFunc = {
            onerror: R,
            onunhandledrejection: u
        };
    }
    constructor(t) {
        I.prototype.__init.call(this), I.prototype.__init2.call(this), this._options = {
            onerror: !0,
            onunhandledrejection: !0,
            ...t
        };
    }
    setupOnce() {
        Error.stackTraceLimit = 50;
        let t = this._options;
        for (let e in t) {
            let r = this._installFunc[e];
            r && t[e] && (function (t) {
                ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log(`Global Handler attached: ${ t }`);
            }(e), r(), this._installFunc[e] = void 0);
        }
    }
}
function R() {
    (0, _.oq)('error', t => {
        let [e, r, n] = A();
        if (!e.getIntegration(I))
            return;
        let {
            msg: _,
            url: i,
            line: o,
            column: E,
            error: R
        } = t;
        if ((0, c.Wz)() || R && R.__sentry_own_request__)
            return;
        let u = void 0 === R && (0, a.HD)(_) ? function (t, e, r, n) {
            let _ = (0, a.VW)(t) ? t.message : t, i = 'Error', o = _.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
            return o && (i = o[1], _ = o[2]), T({
                exception: {
                    values: [{
                            type: i,
                            value: _
                        }]
                }
            }, e, r, n);
        }(_, i, o, E) : T((0, s.ME)(r, R || _, void 0, n, !1), i, o, E);
        u.level = 'error', l(e, R, u, 'onerror');
    });
}
function u() {
    (0, _.oq)('unhandledrejection', t => {
        let [e, r, n] = A();
        if (!e.getIntegration(I))
            return;
        let _ = t;
        try {
            'reason' in t ? _ = t.reason : 'detail' in t && 'reason' in t.detail && (_ = t.detail.reason);
        } catch (t) {
        }
        if ((0, c.Wz)() || _ && _.__sentry_own_request__)
            return !0;
        let i = (0, a.pt)(_) ? function (t) {
            return {
                exception: {
                    values: [{
                            type: 'UnhandledRejection',
                            value: `Non-Error promise rejection captured with value: ${ String(t) }`
                        }]
                }
            };
        }(_) : (0, s.ME)(r, _, void 0, n, !0);
        i.level = 'error', l(e, _, i, 'onunhandledrejection');
    });
}
I.__initStatic();
function T(t, e, r, n) {
    let _ = t.exception = t.exception || {}, o = _.values = _.values || [], E = o[0] = o[0] || {}, s = E.stacktrace = E.stacktrace || {}, c = s.frames = s.frames || [], I = isNaN(parseInt(n, 10)) ? void 0 : n, R = isNaN(parseInt(r, 10)) ? void 0 : r, u = (0, a.HD)(e) && e.length > 0 ? e : (0, i.l4)();
    return 0 === c.length && c.push({
        colno: I,
        filename: u,
        function: '?',
        in_app: !0,
        lineno: R
    }), t;
}
function l(t, e, r, n) {
    (0, E.EG)(r, {
        handled: !1,
        type: n
    }), t.captureEvent(r, { originalException: e });
}
function A() {
    let t = (0, n.Gd)(), e = t.getClient(), r = e && e.getOptions() || {
            stackParser: () => [],
            attachStacktrace: !1
        };
    return [
        t,
        r.stackParser,
        r.attachStacktrace
    ];
}
