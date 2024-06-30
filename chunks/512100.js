t.d(n, {
    u: function () {
        return a;
    }
});
var i = t(735250);
t(470079);
var l = t(777207), r = t(541822), s = t(330711), o = t(578257);
function a(e) {
    let {
            benefits: n,
            description: t,
            imgSrc: a,
            title: c,
            tag: d,
            FallbackIcon: u
        } = e, m = null != a ? { '--custom-background-url': 'url('.concat(a.toString(), ')') } : void 0, S = null != t && '' !== t, _ = S || null != n;
    return (0, i.jsxs)('div', {
        className: o.container,
        children: [
            (0, i.jsxs)('div', {
                className: o.header,
                children: [
                    (0, i.jsx)('div', {
                        className: o.headerBackground,
                        style: m
                    }),
                    (0, i.jsx)('div', {
                        className: o.headerTop,
                        children: (0, i.jsx)('div', { children: d })
                    }),
                    (0, i.jsx)('div', {
                        className: o.headerImage,
                        children: null != a ? (0, i.jsx)('img', {
                            src: a.toString(),
                            alt: ''
                        }) : (0, i.jsx)(u, {
                            size: 'custom',
                            color: 'var(--text-muted)',
                            height: 96,
                            width: 96
                        })
                    })
                ]
            }),
            (0, i.jsxs)(r.Z, {
                className: o.scroll,
                children: [
                    (0, i.jsx)('br', {}),
                    (0, i.jsxs)('div', {
                        className: o.scrollContent,
                        children: [
                            (0, i.jsx)(l.x, {
                                color: 'header-primary',
                                tag: 'div',
                                variant: 'heading-xl/semibold',
                                children: c
                            }),
                            _ && (0, i.jsxs)('div', {
                                className: o.details,
                                children: [
                                    (0, i.jsx)(l.x, {
                                        color: 'header-primary',
                                        tag: 'div',
                                        variant: 'heading-lg/semibold',
                                        children: s.Z.Messages.Storefront.PRODUCT_DETAILS
                                    }),
                                    S && (0, i.jsx)(l.x, {
                                        color: 'text-muted',
                                        variant: 'text-md/normal',
                                        className: o.description,
                                        children: t
                                    }),
                                    null != n && (0, i.jsxs)('div', {
                                        className: o.benefits,
                                        children: [
                                            (0, i.jsx)(l.x, {
                                                color: 'header-secondary',
                                                variant: 'eyebrow',
                                                children: s.Z.Messages.Storefront.BENEFITS_TITLE
                                            }),
                                            n
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
