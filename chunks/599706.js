n(653041);
var i = n(735250);
n(470079);
var s = n(392711),
    a = n.n(s),
    r = n(481060),
    l = n(100527),
    o = n(184301),
    c = n(347475),
    u = n(463618),
    d = n(823379),
    _ = n(607746);
let E = (e) => {
    let { member: t, empty: n, guildId: s } = e;
    return n
        ? (0, i.jsx)('div', { className: _.partyMemberEmpty })
        : null == t
          ? (0, i.jsx)('div', {
                className: _.partyMemberUnknown,
                children: (0, i.jsx)(u.Z, { className: _.partyMemberUnknownIcon })
            })
          : (0, i.jsx)('div', {
                className: _.partyMemberKnown,
                children: (0, i.jsx)(r.Popout, {
                    preload: () => (0, o.Z)(t.id, t.getAvatarURL(s, 80), { guildId: s }),
                    renderPopout: (e) =>
                        (0, i.jsx)(c.Z, {
                            ...e,
                            userId: t.id,
                            guildId: s,
                            newAnalyticsLocations: [l.Z.AVATAR]
                        }),
                    position: 'left',
                    children: (e) =>
                        (0, i.jsx)(r.Avatar, {
                            ...e,
                            src: t.getAvatarURL(s, 24),
                            'aria-label': t.username,
                            size: r.AvatarSizes.SIZE_24,
                            className: _.partyMember
                        })
                })
            });
};
t.Z = (e) => {
    let { partySize: t, members: n, minAvatarsShown: s = 1, maxAvatarsShown: r = 2, guildId: l } = e,
        { unknownSize: o, totalSize: c, knownSize: u } = t;
    if (c < s) return null;
    let I = a()(n)
        .filter(d.lm)
        .take(r)
        .map((e) =>
            (0, i.jsx)(
                E,
                {
                    member: e,
                    guildId: l
                },
                e.id
            )
        )
        .value();
    for (let e = 0; e < o && I.length < r; e++) I.push((0, i.jsx)(E, { guildId: l }, 'unknown-member-'.concat(e)));
    let m = c - u - o;
    for (let e = 0; e < m && I.length < r; e++)
        I.push(
            (0, i.jsx)(
                E,
                {
                    empty: !0,
                    guildId: l
                },
                'empty-member-'.concat(e)
            )
        );
    let T = Math.max(Math.min(c - I.length, 99), 0);
    if (1 === T) {
        let e = n[r];
        I.push(
            (0, i.jsx)(
                E,
                {
                    member: e,
                    guildId: l
                },
                e.id
            )
        );
    }
    return (0, i.jsx)('div', {
        className: _.wrapper,
        children: (0, i.jsxs)('div', {
            className: _.partyMembers,
            children: [
                I,
                T > 1
                    ? (0, i.jsxs)('div', {
                          className: _.partyMemberOverflow,
                          children: ['+', T]
                      })
                    : null
            ]
        })
    });
};
