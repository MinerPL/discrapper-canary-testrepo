var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(442837),
    o = n(481060),
    s = n(717881),
    c = n(503438),
    u = n(850827),
    d = n(952164),
    h = n(237583),
    p = n(131704),
    f = n(314897),
    m = n(594174),
    g = n(768581),
    C = n(51144),
    _ = n(754231),
    x = n(51299);
function v(e) {
    let { guildId: t, member: n, className: l } = e,
        a = null != n.member ? (0, g.CA)(n.member) : null;
    return (0, i.jsx)(o.Tooltip, {
        text: n.nick,
        position: 'bottom',
        children: (e) => {
            var s;
            return (0, i.jsx)(o.Avatar, {
                src: null != a ? a : n.user.getAvatarURL(t, 16),
                size: o.AvatarSizes.SIZE_16,
                className: r()(l, x.partyAvatar),
                'aria-label': null !== (s = n.nick) && void 0 !== s ? s : C.ZP.getName(n.user),
                ...e
            });
        }
    });
}
function I(e) {
    let { members: t, guildId: n } = e;
    return (0, i.jsx)(h.Z, {
        className: x.partyMembers,
        guildId: n,
        users: t,
        max: 6,
        renderUser: (e, t, l) =>
            (0, i.jsx)(
                v,
                {
                    guildId: n,
                    member: e,
                    className: t
                },
                l
            ),
        renderMoreUsers: (e, t, n) =>
            (0, i.jsx)(
                'div',
                {
                    className: r()(x.morePartyMembers, t),
                    children: e
                },
                n
            )
    });
}
t.Z = (e) => {
    let { channel: t, presenceActivity: n, members: l, embeddedApp: r, onAction: o } = e,
        h = null != r,
        g = h ? Array.from(r.embeddedActivity.userIds) : [],
        C = (0, a.e7)([m.default, f.default], () => {
            if (h) return m.default.getUser(g[0]);
            if (null != l) {
                var e, t;
                return l.length <= 0 ? null : null !== (t = null === (e = l.find((e) => e.user.id !== f.default.getId())) || void 0 === e ? void 0 : e.user) && void 0 !== t ? t : l[0].user;
            }
        });
    if (null == C) return null;
    let v = h || (0, c.Z)(n),
        b = (0, p.vd)(t.type);
    return (0, i.jsxs)('div', {
        className: x.activity,
        children: [
            (0, i.jsx)('div', {
                className: x.channelActivityContainer,
                children: v
                    ? (0, i.jsx)(_.Z, {
                          activity: n,
                          embeddedApp: r,
                          user: C,
                          channel: t,
                          sortedVoiceStates: l,
                          onOpenSpotifyTrack: b ? d.aG : void 0,
                          onOpenSpotifyArtist: b ? d.d$ : void 0,
                          onOpenSpotifyAlbum: b ? d.Z5 : void 0
                      })
                    : (0, i.jsx)(s.Z, {
                          type: s.P.VOICE_CHANNEL,
                          activity: n,
                          user: C,
                          guildId: t.getGuildId(),
                          channelId: t.id,
                          renderHeaderAccessory:
                              null != l
                                  ? () =>
                                        (0, i.jsx)(I, {
                                            guildId: t.guild_id,
                                            members: l
                                        })
                                  : void 0,
                          isEmbedded: h
                      })
            }),
            (0, i.jsx)('div', {
                className: x.activityActionsContainer,
                children: (0, i.jsx)(u.Z, {
                    type: s.P.VOICE_CHANNEL,
                    activity: n,
                    embeddedActivity: null == r ? void 0 : r.embeddedActivity,
                    user: C,
                    guildId: t.getGuildId(),
                    channelId: t.id,
                    color: x.button,
                    onAction: o,
                    isEmbedded: h
                })
            })
        ]
    });
};
