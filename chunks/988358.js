n.d(t, {
    w: function () {
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
                fillRule: 'evenodd',
                d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h7.73c.12 0 .16-.26.05-.31A2.88 2.88 0 0 1 12 19a3 3 0 0 1 3-3h6.4c.2 0 .39-.11.45-.3a3 3 0 0 0 .15-.94V6a4 4 0 0 0-4-4ZM6.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM19 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-9.91 2.94a1 1 0 0 0-1.66 1.12 5.5 5.5 0 0 0 9.14 0 1 1 0 0 0-1.66-1.12 3.5 3.5 0 0 1-5.82 0Z',
                clipRule: 'evenodd',
                fill: 'string' == typeof c ? c : c.css,
                className: d
            }),
            (0, r.jsx)('path', {
                d: 'M15 18a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Z',
                fill: 'string' == typeof c ? c : c.css,
                className: d
            })
        ]
    });
};
