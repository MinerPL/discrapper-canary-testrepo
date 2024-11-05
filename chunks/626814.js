n.d(t, {
    H: function () {
        return o;
    }
});
var r = n(200651);
n(192379);
var i = n(692547),
    a = n(331595),
    s = n(267843);
let o = (e) => {
    var t, n;
    let { size: o = 'md', width: l, height: u, color: c = i.Z.colors.INTERACTIVE_NORMAL, colorClass: d = '', ...f } = e,
        _ = (0, s.m)(o),
        h = null !== (t = null == _ ? void 0 : _.width) && void 0 !== t ? t : l,
        p = null !== (n = null == _ ? void 0 : _.height) && void 0 !== n ? n : u;
    return (0, r.jsxs)('svg', {
        ...(0, a.Z)(f),
        xmlns: 'http://www.w3.org/2000/svg',
        width: h,
        height: p,
        fill: 'none',
        viewBox: '0 0 24 24',
        children: [
            (0, r.jsx)('path', {
                d: 'M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6.88c.37 0 .61-.38.5-.73a7 7 0 0 1-.37-2.7.53.53 0 0 0-.52-.57H6a1 1 0 1 1 0-2h6.36c.2 0 .37-.11.46-.28.3-.6.7-1.13 1.17-1.6.35-.37.11-1.12-.4-1.12H6a1 1 0 1 1 0-2h12a1 1 0 0 1 .88.52c.13.24.34.48.62.5.61.04 1.2.16 1.77.36.35.11.73-.13.73-.5V5a3 3 0 0 0-3-3H5Zm1 4a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2H6Z',
                fill: 'string' == typeof c ? c : c.css,
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                className: d
            }),
            (0, r.jsx)('path', {
                d: 'M24 19a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-5-3a1 1 0 0 1 1 1v1.59l.7.7a1 1 0 1 1-1.4 1.42l-1-1A1 1 0 0 1 18 19v-2a1 1 0 0 1 1-1Z',
                fill: 'string' == typeof c ? c : c.css,
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                className: d
            })
        ]
    });
};
