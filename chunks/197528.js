n.r(e), n(47120);
var a = n(735250),
    r = n(470079),
    o = n(830064),
    s = n(702493),
    i = n(77987),
    l = n(133853),
    c = n(703656),
    u = n(643366),
    d = n(94628),
    f = n(659154),
    p = n(902928),
    _ = n(240479),
    E = n(981631),
    I = n(773566);
e.default = (0, i.e)(function () {
    let t;
    let [e, n] = r.useState({
        type: 'user-code-input',
        usePrefilledCode: !0
    });
    (0, s.Z)(), (0, u.Y)(e);
    let i = r.useCallback(() => {
            n({ type: 'user-code-input' });
        }, [n]),
        C = r.useCallback(
            (t) => {
                n({
                    type: 'authorization',
                    userCodeData: t
                });
            },
            [n]
        ),
        h = r.useCallback(
            (t) => {
                n({
                    type: 'success',
                    userCodeData: t
                });
            },
            [n]
        ),
        A = r.useCallback(
            (t) => {
                n({
                    type: 'error',
                    userCodeData: t
                });
            },
            [n]
        ),
        T = !0;
    switch (e.type) {
        case 'user-code-input':
            t = (0, a.jsx)(_.v, {
                usePrefilledCode: e.usePrefilledCode || !1,
                onUserCodeAccepted: C
            });
            break;
        case 'authorization':
            (t = (0, a.jsx)(d.B, {
                data: e.userCodeData,
                onDenied: i,
                onError: A,
                onSuccess: h
            })),
                (T = !1);
            break;
        case 'success':
            t = (0, a.jsx)(p.u, {
                onComplete: () => (0, c.uL)(E.Z5c.ME),
                data: e.userCodeData
            });
            break;
        case 'error':
            t = (0, a.jsx)(f.c, { onTryAgain: i });
            break;
        default:
            t = null;
    }
    return (0, a.jsxs)('div', {
        className: I.activatePage,
        children: [
            (0, a.jsx)(o.Z, {
                className: I.artwork,
                preserveAspectRatio: 'xMinYMin slice'
            }),
            (0, a.jsx)(l.Z, {
                show: !0,
                className: I.logo
            }),
            T
                ? (0, a.jsx)('div', {
                      className: I.content,
                      children: t
                  })
                : t
        ]
    });
});
