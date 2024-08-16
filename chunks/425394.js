n.d(t, {
    A: function () {
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
            d: 'M7.03 16.6c1.18 1.17 2.84 1.76 4.97 1.76s3.79-.59 4.97-1.76c1.2-1.18 1.79-3 1.79-5.46V2.5a.5.5 0 0 0-.5-.5H16.8a.5.5 0 0 0-.5.5v8.77c0 1.63-.38 2.84-1.14 3.64A4.1 4.1 0 0 1 12 16.1c-1.35 0-2.4-.4-3.17-1.2-.75-.8-1.12-2.01-1.12-3.64V2.5a.5.5 0 0 0-.5-.5H5.77a.5.5 0 0 0-.5.5v8.64c0 2.46.59 4.28 1.76 5.46ZM2.5 19.5a.5.5 0 0 0-.5.5v1.5c0 .28.22.5.5.5h19a.5.5 0 0 0 .5-.5V20a.5.5 0 0 0-.5-.5h-19Z',
            clipRule: 'evenodd',
            className: d
        })
    });
};
