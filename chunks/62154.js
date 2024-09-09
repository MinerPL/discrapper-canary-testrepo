s.d(n, {
    Z: function () {
        return Z;
    }
});
var t = s(735250);
s(470079);
var i = s(442837),
    o = s(979264),
    l = s(699516),
    r = s(5192),
    a = s(648052),
    c = s(681837),
    d = s(91433),
    u = s(502762),
    I = s(530),
    _ = s(740628),
    E = s(643518),
    f = s(228168),
    x = s(981631),
    m = s(419758);
function Z(e) {
    var n;
    let { user: s, currentUser: Z, channelId: p, displayProfile: h, initialSection: S, initialSubsection: v, friendToken: T, onClose: g } = e,
        A = (0, i.e7)([l.Z], () => l.Z.getRelationshipType(s.id)),
        N = (0, E.Z)({
            user: s,
            currentUser: Z
        });
    return (0, t.jsxs)('div', {
        className: m.body,
        children: [
            (0, t.jsx)(I.Z, {
                user: s,
                profileType: f.y0.FULL_SIZE,
                nickname: r.ZP.getName(null == h ? void 0 : h.guildId, p, s),
                pronouns: null == h ? void 0 : h.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, t.jsx)(c.Z, { userId: s.id }),
                tags: (0, t.jsx)(a.Z, {
                    displayProfile: h,
                    profileType: f.y0.FULL_SIZE,
                    onClose: g
                })
            }),
            (0, t.jsx)(o.ZP, { userId: s.id }),
            A === x.OGo.PENDING_INCOMING &&
                (0, t.jsx)(u.Z.Overlay, {
                    className: m.friendRequestBannerOverlay,
                    children: (0, t.jsx)(d.Z, {
                        user: s,
                        guildId: null !== (n = null == h ? void 0 : h.guildId) && void 0 !== n ? n : void 0,
                        channelId: p,
                        friendToken: T,
                        className: m.friendRequestBanner
                    })
                }),
            (0, t.jsx)(u.Z.Overlay, {
                className: m.overlay,
                children: (0, t.jsx)(_.Z, {
                    user: s,
                    currentUser: Z,
                    displayProfile: h,
                    items: N,
                    initialSection: S,
                    initialSubsection: v,
                    onClose: g
                })
            })
        ]
    });
}
