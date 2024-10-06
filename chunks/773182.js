n.d(t, {
    KF: function () {
        return D;
    },
    LW: function () {
        return U;
    },
    OO: function () {
        return j;
    },
    TH: function () {
        return w;
    }
}),
    n(47120),
    n(724458);
var i = n(735250),
    l = n(470079),
    r = n(120356),
    a = n.n(r),
    s = n(266067),
    o = n(442837),
    c = n(704215),
    u = n(481060),
    d = n(350810),
    h = n(110924),
    p = n(100527),
    f = n(970606),
    _ = n(963202),
    m = n(824991),
    g = n(564990),
    C = n(353647),
    I = n(243778),
    E = n(669764),
    N = n(210753),
    S = n(863249),
    x = n(937111),
    v = n(369566),
    T = n(314897),
    Z = n(480294),
    A = n(602147),
    b = n(981631),
    R = n(308083),
    M = n(921944),
    L = n(49898),
    P = n(689938),
    O = n(877861);
function y(e) {
    let { title: t, message: n, dismissibleContent: r, gameId: a, onPopoutVisible: c, onClick: h, children: p, isEligibleForUpsell: f = !0, withInviteIcon: _ = !0, backgroundImageUrl: g } = e,
        C = (0, s.TH)(),
        [E, N] = (0, I.US)([r], M.R.SIDEBAR),
        S = E !== r,
        x = (0, d.Z)(),
        v = f && !x && !S && C.pathname !== b.Z5c.GUILD_DISCOVERY;
    l.useEffect(() => {
        v && c();
    }, [v, c]);
    let T = l.useCallback(() => {
            N(M.L.TAKE_ACTION), h();
        }, [N, h]),
        A = l.useCallback(
            (e) => {
                e(), N(M.L.USER_DISMISS);
            },
            [N]
        ),
        R = (0, o.e7)([Z.Z], () => Z.Z.hasConsented(b.pjP.PERSONALIZATION)),
        L = l.useMemo(() => (null != g && R ? { backgroundImage: 'url('.concat(g, ')') } : {}), [g, R]);
    return (0, i.jsxs)('div', {
        className: O.container,
        children: [
            (0, i.jsx)(u.Popout, {
                shouldShow: v,
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, i.jsxs)('div', {
                        className: O.popoutContainer,
                        children: [
                            (0, i.jsx)('div', {
                                className: O.genericBackgroundImage,
                                style: L
                            }),
                            (0, i.jsx)(u.Clickable, {
                                onClick: () => A(l),
                                className: O.close,
                                children: (0, i.jsx)(u.XSmallIcon, {
                                    size: 'xs',
                                    color: u.tokens.colors.WHITE
                                })
                            }),
                            (0, i.jsxs)('div', {
                                className: O.popoutContent,
                                children: [_ && (0, i.jsx)(m.YV, {}), (0, i.jsx)(m.aF, { title: t }), (0, i.jsx)(m.To, { message: n }), (0, i.jsx)(m.Xu, { onClick: T })]
                            }),
                            (0, i.jsx)('div', { className: O.popoutCaret })
                        ]
                    });
                },
                position: 'top',
                animationPosition: 'top',
                align: 'left',
                spacing: 16,
                children: (e) =>
                    (0, i.jsx)('div', {
                        ...e,
                        className: O.popoutAnchor
                    })
            }),
            p({ onClick: T })
        ]
    });
}
function D(e) {
    let { children: t } = e,
        {
            gameId: n,
            backgroundImageUrl: r,
            treatment: a,
            hasFetchedGame: s
        } = (function () {
            var e;
            let t = (0, o.e7)([T.default], () => T.default.getId()),
                { recent: n, outbox: i } = (0, v.Z)(t),
                r = (0, o.e7)([C.Z], () => C.Z.hasInitialized),
                a = (0, o.e7)([Z.Z], () => Z.Z.hasConsented(b.pjP.PERSONALIZATION)),
                s = null == i && r,
                c = l.useMemo(() => (a ? n.reduce((e, t) => ('played_game_extra' !== t.extra.type || null == R.gQ.get(t.extra.application_id) ? e : e.concat(t.extra.application_id)), []) : []), [n, a]);
            l.useEffect(() => {
                s && a && (0, g.JX)(t);
            }, [t, s, a]);
            let u = null !== (e = c[0]) && void 0 !== e ? e : null,
                { isFetching: d } = (0, N.$)(u),
                h = (0, o.e7)([E.Z], () => E.Z.getGame(u)),
                p = l.useMemo(() => {
                    if (null == h) return null;
                    let { artwork: e, screenshots: t } = h;
                    if (e.length > 0) {
                        let t = Math.floor(Math.random() * (e.length - 1));
                        return e[t];
                    }
                    if (t.length > 0) {
                        let e = Math.floor(Math.random() * (t.length - 1));
                        return t[e];
                    }
                    return null;
                }, [h]);
            return {
                gameId: u,
                treatment: null != u && a ? R.O7.GAME_SPECIFIC : R.O7.GENERIC,
                backgroundImageUrl: p,
                hasFetchedGame: !s && !d
            };
        })(),
        u = l.useCallback(() => {
            (0, f.tv)({
                location: p.Z.GUILDS_LIST,
                treatment: a,
                gameApplicationId: n
            });
        }, [a, n]),
        d = l.useCallback(() => {
            (0, f.GS)({
                location: p.Z.GUILDS_LIST,
                treatment: a,
                gameApplicationId: n
            }),
                (0, A.o)(L.F$.SERVERS);
        }, [a, n]);
    return a !== R.O7.GAME_SPECIFIC || s
        ? (0, i.jsx)(y, {
              title: P.Z.Messages.RAPIDASH_GUILD_LIST_USER_UPSELL_TITLE,
              message: P.Z.Messages.RAPIDASH_GUILD_LIST_USER_UPSELL_MESSAGE,
              gameId: n,
              backgroundImageUrl: r,
              dismissibleContent: c.z.RAPIDASH_M3_DISCOVERY_UPSELL,
              onClick: d,
              onPopoutVisible: u,
              withInviteIcon: !1,
              children: t
          })
        : (0, i.jsx)(i.Fragment, { children: t({ onClick: d }) });
}
function j(e) {
    let { children: t } = e,
        { guilds: n } = (0, _.C3)({
            location: 'GuildsBarClanAdminUpsellPopout',
            includeConverted: !1
        }),
        r = n.length > 0,
        a = l.useCallback(() => {
            (0, f.TE)({ location: p.Z.GUILDS_LIST });
        }, []),
        s = l.useCallback(() => {
            (0, f._9)({ location: p.Z.GUILDS_LIST });
        }, []),
        o = P.Z.Messages.RAPIDASH_CHANNEL_LIST_ADMIN_UPSELL_TITLE,
        u = P.Z.Messages.RAPIDASH_CHANNEL_LIST_ADMIN_UPSELL_MESSAGE;
    return (0, i.jsx)(y, {
        title: o,
        message: u,
        dismissibleContent: c.z.GUILD_LIST_CLAN_ADMIN_UPSELL,
        gameId: null,
        onClick: s,
        isEligibleForUpsell: r,
        onPopoutVisible: a,
        children: t
    });
}
function w(e) {
    let { onActivate: t, children: n } = e,
        r = (0, o.e7)([x.Z], () => x.Z.hasJoinRequestCoackmark()),
        a = l.useCallback(() => {
            S.ZP.clearCoachmark();
        }, []),
        s = (0, h.Z)(r),
        c = l.useRef(null);
    return (
        l.useEffect(() => {
            if (r && r !== s) {
                var e, n, i, l, a;
                t(), null === (a = c.current) || void 0 === a || null === (l = a.ref) || void 0 === l || null === (i = l.current) || void 0 === i || null === (n = i.layerRef) || void 0 === n || null === (e = n.current) || void 0 === e || e.updatePosition();
            }
        }, [c, r, s, t]),
        (0, i.jsxs)('div', {
            className: O.container,
            children: [
                (0, i.jsx)(u.Popout, {
                    ref: c,
                    shouldShow: r,
                    renderPopout: () =>
                        (0, i.jsxs)('div', {
                            className: O.popoutContainer,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: O.popoutContent,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: O.coachmarkTextContainer,
                                            children: [
                                                (0, i.jsx)(u.Heading, {
                                                    variant: 'heading-md/medium',
                                                    children: P.Z.Messages.CLAN_USER_APPLICATION_COACHMARK_TITLE
                                                }),
                                                (0, i.jsx)(u.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'text-muted',
                                                    children: P.Z.Messages.CLAN_USER_APPLICATION_COACHMARK_BODY
                                                })
                                            ]
                                        }),
                                        (0, i.jsx)(u.Button, {
                                            fullWidth: !0,
                                            size: u.ButtonSizes.SMALL,
                                            color: u.ButtonColors.BRAND,
                                            onClick: a,
                                            children: P.Z.Messages.CLAN_USER_APPLICATION_COACHMARK_CTA
                                        })
                                    ]
                                }),
                                (0, i.jsx)('div', { className: O.popoutCaretLeft })
                            ]
                        }),
                    position: 'right',
                    animationPosition: 'right',
                    align: 'top',
                    spacing: 16,
                    children: (e) =>
                        (0, i.jsx)('div', {
                            ...e,
                            className: O.popoutAnchor
                        })
                }),
                n
            ]
        })
    );
}
function U(e) {
    let { hideGradient: t, children: n } = e;
    return (0, i.jsxs)('div', {
        className: O.footer,
        children: [(0, i.jsx)('div', { className: a()(O.gradient, { [O.gradientHidden]: t }) }), n]
    });
}
