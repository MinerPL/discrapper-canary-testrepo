t.r(n),
    t.d(n, {
        VerifyAccountLoading: function () {
            return m;
        },
        default: function () {
            return N;
        }
    }),
    t(610138),
    t(216116),
    t(78328),
    t(815648),
    t(47120),
    t(757143);
var o = t(735250),
    c = t(470079),
    r = t(266067),
    l = t(481060),
    i = t(457330),
    a = t(726542),
    s = t(536285),
    u = t(656649),
    d = t(981631),
    f = t(689938),
    p = t(934484);
let C = null != window.opener,
    g = (e) => new URLSearchParams(e.search);
function N() {
    var e;
    let n = (0, r.k6)(),
        t = g((0, r.TH)()),
        l = t.get('code'),
        f = t.get('oauth_verifier'),
        p = null !== (e = t.get('state')) && void 0 !== e ? e : '',
        N = t.get('loading'),
        { type: v } = (0, r.UO)(),
        _ = (0, u.vJ)(v),
        E = null == f ? (null != l ? l : '') : f;
    return (c.useEffect(() => {
        (async function e() {
            let e;
            if (null != N) return;
            for (let n of t.keys()) {
                if (!!n.startsWith('openid.')) null == e && (e = {}), (e[n] = t.get(n));
            }
            let o = (e) => {
                    let { status: o, body: c } = e;
                    if (null != l) {
                        if (null == c ? void 0 : c.redirect) {
                            n.replace(d.Z5c.CONNECTIONS_SUCCESS(l)), (window.location = c.redirect);
                            return;
                        }
                        if ([200, 204].includes(o)) {
                            n.replace(d.Z5c.CONNECTIONS_SUCCESS(l)), C && window.close();
                            return;
                        }
                        n.replace(''.concat(d.Z5c.CONNECTIONS_ERROR(l), '?').concat(t.toString()));
                    }
                },
                c = {
                    code: E,
                    openid_params: e,
                    state: p
                };
            async function r(e) {
                if (null != l && a.Z.isSupported(l))
                    try {
                        let n = await i.Z.callback(l, c, e);
                        o(n);
                    } catch (e) {
                        o(e);
                    }
            }
            if (C) {
                await r(!1);
                return;
            }
            let l = (0, u.vJ)(v);
            try {
                let e = await s.default.request(d.Etm.CONNECTIONS_CALLBACK, {
                    ...c,
                    providerType: l
                });
                o(e);
            } catch (e) {
                (null == e ? void 0 : e.code) !== d.lTL.BAD_REQUEST_FOR_PROVIDER && (await r('RPCError' !== e.name));
            }
            s.default.disconnect();
        })();
    }, [E, n, N, v, t, p]),
    null != _ && a.Z.isSupported(_))
        ? (0, o.jsx)(m, { platformType: _ })
        : null;
}
function m(e) {
    let { platformType: n } = e;
    return (0, o.jsxs)(u.UV, {
        platformType: n,
        children: [
            (0, o.jsx)('div', {
                className: p.message,
                children: f.Z.Messages.CONNECTED_ACCOUNT_VERIFYING.format({ name: platform.name })
            }),
            (0, o.jsx)(l.Button, {
                className: p.btn,
                disabled: !0,
                children: (0, o.jsx)(l.Spinner, { itemClassName: p.spinnerItem })
            })
        ]
    });
}
