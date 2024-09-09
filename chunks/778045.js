n.d(t, {
    P: function () {
        return m;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(97028),
    l = n(481060),
    u = n(353093),
    c = n(686546),
    d = n(852786),
    _ = n(689938),
    E = n(1287);
function f(e) {
    let { games: t, gameActivity: n } = e;
    return (0, r.jsx)('div', {
        className: E.tooltipGames,
        children: t.map((e) => {
            let t = e.getIconURL(24);
            if (null == t) return null;
            let i = null == n ? void 0 : n[e.id],
                a = (null == i ? void 0 : i.level) === o.m.HIGH,
                s = (0, r.jsxs)(l.Text, {
                    variant: 'text-xs/semibold',
                    color: 'interactive-active',
                    className: E.tooltipGameName,
                    children: [
                        e.name,
                        a &&
                            (0, r.jsx)(l.Text, {
                                tag: 'div',
                                variant: 'text-xxs/normal',
                                color: 'text-muted',
                                children: _.Z.Messages.CLAN_GAMEPLAY_ACTIVITY_HIGH
                            })
                    ]
                });
            return (0, r.jsxs)(
                'div',
                {
                    className: E.tooltipGame,
                    children: [
                        (0, r.jsx)('div', {
                            className: E.tooltipGameImageContainer,
                            children: (0, r.jsx)('img', {
                                src: t,
                                alt: e.name,
                                className: E.tooltipGameImage
                            })
                        }),
                        s
                    ]
                },
                e.id
            );
        })
    });
}
function h(e) {
    var t;
    let { game: n, gameActivity: i, highlighted: a = !1 } = e,
        u = n.getIconURL(24);
    if (null == u) return null;
    let d = (null == i ? void 0 : null === (t = i[n.id]) || void 0 === t ? void 0 : t.level) === o.m.HIGH,
        f = (0, r.jsxs)(l.Text, {
            variant: 'text-sm/semibold',
            color: 'interactive-active',
            className: E.tooltipText,
            children: [
                n.name,
                d &&
                    (0, r.jsx)(l.Text, {
                        tag: 'div',
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        children: _.Z.Messages.CLAN_GAMEPLAY_ACTIVITY_HIGH
                    })
            ]
        });
    return (0, r.jsx)(l.Tooltip, {
        text: f,
        position: 'bottom',
        'aria-label': n.name,
        children: (e) =>
            (0, r.jsxs)('div', {
                ...e,
                className: s()(E.gameImageContainer, a && E.highlighted),
                children: [
                    (0, r.jsx)('img', {
                        src: u,
                        alt: n.name,
                        className: E.gameImage
                    }),
                    d &&
                        (0, r.jsx)(c.ZP, {
                            mask: c.QS.GAMEPLAY_HIGH_ACTIVITY_ICON,
                            width: 14,
                            height: 14,
                            className: E.gameActivityLevel,
                            children: (0, r.jsx)('div', {
                                className: E.gameActivityLevelInner,
                                children: (0, r.jsx)(l.FireIcon, {
                                    color: l.tokens.unsafe_rawColors.ORANGE_330.css,
                                    width: 10,
                                    height: 10,
                                    size: 'custom'
                                })
                            })
                        })
                ]
            })
    });
}
let p = (e) => (t, n) => {
    var r, i, a, s;
    let o = null !== (a = null == e ? void 0 : null === (r = e[t.id]) || void 0 === r ? void 0 : r.score) && void 0 !== a ? a : 0,
        l = null !== (s = null == e ? void 0 : null === (i = e[n.id]) || void 0 === i ? void 0 : i.score) && void 0 !== s ? s : 0;
    return o !== l ? l - o : 0;
};
function m(e) {
    let { delayMs: t = 0 } = e;
    return (0, r.jsx)('div', {
        className: E.gameImageContainer,
        children: (0, r.jsx)(d.Z, {
            className: E.gameImage,
            width: 24,
            height: 24,
            delayMs: t
        })
    });
}
t.Z = i.memo(function (e) {
    let { games: t, prioritizedGameIds: n = new Set(), gameActivity: a = {} } = e,
        s = i.useMemo(() => {
            let e = t.filter((e) => null != e && null != e.icon),
                r = e.filter((e) => !n.has(e.id)).sort(p(a));
            return [...e.filter((e) => n.has(e.id)).sort(p(a)), ...r];
        }, [a, t, n]),
        o = s.slice(0, 3),
        c = i.useMemo(() => {
            var e;
            let t = s[3];
            if (null == t) return null;
            let n = t.getIconURL(24);
            if (null == n) return null;
            if (s.length <= 4)
                return (0, r.jsx)(h, {
                    game: t,
                    gameActivity: a
                });
            let i = s.slice(3);
            return (0, r.jsx)(l.Tooltip, {
                'aria-label': null !== (e = (0, u.f6)(i.map((e) => e.name))) && void 0 !== e ? e : '',
                text: (0, r.jsx)(f, {
                    games: i,
                    gameActivity: a
                }),
                position: 'bottom',
                children: (e) =>
                    (0, r.jsxs)('div', {
                        ...e,
                        className: E.gameImageContainer,
                        children: [
                            (0, r.jsx)('img', {
                                src: n,
                                alt: t.name,
                                className: E.gameImage
                            }),
                            (0, r.jsx)('div', {
                                className: E.extraGameCount,
                                children: (0, r.jsx)(l.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'always-white',
                                    children: '+'.concat(i.length)
                                })
                            })
                        ]
                    })
            });
        }, [a, s]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            o.map((e) =>
                (0, r.jsx)(
                    h,
                    {
                        game: e,
                        gameActivity: a,
                        highlighted: n.has(e.id)
                    },
                    e.id
                )
            ),
            c
        ]
    });
});
