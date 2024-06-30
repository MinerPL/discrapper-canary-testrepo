t.r(e);
var l = t(735250), u = t(470079), r = t(442837), i = t(481060), a = t(239091), o = t(883385), c = t(108843), s = t(2052), d = t(100527), _ = t(906732), E = t(299206), M = t(976192), f = t(910693), T = t(271383), Z = t(979651), A = t(933409), O = t(389052), C = t(88966), I = t(712301), L = t(567711), p = t(358386), S = t(725119), U = t(931617), g = t(981631), D = t(689938);
e.default = (0, c.Z)((0, o.Z)(function (n) {
    var e;
    let {
            user: t,
            guildId: o,
            channelId: c,
            context: g,
            onSelect: x,
            moderationAlertId: N,
            analyticsLocation: b,
            analyticsLocations: v,
            onCloseContextMenu: h,
            showTransferOwnershipItem: R
        } = n, {analyticsLocations: j} = (0, _.ZP)(d.Z.CONTEXT_MENU), y = (0, s.O)(), P = null !== (e = null == v ? void 0 : v[0]) && void 0 !== e ? e : j[0], m = (0, f.sE)(o, {
            location: P,
            targetUserId: t.id
        }), G = (0, r.e7)([Z.Z], () => {
            var n;
            return null !== (n = Z.Z.getUserVoiceChannelId(o, t.id)) && void 0 !== n ? n : void 0;
        }, [
            o,
            t.id
        ]), k = u.useCallback(() => {
            m(f.jQ.COPY_ID);
        }, [m]), w = (0, r.e7)([T.ZP], () => T.ZP.isMember(o, t.id), [
            o,
            t.id
        ]), B = (0, S.Z)(t.id, o), F = (0, C.Z)(t.id, g), Y = (0, M.Z)({
            guildId: o,
            userId: t.id,
            analyticsLocation: null != b ? b : y.location,
            analyticsLocations: [P],
            context: g
        }), H = (0, O.Z)({
            user: t,
            location: P
        }), W = (0, A.Z)(t, o, null != c ? c : G, P), q = (0, L.Z)(c, N), z = (0, p.Z)(t, o), V = (0, U.Z)(t.id, o, !1, P), K = (0, E.Z)({
            id: t.id,
            label: D.Z.Messages.COPY_ID_USER,
            onSuccess: k
        }), X = (0, I.Z)(t, o), Q = !!(null == t ? void 0 : t.isNonUserBot());
    return (0, l.jsxs)(i.Menu, {
        navId: 'user-context',
        onClose: () => {
            (0, a.Zy)(), null == h || h();
        },
        'aria-label': D.Z.Messages.USER_ACTIONS_MENU_LABEL,
        onSelect: x,
        children: [
            !Q && (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)(i.MenuGroup, {
                        children: [
                            B,
                            F
                        ]
                    }),
                    (0, l.jsxs)(i.MenuGroup, {
                        children: [
                            Y,
                            H
                        ]
                    }),
                    w && (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(i.MenuGroup, { children: W }),
                            (0, l.jsxs)(i.MenuGroup, {
                                children: [
                                    V,
                                    X
                                ]
                            })
                        ]
                    }),
                    null != N ? q : null,
                    R && null != z ? (0, l.jsx)(i.MenuGroup, { children: z }) : null
                ]
            }),
            (0, l.jsx)(i.MenuGroup, { children: K })
        ]
    });
}, { object: g.qAy.CONTEXT_MENU }), [
    d.Z.CONTEXT_MENU,
    d.Z.GUILD_MODERATION_USER_MENU
]);
