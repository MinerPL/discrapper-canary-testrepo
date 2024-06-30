var n = s(735250);
s(470079);
var a = s(481060), i = s(230711), r = s(528084), o = s(973662);
t.Z = e => {
    let {
            tabs: t,
            settingsSection: s,
            parentSetting: l
        } = e, {
            viewableTabs: c,
            selectedTab: d
        } = (0, r.a)(t, l);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(a.TabBar, {
                className: o.tabBar,
                selectedItem: d.setting,
                onItemSelect: e => {
                    i.Z.setSection(s, e);
                },
                orientation: 'horizontal',
                type: 'top',
                look: 'brand',
                children: c.map(e => (0, n.jsx)(a.TabBar.Item, {
                    className: o.tab,
                    id: e.setting,
                    'aria-label': e.title,
                    children: e.title
                }, e.setting))
            }),
            (0, n.jsx)(a.TabBar.Panel, {
                id: d.setting,
                'aria-labelledby': d.title,
                className: o.tabBarPanel,
                children: (e => {
                    let t = e.component;
                    return 'function' == typeof t ? (0, n.jsx)(t, {}) : t;
                })(d)
            })
        ]
    });
};
