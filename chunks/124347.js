n.d(t, {
	Z: function () {
		return R;
	},
	u: function () {
		return v;
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
	g = n(956664),
	S = n(981631),
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
let v = /\.gif($|\?|#)/i,
	O = /\.png($|\?|#)/i;
((a = r || (r = {})).LOAD = 'LOAD'), (a.PRELOAD = 'PRELOAD'), (a.CLICK = 'CLICK');
class R extends (i = o.Component) {
	static isAnimated(e) {
		let { src: t, original: n, animated: r } = e;
		return r || v.test(null != n && '' !== n ? n : t);
	}
	static isSrcPNG(e) {
		let { src: t } = e;
		return O.test(t);
	}
	componentDidMount() {
		let { readyState: e } = this.state;
		e === S.zo9.LOADING && this.loadImage(this.getSrc(this.getRatio(), R.isAnimated(this.props)), this.handleImageLoad),
			R.isAnimated(this.props) && this.observeVisibility();
	}
	componentDidUpdate(e) {
		let t = R.isAnimated(this.props);
		R.isAnimated(e) !== t && (t ? this.observeVisibility() : this.unobserveVisibility());
	}
	componentWillUnmount() {
		R.isAnimated(this.props) && this.unobserveVisibility(),
			this._cancellers.forEach((e) => e()),
			this._cancellers.clear();
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
			quality: u
		});
	}
	getFormatQuality() {
		let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
			t = null,
			n = null;
		return (
			T.$k && (e || !R.isAnimated(this.props))
				? ((t = 'webp'), R.isSrcPNG(this.props) && (n = 'lossless'))
				: e && (t = 'png'),
			{
				format: t,
				quality: n
			}
		);
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
		return i === A.hV.MOSAIC && a
			? (0, g.rn)({
					width: e,
					height: t,
					maxWidth: n,
					maxHeight: r
				})
			: (0, g.Dc)({
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
		let {
				alt: e,
				zoomThumbnailPlaceholder: t,
				onZoom: n,
				shouldLink: r,
				onContextMenu: i,
				autoPlay: a,
				original: o,
				className: u,
				imageClassName: c,
				children: _,
				animated: E,
				shouldAnimate: f,
				width: h,
				height: p,
				minWidth: I,
				minHeight: m,
				maxWidth: T,
				maxHeight: g,
				onClick: A,
				renderAccessory: N,
				tabIndex: v,
				limitResponsiveWidth: O,
				useFullWidth: C,
				placeholder: y,
				placeholderVersion: D,
				dataSafeSrc: L
			} = this.props,
			{ readyState: b, hasMouseOver: M, hasFocus: P } = this.state,
			U = null != n,
			w = this.getRatio(),
			x = (0, l.clamp)(Math.round(h * w), null != I ? I : 0, null != T ? T : 1 / 0),
			G = (0, l.clamp)(Math.round(p * w), null != m ? m : 0, null != g ? g : 1 / 0),
			k = {
				alt: e,
				readyState: b,
				onContextMenu: null != i ? i : void 0,
				zoomable: U,
				className: u,
				imageClassName: c,
				minWidth: I,
				minHeight: m,
				mediaLayoutType: this.getType(),
				limitResponsiveWidth: O,
				useFullWidth: C,
				tabIndex: v,
				width: x,
				height: G,
				src: '',
				placeholder: y,
				placeholderVersion: D,
				dataSafeSrc: L,
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
		if (1 === k.width && 1 === k.height) return null;
		switch (
			((U || null != A) && (k.onClick = this.onClick), r && (k.original = null != o && '' !== o ? o : k.src), b)
		) {
			case S.zo9.LOADING:
				null != t && (k.src = t);
				break;
			case S.zo9.READY:
				if (R.isAnimated(this.props)) {
					k.onMouseLeave = this.onMouseLeave;
					let e = (a || M || P) && (null == f || f) && R.visibilityObserver.isVisible(this);
					e
						? ((k.src = this.getSrc(w)), (k.renderAccessory = N))
						: ((k.src = this.getSrc(w, !E || !a)), (k.renderAccessory = this.renderAccessory)),
						null != _ &&
							(k.children = (t) => {
								let { src: n, size: r, alt: i, mediaLayoutType: a } = t;
								return _({
									src: n,
									size: r,
									animating: e,
									alt: i,
									mediaLayoutType: a
								});
							});
				} else k.src = this.getSrc(w);
		}
		return (0, s.jsx)(d.E, { ...k });
	}
	async trackLoadingCompleted(e, t, n) {
		var r;
		if ((e && h.Z.increment({ name: u.V.IMAGE_LOAD_ERROR }), !this.imageLoadAnalyticsEnabled)) return;
		let i = await fetch(t.url).catch(() => void 0),
			a = null == i ? void 0 : null === (r = i.headers) || void 0 === r ? void 0 : r.get('content-length'),
			s = null != a ? Number(a) : null,
			o = Date.now() - this.startLoadingTime,
			{ format: l, quality: c } = this.getFormatQuality();
		m.default.track(S.rMx.IMAGE_LOADING_COMPLETED, {
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
			state: e ? S.zo9.ERROR : this.state.readyState,
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
				readyState: S.zo9.LOADING,
				hasMouseOver: !1,
				hasFocus: !1
			}),
			N(this, 'startLoadingTime', Date.now()),
			N(this, '_cancellers', new Set()),
			N(this, 'observeVisibility', () => {
				R.visibilityObserver.observe(this);
			}),
			N(this, 'unobserveVisibility', () => {
				R.visibilityObserver.unobserve(this);
			}),
			N(this, 'handleImageLoad', (e, t) => {
				this.setState({ readyState: e ? S.zo9.ERROR : S.zo9.READY }, () => {
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
							(0, g.Dc)({
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
				R.isAnimated(this.props) && this.setState({ hasMouseOver: !0 });
				let { onMouseEnter: t } = this.props;
				null == t || t(e, { preloadImage: this.preloadImage });
			}),
			N(this, 'onMouseLeave', (e) => {
				R.isAnimated(this.props) && this.setState({ hasMouseOver: !1 });
				let { onMouseLeave: t } = this.props;
				null == t || t(e);
			}),
			N(this, 'onFocus', (e) => {
				R.isAnimated(this.props) && this.setState({ hasFocus: !0 });
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
			(0, f.Vv)(this.getSrc(this.getRatio(), R.isAnimated(this.props))) && (this.state.readyState = S.zo9.READY),
			(this.imageLoadAnalyticsEnabled = C.getCurrentConfig({ location: 'lazy_image' }).enabled);
	}
}
N(R, 'visibilityObserver', new c.Z({ threshold: 0.7 })),
	N(R, 'defaultProps', {
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
