t.r(n),
    t.d(n, {
        VerifyAccountLoading: function () {
            return E;
        },
        default: function () {
            return _;
        }
    }),
    t(47120),
    t(757143);
var r = t(200651),
    c = t(192379),
    o = t(512969),
    l = t(604039),
    i = t(481060),
    a = t(457330),
    u = t(733427),
    s = t(169382),
    f = t(726542),
    d = t(536285),
    p = t(591759),
    O = t(656649),
    C = t(981631),
    N = t(388032),
    S = t(289720);
let g = null != window.opener;
function _() {
    var e;
    let n = (0, o.k6)(),
        t = (0, s.l)(),
        i = t.get('code'),
        N = t.get('oauth_verifier'),
        S = null !== (e = t.get('state')) && void 0 !== e ? e : '',
        _ = t.get('loading'),
        { type: v } = (0, o.UO)(),
        m = (0, O.vJ)(v),
        [A, R] = c.useState(!1),
        b = (0, u.Z)(),
        h = null == N ? (null != i ? i : '') : N;
    return (c.useEffect(() => {
        let e;
        if (null != _) return;
        for (let n of t.keys()) {
            if (!!n.startsWith('openid.')) null == e && (e = {}), (e[n] = t.get(n));
        }
        let r = (0, O.vJ)(v);
        null != r &&
            a.Z.sessionHandoff(r, S, h, e)
                .then(() => {
                    R(!0);
                })
                .catch(async () => {
                    let r = (e) => {
                            let { status: r, body: c } = e;
                            if (null != l) {
                                if (null == c ? void 0 : c.redirect) {
                                    window.location = c.redirect;
                                    return;
                                }
                                if ([200, 204].includes(r)) {
                                    n.replace(C.Z5c.CONNECTIONS_SUCCESS(l)), g && window.close();
                                    return;
                                }
                                null != c.code && t.append('error-code', c.code), n.replace(''.concat(C.Z5c.CONNECTIONS_ERROR(l), '?').concat(t.toString()));
                            }
                        },
                        c = {
                            code: h,
                            openid_params: e,
                            state: S
                        };
                    async function o(e) {
                        if (null != l && f.Z.isSupported(l))
                            try {
                                let n = await a.Z.callback(l, c, e);
                                r(n);
                            } catch (e) {
                                r(e);
                            }
                    }
                    if (g) {
                        await o(!1);
                        return;
                    }
                    let l = (0, O.vJ)(v);
                    try {
                        let e = await d.default.request(C.Etm.CONNECTIONS_CALLBACK, {
                            ...c,
                            providerType: l
                        });
                        r(e);
                    } catch (e) {
                        (null == e ? void 0 : e.code) !== C.lTL.BAD_REQUEST_FOR_PROVIDER && (await o('RPCError' !== e.name));
                    }
                    d.default.disconnect();
                });
    }, [h, n, _, v, t, S]),
    c.useEffect(() => {
        let e;
        if (!A) return;
        let t = 0;
        async function r() {
            if (null == m) return;
            let { handoff_status: c, success_redirect: o } = (await a.Z.getHandoffStatus(m, S)).body;
            if (c === l.g.HANDOFF_SUCCESS) {
                if (null == p.Z.toURLSafe(o)) return n.replace(C.Z5c.CONNECTIONS_SUCCESS(m));
                window.location = o;
                return;
            }
            if (c === l.g.HANDOFF_ERROR || t >= 10) return n.replace(C.Z5c.CONNECTIONS_ERROR(m));
            e = setTimeout(() => {
                b() && ((t += 1), r());
            }, 1000);
        }
        return (
            r(),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [b, n, m, A, S]),
    null != m && f.Z.isSupported(m))
        ? (0, r.jsx)(E, { platformType: m })
        : null;
}
function E(e) {
    let { platformType: n } = e,
        t = f.Z.get(n);
    return (0, r.jsxs)(O.UV, {
        platformType: n,
        children: [
            (0, r.jsx)('div', {
                className: S.message,
                children: N.intl.format(N.t.AOKOe3, { name: t.name })
            }),
            (0, r.jsx)(i.Button, {
                className: S.btn,
                disabled: !0,
                children: (0, r.jsx)(i.Spinner, { itemClassName: S.spinnerItem })
            })
        ]
    });
}
