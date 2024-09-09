n.d(t, {
    HZ: function () {
        return h;
    },
    Rf: function () {
        return g;
    },
    ZP: function () {
        return f;
    }
});
var s = n(735250);
n(470079);
var a = n(120356),
    l = n.n(a),
    r = n(442837),
    i = n(481060),
    u = n(271383),
    c = n(51144),
    o = n(894017),
    E = n(79874),
    d = n(315416),
    N = n(236373),
    _ = n(854698),
    T = n(391174),
    m = n(95291),
    D = n(390966),
    v = n(689938),
    x = n(614364);
function h(e) {
    let { className: t, creator: n, guildId: a, isNew: T, isHub: m = !1, guildEvent: h, eventPreview: g, recurrenceId: f } = e,
        L = (0, d.Z)(a, h.id, f),
        S = null != h ? h : g,
        A = (0, r.e7)([u.ZP], () => u.ZP.getNick(a, null == n ? void 0 : n.id), [a, n]);
    f = null == S || null != f ? f : (0, _.DK)(S);
    let { startTime: I } = (0, E.ZP)(null != h ? h : g, f),
        Z = (0, o.Z)(f, h.id),
        C = (null == S ? void 0 : S.scheduled_start_time) != null ? (0, _.lh)(Z, I, new Date(S.scheduled_start_time)) : null;
    if (null == S) return null;
    let { entity_type: R, status: p, recurrence_rule: j } = S;
    return (0, s.jsxs)('div', {
        className: l()(x.statusContainer, t),
        children: [
            (0, s.jsx)(D.z, {
                startTime: I.toISOString(),
                status: null != C ? C : p,
                eventType: R,
                isNew: T,
                recurrenceRule: (0, N.KV)(j),
                guildEventId: h.id,
                recurrenceId: f
            }),
            (0, s.jsx)('div', { className: x.spacer }),
            !m &&
                null != n &&
                (0, s.jsx)(i.Tooltip, {
                    text: v.Z.Messages.GUILD_EVENT_CREATED_BY.format({ username: null != A ? A : c.ZP.getName(n) }),
                    children: (e) =>
                        (0, s.jsx)(i.Avatar, {
                            ...e,
                            src: n.getAvatarURL(a, 20),
                            size: i.AvatarSizes.SIZE_20,
                            'aria-label': null != A ? A : n.username,
                            className: x.creator
                        })
                }),
            (0, s.jsx)(i.Tooltip, {
                text: v.Z.Messages.GUILD_EVENT_INTERESTED_COUNT.format({ count: L }),
                children: (e) =>
                    (0, s.jsxs)('div', {
                        className: x.rsvpCount,
                        ...e,
                        children: [
                            (0, s.jsx)(i.GroupIcon, {
                                size: 'xxs',
                                color: 'currentColor',
                                className: x.rsvpIcon
                            }),
                            (0, s.jsx)(i.Text, {
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                children: L
                            })
                        ]
                    })
            })
        ]
    });
}
function g(e) {
    let { headerVariant: t = 'heading-lg/medium', descriptionClassName: n, name: a, description: r, truncate: u, guildId: c, imageSource: o } = e;
    return (0, s.jsxs)('div', {
        className: l()({ [x.withThumbnail]: null != o }),
        children: [
            (0, s.jsxs)('div', {
                className: l()({ [x.descriptionWithThumbnail]: null != o }),
                children: [
                    (0, s.jsx)(i.Heading, {
                        variant: t,
                        selectable: !0,
                        className: x.eventName,
                        children: a
                    }),
                    null != r &&
                        (0, s.jsx)(T.Z, {
                            description: r,
                            className: l()(n, x.description),
                            truncate: u,
                            guildId: c
                        })
                ]
            }),
            null != o &&
                (0, s.jsx)('div', {
                    className: x.thumbnailContainer,
                    children: (0, s.jsx)(m.Z, {
                        source: o,
                        className: x.thumbnail
                    })
                })
        ]
    });
}
function f(e) {
    let { headerVariant: t, descriptionClassName: n, creator: a, name: l, description: r, imageSource: i, isHub: u = !1, truncate: c, guildId: o, isNew: E, guildEvent: d, eventPreview: N, recurrenceId: _ } = e;
    return (0, s.jsxs)('div', {
        className: x.container,
        children: [
            (0, s.jsx)(h, {
                className: x.eventInfoStatusContainer,
                creator: a,
                guildId: o,
                isHub: u,
                isNew: E,
                guildEvent: d,
                eventPreview: N,
                recurrenceId: _
            }),
            (0, s.jsx)(g, {
                name: l,
                description: r,
                headerVariant: t,
                descriptionClassName: n,
                truncate: c,
                guildId: o,
                imageSource: i
            })
        ]
    });
}
