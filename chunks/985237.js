n.d(t, {
    Z: function () {
        return N;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(442837), o = n(481060), s = n(727637), l = n(100527), u = n(906732), c = n(271383), d = n(430824), _ = n(785717), E = n(318661), f = n(502762), h = n(437758), p = n(544989), m = n(171368), I = n(215633), T = n(23293), g = n(777887), S = n(228168), A = n(689938);
function N(e) {
    let {
            user: t,
            currentUser: n,
            guildId: N,
            channelId: v,
            messageId: O,
            roleId: R,
            closePopout: C,
            setPopoutRef: y,
            disableUserProfileLink: D = __OVERLAY__,
            newAnalyticsLocations: L = []
        } = e, {analyticsLocations: b} = (0, u.ZP)([
            ...L,
            l.Z.BITE_SIZE_PROFILE_POPOUT
        ]), M = (0, _.Q1)({
            layout: 'BITE_SIZE_POPOUT',
            userId: t.id,
            guildId: N,
            channelId: v,
            messageId: O,
            roleId: R
        }), P = (0, E.ZP)(t.id, N), U = (0, a.e7)([d.Z], () => null != N ? d.Z.getGuild(N) : null), w = (0, a.e7)([c.ZP], () => null != N ? c.ZP.getMember(N, t.id) : null), x = i.useRef(null), G = (0, s.Z)(x);
    i.useEffect(() => {
        null == y || y(null == x ? void 0 : x.current);
    }, [
        x,
        y
    ]);
    let k = e => {
        null == C || C(), (0, m.openUserProfileModal)({
            sourceAnalyticsLocations: b,
            userId: t.id,
            guildId: N,
            channelId: v,
            messageId: O,
            roleId: R,
            ...e
        });
    };
    return (0, r.jsx)(u.Gt, {
        value: b,
        children: (0, r.jsx)(_.Mt, {
            layout: 'BITE_SIZE_POPOUT',
            userId: t.id,
            guildId: N,
            channelId: v,
            messageId: O,
            roleId: R,
            shouldTrackViewOnMount: null == w || null != w.fullProfileLoadedTimestamp,
            children: (0, r.jsx)(o.Dialog, {
                ref: x,
                'aria-label': t.username,
                children: (0, r.jsxs)(f.Z, {
                    user: t,
                    displayProfile: P,
                    profileType: S.y0.BITE_SIZE,
                    children: [
                        (0, r.jsx)(p.Z, {
                            profileType: S.y0.BITE_SIZE,
                            children: (0, r.jsx)(h.Z, {
                                user: t,
                                guildId: N,
                                viewProfileItem: D ? null : (0, r.jsx)(o.MenuItem, {
                                    id: 'view-profile',
                                    label: A.Z.Messages.VIEW_FULL_PROFILE,
                                    action: () => {
                                        M({
                                            action: 'PRESS_VIEW_PROFILE',
                                            analyticsLocations: b
                                        }), k();
                                    }
                                })
                            })
                        }),
                        (0, r.jsx)(T.Z, {
                            user: t,
                            displayProfile: P,
                            guildId: N,
                            channelId: v,
                            onOpenProfile: D ? void 0 : k
                        }),
                        (0, r.jsx)(g.Z, {
                            user: t,
                            currentUser: n,
                            displayProfile: P,
                            guild: U,
                            isHovering: G,
                            onOpenProfile: D ? void 0 : k,
                            channelId: v,
                            onClose: C
                        }),
                        (0, r.jsx)(I.Z, {
                            user: t,
                            guildId: N,
                            channelId: v,
                            onClose: C
                        })
                    ]
                })
            })
        })
    });
}
