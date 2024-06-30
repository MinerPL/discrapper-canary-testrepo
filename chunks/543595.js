n.d(t, {
    Y: function () {
        return r;
    }
}), n(789020), n(47120);
var r, i, a, o = n(735250), s = n(470079), l = n(120356), u = n.n(l), c = n(512722), d = n.n(c), _ = n(780384), E = n(481060), f = n(438139), h = n(410030), p = n(726542), m = n(740265), I = n(122810), T = n(833664), g = n(503438), S = n(802856), A = n(420660), N = n(810568), v = n(774073), O = n(833858), R = n(223135), C = n(769654), y = n(750154), D = n(768581), L = n(630388), b = n(153066), M = n(672938), P = n(285952), U = n(366695), w = n(346656), x = n(514342), G = n(366966), k = n(936195), B = n(806519), F = n(981631), V = n(701488), H = n(689938), Z = n(717132);
function Y(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
(a = r || (r = {})).USER_POPOUT = 'UserPopout', a.USER_POPOUT_V2 = 'UserPopoutV2', a.ACTIVITY_FEED = 'ActivityFeed', a.PROFILE = 'Profile', a.PROFILE_V2 = 'ProfileV2', a.STREAM_PREVIEW = 'StreamPreview', a.VOICE_CHANNEL = 'VoiceChannel', a.SIMPLIFIED_PROFILE = 'SimplifiedProfile', a.BITE_SIZE_POPOUT = 'BiteSizePopout';
let j = {
        StreamPreview: [
            108,
            60
        ],
        UserPopout: [
            108,
            60
        ],
        UserPopoutV2: [
            108,
            60
        ],
        BiteSizePopout: [
            108,
            60
        ],
        VoiceChannel: [
            108,
            60
        ],
        Profile: [
            162,
            90
        ],
        ProfileV2: [
            162,
            90
        ],
        SimplifiedProfile: [
            162,
            90
        ],
        ActivityFeed: [
            900,
            500
        ]
    }, {getAssetImage: W} = n(81063), K = (0, f.Z)(class extends s.PureComponent {
        render() {
            return (0, o.jsx)('div', {
                className: Z.timestamp,
                children: this.props.message
            });
        }
    });
function z(e) {
    let {activity: t} = e, n = null;
    return (0, g.Z)(t) && (n = F.ABu.SPOTIFY), null != t.platform && [
        F.M7m.PS4,
        F.M7m.PS5
    ].includes(t.platform) && (n = F.ABu.PLAYSTATION), n;
}
function q(e) {
    let {activity: t} = e, n = (0, h.ZP)(), r = z({ activity: t });
    if (null == r)
        return null;
    let i = p.Z.get(r);
    return (0, o.jsx)('img', {
        alt: '',
        src: (0, _.ap)(n) ? i.icon.lightSVG : i.icon.darkSVG,
        className: Z.platformIcon
    });
}
class Q extends (i = s.PureComponent) {
    get activity() {
        let {
            activity: e,
            activityGuild: t
        } = this.props;
        return null != t && (null == e ? void 0 : e.type) !== F.IIU.PLAYING && (null == e ? void 0 : e.type) !== F.IIU.WATCHING && (null == e ? void 0 : e.type) !== F.IIU.LISTENING && (null == e ? void 0 : e.type) !== F.IIU.HANG_STATUS ? {
            type: F.IIU.PLAYING,
            name: H.Z.Messages.SHARING_SCREEN
        } : e;
    }
    getTypeClass(e, t) {
        return (0, b.l)(Z, e, this.props.type, t);
    }
    isStreamerOnTypeProfile() {
        return (0, A.Z)(this.activity) && ('Profile' === this.props.type || 'ProfileV2' === this.props.type);
    }
    isStreamerOnTypeActivityFeed() {
        return (0, A.Z)(this.activity) && 'ActivityFeed' === this.props.type;
    }
    renderHeader(e) {
        let t;
        let {
                hideHeader: n,
                activityGuild: r,
                showChannelDetails: i,
                renderHeaderAccessory: a,
                type: s
            } = this.props, l = this.activity;
        if (n || null == l)
            return null;
        let {name: c} = l;
        switch (l.type) {
        case F.IIU.STREAMING:
            t = H.Z.Messages.USER_ACTIVITY_HEADER_LIVE_ON_PLATFORM.format({
                platform: [
                    F.ABu.TWITCH,
                    F.ABu.YOUTUBE
                ].includes(c.toLowerCase()) ? c : p.Z.get(F.ABu.TWITCH).name
            });
            break;
        case F.IIU.LISTENING:
            t = H.Z.Messages.USER_ACTIVITY_HEADER_LISTENING.format({ name: c });
            break;
        case F.IIU.WATCHING:
            t = H.Z.Messages.USER_ACTIVITY_HEADER_WATCHING.format({ name: c });
            break;
        case F.IIU.PLAYING:
            t = (0, m.Z)(l);
            break;
        case F.IIU.COMPETING:
            t = H.Z.Messages.USER_ACTIVITY_HEADER_COMPETING.format({ name: c });
        }
        if (null != r) {
            var d;
            t = (0, L.yE)(null !== (d = null == l ? void 0 : l.flags) && void 0 !== d ? d : 0, F.xjy.EMBEDDED) ? l.type === F.IIU.WATCHING ? H.Z.Messages.EMBEDDED_ACTIVITIES_WATCHING_IN_GUILD.format({ guildName: r.name }) : H.Z.Messages.EMBEDDED_ACTIVITIES_PLAYING_IN_GUILD.format({ guildName: r.name }) : H.Z.Messages.USER_ACTIVITY_HEADER_STREAMING_TO_GUILD.format({ server: r.name });
        }
        return (null == l ? void 0 : l.type) === F.IIU.HANG_STATUS && (t = H.Z.Messages.STATUS_LEAD_IN_JUST), (0, o.jsxs)('div', {
            className: Z.headerContainer,
            children: [
                (0, o.jsx)(E.Heading, {
                    className: u()((0, b.l)(Z, 'headerText', e ? 'EmptyBody' : 'Normal')),
                    variant: i ? 'text-xs/semibold' : 'eyebrow',
                    color: 'ProfileV2' === s ? 'header-primary' : void 0,
                    children: (0, o.jsx)(x.Z, { children: t })
                }),
                null == a ? void 0 : a()
            ]
        });
    }
    renderXboxImage() {
        return (0, o.jsx)('div', {
            className: Z.assets,
            children: (0, o.jsx)('img', {
                alt: '',
                src: p.Z.get(F.ABu.XBOX).icon.customPNG,
                className: u()(this.getTypeClass('assetsLargeImage', 'Xbox'))
            })
        });
    }
    renderImage(e) {
        var t, n, r;
        let i, a;
        if (e.type === F.IIU.HANG_STATUS)
            return (0, o.jsx)('div', {
                className: Z.assets,
                children: (0, o.jsx)(R.Z, {
                    hangStatusActivity: e,
                    className: u()(Z.assetsHangStatus, this.getTypeClass('assetsSmallImage', 'WithoutLargeImage'))
                })
            });
        let {type: l} = this.props, {
                assets: c,
                application_id: d
            } = e;
        if (null == c || null == c.large_image && null == c.small_image)
            return null;
        (0, A.Z)(e) && (i = j[l]);
        let _ = (0, g.Z)(e), f = null != c.large_image ? (0, o.jsx)('img', {
                alt: null !== (t = c.large_text) && void 0 !== t ? t : '',
                src: W(d, c.large_image, null != i ? i : [
                    V.Si.LARGE,
                    V.Si.LARGE
                ]),
                className: u()(this.getTypeClass('assetsLargeImage', this.isStreamerOnTypeProfile() || this.isStreamerOnTypeActivityFeed() ? F.ABu.TWITCH : ''), { [null !== (n = this.getTypeClass('assetsLargeMask')) && void 0 !== n ? n : '']: null != c.small_image }, { [Z.assetsLargeImageSpotify]: _ })
            }) : null;
        if (_)
            f = (0, o.jsx)(E.Anchor, {
                onClick: this.handleOpenSpotifyAlbum,
                children: f
            });
        else if ((0, y.dS)(e)) {
            let t = (0, y.rq)(e);
            if (null == t)
                return null;
            f = (0, o.jsx)(B.ZP, {
                mask: B.ZP.Masks.SQUIRCLE,
                width: V.Si.SMALL,
                height: V.Si.SMALL,
                children: (0, o.jsx)('img', {
                    src: null !== (r = D.ZP.getGuildIconURL({
                        id: t.guildId,
                        icon: c.small_image,
                        size: V.Si.SMALL
                    })) && void 0 !== r ? r : void 0,
                    className: Z.assetsLargeImageVoiceChannel,
                    alt: ''
                })
            });
        }
        return (this.isStreamerOnTypeActivityFeed() && null != e.url && '' !== e.url && (f = (0, o.jsxs)('div', {
            className: Z.twitchImageContainer,
            children: [
                (0, o.jsxs)('div', {
                    className: Z.twitchImageOverlay,
                    children: [
                        (0, o.jsx)(E.H, {
                            className: Z.streamName,
                            children: e.name
                        }),
                        (0, o.jsx)('div', {
                            className: Z.streamGame,
                            children: H.Z.Messages.STREAMER_PLAYING.format({ game: e.details })
                        })
                    ]
                }),
                (0, o.jsx)(E.Anchor, {
                    className: Z.twitchBackgroundImage,
                    href: e.url,
                    children: f
                })
            ]
        })), !(0, y.dS)(e) && null != c.small_image && (a = (0, o.jsx)(E.Tooltip, {
            text: '' !== c.small_text ? c.small_text : null,
            position: 'top',
            children: e => {
                var t;
                return (0, o.jsx)('img', {
                    alt: null !== (t = c.small_text) && void 0 !== t ? t : '',
                    src: W(d, c.small_image, [
                        V.Si.SMALL,
                        V.Si.SMALL
                    ]),
                    className: this.getTypeClass('assetsSmallImage', null == f ? 'WithoutLargeImage' : void 0),
                    ...e
                });
            }
        })), null == f) ? (0, o.jsx)('div', {
            className: Z.assets,
            children: a
        }) : (0, o.jsxs)('div', {
            className: Z.assets,
            children: [
                (0, o.jsx)(E.Tooltip, {
                    text: null != c.large_text ? c.large_text : null,
                    position: 'top',
                    children: e => {
                        let {
                            onMouseEnter: t,
                            onMouseLeave: n
                        } = e;
                        return null != f ? s.cloneElement(f, {
                            onMouseEnter: t,
                            onMouseLeave: n
                        }) : null;
                    }
                }),
                a
            ]
        });
    }
    renderGameImage(e) {
        let {
            user: t,
            type: n,
            application: r,
            activityGuild: i
        } = this.props;
        return null != e.assets || (0, I.Z)(e) || e.type !== F.IIU.PLAYING || 'ActivityFeed' === n || t.bot ? null : null == r && null != i ? (0, o.jsx)('div', { className: u()(Z.gameIcon, Z.screenshareIcon) }) : (0, o.jsx)(U.Z, {
            className: Z.gameIcon,
            game: r
        });
    }
    renderName(e) {
        let {
            user: t,
            application: n,
            hideName: r
        } = this.props;
        if (r)
            return null;
        let {
            details: i,
            type: a
        } = e;
        if (a === F.IIU.CUSTOM_STATUS)
            return null;
        let s = (0, T.Z)(e), l = e.name, c = l;
        if (a === F.IIU.HANG_STATUS ? c = (0, O.O8)(e) : s && null != n ? c = (0, o.jsx)('span', {
                className: Z.activityName,
                children: c
            }) : !s && (l = i, c = i, (0, g.Z)(e) && null != e.sync_id && null != i ? c = (0, o.jsx)(E.Anchor, {
                className: Z.bodyLink,
                onClick: this.handleOpenSpotifyTrack,
                children: i
            }) : (0, y.dS)(e) && (c = e.name)), null == c)
            return null;
        let d = null != z({ activity: e }) && 'BiteSizePopout' === this.props.type;
        return (0, o.jsx)(E.Text, {
            title: l,
            variant: 'text-sm/semibold',
            className: u()((0, b.l)(Z, 'name', t.bot || this.isStreamerOnTypeProfile() ? 'wrap' : 'normal'), d && Z.namePlatformIconMarginBiteSizePopout),
            children: c
        });
    }
    renderDetails(e) {
        let t;
        let {
                details: n,
                state: r
            } = e, {activityGuild: i} = this.props, a = n, s = n;
        if (e.type === F.IIU.CUSTOM_STATUS)
            a = r;
        else if (e.type === F.IIU.HANG_STATUS)
            a = null != i ? H.Z.Messages.HANG_STATUS_LOCATION.format({ guildName: i.name }) : null, t = null != i ? () => {
                (0, C.X)(i.id);
            } : void 0;
        else if (!(0, T.Z)(e)) {
            if (s = a = r, (0, g.Z)(e) && null != r)
                a = H.Z.Messages.USER_ACTIVITY_LISTENING_ARTISTS.format({
                    artists: s,
                    artistsHook: (t, n) => (0, o.jsx)(k.Z, {
                        artists: r,
                        linkClassName: Z.bodyLink,
                        canOpen: null != e.sync_id,
                        onOpenSpotifyArtist: this.handleOpenSpotifyArtist
                    }, n)
                });
            else if ((0, y.dS)(e)) {
                var l;
                a = null === (l = e.assets) || void 0 === l ? void 0 : l.small_text;
            }
        }
        return null == a || 0 === a.length ? null : ((0, A.Z)(e) && (a = H.Z.Messages.STREAMER_PLAYING.format({ game: a })), null != t) ? (0, o.jsx)(E.Clickable, {
            onClick: t,
            title: null != s ? s : void 0,
            className: Z.clickableDetails,
            children: a
        }) : (0, o.jsx)('div', {
            title: null != s ? s : void 0,
            className: (0, A.Z)(e) || (0, g.Z)(e) ? Z.detailsWrap : Z.details,
            children: a
        });
    }
    renderChannelDetails(e) {
        let {
            activityGuild: t,
            showChannelDetails: n,
            channel: r
        } = this.props;
        return n && null != t ? null == r ? (0, o.jsx)('div', {
            className: (0, A.Z)(e) || (0, g.Z)(e) ? Z.detailsWrap : Z.details,
            children: H.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({ guildName: t.name })
        }) : (0, o.jsxs)('div', {
            className: u()((0, A.Z)(e) || (0, g.Z)(e) ? Z.detailsWrap : Z.details, Z.guildDetails),
            children: [
                (0, o.jsx)(w.Z, {
                    guild: t,
                    size: w.Z.Sizes.SMOL,
                    className: Z.guildIcon
                }),
                (0, o.jsx)(E.ChevronSmallRightIcon, {
                    size: 'xxs',
                    color: 'currentColor'
                }),
                (0, o.jsxs)('div', {
                    className: Z.voiceChannelInfo,
                    children: [
                        (0, o.jsx)(E.VoiceNormalIcon, {
                            size: 'xxs',
                            color: 'currentColor'
                        }),
                        (0, o.jsx)(E.Text, {
                            variant: 'text-xs/normal',
                            children: null == r ? void 0 : r.name
                        })
                    ]
                })
            ]
        }) : null;
    }
    renderTimePlayed(e) {
        let {activityGuild: t} = this.props;
        if (!(0, T.Z)(e) || (0, g.Z)(e))
            return null;
        let {timestamps: n} = e;
        return null == n ? null : (0, I.Z)(e) ? (0, o.jsx)(K, { timestamps: n }) : (0, o.jsx)(G.ZP, {
            start: n.start,
            location: G.ZP.Locations.USER_ACTIVITY,
            className: Z.playTime,
            isApplicationStreaming: null != t
        });
    }
    renderTimeBar(e) {
        if (!(0, g.Z)(e))
            return null;
        let {timestamps: t} = e;
        if (null == t)
            return null;
        let {
            start: n,
            end: r
        } = t;
        return null == n || null == r ? null : (0, o.jsx)(M.Z, {
            start: n,
            end: r,
            className: this.getTypeClass('timeBar'),
            themed: 'VoiceChannel' === this.props.type || 'UserPopout' === this.props.type || 'UserPopoutV2' === this.props.type || 'ProfileV2' === this.props.type || 'SimplifiedProfile' === this.props.type || 'BiteSizePopout' === this.props.type
        });
    }
    renderState(e, t) {
        var n, r;
        let i;
        let {
                state: a,
                party: s,
                assets: l
            } = e, u = a, c = u;
        return (!(0, T.Z)(e) && (c = u = null == l ? void 0 : l.large_text, (0, g.Z)(e) && null != u && (u = H.Z.Messages.USER_ACTIVITY_LISTENING_ALBUM.format({
            album: c,
            albumHook: (t, n) => null != e.sync_id && null != c ? (0, o.jsx)(E.Anchor, {
                className: Z.bodyLink,
                onClick: this.handleOpenSpotifyAlbum,
                children: c
            }, n) : c
        }))), null != u && 0 !== u.length && e.type !== F.IIU.CUSTOM_STATUS || (0, y.dS)(e)) ? ((null == s ? void 0 : s.size) == null && [V.Zc].includes(null !== (n = e.application_id) && void 0 !== n ? n : '') ? i = H.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
            count: '0',
            max: null !== (r = null == t ? void 0 : t.getMaxParticipants()) && void 0 !== r ? r : 0
        }) : (0, y.dS)(e) && (null == s ? void 0 : s.size) != null ? i = H.Z.Messages.USER_ACTIVITY_STAGE_STATE_SIZE.format({
            numSpeakers: s.size[0],
            numListeners: s.size[1] - s.size[0]
        }) : (null == s ? void 0 : s.size) != null && s.size.length >= 2 && (i = H.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
            count: s.size[0],
            max: s.size[1]
        })), (0, o.jsxs)('div', {
            className: Z.state,
            children: [
                (0, o.jsx)('span', {
                    title: c,
                    children: u
                }),
                null != i ? (0, o.jsxs)('span', {
                    children: [
                        ' ',
                        i
                    ]
                }) : null
            ]
        })) : null;
    }
    render() {
        let e;
        let {
                type: t,
                renderActions: r,
                className: i,
                application: a,
                user: s,
                showReactions: l,
                onOpenGameProfile: c,
                shouldOpenGameProfile: d
            } = this.props, _ = this.activity;
        if (null == _ || _.type === F.IIU.CUSTOM_STATUS)
            return null;
        let f = 'UserPopout' === t || 'UserPopoutV2' === t || 'BiteSizePopout' === t, h = 'Profile' === t || 'ProfileV2' === t || 'SimplifiedProfile' === t, p = 'ActivityFeed' === t, m = 'StreamPreview' === t, I = !1;
        (0, S.Z)(_) ? (e = this.renderXboxImage(), I = !0) : null == (e = this.renderImage(_)) && (I = null != (e = this.renderGameImage(_)));
        let T = this.renderName(_), g = this.renderDetails(_), A = this.renderState(_, a), v = this.renderTimePlayed(_), O = this.renderChannelDetails(_), R = null != r ? r() : null, C = this.renderTimeBar(_), y = ![
                e,
                T,
                g,
                A,
                v,
                C,
                R
            ].some(e => null != e);
        return (0, o.jsxs)('div', {
            className: u()(this.getTypeClass('activity'), i),
            children: [
                this.renderHeader(y),
                (0, o.jsx)('div', {
                    className: u()(I ? Z.bodyAlignCenter : Z.bodyNormal, l && !f && !m && Z.wrap),
                    children: (0, o.jsxs)('div', {
                        className: Z.activityDetails,
                        children: [
                            e,
                            this.isStreamerOnTypeActivityFeed() ? null : (0, o.jsxs)(P.Z.Child, {
                                className: u()((0, b.l)(Z, 'content', I ? 'GameImage' : null != e ? 'Images' : 'NoImages', t)),
                                children: [
                                    (0, o.jsxs)(E.Clickable, {
                                        className: u()(d && Z.openGameProfile),
                                        onClick: d ? () => {
                                            (0, E.openModalLazy)(async () => {
                                                let {default: e} = await Promise.all([
                                                    n.e('30676'),
                                                    n.e('91026'),
                                                    n.e('7613'),
                                                    n.e('67336')
                                                ]).then(n.bind(n, 644941));
                                                return t => {
                                                    var n;
                                                    return (0, o.jsx)(e, {
                                                        applicationId: null !== (n = null == _ ? void 0 : _.application_id) && void 0 !== n ? n : '',
                                                        source: N.m1.UserProfile,
                                                        sourceUserId: s.id,
                                                        ...t
                                                    });
                                                };
                                            }), null == c || c();
                                        } : void 0,
                                        children: [
                                            T,
                                            g,
                                            A,
                                            v
                                        ]
                                    }),
                                    O,
                                    f || m ? null : C,
                                    p ? R : null
                                ]
                            }),
                            h ? (0, o.jsx)('div', {
                                className: Z.actions,
                                children: R
                            }) : null
                        ]
                    })
                }),
                f ? C : null,
                f || m ? R : null,
                (0, o.jsx)(q, { activity: _ })
            ]
        });
    }
    constructor(...e) {
        super(...e), Y(this, 'handleOpenSpotifyTrack', () => {
            let {
                activity: e,
                onOpenSpotifyTrack: t
            } = this.props;
            d()(null != e, 'Spotify activity was null'), null == t || t(e);
        }), Y(this, 'handleOpenSpotifyArtist', e => {
            let {
                activity: t,
                onOpenSpotifyArtist: n,
                user: r
            } = this.props;
            d()(null != t, 'Spotify activity was null'), null == n || n(t, r.id, e);
        }), Y(this, 'handleOpenSpotifyAlbum', () => {
            let {
                activity: e,
                onOpenSpotifyAlbum: t,
                user: n
            } = this.props;
            d()(null != e, 'Spotify activity was null'), null == t || t(e, n.id);
        });
    }
}
Y(Q, 'Types', r);
let X = e => {
    var t;
    let n = (0, v.ZP)({
        location: 'UserActivity',
        applicationId: null === (t = e.application) || void 0 === t ? void 0 : t.id
    });
    return (0, o.jsx)(Q, {
        ...e,
        shouldOpenGameProfile: n
    });
};
X.Types = r, t.Z = X;
