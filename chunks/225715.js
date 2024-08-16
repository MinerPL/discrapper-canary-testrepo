t.d(n, {
    CW: function () {
        return u;
    },
    G9: function () {
        return x;
    },
    K9: function () {
        return f;
    },
    q$: function () {
        return h;
    },
    r0: function () {
        return d;
    },
    s$: function () {
        return m;
    }
});
var r = t(735250);
t(470079);
var i = t(120356),
    l = t.n(i),
    a = t(481060),
    s = t(41959),
    o = t(245561),
    c = t(640360);
let u = (e) => {
        let { application: n, asset: t, className: i, ...l } = e;
        return (0, r.jsx)(s.Z, {
            application: n,
            size: s.H.MEDIUM,
            asset: t,
            className: i,
            ...l
        });
    },
    d = (e) => {
        let { children: n, className: t, id: i, ...s } = e;
        return (0, r.jsx)(a.Heading, {
            className: l()(c.header, t),
            variant: 'heading-xl/extrabold',
            id: i,
            ...s,
            children: n
        });
    };
function m() {
    return (0, r.jsx)('hr', { className: c.divider });
}
let f = (e) => {
        let { className: n, title: t, description: i, ...l } = e;
        return (0, r.jsxs)('div', {
            className: n,
            ...l,
            children: [
                (0, r.jsx)(a.Heading, {
                    variant: 'heading-md/bold',
                    color: 'header-primary',
                    children: t
                }),
                (0, r.jsx)(a.Heading, {
                    variant: 'heading-sm/normal',
                    color: 'header-secondary',
                    children: i
                })
            ]
        });
    },
    x = (e) => {
        let { applicationId: n, storeListingBenefits: t, skuBenefits: i, className: a, ...s } = e;
        return (0, r.jsx)('div', {
            className: l()(c.benefitsContainer, a),
            ...s,
            children: (0, r.jsx)(o.GU, {
                applicationId: n,
                storeListingBenefits: t,
                skuBenefits: i,
                className: c.benefit
            })
        });
    },
    h = (e) => {
        let { children: n, className: t, ...i } = e;
        return (0, r.jsx)('div', {
            className: l()(c.container, t),
            ...i,
            children: n
        });
    };
