n(47120);
var i,
    a,
    s = n(735250),
    r = n(470079),
    l = n(120356),
    o = n.n(l),
    c = n(442837),
    d = n(692547),
    u = n(481060),
    _ = n(438139),
    E = n(2052),
    h = n(726542),
    m = n(638880),
    I = n(655922),
    g = n(122810),
    p = n(833664),
    T = n(503438),
    S = n(420660),
    C = n(74433),
    f = n(906732),
    N = n(895924),
    A = n(812206),
    v = n(933557),
    L = n(194082),
    Z = n(264165),
    R = n(630186),
    O = n(925329),
    x = n(382182),
    b = n(871118),
    P = n(707409),
    M = n(849171),
    D = n(314897),
    y = n(592125),
    j = n(594174),
    U = n(395361),
    G = n(639351),
    w = n(81063),
    k = n(823379),
    B = n(51144),
    H = n(599706),
    V = n(981631),
    F = n(689938),
    Y = n(697929);
let W = {
        SMALL: 64,
        LARGE: 160
    },
    z = [14, 14, 12, 12, 10, 8, 6],
    K = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, s.jsx)(u.Text, {
            className: o()(Y.textContent, t),
            variant: 'text-sm/semibold',
            children: e
        });
    },
    q = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, s.jsx)(u.Text, {
            className: o()(Y.textContent, t),
            variant: 'text-xs/normal',
            children: e
        });
    },
    Q = (0, _.Z)((e) => {
        let { message: t } = e;
        return (0, s.jsx)('div', {
            className: Y.__invalid_timestamp,
            children: t
        });
    }),
    X = (e) => {
        let { children: t } = e;
        return (0, s.jsx)('section', {
            className: Y.section,
            children: t
        });
    };
