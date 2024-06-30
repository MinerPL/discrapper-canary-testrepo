n.d(t, {
    V: function () {
        return f;
    },
    _: function () {
        return s;
    }
});
var i, s, a = n(735250), r = n(470079), l = n(442837), o = n(481060), c = n(40851), d = n(566620), u = n(403404), _ = n(100527), E = n(906732), h = n(592125), I = n(810090), m = n(626135), p = n(981631), g = n(921944), T = n(689938), S = n(372064);
(i = s || (s = {})).BOOSTING = 'BOOSTING', i.NITRO = 'NITRO', i.BASH_OUT = 'BASH_OUT', i.GAME_NIGHT = 'GAME_NIGHT';
let C = 'https://cdn.discordapp.com/attachments/860252504826445825/1029516100356018217/Activities_NUX_GL_1.mp4', N = 'https://cdn.discordapp.com/attachments/887469171804356628/916446867586416660/activities-video-poster-512.png', f = e => {
        let {
                channelId: t,
                markAsDismissed: n,
                tutorialType: i
            } = e, {
                analyticsLocation: s,
                analyticsType: f,
                ctaText: A,
                dismissText: Z,
                description: L,
                learnMore: v,
                title: O,
                videoPosterUrl: R,
                videoUrl: x,
                ctaOnClick: P
            } = function (e) {
                switch (e) {
                case 'BOOSTING':
                    return {
                        analyticsLocation: _.Z.ACTIVITY_COACH_MARK_BOOSTING,
                        analyticsType: 'embedded_activity_discovery_tutorial',
                        description: T.Z.Messages.EMBEDDED_ACTIVITY_NOTICE_WTP_DESCRIPTION,
                        learnMore: !0,
                        title: T.Z.Messages.EMBEDDED_ACTIVITY_NOTICE_TITLE,
                        videoPosterUrl: N,
                        videoUrl: C,
                        ctaText: T.Z.Messages.EMBEDDED_ACTIVITIES_TRY_IT_OUT,
                        dismissText: T.Z.Messages.DISMISS
                    };
                case 'NITRO':
                    return {
                        analyticsLocation: _.Z.ACTIVITY_COACH_MARK_NITRO,
                        analyticsType: 'embedded_activity_nitro_discovery_tutorial',
                        description: T.Z.Messages.EMBEDDED_ACTIVITY_NOTICE_NITRO_DESCRIPTION,
                        learnMore: !0,
                        title: T.Z.Messages.EMBEDDED_ACTIVITY_NOTICE_NITRO_TITLE,
                        videoPosterUrl: N,
                        videoUrl: C,
                        ctaText: T.Z.Messages.EMBEDDED_ACTIVITIES_TRY_IT_OUT,
                        dismissText: T.Z.Messages.DISMISS
                    };
                case 'BASH_OUT':
                    return {
                        analyticsLocation: _.Z.ACTIVITY_COACH_MARK_BASH_OUT,
                        analyticsType: 'embedded_activity_bash_out_tutorial',
                        description: T.Z.Messages.EMBEDDED_ACTIVITY_NOTICE_BASH_OUT_DESCRIPTION,
                        learnMore: !1,
                        title: T.Z.Messages.EMBEDDED_ACTIVITIES_AVAILABLE_NOW,
                        videoPosterUrl: 'https://cdn.discordapp.com/attachments/860252504826445825/1037963592227635230/bash_out.jpg',
                        videoUrl: 'https://cdn.discordapp.com/attachments/860252504826445825/1037967755955146762/bash_out.mp4',
                        ctaText: T.Z.Messages.PLAY,
                        dismissText: T.Z.Messages.DISMISS
                    };
                case 'GAME_NIGHT':
                    return {
                        analyticsLocation: _.Z.ACTIVITIES_COACH_MARK_GAME_NIGHT,
                        analyticsType: 'embedded_activity_game_night_tutorial',
                        description: T.Z.Messages.EMBEDDED_ACTIVITIES_GAME_NIGHT_BODY,
                        learnMore: !1,
                        title: T.Z.Messages.EMBEDDED_ACTIVITIES_GAME_NIGHT_HEADING,
                        videoPosterUrl: 'https://cdn.discordapp.com/attachments/860252504826445825/1093287297950175272/game_night_desktop.jpg',
                        videoUrl: 'https://cdn.discordapp.com/attachments/860252504826445825/1093286971708813382/game_night_desktop.mp4',
                        ctaText: T.Z.Messages.PLAY_NOW,
                        dismissText: T.Z.Messages.MAYBE_LATER
                    };
                default:
                    return {
                        analyticsLocation: _.Z.ACTIVITY_COACH_MARK_NITRO,
                        analyticsType: '',
                        description: '',
                        learnMore: !1,
                        title: '',
                        videoPosterUrl: '',
                        videoUrl: '',
                        ctaText: '',
                        dismissText: ''
                    };
                }
            }(i), {analyticsLocations: b} = (0, E.ZP)(s);
        r.useEffect(() => {
            m.default.track(p.rMx.TOOLTIP_VIEWED, { type: f });
        }, [f]);
        let M = (0, c.bp)() === p.IlC.POPOUT, D = (0, l.e7)([h.Z], () => h.Z.getChannel(t), [t]);
        return (0, a.jsx)(E.Gt, {
            value: b,
            children: (0, a.jsx)('div', {
                className: S.wrapper,
                children: (0, a.jsx)('div', {
                    className: S.container,
                    children: (0, a.jsxs)('div', {
                        className: S.content,
                        children: [
                            (0, a.jsx)(I.Z, {
                                className: S.video,
                                src: x,
                                poster: R,
                                width: 224,
                                height: 126,
                                loop: !0,
                                muted: !0,
                                autoPlay: !0
                            }),
                            (0, a.jsx)('div', {
                                className: S.header,
                                children: (0, a.jsx)(o.Heading, {
                                    className: S.__invalid_headerText,
                                    variant: 'text-sm/bold',
                                    color: 'always-white',
                                    children: O
                                })
                            }),
                            (0, a.jsxs)(o.Text, {
                                className: S.subheaderText,
                                variant: 'text-xs/normal',
                                color: 'always-white',
                                children: [
                                    L,
                                    v ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            ' ',
                                            (0, a.jsx)(o.Anchor, {
                                                className: S.learnMoreLink,
                                                href: 'https://support.discord.com/hc/articles/4422142836759',
                                                children: T.Z.Messages.LEARN_MORE
                                            })
                                        ]
                                    }) : null
                                ]
                            }),
                            (0, a.jsxs)('div', {
                                className: S.ctaActionWrapper,
                                children: [
                                    (0, a.jsx)(o.Button, {
                                        color: o.Button.Colors.BRAND,
                                        onClick: () => {
                                            n(g.L.UNKNOWN);
                                        },
                                        children: Z
                                    }),
                                    (0, a.jsx)(o.Button, {
                                        color: o.Button.Colors.BRAND_INVERTED,
                                        onClick: null != P ? P : () => {
                                            if (n(g.L.UNKNOWN), null != D)
                                                (0, u.Z)({
                                                    channel: D.isGuildVoice() ? D : void 0,
                                                    guildId: D.guild_id,
                                                    locationObject: {
                                                        page: p.ZY5.GUILD_CHANNEL,
                                                        section: p.jXE.GUILD_CHANNEL_LIST,
                                                        object: p.qAy.ACTIVITIES_COACH_MARK,
                                                        objectType: p.Qqv.ACTIVITY
                                                    },
                                                    openInPopout: M,
                                                    analyticsLocations: b,
                                                    opensAppLauncherModal: !0
                                                }), (0, d.w1)({ guildId: D.guild_id });
                                        },
                                        children: A
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        });
    };
