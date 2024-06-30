n.d(t, {
    o: function () {
        return s;
    }
});
var r = n(735250);
n(470079);
var i = n(692547), a = n(331595), o = n(267843);
let s = e => {
    var t, n;
    let {
            size: s = 'md',
            width: l,
            height: u,
            secondaryColor: c = 'transparent',
            secondaryColorClass: d = '',
            color: _ = i.Z.colors.INTERACTIVE_NORMAL,
            colorClass: E = '',
            ...f
        } = e, h = (0, o.m)(s), p = null !== (t = null == h ? void 0 : h.width) && void 0 !== t ? t : l, m = null !== (n = null == h ? void 0 : h.height) && void 0 !== n ? n : u;
    return (0, r.jsxs)('svg', {
        ...(0, a.Z)(f),
        xmlns: 'http://www.w3.org/2000/svg',
        width: p,
        height: m,
        fill: 'none',
        viewBox: '0 0 24 24',
        children: [
            (0, r.jsx)('circle', {
                cx: '12',
                cy: '12',
                r: '10',
                fill: 'string' == typeof c ? c : c.css,
                className: d
            }),
            (0, r.jsx)('path', {
                fill: 'string' == typeof _ ? _ : _.css,
                fillRule: 'evenodd',
                d: 'M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm5.7-13.3a1 1 0 0 0-1.4-1.4L10 14.58l-2.3-2.3a1 1 0 0 0-1.4 1.42l3 3a1 1 0 0 0 1.4 0l7-7Z',
                clipRule: 'evenodd',
                className: E
            })
        ]
    });
};
