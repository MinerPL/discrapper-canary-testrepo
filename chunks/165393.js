n.d(t, {
    Z: function () {
        return p;
    }
}), n(47120);
var i = n(735250), l = n(470079), r = n(120356), a = n.n(r), s = n(866442), o = n(481060), c = n(806519), u = n(617253);
let d = [
    1752220,
    3066993,
    3447003,
    10181046,
    15277667,
    15844367
];
function h(e) {
    return (0, s.Rf)(d[function (e) {
        let t = 5381, n = 0;
        for (; n < e.length;)
            t = 33 * t ^ e.charCodeAt(n++);
        return t >>> 0;
    }(e) % d.length]);
}
function p(e) {
    var t;
    let {
            title: n,
            className: r
        } = e, [s, d] = l.useState(h(n));
    return l.useEffect(() => {
        d(h(n));
    }, [n]), (0, i.jsxs)('div', {
        className: a()(u.wrapper, r),
        children: [
            (0, i.jsx)(c.ZP, {
                mask: c.ZP.Masks.STATUS_SCREENSHARE,
                width: 32,
                height: 32,
                children: (0, i.jsx)('div', {
                    className: u.icon,
                    style: { backgroundColor: s },
                    children: null !== (t = n[0]) && void 0 !== t ? t : '?'
                })
            }),
            (0, i.jsx)(o.VideoIcon, {
                size: 'md',
                color: 'currentColor',
                className: u.badge
            })
        ]
    });
}
