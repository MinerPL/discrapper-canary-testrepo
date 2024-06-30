r.d(e, {
    AJ: function () {
        return S;
    },
    M$: function () {
        return C;
    },
    X2: function () {
        return f;
    },
    db: function () {
        return p;
    },
    nm: function () {
        return L;
    },
    wh: function () {
        return h;
    }
});
var n, _ = r(28434), a = r(876122), i = r(529866), o = r(862315), E = r(868145), s = r(50074), c = r(24716), I = r(643487);
let R = String(0), u = '', T = '', l = '', A = I.m9.navigator && I.m9.navigator.userAgent || '', N = '', d = I.m9.navigator && I.m9.navigator.language || I.m9.navigator && I.m9.navigator.languages && I.m9.navigator.languages['0'] || '', O = I.m9.navigator && I.m9.navigator.userAgentData;
if ('object' == typeof (n = O) && null !== n && 'getHighEntropyValues' in n)
    O.getHighEntropyValues([
        'architecture',
        'model',
        'platform',
        'platformVersion',
        'fullVersionList'
    ]).then(t => {
        if (u = t.platform || '', l = t.architecture || '', N = t.model || '', T = t.platformVersion || '', t.fullVersionList && t.fullVersionList.length > 0) {
            let e = t.fullVersionList[t.fullVersionList.length - 1];
            A = `${ e.brand } ${ e.version }`;
        }
    }).catch(t => void 0);
function p(t, e) {
    if (!e.length)
        return t;
    for (let r of e)
        t[1].push([
            { type: 'profile' },
            r
        ]);
    return t;
}
function S(t) {
    let e = [];
    return (0, s.gv)(t, (t, r) => {
        if ('transaction' === r)
            for (let r = 1; r < t.length; r++) {
                let n = t[r];
                n && n.contexts && n.contexts.profile && n.contexts.profile.profile_id && e.push(t[r]);
            }
    }), e;
}
let D = new WeakMap();
function f(t) {
    return 'number' != typeof t && 'boolean' != typeof t || 'number' == typeof t && isNaN(t) ? (('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.warn(`[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${ JSON.stringify(t) } of type ${ JSON.stringify(typeof t) }.`), !1) : !0 === t || !1 === t || !(t < 0) && !(t > 1) || (('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.warn(`[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ${ t }.`), !1);
}
function L(t, e, r) {
    var n;
    return ((n = e).samples.length < 2 ? (('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log('[Profiling] Discarding profile because it contains less than 2 samples'), !1) : !!n.frames.length || (('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log('[Profiling] Discarding profile because it contains no frames'), !1)) ? function (t, e, r) {
        if ('transaction' !== t.type)
            throw TypeError('Profiling events may only be attached to transactions, this should never occur.');
        if (null == e)
            throw TypeError(`Cannot construct profiling event envelope without a valid profile. Got ${ e } instead.`);
        let n = function (t) {
                let e = t && t.contexts && t.contexts.trace && t.contexts.trace.trace_id;
                return ('string' == typeof e && 32 !== e.length && ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`[Profiling] Invalid traceId: ${ e } on profiled event`), 'string' != typeof e) ? '' : e;
            }(t), s = function (t) {
                return 'thread_metadata' in t ? t : function (t) {
                    let e;
                    let r = 0, n = {
                            samples: [],
                            stacks: [],
                            frames: [],
                            thread_metadata: { [R]: { name: 'main' } }
                        };
                    if (!t.samples.length)
                        return n;
                    let _ = t.samples[0].timestamp, a = 'number' == typeof performance.timeOrigin ? performance.timeOrigin : E.Z1 || 0, i = a - (E.Z1 || a);
                    for (let a = 0; a < t.samples.length; a++) {
                        let o = t.samples[a];
                        if (void 0 === o.stackId) {
                            void 0 === e && (e = r, n.stacks[e] = [], r++), n.samples[a] = {
                                elapsed_since_start_ns: ((o.timestamp + i - _) * 1000000).toFixed(0),
                                stack_id: e,
                                thread_id: R
                            };
                            continue;
                        }
                        let E = t.stacks[o.stackId], s = [];
                        for (; E;) {
                            s.push(E.frameId);
                            let e = t.frames[E.frameId];
                            void 0 === n.frames[E.frameId] && (n.frames[E.frameId] = {
                                function: e.name,
                                abs_path: 'number' == typeof e.resourceId ? t.resources[e.resourceId] : void 0,
                                lineno: e.line,
                                colno: e.column
                            }), E = void 0 === E.parentId ? void 0 : t.stacks[E.parentId];
                        }
                        let c = {
                            elapsed_since_start_ns: ((o.timestamp + i - _) * 1000000).toFixed(0),
                            stack_id: r,
                            thread_id: R
                        };
                        n.stacks[r] = s, n.samples[a] = c, r++;
                    }
                    return n;
                }(t);
            }(e), O = 'number' == typeof t.start_timestamp ? 1000 * t.start_timestamp : Date.now(), p = 'number' == typeof t.timestamp ? 1000 * t.timestamp : Date.now();
        return {
            event_id: r,
            timestamp: new Date(O).toISOString(),
            platform: 'javascript',
            version: '1',
            release: t.release || '',
            environment: t.environment || _.J,
            runtime: {
                name: 'javascript',
                version: I.m9.navigator.userAgent
            },
            os: {
                name: u,
                version: T,
                build_number: A
            },
            device: {
                locale: d,
                model: N,
                manufacturer: A,
                architecture: l,
                is_emulator: !1
            },
            debug_meta: {
                images: function (t) {
                    let e;
                    let r = c.n2._sentryDebugIds;
                    if (!r)
                        return [];
                    let n = (0, a.Gd)();
                    if (!n)
                        return [];
                    let _ = n.getClient();
                    if (!_)
                        return [];
                    let i = _.getOptions();
                    if (!i)
                        return [];
                    let o = i.stackParser;
                    if (!o)
                        return [];
                    let E = D.get(o);
                    E ? e = E : (e = new Map(), D.set(o, e));
                    let s = Object.keys(r).reduce((t, n) => {
                            let _;
                            let a = e.get(n);
                            a ? _ = a : (_ = o(n), e.set(n, _));
                            for (let e = _.length - 1; e >= 0; e--) {
                                let a = _[e], i = a && a.filename;
                                if (a && i) {
                                    t[i] = r[n];
                                    break;
                                }
                            }
                            return t;
                        }, {}), I = [];
                    for (let e of t)
                        e && s[e] && I.push({
                            type: 'sourcemap',
                            code_file: e,
                            debug_id: s[e]
                        });
                    return I;
                }(e.resources)
            },
            profile: s,
            transactions: [{
                    name: t.transaction || '',
                    id: t.event_id || (0, o.DM)(),
                    trace_id: n,
                    active_thread_id: R,
                    relative_start_ns: '0',
                    relative_end_ns: ((p - O) * 1000000).toFixed(0)
                }]
        };
    }(r, e, t) : null;
}
let h = new Map();
function C(t, e) {
    if (h.set(t, e), h.size > 30) {
        let t = h.keys().next().value;
        h.delete(t);
    }
}
