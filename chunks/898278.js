n.d(t, {
    X: function () {
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
            d: 'M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm13.35 8.13 3.5 4.67c.37.5.02 1.2-.6 1.2H5.81a.75.75 0 0 1-.59-1.22l1.86-2.32a1.5 1.5 0 0 1 2.34 0l.5.64 2.23-2.97a2 2 0 0 1 3.2 0ZM10.2 5.98c.23-.91-.88-1.55-1.55-.9a.93.93 0 0 1-1.3 0c-.67-.65-1.78-.01-1.55.9a.93.93 0 0 1-.65 1.12c-.9.26-.9 1.54 0 1.8.48.14.77.63.65 1.12-.23.91.88 1.55 1.55.9a.93.93 0 0 1 1.3 0c.67.65 1.78.01 1.55-.9a.93.93 0 0 1 .65-1.12c.9-.26.9-1.54 0-1.8a.93.93 0 0 1-.65-1.12Z',
            clipRule: 'evenodd',
            className: d
        })
    });
};
