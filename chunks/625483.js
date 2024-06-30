n.d(t, {
    J: function () {
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
                d: 'M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
                className: d
            }),
            (0, r.jsx)('path', {
                fill: 'string' == typeof c ? c : c.css,
                fillRule: 'evenodd',
                d: 'M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0ZM7.74 9.3A2 2 0 0 1 9.3 7.75l7.22-1.45a1 1 0 0 1 1.18 1.18l-1.45 7.22a2 2 0 0 1-1.57 1.57l-7.22 1.45a1 1 0 0 1-1.18-1.18L7.74 9.3Z',
                clipRule: 'evenodd',
                className: d
            })
        ]
    });
};
