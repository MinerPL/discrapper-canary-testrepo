let n, _;
r.d(e, {
    Fv: function () {
        return S;
    },
    PR: function () {
        return p;
    },
    f7: function () {
        return f;
    },
    sn: function () {
        return D;
    }
});
var a = r(147816), i = r(868145), o = r(829919), E = r(529866), s = r(607190), c = r(540161), I = r(282572), R = r(301072), u = r(233863), T = r(544457), l = r(72609);
function A(t) {
    return t / 1000;
}
function N() {
    return s.m && s.m.addEventListener && s.m.performance;
}
let d = 0, O = {};
function p() {
    let t = N();
    if (t && i.Z1) {
        t.mark && s.m.performance.mark('sentry-tracing-init'), function () {
            (0, I.F)(t => {
                let e = t.entries.pop();
                if (!e)
                    return;
                let r = A(i.Z1), n = A(e.startTime);
                ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && E.kg.log('[Measurements] Adding FID'), O.fid = {
                    value: t.value,
                    unit: 'millisecond'
                }, O['mark.fid'] = {
                    value: r + n,
                    unit: 'second'
                };
            });
        }();
        let e = function () {
                return (0, c.m)(t => {
                    let e = t.entries.pop();
                    if (!!e)
                        ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && E.kg.log('[Measurements] Adding CLS'), O.cls = {
                            value: t.value,
                            unit: ''
                        }, _ = e;
                });
            }(), r = function () {
                return (0, R.N)(t => {
                    let e = t.entries.pop();
                    if (!!e)
                        ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && E.kg.log('[Measurements] Adding LCP'), O.lcp = {
                            value: t.value,
                            unit: 'millisecond'
                        }, n = e;
                });
            }();
        return () => {
            e && e(), r && r();
        };
    }
    return () => void 0;
}
function S() {
    (0, T.N)('longtask', t => {
        for (let e of t) {
            let t = (0, a.x1)();
            if (!t)
                return;
            let r = A(i.Z1 + e.startTime), n = A(e.duration);
            t.startChild({
                description: 'Main UI thread blocked',
                op: 'ui.long-task',
                startTimestamp: r,
                endTimestamp: r + n
            });
        }
    });
}
function D() {
    (0, T.N)('event', t => {
        for (let e of t) {
            let t = (0, a.x1)();
            if (!t)
                return;
            if ('click' === e.name) {
                let r = A(i.Z1 + e.startTime), n = A(e.duration);
                t.startChild({
                    description: (0, o.Rt)(e.target),
                    op: `ui.interaction.${ e.name }`,
                    startTimestamp: r,
                    endTimestamp: r + n
                });
            }
        }
    }, { durationThreshold: 0 });
}
function f(t) {
    let e, r;
    let a = N();
    if (!a || !s.m.performance.getEntries || !i.Z1)
        return;
    ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && E.kg.log('[Tracing] Adding & adjusting spans using Performance API');
    let c = A(i.Z1), I = a.getEntries();
    if (I.slice(d).forEach(n => {
            let _ = A(n.startTime), a = A(n.duration);
            if ('navigation' !== t.op || !(c + _ < t.startTimestamp))
                switch (n.entryType) {
                case 'navigation':
                    (function (t, e, r) {
                        [
                            'unloadEvent',
                            'redirect',
                            'domContentLoadedEvent',
                            'loadEvent',
                            'connect'
                        ].forEach(n => {
                            L(t, e, n, r);
                        }), L(t, e, 'secureConnection', r, 'TLS/SSL', 'connectEnd'), L(t, e, 'fetch', r, 'cache', 'domainLookupStart'), L(t, e, 'domainLookup', r, 'DNS'), function (t, e, r) {
                            (0, l.H)(t, {
                                op: 'browser',
                                description: 'request',
                                startTimestamp: r + A(e.requestStart),
                                endTimestamp: r + A(e.responseEnd)
                            }), (0, l.H)(t, {
                                op: 'browser',
                                description: 'response',
                                startTimestamp: r + A(e.responseStart),
                                endTimestamp: r + A(e.responseEnd)
                            });
                        }(t, e, r);
                    }(t, n, c), e = c + A(n.responseStart), r = c + A(n.requestStart));
                    break;
                case 'mark':
                case 'paint':
                case 'measure': {
                        (function (t, e, r, n, _) {
                            let a = _ + r;
                            (0, l.H)(t, {
                                description: e.name,
                                endTimestamp: a + n,
                                op: e.entryType,
                                startTimestamp: a
                            });
                        }(t, n, _, a, c));
                        let e = (0, u.Y)(), r = n.startTime < e.firstHiddenTime;
                        'first-paint' === n.name && r && (('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && E.kg.log('[Measurements] Adding FP'), O.fp = {
                            value: n.startTime,
                            unit: 'millisecond'
                        }), 'first-contentful-paint' === n.name && r && (('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && E.kg.log('[Measurements] Adding FCP'), O.fcp = {
                            value: n.startTime,
                            unit: 'millisecond'
                        });
                        break;
                    }
                case 'resource': {
                        let e = n.name.replace(s.m.location.origin, '');
                        (function (t, e, r, n, _, a) {
                            if ('xmlhttprequest' === e.initiatorType || 'fetch' === e.initiatorType)
                                return;
                            let i = {};
                            'transferSize' in e && (i['http.response_transfer_size'] = e.transferSize), 'encodedBodySize' in e && (i['http.response_content_length'] = e.encodedBodySize), 'decodedBodySize' in e && (i['http.decoded_response_content_length'] = e.decodedBodySize), 'renderBlockingStatus' in e && (i['resource.render_blocking_status'] = e.renderBlockingStatus);
                            let o = a + n;
                            (0, l.H)(t, {
                                description: r,
                                endTimestamp: o + _,
                                op: e.initiatorType ? `resource.${ e.initiatorType }` : 'resource.other',
                                startTimestamp: o,
                                data: i
                            });
                        }(t, n, e, _, a, c));
                    }
                }
        }), d = Math.max(I.length - 1, 0), function (t) {
            let e = s.m.navigator;
            if (!e)
                return;
            let r = e.connection;
            r && (r.effectiveType && t.setTag('effectiveConnectionType', r.effectiveType), r.type && t.setTag('connectionType', r.type), (0, l.n)(r.rtt) && (O['connection.rtt'] = {
                value: r.rtt,
                unit: 'millisecond'
            })), (0, l.n)(e.deviceMemory) && t.setTag('deviceMemory', `${ e.deviceMemory } GB`), (0, l.n)(e.hardwareConcurrency) && t.setTag('hardwareConcurrency', String(e.hardwareConcurrency));
        }(t), 'pageload' === t.op) {
        'number' == typeof e && (('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && E.kg.log('[Measurements] Adding TTFB'), O.ttfb = {
            value: (e - t.startTimestamp) * 1000,
            unit: 'millisecond'
        }, 'number' == typeof r && r <= e && (O['ttfb.requestTime'] = {
            value: (e - r) * 1000,
            unit: 'millisecond'
        })), [
            'fcp',
            'fp',
            'lcp'
        ].forEach(e => {
            if (!O[e] || c >= t.startTimestamp)
                return;
            let r = O[e].value, n = Math.abs((c + A(r) - t.startTimestamp) * 1000), _ = n - r;
            ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && E.kg.log(`[Measurements] Normalized ${ e } from ${ r } to ${ n } (${ _ })`), O[e].value = n;
        });
        let a = O['mark.fid'];
        a && O.fid && ((0, l.H)(t, {
            description: 'first input delay',
            endTimestamp: a.value + A(O.fid.value),
            op: 'ui.action',
            startTimestamp: a.value
        }), delete O['mark.fid']), !('fcp' in O) && delete O.cls, Object.keys(O).forEach(e => {
            t.setMeasurement(e, O[e].value, O[e].unit);
        }), function (t) {
            n && (('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && E.kg.log('[Measurements] Adding LCP Data'), n.element && t.setTag('lcp.element', (0, o.Rt)(n.element)), n.id && t.setTag('lcp.id', n.id), n.url && t.setTag('lcp.url', n.url.trim().slice(0, 200)), t.setTag('lcp.size', n.size)), _ && _.sources && (('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && E.kg.log('[Measurements] Adding CLS Data'), _.sources.forEach((e, r) => t.setTag(`cls.source.${ r + 1 }`, (0, o.Rt)(e.node))));
        }(t);
    }
    n = void 0, _ = void 0, O = {};
}
function L(t, e, r, n, _, a) {
    let i = a ? e[a] : e[`${ r }End`], o = e[`${ r }Start`];
    if (!!o && !!i)
        (0, l.H)(t, {
            op: 'browser',
            description: _ || r,
            startTimestamp: n + A(o),
            endTimestamp: n + A(i)
        });
}
