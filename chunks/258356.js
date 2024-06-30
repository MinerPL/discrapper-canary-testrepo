n.d(t, {
    X: function () {
        return E;
    },
    Z: function () {
        return g;
    }
});
var s = n(735250);
n(470079);
var r = n(481060), i = n(742593), a = n(390072), l = n(601964), o = n(940627), c = n(346656), u = n(230224), d = n(689938), h = n(369912);
function _(e) {
    var t;
    let {
        guildScheduledEvent: n,
        channel: l,
        onAcceptInvite: o,
        isSubmitting: c
    } = e;
    return (0, s.jsxs)('div', {
        className: h.guildEventCard,
        children: [
            (0, s.jsx)(i.ZP, {
                name: n.name,
                description: null !== (t = n.description) && void 0 !== t ? t : void 0,
                headerVariant: 'heading-md/medium',
                descriptionClassName: h.__invalid_channelDescription,
                guildId: n.guild_id,
                guildEvent: n,
                eventPreview: n
            }),
            null != l && (0, s.jsx)('div', {
                className: h.channelInfo,
                children: (0, s.jsx)(a.Z, {
                    guildScheduledEvent: n,
                    channel: l
                })
            }),
            (0, s.jsx)(r.Button, {
                className: h.acceptButton,
                color: r.Button.Colors.GREEN,
                onClick: o,
                submitting: c,
                children: d.Z.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON
            })
        ]
    });
}
function E(e) {
    var t;
    let {invite: n} = e, i = null != n.guild ? new l.ZP(n.guild) : null;
    if (null == i)
        return null;
    let a = null !== (t = i.description) && void 0 !== t ? t : '';
    return (0, s.jsxs)('div', {
        className: h.guildInfoCard,
        children: [
            (0, s.jsx)(r.Heading, {
                className: h.presentedBy,
                variant: 'text-sm/medium',
                children: d.Z.Messages.STAGE_INVITE_GUILD_HEADER
            }),
            (0, s.jsxs)('div', {
                className: h.guildContainer,
                children: [
                    (0, s.jsx)(c.Z, {
                        guild: i,
                        active: !0,
                        size: c.Z.Sizes.MEDIUM
                    }),
                    (0, s.jsxs)('div', {
                        className: h.guildDetailsContanier,
                        children: [
                            (0, s.jsxs)(r.Text, {
                                className: h.guildName,
                                color: 'header-primary',
                                variant: 'text-sm/medium',
                                tag: 'span',
                                children: [
                                    i.name,
                                    (0, s.jsx)(o.Z, {
                                        guild: i,
                                        className: h.guildBadge,
                                        tooltipPosition: 'left'
                                    })
                                ]
                            }),
                            (0, s.jsx)(u.V6, {
                                invite: n,
                                textClassName: h.guildInfoMemberCountText,
                                className: h.guildInfoMemberCount
                            })
                        ]
                    })
                ]
            }),
            a.length > 0 && (0, s.jsx)('details', {
                className: h.guildDescriptionContainer,
                children: (0, s.jsx)(r.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    children: a
                })
            })
        ]
    });
}
function g(e) {
    let {
            invite: t,
            channel: n,
            isSubmitting: r,
            onAcceptInvite: i
        } = e, {guild_scheduled_event: a} = t;
    return null != a ? (0, s.jsx)(_, {
        guildScheduledEvent: a,
        channel: n,
        isSubmitting: r,
        onAcceptInvite: i
    }) : null;
}
