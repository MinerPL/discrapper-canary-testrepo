t(47120);
var i = t(735250),
    o = t(470079),
    l = t(120356),
    s = t.n(l),
    a = t(512722),
    r = t.n(a),
    u = t(392711),
    d = t.n(u),
    m = t(947849),
    c = t(499376),
    h = t(546432),
    I = t(217702),
    x = t(834909);
let g = Math.round((I.mT - 8) / 3),
    p = Math.round((I.mT - 4) / 2),
    C = Math.round((I.Jj - 4) / 2),
    f = Math.round((2 * (I.mT - 4)) / 3),
    M = f / 2;
function T(e) {
    let { visualMediaItems: n, footer: t } = e;
    null != t && r()(1 === n.length, 'footer only gets applied to single items');
    let o = n.length;
    if (1 === o)
        return (0, i.jsx)(j, {
            itemsForLayout: n,
            isSingleImage: !0,
            footer: t
        });
    if (2 === o) return (0, i.jsx)(v, { itemsForLayout: n });
    if (3 === o) return (0, i.jsx)(E, { itemsForLayout: n });
    if (4 === o) return (0, i.jsx)(y, { itemsForLayout: n });
    let l = o % 3;
    return (0, i.jsxs)(i.Fragment, {
        children: [1 === l && (0, i.jsx)(j, { itemsForLayout: n.slice(0, l) }), 2 === l && (0, i.jsx)(v, { itemsForLayout: n.slice(0, l) }), 0 === l ? (0, i.jsx)(N, { itemsForLayout: n }) : (0, i.jsx)(N, { itemsForLayout: n.slice(l) })]
    });
}
function j(e) {
    let { itemsForLayout: n, isSingleImage: t, footer: o } = e,
        l = n[0];
    return (0, i.jsx)('div', {
        className: s()(x.oneByOneGrid, {
            [x.oneByOneGridSingle]: t,
            [x.oneByOneGridMosaic]: !t,
            [x.hasFooter]: null != o
        }),
        children: (0, i.jsx)(A, {
            props: l,
            useFullWidth: !t,
            isSingleItem: !0,
            footer: o
        })
    });
}
function v(e) {
    let { itemsForLayout: n } = e;
    return (0, i.jsx)('div', {
        className: x.oneByTwoGrid,
        children: n.map((e) =>
            (0, i.jsx)(
                'div',
                {
                    className: x.oneByTwoGridItem,
                    children: (0, i.jsx)(A, {
                        props: e,
                        maxWidth: p,
                        maxHeight: p
                    })
                },
                e.item.uniqueId
            )
        )
    });
}
function E(e) {
    let { itemsForLayout: n } = e;
    return (0, i.jsxs)('div', {
        className: s()(x.oneByTwoGrid, x.oneByTwoLayoutThreeGrid),
        children: [
            (0, i.jsx)('div', {
                className: x.oneByTwoSoloItem,
                children: (0, i.jsx)(A, {
                    props: n[0],
                    maxWidth: f
                })
            }),
            (0, i.jsx)('div', {
                className: x.oneByTwoDuoItem,
                children: (0, i.jsx)('div', {
                    className: x.twoByOneGrid,
                    children: n.splice(1).map((e) =>
                        (0, i.jsx)(
                            'div',
                            {
                                className: x.twoByOneGridItem,
                                children: (0, i.jsx)(A, {
                                    props: e,
                                    maxWidth: M,
                                    maxHeight: C
                                })
                            },
                            e.item.uniqueId
                        )
                    )
                })
            })
        ]
    });
}
function y(e) {
    let { itemsForLayout: n } = e;
    return (0, i.jsx)('div', {
        className: x.twoByTwoGrid,
        children: n.map((e) =>
            (0, i.jsx)(
                A,
                {
                    props: e,
                    maxWidth: p,
                    maxHeight: C
                },
                e.item.uniqueId
            )
        )
    });
}
function N(e) {
    let { itemsForLayout: n } = e;
    return (0, i.jsx)('div', {
        className: x.threeByThreeGrid,
        children: n.map((e) =>
            (0, i.jsx)(
                A,
                {
                    props: e,
                    maxWidth: g,
                    maxHeight: g
                },
                e.item.uniqueId
            )
        )
    });
}
let w = (e) => ({
        className: s()(e, x.itemContentContainer),
        imgContainerClassName: x.lazyImgContainer,
        imgClassName: x.lazyImg
    }),
    O = (e) => ({ className: s()(e, x.lazyImg) });
function A(e) {
    let { props: n, maxWidth: t = I.mT, maxHeight: o = I.Jj, useFullWidth: l = !0, isSingleItem: s = !1, footer: a } = e,
        r = n.item.type,
        u = {
            ...n,
            ...('IMAGE' === r && w(n.className)),
            ...('VIDEO' === r && O(n.className)),
            mediaLayoutType: I.hV.MOSAIC,
            maxWidth: t,
            maxHeight: o,
            useFullWidth: l,
            isSingleMosaicItem: s
        };
    return (0, i.jsx)(m.h.Provider, {
        value: n.gifFavoriteButton,
        children: (0, i.jsx)(h.Z, {
            ...u,
            footer: a
        })
    });
}
n.Z = function (e) {
    let { items: n, inlineForwardButton: t } = e,
        {
            groupableVisualMediaItems: l,
            nonGroupableVisualMediaItems: a,
            nonVisualMediaItems: r
        } = (function (e) {
            return o.useMemo(() => {
                let [n, t] = d().partition(e, (e) => (0, c.R_)(e.item.type)),
                    [i, o] = d().partition(n, (e) => (0, c.Ld)(e.item.type));
                return {
                    groupableVisualMediaItems: i,
                    nonGroupableVisualMediaItems: o,
                    nonVisualMediaItems: t
                };
            }, [e]);
        })(n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            l.length > 0 &&
                (null != t
                    ? (0, i.jsxs)('div', {
                          className: s()(x.mosaicContainer, 1 === l.length && x.single),
                          children: [
                              (0, i.jsx)('div', {
                                  className: x.visualMediaItemContainer,
                                  children: (0, i.jsx)(T, { visualMediaItems: l })
                              }),
                              t
                          ]
                      })
                    : (0, i.jsx)('div', {
                          className: x.visualMediaItemContainer,
                          children: (0, i.jsx)(T, { visualMediaItems: l })
                      })),
            a.length > 0 &&
                a.map((e) => {
                    let n = e.renderMosaicItemFooter({
                        item: e.item,
                        message: e.message
                    });
                    return (0, i.jsx)(
                        'div',
                        {
                            className: x.visualMediaItemContainer,
                            children: (0, i.jsx)(T, {
                                visualMediaItems: [e],
                                footer: n
                            })
                        },
                        e.item.uniqueId
                    );
                }),
            r.length > 0 &&
                (0, i.jsx)('div', {
                    className: x.nonVisualMediaItemContainer,
                    children: r.map((e) =>
                        (0, i.jsx)(
                            'div',
                            {
                                className: x.nonVisualMediaItem,
                                children: (0, i.jsx)(A, { props: e })
                            },
                            e.item.uniqueId
                        )
                    )
                })
        ]
    });
};
