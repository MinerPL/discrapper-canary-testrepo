var n = t(735250);
t(470079);
var a = t(120356),
    i = t.n(a),
    r = t(481060),
    o = t(230711),
    l = t(528084),
    c = t(313482);
s.Z = (e) => {
    let { tabs: s, settingsSection: t, parentSetting: a, panelClassName: d } = e,
        { viewableTabs: _, selectedTab: u } = (0, l.a)(s, a);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(r.TabBar, {
                className: c.tabBar,
                selectedItem: u.setting,
                onItemSelect: (e) => {
                    o.Z.setSection(t, e);
                },
                orientation: 'horizontal',
                type: 'top',
                look: 'brand',
                children: _.map((e) =>
                    (0, n.jsx)(
                        r.TabBar.Item,
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
            (0, n.jsx)(r.TabBar.Panel, {
                id: u.setting,
                'aria-labelledby': u.title,
                className: i()(c.tabBarPanel, d),
                children: ((e) => {
                    let s = e.component;
                    return 'function' == typeof s ? (0, n.jsx)(s, {}) : s;
                })(u)
            })
        ]
    });
};
