n(47120), n(177593);
var i = n(735250), a = n(470079), l = n(120356), s = n.n(l), r = n(920906), o = n(442837), c = n(481060), u = n(393238), d = n(607070), h = n(44315), p = n(314897), m = n(111583), _ = n(889901), f = n(64078), E = n(351780), C = n(843693), g = n(641033), I = n(989830), x = n(689938), T = n(587954);
let N = a.memo(function (e) {
        let {
                channelId: t,
                width: n
            } = e, l = (0, o.e7)([d.Z], () => d.Z.useReducedMotion), s = (0, o.e7)([C.ZP], () => C.ZP.getMostRecentMessageCombo(t), [t]), [u, h] = a.useState(!1);
        a.useEffect(() => {
            if (null == s ? void 0 : s.displayed)
                return;
            h(!1), setImmediate(() => {
                h((null != s ? (0, g.Eo)(s.combo) : 0) > 0);
            });
            let e = setTimeout(() => {
                h(!1), null != s && (0, f.ew)(s);
            }, 2000);
            return () => clearTimeout(e);
        }, [s]);
        let p = null != s ? '100%' : '200%', m = (0, r.useSpring)({
                opacity: u ? 1 : 0,
                translateY: u ? '0' : p,
                pointerEvents: 'none',
                width: n,
                config: l ? r.config.stiff : r.config.slow
            });
        return (0, i.jsx)(i.Fragment, {
            children: null != s && (0, i.jsx)(r.animated.div, {
                className: T.messageComboScore,
                style: m,
                children: (0, i.jsx)(c.Text, {
                    className: T.comboScore,
                    variant: 'text-sm/bold',
                    children: (0, g.Eo)(s.combo)
                })
            })
        });
    }), v = a.memo(function (e) {
        let {
                value: t,
                multiplier: n
            } = e, {
                color: l,
                square: r,
                flair: o
            } = a.useMemo(() => (0, g.yz)(n), [n]), u = (0, h.Lq)(l);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.Text, {
                    className: T.comboValue,
                    variant: 'text-sm/bold',
                    children: t
                }),
                (0, i.jsxs)('div', {
                    className: T.comboNameplate,
                    style: { color: u },
                    children: [
                        (0, i.jsx)(c.Text, {
                            className: T.comboMultiplier,
                            style: { color: u },
                            variant: 'text-sm/bold',
                            children: x.Z.Messages.POGGERMODE_COMBO.format({ multiplier: n })
                        }),
                        r && (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)('div', {
                                    className: s()(T.comboSquare, T.left),
                                    style: { backgroundColor: u }
                                }),
                                (0, i.jsx)('div', {
                                    className: s()(T.comboSquare, T.right),
                                    style: { backgroundColor: u }
                                })
                            ]
                        }),
                        o && (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)('div', {
                                    className: s()(T.confettiIcon, T.left),
                                    children: (0, i.jsx)(_.Z, {
                                        width: 24,
                                        height: 24
                                    })
                                }),
                                (0, i.jsx)('div', {
                                    className: s()(T.confettiIcon, T.right),
                                    children: (0, i.jsx)(_.Z, {
                                        width: 24,
                                        height: 24
                                    })
                                })
                            ]
                        }),
                        1 === n && (0, i.jsx)(c.Text, {
                            className: T.tip,
                            variant: 'text-sm/bold',
                            children: x.Z.Messages.POGGERMODE_COMBO_TIP
                        })
                    ]
                })
            ]
        });
    });
t.Z = a.memo(function (e) {
    let {channelId: t} = e, n = (0, o.e7)([p.default], () => p.default.getId()), l = (0, o.e7)([m.Z], () => m.Z.isTyping(t, n), [
            t,
            n
        ]), s = (0, o.e7)([E.Z], () => E.Z.isEnabled()), c = (0, o.e7)([C.ZP], () => C.ZP.isComboing(n, t), [
            t,
            n
        ]), {
            ref: h,
            width: _ = 0
        } = (0, u.Z)(), f = (0, o.e7)([d.Z], () => d.Z.useReducedMotion), [g, x] = a.useState(!1), S = (0, I.Z)(t), Z = s && c && l;
    a.useEffect(() => {
        Z && x(!0);
        let e = setTimeout(() => x(Z), 1000);
        return () => clearTimeout(e);
    }, [Z]);
    let A = (0, r.useSpring)({
            opacity: g ? 1 : 0,
            transform: g ? 'translateY(0)' : 'translateY(100%)',
            pointerEvents: 'none',
            config: r.config.stiff,
            immediate: f
        }), M = a.useMemo(() => null != S ? S : {
            value: 0,
            multiplier: 1
        }, [S]), b = a.useRef(M);
    a.useEffect(() => {
        (M.multiplier > 1 || M.value > 0) && (b.current = M);
    }, [M]);
    let {
        multiplier: R,
        value: j
    } = a.useMemo(() => ({
        value: Z ? M.value : b.current.value,
        multiplier: Z ? M.multiplier : b.current.multiplier
    }), [
        Z,
        M,
        b
    ]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(N, {
                channelId: t,
                width: _
            }),
            (0, i.jsx)(r.animated.div, {
                ref: h,
                className: T.combo,
                style: A,
                children: (0, i.jsx)(v, {
                    value: j,
                    multiplier: R
                })
            })
        ]
    });
});
