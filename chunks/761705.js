n.d(e, {
	Z: function () {
		return N;
	}
}),
	n(47120),
	n(653041);
var a,
	i = n(735250),
	o = n(470079),
	r = n(120356),
	s = n.n(r),
	l = n(299608),
	c = n.n(l),
	u = n(748780),
	d = n(215569),
	h = n(376641),
	p = n(714338),
	g = n(134432),
	m = n(44488),
	C = n(585483),
	f = n(981631),
	b = n(512234);
function v(t, e, n) {
	return (
		e in t
			? Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (t[e] = n),
		t
	);
}
let x = {
	friction: 10,
	tension: 100
};
function L(t, e) {
	return ((t % e) + e) % e;
}
class _ extends o.Component {
	componentWillEnter(t) {
		let { directionHistory: e } = this.props,
			{ translate: n, opacity: a } = this.state;
		n.setValue(e[e.length - 1]),
			a.setValue(0),
			t(),
			u.Z.parallel([
				u.Z.timing(a, {
					toValue: 1,
					easing: u.Z.Easing.out(u.Z.Easing.linear),
					duration: 200
				}),
				u.Z.spring(n, {
					toValue: 0,
					...x
				})
			]).start();
	}
	componentWillLeave(t) {
		let { directionHistory: e } = this.props,
			{ opacity: n, translate: a } = this.state;
		u.Z.parallel([
			u.Z.timing(n, {
				toValue: 0,
				easing: u.Z.Easing.in(u.Z.Easing.linear),
				duration: 200
			}),
			u.Z.spring(a, {
				toValue: -1 * e[e.length - 1],
				...x
			})
		]).start(t);
	}
	getStyle() {
		let { translate: t, opacity: e } = this.state;
		return u.Z.accelerate({
			opacity: e,
			transform: [
				{
					translateX: t.interpolate({
						inputRange: [0, 1],
						outputRange: ['0px', '300px']
					})
				}
			]
		});
	}
	render() {
		let { item: t } = this.props,
			{ className: e } = this.props;
		return (0, i.jsx)(u.Z.img, {
			src: t.src,
			alt: '',
			className: s()(b.slide, e),
			style: this.getStyle()
		});
	}
	constructor(...t) {
		super(...t),
			v(this, 'state', {
				translate: new u.Z.Value(0),
				opacity: new u.Z.Value(1)
			});
	}
}
class N extends (a = o.Component) {
	componentDidMount() {
		this.preloadNextImages(),
			p.Z.disable(),
			p.Z.enableTemp(h.P),
			C.S.subscribe(f.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled),
			C.S.subscribe(f.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
	}
	componentWillUnmount() {
		p.Z.disableTemp(),
			C.S.unsubscribe(f.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled),
			C.S.unsubscribe(f.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
	}
	preloadNextImages() {
		var t, e;
		let { currentIndex: n } = this.state,
			{ items: a } = this.props;
		let i = (((n + 1) % (t = a.length)) + t) % t;
		let o = (((n - 1) % (e = a.length)) + e) % e;
		this.preloadImage(a[i]), this.preloadImage(a[o]);
	}
	preloadImage(t) {
		(0, g.po)(t.src);
	}
	componentDidUpdate(t, e) {
		let { currentIndex: n } = this.state;
		n !== e.currentIndex && this.preloadNextImages();
	}
	navigateTo(t) {
		var e, n, a;
		let { directionHistory: i, currentIndex: o } = this.state;
		i.push(t - o),
			(t = ((t % (a = this.props.items.length)) + a) % a),
			this.setState({
				currentIndex: t,
				directionHistory: i
			}),
			null === (e = (n = this.props).onIndexChange) || void 0 === e || e.call(n, t);
	}
	render() {
		var t;
		let { className: e } = this.props,
			{ currentIndex: n, directionHistory: a } = this.state,
			{ modalCarouselItemClassName: o } = this.props,
			r = this.props.items[n],
			l = this.props.items;
		return (0, i.jsxs)(d.W, {
			component: 'div',
			className: s()(b.wrapper, e),
			children: [
				l.length > 1
					? (0, i.jsx)(m.am, {
							className: b.navPrev,
							onClick: this.gotoPrev
						})
					: null,
				null !== (t = r.component) && void 0 !== t
					? t
					: (0, i.jsx)(
							_,
							{
								item: r,
								directionHistory: a,
								className: o
							},
							r.src
						),
				l.length > 1
					? (0, i.jsx)(m.Pz, {
							className: b.navNext,
							onClick: this.gotoNext
						})
					: null
			]
		});
	}
	constructor(t) {
		super(t),
			v(this, 'gotoNext', () => {
				let { currentIndex: t } = this.state;
				this.navigateTo(t + 1);
			}),
			v(this, 'gotoPrev', () => {
				let { currentIndex: t } = this.state;
				this.navigateTo(t - 1);
			}),
			v(this, 'gotoNextThrottled', c()(this.gotoNext, 300)),
			v(this, 'gotoPrevThrottled', c()(this.gotoPrev, 300)),
			(this.state = {
				currentIndex: t.startWith,
				directionHistory: []
			});
	}
}
v(N, 'defaultProps', { startWith: 0 });
