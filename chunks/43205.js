t.d(n, {
    f: function () {
        return c;
    }
}), t(47120);
var l = t(735250), a = t(470079), r = t(120356), o = t.n(r), i = t(481060), u = t(410030), s = t(969397);
function c(e) {
    let {
            src: n,
            size: t,
            className: r,
            alt: c = 'icon',
            fallbackSrc: d
        } = e, E = (0, u.ZP)(), [_, f] = a.useState(!1), [T, v] = a.useState(!1), m = null == d || T;
    return null == n || _ && m ? (0, l.jsx)(i.UnknownGameIcon, {
        size: 'custom',
        width: t,
        height: t,
        color: 'dark' === E ? 'white' : 'black',
        className: o()(s.contentImage, r)
    }) : (0, l.jsx)('img', {
        style: {
            maxWidth: ''.concat(t, 'px'),
            height: ''.concat(t, 'px')
        },
        className: o()(s.contentImage, r),
        src: _ && null != d ? d : n,
        alt: c,
        onError: e => _ ? v(!0) : f(!0)
    });
}
