i.d(n, {
    Z: function () {
        return c;
    }
});
var t = i(735250);
i(470079);
var a = i(120356), r = i.n(a), o = i(481060), l = i(689938), s = i(681474);
function c(e) {
    let {
            className: n,
            onClick: i,
            imageSrc: a,
            iconSrc: c,
            header: d,
            headerClassName: u,
            subheaderVariant: _ = 'text-sm/normal',
            subheader: p,
            children: m,
            animatesOnHover: I,
            ...f
        } = e, g = null != a, h = (0, t.jsxs)(t.Fragment, {
            children: [
                g && (0, t.jsx)('div', {
                    className: s.imageContainer,
                    children: (0, t.jsx)('img', {
                        alt: '',
                        className: s.image,
                        src: a
                    })
                }),
                (0, t.jsxs)('div', {
                    className: s.textContainer,
                    children: [
                        (0, t.jsxs)('div', {
                            className: r()(s.topRowContainer),
                            children: [
                                null != c && (0, t.jsx)('img', {
                                    className: s.icon,
                                    alt: '',
                                    'aria-hidden': !0,
                                    src: c,
                                    width: 48,
                                    height: 48
                                }),
                                (0, t.jsxs)('div', {
                                    className: s.headerContainer,
                                    children: [
                                        (0, t.jsx)(o.Heading, {
                                            variant: 'heading-md/medium',
                                            className: u,
                                            children: d
                                        }),
                                        null != p && (0, t.jsx)(o.Text, {
                                            className: s.subheader,
                                            color: 'header-secondary',
                                            variant: _,
                                            children: p
                                        })
                                    ]
                                })
                            ]
                        }),
                        m
                    ]
                })
            ]
        }), C = r()(n, s.container, { [s.hasImage]: g });
    return null != i ? (0, t.jsx)(o.ClickableContainer, {
        tag: 'article',
        'aria-label': l.Z.Messages.APP_DIRECTORY_LISTING_CARD_BUTTON_A11Y_LABEL.format({ name: d }),
        onClick: i,
        className: r()(C, s.clickable, { [s.animatesOnHoverContainer]: I }),
        focusProps: { offset: 4 },
        children: h
    }) : (0, t.jsx)('article', {
        className: C,
        ...f,
        children: h
    });
}
