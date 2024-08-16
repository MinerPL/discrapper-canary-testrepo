n.d(t, {
    O: function () {
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
    return (0, r.jsx)('svg', {
        ...(0, a.Z)(_),
        xmlns: 'http://www.w3.org/2000/svg',
        width: f,
        height: h,
        fill: 'none',
        viewBox: '0 0 24 24',
        children: (0, r.jsx)('path', {
            fill: 'string' == typeof c ? c : c.css,
            fillRule: 'evenodd',
            d: 'M4.56 4.36A2.83 2.83 0 0 0 3 6.9v3.03c0 5.6 3.3 10.68 8.42 12.96.37.16.79.16 1.16 0A14.18 14.18 0 0 0 21 9.92V6.9c0-1.07-.6-2.05-1.56-2.53l-6.1-3.04a3 3 0 0 0-2.68 0l-6.1 3.04Zm8.25 3.3a.85.85 0 0 0-1.62 0l-.55 1.64a.25.25 0 0 1-.24.17H8.7a.85.85 0 0 0-.5 1.55l1.35.94c.1.07.13.18.1.29l-.53 1.57a.85.85 0 0 0 1.3.97l1.44-1.02c.08-.06.2-.06.28 0l1.45 1.02a.85.85 0 0 0 1.3-.97l-.54-1.57c-.03-.1 0-.22.1-.29l1.34-.94a.85.85 0 0 0-.49-1.55h-1.7c-.11 0-.2-.06-.24-.17l-.55-1.64Z',
            clipRule: 'evenodd',
            className: d
        })
    });
};
