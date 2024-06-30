n.d(t, {
    W: function () {
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
                d: 'M15.56 11.77c.2-.1.44.02.44.23a4 4 0 1 1-4-4c.21 0 .33.25.23.44A2.5 2.5 0 0 0 14.5 12c.38 0 .74-.08 1.06-.23Z',
                className: d
            }),
            (0, r.jsx)('path', {
                fill: 'string' == typeof c ? c : c.css,
                fillRule: 'evenodd',
                d: 'M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm10 1c4.99 0 7.3 4.4 7.86 5.67.1.21.1.45 0 .66C19.3 13.6 17 18 12 18s-7.3-4.4-7.86-5.67a.8.8 0 0 1 0-.66C4.7 10.4 7 6 12 6Z',
                clipRule: 'evenodd',
                className: d
            })
        ]
    });
};
