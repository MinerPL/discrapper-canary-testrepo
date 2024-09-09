a.r(n),
    a.d(n, {
        default: function () {
            return E;
        }
    }),
    a(47120),
    a(789020);
var t = a(735250),
    s = a(470079),
    i = a(266067),
    l = a(692547),
    r = a(481060),
    o = a(100527),
    c = a(906732),
    u = a(895924),
    d = a(70097),
    g = a(665149),
    m = a(703656),
    p = a(630388),
    x = a(566620),
    v = a(122613),
    f = a(678173),
    I = a(880308),
    b = a(636508),
    h = a(696068),
    j = a(361213),
    S = a(778569),
    _ = a(412019),
    y = a(431136),
    C = a(226799),
    M = a(981631),
    N = a(689938),
    Z = a(776097);
function E(e) {
    var n, a;
    let { match: u } = e,
        v = null !== (n = (0, m.DR)()) && void 0 !== n ? n : [],
        { analyticsLocations: b } = (0, c.ZP)([...v, o.Z.ACTIVITY_DETAIL_PAGE]),
        { applicationId: h } = u.params;
    (0, I.g)(),
        s.useEffect(() => {
            (0, x.w1)({ guildId: null });
        }, []);
    let _ = (0, S.Z)({
            applicationId: null != h ? h : '',
            size: 2048,
            names: ['embedded_cover']
        }),
        y = (0, f.T)(null, null != h && '' !== h ? h : null);
    if (null == h || null == y) return null;
    if (!(0, p.yE)(y.application.flags, M.udG.EMBEDDED)) return (0, t.jsx)(i.l_, { to: M.Z5c.ACTIVITIES });
    let E = null != y.activity.activity_preview_video_asset_id ? (0, j.Z)(h, y.activity.activity_preview_video_asset_id) : null,
        A = C.o[h],
        D = (null == A ? void 0 : A.playersSuggestionMin) != null && (null == A ? void 0 : A.playersSuggestionMax) != null ? ''.concat(A.playersSuggestionMin, ' - ').concat(A.playersSuggestionMax) : void 0;
    return (0, t.jsx)(c.Gt, {
        value: b,
        children: (0, t.jsxs)('div', {
            className: Z.outerContainer,
            children: [
                (0, t.jsxs)(g.ZP, {
                    children: [
                        (0, t.jsxs)('div', {
                            className: Z.titleContainer,
                            children: [
                                (0, t.jsx)(r.ActivitiesIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: Z.rocketIcon
                                }),
                                (0, t.jsx)(r.Heading, {
                                    variant: 'heading-md/semibold',
                                    children: y.application.name
                                })
                            ]
                        }),
                        (0, t.jsx)('div', { className: Z.__invalid_headerBarRightSideFiller })
                    ]
                }),
                (0, t.jsx)(r.Scroller, {
                    className: Z.scroller,
                    children: (0, t.jsxs)('div', {
                        className: Z.innerContainer,
                        children: [
                            (0, t.jsxs)('div', {
                                className: Z.header,
                                children: [
                                    (0, t.jsx)('img', {
                                        src: _.url,
                                        className: Z.headerImage,
                                        alt: y.application.name
                                    }),
                                    (0, t.jsx)('div', { className: Z.headerImageOverlay }),
                                    (0, t.jsxs)(r.Clickable, {
                                        onClick: () => {
                                            (0, m.op)();
                                        },
                                        className: Z.backButtonContainer,
                                        children: [
                                            (0, t.jsx)(r.ChevronSmallLeftIcon, {
                                                size: 'md',
                                                color: l.Z.unsafe_rawColors.WHITE_100,
                                                className: Z.backButtonIcon
                                            }),
                                            (0, t.jsx)(r.Heading, {
                                                color: 'always-white',
                                                variant: 'heading-lg/semibold',
                                                children: N.Z.Messages.BACK
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, t.jsx)('div', {
                                className: Z.detailsOuterContainer,
                                children: (0, t.jsx)('div', {
                                    className: Z.detailsInnerContainer,
                                    children: (0, t.jsxs)('div', {
                                        className: Z.detailsInnerInnerContainer,
                                        children: [
                                            (0, t.jsxs)('div', {
                                                className: Z.activityDetailsContainer,
                                                children: [
                                                    (0, t.jsxs)('div', {
                                                        children: [
                                                            (0, t.jsx)('div', {
                                                                className: Z.detailsTitle,
                                                                children: (0, t.jsx)(r.Heading, {
                                                                    variant: 'heading-xxl/bold',
                                                                    children: y.application.name
                                                                })
                                                            }),
                                                            (0, t.jsxs)('div', {
                                                                className: Z.detailsDetails,
                                                                children: [
                                                                    null != D
                                                                        ? (0, t.jsxs)('div', {
                                                                              className: Z.detailItem,
                                                                              children: [
                                                                                  (0, t.jsx)(r.GroupIcon, {
                                                                                      size: 'xs',
                                                                                      color: 'currentColor'
                                                                                  }),
                                                                                  (0, t.jsx)(r.Text, {
                                                                                      variant: 'text-xs/semibold',
                                                                                      className: Z.detailItemText,
                                                                                      children: N.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_PLAYERS.format({ nPlayers: D })
                                                                                  })
                                                                              ]
                                                                          })
                                                                        : null,
                                                                    (null == A ? void 0 : A.timeSuggestionMinutes) != null
                                                                        ? (0, t.jsxs)('div', {
                                                                              className: Z.detailItem,
                                                                              children: [
                                                                                  (0, t.jsx)(r.HourglassIcon, {
                                                                                      size: 'xs',
                                                                                      color: 'currentColor'
                                                                                  }),
                                                                                  (0, t.jsx)(r.Text, {
                                                                                      variant: 'text-xs/semibold',
                                                                                      className: Z.detailItemText,
                                                                                      children: N.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_MINUTES.format({ nMinutes: A.timeSuggestionMinutes })
                                                                                  })
                                                                              ]
                                                                          })
                                                                        : null,
                                                                    (0, t.jsxs)('div', {
                                                                        className: Z.detailItem,
                                                                        children: [
                                                                            (0, t.jsx)(r.TagsIcon, {
                                                                                size: 'xs',
                                                                                color: 'currentColor'
                                                                            }),
                                                                            (0, t.jsx)(r.Text, {
                                                                                variant: 'text-xs/semibold',
                                                                                className: Z.detailItemText,
                                                                                children: y.application.tags.slice(0, 3).join(', ')
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    (0, t.jsx)(r.Heading, {
                                                        variant: 'heading-lg/medium',
                                                        className: Z.detailsDescription,
                                                        children: y.application.description
                                                    }),
                                                    (0, t.jsx)('div', { className: Z.divider }),
                                                    (0, t.jsxs)('div', {
                                                        className: Z.imagesContainer,
                                                        children: [
                                                            (null !== (a = null == A ? void 0 : A.gameplayImageUrls) && void 0 !== a ? a : []).map((e) =>
                                                                (0, t.jsx)(
                                                                    'img',
                                                                    {
                                                                        src: e,
                                                                        alt: N.Z.Messages.EMBEDDED_ACTIVITIES_GAMEPLAY_ALT.format({ activityName: y.application.name }),
                                                                        className: Z.activityImage
                                                                    },
                                                                    e
                                                                )
                                                            ),
                                                            (0, t.jsx)(d.Z, {
                                                                loop: !0,
                                                                autoPlay: !0,
                                                                muted: !0,
                                                                className: Z.activityImage,
                                                                src: E,
                                                                poster: _.url
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            (0, t.jsx)('div', {
                                                className: Z.launcherOuterContainer,
                                                children: (0, t.jsx)(T, { activityItem: y })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}
function T(e) {
    var n, i;
    let { activityItem: l } = e,
        { analyticsLocations: o } = (0, c.ZP)(),
        [d, g] = s.useState(null !== (n = (0, b.$)()) && void 0 !== n ? n : void 0),
        [m, p] = s.useState(null !== (i = (0, h.d)({ guildId: d })) && void 0 !== i ? i : void 0),
        x = (0, b.W)(),
        f = (0, h.F)(d),
        I = s.useCallback(async () => {
            var e;
            if (null != m && null != d)
                await (0, v.Z)({
                    targetApplicationId: null == l ? void 0 : null === (e = l.application) || void 0 === e ? void 0 : e.id,
                    channelId: m,
                    analyticsLocations: o,
                    commandOrigin: u.bB.ACTIVITY_DETAILS
                });
        }, [l, o, m, d]),
        j = s.useCallback(() => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([a.e('60133'), a.e('45374')]).then(a.bind(a, 827940));
                return (n) =>
                    (0, t.jsx)(e, {
                        activityItem: l,
                        ...n,
                        analyticsLocations: o
                    });
            });
        }, [l, o]);
    return (0, t.jsxs)('div', {
        className: Z.launcherInnerContainer,
        children: [
            (0, t.jsx)(r.Text, {
                variant: 'text-md/medium',
                children: N.Z.Messages.EMBEDDED_ACTIVITIES_START_OR_SHARE
            }),
            (0, t.jsx)(r.Select, {
                placeholder: N.Z.Messages.GUILD_SELECT,
                optionClassName: Z.__invalid_option,
                options: x,
                renderOptionValue: (e) => {
                    let n = e.find((e) => e.value === d);
                    return null == n ? null : (0, t.jsx)(y.m, { guildId: n.value });
                },
                renderOptionLabel: (e) => {
                    let { value: n } = e;
                    return (0, t.jsx)(y.m, { guildId: n });
                },
                isSelected: (e) => e === d,
                select: (e) => {
                    var n;
                    g(e), p(null !== (n = (0, h.d)({ guildId: e })) && void 0 !== n ? n : void 0);
                },
                serialize: (e) => e
            }),
            (0, t.jsx)(r.Select, {
                placeholder: N.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
                optionClassName: Z.__invalid_option,
                options: f,
                isSelected: (e) => {
                    let { channel: n } = e;
                    return n.id === m;
                },
                select: (e) => {
                    let { channel: n } = e;
                    return p(n.id);
                },
                serialize: (e) => {
                    let { channel: n } = e;
                    return n.id;
                },
                renderOptionValue: () => {
                    let e = f.find((e) => e.value.channel.id === m);
                    return null == e
                        ? null
                        : (0, t.jsx)(_.O, {
                              channel: e.value.channel,
                              users: e.value.users
                          });
                },
                renderOptionLabel: (e) => {
                    let {
                        value: { channel: n, users: a }
                    } = e;
                    return (0, t.jsx)(_.O, {
                        channel: n,
                        users: a
                    });
                }
            }),
            (0, t.jsx)(r.Button, {
                fullWidth: !0,
                disabled: null == d || null == m || !x.some((e) => e.value === d) || !f.some((e) => e.value.channel.id === m),
                onClick: I,
                children: N.Z.Messages.START
            }),
            (0, t.jsx)('div', { className: Z.divider }),
            (0, t.jsx)(r.Button, {
                fullWidth: !0,
                color: r.Button.Colors.PRIMARY,
                onClick: j,
                children: N.Z.Messages.SHARE
            })
        ]
    });
}
