n.d(t, {
    u: function () {
        return s;
    }
});
var r = n(735250);
n(470079);
var i = n(692547), a = n(331595), o = n(267843);
let s = e => {
    var t, n;
    let {
            size: s = 'md',
            width: l,
            height: u,
            color: c = i.Z.colors.INTERACTIVE_NORMAL,
            colorClass: d = '',
            ..._
        } = e, E = (0, o.m)(s), f = null !== (t = null == E ? void 0 : E.width) && void 0 !== t ? t : l, h = null !== (n = null == E ? void 0 : E.height) && void 0 !== n ? n : u;
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
            d: 'M16 10.49V4a1 1 0 1 0 0-2H8a1 1 0 0 0 0 2v6.49a2 2 0 0 1-.5 1.33l-4.77 5.36A2.9 2.9 0 0 0 4.9 22h14.2a2.9 2.9 0 0 0 2.17-4.82l-4.76-5.36a2 2 0 0 1-.51-1.33ZM10 4v6.49a4 4 0 0 1-1.01 2.66l-1.35 1.51c1.14-.1 2.3.28 3.17 1.15l.13.13a3.73 3.73 0 0 0 4.56.56 3.73 3.73 0 0 1 2.02-.53L15 13.15A4 4 0 0 1 14 10.49V10h-1a1 1 0 1 1 0-2h1V7h-1a1 1 0 1 1 0-2h1V4h-4Z',
            clipRule: 'evenodd',
            className: d
        })
    });
};
