n.d(t, {
	Z: function () {
		return u;
	}
}),
	n(47120);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	l = n.n(s),
	r = n(981631),
	o = n(909314);
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
class u extends a.Component {
	componentDidUpdate(e, t) {
		if (t.focused !== this.state.focused && this.state.focused) {
			var n;
			null === (n = this.inputRef.current) || void 0 === n || n.focus();
		}
		null !== this.props.value &&
			this.props.value !== e.value &&
			this.props.value !== this.state.value &&
			d(this.props.value, this.props, this.state) &&
			this.setState({ value: this.props.value });
	}
	render() {
		let e;
		let { className: t, name: n, autoComplete: a, maxLen: s } = this.props,
			r = {
				position: 'absolute',
				left: 0,
				width: '100%',
				opacity: 1
			};
		return (
			this.state.focused
				? (e = {
						visibility: 'hidden',
						pointerEvents: 'none'
					})
				: (r.opacity = 0),
			(0, i.jsx)('div', {
				className: l()(o.outer, t),
				children: (0, i.jsxs)('div', {
					className: o.container,
					children: [
						(0, i.jsx)('input', {
							type: 'text',
							className: o.input,
							ref: this.inputRef,
							style: r,
							value: this.state.value,
							name: n,
							maxLength: s,
							autoComplete: a,
							onKeyPress: this.handleKeyPress,
							onChange: this.handleChange,
							onFocus: this.handleFocus,
							onBlur: this.handleBlur
						}),
						(0, i.jsx)('div', {
							className: o.input,
							style: e,
							children: this.state.value
						})
					]
				})
			})
		);
	}
	constructor(...e) {
		super(...e),
			c(this, 'inputRef', a.createRef()),
			c(this, 'state', {
				focused: !1,
				lastGoodValue: this.props.value,
				value: this.props.value
			}),
			c(this, 'handleChange', (e) => {
				let { onChange: t } = this.props;
				this.setState({ value: e.currentTarget.value }), null == t || t(e);
			}),
			c(this, 'handleFocus', (e) => {
				let { onFocus: t } = this.props;
				this.setState({
					focused: !0,
					lastGoodValue: e.currentTarget.value
				}),
					null == t || t(e);
			}),
			c(this, 'handleBlur', (e) => {
				if (d('', this.props, this.state)) {
					this.setState({ focused: !1 });
					let { onBlur: t } = this.props;
					null == t || t(e);
				} else
					this.setState({
						focused: !1,
						value: this.state.lastGoodValue
					});
			}),
			c(this, 'handleKeyPress', (e) => {
				if (e.which === r.yXg.ENTER) {
					var t;
					null === (t = this.inputRef.current) || void 0 === t || t.blur();
				}
			});
	}
}
function d() {
	let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
		t = arguments.length > 1 ? arguments[1] : void 0,
		n = arguments.length > 2 ? arguments[2] : void 0,
		i = '' !== e ? e : null != n.value && '' !== n.value ? n.value : '';
	return (null == t.minLen || !(i.length < t.minLen)) && (null == t.maxLen || !(i.length > t.maxLen)) && !0;
}
