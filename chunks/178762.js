n.d(t, {
    YN: function () {
        return j;
    },
    iZ: function () {
        return L;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(392711),
    l = n.n(s),
    r = n(91192),
    o = n(876215),
    c = n(442837),
    u = n(481060),
    d = n(239091),
    h = n(607070),
    m = n(439170),
    p = n(594174),
    _ = n(687694),
    f = n(69259),
    E = n(370370),
    g = n(107062),
    C = n(91140),
    I = n(227172),
    x = n(551228),
    T = n(678869),
    N = n(278399),
    v = n(886217),
    S = n(555672),
    Z = n(644548),
    A = n(335326),
    M = n(268010),
    b = n(797342),
    R = n(206583);
let j = 72;
function L(e) {
    return (null == e ? void 0 : e.type) === m.so.CONTENT_INVENTORY ? j : 0;
}
let P = l().throttle(
        (e) => {
            (0, f.L)(R.xP.CARD_HOVER, e);
        },
        5000,
        {
            leading: !0,
            trailing: !1
        }
    ),
    O = (e) => {
        let { entry: t, ...n } = e;
        switch (t.content_type) {
            case o.s.PLAYED_GAME:
                return (0, i.jsx)(C.Z, {
                    ...n,
                    entry: t
                });
            case o.s.WATCHED_MEDIA:
                return (0, i.jsx)(A.ZP, {
                    ...n,
                    entry: t
                });
            case o.s.TOP_GAME:
                return (0, i.jsx)(S.ZP, {
                    ...n,
                    entry: t
                });
            case o.s.TOP_ARTIST:
                return (0, i.jsx)(N.ZP, {
                    ...n,
                    entry: t
                });
            case o.s.LISTENED_SESSION:
                return (0, i.jsx)(x.ZP, {
                    ...n,
                    entry: t
                });
            case o.s.LAUNCHED_ACTIVITY:
                return (0, i.jsx)(E.Z, {
                    ...n,
                    entry: t
                });
            default:
                return null;
        }
    },
    y = (e) => {
        let { entry: t, ...n } = e;
        switch (t.content_type) {
            case o.s.PLAYED_GAME:
                return (0, i.jsx)(I.Z, {
                    ...n,
                    entry: t
                });
            case o.s.WATCHED_MEDIA:
                return (0, i.jsx)(M.Z, {
                    ...n,
                    entry: t
                });
            case o.s.TOP_GAME:
                return (0, i.jsx)(Z.Z, {
                    ...n,
                    entry: t
                });
            case o.s.TOP_ARTIST:
                return (0, i.jsx)(v.Z, {
                    ...n,
                    entry: t
                });
            case o.s.LISTENED_SESSION:
                return (0, i.jsx)(T.Z, {
                    ...n,
                    entry: t
                });
            case o.s.LAUNCHED_ACTIVITY:
                return (0, i.jsx)(g.ZP, {
                    ...n,
                    entry: t
                });
            default:
                return null;
        }
    };
t.ZP = a.memo((e) => {
    var t;
    let { index: s, ...l } = e,
        [o, m] = a.useState('default'),
        E = (0, r.JA)(''.concat(s)),
        g = null === (t = p.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff(),
        { isRich: C, appName: I } = (0, b.n)(l.entry),
        x = {
            entry: l.entry,
            channelId: l.channel.id,
            guildId: l.channel.guild_id,
            requestId: l.requestId,
            richPresenceName: C ? I : void 0
        },
        { openOnHover: T } = (0, _.C)({ location: 'MemberListContentRow' }),
        N = a.useRef(!1),
        [v, S] = a.useState(!1),
        [Z, A] = a.useState(!1),
        [M, j] = a.useState(!1),
        L = (0, c.e7)([h.Z], () => h.Z.keyboardModeEnabled);
    a.useEffect(() => {
        v && L && j(!0);
    }, [v, L]);
    let D = a.useCallback(
            (e) => {
                if (!!g)
                    (0, d.jW)(e, async () => {
                        let { default: e } = await n.e('153').then(n.bind(n, 330150));
                        return () =>
                            (0, i.jsx)(e, {
                                entry: l.entry,
                                requestId: l.requestId
                            });
                    });
            },
            [l, g]
        ),
        k = a.useCallback(() => {
            m(String(Date.now()));
        }, []),
        U = () => {
            (N.current = !1),
                setTimeout(() => {
                    !N.current && (S(!1), j(L));
                }, 100);
        };
    return (0, i.jsx)('div', {
        onMouseEnter: () => {
            (N.current = !0),
                setTimeout(() => {
                    N.current && S(!0), T && (0, f.L)(R.xP.CARD_CLICK, x);
                }, 100);
        },
        onMouseLeave: U,
        children: (0, i.jsx)(u.Popout, {
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, i.jsx)(y, {
                    closePopout: t,
                    updatePopoutPosition: k,
                    ...l
                });
            },
            position: 'left',
            shouldShow: T ? v : Z,
            positionKey: o,
            onRequestOpen: () => (0, f.L)(R.xP.CARD_CLICK, x),
            onRequestClose: () => {
                M && U(), !T && (S(!1), A(!1));
            },
            spacing: 8,
            children: (e, t) => {
                let { isShown: n } = t;
                return (0, i.jsx)(u.Clickable, {
                    ...e,
                    ...E,
                    focusProps: {
                        offset: {
                            top: 4,
                            bottom: 4,
                            left: 4,
                            right: 4
                        }
                    },
                    onClick: () => {
                        T && !v && S(!0), !T && A((e) => !e);
                    },
                    onMouseEnter: () => {
                        P(x);
                    },
                    onContextMenu: D,
                    children: (0, i.jsx)(O, {
                        ...l,
                        selected: n,
                        hovered: N.current
                    })
                });
            }
        })
    });
});
