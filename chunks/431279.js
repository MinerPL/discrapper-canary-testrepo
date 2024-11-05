n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(47120);
var r,
    i = n(200651),
    a = n(192379),
    s = n(374470),
    o = n(481060),
    l = n(40851),
    u = n(124347),
    c = n(312097),
    d = n(626135),
    f = n(956664),
    _ = n(506071),
    h = n(981631),
    p = n(701865),
    m = n(167251);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class E extends (r = a.PureComponent) {
    render() {
        let { appContext: e, isWindowFocused: t, ...n } = this.props;
        return (0, i.jsx)(u.ZP, {
            ...n,
            onZoom: this.onZoom,
            onMouseEnter: this.onMouseEnter,
            shouldAnimate: t
        });
    }
    constructor(...e) {
        super(...e),
            g(this, 'onMouseEnter', (e, t) => {
                let { preloadImage: n } = t,
                    { width: r, height: i, onMouseEnter: a } = this.props;
                null == a || a(e, { preloadImage: n }), n((0, f.zp)(r, i));
            }),
            g(this, 'modalContext', (0, o.modalContextFromAppContext)(this.props.appContext)),
            g(this, 'onCloseImage', () => {
                (0, o.closeModal)(p.U, this.modalContext);
            }),
            g(this, 'onZoom', (e, t) => {
                let { zoomThumbnailPlaceholder: n, trigger: r } = t;
                e.preventDefault();
                let { alt: i, src: a, original: o, width: l, height: u, animated: f, srcIsAnimated: _, children: p, shouldHideMediaOptions: g = !1, sourceMetadata: E } = this.props;
                (0, s.k)(e.currentTarget) && e.currentTarget.blur(),
                    d.default.track(h.rMx.OPEN_MODAL, { type: 'Media Modal' }),
                    (0, c.K)({
                        className: m.modal,
                        onClose: this.onCloseImage,
                        items: [
                            {
                                url: a,
                                width: l,
                                height: u,
                                type: 'IMAGE',
                                alt: i,
                                zoomThumbnailPlaceholder: n,
                                animated: f,
                                srcIsAnimated: _,
                                children: p,
                                trigger: r,
                                sourceMetadata: E,
                                original: null != o ? o : a
                            }
                        ],
                        shouldHideMediaOptions: g,
                        location: 'LazyImageZoomable',
                        contextKey: this.modalContext
                    });
            });
    }
}
function v(e) {
    let t = (0, l.bp)(),
        n = (0, _.n)();
    return (0, i.jsx)(E, {
        ...e,
        isWindowFocused: n,
        appContext: t
    });
}
g(E, 'defaultProps', {
    shouldLink: !0,
    autoPlay: !1,
    animated: !1
});
