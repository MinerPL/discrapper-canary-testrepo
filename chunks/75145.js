n.d(t, {
    Kn: function () {
        return d;
    },
    mY: function () {
        return _;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    l = n(607070),
    u = n(689938),
    c = n(151059);
let d = 41;
function _(e) {
    let { className: t, colorOpacity: i = 0.2 } = e,
        d = (0, s.e7)([l.Z], () => l.Z.useReducedMotion);
    return (0, r.jsxs)('div', {
        className: a()(c.nitroTopDividerContainer, t),
        children: [
            (0, r.jsx)('div', { className: c.nitroTopDividerUpper }),
            (0, r.jsx)('div', { className: a()(c.nitroTopDividerShadow, c.glow, { [c.reducedMotion]: d }) }),
            (0, r.jsxs)('div', {
                className: a()(c.nitroTopDividerLockContainer),
                children: [
                    (0, r.jsx)('div', { className: a()(c.nitroTopDividerLockBorder, c.turnTransparent, { [c.reducedMotion]: d }) }),
                    !d &&
                        (0, r.jsx)(o.LottieAnimation, {
                            className: a()(c.premiumUnlockAnimation),
                            loop: !1,
                            importData: () => n.e('21812').then(n.t.bind(n, 741855, 19))
                        }),
                    (0, r.jsxs)('div', {
                        className: a()(c.premiumUnlockedWithNitroPillContainer, { [c.reducedMotion]: d }),
                        children: [
                            (0, r.jsx)(o.NitroWheelIcon, {
                                size: 'xs',
                                color: 'white'
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: 'text-xs/medium',
                                color: 'always-white',
                                lineClamp: 1,
                                children: u.Z.Messages.PREMIUM_REVERSE_TRIAL_EMOJI_UNLOCK
                            })
                        ]
                    }),
                    (0, r.jsx)('div', { className: a()(c.nitroTopDividerLockBorderReversed, c.turnTransparent, { [c.reducedMotion]: d }) })
                ]
            }),
            (0, r.jsx)('div', {
                style: { opacity: i },
                className: a()(c.nitroTopDividerLower, c.turnTransparent, { [c.reducedMotion]: d })
            })
        ]
    });
}
t.ZP = function (e) {
    let { glowOpacity: t, className: n, colorOpacity: i = 0.2 } = e;
    return (0, r.jsxs)('div', {
        className: a()(c.nitroTopDividerContainer, n),
        children: [
            (0, r.jsx)('div', { className: c.nitroTopDividerUpper }),
            (0, r.jsx)('div', {
                style: { opacity: t },
                className: c.nitroTopDividerShadow
            }),
            (0, r.jsxs)('div', {
                className: a()(c.nitroTopDividerLockContainer),
                children: [
                    (0, r.jsx)('div', { className: c.nitroTopDividerLockBorder }),
                    (0, r.jsx)('div', {
                        className: c.nitroTopDividerLockCircle,
                        children: (0, r.jsx)(o.LockIcon, {
                            size: 'xs',
                            color: 'white'
                        })
                    }),
                    (0, r.jsx)('div', { className: c.nitroTopDividerLockBorderReversed })
                ]
            }),
            (0, r.jsx)('div', {
                style: { opacity: i },
                className: c.nitroTopDividerLower
            })
        ]
    });
};
