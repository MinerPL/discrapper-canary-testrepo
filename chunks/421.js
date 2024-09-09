n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120);
var a = n(735250),
    i = n(470079),
    l = n(399606),
    s = n(481060),
    o = n(100527),
    r = n(906732),
    c = n(895924),
    d = n(70097),
    u = n(592125),
    g = n(566620),
    m = n(122613),
    v = n(678173),
    p = n(636508),
    I = n(696068),
    x = n(361213),
    f = n(778569),
    _ = n(182906),
    T = n(412019),
    h = n(431136),
    C = n(226799),
    E = n(689938),
    S = n(806384);
function N(e) {
    var t;
    let { applicationId: n, guildId: l, channelId: c, onActivityLaunch: u } = e,
        { analyticsLocations: m } = (0, r.ZP)(o.Z.ACTIVITY_SHELF_ACTIVITY_DETAILS);
    i.useEffect(() => {
        (0, g.w1)({ guildId: l });
    }, [l]);
    let p = (0, f.Z)({
            applicationId: null != n ? n : '',
            size: 2048
        }),
        I = (0, v.T)(null != l ? l : null, n);
    if (null == I) return null;
    let _ = null != I.activity.activity_preview_video_asset_id ? (0, x.Z)(n, I.activity.activity_preview_video_asset_id) : null,
        T = C.o[n],
        h = (null == T ? void 0 : T.playersSuggestionMin) != null && (null == T ? void 0 : T.playersSuggestionMax) != null ? ''.concat(T.playersSuggestionMin, ' - ').concat(T.playersSuggestionMax) : void 0;
    return (0, a.jsx)(r.Gt, {
        value: m,
        children: (0, a.jsx)('div', {
            className: S.scrollContainer,
            children: (0, a.jsxs)(s.Scroller, {
                className: S.scroller,
                children: [
                    (0, a.jsx)('div', {
                        className: S.launcherOuterContainer,
                        children: (0, a.jsx)(j, {
                            activityItem: I,
                            onLaunch: u,
                            channelId: c
                        })
                    }),
                    (0, a.jsxs)('div', {
                        className: S.activityDetailsContainer,
                        children: [
                            (0, a.jsxs)('div', {
                                children: [
                                    null != _
                                        ? (0, a.jsx)('div', {
                                              className: S.heroVideoContainer,
                                              children: (0, a.jsx)(d.Z, {
                                                  loop: !0,
                                                  autoPlay: !0,
                                                  muted: !0,
                                                  className: S.heroVideo,
                                                  src: _,
                                                  poster: p.url
                                              })
                                          })
                                        : null,
                                    (0, a.jsx)('div', {
                                        className: S.detailsTitle,
                                        children: (0, a.jsx)(s.Heading, {
                                            variant: 'heading-xxl/bold',
                                            children: I.application.name
                                        })
                                    }),
                                    (0, a.jsxs)('div', {
                                        className: S.detailsDetails,
                                        children: [
                                            null != h
                                                ? (0, a.jsxs)('div', {
                                                      className: S.detailItem,
                                                      children: [
                                                          (0, a.jsx)(s.GroupIcon, {
                                                              size: 'xs',
                                                              color: 'currentColor'
                                                          }),
                                                          (0, a.jsx)(s.Text, {
                                                              variant: 'text-xs/semibold',
                                                              className: S.detailItemText,
                                                              children: E.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_PLAYERS.format({ nPlayers: h })
                                                          })
                                                      ]
                                                  })
                                                : null,
                                            (null == T ? void 0 : T.timeSuggestionMinutes) != null
                                                ? (0, a.jsxs)('div', {
                                                      className: S.detailItem,
                                                      children: [
                                                          (0, a.jsx)(s.HourglassIcon, {
                                                              size: 'xs',
                                                              color: 'currentColor'
                                                          }),
                                                          (0, a.jsx)(s.Text, {
                                                              variant: 'text-xs/semibold',
                                                              className: S.detailItemText,
                                                              children: E.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_MINUTES.format({ nMinutes: T.timeSuggestionMinutes })
                                                          })
                                                      ]
                                                  })
                                                : null,
                                            (0, a.jsxs)('div', {
                                                className: S.detailItem,
                                                children: [
                                                    (0, a.jsx)(s.TagsIcon, {
                                                        size: 'xs',
                                                        color: 'currentColor'
                                                    }),
                                                    (0, a.jsx)(s.Text, {
                                                        variant: 'text-xs/semibold',
                                                        className: S.detailItemText,
                                                        children: I.application.tags.slice(0, 3).join(', ')
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, a.jsx)(s.Heading, {
                                variant: 'heading-lg/medium',
                                className: S.detailsDescription,
                                children: I.application.description
                            }),
                            (0, a.jsx)('div', { className: S.divider }),
                            (0, a.jsx)('div', {
                                className: S.imagesContainer,
                                children: (null !== (t = null == T ? void 0 : T.gameplayImageUrls) && void 0 !== t ? t : []).map((e) =>
                                    (0, a.jsx)(
                                        'img',
                                        {
                                            src: e,
                                            alt: E.Z.Messages.EMBEDDED_ACTIVITIES_GAMEPLAY_ALT.format({ activityName: I.application.name }),
                                            className: S.activityImage
                                        },
                                        e
                                    )
                                )
                            })
                        ]
                    })
                ]
            })
        })
    });
}
function j(e) {
    var t, o;
    let { activityItem: d, onLaunch: g, channelId: v } = e,
        x = (0, f.Z)({
            applicationId: d.application.id,
            size: 2048
        }),
        { analyticsLocations: C } = (0, r.ZP)(),
        [N, j] = i.useState(null !== (t = (0, p.$)({ allowGdmActivityChannelSuggestion: !0 })) && void 0 !== t ? t : void 0),
        [b, A] = i.useState(
            null !==
                (o = (0, I.d)({
                    guildId: N,
                    allowGdmActivityChannelSuggestion: !0
                })) && void 0 !== o
                ? o
                : void 0
        ),
        M = (0, l.e7)([u.Z], () => u.Z.getChannel(b), [b]),
        y = (0, p.W)(),
        Z = (0, I.F)(N),
        D = i.useCallback(async () => {
            var e;
            if (null != b)
                await (0, m.Z)({
                    targetApplicationId: null == d ? void 0 : null === (e = d.application) || void 0 === e ? void 0 : e.id,
                    channelId: b,
                    analyticsLocations: C,
                    commandOrigin: c.bB.APPLICATION_LAUNCHER
                }).then(g);
        }, [d, C, g, b]),
        L = i.useCallback(() => {
            (0, s.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('60133'), n.e('79329')]).then(n.bind(n, 827940));
                return (t) =>
                    (0, a.jsx)(e, {
                        activityItem: d,
                        ...t,
                        analyticsLocations: C
                    });
            });
        }, [d, C]),
        O = null == M || (null != M.guild_id && !(null != N && null != b && y.some((e) => e.value === N) && Z.some((e) => e.value.channel.id === b)) && !0);
    return (0, a.jsxs)('div', {
        className: S.launcherInnerContainer,
        children: [
            (0, a.jsx)(_.Z, {
                applicationName: d.application.name,
                imageBackground: x,
                imageClassName: S.launchImage,
                imageNotFoundClassName: S.brokenLaunchImage
            }),
            (0, a.jsx)(s.Text, {
                variant: 'text-md/medium',
                children: E.Z.Messages.EMBEDDED_ACTIVITIES_START_OR_SHARE
            }),
            null == v
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(s.Select, {
                              placeholder: E.Z.Messages.GUILD_SELECT,
                              optionClassName: S.__invalid_option,
                              options: y,
                              renderOptionValue: (e) => {
                                  let t = e.find((e) => e.value === N);
                                  return null == t ? null : (0, a.jsx)(h.m, { guildId: t.value });
                              },
                              renderOptionLabel: (e) => {
                                  let { value: t } = e;
                                  return (0, a.jsx)(h.m, { guildId: t });
                              },
                              isSelected: (e) => e === N,
                              select: (e) => {
                                  var t;
                                  j(e), A(null !== (t = (0, I.d)({ guildId: e })) && void 0 !== t ? t : void 0);
                              },
                              serialize: (e) => e
                          }),
                          (0, a.jsx)(s.Select, {
                              placeholder: E.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
                              optionClassName: S.__invalid_option,
                              options: Z,
                              isSelected: (e) => {
                                  let { channel: t } = e;
                                  return t.id === b;
                              },
                              select: (e) => {
                                  let { channel: t } = e;
                                  return A(t.id);
                              },
                              serialize: (e) => {
                                  let { channel: t } = e;
                                  return t.id;
                              },
                              renderOptionValue: () => {
                                  let e = Z.find((e) => e.value.channel.id === b);
                                  return null == e
                                      ? null
                                      : (0, a.jsx)(T.O, {
                                            channel: e.value.channel,
                                            users: e.value.users
                                        });
                              },
                              renderOptionLabel: (e) => {
                                  let {
                                      value: { channel: t, users: n }
                                  } = e;
                                  return (0, a.jsx)(T.O, {
                                      channel: t,
                                      users: n
                                  });
                              }
                          }),
                          (0, a.jsx)(s.Button, {
                              fullWidth: !0,
                              disabled: O,
                              onClick: D,
                              children: E.Z.Messages.START
                          }),
                          (0, a.jsx)('div', { className: S.divider }),
                          (0, a.jsx)(s.Button, {
                              fullWidth: !0,
                              color: s.Button.Colors.PRIMARY,
                              onClick: L,
                              children: E.Z.Messages.SHARE
                          })
                      ]
                  })
                : (0, a.jsxs)('div', {
                      className: S.singleRowShareContainer,
                      children: [
                          (0, a.jsx)(s.Button, {
                              fullWidth: !0,
                              disabled: O,
                              onClick: D,
                              children: E.Z.Messages.START
                          }),
                          (0, a.jsx)(s.Button, {
                              className: S.shareIconButton,
                              color: s.Button.Colors.PRIMARY,
                              onClick: L,
                              children: (0, a.jsx)(s.ArrowAngleLeftUpIcon, {
                                  size: 'md',
                                  color: 'currentColor'
                              })
                          })
                      ]
                  })
        ]
    });
}
