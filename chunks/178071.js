n.d(t, {
    y: function () {
        return _;
    }
}), n(47120);
var i = n(735250), s = n(470079), a = n(442837), r = n(481060), l = n(239091), o = n(585237), c = n(551428), d = n(689938);
function u(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let _ = {
    DropdownSizes: o.Z.DropdownSizes,
    Sizes: o.Z.Sizes,
    Colors: o.Z.Colors,
    Looks: o.Z.Looks
};
class E extends s.PureComponent {
    render() {
        let {
                storeListings: e,
                primaryStoreListing: t,
                skuId: n,
                onStoreListingSelect: s,
                currentStoreListingId: a,
                ...r
            } = this.props, l = null != t ? 1 : 0;
        return (l += e.length) < 2 ? null : (0, i.jsx)(o.Z, {
            onClick: this.handleContextMenu,
            onDropdownClick: this.handleContextMenu,
            onContextMenu: this.handleContextMenu,
            ...r,
            children: d.Z.Messages.APPLICATION_TEST_MODE_VIEW_OTHER_LISTINGS
        });
    }
    constructor(...e) {
        super(...e), u(this, 'renderContextMenu', () => {
            let {
                    storeListings: e,
                    onStoreListingSelect: t,
                    currentStoreListingId: n,
                    onMenuSelect: s
                } = this.props, a = e.map(e => e.id !== n ? (0, i.jsx)(r.MenuItem, {
                    id: ''.concat(e.id),
                    label: e.id,
                    action: () => {
                        l.Zy(), null == t || t(e);
                    }
                }) : null);
            return (0, i.jsx)(r.Menu, {
                onSelect: s,
                navId: 'test-store-listing',
                'aria-label': d.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
                onClose: l.Zy,
                children: a
            });
        }), u(this, 'handleContextMenu', e => {
            e.stopPropagation(), l.vq(e, this.renderContextMenu);
        });
    }
}
t.Z = a.ZP.connectStores([c.Z], e => {
    let {skuId: t} = e;
    return {
        storeListings: c.Z.getUnpublishedForSKU(t),
        primaryStoreListing: c.Z.getForSKU(t)
    };
})(E);
