n.d(t, {
    g: function () {
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
            d: 'M19.76 8.82c-.11.09-2.16 1.24-2.16 3.8 0 2.98 2.6 4.03 2.68 4.05 0 .07-.41 1.44-1.37 2.84-.86 1.23-1.75 2.46-3.11 2.46-1.36 0-1.71-.79-3.28-.79-1.53 0-2.08.82-3.32.82-1.24 0-2.11-1.14-3.11-2.54A12.25 12.25 0 0 1 4 12.84c0-3.9 2.53-5.95 5.02-5.95 1.32 0 2.42.86 3.25.86.8 0 2.02-.92 3.53-.92.57 0 2.62.06 3.96 1.99Zm-4.68-3.63a4.47 4.47 0 0 0 1.07-2.79c0-.14-.02-.28-.04-.4a4.47 4.47 0 0 0-2.95 1.52 4.35 4.35 0 0 0-1.1 2.7c0 .16.03.32.04.37l.27.02c.91 0 2.05-.6 2.71-1.42Z',
            className: d
        })
    });
};
