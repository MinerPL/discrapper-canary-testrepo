n.d(t, {
    Kn: function () {
        return h;
    },
    mY: function () {
        return p;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(704215),
    u = n(481060),
    c = n(607070),
    d = n(243778),
    _ = n(921944),
    E = n(689938),
    f = n(151059);
let h = 41;
function p() {
    let e = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        [t, a] = (0, d.US)([l.z.REVERSE_TRIAL_EMOJI_PICKER]),
        h = t === l.z.REVERSE_TRIAL_EMOJI_PICKER;
    return (
        i.useEffect(
            () => () => {
                h && a(_.L.TAKE_ACTION);
            },
            [h, a]
        ),
        (0, r.jsxs)('div', {
            className: f.nitroTopDividerContainer,
            children: [
                (0, r.jsx)('div', { className: f.nitroTopDividerUpper }),
                (0, r.jsx)('div', { className: s()(f.nitroTopDividerShadow, f.glow, { [f.reducedMotion]: e || !h }) }),
                (0, r.jsxs)('div', {
                    className: s()(f.nitroTopDividerLockContainer),
                    children: [
                        (0, r.jsx)('div', { className: f.nitroTopDividerLockBorder }),
                        !e &&
                            h &&
                            (0, r.jsx)(u.LottieAnimation, {
                                className: s()(f.premiumUnlockAnimation),
                                loop: !1,
                                importData: () => n.e('21812').then(n.t.bind(n, 741855, 19))
                            }),
                        (0, r.jsxs)('div', {
                            className: s()(f.premiumUnlockedWithNitroPillContainer, { [f.reducedMotion]: e || !h }),
                            children: [
                                (0, r.jsx)(u.NitroWheelIcon, {
                                    size: 'xs',
                                    color: 'white'
                                }),
                                (0, r.jsx)(u.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'always-white',
                                    lineClamp: 1,
                                    children: E.Z.Messages.POWERED_BY_NITRO
                                })
                            ]
                        }),
                        (0, r.jsx)('div', { className: f.nitroTopDividerLockBorderReversed })
                    ]
                }),
                (0, r.jsx)('div', { className: f.reverseTrialTopDividerLower })
            ]
        })
    );
}
t.ZP = function (e) {
    let { glowOpacity: t, className: n, colorOpacity: i = 0.2 } = e;
    return (0, r.jsxs)('div', {
        className: s()(f.nitroTopDividerContainer, n),
        children: [
            (0, r.jsx)('div', { className: f.nitroTopDividerUpper }),
            (0, r.jsx)('div', {
                style: { opacity: t },
                className: f.nitroTopDividerShadow
            }),
            (0, r.jsxs)('div', {
                className: s()(f.nitroTopDividerLockContainer),
                children: [
                    (0, r.jsx)('div', { className: f.nitroTopDividerLockBorder }),
                    (0, r.jsx)('div', {
                        className: f.nitroTopDividerLockCircle,
                        children: (0, r.jsx)(u.LockIcon, {
                            size: 'xs',
                            color: 'white'
                        })
                    }),
                    (0, r.jsx)('div', { className: f.nitroTopDividerLockBorderReversed })
                ]
            }),
            (0, r.jsx)('div', {
                style: { opacity: i },
                className: f.nitroTopDividerLower
            })
        ]
    });
};
