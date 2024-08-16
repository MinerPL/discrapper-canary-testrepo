t.d(n, {
    Z: function () {
        return o;
    }
});
var i = t(735250);
t(470079);
var a = t(120356),
    r = t.n(a),
    s = t(481060),
    l = t(96247);
function o(e) {
    let { className: n, copy: t, bannerImage: a, textColor: o = 'always-white', hideGiftIcon: c = !1 } = e;
    return (0, i.jsxs)('div', {
        className: r()(l.bannerContainer, n),
        children: [
            null == a
                ? null
                : (0, i.jsx)('img', {
                      alt: '',
                      className: l.banner,
                      src: a
                  }),
            (0, i.jsxs)('div', {
                className: l.textContainer,
                children: [
                    !1 === c &&
                        (0, i.jsx)(s.GiftIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: l.giftIcon
                        }),
                    (0, i.jsx)(s.Heading, {
                        className: r()(l.textHeader, { [l.textHeaderWithGiftIcon]: !c }),
                        color: o,
                        variant: 'eyebrow',
                        children: t
                    })
                ]
            })
        ]
    });
}
