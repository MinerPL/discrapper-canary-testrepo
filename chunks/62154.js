t.d(n, {
    Z: function () {
        return h;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    o = t(699516),
    s = t(5192),
    r = t(648052),
    c = t(681837),
    a = t(91433),
    d = t(502762),
    u = t(530),
    f = t(740628),
    m = t(643518),
    p = t(228168),
    x = t(981631),
    I = t(272216);
function h(e) {
    var n;
    let { user: t, currentUser: h, channelId: v, displayProfile: g, initialSection: Z, initialSubsection: _, friendToken: b, onClose: j } = e,
        E = (0, l.e7)([o.Z], () => o.Z.getRelationshipType(t.id)),
        T = (0, m.Z)({
            user: t,
            currentUser: h
        });
    return (0, i.jsxs)('div', {
        className: I.body,
        children: [
            (0, i.jsx)(u.Z, {
                user: t,
                profileType: p.y0.FULL_SIZE,
                nickname: s.ZP.getName(null == g ? void 0 : g.guildId, v, t),
                pronouns: null == g ? void 0 : g.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, i.jsx)(c.Z, { userId: t.id }),
                tags: (0, i.jsx)(r.Z, {
                    displayProfile: g,
                    profileType: p.y0.FULL_SIZE,
                    onClose: j
                })
            }),
            E === x.OGo.PENDING_INCOMING &&
                (0, i.jsx)(d.Z.Overlay, {
                    className: I.friendRequestBannerOverlay,
                    children: (0, i.jsx)(a.Z, {
                        user: t,
                        guildId: null !== (n = null == g ? void 0 : g.guildId) && void 0 !== n ? n : void 0,
                        channelId: v,
                        friendToken: b,
                        className: I.friendRequestBanner
                    })
                }),
            (0, i.jsx)(d.Z.Overlay, {
                className: I.overlay,
                children: (0, i.jsx)(f.Z, {
                    user: t,
                    currentUser: h,
                    displayProfile: g,
                    items: T,
                    initialSection: Z,
                    initialSubsection: _,
                    onClose: j
                })
            })
        ]
    });
}
