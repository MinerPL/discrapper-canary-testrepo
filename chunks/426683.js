n.d(t, {
    x: function () {
        return o;
    }
});
var r = n(735250);
n(470079);
var i = n(692547),
    a = n(331595),
    s = n(267843);
let o = (e) => {
    var t, n;
    let { size: o = 'md', width: l, height: u, color: c = i.Z.colors.INTERACTIVE_NORMAL, colorClass: d = '', ..._ } = e,
        E = (0, s.m)(o),
        f = null !== (t = null == E ? void 0 : E.width) && void 0 !== t ? t : l,
        h = null !== (n = null == E ? void 0 : E.height) && void 0 !== n ? n : u;
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
            d: 'M7.75 2a.75.75 0 0 0-.75.75V7H2.75a.75.75 0 0 0-.75.75v1.5c0 .41.34.75.75.75H7v4H2.75a.75.75 0 0 0-.75.75v1.5c0 .41.34.75.75.75H7v4.25c0 .41.34.75.75.75h1.5c.41 0 .75-.34.75-.75V17h4v4.25c0 .41.34.75.75.75h1.5c.41 0 .75-.34.75-.75V17h4.25c.41 0 .75-.34.75-.75v-1.5a.75.75 0 0 0-.75-.75H17v-4h4.25c.41 0 .75-.34.75-.75v-1.5a.75.75 0 0 0-.75-.75H17V2.75a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75V7h-4V2.75A.75.75 0 0 0 9.25 2h-1.5ZM14 14v-4h-4v4h4Z',
            clipRule: 'evenodd',
            className: d
        })
    });
};
