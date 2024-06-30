n.d(t, {
    Z: function () {
        return c;
    }
});
var a = n(735250);
n(470079);
var i = n(481060), l = n(689938), r = n(482263);
function c(e) {
    let {
            imageSrc: t,
            header: n,
            description: c,
            secondaryInfo: s,
            mutualGuildCount: o,
            ctaLabel: d,
            onCtaClick: u,
            children: _
        } = e, g = (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)('div', {
                className: r.topWrapper,
                children: [
                    (0, a.jsx)('div', {
                        className: r.__invalid_imageContainer,
                        children: (0, a.jsx)('img', {
                            alt: '',
                            className: r.image,
                            src: t
                        })
                    }),
                    (0, a.jsxs)('div', {
                        className: r.content,
                        children: [
                            (0, a.jsxs)('div', {
                                className: r.header,
                                children: [
                                    (0, a.jsxs)('div', {
                                        className: r.info,
                                        children: [
                                            (0, a.jsx)(i.Heading, {
                                                className: r.name,
                                                variant: 'heading-md/semibold',
                                                children: n
                                            }),
                                            null != o ? o : (0, a.jsx)(a.Fragment, {
                                                children: (0, a.jsxs)('div', {
                                                    className: r.details,
                                                    children: [
                                                        (0, a.jsx)(i.Text, {
                                                            tag: 'span',
                                                            color: 'header-secondary',
                                                            variant: 'text-sm/medium',
                                                            children: l.Z.Messages.APP_DIRECTORY_MUSIC_CATEGORY
                                                        }),
                                                        null != s ? (0, a.jsxs)(a.Fragment, {
                                                            children: [
                                                                (0, a.jsx)(i.Text, {
                                                                    tag: 'span',
                                                                    color: 'interactive-muted',
                                                                    variant: 'text-sm/normal',
                                                                    className: r.bullet,
                                                                    children: '\u2022'
                                                                }),
                                                                (0, a.jsx)(i.Text, {
                                                                    tag: 'span',
                                                                    color: 'header-secondary',
                                                                    variant: 'text-sm/medium',
                                                                    children: s
                                                                })
                                                            ]
                                                        }) : null
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    null != u && null != d ? (0, a.jsx)(i.Button, {
                                        size: i.Button.Sizes.SMALL,
                                        onClick: u,
                                        className: r.__invalid_button,
                                        children: d
                                    }) : null
                                ]
                            }),
                            null != c ? (0, a.jsx)(i.Text, {
                                className: r.listingDescription,
                                variant: 'text-md/normal',
                                children: c
                            }) : null,
                            (0, a.jsx)('div', {
                                className: r.children,
                                children: _
                            })
                        ]
                    })
                ]
            })
        });
    return (0, a.jsx)(i.FocusRing, {
        children: (0, a.jsx)('div', {
            className: r.listing,
            children: g
        })
    });
}
