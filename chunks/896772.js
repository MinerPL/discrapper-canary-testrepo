n.d(t, {
    R: function () {
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
                fill: 'string' == typeof c ? c : c.css,
                d: 'M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3Z',
                className: d
            }),
            (0, r.jsx)('path', {
                fill: 'string' == typeof c ? c : c.css,
                fillRule: 'evenodd',
                d: 'M19.53 6.47a.75.75 0 0 0-1.28.53v3.8l-2.76-2.37a.75.75 0 1 0-.98 1.14l3.42 2.93-3.42 2.93a.75.75 0 1 0 .98 1.14l2.76-2.37V18a.75.75 0 0 0 1.28.53l3-3a.75.75 0 0 0-.04-1.1l-2.25-1.93 2.25-1.93a.75.75 0 0 0 .04-1.1l-3-3Zm1.37 8.57-1.15-.98v2.13l1.15-1.15Zm-1.15-6.23v2.13l1.15-.98-1.15-1.15Z',
                clipRule: 'evenodd',
                className: d
            })
        ]
    });
};
