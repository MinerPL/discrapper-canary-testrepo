n.d(t, {
    KF: function () {
        return L;
    },
    LW: function () {
        return M;
    },
    OO: function () {
        return A;
    },
    TH: function () {
        return b;
    }
}), n(47120);
var i = n(735250), l = n(470079), r = n(120356), a = n.n(r), s = n(266067), o = n(442837), c = n(704215), u = n(481060), d = n(350810), h = n(110924), p = n(100527), _ = n(970606), f = n(963202), m = n(824991), g = n(243778), C = n(863249), I = n(937111), E = n(602147), N = n(981631), x = n(308083), S = n(921944), Z = n(689938), v = n(210606);
function T(e) {
    let {
            title: t,
            message: n,
            dismissibleContent: r,
            defaultGameId: a,
            onPopoutVisible: o,
            onClick: c,
            children: h,
            isEligibleForUpsell: p = !0,
            withInviteIcon: _ = !0
        } = e, f = (0, s.TH)(), [C, I] = (0, g.U)([r], S.R.SIDEBAR), Z = C !== r, T = (0, d.Z)(), L = p && !T && !Z && f.pathname !== N.Z5c.GUILD_DISCOVERY;
    l.useEffect(() => {
        L && o();
    }, [
        L,
        o
    ]);
    let A = l.useMemo(() => {
            switch (a) {
            case x.nJ:
                return v.valorantBackgroundImage;
            case x.xn:
                return v.genshinBackgroundImage;
            default:
                return;
            }
        }, [a]), b = l.useCallback(() => {
            I(S.L.TAKE_ACTION), c(), (0, E.o)();
        }, [
            I,
            c
        ]), M = l.useCallback(e => {
            e(), I(S.L.USER_DISMISS);
        }, [I]);
    return (0, i.jsxs)('div', {
        className: v.container,
        children: [
            (0, i.jsx)(u.Popout, {
                shouldShow: L,
                renderPopout: e => {
                    let {closePopout: l} = e;
                    return (0, i.jsxs)('div', {
                        className: v.popoutContainer,
                        children: [
                            (0, i.jsx)('div', { className: A }),
                            (0, i.jsx)(u.Clickable, {
                                onClick: () => M(l),
                                className: v.close,
                                children: (0, i.jsx)(u.CloseSmallIcon, {
                                    size: 'xs',
                                    color: u.tokens.colors.WHITE
                                })
                            }),
                            (0, i.jsxs)('div', {
                                className: v.popoutContent,
                                children: [
                                    _ && (0, i.jsx)(m.YV, {}),
                                    (0, i.jsx)(m.aF, { title: t }),
                                    (0, i.jsx)(m.To, { message: n }),
                                    (0, i.jsx)(m.Xu, { onClick: b })
                                ]
                            }),
                            (0, i.jsx)('div', { className: v.popoutCaret })
                        ]
                    });
                },
                position: 'top',
                animationPosition: 'top',
                align: 'left',
                spacing: 16,
                children: e => (0, i.jsx)('div', {
                    ...e,
                    className: v.popoutAnchor
                })
            }),
            h({ onClick: b })
        ]
    });
}
function L(e) {
    let {
            defaultGameId: t,
            children: n
        } = e, r = l.useCallback(() => {
            (0, _.tv)({ location: p.Z.GUILDS_LIST });
        }, []), a = l.useCallback(() => {
            (0, _.GS)({ location: p.Z.GUILDS_LIST });
        }, []), [s, o] = l.useMemo(() => {
            switch (t) {
            case x.xn:
                return [
                    Z.Z.Messages.CLAN_GUILD_LIST_USER_UPSELL_GENSHIN_TITLE,
                    Z.Z.Messages.CLAN_GUILD_LIST_USER_UPSELL_GENSHIN_MESSAGE
                ];
            case x.nJ:
                return [
                    Z.Z.Messages.CLAN_GUILD_LIST_USER_UPSELL_VALORANT_TITLE,
                    Z.Z.Messages.CLAN_GUILD_LIST_USER_UPSELL_VALORANT_MESSAGE
                ];
            default:
                return [
                    void 0,
                    void 0
                ];
            }
        }, [t]);
    return (0, i.jsx)(T, {
        title: s,
        message: o,
        dismissibleContent: c.z.GUILD_LIST_CLAN_USER_UPSELL,
        defaultGameId: t,
        onClick: a,
        onPopoutVisible: r,
        withInviteIcon: !1,
        children: n
    });
}
function A(e) {
    let {
            defaultGameId: t,
            children: n
        } = e, {guilds: r} = (0, f.C3)({
            location: 'GuildsBarClanAdminUpsellPopout',
            includeConverted: !1
        }), a = r.length > 0, s = l.useCallback(() => {
            (0, _.TE)({ location: p.Z.GUILDS_LIST });
        }, []), o = l.useCallback(() => {
            (0, _._9)({ location: p.Z.GUILDS_LIST });
        }, []), [u, d] = l.useMemo(() => {
            switch (t) {
            case x.xn:
                return [
                    Z.Z.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_GENSHIN_TITLE,
                    Z.Z.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_MESSAGE
                ];
            case x.nJ:
                return [
                    Z.Z.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_VALORANT_TITLE,
                    Z.Z.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_MESSAGE
                ];
            default:
                return [
                    void 0,
                    void 0
                ];
            }
        }, [t]);
    return (0, i.jsx)(T, {
        title: u,
        message: d,
        dismissibleContent: c.z.GUILD_LIST_CLAN_ADMIN_UPSELL,
        defaultGameId: t,
        onClick: o,
        isEligibleForUpsell: a,
        onPopoutVisible: s,
        children: n
    });
}
function b(e) {
    let {
            onActivate: t,
            children: n
        } = e, r = (0, o.e7)([I.Z], () => I.Z.hasJoinRequestCoackmark()), a = l.useCallback(() => {
            C.Z.clearCoachmark();
        }, []), s = (0, h.Z)(r), c = l.useRef(null);
    return l.useEffect(() => {
        if (r && r !== s) {
            var e, n, i, l, a;
            t(), null === (a = c.current) || void 0 === a || null === (l = a.ref) || void 0 === l || null === (i = l.current) || void 0 === i || null === (n = i.layerRef) || void 0 === n || null === (e = n.current) || void 0 === e || e.updatePosition();
        }
    }, [
        c,
        r,
        s,
        t
    ]), (0, i.jsxs)('div', {
        className: v.container,
        children: [
            (0, i.jsx)(u.Popout, {
                ref: c,
                shouldShow: r,
                renderPopout: () => (0, i.jsxs)('div', {
                    className: v.popoutContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: v.popoutContent,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: v.coachmarkTextContainer,
                                    children: [
                                        (0, i.jsx)(u.Heading, {
                                            variant: 'heading-md/medium',
                                            children: Z.Z.Messages.CLAN_USER_APPLICATION_COACHMARK_TITLE
                                        }),
                                        (0, i.jsx)(u.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: Z.Z.Messages.CLAN_USER_APPLICATION_COACHMARK_BODY
                                        })
                                    ]
                                }),
                                (0, i.jsx)(u.Button, {
                                    fullWidth: !0,
                                    size: u.ButtonSizes.SMALL,
                                    color: u.ButtonColors.BRAND,
                                    onClick: a,
                                    children: Z.Z.Messages.CLAN_USER_APPLICATION_COACHMARK_CTA
                                })
                            ]
                        }),
                        (0, i.jsx)('div', { className: v.popoutCaretLeft })
                    ]
                }),
                position: 'right',
                animationPosition: 'right',
                align: 'top',
                spacing: 16,
                children: e => (0, i.jsx)('div', {
                    ...e,
                    className: v.popoutAnchor
                })
            }),
            n
        ]
    });
}
function M(e) {
    let {
        hideGradient: t,
        children: n
    } = e;
    return (0, i.jsxs)('div', {
        className: v.footer,
        children: [
            (0, i.jsx)('div', { className: a()(v.gradient, { [v.gradientHidden]: t }) }),
            n
        ]
    });
}
