r.d(t, {
    GJ: function () {
        return s;
    },
    ME: function () {
        return A;
    },
    aB: function () {
        return R;
    },
    dr: function () {
        return l;
    }
});
var n = r(263449),
    a = r(202811),
    o = r(573736),
    i = r(394798),
    _ = r(928541),
    E = r(370336);
function s(e, t) {
    let r = I(e, t),
        n = {
            type: t && t.name,
            value: (function (e) {
                let t = e && e.message;
                return t ? (t.error && 'string' == typeof t.error.message ? t.error.message : t) : 'No error message';
            })(t)
        };
    return r.length && (n.stacktrace = { frames: r }), void 0 === n.type && '' === n.value && (n.value = 'Unrecoverable error caught'), n;
}
function c(e, t) {
    return { exception: { values: [s(e, t)] } };
}
function I(e, t) {
    let r = t.stacktrace || t.stack || '',
        n = (function (e) {
            return e && u.test(e.message) ? 1 : 0;
        })(t),
        a = (function (e) {
            return 'number' == typeof e.framesToPop ? e.framesToPop : 0;
        })(t);
    try {
        return e(r, n, a);
    } catch (e) {}
    return [];
}
let u = /Minified React error #\d+;/i;
function l(e, t, r, n) {
    let a = A(e, t, (r && r.syntheticException) || void 0, n);
    return (0, i.EG)(a), (a.level = 'error'), r && r.event_id && (a.event_id = r.event_id), (0, _.WD)(a);
}
function R(e, t, r = 'info', n, a) {
    let o = T(e, t, (n && n.syntheticException) || void 0, a);
    return (o.level = r), n && n.event_id && (o.event_id = n.event_id), (0, _.WD)(o);
}
function A(e, t, r, _, u) {
    let l;
    if ((0, o.VW)(t) && t.error) return c(e, t.error);
    if ((0, o.TX)(t) || (0, o.fm)(t)) {
        if ('stack' in t) l = c(e, t);
        else {
            let n = t.name || ((0, o.TX)(t) ? 'DOMError' : 'DOMException'),
                a = t.message ? `${n}: ${t.message}` : n;
            (l = T(e, a, r, _)), (0, i.Db)(l, a);
        }
        return (
            'code' in t &&
                (l.tags = {
                    ...l.tags,
                    'DOMException.code': `${t.code}`
                }),
            l
        );
    }
    return (0, o.VZ)(t)
        ? c(e, t)
        : (0, o.PO)(t) || (0, o.cO)(t)
          ? ((l = (function (e, t, r, i) {
                let _ = (0, n.s3)(),
                    c = _ && _.getOptions().normalizeDepth,
                    u = (function (e) {
                        for (let t in e)
                            if (Object.prototype.hasOwnProperty.call(e, t)) {
                                let r = e[t];
                                if (r instanceof Error) return r;
                            }
                    })(t),
                    l = { __serialized__: (0, a.Qy)(t, c) };
                if (u)
                    return {
                        exception: { values: [s(e, u)] },
                        extra: l
                    };
                let R = {
                    exception: {
                        values: [
                            {
                                type: (0, o.cO)(t) ? t.constructor.name : i ? 'UnhandledRejection' : 'Error',
                                value: (function (e, { isUnhandledRejection: t }) {
                                    let r = (0, E.zf)(e),
                                        n = t ? 'promise rejection' : 'exception';
                                    if ((0, o.VW)(e)) return `Event \`ErrorEvent\` captured as ${n} with message \`${e.message}\``;
                                    if ((0, o.cO)(e)) {
                                        let t = (function (e) {
                                            try {
                                                let t = Object.getPrototypeOf(e);
                                                return t ? t.constructor.name : void 0;
                                            } catch (e) {}
                                        })(e);
                                        return `Event \`${t}\` (type=${e.type}) captured as ${n}`;
                                    }
                                    return `Object captured as ${n} with keys: ${r}`;
                                })(t, { isUnhandledRejection: i })
                            }
                        ]
                    },
                    extra: l
                };
                if (r) {
                    let t = I(e, r);
                    t.length && (R.exception.values[0].stacktrace = { frames: t });
                }
                return R;
            })(e, t, r, u)),
            (0, i.EG)(l, { synthetic: !0 }),
            l)
          : ((l = T(e, t, r, _)), (0, i.Db)(l, `${t}`, void 0), (0, i.EG)(l, { synthetic: !0 }), l);
}
function T(e, t, r, n) {
    let a = {};
    if (n && r) {
        let n = I(e, r);
        n.length &&
            (a.exception = {
                values: [
                    {
                        value: t,
                        stacktrace: { frames: n }
                    }
                ]
            });
    }
    if ((0, o.Le)(t)) {
        let { __sentry_template_string__: e, __sentry_template_values__: r } = t;
        return (
            (a.logentry = {
                message: e,
                params: r
            }),
            a
        );
    }
    return (a.message = t), a;
}
