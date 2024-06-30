n.r(e), n.d(e, {
    default: function () {
        return c;
    }
});
var o = n(735250);
n(470079);
var r = n(120356), i = n.n(r), s = n(481060), a = n(761705), l = n(407517);
function c(t) {
    let {
        className: e,
        transitionState: n,
        items: r,
        startingIndex: c,
        onClose: u,
        onIndexChange: p,
        modalCarouselClassName: h,
        modalCarouselItemClassName: d
    } = t;
    return (0, o.jsx)(s.ModalRoot, {
        hideShadow: !0,
        className: i()(l.carouselModal, e),
        size: s.ModalSize.DYNAMIC,
        transitionState: n,
        'aria-label': '',
        onClick: u,
        children: (0, o.jsx)(a.Z, {
            className: h,
            items: r,
            startWith: c,
            onIndexChange: p,
            modalCarouselItemClassName: d
        })
    });
}
