n.r(t), n(47120), n(653041);
var o = n(735250),
    r = n(470079),
    a = n(180081),
    i = n(481060),
    s = n(442837),
    l = n(607070),
    c = n(970606),
    u = n(313201),
    d = n(863249),
    m = n(944163),
    f = n(246364),
    p = n(983736),
    h = n(937111),
    _ = n(200305),
    x = n(271383),
    b = n(594174),
    C = n(231467),
    I = n(308083),
    N = n(689938),
    g = n(133072);
let E = {
        mass: 1,
        tension: 600,
        friction: 60
    },
    v = {
        mass: 1,
        tension: 300,
        friction: 25
    },
    T = 2300,
    R = [
        {
            position: 0,
            alpha: 0
        },
        {
            position: 0.19,
            alpha: 0.262
        },
        {
            position: 0.34,
            alpha: 0.459
        },
        {
            position: 0.47,
            alpha: 0.618
        },
        {
            position: 0.57,
            alpha: 0.722
        },
        {
            position: 0.65,
            alpha: 0.806
        },
        {
            position: 0.73,
            alpha: 0.874
        },
        {
            position: 0.8,
            alpha: 0.925
        },
        {
            position: 0.86,
            alpha: 0.958
        },
        {
            position: 0.91,
            alpha: 0.979
        },
        {
            position: 0.95,
            alpha: 0.992
        },
        {
            position: 0.98,
            alpha: 0.998
        },
        {
            position: 1,
            alpha: 1
        }
    ];
