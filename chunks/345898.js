var i = n(735250);
n(470079);
var a = n(120356), s = n.n(a), l = n(481060), r = n(672188);
t.Z = e => {
    let {
        renderTitle: t,
        renderTagline: n,
        renderActions: a,
        renderMedia: o,
        className: c,
        isHorizontal: d = !1
    } = e;
    return (0, i.jsxs)('div', {
        className: s()(r.tile, { [r.tileHorizontal]: d }, c),
        children: [
            (0, i.jsx)('div', {
                className: s()(r.media, { [r.mediaHorizontal]: d }),
                children: null == o ? void 0 : o()
            }),
            (0, i.jsxs)('div', {
                className: r.description,
                children: [
                    (0, i.jsx)(l.H, {
                        className: r.title,
                        children: null == t ? void 0 : t()
                    }),
                    (0, i.jsx)('div', {
                        className: r.tagline,
                        children: null == n ? void 0 : n()
                    }),
                    (0, i.jsx)('div', {
                        className: r.actions,
                        children: null == a ? void 0 : a()
                    })
                ]
            })
        ]
    });
};
