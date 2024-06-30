n(653041);
var i = n(735250);
n(470079);
var a = n(392711), s = n.n(a), l = n(481060), r = n(730749), o = n(100527), c = n(484459), d = n(103575), u = n(463618), _ = n(823379), E = n(981631), m = n(147522);
let I = (0, r.Z)(e => {
    let {
        member: t,
        empty: n,
        analyticsContext: a,
        guildId: s
    } = e;
    if (n)
        return (0, i.jsx)('div', { className: m.partyMemberEmpty });
    if (null == t)
        return (0, i.jsx)('div', {
            className: m.partyMemberUnknown,
            children: (0, i.jsx)(u.Z, { className: m.partyMemberUnknownIcon })
        });
    let r = {
        location: {
            ...a.location,
            object: E.qAy.AVATAR
        }
    };
    return (0, i.jsx)('div', {
        className: m.partyMemberKnown,
        children: (0, i.jsx)(l.Popout, {
            preload: () => (0, c.W)(t.id, t.getAvatarURL(s, 80), { guildId: s }),
            renderPopout: e => (0, i.jsx)(d.Z, {
                ...e,
                location: 'PartyAvatars',
                userId: t.id,
                guildId: s,
                analyticsParams: r,
                newAnalyticsLocations: [o.Z.AVATAR]
            }),
            position: 'left',
            children: e => (0, i.jsx)(l.Avatar, {
                ...e,
                src: t.getAvatarURL(s, 24),
                'aria-label': t.username,
                size: l.AvatarSizes.SIZE_24,
                className: m.partyMember
            })
        })
    });
});
t.Z = e => {
    let {
            partySize: t,
            members: n,
            minAvatarsShown: a = 1,
            maxAvatarsShown: l = 2,
            guildId: r
        } = e, {
            unknownSize: o,
            totalSize: c,
            knownSize: d
        } = t;
    if (c < a)
        return null;
    let u = s()(n).filter(_.lm).take(l).map(e => (0, i.jsx)(I, {
        member: e,
        guildId: r
    }, e.id)).value();
    for (let e = 0; e < o && u.length < l; e++)
        u.push((0, i.jsx)(I, { guildId: r }, 'unknown-member-'.concat(e)));
    let E = c - d - o;
    for (let e = 0; e < E && u.length < l; e++)
        u.push((0, i.jsx)(I, {
            empty: !0,
            guildId: r
        }, 'empty-member-'.concat(e)));
    let T = Math.max(Math.min(c - u.length, 99), 0);
    if (1 === T) {
        let e = n[l];
        u.push((0, i.jsx)(I, {
            member: e,
            guildId: r
        }, e.id));
    }
    return (0, i.jsx)('div', {
        className: m.wrapper,
        children: (0, i.jsxs)('div', {
            className: m.partyMembers,
            children: [
                u,
                T > 1 ? (0, i.jsxs)('div', {
                    className: m.partyMemberOverflow,
                    children: [
                        '+',
                        T
                    ]
                }) : null
            ]
        })
    });
};
