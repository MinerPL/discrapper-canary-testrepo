t.d(n, {
    Z: function () {
        return u;
    }
}), t(653041);
var i = t(735250), l = t(470079), a = t(120356), r = t.n(a), o = t(481060), c = t(765305), s = t(689938), d = t(235098);
function u(e) {
    let {
            onClose: n,
            selectedTab: t,
            onTabSelected: a,
            userCount: u,
            hasBanner: _,
            isHub: f = !1
        } = e, g = l.useRef(null);
    l.useEffect(() => {
        var e, n, t;
        return null === (t = g.current) || void 0 === t ? void 0 : null === (n = t.ref) || void 0 === n ? void 0 : null === (e = n.blur) || void 0 === e ? void 0 : e.call(n);
    }, []);
    let v = s.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_TAB_TITLE.format({ userCount: u }), h = [(0, i.jsx)(o.TabBar.Item, {
                className: d.tabBarItem,
                id: c.fL.EVENT_INFO,
                children: s.Z.Messages.GUILD_EVENT_DETAILS_INFO_TAB_TITLE
            }, 'event-details')];
    return !f && h.push((0, i.jsx)(o.TabBar.Item, {
        className: d.tabBarItem,
        id: c.fL.RSVP_LIST,
        children: v
    }, 'is-hub')), (0, i.jsxs)('div', {
        className: d.container,
        children: [
            (0, i.jsx)(o.Clickable, {
                ref: g,
                onClick: n,
                className: d.closeButton,
                'aria-label': s.Z.Messages.CLOSE,
                children: (0, i.jsx)(o.CloseSmallIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: r()(d.closeIcon, _ && d.closeIconBanner)
                })
            }),
            (0, i.jsx)(o.TabBar, {
                className: d.tabBar,
                'aria-label': s.Z.Messages.OPTIONS,
                selectedItem: t,
                type: 'top',
                onItemSelect: a,
                children: h
            })
        ]
    });
}
