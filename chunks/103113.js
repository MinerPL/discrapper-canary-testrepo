n.d(t, {
    Z: function () {
        return y;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(481060),
    s = n(727637),
    o = n(100527),
    l = n(906732),
    u = n(580552),
    c = n(680295),
    d = n(5192),
    _ = n(785717),
    E = n(221292),
    f = n(318661),
    h = n(78675),
    p = n(741308),
    m = n(588822),
    I = n(899007),
    T = n(502762),
    g = n(530),
    S = n(256059),
    A = n(679332),
    N = n(544989),
    v = n(171368),
    O = n(228168),
    R = n(689938),
    C = n(122269);
function y(e) {
    let { user: t, guildId: n, channelId: y, messageId: D, roleId: L, setPopoutRef: b, closePopout: M, disableUserProfileLink: P = __OVERLAY__, newAnalyticsLocations: U = [] } = e,
        w = (0, f.ZP)(t.id, n),
        { analyticsLocations: x } = (0, l.ZP)([...U, o.Z.BITE_SIZE_PROFILE_POPOUT]),
        G = (0, _.ZB)({
            layout: 'BITE_SIZE_POPOUT',
            userId: t.id,
            guildId: n,
            channelId: y,
            messageId: D,
            roleId: L
        }),
        k = i.useRef(null),
        B = (0, s.Z)(k);
    i.useEffect(() => {
        null == b || b(null == k ? void 0 : k.current);
    }, [k, b]);
    let F = () => {
            null == M || M(),
                (0, v.openUserProfileModal)({
                    sourceAnalyticsLocations: x,
                    ...G
                });
        },
        V = !P && (0, u.Z)(t.id);
    return (0, r.jsx)(l.Gt, {
        value: x,
        children: (0, r.jsx)(_.Mt, {
            value: G,
            children: (0, r.jsxs)(a.Dialog, {
                ref: k,
                'aria-label': t.username,
                children: [
                    (0, r.jsxs)(T.Z, {
                        user: t,
                        displayProfile: w,
                        profileType: O.y0.BITE_SIZE,
                        children: [
                            (0, r.jsx)(N.Z, {
                                profileType: O.y0.BITE_SIZE,
                                children: (0, r.jsx)(A.Z, {
                                    user: t,
                                    viewProfileItem: V
                                        ? (0, r.jsx)(a.MenuItem, {
                                              id: 'view-profile',
                                              label: R.Z.Messages.VIEW_FULL_PROFILE,
                                              action: () => {
                                                  F(),
                                                      (0, E.pQ)({
                                                          action: 'PRESS_VIEW_PROFILE',
                                                          analyticsLocations: x,
                                                          ...G
                                                      });
                                              }
                                          })
                                        : null
                                })
                            }),
                            (0, r.jsxs)('header', {
                                className: C.header,
                                children: [
                                    (0, r.jsx)(h.Z, {
                                        user: t,
                                        displayProfile: w,
                                        guildId: n,
                                        profileType: O.y0.BITE_SIZE,
                                        hasProfileEffect: (null == w ? void 0 : w.profileEffectId) != null
                                    }),
                                    (0, r.jsx)(I.Z, {
                                        user: t,
                                        displayProfile: w,
                                        guildId: n,
                                        channelId: y,
                                        profileType: O.y0.BITE_SIZE,
                                        onOpenProfile: V ? F : void 0
                                    }),
                                    (0, r.jsx)(S.Z, { user: t })
                                ]
                            }),
                            (0, r.jsxs)(a.Scroller, {
                                fade: !0,
                                className: C.body,
                                children: [
                                    (0, r.jsx)(g.Z, {
                                        user: t,
                                        profileType: O.y0.BITE_SIZE,
                                        nickname: d.ZP.getName(n, y, t),
                                        onOpenProfile: V ? F : void 0,
                                        tags: (0, r.jsx)(p.Z, {
                                            displayProfile: w,
                                            profileType: O.y0.BITE_SIZE,
                                            onClose: M
                                        })
                                    }),
                                    (0, r.jsx)(m.Z, {
                                        userId: t.id,
                                        userBio: null == w ? void 0 : w.bio,
                                        setLineClamp: !1,
                                        textColor: 'header-primary'
                                    })
                                ]
                            }),
                            (0, r.jsx)('footer', { className: C.footer })
                        ]
                    }),
                    (null == w ? void 0 : w.profileEffectId) != null &&
                        (0, r.jsx)(c.Z, {
                            profileEffectId: null == w ? void 0 : w.profileEffectId,
                            isHovering: B
                        })
                ]
            })
        })
    });
}
