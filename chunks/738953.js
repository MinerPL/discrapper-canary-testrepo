n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(212433),
    s = n(442837),
    o = n(481060),
    l = n(727637),
    u = n(58540),
    c = n(100527),
    d = n(906732),
    _ = n(680295),
    E = n(271383),
    f = n(430824),
    h = n(785717),
    p = n(221292),
    I = n(687158),
    m = n(326094),
    T = n(510659),
    S = n(113557),
    g = n(867176),
    A = n(169979),
    N = n(119096),
    O = n(502762),
    R = n(544989),
    v = n(481932),
    C = n(195387),
    L = n(272510),
    y = n(171368),
    D = n(978395),
    b = n(161572),
    M = n(228168),
    P = n(981631),
    U = n(689938),
    w = n(451563);
function x(e) {
    let { user: t, currentUser: n, guildId: x, channelId: G, messageId: k, roleId: B, closePopout: F, setPopoutRef: V, disableUserProfileLink: H = __OVERLAY__, newAnalyticsLocations: Z = [] } = e,
        { analyticsLocations: Y } = (0, d.ZP)([...Z, c.Z.BITE_SIZE_PROFILE_POPOUT]),
        j = (0, m.Z)({
            user: t,
            currentUser: n,
            location: P.Sbl.BITE_SIZE_POPOUT
        }),
        W = (0, h.ZB)({
            layout: j ? 'BITE_SIZE_POPOUT' : 'BITE_SIZE_POPOUT_RESTRICTED_BLOCKER_PROFILE',
            userId: t.id,
            guildId: x,
            channelId: G,
            messageId: k,
            roleId: B
        }),
        K = (0, s.e7)([f.Z], () => (null != x ? f.Z.getGuild(x) : null)),
        z = (0, s.e7)([E.ZP], () => (null != x ? E.ZP.getMember(x, t.id) : null)),
        q = i.useMemo(() => (null != x ? { [x]: [t.id] } : {}), [x, t.id]);
    (0, u.$)(q);
    let Q = i.useRef(null),
        X = (0, I.ZP)(t.id, x),
        $ = (0, l.Z)(Q),
        J = (0, T.$m)(),
        ee = (0, o.useSpring)({
            opacity: null != J.interactionType ? 1 : 0,
            config: { duration: 150 }
        });
    i.useEffect(() => {
        null == V || V(null == Q ? void 0 : Q.current);
    }, [Q, V]);
    let et = (e) => {
        null == F || F(),
            (0, y.openUserProfileModal)({
                sourceAnalyticsLocations: Y,
                ...W,
                ...e
            });
    };
    return (0, r.jsx)(d.Gt, {
        value: Y,
        children: (0, r.jsx)(h.Mt, {
            value: W,
            shouldTrackViewOnMount: null == z || null != z.fullProfileLoadedTimestamp,
            children: (0, r.jsx)(T.NJ, {
                value: J,
                children: (0, r.jsxs)(o.Dialog, {
                    ref: Q,
                    'aria-label': t.username,
                    children: [
                        (0, r.jsxs)(O.Z, {
                            user: t,
                            displayProfile: X,
                            profileType: M.y0.BITE_SIZE,
                            children: [
                                null != J.interactionType &&
                                    (0, r.jsx)(a.animated.div, {
                                        style: ee,
                                        className: w.backdrop
                                    }),
                                (0, r.jsxs)(R.Z, {
                                    profileType: M.y0.BITE_SIZE,
                                    children: [
                                        (0, r.jsx)(C.Z, {
                                            shouldShowTooltip: null === J.interactionType,
                                            user: t,
                                            guildId: x,
                                            channelId: G,
                                            onClose: F
                                        }),
                                        (0, r.jsx)(v.Z, {
                                            shouldShowTooltip: null === J.interactionType,
                                            profileType: M.y0.BITE_SIZE,
                                            user: t
                                        }),
                                        t.id !== n.id &&
                                            (0, r.jsx)(L.Z, {
                                                user: t,
                                                guildId: x,
                                                viewProfileItem: H
                                                    ? null
                                                    : (0, r.jsx)(o.MenuItem, {
                                                          id: 'view-profile',
                                                          label: U.Z.Messages.VIEW_FULL_PROFILE,
                                                          action: () => {
                                                              et(),
                                                                  (0, p.pQ)({
                                                                      action: 'PRESS_VIEW_PROFILE',
                                                                      analyticsLocations: Y,
                                                                      ...W
                                                                  });
                                                          }
                                                      })
                                            })
                                    ]
                                }),
                                (0, r.jsxs)('header', {
                                    className: w.header,
                                    children: [
                                        (0, r.jsx)(g.Z, {
                                            user: t,
                                            displayProfile: X,
                                            guildId: x,
                                            profileType: M.y0.BITE_SIZE
                                        }),
                                        (0, r.jsx)(N.Z, {
                                            userId: t.id,
                                            className: w.toast,
                                            onClose: F
                                        }),
                                        (0, r.jsx)(S.Z, {
                                            location: 'UserProfilePopout',
                                            user: t,
                                            displayProfile: X,
                                            guildId: x,
                                            channelId: G,
                                            profileType: M.y0.BITE_SIZE,
                                            onOpenProfile: H ? void 0 : et
                                        }),
                                        (0, r.jsx)(A.Z, {
                                            location: 'UserProfilePopout',
                                            user: t,
                                            guildId: x,
                                            channelId: G,
                                            profileType: M.y0.BITE_SIZE,
                                            onCloseProfile: F
                                        })
                                    ]
                                }),
                                (0, r.jsx)(D.Z, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: X,
                                    guild: K,
                                    isHovering: null == J.interactionType && $,
                                    onOpenProfile: H ? void 0 : et,
                                    channelId: G,
                                    onClose: F
                                }),
                                (0, r.jsx)(b.Z, {
                                    user: t,
                                    guildId: x,
                                    channelId: G,
                                    onClose: F
                                })
                            ]
                        }),
                        (null == X ? void 0 : X.profileEffectId) != null &&
                            (0, r.jsx)(_.Z, {
                                profileEffectId: null == X ? void 0 : X.profileEffectId,
                                isHovering: $
                            })
                    ]
                })
            })
        })
    });
}
