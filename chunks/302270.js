n.d(t, {
    Z: function () {
        return B;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(442837),
    o = n(692547),
    c = n(481060),
    u = n(475179),
    d = n(40851),
    h = n(358221),
    m = n(933557),
    p = n(320007),
    _ = n(236091),
    f = n(623624),
    E = n(665149),
    g = n(984370),
    C = n(141321),
    I = n(618158),
    x = n(390322),
    T = n(616286),
    v = n(961048),
    S = n(430824),
    N = n(496675),
    A = n(626135),
    Z = n(431328),
    M = n(501655),
    b = n(200498),
    R = n(146085),
    L = n(427679),
    j = n(592473),
    P = n(831002),
    O = n(903108),
    y = n(981631),
    D = n(474936),
    k = n(689938),
    U = n(985902);
function w(e) {
    let { inPopout: t, channel: n, toggleRequestToSpeakSidebar: a, showRequestToSpeakSidebar: o } = e,
        m = (0, d.bp)(),
        f = (0, r.e7)([h.Z], () => h.Z.getChatOpen(n.id)),
        E = (0, b.B)(n.id),
        g = (0, Z.Rk)(n.id, M.pV.REQUESTED_TO_SPEAK_ONLY),
        { preventIdle: S, allowIdle: N } = (0, I.Y)('popup');
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(_.Z, { channelId: n.id }, 'clips-enabled-indicator'),
            (0, i.jsx)(
                c.Popout,
                {
                    position: 'bottom',
                    animation: c.Popout.Animation.NONE,
                    align: 'right',
                    renderPopout: (e) =>
                        (0, i.jsx)(x.Z, {
                            children: (0, i.jsx)(P.Z, {
                                ...e,
                                channelId: n.id,
                                appContext: m
                            })
                        }),
                    autoInvert: !1,
                    children: (e, t) => {
                        let { isShown: n } = t;
                        return (0, s.createElement)(v.Z, {
                            ...e,
                            key: 'more-options',
                            isActive: n,
                            className: U.button,
                            iconClassName: U.buttonIcon
                        });
                    }
                },
                'more-options-popout'
            ),
            !t && (0, i.jsx)(p.Z, { className: U.button }, 'clips'),
            (0, i.jsx)(
                C.Z,
                {
                    onOpen: S,
                    onClose: N,
                    className: U.button
                },
                'recents'
            ),
            !o && E
                ? (0, i.jsx)('div', {
                      className: U.button,
                      children: (0, i.jsx)(j.Z, {
                          toggleRequestToSpeakSidebar: () => {
                              f && u.Z.updateChatOpen(n.id, !1), a();
                          },
                          showRequestToSpeakSidebar: o,
                          numRequestToSpeak: g
                      })
                  })
                : null,
            !f &&
                (0, i.jsx)('div', {
                    className: l()(U.button, { [U.sidebarOpen]: o }),
                    children: (0, i.jsx)(T.T, {
                        channelId: n.id,
                        showRequestToSpeakSidebar: o,
                        toggleRequestToSpeakSidebar: a,
                        iconClassName: U.buttonIcon
                    })
                })
        ]
    });
}
function B(e) {
    var t;
    let { inPopout: n, channel: a, toggleRequestToSpeakSidebar: d, showRequestToSpeakSidebar: h } = e,
        p = (0, m.ZP)(a),
        _ = (0, r.e7)([L.Z], () => L.Z.getStageInstanceByChannel(a.id)),
        C = (0, Z.Io)(a.id),
        I = (0, Z.Rk)(a.id, M.pV.AUDIENCE),
        x = (0, r.e7)([S.Z], () => S.Z.getGuild(a.guild_id), [a.guild_id]),
        T = null !== (t = null == x ? void 0 : x.maxStageVideoChannelUsers) && void 0 !== t ? t : 0,
        v = (null == x ? void 0 : x.isCommunity()) ? T < y.TU7 : (null == x ? void 0 : x.premiumTier) !== y.Eu4.TIER_3 && T <= y.eez,
        b = (0, O.Z)(a),
        j = (0, r.e7)([N.Z], () => N.Z.can(R.yP, a)),
        P = () => {
            u.Z.updateStageVideoLimitBoostUpsellDismissed(a.id, !0),
                A.default.track(y.rMx.BOOSTING_UPSELL_CLICKED, {
                    guild_id: a.guild_id,
                    type: D.cd.VIDEO_STAGE_LIMIT,
                    is_moderator: j,
                    action: D.T7.DISMISS
                });
        };
    s.useEffect(() => {
        b &&
            A.default.track(y.rMx.BOOSTING_UPSELL_VIEWED, {
                guild_id: a.guild_id,
                type: D.cd.VIDEO_STAGE_LIMIT,
                is_moderator: j,
                listener_count: C + I
            });
    }, [b]);
    let B = (0, i.jsx)(c.ThemeProvider, {
        theme: y.BRd.DARK,
        children: (e) => {
            var t;
            return (0, i.jsxs)(E.ZP, {
                toolbar: (0, i.jsx)(w, {
                    inPopout: n,
                    toggleRequestToSpeakSidebar: d,
                    showRequestToSpeakSidebar: h,
                    channel: a
                }),
                onDoubleClick: g.O,
                transparent: !0,
                className: l()(e, U.participants),
                children: [
                    (0, i.jsx)(E.ZP.Icon, {
                        icon: c.StageIcon,
                        disabled: !0,
                        'aria-label': k.Z.Messages.STAGE_CHANNEL,
                        className: U.icon,
                        color: null != _ ? o.Z.unsafe_rawColors.GREEN_360.css : void 0
                    }),
                    (0, i.jsx)(E.ZP.Title, {
                        className: U.channelName,
                        wrapperClassName: U.channelNameWrapper,
                        children: null !== (t = null == _ ? void 0 : _.topic) && void 0 !== t ? t : p
                    }),
                    (0, i.jsx)(E.ZP.Divider, { className: U.divider }),
                    (0, i.jsxs)(E.ZP.Title, {
                        children: [
                            (0, i.jsx)(c.MicrophoneIcon, {
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, i.jsx)(c.Text, {
                                variant: 'text-xs/medium',
                                color: 'header-secondary',
                                className: U.speakerCount,
                                children: k.Z.Messages.SPEAKING_COUNT.format({ count: C })
                            }),
                            (0, i.jsx)(c.GroupIcon, {
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, i.jsx)(c.Text, {
                                variant: 'text-xs/medium',
                                color: 'header-secondary',
                                className: U.speakerCount,
                                children: k.Z.Messages.LISTENING_COUNT.format({ count: I })
                            })
                        ]
                    })
                ]
            });
        }
    });
    return b
        ? (0, i.jsxs)('div', {
              children: [
                  B,
                  (0, i.jsxs)('div', {
                      className: U.boostUpsell,
                      children: [
                          (0, i.jsx)(H, {}),
                          (0, i.jsxs)('div', {
                              className: U.text,
                              children: [
                                  (0, i.jsx)(c.Text, {
                                      variant: 'text-md/medium',
                                      color: 'header-primary',
                                      children: v ? k.Z.Messages.STAGE_FULL_MODERATOR_TITLE : k.Z.Messages.STAGE_FULL_MODERATOR_MAX_TITLE
                                  }),
                                  (0, i.jsx)(c.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-normal',
                                      children: v ? k.Z.Messages.STAGE_FULL_MODERATOR_BODY : k.Z.Messages.STAGE_FULL_MAX_BODY
                                  })
                              ]
                          }),
                          (0, i.jsx)('div', {
                              className: U.buttons,
                              children: v
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(c.Button, {
                                                className: U.notNowButton,
                                                onClick: P,
                                                look: c.Button.Looks.BLANK,
                                                size: c.Button.Sizes.SMALL,
                                                children: k.Z.Messages.NOT_NOW
                                            }),
                                            (0, i.jsx)(c.ShinyButton, {
                                                size: c.Button.Sizes.SMALL,
                                                onClick: () => {
                                                    (0, f.f)({
                                                        guildId: a.guild_id,
                                                        location: { section: y.jXE.STAGE_VIDEO_LIMIT }
                                                    }),
                                                        A.default.track(y.rMx.BOOSTING_UPSELL_CLICKED, {
                                                            guild_id: a.guild_id,
                                                            type: D.cd.VIDEO_STAGE_LIMIT,
                                                            is_moderator: j,
                                                            action: D.T7.BOOST
                                                        });
                                                },
                                                className: U.boostButton,
                                                children: k.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION
                                            })
                                        ]
                                    })
                                  : (0, i.jsx)(c.Button, {
                                        className: U.notNowButton,
                                        onClick: P,
                                        look: c.Button.Looks.BLANK,
                                        size: c.Button.Sizes.SMALL,
                                        children: k.Z.Messages.DISMISS
                                    })
                          })
                      ]
                  })
              ]
          })
        : B;
}
function H() {
    return (0, i.jsxs)('svg', {
        width: '36',
        height: '36',
        viewBox: '0 0 36 36',
        fill: 'none',
        children: [
            (0, i.jsxs)('g', {
                clipPath: 'url(#clip0_595_59940)',
                children: [
                    (0, i.jsx)('path', {
                        d: 'M36 18C36 19.8 33.075 21.15 32.625 22.725C32.175 24.3 33.525 27.225 32.625 28.575C31.725 29.925 28.35 29.25 27 30.375C25.65 31.5 25.2 34.425 23.625 35.1C22.05 35.775 19.8 33.3 18 33.3C16.2 33.3 13.95 35.55 12.375 35.1C10.8 34.65 10.35 31.275 9 30.375C7.65 29.475 4.5 29.925 3.375 28.575C2.25 27.225 3.825 24.525 3.375 22.725C2.925 20.925 0 19.8 0 18C0 16.2 2.925 14.85 3.375 13.275C3.825 11.7 2.475 8.77497 3.375 7.42496C4.275 6.07497 7.65 6.74997 9 5.62497C10.35 4.49997 10.8 1.57497 12.375 0.899965C13.95 0.224965 16.2 2.69997 18 2.69997C19.8 2.69997 22.05 0.449965 23.625 0.899965C25.2 1.34997 25.65 4.49997 27 5.62497C28.35 6.74997 31.5 6.07497 32.625 7.42496C33.75 8.77497 32.175 11.475 32.625 13.275C33.075 15.075 36 16.2 36 18Z',
                        fill: 'url(#paint0_linear_595_59940)'
                    }),
                    (0, i.jsx)('path', {
                        d: 'M15.75 20.7001L18 22.9501L20.25 20.7001V15.3001L18 13.0501L15.75 15.3001V20.7001Z',
                        fill: 'white'
                    }),
                    (0, i.jsx)('path', {
                        d: 'M18 6.75L11.25 13.5V22.5L18 29.25L24.75 22.5V13.5L18 6.75ZM22.5 21.6L18 26.1L13.5 21.6V14.4L18 9.9L22.5 14.4V21.6Z',
                        fill: 'white'
                    })
                ]
            }),
            (0, i.jsxs)('defs', {
                children: [
                    (0, i.jsxs)('linearGradient', {
                        id: 'paint0_linear_595_59940',
                        x1: '2.4046e-06',
                        y1: '35.2166',
                        x2: '35.7182',
                        y2: '-1.45185',
                        gradientUnits: 'userSpaceOnUse',
                        children: [
                            (0, i.jsx)('stop', { stopColor: '#3E70DD' }),
                            (0, i.jsx)('stop', {
                                offset: '1',
                                stopColor: '#B377F3'
                            })
                        ]
                    }),
                    (0, i.jsx)('clipPath', {
                        id: 'clip0_595_59940',
                        children: (0, i.jsx)('rect', {
                            width: '36',
                            height: '36',
                            fill: 'white'
                        })
                    })
                ]
            })
        ]
    });
}
