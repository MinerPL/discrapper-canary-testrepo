n.d(t, {
    S: function () {
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
                d: 'M12 10a2 2 0 0 1-2.75 1.85c-.12-.04-.25.03-.25.15a3 3 0 1 0 3-3c-.12 0-.2.13-.15.25A2 2 0 0 1 12 10Z',
                className: d
            }),
            (0, r.jsx)('path', {
                fill: 'string' == typeof c ? c : c.css,
                fillRule: 'evenodd',
                d: 'M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Zm6.85-9.65C18.3 13.48 16.27 17 12 17s-6.3-3.52-6.85-4.65a.8.8 0 0 1 0-.7C5.7 10.52 7.73 7 12 7s6.3 3.52 6.85 4.65c.1.22.1.48 0 .7Z',
                clipRule: 'evenodd',
                className: d
            })
        ]
    });
};
