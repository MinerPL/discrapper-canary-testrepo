n.d(t, {
    Z: function () {
        return S;
    }
});
var i = n(735250);
n(470079);
var a = n(442837), l = n(699516), s = n(246946), r = n(5192), o = n(332390), c = n(824572), u = n(741308), d = n(588822), h = n(681837), p = n(91433), m = n(900927), _ = n(724593), f = n(678738), E = n(502762), C = n(530), g = n(580512), I = n(765365), x = n(228168), T = n(981631), N = n(689938), v = n(77540);
function S(e) {
    let {
            user: t,
            displayProfile: n,
            channelId: S,
            isHovering: Z,
            onOpenProfile: A
        } = e, {improvedPanelFriendingEnabled: M} = (0, c.O)({ location: 'SimplifiedProfilePanelBody' }), {activeInviteToCallCtaEnabled: b} = (0, o.l)({ location: 'BiteSizeProfileDirectMessageSection' }), R = (0, I.Z)({ user: t }), j = (0, a.e7)([l.Z], () => l.Z.getRelationshipType(t.id)), L = (0, a.e7)([s.Z], () => s.Z.hidePersonalInformation);
    return (0, i.jsxs)('div', {
        className: v.body,
        children: [
            (0, i.jsx)(C.Z, {
                user: t,
                profileType: x.y0.PANEL,
                nickname: r.ZP.getName(null, S, t),
                pronouns: null == n ? void 0 : n.pronouns,
                onOpenProfile: A,
                tags: (0, i.jsx)(u.Z, {
                    displayProfile: n,
                    profileType: x.y0.PANEL
                }),
                nicknameIcons: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(h.Z, { userId: t.id }),
                        !L && (0, i.jsx)(_.Z, {
                            user: t,
                            isHovering: Z,
                            onOpenProfile: () => A({ subsection: x.Tb.NOTE })
                        })
                    ]
                })
            }),
            M && j === T.OGo.PENDING_INCOMING && (0, i.jsx)(E.Z.Overlay, {
                children: (0, i.jsx)(p.Z, {
                    user: t,
                    channelId: S
                })
            }),
            b && R,
            (0, i.jsx)(g.Z, {
                user: t,
                channelId: S
            }),
            (0, i.jsxs)(E.Z.Overlay, {
                className: v.overlay,
                children: [
                    !L && (null == n ? void 0 : n.bio) != null && (null == n ? void 0 : n.bio) !== '' && (0, i.jsx)(f.Z, {
                        title: N.Z.Messages.USER_POPOUT_ABOUT_ME,
                        headingColor: 'header-primary',
                        children: (0, i.jsx)(d.Z, {
                            userBio: n.bio,
                            animateOnHover: !0,
                            isHovering: Z,
                            userId: t.id
                        })
                    }),
                    (0, i.jsx)(f.Z, {
                        title: N.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                        headingColor: 'header-primary',
                        children: (0, i.jsx)(m.Z, { userId: t.id })
                    })
                ]
            })
        ]
    });
}
