i.d(n, {
    Z: function () {
        return U;
    }
}), i(47120);
var t = i(735250), o = i(470079), s = i(481060), l = i(727637), a = i(100527), r = i(906732), c = i(680295), d = i(5192), u = i(998502), I = i(785717), E = i(318661), _ = i(721987), f = i(204197), Z = i(78675), m = i(741308), S = i(588822), v = i(900927), x = i(678738), h = i(502762), N = i(530), g = i(679332), C = i(544989), p = i(228168), R = i(981631), T = i(689938), M = i(327570), j = i(143599), A = i(784204);
let P = u.ZP.getEnableHardwareAcceleration() ? s.AnimatedAvatar : s.Avatar;
function U(e) {
    let {
            user: n,
            guildId: i,
            channelId: u,
            messageId: U,
            roleId: L,
            transitionState: O,
            onClose: b,
            sourceAnalyticsLocations: y = []
        } = e, {analyticsLocations: D} = (0, r.ZP)([
            ...y,
            a.Z.SIMPLIFIED_PROFILE_MODAL
        ]), B = i === R.ME ? void 0 : i, F = (0, E.ZP)(n.id, B), {theme: G} = (0, _.Z)({
            user: n,
            displayProfile: F
        }), {
            avatarSrc: k,
            eventHandlers: w,
            avatarDecorationSrc: Y
        } = (0, f.Z)({
            user: n,
            guildId: null == F ? void 0 : F.guildId,
            size: s.AvatarSizes.SIZE_120
        }), V = o.createRef(), H = (0, l.Z)(V);
    return (0, t.jsx)(r.Gt, {
        value: D,
        children: (0, t.jsx)(I.Mt, {
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            guildId: B,
            channelId: u,
            messageId: U,
            roleId: L,
            showGuildProfile: !0,
            children: (0, t.jsxs)(s.ModalRoot, {
                transitionState: O,
                className: M.root,
                hideShadow: !0,
                'aria-label': T.Z.Messages.USER_PROFILE_MODAL,
                children: [
                    (0, t.jsxs)(h.Z, {
                        user: n,
                        displayProfile: F,
                        profileType: p.y0.FULL_SIZE,
                        ref: V,
                        children: [
                            (0, t.jsx)(C.Z, {
                                profileType: p.y0.FULL_SIZE,
                                children: (0, t.jsx)(g.Z, { user: n })
                            }),
                            (0, t.jsxs)('header', {
                                children: [
                                    (0, t.jsx)(Z.Z, {
                                        user: n,
                                        displayProfile: F,
                                        profileType: p.y0.FULL_SIZE,
                                        hasProfileEffect: (null == F ? void 0 : F.profileEffectId) != null
                                    }),
                                    (0, t.jsx)('div', {
                                        className: M.headerInner,
                                        children: (0, t.jsx)('div', {
                                            ...w,
                                            children: (0, t.jsx)(P, {
                                                src: k,
                                                avatarDecoration: Y,
                                                size: s.AvatarSizes.SIZE_120,
                                                className: M.avatar,
                                                status: void 0,
                                                statusBackdropColor: (0, s.getStatusBackdropColor)(G),
                                                'aria-label': n.username,
                                                isMobile: !1,
                                                statusTooltip: !0,
                                                statusTooltipDelay: p.vB
                                            })
                                        })
                                    })
                                ]
                            }),
                            (0, t.jsxs)('div', {
                                className: M.body,
                                children: [
                                    (0, t.jsx)(N.Z, {
                                        user: n,
                                        profileType: p.y0.FULL_SIZE,
                                        nickname: d.ZP.getName(B, u, n),
                                        pronouns: null == F ? void 0 : F.pronouns,
                                        nicknameVariant: 'heading-xl/bold',
                                        tags: (0, t.jsx)(m.Z, {
                                            displayProfile: F,
                                            profileType: p.y0.FULL_SIZE,
                                            onClose: b
                                        })
                                    }),
                                    (0, t.jsx)(h.Z.Overlay, {
                                        className: M.overlay,
                                        children: (0, t.jsxs)('div', {
                                            className: A.container,
                                            children: [
                                                (0, t.jsx)(s.TabBar, {
                                                    className: A.tabBar,
                                                    type: 'top',
                                                    selectedItem: p.oh.USER_INFO,
                                                    onItemSelect: R.dG4,
                                                    children: (0, t.jsx)(s.TabBar.Item, {
                                                        className: A.tabBarItem,
                                                        id: p.oh.USER_INFO,
                                                        'aria-label': T.Z.Messages.USER_PROFILE_ABOUT_ME,
                                                        children: (0, t.jsx)(s.Text, {
                                                            variant: 'text-sm/normal',
                                                            children: T.Z.Messages.USER_PROFILE_ABOUT_ME
                                                        })
                                                    }, p.oh.USER_INFO)
                                                }),
                                                (0, t.jsxs)(s.ScrollerThin, {
                                                    fade: !0,
                                                    className: j.scroller,
                                                    children: [
                                                        (0, t.jsx)(S.Z, {
                                                            userId: n.id,
                                                            userBio: null == F ? void 0 : F.bio,
                                                            setLineClamp: !1
                                                        }),
                                                        (0, t.jsx)(x.Z, {
                                                            title: T.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                                                            children: (0, t.jsx)(v.Z, {
                                                                userId: n.id,
                                                                guildId: B,
                                                                tooltipDelay: p.vB
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    (null == F ? void 0 : F.profileEffectId) != null && (0, t.jsx)(c.Z, {
                        profileEffectId: null == F ? void 0 : F.profileEffectId,
                        isHovering: H
                    })
                ]
            })
        })
    });
}
