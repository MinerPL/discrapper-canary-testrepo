a(411104), a(47120);
var n = a(735250),
	i = a(470079),
	r = a(539528),
	l = a(786876),
	o = a(333032);
class s extends i.Component {
	render() {
		let { to: e, from: t, isNavLink: a, children: i, tabIndex: r = 0, role: o, className: s } = this.props;
		if (null == e) throw Error("Missing 'to' route prop in TrackLink component");
		let c = 'string' == typeof e ? e : e.pathname,
			d = 'string' == typeof e ? '' : e.hash,
			u = 'string' == typeof e ? '' : e.search;
		return a
			? (0, n.jsx)(l.OL, {
					className: s,
					tabIndex: r,
					onClick: this.handleOnClick,
					to: {
						pathname: c,
						hash: d,
						search: u,
						state: { previousLinkLocation: t }
					},
					role: o,
					children: i
				})
			: (0, n.jsx)(l.rU, {
					className: s,
					tabIndex: r,
					onClick: this.handleOnClick,
					to: {
						pathname: c,
						hash: d,
						search: u,
						state: { previousLinkLocation: t }
					},
					role: o,
					children: i
				});
	}
	constructor(...e) {
		var t, a, n;
		super(...e),
			(t = this),
			(a = 'handleOnClick'),
			(n = () => {
				let { to: e, avoidRouter: t, onClick: a, history: n } = this.props;
				if (null != a) a();
				else if (t) {
					let t = 'string' == typeof e ? (0, r.ob)(e, null, void 0, n.location) : e,
						a = n.createHref(t);
					window.location = a;
				}
			}),
			a in t
				? Object.defineProperty(t, a, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					})
				: (t[a] = n);
	}
}
t.Z = (0, o.EN)(s);
