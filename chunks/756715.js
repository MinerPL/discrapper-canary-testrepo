n.r(t),
    n.d(t, {
        Anchor: function () {
            return E;
        }
    }),
    n(411104);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(532712),
    l = n(1561),
    u = n(84735),
    c = n(335854),
    d = n(645499),
    _ = n(685580);
function E(e) {
    let { href: t, onClick: n, className: a, children: E, rel: f, target: h, useDefaultUnderlineStyles: p = !0, title: I, style: m, focusProps: T, ...S } = e;
    null != t && null == n && (n = c.X.getDefaultLinkInterceptor(t));
    let g = i.useContext(o.g),
        A = {
            className: s()(_.anchor, { [_.anchorUnderlineOnHover]: p }, a),
            href: t,
            onClick: n,
            rel: null != f ? f : void 0,
            target: null != h ? h : void 0,
            title: null != I ? I : void 0,
            style: null != m ? m : void 0
        };
    return (null != t && !(0, d.B)(t) && ((A.rel = 'noreferrer noopener'), (A.target = '_blank')), g && delete A.href, null != n)
        ? (0, r.jsx)(l.P, {
              tag: 'a',
              ...S,
              ...A,
              onClick: n,
              focusProps: T,
              children: E
          })
        : (0, r.jsx)(u.t, {
              ...T,
              children: (0, r.jsx)('a', {
                  ...S,
                  ...A,
                  children: E
              })
          });
}
