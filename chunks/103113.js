n.d(t, {
    Z: function () {
        return R;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(481060), o = n(727637), s = n(100527), l = n(906732), u = n(580552), c = n(680295), d = n(5192), _ = n(785717), E = n(318661), f = n(78675), h = n(741308), p = n(588822), m = n(502762), I = n(530), T = n(679332), g = n(544989), S = n(171368), A = n(513099), N = n(228168), v = n(689938), O = n(472375);
function R(e) {
    let {
            user: t,
            guildId: n,
            channelId: R,
            messageId: C,
            roleId: y,
            setPopoutRef: D,
            closePopout: L,
            disableUserProfileLink: b = __OVERLAY__,
            newAnalyticsLocations: M = []
        } = e, P = (0, E.ZP)(t.id, n), {analyticsLocations: U} = (0, l.ZP)([
            ...M,
            s.Z.BITE_SIZE_PROFILE_POPOUT
        ]), w = (0, _.Q1)({
            layout: 'BITE_SIZE_POPOUT',
            userId: t.id,
            guildId: n,
            channelId: R,
            messageId: C,
            roleId: y
        }), x = i.useRef(null), G = (0, o.Z)(x);
    i.useEffect(() => {
        null == D || D(null == x ? void 0 : x.current);
    }, [
        x,
        D
    ]);
    let k = () => {
            null == L || L(), (0, S.openUserProfileModal)({
                sourceAnalyticsLocations: U,
                userId: t.id,
                guildId: n,
                channelId: R,
                messageId: C,
                roleId: y
            });
        }, B = !b && (0, u.Z)(t.id);
    return (0, r.jsx)(l.Gt, {
        value: U,
        children: (0, r.jsx)(_.Mt, {
            layout: 'BITE_SIZE_POPOUT',
            userId: t.id,
            guildId: n,
            channelId: R,
            messageId: C,
            roleId: y,
            children: (0, r.jsxs)(a.Dialog, {
                ref: x,
                'aria-label': t.username,
                children: [
                    (0, r.jsxs)(m.Z, {
                        user: t,
                        displayProfile: P,
                        profileType: N.y0.BITE_SIZE,
                        children: [
                            (0, r.jsx)(g.Z, {
                                profileType: N.y0.BITE_SIZE,
                                children: (0, r.jsx)(T.Z, {
                                    user: t,
                                    viewProfileItem: B ? (0, r.jsx)(a.MenuItem, {
                                        id: 'view-profile',
                                        label: v.Z.Messages.VIEW_FULL_PROFILE,
                                        action: () => {
                                            w({
                                                action: 'PRESS_VIEW_PROFILE',
                                                analyticsLocations: U
                                            }), k();
                                        }
                                    }) : null
                                })
                            }),
                            (0, r.jsxs)('header', {
                                className: O.header,
                                children: [
                                    (0, r.jsx)(f.Z, {
                                        user: t,
                                        displayProfile: P,
                                        guildId: n,
                                        profileType: N.y0.BITE_SIZE,
                                        hasProfileEffect: (null == P ? void 0 : P.profileEffectId) != null
                                    }),
                                    (0, r.jsx)(A.Z, {
                                        user: t,
                                        displayProfile: P,
                                        guildId: n,
                                        channelId: R,
                                        onOpenProfile: B ? k : void 0
                                    })
                                ]
                            }),
                            (0, r.jsxs)('div', {
                                className: O.body,
                                children: [
                                    (0, r.jsx)(I.Z, {
                                        user: t,
                                        profileType: N.y0.BITE_SIZE,
                                        nickname: d.ZP.getName(n, R, t),
                                        onOpenProfile: B ? k : void 0,
                                        tags: (0, r.jsx)(h.Z, {
                                            displayProfile: P,
                                            profileType: N.y0.BITE_SIZE,
                                            onClose: L
                                        })
                                    }),
                                    (0, r.jsx)(p.Z, {
                                        userId: t.id,
                                        userBio: null == P ? void 0 : P.bio,
                                        setLineClamp: !1,
                                        textColor: 'header-primary'
                                    })
                                ]
                            }),
                            (0, r.jsx)('footer', { className: O.footer })
                        ]
                    }),
                    (null == P ? void 0 : P.profileEffectId) != null && (0, r.jsx)(c.Z, {
                        profileEffectId: null == P ? void 0 : P.profileEffectId,
                        isHovering: G
                    })
                ]
            })
        })
    });
}
