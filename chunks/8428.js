n.d(t, {
    r: function () {
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
            d: 'M15 11a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5ZM2 20c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v5ZM13 20c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v5ZM2 9c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v5Z',
            className: d
        })
    });
};
