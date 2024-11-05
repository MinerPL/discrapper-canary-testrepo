n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(111028),
    l = n(652853),
    u = n(228168),
    c = n(676411);
function d(e) {
    let { text: t, tags: n, platformIcon: i, contextMenu: d } = e,
        { profileType: f } = (0, l.z)();
    return (null == t || '' === t) && null == d
        ? null
        : null == t || '' === t
          ? (0, r.jsx)('div', {
                className: a()(c.headerContextMenu, c.absolute),
                children: d
            })
          : (0, r.jsxs)('header', {
                className: c.header,
                children: [
                    (0, r.jsxs)(s.Heading, {
                        className: c.headerText,
                        variant: f === u.y0.PANEL ? 'text-xs/semibold' : 'text-xs/medium',
                        color: 'header-primary',
                        children: [
                            (0, r.jsx)(o.Z, { children: t }),
                            null != i &&
                                (0, r.jsx)('div', {
                                    className: c.platformIcon,
                                    style: {
                                        maskImage: 'url('.concat(i.whiteSVG, ')'),
                                        WebkitMaskImage: 'url('.concat(i.whiteSVG, ')')
                                    }
                                }),
                            n
                        ]
                    }),
                    null != d &&
                        (0, r.jsx)('div', {
                            className: c.headerContextMenu,
                            children: d
                        })
                ]
            });
}
