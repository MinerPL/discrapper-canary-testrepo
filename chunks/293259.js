i.d(n, {
    Z: function () {
        return M;
    }
});
var t = i(735250), o = i(470079), s = i(442837), l = i(692547), a = i(481060), r = i(239091), c = i(233440), d = i(314897), u = i(158776), I = i(699516), E = i(998502), _ = i(785717), f = i(621853), Z = i(204197), m = i(735336), S = i(520978), v = i(184325), x = i(652853), h = i(225714), N = i(228168), g = i(231338), C = i(689938), p = i(258125);
let R = a.AvatarSizes.SIZE_120, T = E.ZP.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;
function M(e) {
    let {
            displayProfile: n,
            user: E,
            guildId: M,
            channelId: j,
            friendToken: A,
            className: P,
            isStreaming: U,
            hasProfileEffect: L,
            onClose: O
        } = e, b = (0, s.e7)([I.Z], () => I.Z.getRelationshipType(E.id)), y = (0, s.e7)([u.Z], () => u.Z.isMobileOnline(E.id)), D = (0, s.e7)([u.Z], () => u.Z.getStatus(E.id)), B = (0, s.e7)([f.Z], () => f.Z.getUserProfile(E.id)), F = (0, s.e7)([d.default], () => d.default.getId() === E.id), {theme: G} = (0, x.z)(), {trackUserProfileAction: k} = (0, _.KZ)(), {
            avatarSrc: w,
            eventHandlers: Y,
            avatarDecorationSrc: V
        } = (0, Z.Z)({
            user: E,
            size: R
        }), H = o.useMemo(() => (0, c.W)(E, j), [
            E,
            j
        ]);
    return (0, t.jsxs)('header', {
        className: P,
        children: [
            (0, t.jsx)(m.Z, {
                displayProfile: n,
                onClose: O,
                user: E,
                profileType: N.y0.MODAL,
                hasProfileEffect: L
            }),
            (0, t.jsxs)('div', {
                className: p.header,
                children: [
                    (0, t.jsx)('div', {
                        ...Y,
                        children: (0, t.jsx)(T, {
                            src: w,
                            avatarDecoration: V,
                            size: R,
                            className: p.avatar,
                            status: H ? g.Sk.UNKNOWN : U ? g.Sk.STREAMING : D,
                            statusBackdropColor: (0, a.getStatusBackdropColor)(G),
                            isMobile: y,
                            statusTooltip: !0,
                            'aria-label': E.username
                        })
                    }),
                    (0, t.jsxs)('div', {
                        className: p.headerTop,
                        children: [
                            (null == B ? void 0 : B.profileFetchFailed) && !E.isClyde() ? (0, t.jsx)(a.Tooltip, {
                                text: C.Z.Messages.USER_PROFILE_LOAD_ERROR,
                                spacing: 20,
                                children: e => (0, t.jsx)(a.CircleExclamationPointIcon, {
                                    size: 'custom',
                                    width: 20,
                                    height: 20,
                                    ...e,
                                    className: p.warningCircleIcon,
                                    color: l.Z.unsafe_rawColors.YELLOW_300.css
                                })
                            }) : (0, t.jsx)(v.Z, {
                                user: E,
                                className: p.badgeList,
                                guildId: M,
                                size: v.V.SIZE_24,
                                shrinkAtCount: 8,
                                shrinkToSize: v.V.SIZE_18,
                                onBadgeClick: O
                            }),
                            (0, t.jsxs)('div', {
                                className: p.relationshipButtons,
                                children: [
                                    (null == B ? void 0 : B.application) != null && (0, t.jsx)(S.Z, {
                                        className: p.applicationInstallButton,
                                        application: B.application
                                    }),
                                    (0, t.jsx)(h.Z, {
                                        user: E,
                                        isCurrentUser: F,
                                        relationshipType: b,
                                        friendToken: A,
                                        onClose: O
                                    }),
                                    F || E.isNonUserBot() ? null : (0, t.jsx)(a.Clickable, {
                                        focusProps: { offset: { left: 8 } },
                                        onClick: function (e) {
                                            k({ action: 'PRESS_OPTIONS' }), (0, r.jW)(e, async () => {
                                                let {default: e} = await i.e('29136').then(i.bind(i, 193646));
                                                return n => (0, t.jsx)(e, {
                                                    ...n,
                                                    user: E,
                                                    isCurrentUser: F,
                                                    guildId: M,
                                                    relationshipType: b,
                                                    trackUserProfileAction: k,
                                                    onClose: O
                                                });
                                            });
                                        },
                                        children: (0, t.jsx)(a.MoreVerticalIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: p.additionalActionsIcon
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
