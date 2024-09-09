var s = n(735250);
n(470079);
var a = n(120356),
    r = n.n(a),
    i = n(481060),
    l = n(817199);
t.Z = (e) => {
    var t, n, a, o;
    let { title: c, shouldShowElement: d, cardVariantStyleInfo: _, description: u, titleClassName: E = '', subtitle: T = '', subtitleClassName: I } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(i.Heading, {
                variant: 'heading-xl/extrabold',
                className: r()(l.cardHeading, E),
                children: c
            }),
            0 !== T.length &&
                (null == d || d(null == _ ? void 0 : _.subtitle)) &&
                (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)('div', {
                        className: I,
                        children: [
                            (0, s.jsx)(i.Text, {
                                variant: null !== (a = null == _ ? void 0 : null === (t = _.subtitle) || void 0 === t ? void 0 : t.textVariant) && void 0 !== a ? a : 'text-sm/normal',
                                children: T
                            }),
                            null != u &&
                                (0, s.jsx)(i.Text, {
                                    variant: null !== (o = null == _ ? void 0 : null === (n = _.description) || void 0 === n ? void 0 : n.textVariant) && void 0 !== o ? o : 'text-sm/normal',
                                    children: (0, s.jsxs)(s.Fragment, {
                                        children: [(0, s.jsx)('br', {}), u]
                                    })
                                })
                        ]
                    })
                })
        ]
    });
};
