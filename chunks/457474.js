n.d(t, {
    l: function () {
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
            d: 'M15 5a3 3 0 0 0-3-3 1 1 0 0 0-1 1v2a3 3 0 0 1-.19 1.05L6.55 8.93a7.9 7.9 0 0 0-3.26 8.4c.43 1.77 1.44 3.42 3.14 4.07.86.34 1.89.6 2.95.6h8.03a2.09 2.09 0 0 0 1.93-2.88l-.4-.97a.2.2 0 0 1 .08-.24l.54-.33a1.99 1.99 0 0 0 .8-2.44l-.43-1.02a.25.25 0 0 1 .03-.23l.6-.9a1.92 1.92 0 0 0-1.6-2.99h-5.39A8 8 0 0 0 15 5.44V5Z',
            className: d
        })
    });
};
