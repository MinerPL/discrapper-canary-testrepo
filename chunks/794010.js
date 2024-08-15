a.d(t, {
	Z: function () {
		return o;
	}
}),
	a(47120);
var n,
	i = a(735250),
	r = a(470079);
function l(e, t, a) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = a),
		e
	);
}
class o extends (n = r.PureComponent) {
	render() {
		let { tag: e, children: t, eventName: a, data: n, track: r, trackOutboundLink: l, ...o } = this.props;
		return null == e
			? null
			: (0, i.jsx)(e, {
					...o,
					onClick: this.handleClick,
					children: t
				});
	}
	constructor(...e) {
		super(...e),
			l(this, 'handleClick', (e) => {
				let { eventName: t, data: a, href: n, onClick: i, trackOutboundLink: r, track: l } = this.props;
				if (
					(a.googleAnalytics &&
						r &&
						(null != n
							? r(n)
							: console.warn('TrackClick.handleClick: No href provided when using data.googleAnalytics')),
					i && i(e),
					!t)
				)
					return !1;
				l(t, a);
			});
	}
}
l(o, 'defaultProps', {
	tag: 'a',
	data: {}
});
