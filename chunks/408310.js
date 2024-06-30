var i = n(735250);
n(470079);
var a = n(481060), l = n(671533), s = n(400251), r = n(689938), o = n(509616), c = n(573929), u = n(176480);
t.Z = e => {
    let t, {
            searchQuery: n,
            setSearchQuery: d,
            mostRecentQuery: h,
            handleClearSearch: p,
            handleSearchKeyPress: m,
            handleCreateOrAddGuild: _,
            searchResults: f,
            searchFetching: E
        } = e;
    if (E)
        t = (0, i.jsx)('div', {
            className: o.pageContainer,
            children: (0, i.jsx)(a.Spinner, { className: o.spinner })
        });
    else if (0 === f.length) {
        let e = null != _ ? r.Z.Messages.DIRECTORY_SEARCH_NO_RESULTS_SUBTITLE.format({
            addServerHook: function (e, t) {
                return (0, i.jsx)(a.Anchor, {
                    onClick: _,
                    children: e
                }, t);
            }
        }) : r.Z.Messages.DIRECTORY_SEARCH_NO_RESULTS_NO_ADD;
        t = (0, i.jsxs)('div', {
            className: c.emptySearchWrapper,
            children: [
                (0, i.jsx)('img', {
                    className: c.emptySearchImage,
                    alt: '',
                    src: u
                }),
                (0, i.jsx)(a.Heading, {
                    variant: 'heading-xl/semibold',
                    color: 'header-primary',
                    className: c.emptySearchTitle,
                    children: r.Z.Messages.DIRECTORY_SEARCH_NO_RESULTS_TITLE
                }),
                (0, i.jsx)(a.Text, {
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    className: c.emptySearchSubtitle,
                    children: e
                })
            ]
        });
    } else
        t = (0, i.jsx)('div', {
            className: o.cardsContainer,
            children: f.map(e => (0, i.jsx)(s.Z, { entry: e }, e.guildId))
        });
    return (0, i.jsx)('div', {
        className: o.pageContainer,
        children: (0, i.jsxs)(a.ScrollerAuto, {
            className: o.scroller,
            children: [
                (0, i.jsxs)('div', {
                    className: c.searchHeader,
                    children: [
                        (0, i.jsxs)('div', {
                            className: c.headerTitleWrapper,
                            children: [
                                (0, i.jsx)(a.Clickable, {
                                    onClick: p,
                                    className: c.arrow,
                                    children: (0, i.jsx)(l.Z, { direction: l.Z.Directions.LEFT })
                                }),
                                (0, i.jsx)(a.Heading, {
                                    variant: 'heading-xl/semibold',
                                    className: c.searchPageTitle,
                                    children: r.Z.Messages.DIRECTORY_SEARCH_RESULTS_HEADER.format({
                                        numResults: f.length,
                                        query: h
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)(a.SearchBox, {
                            searchTerm: n,
                            className: c.searchPageBox,
                            inputClassName: c.searchPageInput,
                            label: r.Z.Messages.DIRECTORY_SEARCH_PLACEHOLDER,
                            placeholder: r.Z.Messages.DIRECTORY_SEARCH_PLACEHOLDER,
                            onChange: d,
                            onClear: p,
                            onKeyPress: m,
                            cta: null != n && n.length > 0 ? r.Z.Messages.GUILD_DISCOVERY_SEARCH_ENTER_CTA : null
                        })
                    ]
                }),
                t
            ]
        })
    });
};
