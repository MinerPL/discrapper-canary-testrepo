i.d(n, {
    Z: function () {
        return S;
    }
});
var t = i(735250);
i(470079);
var o = i(442837), s = i(699516), l = i(5192), a = i(877485), r = i(741308), c = i(681837), d = i(91433), u = i(502762), I = i(530), E = i(616140), _ = i(107194), f = i(228168), Z = i(981631), m = i(327570);
function S(e) {
    var n;
    let {
            user: i,
            currentUser: S,
            channelId: v,
            displayProfile: x,
            initialSection: h,
            initialSubsection: N,
            friendToken: g,
            onClose: C
        } = e, p = (0, o.e7)([s.Z], () => s.Z.getRelationshipType(i.id)), {
            originalFriendingEnabled: R,
            improvedFriendingEnabled: T
        } = (0, a.V)({ location: 'SimplifiedUserProfileModalBody' }), M = (0, _.Z)({
            user: i,
            currentUser: S
        });
    return (0, t.jsxs)('div', {
        className: m.body,
        children: [
            (0, t.jsx)(I.Z, {
                user: i,
                profileType: f.y0.FULL_SIZE,
                nickname: l.ZP.getName(null == x ? void 0 : x.guildId, v, i),
                pronouns: null == x ? void 0 : x.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, t.jsx)(c.Z, { userId: i.id }),
                tags: (0, t.jsx)(r.Z, {
                    displayProfile: x,
                    profileType: f.y0.FULL_SIZE,
                    onClose: C
                })
            }),
            (T || R) && p === Z.OGo.PENDING_INCOMING && (0, t.jsx)(u.Z.Overlay, {
                className: m.friendRequestBannerOverlay,
                children: (0, t.jsx)(d.Z, {
                    user: i,
                    guildId: null !== (n = null == x ? void 0 : x.guildId) && void 0 !== n ? n : void 0,
                    channelId: v,
                    friendToken: g,
                    className: m.friendRequestBanner
                })
            }),
            (0, t.jsx)(u.Z.Overlay, {
                className: m.overlay,
                children: (0, t.jsx)(E.Z, {
                    user: i,
                    currentUser: S,
                    displayProfile: x,
                    items: M,
                    initialSection: h,
                    initialSubsection: N,
                    onClose: C
                })
            })
        ]
    });
}
