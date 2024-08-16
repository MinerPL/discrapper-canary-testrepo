n.d(t, {
    k: function () {
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
            d: 'M22.7 2.7a1 1 0 0 0-1.4-1.4l-20 20a1 1 0 1 0 1.4 1.4l20-20ZM15.5 3.7a.5.5 0 0 1 .05.75l-10.9 10.9a.5.5 0 0 1-.85-.3l-.27-2.72a.46.46 0 0 0-.35-.4 2 2 0 0 1-.79-3.54l8.39-6.45a2 2 0 0 1 2.44 0L15.5 3.7ZM6.31 22c-.12 0-.17-.14-.08-.23l1.92-1.92a.5.5 0 0 1 .85.36V21a1 1 0 0 1-1 1H6.31ZM14.47 13.53c-.19.19-.19.5-.03.73.35.5.56 1.1.56 1.74v5a1 1 0 0 0 1 1h1.69a2 2 0 0 0 1.99-1.8l.79-7.87c.02-.2.16-.36.35-.4a2 2 0 0 0 .79-3.54l-.78-.6a.5.5 0 0 0-.66.04l-5.7 5.7Z',
            className: d
        })
    });
};
