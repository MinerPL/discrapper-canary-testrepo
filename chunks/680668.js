n.d(t, {
    Z: function () {
        return h;
    }
}), n(789020);
var i = n(735250);
n(470079);
var a = n(533800), s = n(481060), l = n(358555), r = n(131704), o = n(197409), c = n(630388), d = n(267642), u = n(411198), _ = n(277707), E = n(358595), m = n(981631), I = n(689938), T = n(637091);
function h(e) {
    var t, h;
    let N, f, p, {
            onTransitionToInviteChannel: C,
            onAcceptInstantInvite: g,
            guild: S,
            invite: A,
            author: x,
            currentUserId: O
        } = e, R = O === x.id, {
            channel: M,
            approximate_member_count: v,
            approximate_presence_count: L
        } = A, Z = A.state === m.r2o.ACCEPTING, P = null != M ? (0, r.jD)(M) : null, b = null != S, D = null != P, j = null != P && P.isGuildVocal(), U = null != P && P.isGuildStageVoice(), y = (0, c.yE)(null !== (t = A.flags) && void 0 !== t ? t : 0, a.$.IS_GUEST_INVITE), B = null !== (h = null == S ? void 0 : S.hasFeature(m.oNc.HUB)) && void 0 !== h && h;
    if (null == S) {
        if (null == A.guild)
            return (0, i.jsx)(E.Z, {});
        S = u.Qs(A.guild);
        let e = (0, d.rF)(A.guild.premium_subscription_count, A.guild.id);
        S.premiumTier = e;
    }
    let k = b ? C : g, G = (0, _.e)({
            isVoiceChannel: j,
            isOwnInvite: R,
            isGuest: y,
            isHubGuild: B,
            isStage: U,
            isStream: !1
        });
    return f = (0, i.jsxs)('span', {
        className: T.infoTitle,
        children: [
            (0, i.jsx)(o.Z.GuildName, { guild: S }),
            (0, i.jsx)('span', {
                className: T.infoBadge,
                children: (0, i.jsx)(l.Z, {
                    guild: S,
                    isBannerVisible: !1,
                    disableBoostClick: !0
                })
            })
        ]
    }), y && (p = (0, i.jsx)(s.TooltipContainer, {
        className: T.tooltipContainer,
        text: I.Z.Messages.GUEST_MEMBERSHIP_EXPLANATION,
        children: (0, i.jsx)(s.CircleInformationIcon, {
            size: 'md',
            color: 'currentColor',
            className: T.infoIcon
        })
    })), j ? (f = (0, i.jsx)(o.Z.Channel, { channel: P }), N = (0, i.jsxs)('span', {
        className: T.infoTitle,
        children: [
            I.Z.Messages.INVITE_BUTTON_BODY_IN_GUILD.format({ guildName: S.name }),
            (0, i.jsx)('span', {
                className: T.infoBadge,
                children: (0, i.jsx)(l.Z, {
                    guild: S,
                    isBannerVisible: !1
                })
            })
        ]
    })) : null != v && v >= 5 || null != L && L > 0 ? N = (0, i.jsx)(o.Z.Data, {
        members: v,
        membersOnline: L
    }) : D && (N = (0, i.jsx)(o.Z.Channel, {
        channel: P,
        guild: S
    })), (0, i.jsxs)(o.Z, {
        children: [
            (0, i.jsx)(o.Z.GuildSplash, { guild: S }),
            (0, i.jsx)(o.Z.Header, {
                text: G,
                extra: p
            }),
            (0, i.jsxs)(o.Z.Body, {
                children: [
                    (0, i.jsxs)('div', {
                        className: T.headerLine,
                        children: [
                            (0, i.jsx)(o.Z.Icon, { guild: S }),
                            (0, i.jsx)(o.Z.Info, {
                                title: f,
                                onClick: b ? k : null,
                                children: N
                            })
                        ]
                    }),
                    (0, i.jsx)(o.Z.Button, {
                        onClick: k,
                        submitting: Z,
                        color: o.Z.Button.Colors.GREEN,
                        children: j ? U ? I.Z.Messages.STAGE_CHANNEL_JOIN : I.Z.Messages.INVITE_VOICE_CHANNEL_JOIN : b ? I.Z.Messages.JOINED_GUILD : I.Z.Messages.JOIN_GUILD
                    })
                ]
            }),
            S.hasFeature(m.oNc.HUB) && (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('div', { className: T.separator }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: I.Z.Messages.HUB_INVITE_ANOTHER_SCHOOL_LINK.format({
                            onClick: () => (0, s.openModalLazy)(async () => {
                                let {default: e} = await Promise.all([
                                    n.e('95468'),
                                    n.e('80823')
                                ]).then(n.bind(n, 650233));
                                return t => (0, i.jsx)(e, { ...t });
                            })
                        })
                    })
                ]
            })
        ]
    });
}
