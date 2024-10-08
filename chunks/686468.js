n.d(t, {
    Z: function () {
        return T;
    }
});
var i = n(735250);
n(470079);
var a = n(442837),
    s = n(692547),
    l = n(481060),
    r = n(884338),
    o = n(688641),
    c = n(596449),
    u = n(459502),
    d = n(856691),
    h = n(889161),
    m = n(496675),
    p = n(146085),
    _ = n(979339),
    E = n(643632),
    f = n(939863),
    C = n(689938),
    g = n(625229);
function I(e) {
    let { onClick: t } = e;
    return (0, i.jsx)(o.Z, {
        iconContainerClassName: g.continueIconContainer,
        icon: (0, i.jsx)(l.StageIcon, {
            size: 'custom',
            color: 'currentColor',
            className: g.continueIcon,
            height: 20,
            width: 20
        }),
        color: s.Z.unsafe_rawColors.PRIMARY_700.css,
        title: C.Z.Messages.STAGE_CONTINUE_PROMPT_TITLE,
        description: C.Z.Messages.STAGE_CONTINUE_PROMPT_SUBTITLE,
        onClick: t
    });
}
function x(e) {
    let { channel: t } = e,
        { participants: n, usersInSummary: a } = (0, _.Z)(t.id);
    return (0, i.jsxs)('div', {
        className: g.audienceSummary,
        children: [
            (0, i.jsx)(r.Z, {
                className: g.summaryItem,
                guildId: t.guild_id,
                users: a,
                size: r.u.SIZE_16
            }),
            (0, i.jsx)(l.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: (function (e) {
                    if (0 === e.length) return '';
                    if (1 === e.length) return C.Z.Messages.STAGE_AUDIENCE_WAITING_ONE.format({ first: e[0].userNick });
                    if (2 === e.length)
                        return C.Z.Messages.STAGE_AUDIENCE_WAITING_TWO.format({
                            first: e[0].userNick,
                            second: e[1].userNick
                        });
                    let t = e.length - 2;
                    return C.Z.Messages.STAGE_AUDIENCE_WAITING_MANY.format({
                        first: e[0].userNick,
                        second: e[1].userNick,
                        numOthers: t
                    });
                })(n)
            })
        ]
    });
}
function T(e) {
    let { channel: t, onContinueClick: n } = e,
        s = (0, a.e7)([m.Z], () => m.Z.can(p.yP, t), [t]),
        r = t.guild_id,
        { canCreateGuildEvent: o } = (0, h.XJ)(t),
        T = (0, E.Z)(t.id),
        { usersInSummary: N } = (0, _.Z)(t.id);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(f.Z, {
                children: (0, i.jsx)('div', {
                    className: g.iconBackground,
                    children: (0, i.jsx)(l.StageIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 40,
                        height: 40,
                        className: g.icon
                    })
                })
            }),
            (0, i.jsxs)('div', {
                className: g.headerContainer,
                children: [
                    (0, i.jsx)(l.Heading, {
                        className: g.__invalid_title,
                        variant: 'heading-xl/semibold',
                        children: C.Z.Messages.STAGE_START_PROMPT_TITLE_MODERATOR
                    }),
                    (0, i.jsx)(l.Text, {
                        className: g.subtitle,
                        variant: 'text-sm/normal',
                        children: C.Z.Messages.STAGE_START_PROMPT_SUBTITLE
                    })
                ]
            }),
            T ? null : (0, i.jsx)(u.Z, { channelId: t.id }),
            s
                ? (0, i.jsx)(d.Z, {
                      className: g.eventPrompt,
                      channel: t
                  })
                : null,
            o
                ? (0, i.jsx)(c.Z, {
                      className: g.eventPrompt,
                      guildId: r
                  })
                : null,
            (s || N.length > 0) && (0, i.jsx)('hr', { className: g.separator }),
            s ? (0, i.jsx)(I, { onClick: n }) : null,
            (0, i.jsx)(x, { channel: t })
        ]
    });
}
