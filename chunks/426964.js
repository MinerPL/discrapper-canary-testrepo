n(47120);
var r = n(200651),
    i = n(192379),
    a = n(481060),
    s = n(442837),
    o = n(100527),
    l = n(231467),
    u = n(749681),
    c = n(216742),
    d = n(246364),
    f = n(937111),
    _ = n(741606),
    h = n(703656),
    p = n(698305),
    m = n(314897),
    g = n(271383),
    E = n(594174),
    v = n(51144),
    I = n(970606),
    S = n(963202),
    T = n(645896),
    b = n(905362),
    y = n(353093),
    A = n(574410),
    N = n(954138),
    C = n(169559),
    R = n(284019),
    O = n(308083),
    D = n(981631),
    L = n(49898),
    x = n(128449),
    w = n(388032),
    M = n(469761);
function P(e) {
    e.stopPropagation();
}
t.Z = i.memo(function (e) {
    var t, n;
    let { clan: k, isLoading: U, onClose: G, profileViewedAnalytics: B, userId: Z } = e,
        F = null == k ? void 0 : k.identityGuildId,
        V = (0, T.Cc)(null != F ? F : null),
        j = null == k ? void 0 : k.tag,
        H = (0, C.Z)('clan_guild_profile'),
        { enabled: Y } = (0, c.I7)(),
        { enabled: W } = A.w.useExperiment({ location: 'ClanGuildProfile' }, { autoTrackExposure: !1 }),
        [K, z] = i.useState(!1),
        [q, Q] = i.useState(''),
        X = (0, s.e7)([E.default], () => E.default.getUser(Z)),
        J = (0, N.Z)('base_clan_tag_chiplet'),
        $ = (0, s.e7)([m.default], () => m.default.getId()),
        ee = (0, s.e7)([g.ZP], () => (null != F ? g.ZP.getMember(F, $) : null), [F, $]),
        et = (0, s.e7)([f.Z], () => {
            var e;
            return (null == V ? void 0 : V.id) != null && (null === (e = f.Z.getRequest(V.id)) || void 0 === e ? void 0 : e.applicationStatus) === d.wB.SUBMITTED;
        }),
        en = null != V && V.memberCount >= O.Du,
        er = (0, s.e7)([E.default], () => E.default.getUser($), [$]),
        ei = (null == ee ? void 0 : ee.joinedAt) != null,
        ea = (0, y.Z4)(F, null == er ? void 0 : er.clan),
        es = null != (0, _.Z)(F),
        eo = (0, S.iN)('ClanGuildProfile');
    i.useEffect(() => {
        null != F &&
            (0, I.u0)({
                guildId: F,
                hasJoinRequest: es,
                ...B,
                location: o.Z.CLAN_GUILD_PROFILE
            });
    }, [F, es, B]);
    let el = i.useCallback(() => {
            (0, a.closeAllModals)(),
                (0, I.hM)(F, I.UE.DISCOVERY),
                (0, u.transitionToGlobalDiscovery)({
                    tab: L.F$.SERVERS,
                    selectedServersTab: x.vf.GUILDS,
                    entrypoint: x.Qq.PROFILE
                });
        }, [F]),
        eu = i.useCallback(() => {
            (0, I.hM)(F, I.UE.ASK_TO_JOIN), z(!K);
        }, [F, K]),
        ec = i.useCallback(async () => {
            if (null != X)
                try {
                    await (0, p.Z)({
                        userId: X.id,
                        content: q,
                        openChannel: !0,
                        location: 'guildProfilePopout'
                    });
                } catch (e) {}
        }, [X, q]),
        ed = i.useCallback(
            (e) => {
                if (null != F) e.stopPropagation(), e.preventDefault(), null == G || G(), (0, I.hM)(F, I.UE.TAG_ADOPTION), (0, b.SJ)(F);
            },
            [F, G]
        ),
        ef = i.useCallback(
            (e) => {
                if (null == V || null == F) return;
                if ((e.stopPropagation(), e.preventDefault(), null == G || G(), !es))
                    (0, I.hM)(F, I.UE.APPLY_FLOW),
                        (0, b.qF)(F, V, {
                            source: null == B ? void 0 : B.source,
                            messageId: null == B ? void 0 : B.messageId,
                            tagUserId: null == B ? void 0 : B.tagUserId,
                            location: o.Z.CLAN_GUILD_PROFILE
                        });
            },
            [V, F, es, G, B]
        ),
        e_ = i.useCallback(() => {
            if (null != F) (0, I.hM)(F, I.UE.APPLICATION), (0, h.uL)(D.Z5c.GUILD_MEMBER_VERIFICATION(F));
        }, [F]),
        eh = i.useCallback(() => {
            if (null != F) (0, I.hM)(F, I.UE.GUILD), (0, h.XU)(F);
        }, [F]),
        ep = i.useMemo(() => {
            var e, t;
            return {
                color: a.Button.Colors.BRAND,
                size: a.Button.Sizes.SMALL,
                fullWidth: !0,
                className: M.button,
                themeColor: null !== (t = null == V ? void 0 : null === (e = V.branding) || void 0 === e ? void 0 : e.primaryColor) && void 0 !== t ? t : null
            };
        }, [null == V ? void 0 : null === (t = V.branding) || void 0 === t ? void 0 : t.primaryColor]),
        em = i.useMemo(() => {
            var e;
            switch (!0) {
                case !J:
                    return null;
                case !ei && es:
                    return (0, r.jsx)(R.Z, {
                        onClick: e_,
                        ...ep,
                        children: w.intl.string(w.t.dXvKgY)
                    });
                case !ei && (null == V ? void 0 : null === (e = V.discoveryProfileFeatures) || void 0 === e ? void 0 : e.has(D.oNc.CLAN_DISCOVERY_DISABLED)):
                    return null;
                case !ei && eo:
                    return (0, r.jsx)(R.Z, {
                        onClick: ef,
                        ...ep,
                        children: w.intl.string(w.t.YfkjGh)
                    });
                case ei && !ea:
                    return (0, r.jsx)(R.Z, {
                        onClick: ed,
                        ...ep,
                        children: w.intl.string(w.t['1keBy8'])
                    });
                case ei && ea:
                    return (0, r.jsx)(R.Z, {
                        onClick: eh,
                        ...ep,
                        children: w.intl.string(w.t.muzrLS)
                    });
                default:
                    return null;
            }
        }, [J, ei, es, null == V ? void 0 : V.discoveryProfileFeatures, eo, ea, e_, ep, ef, ed, eh]),
        eg = i.useMemo(
            () => ({
                className: M.container,
                onClick: P
            }),
            []
        );
    if (null == j || null == V || null == F || U)
        return (0, r.jsx)('div', {
            ...eg,
            children: (0, r.jsx)(a.Spinner, {})
        });
    let eE = !ei && !H && null != X && !es && W && !K,
        ev = null != em || (H && Y) || eE,
        eI = null !== (n = v.ZP.getName(X)) && void 0 !== n ? n : '';
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                ...eg,
                children: [
                    (0, r.jsx)(l.xV, {
                        clan: V,
                        className: M.cardContainer,
                        isMember: ei,
                        hasPendingJoinRequest: et,
                        atMaxMemberCapacity: en
                    }),
                    ev &&
                        (0, r.jsxs)('div', {
                            className: M.buttonGroupContainer,
                            children: [
                                null != em && em,
                                H &&
                                    Y &&
                                    (0, r.jsx)(a.Button, {
                                        onClick: el,
                                        color: a.Button.Colors.TRANSPARENT,
                                        size: a.Button.Sizes.SMALL,
                                        fullWidth: !0,
                                        children: w.intl.string(w.t.PT97yM)
                                    }),
                                eE &&
                                    (0, r.jsx)(R.Z, {
                                        onClick: eu,
                                        ...ep,
                                        children: w.intl.string(w.t.HzLAb2)
                                    })
                            ]
                        })
                ]
            }),
            K &&
                (0, r.jsxs)(a.Dialog, {
                    className: M.askToJoinInputWrapper,
                    children: [
                        (0, r.jsx)(a.Text, {
                            color: 'interactive-normal',
                            variant: 'text-xs/normal',
                            children: w.intl.format(w.t.k5d4Wl, { username: eI })
                        }),
                        (0, r.jsxs)('div', {
                            className: M.inputRow,
                            children: [
                                (0, r.jsx)(a.TextInput, {
                                    inputClassName: M.input,
                                    value: q,
                                    onChange: Q,
                                    placeholder: w.intl.formatToPlainString(w.t['4c+CAw'], { channel: eI })
                                }),
                                (0, r.jsx)(a.Button, {
                                    className: M.sendButton,
                                    color: a.Button.Colors.BRAND,
                                    onClick: ec,
                                    children: w.intl.string(w.t.TXNS7e)
                                })
                            ]
                        })
                    ]
                })
        ]
    });
});
