n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(442837),
    s = n(481060),
    o = n(727637),
    l = n(100527),
    u = n(906732),
    c = n(271383),
    d = n(430824),
    _ = n(785717),
    E = n(221292),
    f = n(687158),
    h = n(899007),
    p = n(867176),
    I = n(438163),
    m = n(502762),
    T = n(952124),
    S = n(544989),
    g = n(171368),
    A = n(895697),
    N = n(161572),
    O = n(228168),
    R = n(689938),
    v = n(115879);
function C(e) {
    let { user: t, currentUser: n, guildId: C, channelId: y, messageId: L, roleId: D, closePopout: b, setPopoutRef: M, disableUserProfileLink: P = __OVERLAY__, newAnalyticsLocations: U = [] } = e,
        { analyticsLocations: w } = (0, u.ZP)([...U, l.Z.BITE_SIZE_PROFILE_POPOUT]),
        x = (0, _.ZB)({
            layout: 'BITE_SIZE_POPOUT',
            userId: t.id,
            guildId: C,
            channelId: y,
            messageId: L,
            roleId: D
        }),
        G = (0, f.ZP)(t.id, C),
        k = (0, a.e7)([d.Z], () => (null != C ? d.Z.getGuild(C) : null)),
        B = (0, a.e7)([c.ZP], () => (null != C ? c.ZP.getMember(C, t.id) : null)),
        F = i.useRef(null),
        V = (0, o.Z)(F);
    i.useEffect(() => {
        null == M || M(null == F ? void 0 : F.current);
    }, [F, M]);
    let H = (e) => {
        null == b || b(),
            (0, g.openUserProfileModal)({
                sourceAnalyticsLocations: w,
                ...x,
                ...e
            });
    };
    return (0, r.jsx)(u.Gt, {
        value: w,
        children: (0, r.jsx)(_.Mt, {
            value: x,
            shouldTrackViewOnMount: null == B || null != B.fullProfileLoadedTimestamp,
            children: (0, r.jsx)(s.Dialog, {
                ref: F,
                'aria-label': t.username,
                children: (0, r.jsxs)(m.Z, {
                    user: t,
                    displayProfile: G,
                    profileType: O.y0.BITE_SIZE,
                    children: [
                        (0, r.jsx)(S.Z, {
                            profileType: O.y0.BITE_SIZE,
                            children: (0, r.jsx)(T.Z, {
                                user: t,
                                guildId: C,
                                viewProfileItem: P
                                    ? null
                                    : (0, r.jsx)(s.MenuItem, {
                                          id: 'view-profile',
                                          label: R.Z.Messages.VIEW_FULL_PROFILE,
                                          action: () => {
                                              H(),
                                                  (0, E.pQ)({
                                                      action: 'PRESS_VIEW_PROFILE',
                                                      analyticsLocations: w,
                                                      ...x
                                                  });
                                          }
                                      })
                            })
                        }),
                        (0, r.jsxs)('header', {
                            className: v.header,
                            children: [
                                (0, r.jsx)(p.Z, {
                                    user: t,
                                    displayProfile: G,
                                    guildId: C,
                                    profileType: O.y0.BITE_SIZE
                                }),
                                (0, r.jsx)(h.Z, {
                                    user: t,
                                    displayProfile: G,
                                    guildId: C,
                                    channelId: y,
                                    profileType: O.y0.BITE_SIZE,
                                    onOpenProfile: P ? void 0 : H
                                }),
                                (0, r.jsx)(I.Z, {
                                    user: t,
                                    profileType: O.y0.BITE_SIZE,
                                    onClose: b
                                })
                            ]
                        }),
                        (0, r.jsx)(A.Z, {
                            user: t,
                            currentUser: n,
                            displayProfile: G,
                            guild: k,
                            isHovering: V,
                            onOpenProfile: P ? void 0 : H,
                            channelId: y,
                            onClose: b
                        }),
                        (0, r.jsx)(N.Z, {
                            user: t,
                            guildId: C,
                            channelId: y,
                            onClose: b
                        })
                    ]
                })
            })
        })
    });
}
