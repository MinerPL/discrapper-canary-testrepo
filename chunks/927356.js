n.d(t, {
    Z: function () {
        return u;
    }
});
var a = n(735250), i = n(470079), l = n(120356), r = n.n(l), c = n(481060), s = n(689938), o = n(624792), d = n(902294);
function u(e) {
    let {
        heading: t = s.Z.Messages.APP_DIRECTORY_ERROR_HEADING,
        body: n = s.Z.Messages.APP_DIRECTORY_ERROR_BODY,
        className: l
    } = e;
    return (0, a.jsxs)('div', {
        className: r()(o.container, l),
        children: [
            (0, a.jsx)('img', {
                className: o.image,
                src: d,
                alt: s.Z.Messages.APP_DIRECTORY_CONFUSED_CLYDE_IMAGE_ALT
            }),
            (0, a.jsxs)(i.Fragment, {
                children: [
                    (0, a.jsx)(c.Heading, {
                        className: o.header,
                        variant: 'heading-xl/semibold',
                        children: t
                    }),
                    (0, a.jsx)(c.Text, {
                        variant: 'text-md/normal',
                        children: n
                    })
                ]
            })
        ]
    });
}
