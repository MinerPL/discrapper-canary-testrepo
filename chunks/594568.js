n.d(t, {
    G: function () {
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
            d: 'M15.3 15.3a1 1 0 0 1 1.4 0l2.3 2.29 2.3-2.3a1 1 0 0 1 1.4 1.42L20.42 19l2.3 2.3a1 1 0 1 1-1.42 1.4L19 20.42l-2.3 2.3a1 1 0 0 1-1.4-1.42L17.58 19l-2.3-2.3a1 1 0 0 1 0-1.4ZM1.23 21.13a1 1 0 0 1 0-1.41l7.48-7.48c.2-.2.5-.2.7 0l2.13 2.12c.2.2.2.52 0 .71l-7.48 7.48a1 1 0 0 1-1.41 0l-1.42-1.42ZM18.65 14.4l-.53-.52a3 3 0 0 0-3.86-.32c-.22.16-.54.16-.73-.03L7.76 7.76a2 2 0 0 1 0-2.83l3.53-3.54a2 2 0 0 1 2.83 0l2.72 2.72.66-.66a1 1 0 0 1 1.41 0l1.41 1.42a1 1 0 0 1 0 1.41l-.65.66 2.94 2.94a2 2 0 0 1 0 2.83l-.14.14c-.1.1-.26.15-.4.15a3 3 0 0 0-2.2.88l-.52.52a.5.5 0 0 1-.7 0Z',
            className: d
        })
    });
};
