n.d(t, {
	Z: function () {
		return S;
	},
	v: function () {
		return E;
	}
}),
	n(47120);
var r,
	a,
	i,
	l = n(735250),
	s = n(470079),
	o = n(120356),
	u = n.n(o),
	c = n(536640),
	d = n(481060),
	I = n(981631),
	_ = n(689938),
	f = n(471753);
function h(e, t, n) {
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
((i = r || (r = {})).TOP = 'top'), (i.BOTTOM = 'bottom');
let E = {
	container: (e, t) => {
		let { isDisabled: n } = t;
		return {
			...e,
			cursor: n ? 'not-allowed' : void 0,
			pointerEvents: void 0,
			fontSize: 16,
			fontWeight: 500,
			width: '100%'
		};
	},
	control: (e, t) => {
		let { isDisabled: n, menuIsOpen: r } = t;
		return {
			...e,
			backgroundColor: 'var(--input-background)',
			borderColor: 'var(--input-background)',
			opacity: n ? 0.6 : 1,
			boxShadow: void 0,
			borderRadius: r ? '4px 4px 0 0' : '4px',
			minHeight: 40,
			transition: 'border 0.15s ease',
			cursor: n ? 'not-allowed' : void 0,
			pointerEvents: n ? 'none' : void 0,
			'&:hover': { borderColor: 'var(--input-background)' }
		};
	},
	singleValue: (e, t) => {
		let { isDisabled: n } = t;
		return {
			...e,
			color: 'var(--interactive-normal)',
			opacity: n ? 0.5 : 1
		};
	},
	input: (e) => ({
		...e,
		color: 'var(--interactive-normal)'
	}),
	menu: (e) => ({
		...e,
		backgroundColor: 'var(--background-secondary)',
		border: '1px solid var(--background-tertiary)',
		borderRadius: '0 0 4px 4px',
		color: 'var(--interactive-normal)',
		marginTop: -1,
		marginBottom: -1
	}),
	clearIndicator: (e, t) => {
		let { isDisabled: n } = t;
		return {
			...e,
			color: 'var(--interactive-normal)',
			cursor: n ? void 0 : 'pointer',
			opacity: 0.3,
			padding: '8px 0',
			transform: 'scale(0.8)',
			':hover': {
				color: 'var(--text-danger)',
				opacity: 1
			}
		};
	},
	indicatorsContainer: (e) => ({
		...e,
		alignItems: 'flex-start'
	}),
	dropdownIndicator: (e, t) => {
		let { isDisabled: n } = t;
		return {
			...e,
			color: 'var(--interactive-normal)',
			cursor: n ? void 0 : 'pointer',
			opacity: n ? 0.3 : 1,
			padding: '8px 8px 8px 0',
			':hover': {
				color: 'var(--interactive-hover)',
				opacity: n ? 0.3 : 1
			}
		};
	},
	menuList: (e) => ({
		...e,
		padding: 0,
		'&::-webkit-scrollbar': {
			width: 8,
			padding: '0px 2px'
		},
		'&::-webkit-scrollbar-thumb': {
			backgroundColor: 'var(--scrollbar-thin-thumb)',
			border: '2px solid transparent',
			backgroundClip: 'padding-box',
			borderRadius: 4
		},
		'&::-webkit-scrollbar-track-piece': {
			backgroundColor: 'transparent',
			borderColor: 'transparent'
		}
	}),
	option: (e, t) => {
		let { isSelected: n, isFocused: r } = t;
		return {
			...e,
			...(n
				? {
						backgroundColor: 'var(--background-modifier-selected)',
						color: 'var(--interactive-active)'
					}
				: r
					? {
							backgroundColor: 'var(--background-modifier-hover)',
							color: 'var(--interactive-hover)'
						}
					: {
							backgroundColor: 'transparent',
							color: 'var(--interactive-normal)'
						}),
			cursor: 'pointer',
			display: 'flex',
			padding: 12,
			alignItems: 'center',
			minHeight: 40,
			'&:active': {
				backgroundColor: 'var(--background-modifier-selected)',
				color: 'var(--interactive-active)'
			}
		};
	},
	placeholder: (e) => ({
		...e,
		color: 'var(--text-muted)'
	})
};
class S extends (a = s.Component) {
	focus() {
		var e;
		null === (e = this._selectRef.current) || void 0 === e || e.focus();
	}
	render() {
		let e;
		let {
				className: t,
				selectClassName: n,
				error: r,
				valueRenderer: a,
				optionRenderer: i,
				multiValueRenderer: s,
				options: o,
				value: I,
				autofocus: h,
				disabled: S,
				clearable: m,
				searchable: p,
				styleOverrides: T,
				isMulti: C,
				placeholder: N,
				filterOption: A,
				closeMenuOnSelect: O = !0,
				...P
			} = this.props,
			b = { ...P };
		null != h && (b.autoFocus = h),
			null != S && (b.isDisabled = S),
			null != m && (b.isClearable = m),
			null != p && (b.isSearchable = p);
		let g = { IndicatorSeparator: () => null };
		null != i &&
			(g.Option = (e) =>
				(0, l.jsx)(c.wx.Option, {
					...e,
					children: i(e.data)
				})),
			null != a &&
				(g.SingleValue = (e) =>
					(0, l.jsx)(c.wx.SingleValue, {
						...e,
						children: a(e.data)
					})),
			null != s && (g.MultiValue = (e) => s(e.data));
		if (C && Array.isArray(I)) {
			let t = {};
			o.forEach((e) => {
				t[String(e.value)] = e;
			}),
				(e = I.map((e) => t[String(e)]));
		} else e = null != I ? o.find((e) => e.value === I) : null;
		return (0, l.jsx)(d.FocusRing, {
			focused: this.state.isFocused && !this.state.isOpen,
			ringTarget: this._containerRef,
			children: (0, l.jsxs)('div', {
				className: u()(f.select, t, { [f.error]: null != r }),
				ref: this._containerRef,
				children: [
					(0, l.jsx)(c.ZP, {
						...b,
						className: n,
						ref: this._selectRef,
						isMulti: C,
						components: g,
						options: o,
						styles: null != T ? T : E,
						onFocus: this.handleFocus,
						onBlur: this.handleBlur,
						onMenuOpen: this.handleMenuOpen,
						onMenuClose: this.handleMenuClose,
						closeMenuOnSelect: O,
						value: e,
						onKeyDown: this.handleKeyDown,
						placeholder: null != N ? N : _.Z.Messages.SELECT,
						noOptionsMessage: () => _.Z.Messages.NO_RESULTS_FOUND,
						filterOption: A
					}),
					null != r
						? (0, l.jsx)('div', {
								className: f.errorMessage,
								children: r
							})
						: null
				]
			})
		});
	}
	constructor(...e) {
		super(...e),
			h(this, '_selectRef', s.createRef()),
			h(this, '_containerRef', s.createRef()),
			h(this, 'state', {
				isFocused: !1,
				isOpen: !1
			}),
			h(this, 'handleFocus', (e) => {
				var t, n;
				this.setState({ isFocused: !0 }), null === (t = (n = this.props).onFocus) || void 0 === t || t.call(n, e);
			}),
			h(this, 'handleBlur', (e) => {
				var t, n;
				this.setState({ isFocused: !1 }), null === (t = (n = this.props).onBlur) || void 0 === t || t.call(n, e);
			}),
			h(this, 'handleKeyDown', (e) => {
				e.which === I.yXg.ESCAPE && this.state.isOpen && e.stopPropagation();
			}),
			h(this, 'handleMenuOpen', () => {
				this.setState({ isOpen: !0 });
			}),
			h(this, 'handleMenuClose', () => {
				this.setState({ isOpen: !1 });
			});
	}
}
h(S, 'MenuPlacements', r);
