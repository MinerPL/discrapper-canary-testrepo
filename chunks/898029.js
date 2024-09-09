r.d(t, {
    E: function () {
        return c;
    }
});
var n = r(573736),
    a = r(202811),
    o = r(370336),
    i = r(886115),
    _ = r(622916),
    E = r(151122),
    s = r(255768);
let c = (0, E._I)((e = {}) => {
    let { depth: t = 3, captureErrorCause: r = !0 } = e;
    return {
        name: 'ExtraErrorData',
        processEvent(e, E, c) {
            let { maxValueLength: I = 250 } = c.getOptions();
            return (function (e, t = {}, r, E, c) {
                if (!t.originalException || !(0, n.VZ)(t.originalException)) return e;
                let I = t.originalException.name || t.originalException.constructor.name,
                    u = (function (e, t, r) {
                        try {
                            let a = ['name', 'message', 'stack', 'line', 'column', 'fileName', 'lineNumber', 'columnNumber', 'toJSON'],
                                o = {};
                            for (let t of Object.keys(e)) {
                                if (-1 !== a.indexOf(t)) continue;
                                let _ = e[t];
                                o[t] = (0, n.VZ)(_) || 'string' == typeof _ ? (0, i.$G)(`${_}`, r) : _;
                            }
                            if ((t && void 0 !== e.cause && (o.cause = (0, n.VZ)(e.cause) ? e.cause.toString() : e.cause), 'function' == typeof e.toJSON)) {
                                let t = e.toJSON();
                                for (let e of Object.keys(t)) {
                                    let r = t[e];
                                    o[e] = (0, n.VZ)(r) ? r.toString() : r;
                                }
                            }
                            return o;
                        } catch (e) {
                            s.X && _.kg.error('Unable to extract extra data from the Error object:', e);
                        }
                        return null;
                    })(t.originalException, E, c);
                if (u) {
                    let t = { ...e.contexts },
                        i = (0, a.Fv)(u, r);
                    return (
                        (0, n.PO)(i) && ((0, o.xp)(i, '__sentry_skip_normalization__', !0), (t[I] = i)),
                        {
                            ...e,
                            contexts: t
                        }
                    );
                }
                return e;
            })(e, E, t, r, I);
        }
    };
});
