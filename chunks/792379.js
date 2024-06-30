n.d(t, {
    Z: function () {
        return b;
    }
});
var i = n(735250), a = n(470079), l = n(597312), s = n(727637), r = n(410030), o = n(100527), c = n(906732), u = n(680295), d = n(5192), h = n(785717), p = n(318661), m = n(741308), _ = n(588822), f = n(900927), E = n(678738), C = n(502762), g = n(530), I = n(679332), x = n(544989), T = n(171368), N = n(308829), v = n(354810), S = n(228168), Z = n(689938), A = n(20256), M = n(77540);
function b(e) {
    let {
            user: t,
            channel: n
        } = e, {analyticsLocations: b} = (0, c.ZP)(o.Z.PROFILE_PANEL), R = (0, p.ZP)(t.id), j = (0, r.ZP)(), L = a.useRef(null), P = (0, s.Z)(L), O = e => {
            (0, T.openUserProfileModal)({
                sourceAnalyticsLocations: b,
                userId: t.id,
                channelId: n.id,
                ...e
            });
        };
    return (0, i.jsx)(c.Gt, {
        value: b,
        children: (0, i.jsx)(h.Mt, {
            layout: 'SIMPLIFIED_DM_PANEL',
            userId: t.id,
            channelId: n.id,
            children: (0, i.jsxs)(C.Z, {
                ref: L,
                user: t,
                displayProfile: R,
                profileType: S.y0.PANEL,
                themeOverride: j,
                className: A.container,
                children: [
                    (0, i.jsxs)(l.u2, {
                        children: [
                            (0, i.jsx)(x.Z, {
                                profileType: S.y0.PANEL,
                                children: (0, i.jsx)(I.Z, { user: t })
                            }),
                            (0, i.jsx)(v.Z, {
                                user: t,
                                displayProfile: R,
                                channel: n,
                                isHovering: P,
                                onOpenProfile: O
                            }),
                            (0, i.jsxs)('div', {
                                className: M.body,
                                children: [
                                    (0, i.jsx)(g.Z, {
                                        user: t,
                                        profileType: S.y0.PANEL,
                                        nickname: d.ZP.getName(null, n.id, t),
                                        pronouns: null == R ? void 0 : R.pronouns,
                                        onOpenProfile: O,
                                        tags: (0, i.jsx)(m.Z, {
                                            displayProfile: R,
                                            profileType: S.y0.PANEL
                                        })
                                    }),
                                    (0, i.jsxs)(C.Z.Overlay, {
                                        className: M.overlay,
                                        children: [
                                            (0, i.jsx)(E.Z, {
                                                title: Z.Z.Messages.USER_POPOUT_ABOUT_ME,
                                                headingColor: 'header-primary',
                                                children: (0, i.jsx)(_.Z, {
                                                    userId: t.id,
                                                    animateOnHover: !0,
                                                    isHovering: P
                                                })
                                            }),
                                            (0, i.jsx)(E.Z, {
                                                title: Z.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                                                headingColor: 'header-primary',
                                                children: (0, i.jsx)(f.Z, { userId: t.id })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsx)(N.Z, {
                        user: t,
                        channelId: n.id
                    }),
                    (null == R ? void 0 : R.profileEffectId) != null && (0, i.jsx)(u.Z, {
                        profileEffectId: null == R ? void 0 : R.profileEffectId,
                        isHovering: P
                    })
                ]
            })
        })
    });
}
