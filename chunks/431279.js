n.d(t, {
    Z: function () {
        return g;
    }
}), n(47120);
var r, i = n(735250), a = n(470079), o = n(374470), s = n(481060), l = n(40851), u = n(751586), c = n(261922), d = n(626135), _ = n(956664), E = n(506071), f = n(981631), h = n(503349), p = n(689938), m = n(422322);
function I(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
class T extends (r = a.PureComponent) {
    render() {
        let {
            appContext: e,
            isWindowFocused: t,
            ...n
        } = this.props;
        return (0, i.jsx)(c.Z, {
            ...n,
            onZoom: this.onZoom,
            onMouseEnter: this.onMouseEnter,
            shouldAnimate: t
        });
    }
    constructor(...e) {
        super(...e), I(this, 'onMouseEnter', (e, t) => {
            let {preloadImage: n} = t, {
                    width: r,
                    height: i
                } = this.props;
            n((0, _.zp)(r, i));
        }), I(this, 'modalContext', (0, s.modalContextFromAppContext)(this.props.appContext)), I(this, 'onCloseImage', () => {
            (0, s.closeModal)(h.c, this.modalContext);
        }), I(this, 'onZoom', (e, t) => {
            let {
                zoomThumbnailPlaceholder: n,
                trigger: r
            } = t;
            e.preventDefault();
            let {
                    alt: a,
                    src: l,
                    original: c,
                    width: _,
                    height: E,
                    animated: I,
                    children: T,
                    renderLinkComponent: g,
                    renderForwardComponent: S,
                    isWindowFocused: A,
                    shouldHideMediaOptions: N = !1
                } = this.props, v = {
                    alt: a,
                    src: l,
                    original: null != c ? c : l,
                    width: _,
                    height: E,
                    animated: I,
                    children: T,
                    zoomThumbnailPlaceholder: n,
                    renderLinkComponent: g,
                    renderForwardComponent: S,
                    onContextMenu: N ? e => {
                        e.stopPropagation(), e.preventDefault();
                    } : void 0,
                    trigger: r
                };
            (0, o.k)(e.currentTarget) && e.currentTarget.blur(), d.default.track(f.rMx.OPEN_MODAL, { type: 'Media Modal' }), (0, s.openModal)(e => (0, i.jsx)(s.ModalRoot, {
                className: m.modal,
                ...e,
                size: s.ModalSize.DYNAMIC,
                'aria-label': p.Z.Messages.IMAGE,
                children: (0, i.jsx)(u.y, {
                    ...v,
                    className: m.image,
                    shouldAnimate: A,
                    onClose: this.onCloseImage,
                    shouldHideMediaOptions: N
                })
            }), { modalKey: h.c }, this.modalContext);
        });
    }
}
function g(e) {
    let t = (0, l.bp)(), n = (0, E.n)();
    return (0, i.jsx)(T, {
        ...e,
        isWindowFocused: n,
        appContext: t
    });
}
I(T, 'defaultProps', {
    shouldLink: !0,
    autoPlay: !1,
    animated: !1
});
