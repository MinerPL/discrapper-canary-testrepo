n.d(t, {
	a: function () {
		return R;
	}
}),
	n(47120);
var r,
	i,
	a = n(735250),
	s = n(470079),
	o = n(120356),
	l = n.n(o),
	u = n(96355),
	c = n(47759),
	d = n.n(c),
	_ = n(338545),
	E = n(772848),
	f = n(722770),
	h = n(846519),
	p = n(215569),
	I = n(314274);
function m(e, t, n) {
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
let T = {
		friction: 13,
		tension: 240,
		duration: 150
	},
	g = {
		duration: 150,
		friction: 3
	},
	S = {
		friction: 30,
		tension: 900,
		mass: 1
	},
	A = {
		duration: 150,
		friction: 10,
		tension: 100,
		mass: 1
	},
	N =
		(null === (r = window.SVGPathElement) || void 0 === r ? void 0 : r.prototype.getTotalLength) != null
			? (0, u.interpolate)(
					'M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z',
					'M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0C31.4551 0 35.1826 0 38.1229 1.21793C42.0434 2.84183 45.1582 5.95662 46.7821 9.87706C48 12.8174 48 16.5449 48 24C48 31.4551 48 35.1826 46.7821 38.1229C45.1582 42.0434 42.0434 45.1582 38.1229 46.7821C35.1826 48 31.4551 48 24 48C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z',
					{ maxSegmentLength: 1.5 }
				)
			: (e) => ''.concat(e);
class v extends s.Component {
	componentDidMount() {
		this.forceUpdate();
	}
	componentWillAppear(e) {
		e();
	}
	componentWillEnter(e) {
		e();
	}
	componentWillLeave(e) {
		this.timeoutId = setTimeout(e, 300);
	}
	componentWillUnmount() {
		clearTimeout(this.timeoutId);
	}
	render() {
		let { children: e, className: t, animatedStyle: n } = this.props;
		return (0, a.jsx)(_.animated.div, {
			className: t,
			style: n,
			children: e
		});
	}
	constructor(...e) {
		super(...e), m(this, 'timeoutId', void 0);
	}
}
function O(e) {
	let { selected: t, upperBadge: n, lowerBadge: r, highlight: i } = e;
	return t || null != n || null != r || !!i;
}
class R extends (i = s.Component) {
	static getDerivedStateFromProps(e, t) {
		let { hasRenderedBadge: n, upperBadgeMask: r, lowerBadgeMask: i, borderRadiusMask: a, renderComplex: s } = t,
			{ upperBadge: o, lowerBadge: l } = e,
			u = !1;
		return (
			((null != o && null == r) || (null != l && null == i)) &&
				((u = !0), (n = !0), (r = new _.Controller({ spring: 0 })), (i = new _.Controller({ spring: 0 }))),
			O(e) && null == a && ((u = !0), (a = new _.Controller({ spring: 0 }))),
			!s && O(e) && ((u = !0), (s = !0)),
			u
				? {
						hasRenderedBadge: n,
						lowerBadgeMask: i,
						upperBadgeMask: r,
						borderRadiusMask: a,
						renderComplex: s
					}
				: null
		);
	}
	componentDidMount() {
		let { selected: e, lowerBadge: t, upperBadge: n } = this.props,
			{ borderRadiusMask: r, lowerBadgeMask: i, upperBadgeMask: a } = this.state;
		null == r ||
			r
				.update({
					spring: e ? 1 : 0,
					immediate: !0
				})
				.start(),
			null == i ||
				i
					.update({
						spring: null != t ? 1 : 0,
						immediate: !0
					})
					.start(),
			null == a ||
				a
					.update({
						spring: null != n ? 1 : 0,
						immediate: !0
					})
					.start();
	}
	componentWillUnmount() {
		let { borderRadiusMask: e, lowerBadgeMask: t, upperBadgeMask: n } = this.state;
		this.timeout.stop(), null == e || e.dispose(), null == t || t.dispose(), null == n || n.dispose();
	}
	componentDidUpdate(e) {
		let { selected: t, lowerBadge: n, upperBadge: r } = this.props,
			{ borderRadiusMask: i, lowerBadgeMask: a, upperBadgeMask: s, renderComplex: o } = this.state;
		t && !e.selected
			? null == i ||
				i
					.update({
						spring: 1,
						immediate: !1,
						config: T
					})
					.start()
			: !t &&
				e.selected &&
				(null == i ||
					i
						.update({
							spring: 0,
							immediate: !1,
							config: g
						})
						.start()),
			null != n && null == e.lowerBadge
				? null == a ||
					a
						.update({
							spring: 1,
							immediate: !document.hasFocus(),
							config: S
						})
						.start()
				: null == n &&
					null != e.lowerBadge &&
					(null == a ||
						a
							.update({
								spring: 0,
								immediate: !document.hasFocus(),
								config: A
							})
							.start()),
			null != r && null == e.upperBadge
				? null == s ||
					s
						.update({
							spring: 1,
							immediate: !document.hasFocus(),
							config: S
						})
						.start()
				: null == r &&
					null != e.upperBadge &&
					(null == s ||
						s
							.update({
								spring: 0,
								immediate: !document.hasFocus(),
								config: A
							})
							.start()),
			!o || O(this.props) || this.timeout.isStarted()
				? O(this.props) && this.timeout.isStarted() && this.timeout.stop()
				: this.timeout.start(d()(10800000, 18000000), this.handleTimeout);
	}
	getBadgePositionInterpolation(e) {
		let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
			n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20;
		if (null == e) return;
		let { spring: r } = e.springs;
		return r.to([0, 1], [n, 0]).to((e) => 'translate('.concat(e, ' ').concat(e * t, ')'));
	}
	getLowerBadgeStyles() {
		let { lowerBadgeMask: e } = this.state,
			{ lowerBadgeSize: t } = this.props;
		if (null == e) return;
		let { spring: n } = e.springs,
			r = (null == t ? void 0 : t.width) != null ? t.width : 16,
			i = (null == t ? void 0 : t.height) != null ? t.height : 16;
		return {
			opacity: n.to([0, 0.5, 1], [0, 0, 1]),
			transform: n.to((e) => 'translate('.concat(r - e * r, 'px, ').concat(i - e * i, 'px)'))
		};
	}
	getUpperBadgeStyles() {
		let { upperBadgeMask: e } = this.state;
		if (null == e) return;
		let { spring: t } = e.springs;
		return {
			opacity: t.to([0, 0.5, 1], [0, 0, 1]),
			transform: t.to((e) => 'translate('.concat(16 - 16 * e, 'px, ').concat(-1 * (16 - 16 * e), 'px)'))
		};
	}
	getPathInterpolation() {
		var e;
		return null === (e = this.state.borderRadiusMask) || void 0 === e ? void 0 : e.springs.spring.to(N);
	}
	render() {
		let {
				children: e,
				className: t,
				innerClassName: n,
				lowerBadge: r,
				lowerBadgeSize: i,
				style: o,
				upperBadge: u,
				highlight: c
			} = this.props,
			{
				maskId: d,
				lowerBadgeMask: E,
				upperBadgeMask: h,
				focused: m,
				hasRenderedBadge: T,
				renderComplex: g
			} = this.state;
		if (!g)
			return (0, a.jsx)(
				'div',
				{
					className: l()(t, {
						[I.wrapperSimple]: !0,
						[I.simpleFocused]: m
					}),
					style: o,
					onFocus: this.handleFocus,
					onBlur: this.handleBlur,
					children: (0, a.jsx)(
						'svg',
						{
							width: 48,
							height: 48,
							viewBox: '0 0 '.concat(48, ' ').concat(48),
							className: I.svg,
							overflow: 'visible',
							children: (0, a.jsx)(
								'foreignObject',
								{
									x: 0,
									y: 0,
									className: n,
									width: 48,
									height: 48,
									children: e
								},
								'foreign-object'
							)
						},
						'svg'
					)
				},
				'wrapper'
			);
		let S = ''.concat(d, '-upper_badge_masks'),
			A = ''.concat(d, '-lower_badge_masks'),
			N = ''.concat(d, '-blob_mask'),
			O = ''.concat(d, '-stroke_mask'),
			R = ''.concat(d, '-highlight_mask'),
			C = (null == i ? void 0 : i.width) != null ? i.width : 16,
			y = (null == i ? void 0 : i.height) != null ? i.height : 16;
		return (0, a.jsxs)(
			'div',
			{
				className: l()(t, I.wrapper),
				style: o,
				onFocus: this.handleFocus,
				onBlur: this.handleBlur,
				children: [
					(0, a.jsxs)(
						'svg',
						{
							width: 48,
							height: 48,
							viewBox: '0 0 '.concat(48, ' ').concat(48),
							className: l()(I.svg, { [I.noContain]: c }),
							overflow: 'visible',
							children: [
								(0, a.jsxs)('defs', {
									children: [
										c &&
											(0, a.jsx)(_.animated.path, {
												d: this.getPathInterpolation(),
												id: R
											}),
										(0, a.jsx)(_.animated.path, {
											d: this.getPathInterpolation(),
											id: N
										}),
										T
											? (0, a.jsx)(_.animated.rect, {
													id: S,
													x: 28,
													y: -4,
													width: 24,
													height: 24,
													rx: 12,
													ry: 12,
													transform: this.getBadgePositionInterpolation(h, -1)
												})
											: null,
										T
											? (0, a.jsx)(_.animated.rect, {
													id: A,
													x: 48 - (C + 8) + 4,
													y: 48 - (y + 8) + 4,
													width: C + 8,
													height: y + 8,
													rx: 12,
													ry: 12,
													transform: this.getBadgePositionInterpolation(E, 1, C + 4)
												})
											: null
									]
								}),
								(0, a.jsxs)('mask', {
									id: d,
									fill: 'black',
									x: 0,
									y: 0,
									width: 48,
									height: 48,
									children: [
										c &&
											(0, a.jsx)('use', {
												href: '#'.concat(R),
												fill: 'black'
											}),
										(0, a.jsx)('use', {
											href: '#'.concat(N),
											fill: 'white',
											className: l()({ [I.isHighlighted]: c })
										}),
										T
											? (0, a.jsxs)(a.Fragment, {
													children: [
														(0, a.jsx)('use', {
															href: '#'.concat(S),
															fill: 'black'
														}),
														(0, a.jsx)('use', {
															href: '#'.concat(A),
															fill: 'black'
														})
													]
												})
											: null
									]
								}),
								T
									? (0, a.jsxs)('mask', {
											id: O,
											children: [
												(0, a.jsx)('rect', {
													width: '150%',
													height: '150%',
													x: '-25%',
													y: '-25%',
													fill: 'white'
												}),
												(0, a.jsx)('use', {
													href: '#'.concat(S),
													fill: 'black'
												}),
												(0, a.jsx)('use', {
													href: '#'.concat(A),
													fill: 'black'
												})
											]
										})
									: null,
								m
									? (0, a.jsxs)(s.Fragment, {
											children: [
												(0, a.jsx)('g', {
													className: I.focusStroke,
													mask: 'url(#'.concat(O, ')'),
													children: (0, a.jsx)('use', { href: '#'.concat(N) })
												}),
												(0, a.jsxs)('g', {
													className: I.focusFill,
													children: [
														null != u ? (0, a.jsx)('use', { href: '#'.concat(S) }) : null,
														null != r ? (0, a.jsx)('use', { href: '#'.concat(A) }) : null
													]
												})
											]
										})
									: null,
								c &&
									(0, a.jsx)(_.animated.path, {
										d: this.getPathInterpolation(),
										stroke: f.Z.BRAND_500,
										'stroke-width': 2,
										className: I.highlight,
										mask: 'url(#'.concat(O, ')')
									}),
								(0, a.jsx)(
									'foreignObject',
									{
										mask: 'url(#'.concat(d, ')'),
										x: 0,
										y: 0,
										className: n,
										width: 48,
										height: 48,
										children: e
									},
									'foreign-object'
								)
							]
						},
						'svg'
					),
					(0, a.jsxs)(p.W, {
						component: s.Fragment,
						children: [
							null != r
								? (0, a.jsx)(
										v,
										{
											className: I.lowerBadge,
											animatedStyle: this.getLowerBadgeStyles(),
											children: r
										},
										'lower-badge'
									)
								: null,
							null != u
								? (0, a.jsx)(
										v,
										{
											className: I.upperBadge,
											animatedStyle: this.getUpperBadgeStyles(),
											children: u
										},
										'upper-badge'
									)
								: null
						]
					})
				]
			},
			'wrapper'
		);
	}
	constructor(...e) {
		super(...e),
			m(this, 'timeout', new h.V7()),
			m(this, 'state', {
				renderComplex: !1,
				hasRenderedBadge: !1,
				maskId: (0, E.Z)(),
				focused: !1
			}),
			m(this, 'handleTimeout', () => {
				this.timeout.stop(), this.setState({ renderComplex: !1 });
			}),
			m(this, 'handleFocus', () => {
				this.setState({ focused: !0 });
			}),
			m(this, 'handleBlur', () => {
				this.setState({ focused: !1 });
			});
	}
}
m(R, 'defaultProps', {
	selected: !1,
	lowerBadgeSize: {
		width: 16,
		height: 16
	},
	highlight: !1
});
