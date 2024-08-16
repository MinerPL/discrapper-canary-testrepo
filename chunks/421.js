n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var a = n(735250),
    i = n(470079),
    l = n(399606),
    s = n(481060),
    r = n(100527),
    o = n(906732),
    c = n(70097),
    d = n(592125),
    u = n(566620),
    g = n(122613),
    v = n(678173),
    m = n(636508),
    p = n(696068),
    f = n(361213),
    I = n(778569),
    x = n(182906),
    _ = n(412019),
    h = n(431136),
    C = n(226799),
    T = n(689938),
    E = n(806384);
function S(e) {
    var t;
    let { applicationId: n, guildId: l, channelId: d, onActivityLaunch: g } = e,
        { analyticsLocations: m } = (0, o.ZP)(r.Z.ACTIVITY_SHELF_ACTIVITY_DETAILS);
    i.useEffect(() => {
        (0, u.w1)({ guildId: l });
    }, [l]);
    let p = (0, I.Z)({
            applicationId: null != n ? n : '',
            size: 2048
        }),
        x = (0, v.T)(null != l ? l : null, n);
    if (null == x) return null;
    let _ = null != x.activity.activity_preview_video_asset_id ? (0, f.Z)(n, x.activity.activity_preview_video_asset_id) : null,
        h = C.o[n],
        S = (null == h ? void 0 : h.playersSuggestionMin) != null && (null == h ? void 0 : h.playersSuggestionMax) != null ? ''.concat(h.playersSuggestionMin, ' - ').concat(h.playersSuggestionMax) : void 0;
    return (0, a.jsx)(o.Gt, {
        value: m,
        children: (0, a.jsx)('div', {
            className: E.scrollContainer,
            children: (0, a.jsxs)(s.Scroller, {
                className: E.scroller,
                children: [
                    (0, a.jsx)('div', {
                        className: E.launcherOuterContainer,
                        children: (0, a.jsx)(b, {
                            activityItem: x,
                            onLaunch: g,
                            channelId: d
                        })
                    }),
                    (0, a.jsxs)('div', {
                        className: E.activityDetailsContainer,
                        children: [
                            (0, a.jsxs)('div', {
                                children: [
                                    null != _
                                        ? (0, a.jsx)('div', {
                                              className: E.heroVideoContainer,
                                              children: (0, a.jsx)(c.Z, {
                                                  loop: !0,
                                                  autoPlay: !0,
                                                  muted: !0,
                                                  className: E.heroVideo,
                                                  src: _,
                                                  poster: p.url
                                              })
                                          })
                                        : null,
                                    (0, a.jsx)('div', {
                                        className: E.detailsTitle,
                                        children: (0, a.jsx)(s.Heading, {
                                            variant: 'heading-xxl/bold',
                                            children: x.application.name
                                        })
                                    }),
                                    (0, a.jsxs)('div', {
                                        className: E.detailsDetails,
                                        children: [
                                            null != S
                                                ? (0, a.jsxs)('div', {
                                                      className: E.detailItem,
                                                      children: [
                                                          (0, a.jsx)(s.GroupIcon, {
                                                              size: 'xs',
                                                              color: 'currentColor'
                                                          }),
                                                          (0, a.jsx)(s.Text, {
                                                              variant: 'text-xs/semibold',
                                                              className: E.detailItemText,
                                                              children: T.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_PLAYERS.format({ nPlayers: S })
                                                          })
                                                      ]
                                                  })
                                                : null,
                                            (null == h ? void 0 : h.timeSuggestionMinutes) != null
                                                ? (0, a.jsxs)('div', {
                                                      className: E.detailItem,
                                                      children: [
                                                          (0, a.jsx)(s.HourglassIcon, {
                                                              size: 'xs',
                                                              color: 'currentColor'
                                                          }),
                                                          (0, a.jsx)(s.Text, {
                                                              variant: 'text-xs/semibold',
                                                              className: E.detailItemText,
                                                              children: T.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_MINUTES.format({ nMinutes: h.timeSuggestionMinutes })
                                                          })
                                                      ]
                                                  })
                                                : null,
                                            (0, a.jsxs)('div', {
                                                className: E.detailItem,
                                                children: [
                                                    (0, a.jsx)(s.TagsIcon, {
                                                        size: 'xs',
                                                        color: 'currentColor'
                                                    }),
                                                    (0, a.jsx)(s.Text, {
                                                        variant: 'text-xs/semibold',
                                                        className: E.detailItemText,
                                                        children: x.application.tags.slice(0, 3).join(', ')
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, a.jsx)(s.Heading, {
                                variant: 'heading-lg/medium',
                                className: E.detailsDescription,
                                children: x.application.description
                            }),
                            (0, a.jsx)('div', { className: E.divider }),
                            (0, a.jsx)('div', {
                                className: E.imagesContainer,
                                children: (null !== (t = null == h ? void 0 : h.gameplayImageUrls) && void 0 !== t ? t : []).map((e) =>
                                    (0, a.jsx)(
                                        'img',
                                        {
                                            src: e,
                                            alt: T.Z.Messages.EMBEDDED_ACTIVITIES_GAMEPLAY_ALT.format({ activityName: x.application.name }),
                                            className: E.activityImage
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
function b(e) {
    var t, r;
    let { activityItem: c, onLaunch: u, channelId: v } = e,
        f = (0, I.Z)({
            applicationId: c.application.id,
            size: 2048
        }),
        { analyticsLocations: C } = (0, o.ZP)(),
        [S, b] = i.useState(null !== (t = (0, m.$)({ allowGdmActivityChannelSuggestion: !0 })) && void 0 !== t ? t : void 0),
        [N, j] = i.useState(
            null !==
                (r = (0, p.d)({
                    guildId: S,
                    allowGdmActivityChannelSuggestion: !0
                })) && void 0 !== r
                ? r
                : void 0
        ),
        M = (0, l.e7)([d.Z], () => d.Z.getChannel(N), [N]),
        A = (0, m.W)(),
        Z = (0, p.F)(S),
        y = i.useCallback(async () => {
            var e;
            if (null != N)
                await (0, g.Z)({
                    targetApplicationId: null == c ? void 0 : null === (e = c.application) || void 0 === e ? void 0 : e.id,
                    channelId: N,
                    analyticsLocations: C
                }).then(u);
        }, [c, C, u, N]),
        D = i.useCallback(() => {
            (0, s.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('60133'), n.e('61755')]).then(n.bind(n, 827940));
                return (t) =>
                    (0, a.jsx)(e, {
                        activityItem: c,
                        ...t,
                        analyticsLocations: C
                    });
            });
        }, [c, C]),
        L = null == M || (null != M.guild_id && !(null != S && null != N && A.some((e) => e.value === S) && Z.some((e) => e.value.channel.id === N)) && !0);
    return (0, a.jsxs)('div', {
        className: E.launcherInnerContainer,
        children: [
            (0, a.jsx)(x.Z, {
                applicationName: c.application.name,
                imageBackground: f,
                imageClassName: E.launchImage,
                imageNotFoundClassName: E.brokenLaunchImage
            }),
            (0, a.jsx)(s.Text, {
                variant: 'text-md/medium',
                children: T.Z.Messages.EMBEDDED_ACTIVITIES_START_OR_SHARE
            }),
            null == v
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(s.Select, {
                              placeholder: T.Z.Messages.GUILD_SELECT,
                              optionClassName: E.__invalid_option,
                              options: A,
                              renderOptionValue: (e) => {
                                  let t = e.find((e) => e.value === S);
                                  return null == t ? null : (0, a.jsx)(h.m, { guildId: t.value });
                              },
                              renderOptionLabel: (e) => {
                                  let { value: t } = e;
                                  return (0, a.jsx)(h.m, { guildId: t });
                              },
                              isSelected: (e) => e === S,
                              select: (e) => {
                                  var t;
                                  b(e), j(null !== (t = (0, p.d)({ guildId: e })) && void 0 !== t ? t : void 0);
                              },
                              serialize: (e) => e
                          }),
                          (0, a.jsx)(s.Select, {
                              placeholder: T.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
                              optionClassName: E.__invalid_option,
                              options: Z,
                              isSelected: (e) => {
                                  let { channel: t } = e;
                                  return t.id === N;
                              },
                              select: (e) => {
                                  let { channel: t } = e;
                                  return j(t.id);
                              },
                              serialize: (e) => {
                                  let { channel: t } = e;
                                  return t.id;
                              },
                              renderOptionValue: () => {
                                  let e = Z.find((e) => e.value.channel.id === N);
                                  return null == e
                                      ? null
                                      : (0, a.jsx)(_.O, {
                                            channel: e.value.channel,
                                            users: e.value.users
                                        });
                              },
                              renderOptionLabel: (e) => {
                                  let {
                                      value: { channel: t, users: n }
                                  } = e;
                                  return (0, a.jsx)(_.O, {
                                      channel: t,
                                      users: n
                                  });
                              }
                          }),
                          (0, a.jsx)(s.Button, {
                              fullWidth: !0,
                              disabled: L,
                              onClick: y,
                              children: T.Z.Messages.START
                          }),
                          (0, a.jsx)('div', { className: E.divider }),
                          (0, a.jsx)(s.Button, {
                              fullWidth: !0,
                              color: s.Button.Colors.PRIMARY,
                              onClick: D,
                              children: T.Z.Messages.SHARE
                          })
                      ]
                  })
                : (0, a.jsxs)('div', {
                      className: E.singleRowShareContainer,
                      children: [
                          (0, a.jsx)(s.Button, {
                              fullWidth: !0,
                              disabled: L,
                              onClick: y,
                              children: T.Z.Messages.START
                          }),
                          (0, a.jsx)(s.Button, {
                              className: E.shareIconButton,
                              color: s.Button.Colors.PRIMARY,
                              onClick: D,
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
