t.d(n, {
    I: function () {
        return Z;
    },
    Z: function () {
        return v;
    }
}), t(47120);
var l = t(735250), a = t(470079), i = t(120356), r = t.n(i), s = t(442837), o = t(481060), c = t(325708), d = t(213557), u = t(433355), h = t(324067), m = t(984933), _ = t(430824), f = t(496675), C = t(626135), p = t(216306), x = t(775028), g = t(981631), N = t(176505), I = t(689938), b = t(803181), E = t(175803);
function Z(e) {
    let {channelId: n} = e;
    return (0, l.jsx)(c.Z, {
        sidebarType: c.y.ThreadSidebar,
        maxWidth: 600,
        children: (0, l.jsx)(d.Z, {
            channelId: n,
            baseChannelId: N.oC.CHANNEL_BROWSER
        })
    });
}
function v(e) {
    let {guildId: n} = e, [i, c] = a.useState(''), d = (0, s.e7)([_.Z], () => _.Z.getGuild(n)), Z = (0, s.e7)([m.ZP], () => m.ZP.getChannels(n)), v = (0, s.e7)([h.Z], () => h.Z.getCategories(n)), j = (0, p.Fo)(n, v, Z, i), T = (0, s.e7)([f.Z], () => f.Z.canWithPartialContext(g.Plq.MANAGE_CHANNELS, { guildId: n })), S = (0, s.e7)([u.ZP], () => null != u.ZP.getCurrentSidebarChannelId(N.oC.CHANNEL_BROWSER)), R = a.useCallback(() => c(''), [c]), A = a.useCallback(() => {
            (0, o.openModalLazy)(async () => {
                let {default: e} = await Promise.all([
                    t.e('45094'),
                    t.e('9458')
                ]).then(t.bind(t, 218613));
                return t => (0, l.jsx)(e, {
                    ...t,
                    channelType: null,
                    guildId: n
                });
            });
        }, [n]);
    return null == d ? null : (0, l.jsx)(l.Fragment, {
        children: (0, l.jsx)('div', {
            className: r()(E.chat, b.container),
            children: (0, l.jsxs)('div', {
                className: r()(b.pageBody),
                children: [
                    (0, l.jsxs)('div', {
                        className: b.header,
                        children: [
                            (0, l.jsx)(o.SearchBar, {
                                className: b.search,
                                size: o.SearchBar.Sizes.MEDIUM,
                                query: i,
                                onChange: e => {
                                    '' === i && '' !== e && C.default.track(g.rMx.SEARCH_STARTED, { search_type: 'channel browser' }), c(e.toLowerCase());
                                },
                                onClear: R,
                                placeholder: I.Z.Messages.CHANNEL_BROWSER_SEARCH_PLACEHOLDER
                            }),
                            T ? (0, l.jsxs)(o.Button, {
                                className: b.createButton,
                                innerClassName: b.createButtonInner,
                                onClick: A,
                                children: [
                                    (0, l.jsx)(o.PlusSmallIcon, {
                                        size: 'sm',
                                        color: 'currentColor',
                                        className: b.createIcon
                                    }),
                                    I.Z.Messages.CREATE
                                ]
                            }) : null
                        ]
                    }),
                    (0, l.jsx)(x.Z, {
                        className: b.browser,
                        channels: Z,
                        categories: j,
                        guild: d,
                        hasSidebar: S
                    })
                ]
            })
        })
    });
}
