var i = n(735250);
n(470079);
var a = n(481060),
    s = n(371043);
t.Z = function (e) {
    let { tabs: t, onTabSelect: n, selectedTab: r, className: l } = e;
    return (0, i.jsx)(a.TabBar, {
        type: 'top-pill',
        selectedItem: r,
        onItemSelect: n,
        className: l,
        children: t.map((e, t) => {
            let { id: n, label: r } = e;
            return (0, i.jsx)(
                a.TabBar.Item,
                {
                    id: n,
                    className: 0 === t ? s.firstChildSpacingFix : void 0,
                    children: r
                },
                n
            );
        })
    });
};
