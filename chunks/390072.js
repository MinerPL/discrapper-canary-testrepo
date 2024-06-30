t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(735250), l = t(470079), a = t(481060), r = t(725436), o = t(11868), c = t(217804), s = t(765305), d = t(519229);
function u(e) {
    let {
            guildScheduledEvent: n,
            channel: t,
            onClose: u
        } = e, _ = n.entity_type === s.WX.EXTERNAL, f = l.useCallback(e => (0, o.Qt)(n, u)(e), [
            n,
            u
        ]), g = (0, c.u)(n, t);
    if (null == g)
        return null;
    let {
            IconComponent: v,
            locationName: h
        } = g, b = (0, i.jsxs)(i.Fragment, {
            children: [
                null != v && (0, i.jsx)(v, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 20,
                    height: 20,
                    className: d.channelIcon
                }),
                (0, i.jsx)(a.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    className: d.locationText,
                    children: (0, r.m)(h, !0)
                })
            ]
        });
    return (0, i.jsx)('div', {
        className: d.row,
        children: null != f ? (0, i.jsx)(a.Clickable, {
            className: _ ? d.externalLocation : d.channelLocation,
            onClick: f,
            children: b
        }) : b
    });
}
