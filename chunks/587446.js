n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(735250);
n(470079);
var i = n(120356), a = n.n(i), o = n(481060), s = n(689938), l = n(454620);
function u(e) {
    let {
        text: t = s.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
        className: n
    } = e;
    return (0, r.jsx)(o.Tooltip, {
        text: t,
        children: e => (0, r.jsx)(o.Clickable, {
            ...e,
            children: (0, r.jsx)(o.NitroWheelIcon, {
                size: 'md',
                color: 'currentColor',
                className: a()(l.nitroWheel, n)
            })
        })
    });
}
