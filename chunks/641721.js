n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(392711),
    o = n(100621),
    c = n(442837),
    d = n(481060),
    u = n(207796),
    h = n(889711),
    m = n(931240),
    p = n(970606),
    g = n(650461),
    f = n(41152),
    _ = n(35313),
    E = n(284019),
    I = n(346524),
    C = n(158120),
    v = n(601463),
    S = n(308083),
    N = n(388032),
    T = n(837275);
let x = {
    mass: 1,
    tension: 600,
    friction: 60,
    clamp: !0
};
function b(e) {
    let { guildId: t, onClose: n } = e,
        a = (0, g.Wg)(),
        {
            progress: b,
            errors: A,
            submitting: Z
        } = (0, c.cj)([g.ZP], () => {
            var e, n, i, r;
            return {
                progress: null !== (r = null === (e = g.ZP.getStateForGuild(t)) || void 0 === e ? void 0 : e.progress) && void 0 !== r ? r : a,
                errors: null === (n = g.ZP.getStateForGuild(t)) || void 0 === n ? void 0 : n.errors,
                submitting: null === (i = g.ZP.getStateForGuild(t)) || void 0 === i ? void 0 : i.submitting
            };
        }),
        y = r.useMemo(() => (0, f.D)(A), [A]),
        [L, R] = r.useState(window.innerWidth),
        P = Number(b.currentStep) >= S.IS.THANK_YOU_END,
        [O, j] = r.useState(P ? 0 : 1),
        D = (0, _.f)(),
        M = (0, d.useSpring)(
            {
                opacity: O,
                config: x
            },
            'respect-motion-settings'
        ),
        w = (0, d.useTransition)(P, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: x
        }),
        k = r.useCallback(
            (e) => {
                var n;
                e === y.length - 1 ? (j(0), (0, p.Lp)(t, 'fake_door_end')) : 0 === O && j(1),
                    m._9(t, {
                        currentStep: e,
                        furthestStep: Math.max(null !== (n = b.furthestStep) && void 0 !== n ? n : 0, e)
                    });
            },
            [O, t, b.furthestStep, y]
        );
    r.useEffect(() => {
        (0, p.Gx)({
            guildId: t,
            signupPage: (0, f.F)(b.currentStep),
            actionType: p.eI.NAVIGATE_STEP
        });
    }, [t, b.currentStep]),
        r.useEffect(() => {
            let e = (0, h.pP)((0, s.debounce)(() => R(window.innerWidth), 250));
            return (0, h.YP)(e, document.body), () => (0, h.UC)(e, document.body);
        }, [O, P]);
    let U = r.useMemo(() => null != A && Object.values(A).some((e) => null != e), [A]),
        G = r.useMemo(() => (null != A && Object.values(A).length > 0 ? (0, f.D)(A).find((e) => e.hasError) : null), [A]),
        B = r.useCallback(() => {
            j(1), m._9(t, { currentStep: null == G ? void 0 : G.index });
        }, [null == G ? void 0 : G.index, t]),
        H = r.useCallback(() => {
            (0, u.fH)(u.v0.ADMIN_UPSELL), (0, u.kw)();
        }, []),
        V = r.useCallback(() => {
            H(), n();
        }, [H, n]),
        F = r.useCallback(() => {
            P && H(), n();
        }, [P, n, H]),
        z = r.useRef(null),
        Y =
            null != G
                ? (0, i.jsxs)('div', {
                      className: T.tooltipContents,
                      children: [
                          (0, i.jsx)(d.WarningIcon, {
                              size: 'xs',
                              color: 'currentColor',
                              className: T.errorIcon
                          }),
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)(d.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'header-primary',
                                      children: N.intl.string(N.t.M6w76e)
                                  }),
                                  (0, i.jsx)(d.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'text-muted',
                                      children: N.intl.format(N.t.nftD29, {
                                          backHook: (e, t) =>
                                              (0, i.jsx)(
                                                  d.Anchor,
                                                  {
                                                      className: T.errorLink,
                                                      onClick: B,
                                                      children: e
                                                  },
                                                  t
                                              )
                                      })
                                  })
                              ]
                          })
                      ]
                  })
                : null;
    return (0, i.jsx)(o.animated.div, {
        ref: z,
        style: D,
        className: T.modal,
        children: (0, i.jsxs)(d.FocusRingScope, {
            containerRef: z,
            children: [
                (0, i.jsx)(d.Button, {
                    className: T.close,
                    look: d.Button.Looks.OUTLINED,
                    size: d.Button.Sizes.MEDIUM,
                    color: d.Button.Colors.PRIMARY,
                    onClick: F,
                    children: N.intl.string(N.t.TZftPD)
                }),
                (0, i.jsxs)('div', {
                    className: T.content,
                    children: [
                        (0, i.jsxs)('div', {
                            className: T.panel,
                            children: [
                                (0, i.jsx)('div', {
                                    className: l()(T.stepsContainer),
                                    children: (0, i.jsx)(C.Z, { guildId: t })
                                }),
                                (0, i.jsx)('div', {
                                    className: l()(T.navigationContainer, T.elevatedNavigationContainer),
                                    children: (0, i.jsx)(I.Z, {
                                        guildId: t,
                                        progress: b,
                                        updateCurrentStep: k,
                                        animationClassName: l()({ [T.hidden]: P }),
                                        inSettings: !1
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)(o.animated.div, {
                            className: l()(T.divider, {
                                [T.hidden]: P,
                                [T.dividerResponsive]: !P
                            })
                        }),
                        (0, i.jsx)(o.animated.div, {
                            style: M,
                            className: l()(T.sidebar, {
                                [T.sidebarResponsive]: !P,
                                [T.sidebarHidden]: P
                            }),
                            children: (0, i.jsx)(v.Z, {
                                guildId: t,
                                signed: !1,
                                setSigned: void 0,
                                sidebarWidth: P ? 0 : 380,
                                windowWidth: L,
                                brandPrimaryColor: b.brandPrimaryColor
                            })
                        })
                    ]
                }),
                w(
                    (e, t) =>
                        t &&
                        (0, i.jsx)(o.animated.div, {
                            style: e,
                            className: T.submit,
                            children: (0, i.jsx)(d.Tooltip, {
                                color: d.Tooltip.Colors.GREY,
                                tooltipClassName: T.tooltip,
                                text: Y,
                                'aria-label': null != G ? N.intl.string(N.t.M6w76e) : void 0,
                                shouldShow: null != G,
                                forceOpen: null != G,
                                children: (e) =>
                                    (0, i.jsx)(E.Z, {
                                        ...e,
                                        themeColor: b.brandPrimaryColor,
                                        disabled: !P || U,
                                        submitting: Z,
                                        look: d.Button.Looks.FILLED,
                                        size: d.Button.Sizes.MEDIUM,
                                        color: d.Button.Colors.BRAND,
                                        onClick: V,
                                        children: N.intl.string(N.t['8SuVoK'])
                                    })
                            })
                        })
                )
            ]
        })
    });
}
