n.d(t, {
    Z: function () {
        return N;
    }
}), n(47120);
var i = n(735250), a = n(470079), l = n(399606), s = n(481060), r = n(100527), o = n(906732), c = n(592125), d = n(810090), u = n(566620), g = n(146936), p = n(678173), v = n(636508), m = n(696068), x = n(361213), I = n(952561), f = n(778569), _ = n(182906), h = n(513202), T = n(412019), C = n(431136), E = n(226799), S = n(689938), j = n(123849);
function N(e) {
    var t;
    let {
            applicationId: n,
            guildId: g,
            channelId: v,
            onActivityLaunch: m
        } = e, {analyticsLocations: I} = (0, o.ZP)(r.Z.ACTIVITY_SHELF_ACTIVITY_DETAILS);
    a.useEffect(() => {
        (0, u.w1)({ guildId: g });
    }, [g]);
    let _ = (0, f.Z)({
            applicationId: null != n ? n : '',
            size: 2048
        }), h = (0, l.e7)([c.Z], () => c.Z.getChannel(v)), T = (0, p.T)(null != g ? g : null, n, h);
    if (null == T)
        return null;
    let C = null != T.activity.activity_preview_video_asset_id ? (0, x.Z)(n, T.activity.activity_preview_video_asset_id) : null, N = E.o[n], A = (null == N ? void 0 : N.playersSuggestionMin) != null && (null == N ? void 0 : N.playersSuggestionMax) != null ? ''.concat(N.playersSuggestionMin, ' - ').concat(N.playersSuggestionMax) : void 0;
    return (0, i.jsx)(o.Gt, {
        value: I,
        children: (0, i.jsx)('div', {
            className: j.scrollContainer,
            children: (0, i.jsxs)(s.Scroller, {
                className: j.scroller,
                children: [
                    (0, i.jsx)('div', {
                        className: j.launcherOuterContainer,
                        children: (0, i.jsx)(b, {
                            activityItem: T,
                            onLaunch: m,
                            channelId: v
                        })
                    }),
                    (0, i.jsxs)('div', {
                        className: j.activityDetailsContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                children: [
                                    null != C ? (0, i.jsx)('div', {
                                        className: j.heroVideoContainer,
                                        children: (0, i.jsx)(d.Z, {
                                            loop: !0,
                                            autoPlay: !0,
                                            muted: !0,
                                            className: j.heroVideo,
                                            src: C,
                                            poster: _.url
                                        })
                                    }) : null,
                                    (0, i.jsx)('div', {
                                        className: j.detailsTitle,
                                        children: (0, i.jsx)(s.Heading, {
                                            variant: 'heading-xxl/bold',
                                            children: T.application.name
                                        })
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: j.detailsDetails,
                                        children: [
                                            null != A ? (0, i.jsxs)('div', {
                                                className: j.detailItem,
                                                children: [
                                                    (0, i.jsx)(s.GroupIcon, {
                                                        size: 'xs',
                                                        color: 'currentColor'
                                                    }),
                                                    (0, i.jsx)(s.Text, {
                                                        variant: 'text-xs/semibold',
                                                        className: j.detailItemText,
                                                        children: S.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_PLAYERS.format({ nPlayers: A })
                                                    })
                                                ]
                                            }) : null,
                                            (null == N ? void 0 : N.timeSuggestionMinutes) != null ? (0, i.jsxs)('div', {
                                                className: j.detailItem,
                                                children: [
                                                    (0, i.jsx)(s.HourglassIcon, {
                                                        size: 'xs',
                                                        color: 'currentColor'
                                                    }),
                                                    (0, i.jsx)(s.Text, {
                                                        variant: 'text-xs/semibold',
                                                        className: j.detailItemText,
                                                        children: S.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_MINUTES.format({ nMinutes: N.timeSuggestionMinutes })
                                                    })
                                                ]
                                            }) : null,
                                            (0, i.jsxs)('div', {
                                                className: j.detailItem,
                                                children: [
                                                    (0, i.jsx)(s.TagsIcon, {
                                                        size: 'xs',
                                                        color: 'currentColor'
                                                    }),
                                                    (0, i.jsx)(s.Text, {
                                                        variant: 'text-xs/semibold',
                                                        className: j.detailItemText,
                                                        children: T.application.tags.slice(0, 3).join(', ')
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsx)(s.Heading, {
                                variant: 'heading-lg/medium',
                                className: j.detailsDescription,
                                children: T.application.description
                            }),
                            (0, i.jsx)('div', { className: j.divider }),
                            (0, i.jsx)('div', {
                                className: j.imagesContainer,
                                children: (null !== (t = null == N ? void 0 : N.gameplayImageUrls) && void 0 !== t ? t : []).map(e => (0, i.jsx)('img', {
                                    src: e,
                                    alt: S.Z.Messages.EMBEDDED_ACTIVITIES_GAMEPLAY_ALT.format({ activityName: T.application.name }),
                                    className: j.activityImage
                                }, e))
                            })
                        ]
                    })
                ]
            })
        })
    });
}
function b(e) {
    var t, r;
    let {
            activityItem: d,
            onLaunch: u,
            channelId: p
        } = e, x = (0, f.Z)({
            applicationId: d.application.id,
            size: 2048
        }), {analyticsLocations: E} = (0, o.ZP)(), N = (0, I.Z)(), [b, A] = a.useState(null !== (t = (0, v.$)({ allowGdmActivityChannelSuggestion: !0 })) && void 0 !== t ? t : void 0), [M, Z] = a.useState(null !== (r = (0, m.d)({
            guildId: b,
            allowGdmActivityChannelSuggestion: !0
        })) && void 0 !== r ? r : void 0), y = (0, l.e7)([c.Z], () => c.Z.getChannel(M), [M]), D = (0, v.W)(), L = (0, m.F)(b), O = a.useCallback(() => {
            var e;
            if (null != M)
                (0, g.Z)({
                    targetApplicationId: null == d ? void 0 : null === (e = d.application) || void 0 === e ? void 0 : e.id,
                    currentEmbeddedApplication: N,
                    channelId: M,
                    guildId: b,
                    embeddedActivitiesManager: h.Z,
                    analyticsLocations: E
                }).then(u);
        }, [
            d,
            E,
            N,
            u,
            M,
            b
        ]), B = a.useCallback(() => {
            (0, s.openModalLazy)(async () => {
                let {default: e} = await Promise.all([
                    n.e('60133'),
                    n.e('28784')
                ]).then(n.bind(n, 827940));
                return t => (0, i.jsx)(e, {
                    activityItem: d,
                    ...t,
                    analyticsLocations: E
                });
            });
        }, [
            d,
            E
        ]), V = null == y || null != y.guild_id && !(null != b && null != M && D.some(e => e.value === b) && L.some(e => e.value.channel.id === M)) && !0;
    return (0, i.jsxs)('div', {
        className: j.launcherInnerContainer,
        children: [
            (0, i.jsx)(_.Z, {
                applicationName: d.application.name,
                imageBackground: x,
                imageClassName: j.launchImage,
                imageNotFoundClassName: j.brokenLaunchImage
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-md/medium',
                children: S.Z.Messages.EMBEDDED_ACTIVITIES_START_OR_SHARE
            }),
            null == p ? (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(s.Select, {
                        placeholder: S.Z.Messages.GUILD_SELECT,
                        optionClassName: j.__invalid_option,
                        options: D,
                        renderOptionValue: e => {
                            let t = e.find(e => e.value === b);
                            return null == t ? null : (0, i.jsx)(C.m, { guildId: t.value });
                        },
                        renderOptionLabel: e => {
                            let {value: t} = e;
                            return (0, i.jsx)(C.m, { guildId: t });
                        },
                        isSelected: e => e === b,
                        select: e => {
                            var t;
                            A(e), Z(null !== (t = (0, m.d)({ guildId: e })) && void 0 !== t ? t : void 0);
                        },
                        serialize: e => e
                    }),
                    (0, i.jsx)(s.Select, {
                        placeholder: S.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
                        optionClassName: j.__invalid_option,
                        options: L,
                        isSelected: e => {
                            let {channel: t} = e;
                            return t.id === M;
                        },
                        select: e => {
                            let {channel: t} = e;
                            return Z(t.id);
                        },
                        serialize: e => {
                            let {channel: t} = e;
                            return t.id;
                        },
                        renderOptionValue: () => {
                            let e = L.find(e => e.value.channel.id === M);
                            return null == e ? null : (0, i.jsx)(T.O, {
                                channel: e.value.channel,
                                users: e.value.users
                            });
                        },
                        renderOptionLabel: e => {
                            let {
                                value: {
                                    channel: t,
                                    users: n
                                }
                            } = e;
                            return (0, i.jsx)(T.O, {
                                channel: t,
                                users: n
                            });
                        }
                    }),
                    (0, i.jsx)(s.Button, {
                        fullWidth: !0,
                        disabled: V,
                        onClick: O,
                        children: S.Z.Messages.START
                    }),
                    (0, i.jsx)('div', { className: j.divider }),
                    (0, i.jsx)(s.Button, {
                        fullWidth: !0,
                        color: s.Button.Colors.PRIMARY,
                        onClick: B,
                        children: S.Z.Messages.SHARE
                    })
                ]
            }) : (0, i.jsxs)('div', {
                className: j.singleRowShareContainer,
                children: [
                    (0, i.jsx)(s.Button, {
                        fullWidth: !0,
                        disabled: V,
                        onClick: O,
                        children: S.Z.Messages.START
                    }),
                    (0, i.jsx)(s.Button, {
                        className: j.shareIconButton,
                        color: s.Button.Colors.PRIMARY,
                        onClick: B,
                        children: (0, i.jsx)(s.ArrowAngleLeftUpIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    })
                ]
            })
        ]
    });
}
