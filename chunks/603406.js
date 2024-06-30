i.d(t, {
    Z: function () {
        return m;
    }
}), i(47120);
var n = i(735250), a = i(470079), r = i(481060), o = i(626135), s = i(34674), l = i(190733), c = i(132871), d = i(147890), u = i(981631), h = i(689938), _ = i(341164), p = i(943935);
function m() {
    let e = (0, c.useApplicationDirectoryHistory)(e => e.guildId), [t, i] = a.useState(''), m = a.useCallback(() => {
            let i = (0, s.KQ)();
            o.default.track(u.rMx.APP_DIRECTORY_SEARCH_STARTED, {
                search_term: t,
                category: i.name,
                current_page: c.ApplicationDirectoryViews.HOME,
                category_id: i.id,
                guild_id: e
            }), (0, d.goSearch)({ query: t });
        }, [
            e,
            t
        ]);
    return (0, n.jsxs)('div', {
        className: _.container,
        children: [
            (0, n.jsxs)('div', {
                className: _.searchBarContainer,
                children: [
                    (0, n.jsx)(r.Heading, {
                        variant: 'display-lg',
                        className: _.heading,
                        children: h.Z.Messages.APP_DIRECTORY_HERO_HEADING
                    }),
                    (0, n.jsx)(l.Z, {
                        className: _.searchBar,
                        query: t,
                        onChange: i,
                        onSubmit: m,
                        canShowCta: !0
                    })
                ]
            }),
            (0, n.jsx)('img', {
                src: p,
                alt: '',
                className: _.rightImage
            })
        ]
    });
}
