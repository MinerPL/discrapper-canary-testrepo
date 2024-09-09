n.d(t, {
    J: function () {
        return w;
    },
    YN: function () {
        return A;
    },
    iZ: function () {
        return O;
    }
}),
    n(47120);
var l = n(735250),
    a = n(470079),
    i = n(392711),
    r = n.n(i),
    s = n(91192),
    o = n(876215),
    u = n(442837),
    c = n(481060),
    d = n(239091),
    h = n(607070),
    m = n(439170),
    x = n(594174),
    E = n(69259),
    _ = n(370370),
    p = n(107062),
    v = n(91140),
    T = n(227172),
    f = n(551228),
    g = n(678869),
    I = n(278399),
    C = n(886217),
    N = n(555672),
    P = n(644548),
    Z = n(335326),
    S = n(268010),
    M = n(797342),
    y = n(206583);
let A = 72;
function O(e) {
    return (null == e ? void 0 : e.type) === m.so.CONTENT_INVENTORY ? A : 0;
}
let R = (e) => {
        let { entry: t, ...n } = e;
        switch (t.content_type) {
            case o.s.PLAYED_GAME:
                return (0, l.jsx)(v.Z, {
                    ...n,
                    entry: t
                });
            case o.s.WATCHED_MEDIA:
                return (0, l.jsx)(Z.Z, {
                    ...n,
                    entry: t
                });
            case o.s.TOP_GAME:
                return (0, l.jsx)(N.ZP, {
                    ...n,
                    entry: t
                });
            case o.s.TOP_ARTIST:
                return (0, l.jsx)(I.ZP, {
                    ...n,
                    entry: t
                });
            case o.s.LISTENED_SESSION:
                return (0, l.jsx)(f.ZP, {
                    ...n,
                    entry: t
                });
            case o.s.LAUNCHED_ACTIVITY:
                return (0, l.jsx)(_.Z, {
                    ...n,
                    entry: t
                });
            default:
                return null;
        }
    },
    j = (e) => {
        let { requestId: t, closePopout: n, ...a } = e;
        return (0, l.jsx)(w, {
            onReaction: (e, l) => {
                (0, E.L)(e, {
                    entry: a.entry,
                    channelId: a.channel.id,
                    guildId: a.channel.guild_id,
                    requestId: t,
                    destinationChannelId: l.id,
                    destinationGuildId: l.guild_id
                }),
                    n();
            },
            closePopout: n,
            onVoiceChannelPreview: (e, n) => {
                (0, E.L)(y.xP.VOICE_CHANNEL_PREVIEWED, {
                    entry: a.entry,
                    channelId: a.channel.id,
                    guildId: a.channel.guild_id,
                    requestId: t,
                    destinationChannelId: e.id,
                    destinationGuildId: e.guild_id,
                    richPresenceName: n
                });
            },
            ...a
        });
    },
    w = (e) => {
        let { entry: t, ...n } = e;
        switch (t.content_type) {
            case o.s.PLAYED_GAME:
                return (0, l.jsx)(T.Z, {
                    ...n,
                    entry: t
                });
            case o.s.WATCHED_MEDIA:
                return (0, l.jsx)(S.Z, {
                    ...n,
                    entry: t
                });
            case o.s.TOP_GAME:
                return (0, l.jsx)(P.Z, {
                    ...n,
                    entry: t
                });
            case o.s.TOP_ARTIST:
                return (0, l.jsx)(C.Z, {
                    ...n,
                    entry: t
                });
            case o.s.LISTENED_SESSION:
                return (0, l.jsx)(g.Z, {
                    ...n,
                    entry: t
                });
            case o.s.LAUNCHED_ACTIVITY:
                return (0, l.jsx)(p.ZP, {
                    ...n,
                    entry: t
                });
            default:
                return null;
        }
    };
t.ZP = a.memo((e) => {
    var t;
    let { index: i, ...o } = e,
        [m, _] = a.useState('default'),
        p = (0, s.JA)(''.concat(i)),
        v = null === (t = x.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff(),
        { isRich: T, appName: f } = (0, M.n)(o.entry),
        g = {
            entry: o.entry,
            channelId: o.channel.id,
            guildId: o.channel.guild_id,
            requestId: o.requestId,
            richPresenceName: T ? f : void 0
        },
        I = a.useRef(!1),
        [C, N] = a.useState(!1),
        [P, Z] = a.useState(!1),
        S = (0, u.e7)([h.Z], () => h.Z.keyboardModeEnabled);
    a.useEffect(() => {
        C && S && Z(!0);
    }, [C, S]);
    let A = a.useCallback(
            (e) => {
                if (!!v)
                    (0, d.jW)(e, async () => {
                        let { default: e } = await n.e('153').then(n.bind(n, 330150));
                        return () =>
                            (0, l.jsx)(e, {
                                entry: o.entry,
                                requestId: o.requestId
                            });
                    });
            },
            [o, v]
        ),
        O = a.useCallback(() => {
            _(String(Date.now()));
        }, []),
        w = a.useCallback(
            r().throttle(
                (e) => {
                    (0, E.L)(y.xP.CARD_POPOUT_OPEN, e);
                },
                2000,
                {
                    leading: !0,
                    trailing: !1
                }
            ),
            []
        ),
        L = () => {
            (I.current = !1),
                setTimeout(() => {
                    !I.current && (N(!1), Z(S));
                }, 100);
        };
    return (0, l.jsx)('div', {
        onMouseEnter: () => {
            (I.current = !0),
                setTimeout(() => {
                    I.current && N(!0), w(g);
                }, 100);
        },
        onMouseLeave: L,
        children: (0, l.jsx)(c.Popout, {
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, l.jsx)(j, {
                    closePopout: t,
                    updatePopoutPosition: O,
                    ...o
                });
            },
            position: 'left',
            shouldShow: C,
            positionKey: m,
            onRequestOpen: () => w(g),
            onRequestClose: () => {
                P && L();
            },
            spacing: 8,
            children: (e, t) => {
                let { isShown: n } = t;
                return (0, l.jsx)(c.Clickable, {
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
                        !C && N(!0);
                    },
                    onContextMenu: A,
                    children: (0, l.jsx)(R, {
                        ...o,
                        selected: n,
                        hovered: I.current
                    })
                });
            }
        })
    });
});
