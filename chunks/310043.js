t(47120);
var i = t(735250), s = t(470079), o = t(120356), l = t.n(o), r = t(512722), a = t.n(r), u = t(392711), d = t.n(u), m = t(941797), c = t(69750), h = t(768760), I = t(849019);
let x = Math.round((h.mT - 8) / 3), p = Math.round((h.mT - 4) / 2), C = Math.round((h.Jj - 4) / 2), g = Math.round(2 * (h.mT - 4) / 3), f = g / 2;
function j(e) {
    let {
        visualMediaItems: n,
        footer: t
    } = e;
    null != t && a()(1 === n.length, 'footer only gets applied to single items');
    let s = n.length;
    if (1 === s)
        return (0, i.jsx)(T, {
            itemsForLayout: n,
            isSingleImage: !0,
            footer: t
        });
    if (2 === s)
        return (0, i.jsx)(y, { itemsForLayout: n });
    if (3 === s)
        return (0, i.jsx)(M, { itemsForLayout: n });
    if (4 === s)
        return (0, i.jsx)(v, { itemsForLayout: n });
    let o = s % 3;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            1 === o && (0, i.jsx)(T, { itemsForLayout: n.slice(0, o) }),
            2 === o && (0, i.jsx)(y, { itemsForLayout: n.slice(0, o) }),
            0 === o ? (0, i.jsx)(N, { itemsForLayout: n }) : (0, i.jsx)(N, { itemsForLayout: n.slice(o) })
        ]
    });
}
function T(e) {
    let {
            itemsForLayout: n,
            isSingleImage: t,
            footer: s
        } = e, o = n[0];
    return (0, i.jsx)('div', {
        className: l()(I.oneByOneGrid, {
            [I.oneByOneGridSingle]: t,
            [I.oneByOneGridMosaic]: !t,
            [I.hasFooter]: null != s
        }),
        children: (0, i.jsx)(w, {
            props: o,
            useFullWidth: !t,
            isSingleItem: !0,
            footer: s
        })
    });
}
function y(e) {
    let {itemsForLayout: n} = e;
    return (0, i.jsx)('div', {
        className: I.oneByTwoGrid,
        children: n.map(e => (0, i.jsx)('div', {
            className: I.oneByTwoGridItem,
            children: (0, i.jsx)(w, {
                props: e,
                maxWidth: p,
                maxHeight: p
            })
        }, e.item.uniqueId))
    });
}
function M(e) {
    let {itemsForLayout: n} = e;
    return (0, i.jsxs)('div', {
        className: l()(I.oneByTwoGrid, I.oneByTwoLayoutThreeGrid),
        children: [
            (0, i.jsx)('div', {
                className: I.oneByTwoSoloItem,
                children: (0, i.jsx)(w, {
                    props: n[0],
                    maxWidth: g
                })
            }),
            (0, i.jsx)('div', {
                className: I.oneByTwoDuoItem,
                children: (0, i.jsx)('div', {
                    className: I.twoByOneGrid,
                    children: n.splice(1).map(e => (0, i.jsx)('div', {
                        className: I.twoByOneGridItem,
                        children: (0, i.jsx)(w, {
                            props: e,
                            maxWidth: f,
                            maxHeight: C
                        })
                    }, e.item.uniqueId))
                })
            })
        ]
    });
}
function v(e) {
    let {itemsForLayout: n} = e;
    return (0, i.jsx)('div', {
        className: I.twoByTwoGrid,
        children: n.map(e => (0, i.jsx)(w, {
            props: e,
            maxWidth: p,
            maxHeight: C
        }, e.item.uniqueId))
    });
}
function N(e) {
    let {itemsForLayout: n} = e;
    return (0, i.jsx)('div', {
        className: I.threeByThreeGrid,
        children: n.map(e => (0, i.jsx)(w, {
            props: e,
            maxWidth: x,
            maxHeight: x
        }, e.item.uniqueId))
    });
}
let E = e => ({
        className: l()(e, I.itemContentContainer),
        imgContainerClassName: I.lazyImgContainer,
        imgClassName: I.lazyImg
    }), O = e => ({ className: l()(e, I.lazyImg) });
function w(e) {
    let {
            props: n,
            maxWidth: t = h.mT,
            maxHeight: s = h.Jj,
            useFullWidth: o = !0,
            isSingleItem: l = !1,
            footer: r
        } = e, a = n.item.type, u = {
            ...n,
            ...'IMAGE' === a && E(n.className),
            ...'VIDEO' === a && O(n.className),
            mediaLayoutType: h.hV.MOSAIC,
            maxWidth: t,
            maxHeight: s,
            useFullWidth: o,
            isSingleMosaicItem: l
        };
    return (0, i.jsx)(m.h.Provider, {
        value: n.gifFavoriteButton,
        children: (0, i.jsx)(c.ZP, {
            ...u,
            footer: r
        })
    });
}
n.Z = function (e) {
    let {
            items: n,
            inlineForwardButton: t
        } = e, {
            groupableVisualMediaItems: o,
            nonGroupableVisualMediaItems: l,
            nonVisualMediaItems: r
        } = function (e) {
            return s.useMemo(() => {
                let [n, t] = d().partition(e, e => (0, c.R_)(e.item.type)), [i, s] = d().partition(n, e => (0, c.Ld)(e.item.type));
                return {
                    groupableVisualMediaItems: i,
                    nonGroupableVisualMediaItems: s,
                    nonVisualMediaItems: t
                };
            }, [e]);
        }(n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            o.length > 0 && (null != t ? (0, i.jsxs)('div', {
                className: I.mosaicContainer,
                children: [
                    (0, i.jsx)('div', {
                        className: I.visualMediaItemContainer,
                        children: (0, i.jsx)(j, { visualMediaItems: o })
                    }),
                    t
                ]
            }) : (0, i.jsx)('div', {
                className: I.visualMediaItemContainer,
                children: (0, i.jsx)(j, { visualMediaItems: o })
            })),
            l.length > 0 && l.map(e => {
                let n = e.renderMosaicItemFooter({
                    item: e.item,
                    message: e.message
                });
                return (0, i.jsx)('div', {
                    className: I.visualMediaItemContainer,
                    children: (0, i.jsx)(j, {
                        visualMediaItems: [e],
                        footer: n
                    })
                }, e.item.uniqueId);
            }),
            r.length > 0 && (0, i.jsx)('div', {
                className: I.nonVisualMediaItemContainer,
                children: r.map(e => (0, i.jsx)('div', {
                    className: I.nonVisualMediaItem,
                    children: (0, i.jsx)(w, { props: e })
                }, e.item.uniqueId))
            })
        ]
    });
};
