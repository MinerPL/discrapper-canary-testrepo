var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(481060),
    a = n(230711),
    o = n(528084),
    c = n(746943);
t.Z = (e) => {
    var t;
    let { tabs: n, settingsSection: s, parentSetting: d, panelClassName: u, defaultTabIndex: m, onTabChange: h } = e,
        { viewableTabs: g, filteredTab: p } = (0, o.a)(n, d),
        x = null != m ? n[m] : null,
        S = null !== (t = null != x ? x : p) && void 0 !== t ? t : g[0];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.TabBar, {
                className: c.tabBar,
                selectedItem: S.setting,
                onItemSelect: (e) => {
                    a.Z.setSection(s, e), null == h || h(e);
                },
                orientation: 'horizontal',
                type: 'top',
                look: 'brand',
                children: g.map((e) =>
                    (0, i.jsx)(
                        l.TabBar.Item,
                        {
                            className: c.tab,
                            id: e.setting,
                            'aria-label': e.title,
                            children: e.title
                        },
                        e.setting
                    )
                )
            }),
            (0, i.jsx)(l.TabBar.Panel, {
                id: S.setting,
                'aria-labelledby': S.title,
                className: r()(c.tabBarPanel, u),
                children: ((e) => {
                    let t = e.component;
                    return 'function' == typeof t ? (0, i.jsx)(t, {}) : t;
                })(S)
            })
        ]
    });
};
