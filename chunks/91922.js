n.d(t, {
    d: function () {
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
                d: 'M19 14a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1ZM1.23 21.13a1 1 0 0 1 0-1.41l7.48-7.48c.2-.2.5-.2.7 0l2.13 2.12c.2.2.2.52 0 .71l-7.48 7.48a1 1 0 0 1-1.41 0l-1.42-1.42Z',
                fill: 'string' == typeof c ? c : c.css,
                className: d
            }),
            (0, r.jsx)('path', {
                d: 'M21.3 13.07c.21.26.62.32.86.08l.45-.44a2 2 0 0 0 0-2.83l-2.94-2.94.65-.66a1 1 0 0 0 0-1.41l-1.41-1.42a1 1 0 0 0-1.41 0l-.66.66-2.72-2.72a2 2 0 0 0-2.83 0L7.76 4.93a2 2 0 0 0 0 2.83l7.53 7.53c.26.26.71.08.71-.29a3 3 0 0 1 5.3-1.93Z',
                fill: 'string' == typeof c ? c : c.css,
                className: d
            })
        ]
    });
};
