n.d(t, {
    Y: function () {
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
                d: 'M11.8 3.75a5.98 5.98 0 0 1 8.98 7.85 1 1 0 0 1-1.6-1.21 3.98 3.98 0 0 0-5.97-5.22l-2.51 2.5a1 1 0 1 1-1.42-1.4l2.52-2.52ZM7.68 9.28a1 1 0 0 1 0 1.42L5.17 13.2a3.98 3.98 0 0 0 5.22 5.98 1 1 0 1 1 1.21 1.59 5.98 5.98 0 0 1-7.85-8.98l2.52-2.52a1 1 0 0 1 1.4 0Z',
                fill: 'string' == typeof c ? c : c.css,
                className: d
            }),
            (0, r.jsx)('path', {
                d: 'M14.7 10.7a1 1 0 0 0-1.4-1.4l-4 4a1 1 0 1 0 1.4 1.4l4-4ZM19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z',
                fill: 'string' == typeof c ? c : c.css,
                className: d
            })
        ]
    });
};
