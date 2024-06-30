r.d(e, {
    GJ: function () {
        return s;
    },
    ME: function () {
        return l;
    },
    aB: function () {
        return T;
    },
    dr: function () {
        return u;
    }
});
var n = r(876122), _ = r(46834), a = r(10674), i = r(862315), o = r(880803), E = r(442853);
function s(t, e) {
    let r = I(t, e), n = {
            type: e && e.name,
            value: function (t) {
                let e = t && t.message;
                return e ? e.error && 'string' == typeof e.error.message ? e.error.message : e : 'No error message';
            }(e)
        };
    return r.length && (n.stacktrace = { frames: r }), void 0 === n.type && '' === n.value && (n.value = 'Unrecoverable error caught'), n;
}
function c(t, e) {
    return { exception: { values: [s(t, e)] } };
}
function I(t, e) {
    let r = e.stacktrace || e.stack || '', n = function (t) {
            if (t) {
                if ('number' == typeof t.framesToPop)
                    return t.framesToPop;
                if (R.test(t.message))
                    return 1;
            }
            return 0;
        }(e);
    try {
        return t(r, n);
    } catch (t) {
    }
    return [];
}
let R = /Minified React error #\d+;/i;
function u(t, e, r, n) {
    let _ = l(t, e, r && r.syntheticException || void 0, n);
    return (0, i.EG)(_), _.level = 'error', r && r.event_id && (_.event_id = r.event_id), (0, o.WD)(_);
}
function T(t, e, r = 'info', n, _) {
    let a = A(t, e, n && n.syntheticException || void 0, _);
    return a.level = r, n && n.event_id && (a.event_id = n.event_id), (0, o.WD)(a);
}
function l(t, e, r, o, s) {
    let R;
    if ((0, _.VW)(e) && e.error)
        return c(t, e.error);
    if ((0, _.TX)(e) || (0, _.fm)(e)) {
        if ('stack' in e)
            R = c(t, e);
        else {
            let n = e.name || ((0, _.TX)(e) ? 'DOMError' : 'DOMException'), a = e.message ? `${ n }: ${ e.message }` : n;
            R = A(t, a, r, o), (0, i.Db)(R, a);
        }
        return 'code' in e && (R.tags = {
            ...R.tags,
            'DOMException.code': `${ e.code }`
        }), R;
    }
    return (0, _.VZ)(e) ? c(t, e) : (0, _.PO)(e) || (0, _.cO)(e) ? (R = function (t, e, r, i) {
        let o = (0, n.Gd)().getClient(), s = o && o.getOptions().normalizeDepth, c = {
                exception: {
                    values: [{
                            type: (0, _.cO)(e) ? e.constructor.name : i ? 'UnhandledRejection' : 'Error',
                            value: function (t, {isUnhandledRejection: e}) {
                                let r = (0, E.zf)(t), n = e ? 'promise rejection' : 'exception';
                                if ((0, _.VW)(t))
                                    return `Event \`ErrorEvent\` captured as ${ n } with message \`${ t.message }\``;
                                if ((0, _.cO)(t)) {
                                    let e = function (t) {
                                        try {
                                            let e = Object.getPrototypeOf(t);
                                            return e ? e.constructor.name : void 0;
                                        } catch (t) {
                                        }
                                    }(t);
                                    return `Event \`${ e }\` (type=${ t.type }) captured as ${ n }`;
                                }
                                return `Object captured as ${ n } with keys: ${ r }`;
                            }(e, { isUnhandledRejection: i })
                        }]
                },
                extra: { __serialized__: (0, a.Qy)(e, s) }
            };
        if (r) {
            let e = I(t, r);
            e.length && (c.exception.values[0].stacktrace = { frames: e });
        }
        return c;
    }(t, e, r, s), (0, i.EG)(R, { synthetic: !0 }), R) : (R = A(t, e, r, o), (0, i.Db)(R, `${ e }`, void 0), (0, i.EG)(R, { synthetic: !0 }), R);
}
function A(t, e, r, n) {
    let _ = { message: e };
    if (n && r) {
        let n = I(t, r);
        n.length && (_.exception = {
            values: [{
                    value: e,
                    stacktrace: { frames: n }
                }]
        });
    }
    return _;
}
