t.d(s, {
    Z: function () {
        return u;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(481060),
    l = t(114487),
    c = t(219039),
    d = t(979264),
    _ = t(308083),
    E = t(703422);
function u(e) {
    let { className: s, clanTag: t, clanBadge: i, onTagClick: u, guildId: I, guildName: T, guildIcon: S, guildIconSize: N, memberCount: C } = e,
        m = a.useRef(null),
        [A, O] = a.useState(!1);
    return (
        a.useEffect(() => {
            let e = m.current;
            null != e && null != e.offsetWidth && null != e.scrollWidth && O(e.offsetWidth < e.scrollWidth);
        }, []),
        (0, n.jsxs)('div', {
            className: r()(E.container, s),
            children: [
                (0, n.jsxs)('div', {
                    className: E.guildPrefixContainer,
                    children: [
                        (0, n.jsx)(l.b, {
                            guildId: I,
                            guildName: T,
                            guildIcon: S,
                            iconSize: N,
                            className: E.guildPrefixIcon,
                            animate: !1
                        }),
                        (0, n.jsxs)('div', {
                            className: E.details,
                            children: [
                                (0, n.jsx)(o.Tooltip, {
                                    text: T,
                                    color: o.Tooltip.Colors.PRIMARY,
                                    shouldShow: A,
                                    children: (e) =>
                                        (0, n.jsx)('span', {
                                            ref: m,
                                            ...e,
                                            className: E.guildName,
                                            children: T
                                        })
                                }),
                                null != C && (0, n.jsx)(c.Z, { count: C })
                            ]
                        })
                    ]
                }),
                (0, n.jsx)('div', {
                    className: E.tagContainer,
                    children: (0, n.jsx)(d.aG, {
                        guildId: I,
                        className: E.tag,
                        clanTag: t,
                        clanBadge: i,
                        onClick: u,
                        badgeSize: _.NC.SIZE_16,
                        textColor: 'interactive-normal',
                        textVariant: 'text-sm/semibold',
                        badgeClassName: E.badge
                    })
                })
            ]
        })
    );
}
