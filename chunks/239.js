n.d(t, {
    Z: function () {
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
            d: 'M22 12a10 10 0 0 1-10 10H2.2a1 1 0 0 1-.75-1.66l2.06-2.37a.52.52 0 0 0 .04-.61A10 10 0 1 1 22 12Zm-10 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm7-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
            clipRule: 'evenodd',
            className: d
        })
    });
};
