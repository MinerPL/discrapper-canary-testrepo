n.d(t, {
    j: function () {
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
            d: 'M13.23 18h-2.27l-.99-2.77H4.75L3.76 18H1.5L6.21 5.58h2.3L13.23 18ZM7.36 7.87 5.44 13.3h3.85L7.36 7.87ZM17 18.25c-.75 0-1.38-.22-1.88-.66a2.36 2.36 0 0 1-.76-1.88c0-1.9 1.73-2.86 5.18-2.9v-.25c0-.51-.15-.91-.45-1.2-.3-.29-.72-.43-1.26-.43a3.55 3.55 0 0 0-2.3.97l-.97-1.24c.4-.44.9-.77 1.5-1.01a4.95 4.95 0 0 1 1.88-.36c2.4 0 3.58 1.09 3.58 3.27V18h-1.81l-.17-1.06a3.01 3.01 0 0 1-2.53 1.31Zm.51-1.58c.78 0 1.46-.38 2.03-1.14v-1.4c-1.1.04-1.92.18-2.44.43-.53.24-.8.6-.8 1.06 0 .34.11.6.33.78.21.18.5.27.88.27Z',
            clipRule: 'evenodd',
            className: d
        })
    });
};
