n.d(t, {
    M: function () {
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
            d: 'M10.9 22.95c-1.7-.16-3.4-.77-4.88-1.73-1.24-.8-1.52-1.13-1.52-1.8 0-1.32 1.46-3.65 3.96-6.3 1.42-1.5 3.4-3.26 3.61-3.22.42.1 3.74 3.33 4.98 4.86 1.97 2.4 2.87 4.38 2.41 5.26-.35.67-2.51 1.98-4.1 2.48-1.32.42-3.04.6-4.46.45Zm-8.06-4.9a11.4 11.4 0 0 1-1.8-5.37A8.59 8.59 0 0 1 1.23 10c.3-1.9 1.38-4.08 2.67-5.43.56-.57.6-.59 1.28-.36.81.27 1.69.88 3.04 2.1l.79.71-.43.53c-2 2.46-4.12 5.94-4.91 8.1-.43 1.17-.6 2.34-.42 2.83.12.34 0 .21-.41-.43Zm18.01.26c.1-.5-.03-1.4-.33-2.32-.65-1.98-2.82-5.67-4.82-8.18l-.63-.8.68-.62c.89-.81 1.5-1.3 2.17-1.71a4.18 4.18 0 0 1 1.6-.62c.2 0 .9.73 1.46 1.52a11.51 11.51 0 0 1 1.85 4.26c.21 1 .23 3.15.03 4.14-.16.82-.5 1.89-.82 2.6-.25.55-.86 1.6-1.13 1.94-.14.17-.14.17-.06-.2ZM11.08 3.68a13.7 13.7 0 0 0-3.12-1.1 5.74 5.74 0 0 0-1.05-.06c-.65.03-.62 0 .42-.5.87-.4 1.59-.64 2.57-.84 1.1-.24 3.17-.24 4.25-.01 1.17.25 2.55.76 3.33 1.24l.23.14-.53-.03c-1.06-.05-2.59.37-4.24 1.17-.5.25-.92.44-.96.43-.03 0-.43-.2-.9-.44Z',
            className: d
        })
    });
};
