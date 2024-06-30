n.d(t, {
    HZ: function () {
        return x;
    },
    Rf: function () {
        return S;
    },
    ZP: function () {
        return h;
    }
});
var s = n(735250);
n(470079);
var a = n(120356), r = n.n(a), l = n(442837), i = n(481060), u = n(271383), o = n(51144), c = n(894017), E = n(79874), d = n(315416), N = n(236373), T = n(854698), _ = n(391174), D = n(95291), m = n(390966), v = n(689938), g = n(858625);
function x(e) {
    let {
            className: t,
            creator: n,
            guildId: a,
            isNew: _,
            isHub: D = !1,
            guildEvent: x,
            eventPreview: S,
            recurrenceId: h
        } = e, f = (0, d.Z)(a, x.id, h), I = null != x ? x : S, R = (0, l.e7)([u.ZP], () => u.ZP.getNick(a, null == n ? void 0 : n.id), [
            a,
            n
        ]);
    h = null == I || null != h ? h : (0, T.DK)(I);
    let {startTime: L} = (0, E.ZP)(null != x ? x : S, h), C = (0, c.Z)(h, x.id), p = (null == I ? void 0 : I.scheduled_start_time) != null ? (0, T.lh)(C, L, new Date(I.scheduled_start_time)) : null;
    if (null == I)
        return null;
    let {
        entity_type: Z,
        status: A,
        recurrence_rule: j
    } = I;
    return (0, s.jsxs)('div', {
        className: r()(g.statusContainer, t),
        children: [
            (0, s.jsx)(m.z, {
                startTime: L.toISOString(),
                status: null != p ? p : A,
                eventType: Z,
                isNew: _,
                recurrenceRule: (0, N.KV)(j),
                guildEventId: x.id,
                recurrenceId: h
            }),
            (0, s.jsx)('div', { className: g.spacer }),
            !D && null != n && (0, s.jsx)(i.Tooltip, {
                text: v.Z.Messages.GUILD_EVENT_CREATED_BY.format({ username: null != R ? R : o.ZP.getName(n) }),
                children: e => (0, s.jsx)(i.Avatar, {
                    ...e,
                    src: n.getAvatarURL(a, 20),
                    size: i.AvatarSizes.SIZE_20,
                    'aria-label': null != R ? R : n.username,
                    className: g.creator
                })
            }),
            (0, s.jsx)(i.Tooltip, {
                text: v.Z.Messages.GUILD_EVENT_INTERESTED_COUNT.format({ count: f }),
                children: e => (0, s.jsxs)('div', {
                    className: g.rsvpCount,
                    ...e,
                    children: [
                        (0, s.jsx)(i.GroupIcon, {
                            size: 'xxs',
                            color: 'currentColor',
                            className: g.rsvpIcon
                        }),
                        (0, s.jsx)(i.Text, {
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            children: f
                        })
                    ]
                })
            })
        ]
    });
}
function S(e) {
    let {
        headerVariant: t = 'heading-lg/medium',
        descriptionClassName: n,
        name: a,
        description: l,
        truncate: u,
        guildId: o,
        imageSource: c
    } = e;
    return (0, s.jsxs)('div', {
        className: r()({ [g.withThumbnail]: null != c }),
        children: [
            (0, s.jsxs)('div', {
                className: r()({ [g.descriptionWithThumbnail]: null != c }),
                children: [
                    (0, s.jsx)(i.Heading, {
                        variant: t,
                        selectable: !0,
                        className: g.eventName,
                        children: a
                    }),
                    null != l && (0, s.jsx)(_.Z, {
                        description: l,
                        className: r()(n, g.description),
                        truncate: u,
                        guildId: o
                    })
                ]
            }),
            null != c && (0, s.jsx)('div', {
                className: g.thumbnailContainer,
                children: (0, s.jsx)(D.Z, {
                    source: c,
                    className: g.thumbnail
                })
            })
        ]
    });
}
function h(e) {
    let {
        headerVariant: t,
        descriptionClassName: n,
        creator: a,
        name: r,
        description: l,
        imageSource: i,
        isHub: u = !1,
        truncate: o,
        guildId: c,
        isNew: E,
        guildEvent: d,
        eventPreview: N,
        recurrenceId: T
    } = e;
    return (0, s.jsxs)('div', {
        className: g.container,
        children: [
            (0, s.jsx)(x, {
                className: g.eventInfoStatusContainer,
                creator: a,
                guildId: c,
                isHub: u,
                isNew: E,
                guildEvent: d,
                eventPreview: N,
                recurrenceId: T
            }),
            (0, s.jsx)(S, {
                name: r,
                description: l,
                headerVariant: t,
                descriptionClassName: n,
                truncate: o,
                guildId: c,
                imageSource: i
            })
        ]
    });
}
