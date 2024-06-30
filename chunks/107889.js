i.d(n, {
    Z: function () {
        return M;
    }
}), i(47120);
var t = i(735250), o = i(470079), s = i(442837), l = i(481060), a = i(727637), r = i(100527), c = i(906732), d = i(680295), u = i(158776), I = i(5192), E = i(877485), _ = i(785717), f = i(318661), Z = i(502762), m = i(544989), S = i(481932), v = i(195387), x = i(272510), h = i(171368), N = i(806926), g = i(740021), C = i(228168), p = i(981631), R = i(689938), T = i(327570);
function M(e) {
    let {
            user: n,
            currentUser: i,
            guildId: M,
            channelId: j,
            messageId: A,
            roleId: P,
            friendToken: U,
            initialSection: L,
            initialSubsection: O,
            transitionState: b,
            onClose: y,
            showGuildProfile: D = !0,
            sourceAnalyticsLocations: B = []
        } = e, F = M === p.ME ? void 0 : M, {analyticsLocations: G} = (0, c.ZP)([
            ...B,
            r.Z.SIMPLIFIED_PROFILE_MODAL
        ]), {originalFriendingEnabled: k} = (0, E.V)({ location: 'SimplifiedUserProfileModal' }), w = (0, _.Q1)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            guildId: F,
            channelId: j,
            messageId: A,
            roleId: P,
            showGuildProfile: D
        }), Y = (0, f.ZP)(n.id, D ? F : void 0), V = (0, f.ZP)(n.id, F), H = (0, s.e7)([u.Z], () => u.Z.findActivity(n.id, e => {
            let {type: n} = e;
            return n !== p.IIU.CUSTOM_STATUS;
        })), W = o.createRef(), z = (0, a.Z)(W), K = () => (null == V ? void 0 : V.guildId) == null ? null : (null == Y ? void 0 : Y.guildId) != null ? (0, t.jsx)(l.MenuItem, {
            id: 'view-main-profile',
            label: R.Z.Messages.VIEW_MAIN_PROFILE,
            subtext: R.Z.Messages.AKA_DISPLAY_NAME.format({ displayName: I.ZP.getName(void 0, void 0, n) }),
            action: () => {
                w({
                    action: 'PRESS_VIEW_MAIN_PROFILE',
                    analyticsLocations: G
                }), y(), (0, h.openUserProfileModal)({
                    userId: n.id,
                    showGuildProfile: !1,
                    guildId: F,
                    channelId: j,
                    messageId: A,
                    roleId: P,
                    friendToken: U,
                    sourceAnalyticsLocations: B
                });
            }
        }) : (0, t.jsx)(l.MenuItem, {
            id: 'view-server-profile',
            label: R.Z.Messages.VIEW_SERVER_PROFILE,
            subtext: R.Z.Messages.AKA_DISPLAY_NAME.format({ displayName: I.ZP.getName(F, j, n) }),
            action: () => {
                w({
                    action: 'PRESS_VIEW_SERVER_PROFILE',
                    analyticsLocations: G
                }), y(), (0, h.openUserProfileModal)({
                    userId: n.id,
                    showGuildProfile: !0,
                    guildId: F,
                    channelId: j,
                    messageId: A,
                    roleId: P,
                    friendToken: U,
                    sourceAnalyticsLocations: B
                });
            }
        });
    return (0, t.jsx)(c.Gt, {
        value: G,
        children: (0, t.jsx)(_.Mt, {
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            guildId: F,
            channelId: j,
            messageId: A,
            roleId: P,
            showGuildProfile: D,
            children: (0, t.jsxs)(l.ModalRoot, {
                transitionState: b,
                className: T.root,
                hideShadow: !0,
                'aria-label': R.Z.Messages.USER_PROFILE_MODAL,
                children: [
                    (0, t.jsxs)(Z.Z, {
                        user: n,
                        displayProfile: Y,
                        profileType: C.y0.FULL_SIZE,
                        ref: W,
                        children: [
                            k ? (0, t.jsx)(m.Z, {
                                profileType: C.y0.FULL_SIZE,
                                children: (0, t.jsx)(v.Z, {
                                    user: n,
                                    guildId: F,
                                    channelId: j,
                                    onClose: y
                                })
                            }) : (0, t.jsxs)(m.Z, {
                                profileType: C.y0.FULL_SIZE,
                                children: [
                                    (0, t.jsx)(v.Z, {
                                        user: n,
                                        guildId: F,
                                        channelId: j,
                                        onClose: y
                                    }),
                                    (0, t.jsx)(S.Z, {
                                        profileType: C.y0.FULL_SIZE,
                                        user: n,
                                        friendToken: U
                                    }),
                                    (0, t.jsx)(x.Z, {
                                        user: n,
                                        guildId: F,
                                        viewProfileItem: K()
                                    })
                                ]
                            }),
                            (0, t.jsx)(g.Z, {
                                user: n,
                                displayProfile: Y,
                                guildId: F,
                                channelId: j,
                                activity: H,
                                transitionState: b,
                                viewProfileItem: K(),
                                onClose: y
                            }),
                            (0, t.jsx)(N.Z, {
                                user: n,
                                currentUser: i,
                                channelId: j,
                                displayProfile: Y,
                                initialSection: L,
                                initialSubsection: O,
                                friendToken: U,
                                onClose: y
                            })
                        ]
                    }),
                    (null == Y ? void 0 : Y.profileEffectId) != null && (0, t.jsx)(d.Z, {
                        profileEffectId: null == Y ? void 0 : Y.profileEffectId,
                        isHovering: z
                    })
                ]
            })
        })
    });
}
