n.d(t, {
    f: function () {
        return o;
    }
});
var i = n(735250);
n(470079);
var s = n(920906), a = n(481060), r = n(689938), l = n(801458);
function o(e) {
    var t;
    let {
            icon: n,
            title: o,
            selectedTab: c,
            tabs: d,
            onTabSelect: u,
            searchQuery: _,
            onSearch: E,
            onSearchClear: h,
            scrollManager: I
        } = e, m = r.Z.Messages.GLOBAL_DISCOVERY_SEARCH_PLACEHOLDER.format({ title: o });
    return (0, i.jsx)('div', {
        className: l.container,
        children: (0, i.jsxs)('div', {
            className: l.innerContainer,
            children: [
                (0, i.jsx)(s.animated.div, {
                    className: l.backdrop,
                    style: {
                        opacity: null == I ? void 0 : null === (t = I.current) || void 0 === t ? void 0 : t.top.to([
                            0,
                            100
                        ], [
                            0,
                            1
                        ])
                    }
                }),
                (0, i.jsx)('div', {
                    className: l.icon,
                    children: n
                }),
                (0, i.jsx)(a.TabBar, {
                    type: 'top',
                    look: 'brand',
                    selectedItem: c,
                    onItemSelect: u,
                    className: l.tabs,
                    children: d.map(e => (0, i.jsx)(a.TabBar.Item, {
                        id: e,
                        children: e.label
                    }, e.id))
                }),
                (0, i.jsx)('div', {
                    className: l.search,
                    children: (0, i.jsx)(a.SearchBar, {
                        placeholder: m,
                        query: _,
                        onChange: E,
                        onClear: h
                    })
                })
            ]
        })
    });
}
