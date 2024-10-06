n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(481060),
    o = n(689938),
    c = n(405787),
    d = n(902294);
function u(e) {
    let { heading: t = o.Z.Messages.APP_DIRECTORY_ERROR_HEADING, body: n = o.Z.Messages.APP_DIRECTORY_ERROR_BODY, className: s } = e;
    return (0, i.jsxs)('div', {
        className: r()(c.container, s),
        children: [
            (0, i.jsx)('div', {
                className: c.imageContainer,
                children: (0, i.jsx)('img', {
                    className: c.image,
                    src: d,
                    alt: o.Z.Messages.APP_DIRECTORY_CONFUSED_CLYDE_IMAGE_ALT
                })
            }),
            (0, i.jsxs)(a.Fragment, {
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: 'heading-xl/semibold',
                        className: c.header,
                        children: t
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: n
                    })
                ]
            })
        ]
    });
}
