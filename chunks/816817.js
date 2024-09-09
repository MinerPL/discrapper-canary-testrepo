n(47120);
var s = n(735250),
    a = n(470079),
    i = n(120356),
    r = n.n(i),
    l = n(780384),
    o = n(481060),
    c = n(410030),
    d = n(686546),
    u = n(372769),
    _ = n(134432),
    I = n(768581),
    E = n(624138),
    T = n(689938),
    m = n(385705),
    N = n(129512),
    S = n(330065);
let h = [16, 16, 14, 14, 12, 10, 8];
t.Z = function (e) {
    var t, n;
    let { guild: i, disabled: g, small: C, loading: x = !1, description: p, memberCount: R, presenceCount: f, className: L } = e,
        O = (0, c.ZP)(),
        [A, M] = a.useState(!1);
    if (null == i || x)
        return (0, s.jsx)('div', {
            className: r()(L, m.card, m.cardPlaceholder, {
                [m.cardSmall]: C,
                [m.cardDisabled]: g
            })
        });
    let { name: D } = i,
        v =
            null != i.discoverySplash && /^data:/.test(i.discoverySplash)
                ? i.discoverySplash
                : I.ZP.getGuildDiscoverySplashURL({
                      id: i.id,
                      splash: i.discoverySplash,
                      size: 240 * (0, _.x_)()
                  }),
        j = (0, l.wj)(O) ? N : S,
        Z =
            null !==
                (t = I.ZP.getGuildIconURL({
                    id: i.id,
                    icon: i.icon,
                    size: 40
                })) && void 0 !== t
                ? t
                : void 0,
        b = null != i.description ? i.description : p,
        U = null != R ? R : null == i ? void 0 : i.memberCount,
        G = null != f ? f : null == i ? void 0 : i.presenceCount,
        P = null;
    if (null != Z)
        P = (0, s.jsx)('img', {
            src: Z,
            alt: '',
            className: m.avatar
        });
    else {
        let e = (0, E.Zg)(i.name);
        P = (0, s.jsx)('div', {
            className: m.defaultIcon,
            children: (0, s.jsx)(o.Text, {
                className: m.acronym,
                style: { fontSize: null !== (n = h[e.length]) && void 0 !== n ? n : h[h.length - 1] },
                variant: 'text-sm/normal',
                children: e
            })
        });
    }
    return (0, s.jsxs)('div', {
        className: r()(L, m.card, {
            [m.cardSmall]: C,
            [m.cardDisabled]: g,
            [m.splashLoaded]: A
        }),
        children: [
            (0, s.jsxs)('div', {
                className: m.cardHeader,
                children: [
                    (0, s.jsx)('div', {
                        className: m.splash,
                        children: (0, s.jsx)('img', {
                            src: null != v ? v : j,
                            alt: '',
                            className: m.splashImage,
                            onLoad: () => M(!0)
                        })
                    }),
                    (0, s.jsx)('div', {
                        className: m.guildIcon,
                        children: (0, s.jsx)(d.ZP, {
                            mask: d.ZP.Masks.SQUIRCLE,
                            width: 48,
                            height: 48,
                            children: (0, s.jsx)('div', {
                                className: m.iconMask,
                                children: (0, s.jsx)(d.ZP, {
                                    mask: d.ZP.Masks.SQUIRCLE,
                                    width: 40,
                                    height: 40,
                                    children: null != P ? P : null
                                })
                            })
                        })
                    })
                ]
            }),
            (0, s.jsxs)('div', {
                className: m.guildInfo,
                children: [
                    (0, s.jsxs)('div', {
                        className: m.title,
                        children: [
                            (0, s.jsx)(u.Z, {
                                className: m.verifiedIcon,
                                guild: i,
                                tooltipColor: o.Tooltip.Colors.PRIMARY
                            }),
                            (0, s.jsx)(o.Text, {
                                className: m.guildName,
                                variant: 'text-md/normal',
                                children: (0, s.jsx)('span', { children: D })
                            })
                        ]
                    }),
                    (0, s.jsx)(o.Text, {
                        className: m.description,
                        variant: 'text-sm/normal',
                        children: (0, s.jsx)('span', { children: b })
                    }),
                    (0, s.jsxs)('div', {
                        className: m.memberInfo,
                        children: [
                            null != G &&
                                (0, s.jsxs)('div', {
                                    className: m.memberCount,
                                    children: [
                                        (0, s.jsx)('div', { className: m.dotOnline }),
                                        (0, s.jsx)(o.Text, {
                                            variant: 'text-xs/normal',
                                            children: C ? T.Z.Messages.NUMBERS_ONLY.format({ count: G }) : T.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({ membersOnline: G })
                                        })
                                    ]
                                }),
                            null != U &&
                                (0, s.jsxs)('div', {
                                    className: m.memberCount,
                                    children: [
                                        (0, s.jsx)('div', { className: m.dotOffline }),
                                        (0, s.jsx)(o.Text, {
                                            variant: 'text-xs/normal',
                                            children: C ? T.Z.Messages.NUMBERS_ONLY.format({ count: U }) : T.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: U })
                                        })
                                    ]
                                })
                        ]
                    })
                ]
            })
        ]
    });
};
