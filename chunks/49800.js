n.d(t, {
	Z: function () {
		return d;
	},
	s: function () {
		return c;
	}
});
var r,
	i = n(735250),
	a = n(470079),
	s = n(120356),
	o = n.n(s),
	l = n(816902);
function u(e, t, n) {
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
let c = {
	PRIMARY: l.cardPrimary,
	DANGER: l.cardDanger,
	WARNING: l.cardWarning,
	SUCCESS: l.cardSuccess,
	BRAND: l.cardBrand,
	CUSTOM: l.card
};
class d extends (r = a.PureComponent) {
	render() {
		let e;
		let { children: t, editable: n, type: r, className: a, outline: s, ...u } = this.props;
		return (
			s ? (e = l.outline) : r === c.PRIMARY && n && (e = l.editable),
			(0, i.jsx)('div', {
				className: o()(a, r, e),
				...u,
				children: t
			})
		);
	}
}
u(d, 'Types', c),
	u(d, 'defaultProps', {
		type: c.PRIMARY,
		outline: !1,
		editable: !1
	});
