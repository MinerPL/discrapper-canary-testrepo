n.r(e), n(47120);
var a = n(200651),
    r = n(192379),
    o = n(702493),
    i = n(77987),
    l = n(133853),
    s = n(703656),
    c = n(643366),
    u = n(94628),
    d = n(659154),
    f = n(902928),
    p = n(240479),
    h = n(981631),
    x = n(621727);
let C = n(575703);
e.default = (0, i.e)(function () {
    let t;
    let [e, n] = r.useState({
        type: 'user-code-input',
        usePrefilledCode: !0
    });
    (0, o.Z)(), (0, c.Y)(e);
    let i = r.useCallback(() => {
            n({ type: 'user-code-input' });
        }, [n]),
        _ = r.useCallback(
            (t) => {
                n({
                    type: 'authorization',
                    userCodeData: t
                });
            },
            [n]
        ),
        m = r.useCallback(
            (t) => {
                n({
                    type: 'success',
                    userCodeData: t
                });
            },
            [n]
        ),
        I = r.useCallback(
            (t) => {
                n({
                    type: 'error',
                    userCodeData: t
                });
            },
            [n]
        ),
        v = !0;
    switch (e.type) {
        case 'user-code-input':
            t = (0, a.jsx)(p.v, {
                usePrefilledCode: e.usePrefilledCode || !1,
                onUserCodeAccepted: _
            });
            break;
        case 'authorization':
            (t = (0, a.jsx)(u.B, {
                data: e.userCodeData,
                onDenied: i,
                onError: I,
                onSuccess: m
            })),
                (v = !1);
            break;
        case 'success':
            t = (0, a.jsx)(f.u, {
                onComplete: () => (0, s.uL)(h.Z5c.ME),
                data: e.userCodeData
            });
            break;
        case 'error':
            t = (0, a.jsx)(d.c, { onTryAgain: i });
            break;
        default:
            t = null;
    }
    return (0, a.jsxs)('div', {
        className: x.activatePage,
        children: [
            (0, a.jsx)('img', {
                className: x.artwork,
                src: C,
                alt: ''
            }),
            (0, a.jsx)(l.Z, {
                show: !0,
                className: x.logo
            }),
            v
                ? (0, a.jsx)('div', {
                      className: x.content,
                      children: t
                  })
                : t
        ]
    });
});
