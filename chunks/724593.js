n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(735250);
n(470079);
var i = n(120356), a = n.n(i), o = n(481060), s = n(785717), l = n(702557), u = n(993409), c = n(689938), d = n(703464);
function _(e) {
    let {
            user: t,
            isHovering: n,
            onOpenProfile: i
        } = e, {trackUserProfileAction: _} = (0, s.KZ)(), {note: E} = (0, l.Z)(t.id), f = () => {
            _({ action: 'PRESS_ADD_NOTE' }), null == i || i();
        };
    return null == E || '' === E ? (0, r.jsx)(u.Z, {
        variant: 'icon',
        text: c.Z.Messages.ADD_NOTE,
        'aria-label': c.Z.Messages.ADD_NOTE,
        icon: o.PaperPlusIcon,
        onClick: f,
        color: d.color,
        look: o.Button.Looks.BLANK,
        className: a()(d.button, { [d.visible]: n })
    }) : (0, r.jsx)(u.Z, {
        variant: 'icon',
        text: E,
        'aria-label': E,
        icon: o.PaperIcon,
        onClick: f,
        color: d.color,
        look: o.Button.Looks.BLANK,
        className: a()(d.button, { [d.visible]: n }),
        tooltipClassName: d.tooltip
    });
}
