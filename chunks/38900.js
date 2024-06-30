var s = n(735250);
n(470079);
var r = n(120356), a = n.n(r), o = n(4477), i = n(12900), l = n(423839), c = n(246318);
let d = () => 4 * Math.random() + 8, u = [
        d(),
        d(),
        d()
    ];
t.Z = () => (0, s.jsx)('div', {
    className: o.skeletons,
    children: u.map(e => (0, s.jsxs)('div', {
        className: o.cardsContainer,
        children: [
            (0, s.jsx)('div', {
                className: a()(l.skeleton, i.shopBanner),
                children: (0, s.jsx)('div', { className: l.bannerBody })
            }),
            Array.from({ length: e }, (e, t) => t).map(e => (0, s.jsx)('div', {
                className: a()(l.skeleton, c.shopCard),
                children: (0, s.jsxs)('div', {
                    className: l.cardBody,
                    children: [
                        (0, s.jsx)('div', { className: l.cardAvatar }),
                        (0, s.jsx)('div', { className: l.cardTitle }),
                        (0, s.jsx)('div', { className: l.cardDescription }),
                        (0, s.jsx)('div', { className: l.cardSummary })
                    ]
                })
            }, e))
        ]
    }, e))
});
