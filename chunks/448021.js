n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651),
    r = n(192379),
    a = n(793030),
    l = n(442837),
    s = n(445986),
    o = n(9807),
    c = n(341176),
    d = n(312097),
    u = n(451478),
    h = n(981631),
    m = n(388032),
    p = n(408313),
    g = n(902294);
function f(e) {
    let { application: t, carouselItems: n } = e,
        f = (0, l.e7)([u.Z], () => u.Z.isFocused()),
        _ = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('img', {
                    className: p.errorImage,
                    src: g,
                    'aria-hidden': !0,
                    alt: ''
                }),
                (0, i.jsx)(a.X6, {
                    variant: 'heading-xl/semibold',
                    children: m.intl.string(m.t.UvDfMz)
                })
            ]
        });
    n.forEach((e, i) => {
        e.alt = m.intl.formatToPlainString(m.t.sSEhHR, {
            index: i + 1,
            totalImages: n.length,
            name: t.name
        });
    });
    let E = r.useCallback(
        (e, t) => {
            if (e.type === h.s9s.IMG) {
                let t = n.filter((e) => e.type === h.s9s.IMG),
                    i = t.findIndex((t) => t === e);
                if (i < 0) return;
                let r = t.map((e) => ({
                    url: (0, s.Q)(e.src),
                    original: e.src,
                    width: e.width,
                    height: e.height,
                    type: 'IMAGE'
                }));
                (0, d.K)({
                    items: r,
                    startingIndex: i,
                    fit: c.D.CONTAIN,
                    shouldHideMediaOptions: !0,
                    shouldAnimateCarousel: !0,
                    location: 'GlobalDiscoveryAppsDetailCarousel'
                });
            }
        },
        [n]
    );
    return 0 === n.length
        ? null
        : (0, i.jsx)(o.Z, {
              className: p.carousel,
              themedPagination: !0,
              items: n,
              autoplayInterval: 8000,
              paused: !f,
              videoAutoPlay: !0,
              onCurrentItemClick: E,
              errorComponent: _
          });
}
