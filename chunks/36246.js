n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(735250);
n(470079);
var a = n(120356), l = n.n(a), s = n(873546), r = n(481060), o = n(470134), c = n(874771);
function u(e) {
    let {
            guildId: t,
            children: n,
            className: a
        } = e, {
            horizontalScrollNotice: u,
            handleScroll: d,
            handleSetScrollerRef: h,
            handleSetContainerRef: p
        } = (0, o.Z)(t), m = (0, i.jsx)('div', {
            className: c.tierPreviewsContainer,
            children: (0, i.jsx)('div', {
                className: l()(c.tierPreviews, a),
                children: n
            })
        });
    return !s.tq && (m = (0, i.jsxs)(i.Fragment, {
        children: [
            u,
            (0, i.jsx)(r.AdvancedScroller, {
                className: c.scroller,
                orientation: 'horizontal',
                ref: h,
                onScroll: d,
                children: m
            })
        ]
    })), (0, i.jsx)('div', {
        className: c.carouselMaxWidth,
        ref: p,
        children: m
    });
}
