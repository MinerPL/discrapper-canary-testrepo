n.d(t, {
    K: function () {
        return f;
    }
});
var a = n(735250);
n(470079);
var r = n(120356),
    s = n.n(r),
    o = n(53824),
    i = n(291256),
    l = n(801895),
    c = n(775409);
let d = () => 4 * Math.random() + 8,
    u = [d(), d(), d()],
    f = () =>
        (0, a.jsx)('div', {
            className: s()(l.skeleton, c.shopCard),
            children: (0, a.jsxs)('div', {
                className: l.cardBody,
                children: [(0, a.jsx)('div', { className: l.cardAvatar }), (0, a.jsx)('div', { className: l.cardTitle }), (0, a.jsx)('div', { className: l.cardDescription }), (0, a.jsx)('div', { className: l.cardSummary })]
            })
        });
t.Z = () =>
    (0, a.jsx)('div', {
        className: o.skeletons,
        children: u.map((e) =>
            (0, a.jsxs)(
                'div',
                {
                    className: o.cardsContainer,
                    children: [
                        (0, a.jsx)('div', {
                            className: s()(l.skeleton, i.shopBanner),
                            children: (0, a.jsx)('div', { className: l.bannerBody })
                        }),
                        Array.from({ length: e }, (e, t) => t).map((e) => (0, a.jsx)(f, {}, e))
                    ]
                },
                e
            )
        )
    });
