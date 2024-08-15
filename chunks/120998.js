n(47120);
var i,
	a = n(735250),
	s = n(470079),
	r = n(392711),
	l = n.n(r),
	o = n(302221),
	c = n(273388);
function d(e, t, n) {
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
class u extends (i = s.PureComponent) {
	onDataUpdate(e, t) {
		let { maxValue: n, data: i, animate: a } = this.props,
			s = null == e || (e.data !== t.data && !l().isEqual(e.data, t.data));
		if (
			(s && ((this.dataChangedAt = performance.now()), (this.maxValue = null != n ? n : Math.max(...i))),
			s || null == e || (!e.animate && a) || e.color !== this.props.color)
		) {
			let e = o.oo(this.props.color);
			(this.fillColor = 'rgba('.concat(e.r, ', ').concat(e.g, ', ').concat(e.b, ', 0.5)')),
				window.cancelAnimationFrame(this.animationFrameRequestId),
				(this.animationFrameRequestId = window.requestAnimationFrame(this.updateAnimation));
		}
	}
	componentDidMount() {
		(this.animationFrameRequestId = 0), this.onDataUpdate(null, this.props);
	}
	componentDidUpdate(e) {
		this.onDataUpdate(e, this.props);
	}
	componentWillUnmount() {
		window.cancelAnimationFrame(this.animationFrameRequestId), (this.animationFrameRequestId = 0);
	}
	render() {
		let { className: e, pixelWidth: t, pixelHeight: n } = this.props;
		return (0, a.jsx)('div', {
			className: e,
			children: (0, a.jsx)('canvas', {
				ref: this.canvas,
				className: c.canvas,
				width: t,
				height: n
			})
		});
	}
	constructor(...e) {
		super(...e),
			d(this, 'dataChangedAt', void 0),
			d(this, 'fillColor', void 0),
			d(this, 'maxValue', void 0),
			d(this, 'canvas', s.createRef()),
			d(this, 'animationFrameRequestId', void 0),
			d(this, 'updateAnimation', (e) => {
				let t, n;
				let i = this.canvas.current;
				if (null == i) return;
				let {
					data: a,
					updateInterval: s,
					color: r,
					numUpdatesToShow: l,
					lineWidth: c,
					animate: d,
					gradientStopColor: u
				} = this.props;
				if (a.length < 2) return;
				let _ = Math.max(Math.min((e - this.dataChangedAt) / s, 1), 0),
					E = i.getContext('2d'),
					h = this.maxValue;
				(E.strokeStyle = r), (E.lineWidth = c);
				let m = i.height - E.lineWidth,
					I = E.createLinearGradient(0, 0, 0, m);
				if (null != u) I.addColorStop(0, u);
				else {
					let { r: e, g: t, b: n } = o.oo(r);
					I.addColorStop(0, 'rgba('.concat(e, ', ').concat(t, ', ').concat(n, ', 0)'));
				}
				I.addColorStop(1, this.fillColor), (E.fillStyle = I);
				let g = a.length >= l ? l : a.length;
				E.setTransform(1, 0, 0, -1, 0, i.height),
					E.clearRect(0, 0, i.width, i.height),
					E.translate(0, 0.5 * E.lineWidth);
				let p = Math.floor(i.width / (g - 3)),
					T = 0.5 * p;
				E.translate(p - p * _, 0), E.beginPath();
				let S = -p;
				a.forEach((e, i) => {
					(t = {
						x: S,
						y: (m * e) / h
					}),
						0 === i ? E.moveTo(t.x, t.y) : E.bezierCurveTo(n.x + T, n.y, t.x - T, t.y, t.x, t.y),
						(n = t),
						(S += p);
				}),
					E.stroke(),
					E.lineTo(S - p, 0),
					E.lineTo(0, 0),
					E.fill(),
					d && _ < 1 && (this.animationFrameRequestId = window.requestAnimationFrame(this.updateAnimation));
			});
	}
}
d(u, 'defaultProps', { animate: !0 }), (t.Z = u);
