n.d(t, {
    _: function () {
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
            d: 'm11.33 14.83-2.16-2.16a1 1 0 0 1-.25-.99l.75-2.57A3 3 0 0 1 11 7.4l8.05-4.91a1.8 1.8 0 0 1 2.47 2.47L16.61 13a3 3 0 0 1-1.72 1.32l-2.57.75a1 1 0 0 1-.99-.25ZM8.74 13.57c-.2-.2-.44-.36-.7-.43a4 4 0 0 0-5 4.42C3.14 18.23 2.68 19 2 19a1 1 0 1 0 0 2h5a4 4 0 0 0 3.86-5.03c-.07-.27-.23-.51-.43-.7l-1.7-1.7ZM15 18a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Z',
            className: d
        })
    });
};
