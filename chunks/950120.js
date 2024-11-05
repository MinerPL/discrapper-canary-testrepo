t.r(n),
    t.d(n, {
        default: function () {
            return m;
        }
    });
var a = t(200651),
    r = t(192379),
    i = t(120356),
    l = t.n(i),
    o = t(873546),
    s = t(481060),
    u = t(425493),
    c = t(585483),
    d = t(288229),
    f = t(981631),
    h = t(388032),
    _ = t(268108);
function p(e) {
    let { onClose: n } = e,
        t = r.useRef(null);
    return (0, a.jsx)('div', {
        className: _.mobileCloseWrapper,
        ref: t,
        children: (0, a.jsx)(s.FocusRingScope, {
            containerRef: t,
            children: (0, a.jsx)('div', {
                children: (0, a.jsx)(u.Z, {
                    closeAction: n,
                    keybind: 'ESC'
                })
            })
        })
    });
}
function m(e) {
    let { onClose: n, items: t, startingIndex: i, onIndexChange: u, fit: m, shouldRedactExplicitContent: C, shouldHideMediaOptions: E, shouldAnimateCarousel: g, className: L, ...S } = e,
        x = o.tq && null != n;
    return (
        r.useEffect(() => {
            if (null != n)
                return (
                    c.S.subscribe(f.CkL.MEDIA_MODAL_CLOSE, n),
                    () => {
                        c.S.unsubscribe(f.CkL.MEDIA_MODAL_CLOSE, n);
                    }
                );
        }, [n]),
        (0, a.jsxs)(s.ModalRoot, {
            hideShadow: !0,
            className: l()(_.carouselModal, L),
            ...S,
            size: s.ModalSize.DYNAMIC,
            'aria-label': h.intl.string(h.t.AMTX3t),
            onClick: n,
            children: [
                x ? (0, a.jsx)(p, { onClose: n }) : null,
                (0, a.jsx)(d.Z, {
                    items: t,
                    startIndex: i,
                    onIndexChange: u,
                    fit: m,
                    shouldRedactExplicitContent: C,
                    shouldHideMediaOptions: E,
                    shouldAnimateCarousel: g
                })
            ]
        })
    );
}
