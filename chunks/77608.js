n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(735250), s = n(470079), a = n(120356), r = n.n(a), l = n(481060), o = n(113434), c = n(689938), d = n(770884);
function u(e) {
    let {
            setSelectedFilter: t,
            selectedFilter: n
        } = e, a = [
            {
                id: o.W6.UNCLAIMED,
                label: c.Z.Messages.QUESTS_ALL
            },
            {
                id: o.W6.CLAIMED,
                label: c.Z.Messages.QUESTS_CLAIMED
            }
        ], u = s.useCallback(e => {
            t(e);
        }, [t]);
    return (0, i.jsx)(l.TabBar, {
        className: r()(d.container),
        selectedItem: n,
        onItemSelect: e => u(e),
        type: 'top',
        'aria-label': c.Z.Messages.QUESTS,
        orientation: 'horizontal',
        children: a.map(e => {
            let t = e.id === n;
            return (0, i.jsx)(l.TabBar.Item, {
                id: e.id,
                className: r()(d.tab, { [d.selected]: t }),
                'aria-label': e.label,
                disableItemStyles: !0,
                children: (0, i.jsx)(l.Text, {
                    variant: 'text-md/medium',
                    color: t ? 'header-primary' : 'text-primary',
                    children: e.label
                })
            }, e.id);
        })
    });
}
