n.d(t, {
    F: function () {
        return u;
    }
}), n(757143);
var s = n(735250);
n(470079);
var r = n(120356), a = n.n(r), o = n(481060), i = n(937615), l = n(884697), c = n(713055);
let d = e => e.length > 5 ? e.replace(/\.00$/, '') : e, u = e => {
        var t;
        let {
                price: {
                    amount: n,
                    currency: r
                },
                renderPrice: u,
                icon: p,
                className: g,
                discount: f = l.f_,
                variant: C = 'heading-md/semibold'
            } = e, m = d((0, i.T4)(n, r)), h = f !== l.f_ && f.discountPercentage >= 5 ? (0, s.jsxs)(s.Fragment, {
                children: [
                    m,
                    (0, s.jsx)(o.Heading, {
                        variant: C,
                        color: 'text-positive',
                        className: c.discount,
                        children: ' (-'.concat(f.discountPercentage, '%)')
                    })
                ]
            }) : m;
        return (0, s.jsx)(s.Fragment, {
            children: (0, s.jsxs)(o.Heading, {
                variant: C,
                className: a()(c.container, g),
                children: [
                    p,
                    null !== (t = null == u ? void 0 : u(h)) && void 0 !== t ? t : h
                ]
            })
        });
    };
