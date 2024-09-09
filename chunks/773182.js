n.d(t, {
    KF: function () {
        return j;
    },
    LW: function () {
        return U;
    },
    OO: function () {
        return D;
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
    _ = n(970606),
    f = n(963202),
    g = n(824991),
    m = n(564990),
    C = n(353647),
    I = n(243778),
    E = n(669764),
    N = n(210753),
    x = n(863249),
    S = n(937111),
    v = n(369566),
    Z = n(314897),
    T = n(480294),
    L = n(602147),
    A = n(981631),
    b = n(308083),
    M = n(921944),
    R = n(49898),
    P = n(689938),
    O = n(174507);
function y(e) {
    let { title: t, message: n, dismissibleContent: r, gameId: a, onPopoutVisible: c, onClick: h, children: p, isEligibleForUpsell: _ = !0, withInviteIcon: f = !0, backgroundImageUrl: m } = e,
        C = (0, s.TH)(),
        [E, N] = (0, I.US)([r], M.R.SIDEBAR),
        x = E !== r,
        S = (0, d.Z)(),
        v = _ && !S && !x && C.pathname !== A.Z5c.GUILD_DISCOVERY;
    l.useEffect(() => {
        v && c();
    }, [v, c]);
    let Z = l.useCallback(() => {
            N(M.L.TAKE_ACTION), h();
        }, [N, h]),
        L = l.useCallback(
            (e) => {
                e(), N(M.L.USER_DISMISS);
            },
            [N]
        ),
        b = (0, o.e7)([T.Z], () => T.Z.hasConsented(A.pjP.PERSONALIZATION)),
        R = l.useMemo(() => (null != m && b ? { backgroundImage: 'url('.concat(m, ')') } : {}), [m, b]);
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
                                style: R
                            }),
                            (0, i.jsx)(u.Clickable, {
                                onClick: () => L(l),
                                className: O.close,
                                children: (0, i.jsx)(u.XSmallIcon, {
                                    size: 'xs',
                                    color: u.tokens.colors.WHITE
                                })
                            }),
                            (0, i.jsxs)('div', {
                                className: O.popoutContent,
                                children: [f && (0, i.jsx)(g.YV, {}), (0, i.jsx)(g.aF, { title: t }), (0, i.jsx)(g.To, { message: n }), (0, i.jsx)(g.Xu, { onClick: Z })]
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
            p({ onClick: Z })
        ]
    });
}
function j(e) {
    let { children: t } = e,
        n = l.useCallback(() => {
            (0, _.tv)({ location: p.Z.GUILDS_LIST });
        }, []),
        r = l.useCallback(() => {
            (0, _.GS)({ location: p.Z.GUILDS_LIST }), (0, L.o)(R.F$.SERVERS);
        }, []),
        {
            gameId: a,
            backgroundImageUrl: s,
            hasFetchedGame: u
        } = (function () {
            var e;
            let t = (0, o.e7)([Z.default], () => Z.default.getId()),
                { recent: n } = (0, v._)(t, !0),
                i = (0, o.e7)([C.Z], () => C.Z.getUserOutbox(t), [t]),
                r = (0, o.e7)([C.Z], () => C.Z.hasInitialized),
                a = null == i && r,
                s = l.useMemo(() => n.reduce((e, t) => ('played_game_extra' !== t.extra.type || null == b.gQ.get(t.extra.application_id) ? e : e.concat(t.extra.application_id)), []), [n]);
            l.useEffect(() => {
                a && (0, m.JX)(t);
            }, [t, a]);
            let c = null !== (e = s[0]) && void 0 !== e ? e : null,
                { isFetching: u } = (0, N.$)(c),
                d = (0, o.e7)([E.Z], () => E.Z.getGame(c));
            return {
                gameId: c,
                backgroundImageUrl: l.useMemo(() => {
                    if (null == d) return null;
                    let { artwork: e, screenshots: t } = d;
                    if (e.length > 0) {
                        let t = Math.floor(Math.random() * (e.length - 1));
                        return e[t];
                    }
                    if (t.length > 0) {
                        let e = Math.floor(Math.random() * (t.length - 1));
                        return t[e];
                    }
                    return null;
                }, [d]),
                hasFetchedGame: !a && !u
            };
        })();
    return u
        ? (0, i.jsx)(y, {
              title: P.Z.Messages.RAPIDASH_GUILD_LIST_USER_UPSELL_TITLE,
              message: P.Z.Messages.RAPIDASH_GUILD_LIST_USER_UPSELL_MESSAGE,
              gameId: a,
              backgroundImageUrl: s,
              dismissibleContent: c.z.RAPIDASH_M3_DISCOVERY_UPSELL,
              onClick: r,
              onPopoutVisible: n,
              withInviteIcon: !1,
              children: t
          })
        : null;
}
function D(e) {
    let { children: t } = e,
        { guilds: n } = (0, f.C3)({
            location: 'GuildsBarClanAdminUpsellPopout',
            includeConverted: !1
        }),
        r = n.length > 0,
        a = l.useCallback(() => {
            (0, _.TE)({ location: p.Z.GUILDS_LIST });
        }, []),
        s = l.useCallback(() => {
            (0, _._9)({ location: p.Z.GUILDS_LIST });
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
        r = (0, o.e7)([S.Z], () => S.Z.hasJoinRequestCoackmark()),
        a = l.useCallback(() => {
            x.ZP.clearCoachmark();
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
