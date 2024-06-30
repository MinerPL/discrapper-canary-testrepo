t.d(n, {
    Z: function () {
        return l;
    }
});
var i = t(735250);
t(470079);
var r = t(120356), o = t.n(r), a = t(481060), s = t(46446);
function l(e) {
    let {
        className: n,
        copy: t,
        bannerImage: r,
        textColor: l = 'always-white'
    } = e;
    return (0, i.jsxs)('div', {
        className: o()(s.bannerContainer, n),
        children: [
            null == r ? null : (0, i.jsx)('img', {
                alt: '',
                className: s.banner,
                src: r
            }),
            (0, i.jsxs)('div', {
                className: s.textContainer,
                children: [
                    (0, i.jsx)(a.GiftIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: s.giftIcon
                    }),
                    (0, i.jsx)(a.Heading, {
                        className: s.textHeader,
                        color: l,
                        variant: 'eyebrow',
                        children: t
                    })
                ]
            })
        ]
    });
}
