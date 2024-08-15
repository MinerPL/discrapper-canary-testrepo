var s,
	o = t(735250),
	r = t(470079),
	a = t(120356),
	l = t.n(a),
	i = t(846519),
	c = t(481060),
	u = t(572004),
	d = t(689938),
	E = t(375294);
function _(e, n, t) {
	return (
		n in e
			? Object.defineProperty(e, n, {
					value: t,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[n] = t),
		e
	);
}
class I extends (s = r.PureComponent) {
	componentWillUnmount() {
		this._timeout.stop();
	}
	render() {
		let { isVertical: e, value: n, text: t, className: s, inputClassName: r } = this.props,
			{ mode: a } = this.state,
			i = a === c.CopyInput.Modes.SUCCESS ? d.Z.Messages.COPIED : t;
		return e
			? (0, o.jsxs)('div', {
					className: l()(s, a),
					children: [
						(0, o.jsx)(c.TextInput, {
							value: n,
							inputClassName: r
						}),
						(0, o.jsx)(c.Button, {
							className: E.button,
							onClick: this.handleCopy,
							size: c.Button.Sizes.MIN,
							color: this.getVerticalButtonColor(a),
							look: c.Button.Looks.FILLED,
							children: i
						})
					]
				})
			: (0, o.jsx)(c.CopyInput, {
					...this.props,
					onCopy: this.handleCopy,
					mode: a,
					text: i
				});
	}
	handleCopy() {
		let { onCopy: e, value: n, delay: t } = this.props,
			s = (0, u.JG)(n);
		this.setState({ mode: s ? c.CopyInput.Modes.SUCCESS : c.CopyInput.Modes.ERROR }), this._timeout.start(t, () => this.setState({ mode: c.CopyInput.Modes.DEFAULT })), null == e || e();
	}
	getVerticalButtonColor(e) {
		switch (e) {
			case c.CopyInput.Modes.SUCCESS:
				return c.Button.Colors.GREEN;
			case c.CopyInput.Modes.ERROR:
				return c.Button.Colors.RED;
			default:
				return c.Button.Colors.BRAND;
		}
	}
	constructor(e) {
		super(e), _(this, '_timeout', void 0), (this.state = { mode: c.CopyInput.Modes.DEFAULT }), (this._timeout = new i.V7()), (this.handleCopy = this.handleCopy.bind(this));
	}
}
_(I, 'defaultProps', {
	isVertical: !1,
	delay: 300
}),
	(n.Z = I);
