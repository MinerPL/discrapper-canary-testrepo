n.d(t, {
	k: function () {
		return g;
	}
});
var s,
	a,
	r = n(735250),
	i = n(470079),
	l = n(557533),
	o = n.n(l),
	c = n(154528),
	d = n(346543);
function _(e, t, n) {
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
let u = {
		VERTICAL: c.flexVertical,
		HORIZONTAL: c.flexHorizontal,
		HORIZONTAL_REVERSE: c.flexHorizontalReverse
	},
	E = {
		START: c.flexJustifyStart,
		END: c.flexJustifyEnd,
		CENTER: c.flexJustifyCenter,
		BETWEEN: c.flexJustifyBetween,
		AROUND: c.flexJustifyAround
	},
	T = {
		NO_WRAP: c.flexNowrap,
		WRAP: c.flexWrap,
		WRAP_REVERSE: c.flexWrapReverse
	},
	I = {
		START: c.flexAlignStart,
		END: c.flexAlignEnd,
		CENTER: c.flexAlignCenter,
		STRETCH: c.flexAlignStretch
	},
	R = {
		SMALL: d.flexGutterSmall,
		LARGE: d.flexGutterLarge
	};
class C extends (s = i.PureComponent) {
	render() {
		let { children: e, className: t, shrink: n, grow: s, basis: a, style: l, wrap: c, ..._ } = this.props,
			u = {
				style: {
					flexGrow: s,
					flexShrink: n,
					flexBasis: a,
					...l
				},
				className: t === d.flexChild ? t : o()(d.flexChild, t),
				..._
			};
		if (!c && 'string' != typeof e && 1 === i.Children.count(e)) {
			let n = i.Children.only(e);
			return (
				(u.style = {
					...u.style,
					...n.props.style
				}),
				(u.className = o()(n.props.className, t)),
				i.cloneElement(n, u)
			);
		}
		return (0, r.jsx)('div', {
			...u,
			children: e
		});
	}
}
_(C, 'defaultProps', {
	className: d.flexChild,
	style: {},
	wrap: !1
});
class g extends (a = i.PureComponent) {
	render() {
		let { children: e, className: t, direction: n, justify: s, align: a, wrap: i, shrink: l, grow: c, basis: _, style: u, gutter: E, ...T } = this.props,
			I = {
				flexShrink: l,
				flexGrow: c,
				flexBasis: _,
				...u
			};
		return (0, r.jsx)('div', {
			style: I,
			className: o()(d.flex, n, s, a, i, E, t),
			...T,
			children: e
		});
	}
}
_(g, 'Child', C),
	_(g, 'Direction', u),
	_(g, 'Align', I),
	_(g, 'Justify', E),
	_(g, 'Wrap', T),
	_(g, 'Gutter', R),
	_(g, 'defaultProps', {
		direction: u.HORIZONTAL,
		justify: E.START,
		align: I.STRETCH,
		wrap: T.WRAP,
		shrink: 1,
		grow: 1,
		basis: 'auto',
		style: {}
	});
