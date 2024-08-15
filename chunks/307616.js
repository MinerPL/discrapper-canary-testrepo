n.d(t, {
	n: function () {
		return v;
	},
	v: function () {
		return A;
	}
}),
	n(47120),
	n(411104),
	n(852437);
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(392711),
	l = n.n(o),
	u = n(215569),
	c = n(481060),
	d = n(40851),
	_ = n(314910),
	E = n(429142),
	f = n(585483),
	h = n(952265),
	p = n(602091),
	m = n(981631),
	I = n(785895);
function T(e, t, n) {
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
let g = [_.ZP, E.ZP];
class S extends i.PureComponent {
	render() {
		let { render: e, LayerComponent: t, isTopModal: n, instant: i } = this.props,
			{ transitionState: a } = this.state;
		return (
			(a === p.Dv.ENTERING || a === p.Dv.ENTERED) && !n && (a = p.Dv.HIDDEN),
			i && (a = p.Dv.ENTERED),
			(0, r.jsx)(t, {
				children: (0, r.jsx)('div', {
					className: s()(I.layer, !n && I.hidden),
					children: e({
						transitionState: a,
						onClose: this.close
					})
				})
			})
		);
	}
	constructor(...e) {
		super(...e),
			T(this, 'state', { transitionState: null }),
			T(this, 'componentWillAppear', (e) => {
				this.componentWillEnter(e);
			}),
			T(this, 'componentWillEnter', (e) => {
				let { instant: t } = this.props;
				this.setState({ transitionState: p.Dv.ENTERING }),
					setTimeout(
						() => {
							this.setState({ transitionState: p.Dv.ENTERED }), e();
						},
						t ? 0 : p.CT
					);
			}),
			T(this, 'componentWillLeave', (e) => {
				let { instant: t } = this.props;
				this.setState({ transitionState: p.Dv.EXITING }),
					setTimeout(
						() => {
							this.setState({ transitionState: p.Dv.EXITED }), e();
						},
						t ? 0 : p.CT
					);
			}),
			T(
				this,
				'close',
				() =>
					new Promise((e) => {
						this.props.closeModal(this.props.modalKey), setTimeout(() => e(), p.CT);
					})
			);
	}
}
function A() {
	return (0, h.Vn)((0, d.bp)());
}
let N = [];
function v() {
	let e = A(),
		t = (0, h.s9)((t) => (void 0 !== t[e] ? t[e] : N)),
		n = i.useRef();
	i.useLayoutEffect(() => {
		n.current = t[t.length - 1];
	}, [t]);
	let a = t.length > 0;
	i.useLayoutEffect(() => {
		if (!a) return;
		let e = () => {
			let e = n.current;
			null != e && null != e.onCloseRequest && e.onCloseRequest();
		};
		return (
			f.S.subscribe(m.CkL.MODAL_CLOSE, e),
			() => {
				f.S.unsubscribe(m.CkL.MODAL_CLOSE, e);
			}
		);
	}, [a]);
	let s = i.useCallback(() => {
			let e = n.current;
			null != e && null != e.onCloseRequest && e.onCloseRequest();
		}, []),
		o = i.useCallback(
			(t) => {
				(0, h.Mr)(t, e);
			},
			[e]
		),
		d = g.map((e) => t.some((t) => t.Layer === e || (null == t.Layer && e === _.ZP)));
	return (0, r.jsxs)(u.W, {
		component: i.Fragment,
		children: [
			g.map((e, n) => {
				var i;
				let a = l().findLast(t, (t) => t.Layer === e || (null == t.Layer && e === _.ZP));
				return (0, r.jsx)(
					c.Backdrop,
					{
						isVisible: d[n],
						backdropStyle: null !== (i = null == a ? void 0 : a.backdropStyle) && void 0 !== i ? i : c.BackdropStyles.DARK,
						onClose: s,
						LayerComponent: e,
						backdropInstant: null == a ? void 0 : a.instant
					},
					'layer-'.concat(n)
				);
			}),
			t.map((e, n) => {
				let { key: i, Layer: a, render: s, instant: l } = e;
				return (0, r.jsx)(
					S,
					{
						modalKey: i,
						LayerComponent: null != a ? a : _.ZP,
						isTopModal: n === t.length - 1,
						render: s,
						closeModal: o,
						instant: l
					},
					i
				);
			})
		]
	});
}
