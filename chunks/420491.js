let r;
var i,
    a,
    s,
    o,
    l = n(259443),
    u = n(442837),
    c = n(570140),
    d = n(818083),
    _ = n(353926),
    E = n(988348),
    f = n(987338);
let h = (0, d.B)({
        id: '2024-03_gateway_zstd',
        label: 'Gateway Zstd compression',
        kind: 'user',
        defaultConfig: {
            useZstd: !1,
            doVerification: !1
        },
        treatments: [
            {
                id: f.NZ.CONTROL,
                label: 'Control (verification)',
                config: {
                    useZstd: !1,
                    doVerification: !0
                }
            },
            {
                id: 1,
                label: 'Use Zstd',
                config: {
                    useZstd: !0,
                    doVerification: !1
                }
            },
            {
                id: 2,
                label: 'No Zstd, no verification',
                config: {
                    useZstd: !1,
                    doVerification: !1
                }
            },
            {
                id: 3,
                label: 'Use Zstd (2)',
                config: {
                    useZstd: !0,
                    doVerification: !1
                }
            }
        ]
    }),
    p = (0, d.B)({
        id: '2024-04_gateway_zstd_verification',
        label: 'Gateway Zstd Verification',
        kind: 'user',
        defaultConfig: { useZstd: !1 },
        treatments: [
            {
                id: 1,
                label: 'Use Zstd',
                config: { useZstd: !0 }
            }
        ]
    }),
    m = new l.Y('GatewayZstdStore');
let I = !1,
    T = 0,
    g = !0;
function S() {
    return null == r && (r = (0, E.NF)() && (0, E.MF)()), r;
}
function A() {
    if (I) {
        m.info('Ignoring zstd experiment config because we fell back to zlib');
        return;
    }
    let e = h.getCurrentConfig({ location: 'GatewayZstdStore' }),
        t = e.useZstd;
    e.doVerification && (t = p.getCurrentConfig({ location: 'GatewayZstdStore' }).useZstd), N(t), (T = 0);
}
function N(e) {
    if (e && !(0, E.NF)()) {
        m.warn('Attempting to enable zstd but it is not supported');
        return;
    }
    (0, E.CG)(e), e !== r && m.info('Setting Zstd to '.concat(e)), (r = e);
}
class v extends (o = u.ZP.Store) {
    initialize() {
        this.waitFor(_.Z);
    }
    shouldUseZstd() {
        return S();
    }
    enableFailureTracking() {
        g = !0;
    }
    disableFailureTracking() {
        g = !1;
    }
}
(s = 'GatewayZstdStore'),
    (a = 'displayName') in (i = v)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new v(c.Z, {
        CONNECTION_OPEN: A,
        CONNECTION_INTERRUPTED: function (e) {
            let { code: t } = e;
            if (!!S() && !!g && 1000 !== t) (T += 1) > 3 && (m.error('Disabling zstd due to consecutive errors'), N(!1), (I = !0));
        },
        CONNECTION_RESUMED: A
    }));
