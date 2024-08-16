t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(735250),
    a = t(470079),
    l = t(481060),
    r = t(725436),
    o = t(11868),
    c = t(217804),
    s = t(765305),
    d = t(55109);
function u(e) {
    let { guildScheduledEvent: n, channel: t, onClose: u } = e,
        _ = n.entity_type === s.WX.EXTERNAL,
        g = a.useCallback((e) => (0, o.Qt)(n, u)(e), [n, u]),
        v = (0, c.u)(n, t);
    if (null == v) return null;
    let { IconComponent: h, locationName: f } = v,
        I = (0, i.jsxs)(i.Fragment, {
            children: [
                null != h &&
                    (0, i.jsx)(h, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 20,
                        height: 20,
                        className: d.channelIcon
                    }),
                (0, i.jsx)(l.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    className: d.locationText,
                    children: (0, r.m)(f, !0)
                })
            ]
        });
    return (0, i.jsx)('div', {
        className: d.row,
        children:
            null != g
                ? (0, i.jsx)(l.Clickable, {
                      className: _ ? d.externalLocation : d.channelLocation,
                      onClick: g,
                      children: I
                  })
                : I
    });
}