function j(e) {
    let { children: t, containerRef: n, faderSize: a, faderEdgeThreshold: s } = e,
        l = r.useRef(null),
        [c, u] = r.useState(0),
        [d, m] = r.useState(0),
        [f, p] = r.useState(0),
        h = r.useCallback(() => {
            null != l.current && (u(l.current.getDistanceFromTop()), m(l.current.getDistanceFromBottom()), p(l.current.getScrollerState().offsetHeight));
        }, []);
    r.useEffect(() => {
        if ((h(), null == n.current)) return;
        let e = new ResizeObserver(() => {
            h();
        });
        return (
            e.observe(n.current),
            () => {
                e.disconnect();
            }
        );
    }, [l, n, h]);
    let _ = r.useMemo(() => {
        if (0 === c && 0 === d) return {};
        let e = [];
        if ((e.push('to bottom'), c > 0)) {
            let t = s > 0 ? 1 - Math.min(s, c) / s : 1;
            for (let n = 0; n < R.length; n++) {
                let { position: o, alpha: r } = R[n],
                    i = (o * a).toFixed(2);
                e.push('hsla(0, 0%, 0%, '.concat(t + r * (1 - t), ') ').concat(i, 'px'));
            }
        }
        if (d > 0) {
            let t = f - a,
                n = s > 0 ? 1 - Math.min(s, d) / s : 1;
            for (let o = R.length - 1; o >= 0; o--) {
                let { position: r, alpha: i } = R[o],
                    s = (t + (1 - r) * a).toFixed(2);
                e.push('hsla(0, 0%, 0%, '.concat(n + i * (1 - n), ') ').concat(s, 'px'));
            }
        }
        return { maskImage: 'linear-gradient('.concat(e.join(','), ')') };
    }, [d, c, s, a, f]);
    return (0, o.jsx)(i.AdvancedScrollerNone, {
        ref: l,
        style: _,
        className: g.scroller,
        onScroll: h,
        children: t
    });
}
function y(e) {
    let { guildId: t, formState: n, updateFormState: r } = e;
    return (0, o.jsxs)('div', {
        className: g.verificationForm,
        children: [
            (0, o.jsx)(i.Heading, {
                variant: 'heading-xxl/normal',
                color: 'header-primary',
                children: N.Z.Messages.CLAN_DISCOVERY_PROFILE_TITLE
            }),
            (0, o.jsx)(i.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: N.Z.Messages.CLAN_DISCOVERY_PROFILE_SUBTITLE
            }),
            (0, o.jsx)(_.Y, {
                guildId: t,
                formState: n,
                updateFormState: r,
                disableVerification: !0
            })
        ]
    });
}
t.default = function (e) {
    var t, n, _;
    let { clan: R, prioritizedGameIds: F, position: B, transitionState: S, onClose: k } = e,
        M = (0, u.Dt)(),
        A = (0, s.e7)([m.Z], () => m.Z.get(R.id)),
        [O, P] = r.useState(null !== (n = null == A ? void 0 : A.formFields) && void 0 !== n ? n : []),
        [q, w] = r.useState(!1),
        [D, L] = r.useState(!1),
        [Z, H] = r.useState(!1),
        V = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
        Y = (0, s.e7)([x.ZP], () => x.ZP.isMember(R.id, null == V ? void 0 : V.id), [R, V]),
        U = (0, s.e7)([h.Z], () => {
            var e;
            return (null === (e = h.Z.getRequest(R.id)) || void 0 === e ? void 0 : e.applicationStatus) === f.wB.SUBMITTED;
        }),
        [z, G] = r.useState(''),
        K = r.useRef(() =>
            (0, c._v)({
                guildId: R.id,
                position: B
            })
        );
    r.useEffect(
        () => (
            d.ZP.fetchVerificationForm(R.id),
            () => {
                K.current();
            }
        ),
        [R.id, K]
    ),
        r.useEffect(() => {
            null != A && P(A.formFields);
        }, [A]);
    let Q = r.useCallback(
            (e) => {
                !q &&
                    (w(!0),
                    (K.current = () => !1),
                    (0, c.r)({
                        guildId: R.id,
                        position: B
                    })),
                    P(e);
            },
            [P, q, w, R.id, B]
        ),
        W = r.useCallback(
            async (e) => {
                await d.ZP.submitVerificationForm(R.id, e, d.q0);
            },
            [R.id]
        ),
        J = r.useCallback(async () => {
            try {
                L(!0);
                let e = Date.now();
                await W({
                    ...(null != A ? A : m.t),
                    formFields: O
                });
                let t = () => {
                        H(!0), setTimeout(k, 1300), L(!1), setTimeout(d.xo, T);
                    },
                    n = Date.now();
                n - e > 1000 ? t() : setTimeout(t, 1000 - (n - e));
            } catch (e) {
                G(null == e ? void 0 : e.message), L(!1);
            }
        }, [W, k, A, O]),
        X = O.some((e) => !(0, p.OA)(e)),
        $ = (null !== (_ = null == A ? void 0 : null === (t = A.guild) || void 0 === t ? void 0 : t.approximate_member_count) && void 0 !== _ ? _ : 0) >= I.Du,
        ee = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
        et = (0, i.useSpring)(
            {
                from: {
                    opacity: 0,
                    transform: 'translateY('.concat(ee ? 0 : 40, 'px)')
                },
                to: {
                    opacity: 1,
                    transform: 'translateY(0px)'
                },
                config: E,
                delay: 500
            },
            'animate-always'
        ),
        en = (0, i.useTransition)(Z, {
            from: {
                opacity: 0,
                scale: 0
            },
            enter: {
                opacity: 1,
                scale: 1
            },
            leave: {
                opacity: 0,
                scale: 0
            },
            config: v
        }),
        eo = r.useRef(null);
    return (0, o.jsxs)(i.ModalRoot, {
        transitionState: S,
        'aria-labelledby': M,
        size: i.ModalSize.DYNAMIC,
        className: g.container,
        hideShadow: !0,
        children: [
            (0, o.jsxs)(a.animated.div, {
                className: g.body,
                style: et,
                children: [
                    (0, o.jsx)('div', {
                        className: g.applicationContainer,
                        ref: eo,
                        children: (0, o.jsx)(j, {
                            containerRef: eo,
                            faderSize: 180,
                            faderEdgeThreshold: 48,
                            children: (0, o.jsx)(y, {
                                guildId: R.id,
                                formState: O,
                                updateFormState: Q
                            })
                        })
                    }),
                    (0, o.jsx)('div', { className: g.verticalRule }),
                    (0, o.jsxs)('div', {
                        className: g.clanContainer,
                        children: [
                            (0, o.jsx)(C.xV, {
                                clan: R,
                                className: g.profileCard,
                                prioritizedGameIds: F,
                                expanded: !0,
                                isMember: Y,
                                hasPendingJoinRequest: U,
                                atMaxMemberCapacity: $,
                                showFavoriteButton: !0
                            }),
                            (0, o.jsxs)('div', {
                                className: g.applyButtonContainer,
                                children: [
                                    (0, o.jsxs)(i.Button, {
                                        type: 'submit',
                                        onClick: Z ? void 0 : J,
                                        submitting: D,
                                        fullWidth: !0,
                                        disabled: X || null == A,
                                        innerClassName: g.applyButtonInner,
                                        children: [
                                            $ &&
                                                (0, o.jsx)(i.WarningIcon, {
                                                    size: 'custom',
                                                    color: 'white',
                                                    width: 20,
                                                    height: 20
                                                }),
                                            !Z && N.Z.Messages.APPLY,
                                            en(
                                                (e, t) =>
                                                    t &&
                                                    (0, o.jsx)(a.animated.div, {
                                                        style: e,
                                                        className: g.successCheckmark,
                                                        children: (0, o.jsx)(i.CheckmarkLargeBoldIcon, {
                                                            size: 'sm',
                                                            color: 'currentColor',
                                                            'aria-hidden': !0
                                                        })
                                                    })
                                            )
                                        ]
                                    }),
                                    '' !== z &&
                                        (0, o.jsx)(i.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-danger',
                                            children: z
                                        })
                                ]
                            }),
                            $ &&
                                (0, o.jsxs)(o.Fragment, {
                                    children: [
                                        (0, o.jsx)(i.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-warning',
                                            className: g.maxCapacityText,
                                            children: N.Z.Messages.CLAN_DISCOVERY_APPLICATION_MAX_MEMBERS
                                        }),
                                        (0, o.jsx)('hr', { className: g.separator })
                                    ]
                                }),
                            (0, o.jsx)(i.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                className: g.noticeText,
                                children: N.Z.Messages.CLAN_APPLICATION_GDM_CONSENT
                            }),
                            (0, o.jsx)(i.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                className: g.noticeText,
                                children: N.Z.Messages.MEMBER_VERIFICATION_WARNING
                            })
                        ]
                    })
                ]
            }),
            (0, o.jsx)('div', {
                className: g.closeButtonContainer,
                children: (0, o.jsx)(i.Button, {
                    onClick: k,
                    look: i.ButtonLooks.OUTLINED,
                    color: i.ButtonColors.PRIMARY,
                    children: N.Z.Messages.CLOSE
                })
            })
        ]
    });
};
