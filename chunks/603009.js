n.d(t, {
    Z: function () {
        return R;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(180081),
    o = n(704215),
    c = n(481060),
    u = n(442837),
    d = n(410030),
    h = n(607070),
    m = n(645041),
    p = n(430824),
    _ = n(914010),
    f = n(594174),
    E = n(626135),
    g = n(645896),
    C = n(905362),
    I = n(603368),
    x = n(353093),
    T = n(940725),
    v = n(114487),
    S = n(979264),
    N = n(981631),
    A = n(921944),
    Z = n(689938),
    M = n(879012);
function b(e) {
    var t;
    let { guild: n, showToast: a, onConfirm: o, onDismiss: m } = e,
        [p, _] = s.useState(!1),
        E = s.useRef(null),
        C = (0, g.Cc)(n.id),
        T = (0, d.ZP)(),
        N = (0, u.e7)([h.Z], () => h.Z.useReducedMotion),
        A = (0, I.nP)(null == C ? void 0 : null === (t = C.branding) || void 0 === t ? void 0 : t.primaryColor, [c.tokens.colors.BG_BRAND, 0.5]),
        b = c.tokens.colors.BG_SURFACE_OVERLAY.resolve({
            theme: T,
            saturation: 1
        }).hex(),
        R = (0, I.nj)(A, b, 'top left', 0.3, '30%'),
        L = (0, u.e7)(
            [f.default],
            () => {
                var e;
                return null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.clan;
            },
            []
        );
    s.useLayoutEffect(() => {
        var e;
        if (null == E.current) return;
        let t = null === (e = E.current) || void 0 === e ? void 0 : e.parentNode;
        return (
            null != t && (t.style.zIndex = '1003'),
            () => {
                null != t && (t.style.zIndex = '1002');
            }
        );
    }, []);
    let j = s.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), m();
            },
            [m]
        ),
        P = s.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), o();
            },
            [o]
        ),
        O = (0, c.useTransition)(
            a,
            {
                from: {
                    transform: N ? 'translateY(0)' : 'translateY(16px)',
                    opacity: 0,
                    pointerEvents: 'none'
                },
                enter: {
                    transform: 'translateY(0)',
                    opacity: 1,
                    pointerEvents: 'all'
                },
                leave: {
                    transform: N ? 'translateY(0)' : 'translateY(16px)',
                    opacity: 0,
                    pointerEvents: 'none'
                },
                config: {
                    mass: 1,
                    tension: 500,
                    friction: 18,
                    clamp: !0
                },
                delay: 200
            },
            'animate-always'
        ),
        y = (0, x.Zp)(n, L),
        D = y ? Z.Z.Messages.CLAN_USER_ADOPT_TAG_NEW_IDENTITY_TITLE.format({ guildName: n.name }) : Z.Z.Messages.CLAN_USER_ADOPT_TAG_UPSELL_TITLE.format({ guildName: n.name }),
        k = y ? Z.Z.Messages.CLAN_USER_ADOPT_TAG_NEW_IDENTITY_DESCRIPTION : Z.Z.Messages.CLAN_USER_ADOPT_TAG_UPSELL_DESCRIPTION,
        U = y ? Z.Z.Messages.CLAN_USER_ADOPT_TAG_NEW_IDENTITY_ARIA_LABEL.format({ guildName: n.name }) : Z.Z.Messages.CLAN_USER_ADOPT_TAG_UPSELL_ARIA_LABEL.format({ guildName: n.name });
    return O((e, t) => {
        var s, a;
        return (
            t &&
            (0, i.jsx)(r.animated.div, {
                onMouseEnter: () => _(!0),
                onMouseLeave: () => _(!1),
                className: l()(M.wrapper),
                style: {
                    ...e,
                    ...R
                },
                ref: E,
                children: (0, i.jsx)(c.ClickableContainer, {
                    'aria-label': U,
                    onClick: P,
                    children: (0, i.jsxs)('div', {
                        className: l()(M.toastContainerInner, p ? M.hovered : null),
                        children: [
                            (0, i.jsxs)('div', {
                                className: M.guildIconContainer,
                                children: [
                                    (0, i.jsx)(v.Z, {
                                        guild: n,
                                        iconSize: 64
                                    }),
                                    (0, i.jsx)('div', {
                                        className: M.guildTagContainer,
                                        children: (0, i.jsx)(S.aG, {
                                            guildId: n.id,
                                            clanTag: null === (s = n.clan) || void 0 === s ? void 0 : s.tag,
                                            clanBadge: null === (a = n.clan) || void 0 === a ? void 0 : a.badge,
                                            className: M.guildClanTag
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                children: [
                                    (0, i.jsx)('div', {
                                        children: (0, i.jsx)(c.Heading, {
                                            variant: 'heading-md/bold',
                                            color: 'header-primary',
                                            children: D
                                        })
                                    }),
                                    (0, i.jsx)('div', {
                                        children: (0, i.jsx)(c.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'header-secondary',
                                            children: k
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', {
                                children: (0, i.jsx)(c.Clickable, {
                                    className: M.toastButton,
                                    onClick: j,
                                    children: (0, i.jsx)(c.XSmallBoldIcon, {
                                        size: 'custom',
                                        width: 20,
                                        height: 20
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        );
    });
}
function R(e) {
    let {} = e,
        t = (0, u.e7)([_.Z], () => _.Z.getGuildId()),
        n = (0, T.h)(t, 'clan_tag_upsell_toast'),
        a = (0, u.e7)([p.Z], () => p.Z.getGuild(t), [t]),
        [l, r] = s.useState(!1),
        c = s.useRef(null);
    s.useEffect(
        () => (
            n &&
                (c.current = window.setTimeout(() => {
                    r(!0),
                        E.default.track(N.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                            type: o.C[o.C.ADOPT_CLAN_IDENTITY_NOTICE],
                            guild_id: null != t ? t : N.lds
                        });
                }, 2500)),
            () => {
                null != c.current && window.clearTimeout(c.current);
            }
        ),
        []
    );
    let d = s.useCallback(() => {
            if ((r(!1), null != t)) (0, C.SJ)(t);
        }, [, t]),
        h = s.useCallback(() => {
            if ((r(!1), null != t)) (0, m.Qd)(o.C.ADOPT_CLAN_IDENTITY_NOTICE, null != t ? t : N.lds, !0, A.L.DISMISS);
        }, [t]);
    return n && null != t && null != a
        ? (0, i.jsx)(b, {
              guild: a,
              onConfirm: d,
              onDismiss: h,
              showToast: l
          })
        : null;
}
