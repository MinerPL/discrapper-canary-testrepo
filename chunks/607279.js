n(47120);
var r,
	i = n(735250),
	a = n(470079),
	s = n(120356),
	o = n.n(s),
	l = n(481060),
	u = n(689938),
	c = n(845995);
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
class _ extends (r = a.Component) {
	render() {
		let {
				autoFocus: e,
				label: t,
				placeholder: n,
				searchTerm: r,
				inputClassName: a,
				className: s,
				onChange: d,
				onFocus: _,
				onBlur: E,
				onKeyPress: f,
				autoComplete: h,
				forwardedRef: p,
				closeIconClassName: I,
				searchIconClassName: m,
				cta: T
			} = this.props,
			g = null != r && r.length > 0,
			S = null != p ? p : this._textInputRef;
		return (0, i.jsx)(l.FocusRing, {
			focusTarget: S,
			ringTarget: this._containerRef,
			children: (0, i.jsxs)('div', {
				className: o()(c.searchBox, s),
				ref: this._containerRef,
				children: [
					(0, i.jsx)(l.TextInput, {
						inputRef: S,
						focusProps: { enabled: !1 },
						name: 'search',
						maxLength: 100,
						className: c.searchBoxInputWrapper,
						inputClassName: o()(c.searchBoxInput, a),
						onChange: d,
						onFocus: _,
						onBlur: E,
						onKeyPress: f,
						value: g ? r : '',
						placeholder: n,
						autoFocus: e,
						'aria-label': t,
						autoComplete: h ? 'on' : 'off'
					}),
					null != T
						? (0, i.jsx)(l.Text, {
								color: 'text-muted',
								variant: 'text-xs/normal',
								className: c.cta,
								children: T
							})
						: null,
					g
						? (0, i.jsx)(l.Clickable, {
								onClick: this.handleClear,
								className: c.clear,
								'aria-label': u.Z.Messages.SEARCH_CLEAR,
								children: (0, i.jsx)(l.CircleXIcon, {
									size: 'md',
									color: 'currentColor',
									className: o()(c.clearIcon, I)
								})
							})
						: (0, i.jsx)(l.MagnifyingGlassIcon, {
								size: 'md',
								color: 'currentColor',
								className: o()(c.searchIcon, m),
								'aria-label': u.Z.Messages.SEARCH
							})
				]
			})
		});
	}
	constructor(...e) {
		super(...e),
			d(this, '_textInputRef', a.createRef()),
			d(this, '_containerRef', a.createRef()),
			d(this, 'handleClear', () => {
				let { onClear: e, forwardedRef: t } = this.props,
					{ current: n } = null != t ? t : this._textInputRef;
				null != n && n.focus(), null != e && e();
			});
	}
}
d(_, 'defaultProps', { autoComplete: !1 }),
	(t.Z = a.forwardRef((e, t) =>
		(0, i.jsx)(_, {
			forwardedRef: t,
			...e
		})
	));
