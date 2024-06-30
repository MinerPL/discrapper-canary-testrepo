t.d(n, {
    Z: function () {
        return d;
    }
});
var o = t(735250);
t(470079);
var r = t(120356), a = t.n(r), i = t(481060), c = t(809086), s = t(612704);
function l(e) {
    let {
        className: n,
        onClose: t
    } = e;
    return (0, o.jsx)(i.Clickable, {
        className: a()(s.closeButtonContainer, n),
        onClick: t,
        children: (0, o.jsx)(i.CloseSmallIcon, {
            size: 'xs',
            color: 'currentColor',
            className: s.closeButtonIcon
        })
    });
}
function d(e) {
    let {
        guildProductListing: n,
        onClose: t,
        className: r
    } = e;
    return (0, o.jsxs)(i.ModalHeader, {
        className: a()(s.header, r),
        separator: !1,
        children: [
            (0, o.jsx)(c.Z, {
                className: s.headerImage,
                listing: n,
                imageSize: 500,
                alt: ''
            }),
            (0, o.jsx)(l, {
                className: s.closeButton,
                onClose: t
            })
        ]
    });
}
