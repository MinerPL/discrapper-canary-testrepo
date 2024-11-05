t.d(n, {
    Z: function () {
        return g;
    }
});
var r = t(200651),
    i = t(192379),
    l = t(120356),
    a = t.n(l),
    o = t(481060),
    s = t(607070),
    u = t(124347),
    c = t(52824),
    d = t(549635),
    m = t(388032),
    h = t(244190);
function f(e) {
    return 'media-view-scroll-thumbnail-'.concat(e);
}
let p = i.memo(function (e) {
    var n;
    let { item: t } = e;
    let i =
        'IMAGE' === (n = t).type
            ? (0, c.q)({
                  proxyURL: n.proxyUrl,
                  url: n.url
              })
            : 'VIDEO' === n.type && null != n.proxyUrl
              ? (0, d.D)(n.proxyUrl)
              : null;
    return null == i
        ? null
        : (0, r.jsx)(u.ZP, {
              width: 48,
              height: 48,
              src: i,
              shouldAnimate: !1,
              srcIsAnimated: t.srcIsAnimated,
              alt: t.alt
          });
});
function g(e) {
    let { items: n, currentIndex: t, onGalleryItemClick: l } = e,
        u = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let e = document.getElementById(f(t));
            null != u.current &&
                null != e &&
                u.current.scrollIntoViewNode({
                    node: e,
                    animate: !s.Z.useReducedMotion,
                    padding: 24
                });
        }, [t]),
        (0, r.jsx)('div', {
            className: h.galleryContainer,
            children: (0, r.jsx)(o.AdvancedScrollerThin, {
                orientation: 'horizontal',
                className: h.gallery,
                ref: u,
                children: n.map((e, i) => {
                    let s = i === t,
                        u = s ? m.t['qv/U5e'] : m.t.zviMAA;
                    return (0, r.jsx)(
                        o.Clickable,
                        {
                            id: f(i),
                            className: a()(h.galleryItem, { [h.selected]: s }),
                            'aria-label': m.intl.formatToPlainString(u, {
                                pageNumber: i + 1,
                                totalPages: n.length
                            }),
                            onClick: () => l(i),
                            children: (0, r.jsx)(p, { item: e })
                        },
                        i
                    );
                })
            })
        })
    );
}
