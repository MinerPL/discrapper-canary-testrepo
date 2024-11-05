n.d(t, {
    J: function () {
        return H;
    },
    YN: function () {
        return k;
    },
    iZ: function () {
        return w;
    }
}),
    n(47120);
var l = n(200651),
    a = n(192379),
    i = n(392711),
    r = n.n(i),
    o = n(91192),
    s = n(876215),
    c = n(442837),
    u = n(481060),
    d = n(239091),
    m = n(607070),
    x = n(100527),
    h = n(704041),
    p = n(475676),
    C = n(439170),
    v = n(594174),
    g = n(69259),
    f = n(370370),
    I = n(107062),
    j = n(91140),
    Z = n(227172),
    P = n(551228),
    L = n(678869),
    T = n(278399),
    y = n(886217),
    N = n(555672),
    _ = n(644548),
    E = n(335326),
    S = n(268010),
    A = n(797342),
    M = n(206583);
let k = 72;
function w(e) {
    return (null == e ? void 0 : e.type) === C.so.CONTENT_INVENTORY ? k : 0;
}
let R = (e) => {
        let { entry: t, ...n } = e;
        switch (t.content_type) {
            case s.s.PLAYED_GAME:
                return (0, l.jsx)(j.Z, {
                    ...n,
                    entry: t
                });
            case s.s.WATCHED_MEDIA:
                return (0, l.jsx)(E.Z, {
                    ...n,
                    entry: t
                });
            case s.s.TOP_GAME:
                return (0, l.jsx)(N.ZP, {
                    ...n,
                    entry: t
                });
            case s.s.TOP_ARTIST:
                return (0, l.jsx)(T.ZP, {
                    ...n,
                    entry: t
                });
            case s.s.LISTENED_SESSION:
                return (0, l.jsx)(P.ZP, {
                    ...n,
                    entry: t
                });
            case s.s.LAUNCHED_ACTIVITY:
                return (0, l.jsx)(f.Z, {
                    ...n,
                    entry: t
                });
            case s.s.LEADERBOARD:
                return (0, l.jsx)(p.Z, {
                    ...n,
                    entry: t
                });
            default:
                return null;
        }
    },
    b = (e) => {
        let { closePopout: t, ...n } = e;
        return (0, l.jsx)(H, {
            onReaction: (e, l) => {
                n.trackRankingItemInteraction(e, {
                    destinationChannelId: l.id,
                    destinationGuildId: l.guild_id
                }),
                    t();
            },
            closePopout: t,
            onVoiceChannelPreview: (e) => {
                n.trackRankingItemInteraction(M.xP.VOICE_CHANNEL_PREVIEWED, {
                    destinationChannelId: e.id,
                    destinationGuildId: e.guild_id
                });
            },
            ...n
        });
    },
    H = (e) => {
        let { entry: t, ...n } = e;
        switch (t.content_type) {
            case s.s.PLAYED_GAME:
                return (0, l.jsx)(Z.Z, {
                    ...n,
                    entry: t
                });
            case s.s.WATCHED_MEDIA:
                return (0, l.jsx)(S.Z, {
                    ...n,
                    entry: t
                });
            case s.s.TOP_GAME:
                return (0, l.jsx)(_.Z, {
                    ...n,
                    entry: t
                });
            case s.s.TOP_ARTIST:
                return (0, l.jsx)(y.Z, {
                    ...n,
                    entry: t
                });
            case s.s.LISTENED_SESSION:
                return (0, l.jsx)(L.Z, {
                    ...n,
                    entry: t
                });
            case s.s.LAUNCHED_ACTIVITY:
                return (0, l.jsx)(I.ZP, {
                    ...n,
                    entry: t
                });
            case s.s.LEADERBOARD:
                var a;
                return (null === (a = n.channel) || void 0 === a ? void 0 : a.guild_id) != null
                    ? (0, l.jsx)(h.Z, {
                          guildId: n.channel.guild_id,
                          source: x.Z.MEMBER_LIST
                      })
                    : null;
            default:
                return null;
        }
    };
t.ZP = a.memo((e) => {
    var t;
    let { index: i, ...s } = e,
        [x, h] = a.useState('default'),
        p = (0, o.JA)(''.concat(i)),
        C = null === (t = v.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff(),
        { isRich: f, appName: I } = (0, A.n)(s.entry),
        j = a.useMemo(
            () => ({
                entry: s.entry,
                channelId: s.channel.id,
                guildId: s.channel.guild_id,
                requestId: s.requestId,
                richPresenceName: f ? I : void 0
            }),
            [I, s.channel.guild_id, s.channel.id, s.entry, s.requestId, f]
        ),
        Z = a.useRef(!1),
        [P, L] = a.useState(!1),
        [T, y] = a.useState(!1),
        N = (0, c.e7)([m.Z], () => m.Z.keyboardModeEnabled);
    a.useEffect(() => {
        P && N && y(!0);
    }, [P, N]);
    let _ = a.useCallback(
            (e) => {
                if (!!C)
                    (0, d.jW)(e, async () => {
                        let { default: e } = await n.e('153').then(n.bind(n, 330150));
                        return () =>
                            (0, l.jsx)(e, {
                                entry: s.entry,
                                requestId: s.requestId
                            });
                    });
            },
            [s, C]
        ),
        E = a.useCallback(() => {
            h(String(Date.now()));
        }, []),
        S = a.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                (0, g.L)(e, {
                    ...j,
                    ...t
                });
            },
            [j]
        ),
        k = a.useCallback(
            r().throttle(
                (e) => {
                    (0, g.L)(M.xP.CARD_POPOUT_OPEN, e);
                },
                2000,
                {
                    leading: !0,
                    trailing: !1
                }
            ),
            []
        ),
        w = () => {
            (Z.current = !1),
                setTimeout(() => {
                    !Z.current && (L(!1), y(N));
                }, 100);
        };
    return (0, l.jsx)('div', {
        onMouseEnter: () => {
            (Z.current = !0),
                setTimeout(() => {
                    Z.current && L(!0), k(j);
                }, 100);
        },
        onMouseLeave: w,
        children: (0, l.jsx)(u.Popout, {
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, l.jsx)(b, {
                    closePopout: t,
                    updatePopoutPosition: E,
                    trackRankingItemInteraction: S,
                    ...s
                });
            },
            position: 'left',
            shouldShow: P,
            positionKey: x,
            onRequestOpen: () => k(j),
            onRequestClose: () => {
                T && w();
            },
            spacing: 8,
            children: (e, t) => {
                let { isShown: n } = t;
                return (0, l.jsx)(u.Clickable, {
                    ...e,
                    ...p,
                    focusProps: {
                        offset: {
                            top: 4,
                            bottom: 4,
                            left: 4,
                            right: 4
                        }
                    },
                    onClick: () => {
                        !P && L(!0);
                    },
                    onContextMenu: _,
                    children: (0, l.jsx)(R, {
                        ...s,
                        selected: n,
                        hovered: Z.current
                    })
                });
            }
        })
    });
});
