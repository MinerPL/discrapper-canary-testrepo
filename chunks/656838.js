n.d(t, {
    k: function () {
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
            d: 'M16.91 5C18.61 5 20 3.48 20 1.6v-.1a.5.5 0 0 0-.5-.5h-15a.5.5 0 0 0-.5.5v.1C4 3.49 5.38 5 7.09 5H8v4.35l-3.39 3.26A2 2 0 0 0 4 14.05V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-.95a2 2 0 0 0-.61-1.44L16 9.35V5h.91ZM13.37 17.25c.33 0 .56.3.5.61l-1.08 4.75a.5.5 0 0 1-.49.39h-.6a.5.5 0 0 1-.49-.39l-1.07-4.75a.5.5 0 0 1 .49-.61h2.74Z',
            className: d
        })
    });
};
