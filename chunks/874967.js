n(47120);
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(392711),
	l = n.n(o),
	u = n(866442),
	c = n(692547),
	d = n(84735),
	_ = n(481060),
	E = n(600164),
	f = n(981631),
	h = n(1094),
	p = n(224499);
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
let I = l().memoize((e) => {
	let t = !1;
	if (null != e && (0, u.FX)(e)) {
		let n = (0, u._i)(e);
		null != n && (t = 0.2 > (0, u.Bd)(n));
	}
	return t ? c.Z.unsafe_rawColors.BLACK_500.css : c.Z.unsafe_rawColors.WHITE_500.css;
});
class T extends i.PureComponent {
	render() {
		let e;
		let { selected: t, color: n, className: i, children: a } = this.props,
			o = I(n);
		return (
			t
				? (e = {
						color: o,
						background: null != n ? n : c.Z.unsafe_rawColors.BRAND_500.css
					})
				: null != n && (e = { color: n }),
			(0, r.jsx)(d.t, {
				offset: { left: 4 },
				children: (0, r.jsxs)(E.Z, {
					className: s()(h.selectableItem, i, { [h.selected]: t }),
					onClick: this.handleClick,
					onKeyUp: this.handleKeyUp,
					align: E.Z.Align.CENTER,
					style: {
						...e,
						...this.props.style
					},
					role: 'button',
					tabIndex: 0,
					children: [
						(0, r.jsx)(E.Z, {
							align: E.Z.Align.CENTER,
							className: h.selectableItemLabel,
							shrink: 1,
							children: a
						}),
						t &&
							(0, r.jsx)(E.Z, {
								wrap: E.Z.Wrap.WRAP,
								className: p.marginReset,
								grow: 0,
								shrink: 0,
								children: (0, r.jsx)(_.CheckmarkLargeIcon, {
									size: 'md',
									color: o
								})
							})
					]
				})
			})
		);
	}
	constructor(...e) {
		super(...e),
			m(this, 'state', { color: I(this.props.color) }),
			m(this, 'handleKeyUp', (e) => {
				if (e.which === f.yXg.ENTER || e.which === f.yXg.SPACE) {
					let { onClick: e, ...t } = this.props;
					e(t);
				}
			}),
			m(this, 'handleClick', () => {
				let { onClick: e, ...t } = this.props;
				e(t);
			});
	}
}
t.Z = T;
