n.d(t, {
    U: function () {
        return o;
    }
});
var r = n(735250);
n(470079);
var i = n(692547),
    a = n(331595),
    s = n(267843);
let o = (e) => {
    var t, n;
    let { size: o = 'md', width: l, height: u, color: c = i.Z.colors.INTERACTIVE_NORMAL, colorClass: d = '', ..._ } = e,
        E = (0, s.m)(o),
        f = null !== (t = null == E ? void 0 : E.width) && void 0 !== t ? t : l,
        h = null !== (n = null == E ? void 0 : E.height) && void 0 !== n ? n : u;
    return (0, r.jsxs)('svg', {
        ...(0, a.Z)(_),
        xmlns: 'http://www.w3.org/2000/svg',
        width: f,
        height: h,
        fill: 'none',
        viewBox: '0 0 24 24',
        children: [
            (0, r.jsx)('path', {
                d: 'M19 16A3 3 0 1 0 21 21.25a1 1 0 1 1 1.32 1.5A4.98 4.98 0 0 1 14 19a5 5 0 0 1 8-4 1 1 0 0 1 2 0v3a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h1.23A3 3 0 0 0 19 16Z',
                fill: 'string' == typeof c ? c : c.css,
                className: d
            }),
            (0, r.jsx)('path', {
                d: 'M22 12c0 .1-.06.2-.16.23a3 3 0 0 0-.19.09.58.58 0 0 1-.44.04 7 7 0 0 0-8.8 9c.1.3-.09.64-.4.64H2.2a1 1 0 0 1-.76-1.66l2.07-2.37a.52.52 0 0 0 .04-.61A10 10 0 1 1 22 12Z',
                fill: 'string' == typeof c ? c : c.css,
                className: d
            })
        ]
    });
};
