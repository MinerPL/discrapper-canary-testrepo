n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(652853),
    l = n(228168),
    u = n(676411);
function c(e) {
    let { text: t, icon: n, contextMenu: i } = e,
        { profileType: c } = (0, o.z)();
    return (null == t || '' === t) && null == i
        ? null
        : null == t || '' === t
          ? (0, r.jsx)('div', {
                className: a()(u.headerContextMenu, u.absolute, { [u.panel]: c === l.y0.PANEL }),
                children: i
            })
          : (0, r.jsxs)('header', {
                className: u.header,
                children: [
                    (0, r.jsxs)(s.Heading, {
                        className: u.headerText,
                        variant: c === l.y0.PANEL ? 'text-xs/semibold' : 'text-xs/medium',
                        color: 'header-primary',
                        children: [
                            t,
                            null != n &&
                                (0, r.jsx)('div', {
                                    className: u.platformIcon,
                                    style: {
                                        maskImage: 'url('.concat(n.whiteSVG, ')'),
                                        WebkitMaskImage: 'url('.concat(n.whiteSVG, ')')
                                    }
                                })
                        ]
                    }),
                    null != i &&
                        (0, r.jsx)('div', {
                            className: u.headerContextMenu,
                            children: i
                        })
                ]
            });
}
