n.d(t, {
    Z: function () {
        return R;
    },
    u: function () {
        return v;
    }
}), n(47120);
var r, i, a, o = n(735250), s = n(470079), l = n(392711), u = n(286379), c = n(622535), d = n(916616), _ = n(818083), E = n(134432), f = n(797614), h = n(740492), p = n(866960), m = n(626135), I = n(768581), T = n(956664), g = n(311715), S = n(768760), A = n(981631);
function N(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let v = /\.gif($|\?|#)/i, O = /\.png($|\?|#)/i;
(a = r || (r = {})).LOAD = 'LOAD', a.PRELOAD = 'PRELOAD', a.CLICK = 'CLICK';
class R extends (i = s.Component) {
    static isAnimated(e) {
        let {
            src: t,
            original: n,
            animated: r
        } = e;
        return r || v.test(null != n && '' !== n ? n : t);
    }
    static isSrcPNG(e) {
        let {src: t} = e;
        return O.test(t);
    }
    componentDidMount() {
        let {readyState: e} = this.state;
        e === A.zo9.LOADING && this.loadImage(this.getSrc(this.getRatio(), R.isAnimated(this.props)), this.handleImageLoad), R.isAnimated(this.props) && this.observeVisibility();
    }
    componentDidUpdate(e) {
        let t = R.isAnimated(this.props);
        R.isAnimated(e) !== t && (t ? this.observeVisibility() : this.unobserveVisibility());
    }
    componentWillUnmount() {
        R.isAnimated(this.props) && this.unobserveVisibility(), this._cancellers.forEach(e => e()), this._cancellers.clear();
    }
    getSrc(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], {
                src: n,
                width: r,
                height: i,
                maxWidth: a,
                maxHeight: o,
                mediaLayoutType: s
            } = this.props, {
                format: l,
                quality: u
            } = this.getFormatQuality(t);
        return (0, E.Q4)({
            src: n,
            width: r,
            height: i,
            ratio: e,
            maxWidth: s === S.hV.MOSAIC ? a : void 0,
            maxHeight: s === S.hV.MOSAIC ? o : void 0,
            format: l,
            quality: u
        });
    }
    getFormatQuality() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = null, n = null;
        return I.$k && (e || !R.isAnimated(this.props)) ? (t = 'webp', R.isSrcPNG(this.props) && (n = 'lossless')) : e && (t = 'png'), {
            format: t,
            quality: n
        };
    }
    getRatio() {
        let {
            width: e,
            height: t,
            maxWidth: n = 400,
            maxHeight: r = 300,
            mediaLayoutType: i,
            useFullWidth: a
        } = this.props;
        return i === S.hV.MOSAIC && a ? (0, T.rn)({
            width: e,
            height: t,
            maxWidth: n,
            maxHeight: r
        }) : (0, T.Dc)({
            width: e,
            height: t,
            maxWidth: n,
            maxHeight: r
        });
    }
    getType() {
        let {
            mediaLayoutType: e,
            responsive: t
        } = this.props;
        return null != e ? e : t ? S.hV.RESPONSIVE : S.hV.STATIC;
    }
    loadImage(e, t) {
        let {
            width: n,
            height: r
        } = this.props;
        if (this.startLoadingTime = Date.now(), 1 === n && 1 === r)
            return;
        let i = (0, E.po)(e, (e, n) => {
            null != i && this._cancellers.delete(i), null == t || t(e, n);
        });
        null != i && this._cancellers.add(i);
    }
    render() {
        let {
                alt: e,
                zoomThumbnailPlaceholder: t,
                onZoom: n,
                shouldLink: r,
                onContextMenu: i,
                autoPlay: a,
                original: s,
                className: u,
                imageClassName: c,
                children: _,
                animated: E,
                shouldAnimate: f,
                width: h,
                height: p,
                minWidth: m,
                minHeight: I,
                maxWidth: T,
                maxHeight: g,
                onClick: S,
                renderAccessory: N,
                tabIndex: v,
                limitResponsiveWidth: O,
                useFullWidth: C,
                placeholder: y,
                placeholderVersion: D
            } = this.props, {
                readyState: L,
                hasMouseOver: b,
                hasFocus: M
            } = this.state, P = null != n, U = this.getRatio(), w = (0, l.clamp)(Math.round(h * U), null != m ? m : 0, null != T ? T : 1 / 0), x = (0, l.clamp)(Math.round(p * U), null != I ? I : 0, null != g ? g : 1 / 0), G = {
                alt: e,
                readyState: L,
                onContextMenu: null != i ? i : void 0,
                zoomable: P,
                className: u,
                imageClassName: c,
                minWidth: m,
                minHeight: I,
                mediaLayoutType: this.getType(),
                limitResponsiveWidth: O,
                useFullWidth: C,
                tabIndex: v,
                width: w,
                height: x,
                src: '',
                placeholder: y,
                placeholderVersion: D,
                children: null != _ ? e => {
                    let {
                        src: t,
                        size: n,
                        alt: r,
                        mediaLayoutType: i
                    } = e;
                    return _({
                        src: t,
                        size: n,
                        alt: r,
                        mediaLayoutType: i
                    });
                } : void 0,
                onMouseEnter: this.onMouseEnter,
                onFocus: this.onFocus,
                onBlur: this.onBlur
            };
        if (1 === G.width && 1 === G.height)
            return null;
        switch ((P || null != S) && (G.onClick = this.onClick), r && (G.original = null != s && '' !== s ? s : G.src), L) {
        case A.zo9.LOADING:
            null != t && (G.src = t);
            break;
        case A.zo9.READY:
            if (R.isAnimated(this.props)) {
                G.onMouseLeave = this.onMouseLeave;
                let e = (a || b || M) && (null == f || f) && R.visibilityObserver.isVisible(this);
                e ? (G.src = this.getSrc(U), G.renderAccessory = N) : (G.src = this.getSrc(U, !E || !a), G.renderAccessory = this.renderAccessory), null != _ && (G.children = t => {
                    let {
                        src: n,
                        size: r,
                        alt: i,
                        mediaLayoutType: a
                    } = t;
                    return _({
                        src: n,
                        size: r,
                        animating: e,
                        alt: i,
                        mediaLayoutType: a
                    });
                });
            } else
                G.src = this.getSrc(U);
        }
        return (0, o.jsx)(d.E, { ...G });
    }
    async trackLoadingCompleted(e, t, n) {
        var r;
        if (e && f.Z.increment({ name: u.V.IMAGE_LOAD_ERROR }), !this.imageLoadAnalyticsEnabled)
            return;
        let i = await fetch(t.url).catch(() => void 0), a = null == i ? void 0 : null === (r = i.headers) || void 0 === r ? void 0 : r.get('content-length'), o = null != a ? Number(a) : null, s = Date.now() - this.startLoadingTime, {
                format: l,
                quality: c
            } = this.getFormatQuality();
        m.default.track(A.rMx.IMAGE_LOADING_COMPLETED, {
            duration_ms: s,
            requested_height: t.height,
            requested_width: t.width,
            height: this.props.height,
            width: this.props.width,
            original_url: this.props.original,
            url: this.props.src,
            requested_url: t.url,
            format: l,
            quality: c,
            state: e ? A.zo9.ERROR : this.state.readyState,
            data_saving_mode: h.ZP.dataSavingMode,
            low_quality_image_mode: h.ZP.dataSavingMode,
            trigger: n,
            size: o,
            connection_type: p.Z.getType(),
            effective_connection_speed: p.Z.getEffectiveConnectionSpeed(),
            service_provider: p.Z.getServiceProvider()
        });
    }
    constructor(e) {
        super(e), N(this, 'imageLoadAnalyticsEnabled', !1), N(this, 'state', {
            readyState: A.zo9.LOADING,
            hasMouseOver: !1,
            hasFocus: !1
        }), N(this, 'startLoadingTime', Date.now()), N(this, '_cancellers', new Set()), N(this, 'observeVisibility', () => {
            R.visibilityObserver.observe(this);
        }), N(this, 'unobserveVisibility', () => {
            R.visibilityObserver.unobserve(this);
        }), N(this, 'handleImageLoad', (e, t) => {
            this.setState({ readyState: e ? A.zo9.ERROR : A.zo9.READY }, () => {
                var n;
                return this.trackLoadingCompleted(e, t, null !== (n = this.props.trigger) && void 0 !== n ? n : 'LOAD');
            });
        }), N(this, 'preloadImage', (e, t) => {
            let {
                    width: n,
                    height: r
                } = e, {
                    width: i,
                    height: a
                } = this.props;
            (1 !== i || 1 !== a) && this.loadImage(this.getSrc((0, T.Dc)({
                width: i,
                height: a,
                maxWidth: n,
                maxHeight: r
            })), (e, n) => {
                this.trackLoadingCompleted(e, n, 'PRELOAD'), null == t || t(e, n);
            });
        }), N(this, 'onMouseEnter', e => {
            R.isAnimated(this.props) && this.setState({ hasMouseOver: !0 });
            let {onMouseEnter: t} = this.props;
            null != t && t(e, { preloadImage: this.preloadImage });
        }), N(this, 'onFocus', e => {
            R.isAnimated(this.props) && this.setState({ hasFocus: !0 });
        }), N(this, 'onBlur', e => {
            let {
                currentTarget: t,
                relatedTarget: n
            } = e;
            !t.contains(n) && this.setState({ hasFocus: !1 });
        }), N(this, 'onMouseLeave', () => this.setState({ hasMouseOver: !1 })), N(this, 'onClick', e => {
            let {
                onZoom: t,
                onClick: n
            } = this.props;
            null != n ? n(e) : null != t && (e.preventDefault(), t(e, {
                zoomThumbnailPlaceholder: this.getSrc(this.getRatio()),
                trigger: 'CLICK'
            }));
        }), N(this, 'renderAccessory', () => {
            let {
                    hasMouseOver: e,
                    hasFocus: t
                } = this.state, n = null != this.props.renderAccessory ? this.props.renderAccessory() : null;
            return this.props.shouldRenderAccessory ? e || t ? n : (0, o.jsx)(g.Z, {}) : null;
        }), (0, E.Vv)(this.getSrc(this.getRatio(), R.isAnimated(this.props))) && (this.state.readyState = A.zo9.READY), this.imageLoadAnalyticsEnabled = C.getCurrentConfig({ location: 'lazy_image' }).enabled;
    }
}
N(R, 'visibilityObserver', new c.Z({ threshold: 0.7 })), N(R, 'defaultProps', {
    shouldLink: !1,
    autoPlay: !1,
    animated: !1,
    minWidth: 0,
    minHeight: 0,
    shouldRenderAccessory: !0
});
let C = (0, _.B)({
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
