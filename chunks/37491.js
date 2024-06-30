n.d(t, {
    c: function () {
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
                d: 'M1 6a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v1H1V6Z',
                className: d
            }),
            (0, r.jsx)('path', {
                fill: 'string' == typeof c ? c : c.css,
                fillRule: 'evenodd',
                d: 'M1 10h22v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-8Zm4 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Zm-1 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm13-4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z',
                clipRule: 'evenodd',
                className: d
            })
        ]
    });
};
