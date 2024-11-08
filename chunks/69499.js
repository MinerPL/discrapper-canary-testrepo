n.d(t, {
    E: function () {
        return I;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(442837),
    r = n(481060),
    l = n(239091),
    o = n(585237),
    c = n(812206),
    u = n(55563),
    d = n(73346),
    _ = n(689938);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let I = {
    DropdownSizes: o.Z.DropdownSizes,
    Sizes: o.Z.Sizes,
    Colors: o.Z.Colors,
    Looks: o.Z.Looks
};
class m extends a.PureComponent {
    render() {
        let { skus: e, children: t, applicationId: n, primarySKU: a, onSKUSelect: s, ...r } = this.props;
        return (0, i.jsx)(o.Z, {
            onClick: this.handleClick,
            onDropdownClick: e.length > 0 ? this.handleContextMenu : null,
            onContextMenu: e.length > 0 ? this.handleContextMenu : void 0,
            ...r,
            children: t
        });
    }
    constructor(...e) {
        super(...e),
            E(this, 'renderContextMenu', () => {
                let { skus: e, onSKUSelect: t, onMenuSelect: n } = this.props;
                return (0, i.jsx)(r.Menu, {
                    onSelect: n,
                    navId: 'test-skus',
                    'aria-label': _.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
                    onClose: l.Zy,
                    children: e.map((e) =>
                        (0, i.jsx)(
                            r.MenuItem,
                            {
                                id: ''.concat(e.id),
                                label: e.name,
                                action: () => {
                                    null == t || t(e);
                                }
                            },
                            ''.concat(e.id)
                        )
                    )
                });
            }),
            E(this, 'handleContextMenu', (e) => {
                e.stopPropagation(), l.vq(e, this.renderContextMenu);
            }),
            E(this, 'handleClick', () => {
                let { onSKUSelect: e, primarySKU: t } = this.props;
                null != t && (null == e || e(t));
            });
    }
}
t.Z = s.ZP.connectStores([u.Z, c.Z], (e) => {
    var t;
    let { applicationId: n } = e,
        i = (0, d.uF)(n, c.Z, u.Z);
    return {
        skus: (null !== (t = u.Z.getForApplication(n)) && void 0 !== t ? t : []).sort((e, t) => (null != i && e.id === i.id ? -1 : null != i && t.id === i.id ? 1 : e.name >= t.name ? -1 : 1)),
        primarySKU: i
    };
})(m);
