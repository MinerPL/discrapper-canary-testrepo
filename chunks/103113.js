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
    c = n(688465),
    d = n(680295),
    _ = n(5192),
    E = n(785717),
    f = n(221292),
    h = n(687158),
    p = n(899007),
    I = n(648052),
    m = n(867176),
    T = n(280885),
    S = n(502762),
    g = n(530),
    A = n(679332),
    N = n(544989),
    O = n(171368),
    R = n(228168),
    v = n(689938),
    C = n(115879);
function y(e) {
    let { user: t, guildId: n, channelId: y, messageId: L, roleId: D, setPopoutRef: b, closePopout: M, disableUserProfileLink: P = __OVERLAY__, newAnalyticsLocations: U = [] } = e,
        w = (0, h.ZP)(t.id, n),
        { analyticsLocations: x } = (0, l.ZP)([...U, o.Z.BITE_SIZE_PROFILE_POPOUT]),
        G = (0, E.ZB)({
            layout: 'BITE_SIZE_POPOUT',
            userId: t.id,
            guildId: n,
            channelId: y,
            messageId: L,
            roleId: D
        }),
        k = i.useRef(null),
        B = (0, s.Z)(k);
    i.useEffect(() => {
        null == b || b(null == k ? void 0 : k.current);
    }, [k, b]);
    let F = () => {
            null == M || M(),
                (0, O.openUserProfileModal)({
                    sourceAnalyticsLocations: x,
                    ...G
                });
        },
        V = !P && (0, u.Z)(t.id);
    return (0, r.jsx)(l.Gt, {
        value: x,
        children: (0, r.jsx)(E.Mt, {
            value: G,
            children: (0, r.jsxs)(a.Dialog, {
                ref: k,
                'aria-label': t.username,
                children: [
                    (0, r.jsxs)(S.Z, {
                        user: t,
                        displayProfile: w,
                        profileType: R.y0.BITE_SIZE,
                        children: [
                            (0, r.jsx)(N.Z, {
                                profileType: R.y0.BITE_SIZE,
                                children: (0, r.jsx)(A.Z, {
                                    user: t,
                                    viewProfileItem: V
                                        ? (0, r.jsx)(a.MenuItem, {
                                              id: 'view-profile',
                                              label: v.Z.Messages.VIEW_FULL_PROFILE,
                                              action: () => {
                                                  F(),
                                                      (0, f.pQ)({
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
                                    (0, r.jsx)(m.Z, {
                                        user: t,
                                        displayProfile: w,
                                        guildId: n,
                                        profileType: R.y0.BITE_SIZE
                                    }),
                                    (0, r.jsx)(p.Z, {
                                        user: t,
                                        displayProfile: w,
                                        guildId: n,
                                        channelId: y,
                                        profileType: R.y0.BITE_SIZE,
                                        onOpenProfile: V ? F : void 0
                                    }),
                                    t.isClyde() && (0, r.jsx)(c.Z, { className: C.headerTag })
                                ]
                            }),
                            (0, r.jsxs)(a.Scroller, {
                                fade: !0,
                                className: C.body,
                                children: [
                                    (0, r.jsx)(g.Z, {
                                        user: t,
                                        profileType: R.y0.BITE_SIZE,
                                        nickname: _.ZP.getName(n, y, t),
                                        onOpenProfile: V ? F : void 0,
                                        tags: (0, r.jsx)(I.Z, {
                                            displayProfile: w,
                                            profileType: R.y0.BITE_SIZE,
                                            onClose: M
                                        })
                                    }),
                                    (0, r.jsx)(T.Z, {
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
                        (0, r.jsx)(d.Z, {
                            profileEffectId: null == w ? void 0 : w.profileEffectId,
                            isHovering: B
                        })
                ]
            })
        })
    });
}
