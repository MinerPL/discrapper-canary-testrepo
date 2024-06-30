n.d(t, {
    Z: function () {
        return T;
    }
});
var i = n(735250);
n(470079);
var a = n(442837), l = n(692547), s = n(481060), r = n(688641), o = n(596449), c = n(459502), u = n(856691), d = n(889161), h = n(496675), p = n(602623), m = n(146085), _ = n(979339), f = n(643632), E = n(939863), C = n(689938), g = n(998877);
function I(e) {
    let {onClick: t} = e;
    return (0, i.jsx)(r.Z, {
        iconContainerClassName: g.continueIconContainer,
        icon: (0, i.jsx)(s.StageIcon, {
            size: 'custom',
            color: 'currentColor',
            className: g.continueIcon,
            height: 20,
            width: 20
        }),
        color: l.Z.unsafe_rawColors.PRIMARY_700.css,
        title: C.Z.Messages.STAGE_CONTINUE_PROMPT_TITLE,
        description: C.Z.Messages.STAGE_CONTINUE_PROMPT_SUBTITLE,
        onClick: t
    });
}
function x(e) {
    let {channel: t} = e, {
            participants: n,
            usersInSummary: a
        } = (0, _.Z)(t.id);
    return (0, i.jsxs)('div', {
        className: g.audienceSummary,
        children: [
            (0, i.jsx)(p.Z, {
                className: g.summaryItem,
                guildId: t.guild_id,
                users: a,
                size: p.u.SIZE_16
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: function (e) {
                    if (0 === e.length)
                        return '';
                    if (1 === e.length)
                        return C.Z.Messages.STAGE_AUDIENCE_WAITING_ONE.format({ first: e[0].userNick });
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
                }(n)
            })
        ]
    });
}
function T(e) {
    let {
            channel: t,
            onContinueClick: n
        } = e, l = (0, a.e7)([h.Z], () => h.Z.can(m.yP, t), [t]), r = t.guild_id, {canCreateGuildEvent: p} = (0, d.XJ)(t), T = (0, f.Z)(t.id), {usersInSummary: N} = (0, _.Z)(t.id);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(E.Z, {
                children: (0, i.jsx)('div', {
                    className: g.iconBackground,
                    children: (0, i.jsx)(s.StageIcon, {
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
                    (0, i.jsx)(s.Heading, {
                        className: g.__invalid_title,
                        variant: 'heading-xl/semibold',
                        children: C.Z.Messages.STAGE_START_PROMPT_TITLE_MODERATOR
                    }),
                    (0, i.jsx)(s.Text, {
                        className: g.subtitle,
                        variant: 'text-sm/normal',
                        children: C.Z.Messages.STAGE_START_PROMPT_SUBTITLE
                    })
                ]
            }),
            T ? null : (0, i.jsx)(c.Z, { channelId: t.id }),
            l ? (0, i.jsx)(u.Z, {
                className: g.eventPrompt,
                channel: t
            }) : null,
            p ? (0, i.jsx)(o.Z, {
                className: g.eventPrompt,
                guildId: r
            }) : null,
            (l || N.length > 0) && (0, i.jsx)('hr', { className: g.separator }),
            l ? (0, i.jsx)(I, { onClick: n }) : null,
            (0, i.jsx)(x, { channel: t })
        ]
    });
}
