n.d(t, {
    YG: function () {
        return R;
    },
    ZP: function () {
        return C;
    },
    uo: function () {
        return O;
    }
}),
    n(47120);
var r,
    i,
    a,
    s = n(735250),
    o = n(470079),
    l = n(392711),
    u = n(286379),
    c = n(622535),
    d = n(916616),
    _ = n(818083),
    E = n(279745),
    f = n(134432),
    h = n(797614),
    p = n(740492),
    I = n(866960),
    m = n(626135),
    T = n(768581),
    S = n(956664),
    g = n(981631),
    A = n(217702);
function N(e, t, n) {
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
let O = /\.gif($|\?|#)/i,
    R = /\.webp($|\?|#)/i,
    v = /\.png($|\?|#)/i;
((a = r || (r = {})).LOAD = 'LOAD'), (a.PRELOAD = 'PRELOAD'), (a.CLICK = 'CLICK');
class C extends (i = o.Component) {
    static isAnimated(e) {
        let { src: t, original: n, animated: r, srcIsAnimated: i } = e;
        return r || O.test(null != n && '' !== n ? n : t) || (null != i && i && R.test(null != n && '' !== n ? n : t));
    }
    static isSrcPNG(e) {
        let { src: t } = e;
        return v.test(t);
    }
    componentDidMount() {
        let { readyState: e } = this.state;
        e === g.zo9.LOADING && this.loadImage(this.getSrc(this.getRatio(), C.isAnimated(this.props)), this.handleImageLoad), C.isAnimated(this.props) && this.observeVisibility();
    }
    componentDidUpdate(e) {
        let t = C.isAnimated(this.props);
        C.isAnimated(e) !== t && (t ? this.observeVisibility() : this.unobserveVisibility());
    }
    componentWillUnmount() {
        C.isAnimated(this.props) && this.unobserveVisibility(), this._cancellers.forEach((e) => e()), this._cancellers.clear();
    }
    getSrc(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { src: n, width: r, height: i, maxWidth: a, maxHeight: s, mediaLayoutType: o } = this.props,
            { format: l, quality: u } = this.getFormatQuality(t);
        return (0, f.Q4)({
            src: n,
            width: r,
            height: i,
            ratio: e,
            maxWidth: o === A.hV.MOSAIC ? a : void 0,
            maxHeight: o === A.hV.MOSAIC ? s : void 0,
            format: l,
            quality: u,
            animated: !t,
            srcIsAnimated: this.props.srcIsAnimated
        });
    }
    getFormatQuality() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = null,
            n = null;
        return (
            T.$k && (e || !C.isAnimated(this.props)) ? ((t = 'webp'), C.isSrcPNG(this.props) && (n = 'lossless')) : e && (t = 'png'),
            {
                format: t,
                quality: n
            }
        );
    }
    getRatio() {
        let { width: e, height: t, maxWidth: n = 400, maxHeight: r = 300, mediaLayoutType: i, useFullWidth: a } = this.props;
        return i === A.hV.MOSAIC && a
            ? (0, S.rn)({
                  width: e,
                  height: t,
                  maxWidth: n,
                  maxHeight: r
              })
            : (0, S.Dc)({
                  width: e,
                  height: t,
                  maxWidth: n,
                  maxHeight: r
              });
    }
    getType() {
        let { mediaLayoutType: e, responsive: t } = this.props;
        return null != e ? e : t ? A.hV.RESPONSIVE : A.hV.STATIC;
    }
    loadImage(e, t) {
        let { width: n, height: r } = this.props;
        if (((this.startLoadingTime = Date.now()), 1 === n && 1 === r)) return;
        let i = (0, f.po)(e, (e, n) => {
            null != i && this._cancellers.delete(i), null == t || t(e, n);
        });
        null != i && this._cancellers.add(i);
    }
    render() {
        let { alt: e, zoomThumbnailPlaceholder: t, onZoom: n, shouldLink: r, onContextMenu: i, autoPlay: a, original: o, className: u, imageClassName: c, children: _, animated: E, shouldAnimate: f, width: h, height: p, minWidth: I, minHeight: m, maxWidth: T, maxHeight: S, onClick: A, renderAccessory: N, tabIndex: O, limitResponsiveWidth: R, useFullWidth: v, placeholder: L, placeholderVersion: y, dataSafeSrc: D, srcIsAnimated: b } = this.props,
            { readyState: M, hasMouseOver: P, hasFocus: U } = this.state,
            w = null != n,
            x = this.getRatio(),
            G = (0, l.clamp)(Math.round(h * x), null != I ? I : 0, null != T ? T : 1 / 0),
            k = (0, l.clamp)(Math.round(p * x), null != m ? m : 0, null != S ? S : 1 / 0),
            B = {
                alt: e,
                readyState: M,
                onContextMenu: null != i ? i : void 0,
                zoomable: w,
                className: u,
                imageClassName: c,
                minWidth: I,
                minHeight: m,
                mediaLayoutType: this.getType(),
                limitResponsiveWidth: R,
                useFullWidth: v,
                tabIndex: O,
                width: G,
                height: k,
                src: '',
                placeholder: L,
                placeholderVersion: y,
                dataSafeSrc: D,
                srcIsAnimated: b,
                children:
                    null != _
                        ? (e) => {
                              let { src: t, size: n, alt: r, mediaLayoutType: i } = e;
                              return _({
                                  src: t,
                                  size: n,
                                  alt: r,
                                  mediaLayoutType: i
                              });
                          }
                        : void 0,
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave,
                onFocus: this.onFocus,
                onBlur: this.onBlur
            };
        if (1 === B.width && 1 === B.height) return null;
        switch (((w || null != A) && (B.onClick = this.onClick), r && (B.original = null != o && '' !== o ? o : B.src), M)) {
            case g.zo9.LOADING:
                null != t && (B.src = t);
                break;
            case g.zo9.READY:
                if (C.isAnimated(this.props)) {
                    B.onMouseLeave = this.onMouseLeave;
                    let e = (a || P || U) && (null == f || f) && C.visibilityObserver.isVisible(this);
                    e ? ((B.src = this.getSrc(x)), (B.renderAccessory = N)) : ((B.src = this.getSrc(x, !E || !a)), (B.renderAccessory = this.renderAccessory)),
                        null != _ &&
                            (B.children = (t) => {
                                let { src: n, size: r, alt: i, mediaLayoutType: a } = t;
                                return _({
                                    src: n,
                                    size: r,
                                    animating: e,
                                    alt: i,
                                    mediaLayoutType: a
                                });
                            });
                } else B.src = this.getSrc(x);
        }
        return (0, s.jsx)(d.E, { ...B });
    }
    async trackLoadingCompleted(e, t, n) {
        var r;
        if ((e && h.Z.increment({ name: u.V.IMAGE_LOAD_ERROR }), !this.imageLoadAnalyticsEnabled)) return;
        let i = await fetch(t.url).catch(() => void 0),
            a = null == i ? void 0 : null === (r = i.headers) || void 0 === r ? void 0 : r.get('content-length'),
            s = null != a ? Number(a) : null,
            o = Date.now() - this.startLoadingTime,
            { format: l, quality: c } = this.getFormatQuality();
        m.default.track(g.rMx.IMAGE_LOADING_COMPLETED, {
            duration_ms: o,
            requested_height: t.height,
            requested_width: t.width,
            height: this.props.height,
            width: this.props.width,
            original_url: this.props.original,
            url: this.props.src,
            requested_url: t.url,
            format: l,
            quality: c,
            state: e ? g.zo9.ERROR : this.state.readyState,
            data_saving_mode: p.ZP.dataSavingMode,
            low_quality_image_mode: p.ZP.dataSavingMode,
            trigger: n,
            size: s,
            connection_type: I.Z.getType(),
            effective_connection_speed: I.Z.getEffectiveConnectionSpeed(),
            service_provider: I.Z.getServiceProvider()
        });
    }
    constructor(e) {
        super(e),
            N(this, 'imageLoadAnalyticsEnabled', !1),
            N(this, 'state', {
                readyState: g.zo9.LOADING,
                hasMouseOver: !1,
                hasFocus: !1
            }),
            N(this, 'startLoadingTime', Date.now()),
            N(this, '_cancellers', new Set()),
            N(this, 'observeVisibility', () => {
                C.visibilityObserver.observe(this);
            }),
            N(this, 'unobserveVisibility', () => {
                C.visibilityObserver.unobserve(this);
            }),
            N(this, 'handleImageLoad', (e, t) => {
                this.setState({ readyState: e ? g.zo9.ERROR : g.zo9.READY }, () => {
                    var n;
                    return this.trackLoadingCompleted(e, t, null !== (n = this.props.trigger) && void 0 !== n ? n : 'LOAD');
                });
            }),
            N(this, 'preloadImage', (e, t) => {
                let { width: n, height: r } = e,
                    { width: i, height: a } = this.props;
                (1 !== i || 1 !== a) &&
                    this.loadImage(
                        this.getSrc(
                            (0, S.Dc)({
                                width: i,
                                height: a,
                                maxWidth: n,
                                maxHeight: r
                            })
                        ),
                        (e, n) => {
                            this.trackLoadingCompleted(e, n, 'PRELOAD'), null == t || t(e, n);
                        }
                    );
            }),
            N(this, 'onMouseEnter', (e) => {
                C.isAnimated(this.props) && this.setState({ hasMouseOver: !0 });
                let { onMouseEnter: t } = this.props;
                null == t || t(e, { preloadImage: this.preloadImage });
            }),
            N(this, 'onMouseLeave', (e) => {
                C.isAnimated(this.props) && this.setState({ hasMouseOver: !1 });
                let { onMouseLeave: t } = this.props;
                null == t || t(e);
            }),
            N(this, 'onFocus', (e) => {
                C.isAnimated(this.props) && this.setState({ hasFocus: !0 });
            }),
            N(this, 'onBlur', (e) => {
                let { currentTarget: t, relatedTarget: n } = e;
                !t.contains(n) && this.setState({ hasFocus: !1 });
            }),
            N(this, 'onClick', (e) => {
                let { onZoom: t, onClick: n } = this.props;
                null != n
                    ? n(e)
                    : null != t &&
                      (e.preventDefault(),
                      t(e, {
                          zoomThumbnailPlaceholder: this.getSrc(this.getRatio()),
                          trigger: 'CLICK'
                      }));
            }),
            N(this, 'renderAccessory', () => {
                let { hasMouseOver: e, hasFocus: t } = this.state,
                    n = null != this.props.renderAccessory ? this.props.renderAccessory() : null;
                return this.props.shouldRenderAccessory ? (e || t ? n : (0, s.jsx)(E.Z, {})) : null;
            }),
            (0, f.Vv)(this.getSrc(this.getRatio(), C.isAnimated(this.props))) && (this.state.readyState = g.zo9.READY),
            (this.imageLoadAnalyticsEnabled = L.getCurrentConfig({ location: 'lazy_image' }).enabled);
    }
}
N(C, 'visibilityObserver', new c.Z({ threshold: 0.7 })),
    N(C, 'defaultProps', {
        shouldLink: !1,
        autoPlay: !1,
        animated: !1,
        minWidth: 0,
        minHeight: 0,
        shouldRenderAccessory: !0,
        srcIsAnimated: !1
    });
let L = (0, _.B)({
    kind: 'user',
    id: '2024-02_image_load_metrics',
    label: 'Image load metrics Config User Experiment',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Do not send metrics for image load',
            config: { enabled: !1 }
        },
        {
            id: 2,
            label: 'Send metrics for image load',
            config: { enabled: !0 }
        }
    ]
});
