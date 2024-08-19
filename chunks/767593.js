t.r(n), t(47120), t(653041);
var o = t(735250),
    r = t(470079),
    a = t(567526),
    i = t(481060),
    s = t(442837),
    l = t(607070),
    c = t(970606),
    u = t(313201),
    d = t(863249),
    m = t(944163),
    f = t(246364),
    p = t(983736),
    h = t(937111),
    _ = t(200305),
    x = t(271383),
    b = t(594174),
    C = t(231467),
    I = t(981631),
    N = t(308083),
    v = t(689938),
    E = t(133072);
let g = {
        mass: 1,
        tension: 600,
        friction: 60
    },
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
function T(e) {
    let { children: n, containerRef: t, faderSize: a, faderEdgeThreshold: s } = e,
        l = r.useRef(null),
        [c, u] = r.useState(0),
        [d, m] = r.useState(0),
        [f, p] = r.useState(0),
        h = r.useCallback(() => {
            null != l.current && (u(l.current.getDistanceFromTop()), m(l.current.getDistanceFromBottom()), p(l.current.getScrollerState().offsetHeight));
        }, []);
    r.useEffect(() => {
        if ((h(), null == t.current)) return;
        let e = new ResizeObserver(() => {
            h();
        });
        return (
            e.observe(t.current),
            () => {
                e.disconnect();
            }
        );
    }, [l, t, h]);
    let _ = r.useMemo(() => {
        if (0 === c && 0 === d) return {};
        let e = [];
        if ((e.push('to bottom'), c > 0)) {
            let n = s > 0 ? 1 - Math.min(s, c) / s : 1;
            for (let t = 0; t < R.length; t++) {
                let { position: o, alpha: r } = R[t],
                    i = (o * a).toFixed(2);
                e.push('hsla(0, 0%, 0%, '.concat(n + r * (1 - n), ') ').concat(i, 'px'));
            }
        }
        if (d > 0) {
            let n = f - a,
                t = s > 0 ? 1 - Math.min(s, d) / s : 1;
            for (let o = R.length - 1; o >= 0; o--) {
                let { position: r, alpha: i } = R[o],
                    s = (n + (1 - r) * a).toFixed(2);
                e.push('hsla(0, 0%, 0%, '.concat(t + i * (1 - t), ') ').concat(s, 'px'));
            }
        }
        return { maskImage: 'linear-gradient('.concat(e.join(','), ')') };
    }, [d, c, s, a, f]);
    return (0, o.jsx)(i.AdvancedScrollerNone, {
        ref: l,
        style: _,
        className: E.scroller,
        onScroll: h,
        children: n
    });
}
function j(e) {
    let { guildId: n, formState: t, updateFormState: r } = e;
    return (0, o.jsxs)('div', {
        className: E.verificationForm,
        children: [
            (0, o.jsx)(i.Heading, {
                variant: 'heading-xxl/normal',
                color: 'header-primary',
                children: v.Z.Messages.CLAN_DISCOVERY_PROFILE_TITLE
            }),
            (0, o.jsx)(i.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: v.Z.Messages.CLAN_DISCOVERY_PROFILE_SUBTITLE
            }),
            (0, o.jsx)(_.Y, {
                guildId: n,
                formState: t,
                updateFormState: r
            })
        ]
    });
}
n.default = function (e) {
    var n, t, _, R;
    let { clan: y, prioritizedGameIds: F, position: B, transitionState: S, onClose: M } = e,
        A = (0, u.Dt)(),
        O = (0, s.e7)([m.Z], () => m.Z.get(y.id)),
        [k, P] = r.useState(null !== (_ = null == O ? void 0 : O.formFields) && void 0 !== _ ? _ : []),
        [q, Z] = r.useState(!1),
        w = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
        D = (0, s.e7)([x.ZP], () => x.ZP.isMember(y.id, null == w ? void 0 : w.id), [y, w]),
        L = (0, s.e7)([h.Z], () => {
            var e;
            return (null === (e = h.Z.getRequest(y.id)) || void 0 === e ? void 0 : e.applicationStatus) === f.wB.SUBMITTED;
        }),
        H = null == w ? void 0 : w.verified,
        V = null == w ? void 0 : w.isPhoneVerified(),
        [Y, U] = r.useState('');
    r.useEffect(() => {
        d.Z.fetchVerificationForm(y.id);
    }, [y.id]),
        r.useEffect(() => {
            null != O && P(O.formFields);
        }, [O]);
    let z = r.useCallback(
            (e) => {
                !q &&
                    (Z(!0),
                    (0, c.r)({
                        guildId: y.id,
                        position: B
                    })),
                    P(e);
            },
            [P, q, Z, y.id, B]
        ),
        G = r.useCallback(
            async (e) => {
                await d.Z.submitVerificationForm(y.id, e);
            },
            [y.id]
        ),
        K = r.useCallback(async () => {
            try {
                await G({
                    ...(null != O ? O : m.t),
                    formFields: k
                }),
                    M();
            } catch (e) {
                U(null == e ? void 0 : e.message);
            }
        }, [G, M, O, k]),
        Q = !((null == O ? void 0 : null === (n = O.guild) || void 0 === n ? void 0 : n.verification_level) === I.sFg.VERY_HIGH ? V : H || V) || k.some((e) => !(0, p.OA)(e)),
        W = (null !== (R = null == O ? void 0 : null === (t = O.guild) || void 0 === t ? void 0 : t.approximate_member_count) && void 0 !== R ? R : 0) >= N.Du,
        J = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
        X = (0, i.useSpring)(
            {
                from: {
                    opacity: 0,
                    transform: 'translateY('.concat(J ? 0 : 40, 'px)')
                },
                to: {
                    opacity: 1,
                    transform: 'translateY(0px)'
                },
                config: g,
                delay: 500
            },
            'animate-always'
        ),
        $ = r.useRef(null);
    return (0, o.jsxs)(i.ModalRoot, {
        transitionState: S,
        'aria-labelledby': A,
        size: i.ModalSize.DYNAMIC,
        className: E.container,
        hideShadow: !0,
        children: [
            (0, o.jsxs)(a.animated.div, {
                className: E.body,
                style: X,
                children: [
                    (0, o.jsx)('div', {
                        className: E.applicationContainer,
                        ref: $,
                        children: (0, o.jsx)(T, {
                            containerRef: $,
                            faderSize: 180,
                            faderEdgeThreshold: 48,
                            children: (0, o.jsx)(j, {
                                guildId: y.id,
                                formState: k,
                                updateFormState: z
                            })
                        })
                    }),
                    (0, o.jsx)('div', { className: E.verticalRule }),
                    (0, o.jsxs)('div', {
                        className: E.clanContainer,
                        children: [
                            (0, o.jsx)(C.xV, {
                                clan: y,
                                className: E.profileCard,
                                prioritizedGameIds: F,
                                expanded: !0,
                                isMember: D,
                                hasPendingJoinRequest: L,
                                atMaxMemberCapacity: W,
                                showFavoriteButton: !0
                            }),
                            (0, o.jsxs)('div', {
                                className: E.applyButtonContainer,
                                children: [
                                    (0, o.jsxs)(i.Button, {
                                        type: 'submit',
                                        onClick: K,
                                        fullWidth: !0,
                                        disabled: Q || null == O,
                                        innerClassName: E.applyButtonInner,
                                        children: [
                                            W &&
                                                (0, o.jsx)(i.WarningIcon, {
                                                    size: 'custom',
                                                    color: 'white',
                                                    width: 20,
                                                    height: 20
                                                }),
                                            v.Z.Messages.APPLY
                                        ]
                                    }),
                                    '' !== Y &&
                                        (0, o.jsx)(i.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-danger',
                                            children: Y
                                        })
                                ]
                            }),
                            W &&
                                (0, o.jsxs)(o.Fragment, {
                                    children: [
                                        (0, o.jsx)(i.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-warning',
                                            className: E.maxCapacityText,
                                            children: v.Z.Messages.CLAN_DISCOVERY_APPLICATION_MAX_MEMBERS
                                        }),
                                        (0, o.jsx)('hr', { className: E.separator })
                                    ]
                                }),
                            (0, o.jsx)(i.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                className: E.noticeText,
                                children: v.Z.Messages.CLAN_APPLICATION_GDM_CONSENT
                            }),
                            (0, o.jsx)(i.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                className: E.noticeText,
                                children: v.Z.Messages.MEMBER_VERIFICATION_WARNING
                            })
                        ]
                    })
                ]
            }),
            (0, o.jsx)('div', {
                className: E.closeButtonContainer,
                children: (0, o.jsx)(i.Button, {
                    onClick: M,
                    look: i.ButtonLooks.OUTLINED,
                    color: i.ButtonColors.PRIMARY,
                    children: v.Z.Messages.CLOSE
                })
            })
        ]
    });
};
