n.d(t, {
	ZX: function () {
		return g;
	},
	gt: function () {
		return S;
	},
	rH: function () {
		return o;
	}
});
var r,
	i,
	a,
	s,
	o,
	l,
	u = n(735250),
	c = n(470079),
	d = n(120356),
	_ = n.n(d),
	E = n(748780),
	f = n(481060),
	h = n(727637),
	p = n(600164),
	m = n(745820);
((r = o || (o = {})).DEFAULT = 'default'), (r.SMALL = 'small');
let I = {
		default: m.shineDefault,
		small: m.shineSmall
	},
	T = {
		default: m.shineInnerDefault,
		small: m.shineInnerSmall
	};
class g extends (l = c.PureComponent) {
	render() {
		let { className: e, shineSize: t, shinePaused: n, ...r } = this.props;
		return (0, u.jsx)(E.Z.div, {
			...r,
			className: _()(m.shineContainer, e, { [m.shinePaused]: n }),
			children: (0, u.jsx)(p.Z, {
				align: p.Z.Align.CENTER,
				justify: p.Z.Justify.CENTER,
				className: I[t],
				children: (0, u.jsx)('div', { className: T[t] })
			})
		});
	}
}
(s = { shineSize: 'default' }),
	(a = 'defaultProps') in (i = g)
		? Object.defineProperty(i, a, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (i[a] = s);
let S = (e) => {
	let { children: t, className: n, disabled: r, submitting: i, pauseAnimation: a, shineSize: s = 'default', shinePaused: o, buttonShineClassName: l, onlyShineOnHover: d, ...E } = e,
		p = c.createRef(),
		I = (0, h.Z)(p),
		T = !r && !i && !0 !== a && (!d || I);
	return (0, u.jsxs)(f.Button, {
		buttonRef: p,
		...E,
		className: _()(m.shinyButton, n),
		disabled: r,
		submitting: i,
		children: [
			t,
			T
				? (0, u.jsx)(g, {
						shinePaused: o,
						className: _()(m.buttonShine, d ? m.onlyShineOnHover : void 0, l),
						shineSize: s
					})
				: null
		]
	});
};
S.ShineSizes = o;