class J extends r.Component {
    renderTimePlayed() {
        let e;
        let { activity: t } = this.props,
            { timestamps: n } = t;
        return null == n || !(0, p.Z)(t) || (0, T.Z)(t)
            ? null
            : q(
                  (e = (0, g.Z)(t)
                      ? (0, s.jsx)(Q, { timestamps: n })
                      : (0, s.jsx)(P.ZP, {
                            start: n.start,
                            end: n.end,
                            location: P.ZP.Locations.USER_ACTIVITY,
                            className: Y.__invalid_playTime
                        }))
              );
    }
    render() {
        var e, t;
        let {
            activity: { assets: i, details: a, state: r, application_id: l },
            getAssetImage: c
        } = this.props;
        return (0, s.jsx)(X, {
            children: (0, s.jsxs)('div', {
                className: Y.activitySection,
                children: [
                    null != i && 0 !== Object.keys(i).length
                        ? (0, s.jsxs)('div', {
                              className: Y.activitySectionAssets,
                              children: [
                                  (0, s.jsx)('img', {
                                      alt: null !== (e = i.large_text) && void 0 !== e ? e : '',
                                      src: c(l, i.large_image, [W.LARGE, W.LARGE]),
                                      className: o()(Y.largeImage, { [Y.largeImageMask]: null != i.small_image })
                                  }),
                                  null != i.small_image
                                      ? (0, s.jsx)('img', {
                                            alt: null !== (t = i.small_text) && void 0 !== t ? t : '',
                                            src: c(l, i.small_image, [W.SMALL, W.SMALL]),
                                            className: Y.smallImage
                                        })
                                      : null
                              ]
                          })
                        : (0, s.jsx)('div', {
                              className: Y.activitySectionAssets,
                              children: (0, s.jsx)('img', {
                                  alt: '',
                                  src: n(211827),
                                  className: Y.largeImage
                              })
                          }),
                    (0, s.jsxs)('div', {
                        children: [K(null != a && '' !== a ? a : F.Z.Messages.USER_ACTIVITY_HEADER_PLAYING), null != r ? q(r) : null, this.renderTimePlayed()]
                    })
                ]
            })
        });
    }
}
((a = i || (i = {})).XBOX = 'XBOX'), (a.SPOTIFY = 'SPOTIFY'), (a.MULTIPLE = 'MULTIPLE');
let $ = (e) => {
    let t,
        { src: n, onClick: i, onContextMenu: a } = e;
    switch (n) {
        case 'XBOX':
            t = (0, s.jsx)(G.Z, {
                className: Y.headerIcon,
                color: d.Z.unsafe_rawColors.PRIMARY_300.css
            });
            break;
        case 'SPOTIFY':
            t = (0, s.jsx)(U.Z, {
                className: Y.headerIcon,
                color: d.Z.unsafe_rawColors.SPOTIFY.css
            });
            break;
        case 'MULTIPLE':
            t = (0, s.jsx)('div', {
                className: Y.multipleIconWrapper,
                children: (0, s.jsx)(u.GameControllerIcon, {
                    size: 'md',
                    className: o()(Y.headerIcon, Y.multipleIcon),
                    color: d.Z.unsafe_rawColors.PRIMARY_300.css
                })
            });
            break;
        default:
            t = (0, s.jsx)('img', {
                src: null != n ? n : void 0,
                alt: '',
                className: Y.headerIcon
            });
    }
    return null != i || null != a
        ? (0, s.jsx)(u.Clickable, {
              onClick: i,
              className: o()(null != i ? Y.clickableIcon : ''),
              onContextMenu: a,
              children: t
          })
        : t;
};
$.Src = i;
let ee = (e) => {
    let { priorityUser: t, title: n, subtitle: i, icon: a, onContextMenu: r, guildId: l } = e;
    return (0, s.jsxs)('header', {
        className: null != a ? Y.headerFull : Y.headerSimple,
        children: [
            (0, s.jsx)(u.Avatar, {
                src: t.user.getAvatarURL(l, 32),
                'aria-label': t.user.username,
                size: u.AvatarSizes.SIZE_32,
                className: Y.headerAvatar,
                status: t.status,
                onContextMenu: r
            }),
            (0, s.jsxs)('div', {
                className: Y.__invalid_headerDetails,
                children: [
                    (0, s.jsx)(u.Text, {
                        className: o()(Y.textContent),
                        variant: 'text-md/semibold',
                        children: n
                    }),
                    (0, s.jsx)(u.Text, {
                        color: 'header-secondary',
                        className: Y.textContent,
                        variant: 'text-sm/normal',
                        children: i
                    })
                ]
            }),
            null != a ? a : null
        ]
    });
};
ee.Icon = $;
let et = (e) => {
    let { children: t, className: n, ...i } = e;
    return (0, s.jsx)(u.FocusRing, {
        children: (0, s.jsx)(R.Z, {
            className: o()(n, Y.wrapper),
            padded: !0,
            ...i,
            children: t
        })
    });
};
(et.Header = ee),
    (et.Body = (e) => {
        let { children: t } = e;
        return (0, s.jsx)(R.Z, {
            inset: !0,
            padded: !1,
            className: Y.body,
            children: t
        });
    }),
    (et.Separator = (e) => {
        let { inset: t, className: n } = e;
        return (0, s.jsx)('div', { className: o()(Y.separator, { [Y.inset]: t }, n) });
    }),
    (et.VoiceSection = (e) => {
        var t, n;
        let { guild: i, channel: a, onGuildClick: l, partySize: c, members: d, onChannelContextMenu: _ } = e,
            E = r.useRef(null),
            h = (0, v.ZP)(a, !0);
        return (0, s.jsx)(X, {
            children: (0, s.jsxs)('div', {
                className: Y.voiceSection,
                ref: E,
                onContextMenu: (e) => _(e, a),
                children: [
                    (0, s.jsx)(u.Clickable, {
                        onClick: l,
                        'aria-hidden': !0,
                        tabIndex: -1,
                        children: (0, s.jsxs)('div', {
                            className: Y.voiceSectionAssets,
                            children: [
                                null != i.getIconURL(32)
                                    ? (0, s.jsx)('img', {
                                          alt: '',
                                          src: null !== (t = i.getIconURL(32)) && void 0 !== t ? t : void 0,
                                          className: o()(Y.voiceSectionGuildImage, Y.largeImageMask)
                                      })
                                    : (0, s.jsx)('div', {
                                          className: Y.voiceSectionNoGuildImageWrapper,
                                          children: (0, s.jsx)('div', {
                                              className: Y.voiceSectionNoGuildImage,
                                              style: { fontSize: null !== (n = z[i.acronym.length]) && void 0 !== n ? n : z[z.length - 1] },
                                              children: i.acronym
                                          })
                                      }),
                                (0, s.jsx)('div', {
                                    className: Y.voiceSectionIconWrapper,
                                    children: (0, s.jsx)(u.VoiceNormalIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: Y.voiceSectionIcon
                                    })
                                })
                            ]
                        })
                    }),
                    (0, s.jsx)(u.Clickable, {
                        onClick: l,
                        focusProps: { ringTarget: E },
                        children: (0, s.jsxs)('div', {
                            className: Y.voiceSectionDetails,
                            children: [K(i.toString(), Y.voiceSectionText), q(h, Y.voiceSectionText)]
                        })
                    }),
                    (0, s.jsx)(H.Z, {
                        partySize: c,
                        members: d,
                        guildId: i.id
                    })
                ]
            })
        });
    }),
    (et.GameSection = (e) => {
        let { icon: t, name: n, partySize: i, members: a } = e;
        return (0, s.jsx)(X, {
            children: (0, s.jsxs)('div', {
                className: Y.gameSection,
                children: [
                    null != t
                        ? (0, s.jsx)('img', {
                              alt: '',
                              src: t,
                              className: Y.gameSectionIcon
                          })
                        : null,
                    (0, s.jsxs)('div', {
                        children: [K(n), q(F.Z.Messages.ACTIVITY_FEED_SINGLE_MEMBER_LIST_HEADER.format({ memberCount: i.totalSize }))]
                    }),
                    (0, s.jsx)(H.Z, {
                        partySize: i,
                        members: a
                    })
                ]
            })
        });
    }),
    (et.RichPresenceSection = J),
    (et.XboxSection = (e) => {
        let { title: t } = e;
        return (0, s.jsx)(X, {
            children: (0, s.jsxs)('div', {
                className: Y.xboxSection,
                children: [
                    (0, s.jsx)(G.Z, { className: Y.xboxSectionIcon }),
                    (0, s.jsxs)('div', {
                        className: Y.__invalid_xboxSectionDetails,
                        children: [K(t), q(F.Z.Messages.GAME_FEED_ACTIVITY_PLAYING_XBOX)]
                    })
                ]
            })
        });
    }),
    (et.SpotifySection = (e) => {
        var t;
        let {
            activity: { assets: n, details: i, state: a, application_id: r },
            partySize: l,
            members: c,
            isSolo: u,
            getAssetImage: _
        } = e;
        return (0, s.jsx)(X, {
            children: (0, s.jsxs)('div', {
                className: Y.spotifySection,
                children: [
                    null != n
                        ? (0, s.jsxs)('div', {
                              className: Y.activitySectionAssets,
                              children: [
                                  (0, s.jsx)('img', {
                                      alt: null !== (t = n.large_text) && void 0 !== t ? t : '',
                                      src: _(r, n.large_image, [W.LARGE, W.LARGE]),
                                      className: o()(Y.largeImage, Y.borderRadius0, { [Y.largeImageMask]: null != n.small_image })
                                  }),
                                  u
                                      ? null
                                      : (0, s.jsx)(U.Z, {
                                            className: Y.smallImage,
                                            color: d.Z.unsafe_rawColors.SPOTIFY.css
                                        })
                              ]
                          })
                        : (0, s.jsx)('div', {}),
                    (0, s.jsxs)('div', {
                        children: [null != i ? K(i) : null, null != a ? q(a) : null]
                    }),
                    (0, s.jsx)(H.Z, {
                        minAvatarsShown: u ? 2 : 1,
                        partySize: l,
                        members: c
                    })
                ]
            })
        });
    }),
    (et.TwitchSection = (e) => {
        let t,
            { activity: i, user: a, getAssetImage: r, guildId: l } = e,
            { name: c, details: d, assets: _, application_id: E } = i;
        if (null != _ && (0, S.Z)(i)) {
            var m;
            t = (0, s.jsx)(Z.Z, {
                className: Y.twitchSectionPreviewWrapper,
                aspectRatio: 16 / 9,
                children: (0, s.jsxs)(u.Clickable, {
                    href: (0, I.Z)(i),
                    tag: 'a',
                    target: '_blank',
                    children: [
                        (0, s.jsx)('img', {
                            alt: null !== (m = _.large_text) && void 0 !== m ? m : '',
                            src: r(E, _.large_image, [900, 500]),
                            className: Y.twitchSectionPreview
                        }),
                        (0, s.jsx)('img', {
                            src: n(497726),
                            className: Y.twitchSectionPlayButton,
                            alt: ''
                        })
                    ]
                })
            });
        }
        return (0, s.jsxs)(X, {
            children: [
                (0, s.jsxs)('div', {
                    className: o()({
                        [Y.twitchSectionSimple]: null == a,
                        [Y.twitchSectionFull]: null != a
                    }),
                    children: [
                        (0, s.jsx)('img', {
                            alt: '',
                            src: h.Z.get(V.ABu.TWITCH).icon.lightSVG,
                            className: Y.twitchSectionIcon
                        }),
                        (0, s.jsxs)('div', {
                            children: [K(c), null != d ? q(d) : null]
                        }),
                        null != a
                            ? (0, s.jsx)(u.Avatar, {
                                  src: a.getAvatarURL(l, 24),
                                  'aria-label': a.username,
                                  className: Y.twitchSectionAvatar,
                                  size: u.AvatarSizes.SIZE_24
                              })
                            : null
                    ]
                }),
                t
            ]
        });
    }),
    (et.ApplicationStreamingSection = (e) => {
        var t, n;
        let { activity: i, user: a, applicationStream: r, onPreviewClick: l, guildId: o } = e,
            d = (0, c.e7)([y.Z], () => y.Z.getChannel(r.channelId)),
            [_, E] = (0, x.wq)(d),
            h = (0, s.jsxs)(u.Clickable, {
                onClick: _ ? l : void 0,
                className: Y.applicationStreamingPreviewWrapper,
                children: [
                    (0, s.jsx)(b.Z, {
                        stream: r,
                        className: Y.applicationStreamingPreviewSize
                    }),
                    (0, s.jsx)('div', {
                        className: Y.applicationStreamingHoverWrapper,
                        children: (0, s.jsx)('div', {
                            className: Y.applicationStreamingHoverText,
                            children: (0, x.P9)(E)
                        })
                    })
                ]
            }),
            m = null !== (n = null === (t = (0, C.Z)(i, r)) || void 0 === t ? void 0 : t.activityText) && void 0 !== n ? n : F.Z.Messages.SHARING_SCREEN;
        return (0, s.jsxs)(X, {
            children: [
                (0, s.jsxs)('div', {
                    className: Y.applicationStreamingSection,
                    children: [
                        (0, s.jsx)(u.Avatar, {
                            size: u.AvatarSizes.SIZE_32,
                            src: a.getAvatarURL(o, 32),
                            'aria-label': a.username,
                            className: Y.applicationStreamingAvatar
                        }),
                        (0, s.jsxs)('div', {
                            children: [K(B.ZP.getName(a)), q(m)]
                        }),
                        (0, s.jsx)(L.ZP, { size: L.ZP.Sizes.SMALL })
                    ]
                }),
                h
            ]
        });
    }),
    (et.EmbeddedActivitySection = (e) => {
        let { activity: t, channel: n, guildId: i, participants: a } = e,
            [l, o] = r.useState(null),
            d = t.application_id;
        r.useEffect(() => {
            if (null != d)
                (0, w.fetchAssetIds)(d, ['embedded_background']).then((e) => {
                    let [t] = e;
                    return o(t);
                });
        }, [d]);
        let _ = (0, c.Wu)([j.default, D.default], () =>
                Array.from(a)
                    .map((e) => (D.default.getId() === e ? null : j.default.getUser(e)))
                    .filter(k.lm)
            ),
            h = (0, E.O)(),
            { analyticsLocations: I } = (0, f.ZP)();
        if (null == d) return null;
        let g = A.Z.getApplication(d);
        if (null == g) return null;
        let p = null != t.created_at && t.created_at > 0 ? { start: t.created_at } : void 0,
            T = (0, w.getAssetImage)(g.id, l, 300);
        return (0, s.jsxs)(X, {
            children: [
                (0, s.jsxs)('div', {
                    className: Y.embeddedActivityTopRow,
                    children: [
                        (0, s.jsx)(O.Z, {
                            game: g,
                            size: O.Z.Sizes.XSMALL,
                            className: Y.embeddedActivityIcon
                        }),
                        (0, s.jsx)('div', {
                            className: Y.embeddedActivityName,
                            children: (0, s.jsx)(u.Text, {
                                variant: 'text-sm/semibold',
                                children: g.name
                            })
                        }),
                        null != p
                            ? (0, s.jsx)('div', {
                                  className: Y.embeddedActivityTimeElapsed,
                                  children: (0, s.jsx)(u.Text, {
                                      color: 'text-muted',
                                      variant: 'text-sm/normal',
                                      children: (0, s.jsx)(Q, { timestamps: p })
                                  })
                              })
                            : null
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: Y.embeddedActivityPlayerContainer,
                    children: [
                        null != T
                            ? (0, s.jsx)('img', {
                                  src: T,
                                  alt: g.name,
                                  className: Y.embeddedActivityImage
                              })
                            : null,
                        (0, s.jsxs)('div', {
                            className: Y.embeddedActivityImageOverlay,
                            children: [
                                (0, s.jsx)(M.OV, {
                                    users: _,
                                    guildId: i,
                                    channelId: n.id
                                }),
                                (0, s.jsx)('div', {
                                    className: Y.embeddedActivityJoinWrapper,
                                    children: (0, s.jsx)(u.Button, {
                                        size: u.Button.Sizes.SMALL,
                                        onClick: (e) => {
                                            e.stopPropagation(),
                                                (0, m.Z)({
                                                    applicationId: d,
                                                    activityChannelId: n.id,
                                                    locationObject: h.location,
                                                    analyticsLocations: I,
                                                    commandOrigin: N.bB.NOW_PLAYING
                                                });
                                        },
                                        children: F.Z.Messages.JOIN
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }),
    (t.Z = et);
