var i,
    o,
    r,
    l,
    s = n(200651),
    a = n(192379),
    u = n(120356),
    c = n.n(u),
    d = n(481060),
    h = n(388032),
    f = n(720670);
let p = {
    BLOCK: f.block,
    INLINE: f.inline
};
class m extends (l = a.PureComponent) {
    render() {
        let { children: e, className: t, textClassName: n, type: i = p.BLOCK, style: o } = this.props;
        return (0, s.jsxs)('div', {
            className: c()(t, i),
            style: o,
            children: [
                (0, s.jsxs)(d.Text, {
                    variant: 'text-sm/bold',
                    tag: 'div',
                    color: 'text-positive',
                    className: f.pro,
                    children: [h.intl.string(h.t['8tvIiI']), ':']
                }),
                (0, s.jsx)(d.Text, {
                    className: c()(f.tip, n),
                    variant: 'text-sm/normal',
                    children: e
                })
            ]
        });
    }
}
(i = m),
    (o = 'Types'),
    (r = p),
    o in i
        ? Object.defineProperty(i, o, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[o] = r),
    (t.Z = m);
