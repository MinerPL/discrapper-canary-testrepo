s.d(n, {
    Z: function () {
        return h;
    }
});
var t = s(735250);
s(470079);
var i = s(442837),
    o = s(481060),
    l = s(666520),
    r = s(592125),
    a = s(430824),
    c = s(944486),
    d = s(785717),
    u = s(621853),
    I = s(172351),
    _ = s(280885),
    E = s(900927),
    f = s(678738),
    x = s(179828),
    m = s(228168),
    Z = s(689938),
    p = s(642411);
function h(e) {
    var n;
    let { user: s, currentUser: h, displayProfile: S, subsection: v, onClose: T } = e,
        { trackUserProfileAction: g } = (0, d.KZ)(),
        A = (0, i.e7)([a.Z], () => ((null == S ? void 0 : S.guildId) != null ? a.Z.getGuild(S.guildId) : null)),
        N = (0, i.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getUserProfile(s.id)) || void 0 === e ? void 0 : e.application;
        }),
        j = (0, i.e7)([r.Z, c.Z], () => r.Z.getChannel(c.Z.getChannelId()));
    return (0, t.jsxs)(o.ScrollerThin, {
        fade: !0,
        className: p.scroller,
        children: [
            (null == S ? void 0 : S.bio) != null &&
                (null == S ? void 0 : S.bio) !== '' &&
                (0, t.jsx)(_.Z, {
                    userBio: S.bio,
                    setLineClamp: !1
                }),
            (null == N ? void 0 : N.popularApplicationCommandIds) != null &&
                null != j &&
                (0, t.jsx)(I.Z, {
                    applicationId: N.id,
                    commandIds: N.popularApplicationCommandIds,
                    channel: j,
                    guildId: null !== (n = null == S ? void 0 : S.guildId) && void 0 !== n ? n : void 0,
                    onClick: T
                }),
            null != A &&
                (0, t.jsx)(x.Z, {
                    user: s,
                    currentUser: h,
                    guild: A,
                    scrollIntoView: v === m.Tb.ROLES
                }),
            (0, t.jsx)(f.Z, {
                heading: Z.Z.Messages.BOT_PROFILE_CREATED_ON,
                children: (0, t.jsx)(E.Z, {
                    userId: s.id,
                    guildId: null == S ? void 0 : S.guildId,
                    tooltipDelay: m.vB
                })
            }),
            (0, t.jsx)(f.Z, {
                heading: Z.Z.Messages.NOTE,
                scrollIntoView: v === m.Tb.NOTE,
                children: (0, t.jsx)(l.Z, {
                    userId: s.id,
                    className: p.note,
                    autoFocus: v === m.Tb.NOTE,
                    onUpdate: () => g({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
