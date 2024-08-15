n.d(t, {
	V: function () {
		return T;
	}
}),
	n(47120);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	l = n.n(s),
	r = n(512722),
	o = n.n(r),
	c = n(699581),
	u = n(374470),
	d = n(442837),
	h = n(481060),
	m = n(260300),
	p = n(997638),
	_ = n(819640),
	f = n(451478),
	E = n(21825),
	C = n(232495),
	g = n(10401),
	I = n(216743);
function x(e, t, n) {
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
class T extends a.PureComponent {
	componentDidMount() {
		this.updateCache();
	}
	componentDidUpdate(e) {
		let {
			tutorialId: t,
			origin: { x: n, y: i },
			targetWidth: a,
			targetHeight: s,
			position: l,
			offset: r
		} = e;
		(this.props.tutorialId !== t || this.props.origin.x !== n || this.props.origin.y !== i || this.props.targetWidth !== a || this.props.targetHeight !== s || this.props.position !== l || this.props.offset.x !== r.x || this.props.offset.y !== r.y) && this.updateCache();
	}
	updateCache() {
		var e, t;
		let n = (0, c.findDOMNode)(this);
		if (null == n || !(0, u.k)(n, HTMLElement)) return;
		let { offsetWidth: i, offsetHeight: a } = n,
			s = {
				offsetX: (this.props.targetWidth - i) / 2,
				offsetY: (this.props.targetHeight - a) / 2
			};
		switch (this.props.position) {
			case 'left':
				s.offsetX = -i;
				break;
			case 'right':
				s.offsetX = this.props.targetWidth;
				break;
			case 'bottom':
				s.offsetY = this.props.targetHeight;
				break;
			default:
				s.offsetY = -a;
		}
		(s.offsetX += null !== (e = this.props.offset.x) && void 0 !== e ? e : 0), (s.offsetY += null !== (t = this.props.offset.y) && void 0 !== t ? t : 0), this.setState(s);
	}
	handleSkipTips() {
		m.Z.suppressAll();
	}
	getTutorialPopoutText() {
		let { tutorialId: e } = this.props;
		return (0, C.k)(e);
	}
	render() {
		let { tutorialId: e, autoInvert: t, focused: n, origin: a } = this.props,
			s = (0, E.S)(e);
		if (null == s) return null;
		let { media: r, textAlign: o, isLongText: c, highPriority: u, spacing: d, arrowAlignment: m = p.cy.TOP, popoutPosition: _ } = s,
			{ offsetX: f, offsetY: C } = this.state,
			g = {
				left: null != f ? a.x + f : void 0,
				top: null != C ? a.y + C : void 0
			},
			x = (e) => {
				let t = n && !e;
				return !0 !== u
					? null
					: (0, i.jsxs)('div', {
							children: [
								(0, i.jsx)('div', {
									className: l()(I.top, {
										[I.animating]: t,
										[I.notAnimating]: !t
									})
								}),
								(0, i.jsx)('div', {
									className: l()(I.bottom, {
										[I.animating]: t,
										[I.notAnimating]: !t
									})
								})
							]
						});
			},
			T = (e) => {
				let t = n && !e;
				return {
					[I.animating]: t,
					[I.notAnimating]: !t,
					[I.highPriority]: u
				};
			},
			N = this.getTutorialPopoutText();
		return (0, i.jsx)(p.ZP, {
			position: _,
			renderMedia: r,
			textAlign: o,
			spacing: d,
			isLongText: c,
			uniqueId: e,
			autoInvert: t,
			arrowAlignment: m,
			onSkipAll: this.handleSkipTips,
			onComplete: this.handleDismiss,
			...N,
			children: (e, t) => {
				let { isShown: n } = t;
				return (0, i.jsx)(h.Clickable, {
					...e,
					className: I.indicator,
					style: g,
					children: (0, i.jsxs)('div', {
						className: l()(I.animationContainer, T(n)),
						children: [x(n), (0, i.jsx)('div', { className: l()(I.innerCircle, T(n)) }), (0, i.jsx)('div', { className: l()(I.outerCircle, T(n)) })]
					})
				});
			}
		});
	}
	constructor(...e) {
		super(...e),
			x(this, 'state', {
				offsetX: null,
				offsetY: null
			}),
			x(this, 'handleDismiss', () => {
				m.Z.dismiss(this.props.tutorialId);
			});
	}
}
t.Z =
	12633 == n.j
		? function () {
				let {
					indicators: e,
					tutorialData: t,
					windowFocused: n,
					shouldShowAny: a
				} = (0, d.cj)([g.Z, f.Z, _.Z], () => ({
					indicators: g.Z.getIndicators(),
					tutorialData: g.Z.getData(),
					shouldShowAny: g.Z.shouldShowAnyIndicators() && !_.Z.hasLayers(),
					windowFocused: f.Z.isFocused()
				}));
				return a
					? (0, i.jsx)(i.Fragment, {
							children: Object.entries(e).map((e) => {
								let [a, s] = e,
									l = t[a];
								return (
									o()(null != l, 'Missing tutorial definition for '.concat(a)),
									(0, i.jsx)(
										T,
										{
											tutorialId: a,
											tutorialDefinition: l,
											focused: n,
											...s
										},
										a
									)
								);
							})
						})
					: null;
			}
		: null;
