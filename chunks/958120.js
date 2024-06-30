n.d(t, {
    Z: function () {
        return O;
    }
});
var r = n(735250), i = n(470079), a = n(442837), o = n(954138), s = n(979264), l = n(699516), u = n(246946), c = n(5192), d = n(741308), _ = n(681837), E = n(91433), f = n(724593), h = n(502762), p = n(530), m = n(790711), I = n(580512), T = n(67152), g = n(579285), S = n(287612), A = n(228168), N = n(981631), v = n(472375);
function O(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: O,
            guild: R,
            isHovering: C,
            onOpenProfile: y,
            channelId: D,
            onClose: L
        } = e, b = c.ZP.getName(null == R ? void 0 : R.id, D, t), M = (0, a.e7)([l.Z], () => l.Z.getRelationshipType(t.id)), P = (0, a.e7)([u.Z], () => u.Z.hidePersonalInformation), U = (0, o.Z)('username'), w = i.useMemo(() => ({
            source: N.jXE.PROFILE_POPOUT,
            tagUserId: t.id
        }), [t.id]);
    return (0, r.jsxs)('div', {
        className: v.body,
        children: [
            (0, r.jsx)(p.Z, {
                user: t,
                profileType: A.y0.BITE_SIZE,
                onOpenProfile: y,
                usernameIcon: t.hasAvatarForGuild(null == R ? void 0 : R.id) && (0, r.jsx)(m.Z, {
                    user: t,
                    nickname: b
                }),
                nickname: b,
                pronouns: null == O ? void 0 : O.pronouns,
                tags: (0, r.jsx)(d.Z, {
                    displayProfile: O,
                    profileType: A.y0.BITE_SIZE,
                    onClose: L
                }),
                nicknameIcons: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(_.Z, { userId: t.id }),
                        !P && (0, r.jsx)(f.Z, {
                            user: t,
                            isHovering: C,
                            onOpenProfile: () => null == y ? void 0 : y({ subsection: A.Tb.NOTE })
                        })
                    ]
                })
            }),
            M === N.OGo.PENDING_INCOMING && (0, r.jsx)(h.Z.Overlay, {
                children: (0, r.jsx)(E.Z, {
                    user: t,
                    guildId: null == R ? void 0 : R.id,
                    channelId: D
                })
            }),
            t.id !== n.id && (0, r.jsx)(S.Z, {
                user: t,
                onOpenProfile: e => null == y ? void 0 : y({ section: e })
            }),
            U && (0, r.jsx)(s.ZP, {
                userId: t.id,
                inline: !1,
                profileViewedAnalytics: w
            }),
            (0, r.jsx)(T.Z, {
                user: t,
                bio: null == O ? void 0 : O.bio,
                hidePersonalInformation: P,
                onClose: L
            }),
            (0, r.jsx)(I.Z, {
                user: t,
                guild: R,
                channelId: D,
                onClose: L
            }),
            null != R && (0, r.jsx)(g.Z, {
                user: t,
                currentUser: n,
                guild: R,
                onOpenProfile: () => null == y ? void 0 : y({ subsection: A.Tb.ROLES })
            })
        ]
    });
}
