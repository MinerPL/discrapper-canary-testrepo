t.d(s, {
	Z: function () {
		return d;
	}
}),
	t(47120);
var n = t(735250),
	a = t(470079),
	i = t(481060),
	r = t(401190),
	o = t(689938),
	l = t(232610);
function c(e, s, t) {
	return (
		s in e
			? Object.defineProperty(e, s, {
					value: t,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[s] = t),
		e
	);
}
class d extends a.PureComponent {
	renderErrorMessage() {
		let { hasError: e } = this.state;
		return e
			? (0, n.jsx)('div', {
					className: l.error,
					children: o.Z.Messages.HYPESQUAD_LEAVE_ERROR
				})
			: null;
	}
	render() {
		let { isRequestPending: e } = this.state,
			{ isHypeSquadOnlineMember: s } = this.props;
		return s
			? (0, n.jsxs)('div', {
					className: l.leaveActionWrapper,
					children: [
						this.renderErrorMessage(),
						(0, n.jsxs)(i.Text, {
							variant: 'text-sm/normal',
							children: [
								o.Z.Messages.HYPESQUAD_LEAVE_PROMPT,
								(0, n.jsx)(i.Button, {
									className: l.leaveButton,
									color: i.Button.Colors.LINK,
									look: i.Button.Looks.LINK,
									onClick: this.handleLeaveHypeSquadClick,
									size: i.Button.Sizes.NONE,
									submitting: e,
									children: o.Z.Messages.HYPESQUAD_LEAVE_ACTION
								})
							]
						})
					]
				})
			: null;
	}
	constructor(...e) {
		super(...e),
			c(this, 'state', {
				isRequestPending: !1,
				hasError: !1
			}),
			c(this, 'handleLeaveHypeSquadError', () => {
				this.setState({ hasError: !0 });
			}),
			c(this, 'handleLeaveHypeSquadClick', () => {
				this.setState({ isRequestPending: !0 }, () => {
					r.Z.leaveHypeSquadOnline()
						.then(() => {
							this.setState({ isRequestPending: !1 });
						})
						.catch(() => {
							this.setState({
								hasError: !0,
								isRequestPending: !1
							});
						});
				});
			});
	}
}
