n.d(t, {
    Z: function () {
        return R;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(442837), o = n(481060), s = n(727637), l = n(100527), u = n(906732), c = n(680295), d = n(271383), _ = n(430824), E = n(785717), f = n(318661), h = n(502762), p = n(544989), m = n(481932), I = n(195387), T = n(272510), g = n(171368), S = n(958120), A = n(215633), N = n(23293), v = n(228168), O = n(689938);
function R(e) {
    let {
            user: t,
            currentUser: n,
            guildId: R,
            channelId: C,
            messageId: y,
            roleId: D,
            closePopout: L,
            setPopoutRef: b,
            disableUserProfileLink: M = __OVERLAY__,
            newAnalyticsLocations: P = []
        } = e, {analyticsLocations: U} = (0, u.ZP)([
            ...P,
            l.Z.BITE_SIZE_PROFILE_POPOUT
        ]), w = (0, E.Q1)({
            layout: 'BITE_SIZE_POPOUT',
            userId: t.id,
            guildId: R,
            channelId: C,
            messageId: y,
            roleId: D
        }), x = (0, a.e7)([_.Z], () => null != R ? _.Z.getGuild(R) : null), G = (0, a.e7)([d.ZP], () => null != R ? d.ZP.getMember(R, t.id) : null), k = i.useRef(null), B = (0, f.ZP)(t.id, R), F = (0, s.Z)(k);
    i.useEffect(() => {
        null == b || b(null == k ? void 0 : k.current);
    }, [
        k,
        b
    ]);
    let V = e => {
        null == L || L(), (0, g.openUserProfileModal)({
            sourceAnalyticsLocations: U,
            userId: t.id,
            guildId: R,
            channelId: C,
            messageId: y,
            roleId: D,
            ...e
        });
    };
    return (0, r.jsx)(u.Gt, {
        value: U,
        children: (0, r.jsx)(E.Mt, {
            layout: 'BITE_SIZE_POPOUT',
            userId: t.id,
            guildId: R,
            channelId: C,
            messageId: y,
            roleId: D,
            shouldTrackViewOnMount: null == G || null != G.fullProfileLoadedTimestamp,
            children: (0, r.jsxs)(o.Dialog, {
                ref: k,
                'aria-label': t.username,
                children: [
                    (0, r.jsxs)(h.Z, {
                        user: t,
                        displayProfile: B,
                        profileType: v.y0.BITE_SIZE,
                        children: [
                            (0, r.jsxs)(p.Z, {
                                profileType: v.y0.BITE_SIZE,
                                children: [
                                    (0, r.jsx)(I.Z, {
                                        user: t,
                                        guildId: R,
                                        channelId: C,
                                        onClose: L
                                    }),
                                    (0, r.jsx)(m.Z, {
                                        profileType: v.y0.BITE_SIZE,
                                        user: t
                                    }),
                                    t.id !== n.id && (0, r.jsx)(T.Z, {
                                        user: t,
                                        guildId: R,
                                        viewProfileItem: M ? null : (0, r.jsx)(o.MenuItem, {
                                            id: 'view-profile',
                                            label: O.Z.Messages.VIEW_FULL_PROFILE,
                                            action: () => {
                                                w({
                                                    action: 'PRESS_VIEW_PROFILE',
                                                    analyticsLocations: U
                                                }), V();
                                            }
                                        })
                                    })
                                ]
                            }),
                            (0, r.jsx)(N.Z, {
                                user: t,
                                displayProfile: B,
                                guildId: R,
                                channelId: C,
                                onOpenProfile: M ? void 0 : V,
                                onClose: L
                            }),
                            (0, r.jsx)(S.Z, {
                                user: t,
                                currentUser: n,
                                displayProfile: B,
                                guild: x,
                                isHovering: F,
                                onOpenProfile: M ? void 0 : V,
                                channelId: C,
                                onClose: L
                            }),
                            (0, r.jsx)(A.Z, {
                                user: t,
                                guildId: R,
                                channelId: C,
                                onClose: L
                            })
                        ]
                    }),
                    (null == B ? void 0 : B.profileEffectId) != null && (0, r.jsx)(c.Z, {
                        profileEffectId: null == B ? void 0 : B.profileEffectId,
                        isHovering: F
                    })
                ]
            })
        })
    });
}
