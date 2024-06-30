n.d(t, {
    Y: function () {
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
                d: 'M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1ZM11.8 3.8a5.95 5.95 0 0 1 8.93 7.8 1 1 0 1 1-1.59-1.2 3.95 3.95 0 0 0-5.93-5.2l-2.5 2.5a1 1 0 1 1-1.42-1.4l2.5-2.5ZM7.7 9.3a1 1 0 0 1 0 1.4l-2.5 2.5a3.95 3.95 0 0 0 5.2 5.94 1 1 0 1 1 1.2 1.6 5.95 5.95 0 0 1-7.8-8.95l2.5-2.5a1 1 0 0 1 1.4 0Z',
                fill: 'string' == typeof c ? c : c.css,
                className: d
            }),
            (0, r.jsx)('path', {
                d: 'M14.7 10.7a1 1 0 0 0-1.4-1.4l-4 4a1 1 0 1 0 1.4 1.4l4-4Z',
                fill: 'string' == typeof c ? c : c.css,
                className: d
            })
        ]
    });
};
