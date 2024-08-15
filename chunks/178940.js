n.d(t, {
	X: function () {
		return N;
	}
}),
	n(47120);
var r,
	i,
	a,
	s,
	o,
	l = n(735250),
	u = n(470079),
	c = n(120356),
	d = n.n(c),
	_ = n(512722),
	E = n.n(_),
	f = n(866442),
	h = n(692547),
	p = n(84735),
	m = n(481060),
	I = n(981631),
	T = n(693297);
function g(e, t, n) {
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
((s = r || (r = {})).DEFAULT = 'default'), (s.INVERTED = 'inverted'), (s.GHOST = 'ghost'), (s.ROW = 'row'), ((o = i || (i = {})).TOP = 'top'), (o.CENTER = 'center');
let S = {
		BOX: T.box,
		ROUND: T.round,
		SMALL_BOX: T.smallBox
	},
	A = {
		top: T.alignTop,
		center: T.alignCenter
	};
class N extends (a = u.PureComponent) {
	getInputMode() {
		return this.props.disabled ? 'disabled' : this.props.readOnly ? 'readonly' : 'default';
	}
	getStyle() {
		var e;
		let { value: t, type: n, color: r } = this.props,
			i = null !== (e = this.props.style) && void 0 !== e ? e : {};
		if (!1 === t) return i;
		if (((i = { ...i }), r === h.Z.unsafe_rawColors.BRAND_500.css))
			switch (n) {
				case 'default':
					i.borderColor = 'var(--control-brand-foreground)';
					break;
				case 'ghost':
					(i.borderColor = 'var(--brand-15a)'), (i.backgroundColor = 'var(--brand-15a)');
					break;
				case 'row':
				case 'inverted':
					(i.borderColor = 'var(--brand-400)'), (i.backgroundColor = 'var(--brand-500)');
			}
		else
			switch (n) {
				case 'default':
					i.borderColor = r;
					break;
				case 'ghost':
					if (r.startsWith('var(--')) {
						let e = ''.concat(r.slice(0, -1), '-hsl)');
						(i.borderColor = 'rgba('.concat(e, ', 0.15)')), (i.backgroundColor = 'rgba('.concat(e, ', 0.15)'));
					} else E()((0, f.FX)(r), 'Checkbox: '.concat(r, ' is not a valid hex color')), (i.borderColor = (0, f.wK)(r, 0.15)), (i.backgroundColor = (0, f.wK)(r, 0.15));
					break;
				case 'row':
				case 'inverted':
					(i.backgroundColor = r), (i.borderColor = r);
			}
		return i;
	}
	getColor() {
		let { value: e, type: t, color: n } = this.props;
		return e ? ('inverted' === t || 'row' === t ? h.Z.unsafe_rawColors.WHITE_500.css : n) : h.Z.unsafe_rawColors.TRANSPARENT.css;
	}
	render() {
		let { disabled: e, readOnly: t, value: n, shape: r, align: i = 'center', className: a, innerClassName: s, children: o, size: u, reverse: c, checkboxColor: _, displayOnly: E, type: f, onClick: h } = this.props,
			g =
				null != o
					? (0, l.jsx)('div', {
							className: d()(T.label, e ? T.labelDisabled : T.labelClickable, c ? T.labelReversed : T.labelForward),
							style: { lineHeight: ''.concat(u, 'px') },
							children: o
						})
					: null,
			S = this.props.disabled ? T.inputDisabled : this.props.readOnly ? T.inputReadonly : T.inputDefault;
		return (0, l.jsxs)(E ? 'span' : 'label', {
			className: d()(e ? T.checkboxWrapperDisabled : T.checkboxWrapper, A[i], a, {
				[T.row]: 'row' === f,
				[T.checked]: n
			}),
			children: [
				c ? g : null,
				!E &&
					(0, l.jsx)(p.t, {
						children: (0, l.jsx)('input', {
							className: d()(s, S),
							type: 'checkbox',
							onClick: h,
							onChange: e || t ? I.dG4 : this.handleChange,
							checked: n,
							style: {
								width: u,
								height: u
							}
						})
					}),
				(0, l.jsx)('div', {
					className: d()(T.checkbox, r, { [T.checked]: n }),
					style: {
						width: u,
						height: u,
						borderColor: _,
						...this.getStyle()
					},
					children: (0, l.jsx)(m.CheckmarkLargeIcon, {
						size: 'sm',
						color: this.getColor(),
						'aria-hidden': !0
					})
				}),
				c ? null : g
			]
		});
	}
	constructor(...e) {
		super(...e),
			g(this, 'handleChange', (e) => {
				let { onChange: t } = this.props;
				null == t || t(e, e.currentTarget.checked);
			});
	}
}
g(N, 'Types', r),
	g(N, 'Shapes', S),
	g(N, 'Aligns', i),
	g(N, 'defaultProps', {
		size: 24,
		disabled: !1,
		readOnly: !1,
		displayOnly: !1,
		value: !1,
		type: 'default',
		color: h.Z.unsafe_rawColors.BRAND_500.css,
		shape: S.BOX,
		align: 'center',
		onChange: I.dG4,
		reverse: !1
	});
