n(47120);
var r,
	i = n(735250),
	a = n(470079),
	s = n(120356),
	o = n.n(s),
	l = n(748780),
	u = n(720155);
function c(e, t, n) {
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
let d = {
		friction: 14,
		tension: 200
	},
	_ = {
		DURATION: 'DURATION',
		VOLUME: 'VOLUME'
	};
function E(e) {
	let t = 0 | e,
		n = t % 60;
	return ''.concat((t - n) / 60, ':').concat(String(n).padStart(2, '0'));
}
class f extends (r = a.Component) {
	componentDidMount() {
		let { previewWidth: e, animatedProgress: t } = this.state;
		(this._previewId = e.addListener(this.handlePreviewChange)), (this._progressId = t.addListener(this.handleAnimatedChange));
	}
	componentWillUnmount() {
		let { previewWidth: e, animatedProgress: t } = this.state;
		e.removeListener(this._previewId), t.removeListener(this._progressId), window.removeEventListener('mouseup', this.handleDragEnd, !1), window.removeEventListener('mousemove', this.handleDragMove, !1);
	}
	componentDidUpdate(e, t) {
		let { dragging: n, previewWidth: r, animatedProgress: i } = this.state;
		!n && t.dragging && r.setValue(i._value);
	}
	setGrabber(e) {
		let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
			{ animatedProgress: n } = this.state;
		t
			? l.Z.spring(n, {
					toValue: e,
					...d
				}).start()
			: n.setValue(e);
	}
	calculatePercentage(e, t) {
		let {
			wrapper: n,
			props: { type: r }
		} = this;
		if (null == n) return 0;
		let { left: i, width: a, bottom: s, height: o } = n.getBoundingClientRect();
		return Math.min(1, Math.max(0, r === _.VOLUME ? (s - t) / o : (e - i) / a));
	}
	render() {
		let { buffers: e, type: t, className: n, sliderClassName: r } = this.props,
			{ dragging: a, previewWidth: s, animatedProgress: c } = this.state,
			d = a ? c : s;
		return (0, i.jsx)('div', {
			className: o()(n, t === _.VOLUME ? u.vertical : u.horizontal),
			children: (0, i.jsx)('div', {
				className: o()(r, a ? u.mediaBarInteractionDragging : u.mediaBarInteraction, t === _.VOLUME ? u.mediaBarInteractionVolume : null),
				onMouseDown: this.handleDragStart,
				onMouseMove: this.handleMouseMove,
				ref: (e) => (this.wrapper = e),
				children: (0, i.jsxs)('div', {
					className: o()(u.mediaBarWrapper, t === _.VOLUME ? u.mediaBarWrapperVolume : null),
					children: [
						null != e
							? e.map((e, t) => {
									let [n, r] = e;
									return (0, i.jsx)(
										'div',
										{
											className: u.buffer,
											style: {
												width: ''.concat(100 * r, '%'),
												left: ''.concat(100 * n, '%')
											}
										},
										t
									);
								})
							: null,
						t === _.DURATION
							? (0, i.jsx)(l.Z.div, {
									className: u.mediaBarPreview,
									style: {
										width: s.interpolate({
											inputRange: [0, 1],
											outputRange: ['0%', '100%']
										})
									}
								})
							: null,
						(0, i.jsx)(l.Z.div, {
							className: u.mediaBarProgress,
							style: {
								width: c.interpolate({
									inputRange: [0, 1],
									outputRange: ['0%', '100%']
								})
							},
							children: (0, i.jsx)('span', { className: u.mediaBarGrabber })
						}),
						t === _.DURATION
							? (0, i.jsx)(l.Z.div, {
									ref: this.setBubbleRef,
									className: u.bubble,
									style: {
										left: d.interpolate({
											inputRange: [0, 1],
											outputRange: ['0%', '100%']
										})
									}
								})
							: null
					]
				})
			})
		});
	}
	constructor(...e) {
		super(...e),
			c(this, 'state', {
				animatedProgress: new l.Z.Value(0),
				dragging: !1,
				offsetLeft: 0,
				offsetWidth: 0,
				previewWidth: new l.Z.Value(0)
			}),
			c(this, 'wrapper', void 0),
			c(this, 'bubble', void 0),
			c(this, '_previewId', void 0),
			c(this, '_progressId', void 0),
			c(this, 'handlePreviewChange', () => {
				let {
					bubble: e,
					state: { dragging: t, previewWidth: n },
					props: { value: r }
				} = this;
				if (!t && null != e) e.innerText = E(n._value * r);
			}),
			c(this, 'handleAnimatedChange', () => {
				let {
					bubble: e,
					state: { dragging: t, animatedProgress: n },
					props: { value: r }
				} = this;
				if (!!t && null != e) e.innerText = E(n._value * r);
			}),
			c(this, 'handleMouseMove', (e) => {
				let { dragging: t, previewWidth: n } = this.state;
				if (t) return;
				let { clientX: r, clientY: i } = e;
				n.setValue(this.calculatePercentage(r, i));
			}),
			c(this, 'handleDragMove', (e) => {
				let { onDrag: t, type: n } = this.props,
					{ clientX: r, clientY: i } = e;
				t(this.calculatePercentage(r, i), n);
			}),
			c(this, 'handleDragStart', (e) => {
				let { onDragStart: t, onDrag: n, type: r, currentWindow: i } = this.props,
					{ clientX: a, clientY: s } = e;
				if ((e.preventDefault(), null == this.wrapper)) return;
				let { left: o, width: l } = this.wrapper.getBoundingClientRect();
				this.setState(
					{
						dragging: !0,
						offsetLeft: o,
						offsetWidth: l
					},
					() => {
						t(r), n(this.calculatePercentage(a, s), r), i.removeEventListener('mouseup', this.handleDragEnd, !1), i.removeEventListener('mousemove', this.handleDragMove, !1), i.addEventListener('mouseup', this.handleDragEnd, !1), i.addEventListener('mousemove', this.handleDragMove, !1);
					}
				);
			}),
			c(this, 'handleDragEnd', () => {
				let { onDragEnd: e, currentWindow: t } = this.props;
				e(), t.removeEventListener('mouseup', this.handleDragEnd, !1), t.removeEventListener('mousemove', this.handleDragMove, !1), this.setState({ dragging: !1 });
			}),
			c(this, 'setBubbleRef', (e) => {
				null == e ? (this.bubble = null) : null != e.componentRef ? (this.bubble = e.componentRef) : null != e.refs && (this.bubble = e.refs.node);
			});
	}
}
c(f, 'Types', _), c(f, 'defaultProps', { currentWindow: window }), (t.Z = f);
