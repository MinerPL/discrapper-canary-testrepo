n.d(t, {
    Z: function () {
        return P;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(442837),
    s = n(481060),
    o = n(727637),
    l = n(58540),
    u = n(100527),
    c = n(906732),
    d = n(680295),
    _ = n(271383),
    E = n(430824),
    f = n(785717),
    h = n(221292),
    p = n(481046),
    m = n(318661),
    I = n(78675),
    T = n(113557),
    g = n(169979),
    S = n(119096),
    A = n(502762),
    N = n(544989),
    v = n(481932),
    O = n(195387),
    R = n(272510),
    C = n(171368),
    y = n(958120),
    D = n(215633),
    L = n(228168),
    b = n(689938),
    M = n(122269);
function P(e) {
    let { user: t, currentUser: n, guildId: P, channelId: U, messageId: w, roleId: x, closePopout: G, setPopoutRef: k, disableUserProfileLink: B = __OVERLAY__, newAnalyticsLocations: F = [] } = e,
        { analyticsLocations: V } = (0, c.ZP)([...F, u.Z.BITE_SIZE_PROFILE_POPOUT]),
        H = (0, f.ZB)({
            layout: 'BITE_SIZE_POPOUT',
            userId: t.id,
            guildId: P,
            channelId: U,
            messageId: w,
            roleId: x
        }),
        Z = (0, a.e7)([E.Z], () => (null != P ? E.Z.getGuild(P) : null)),
        Y = (0, a.e7)([_.ZP], () => (null != P ? _.ZP.getMember(P, t.id) : null)),
        j = i.useMemo(() => (null != P ? { [P]: [t.id] } : {}), [P, t.id]);
    (0, l.$)(j);
    let { profileStatusEditEnabled: W } = (0, p.K)({ location: 'BiteSizeProfilePopout' }),
        K = i.useRef(null),
        z = (0, m.ZP)(t.id, P),
        q = (0, o.Z)(K),
        [Q, X] = i.useState(!1),
        [$, J] = i.useState(!1),
        [ee, et] = i.useState(!1);
    i.useEffect(() => {
        null == k || k(null == K ? void 0 : K.current);
    }, [K, k]);
    let [en, er] = i.useState(),
        [ei, ea] = i.useState(),
        es = (e) => {
            er(e.interactionType), ea(e.interactionSourceType);
        },
        eo = (e) => {
            null == G || G(),
                (0, C.openUserProfileModal)({
                    sourceAnalyticsLocations: V,
                    ...H,
                    ...e
                });
        };
    return (0, r.jsx)(c.Gt, {
        value: V,
        children: (0, r.jsx)(f.Mt, {
            value: H,
            shouldTrackViewOnMount: null == Y || null != Y.fullProfileLoadedTimestamp,
            children: (0, r.jsxs)(s.Dialog, {
                ref: K,
                'aria-label': t.username,
                children: [
                    (0, r.jsxs)(A.Z, {
                        user: t,
                        displayProfile: z,
                        profileType: L.y0.BITE_SIZE,
                        children: [
                            (0, r.jsxs)(N.Z, {
                                profileType: L.y0.BITE_SIZE,
                                children: [
                                    (0, r.jsx)(O.Z, {
                                        user: t,
                                        guildId: P,
                                        channelId: U,
                                        onClose: G
                                    }),
                                    (0, r.jsx)(v.Z, {
                                        profileType: L.y0.BITE_SIZE,
                                        user: t
                                    }),
                                    t.id !== n.id &&
                                        (0, r.jsx)(R.Z, {
                                            user: t,
                                            guildId: P,
                                            viewProfileItem: B
                                                ? null
                                                : (0, r.jsx)(s.MenuItem, {
                                                      id: 'view-profile',
                                                      label: b.Z.Messages.VIEW_FULL_PROFILE,
                                                      action: () => {
                                                          eo(),
                                                              (0, h.pQ)({
                                                                  action: 'PRESS_VIEW_PROFILE',
                                                                  analyticsLocations: V,
                                                                  ...H
                                                              });
                                                      }
                                                  })
                                        })
                                ]
                            }),
                            (0, r.jsxs)('header', {
                                className: M.header,
                                children: [
                                    null != en && (0, r.jsx)('div', { className: M.backdrop }),
                                    (0, r.jsx)(I.Z, {
                                        user: t,
                                        displayProfile: z,
                                        guildId: P,
                                        profileType: L.y0.BITE_SIZE,
                                        hasProfileEffect: (null == z ? void 0 : z.profileEffectId) != null
                                    }),
                                    (0, r.jsx)(S.Z, {
                                        isReply: ee,
                                        sent: $,
                                        shown: Q,
                                        className: M.toast
                                    }),
                                    (0, r.jsx)(T.Z, {
                                        location: 'BiteSizeProfilePopout',
                                        user: t,
                                        displayProfile: z,
                                        guildId: P,
                                        channelId: U,
                                        profileType: L.y0.BITE_SIZE,
                                        onOpenProfile: B ? void 0 : eo,
                                        isInteractionSource: ei === L.n_.AVATAR || ei === L.n_.STATUS,
                                        onInteraction: es,
                                        setInteractionToastShown: X,
                                        setInteractionSent: J,
                                        setIsReplyInteraction: et,
                                        showReplyPopout: en === L.P.REPLY && ei === L.n_.AVATAR
                                    }),
                                    (0, r.jsx)(g.Z, {
                                        location: 'BiteSizeProfilePopout',
                                        user: t,
                                        guildId: P,
                                        channelId: U,
                                        profileType: L.y0.BITE_SIZE,
                                        editEnabled: W,
                                        isInteractionSource: ei === L.n_.STATUS,
                                        onInteraction: es,
                                        onClose: G,
                                        setInteractionToastShown: X,
                                        setInteractionSent: J,
                                        setIsReplyInteraction: et,
                                        showReplyPopout: en === L.P.REPLY && ei === L.n_.STATUS
                                    })
                                ]
                            }),
                            (0, r.jsx)(y.Z, {
                                user: t,
                                currentUser: n,
                                displayProfile: z,
                                guild: Z,
                                isHovering: q,
                                onOpenProfile: B ? void 0 : eo,
                                channelId: U,
                                onClose: G
                            }),
                            (0, r.jsx)(D.Z, {
                                user: t,
                                guildId: P,
                                channelId: U,
                                onClose: G
                            })
                        ]
                    }),
                    (null == z ? void 0 : z.profileEffectId) != null &&
                        (0, r.jsx)(d.Z, {
                            profileEffectId: null == z ? void 0 : z.profileEffectId,
                            isHovering: q
                        })
                ]
            })
        })
    });
}
