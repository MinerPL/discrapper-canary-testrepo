var s = t(735250),
	n = t(470079),
	l = t(442837),
	r = t(481060),
	o = t(873115),
	i = t(219929),
	c = t(618541),
	u = t(975060),
	d = t(689938),
	E = t(520503);
class A extends n.PureComponent {
	componentDidMount() {
		null != this.props.venmoClient && o.by();
	}
	componentWillUnmount() {
		o.RS().then(() => o.ib());
	}
	render() {
		let { venmoUsername: e, className: a, venmoClient: t } = this.props,
			n = null != e && '' !== e;
		return (0, s.jsxs)('div', {
			className: a,
			children: [
				(0, s.jsx)(i.ZP, {
					type: i.ZP.Types.VENMO,
					size: i.Uy.MEDIUM,
					className: E.venmoIcon
				}),
				n
					? (0, s.jsxs)(s.Fragment, {
							children: [
								(0, s.jsx)(r.Heading, {
									variant: e.length < 25 ? 'heading-xl/bold' : 'heading-lg/bold',
									className: E.connectionInstructions,
									children: d.Z.Messages.PAYMENT_SOURCE_VENMO_CONNECTED_SUCCESS.format({ venmoUsername: e })
								}),
								(0, s.jsx)(r.Text, {
									variant: 'text-md/medium',
									className: E.connectionInstructions,
									children: d.Z.Messages.PAYMENT_SOURCE_VENMO_CONNECTED_SUCCESS_INSTRUCTIONS
								})
							]
						})
					: (0, s.jsx)(r.Text, {
							variant: 'text-md/medium',
							className: E.connectionInstructions,
							children:
								null == t
									? d.Z.Messages.PAYMENT_SOURCE_VENMO_LOADING
									: d.Z.Messages.PAYMENT_SOURCE_VENMO_CONNECTION_INSTRUCTIONS
						})
			]
		});
	}
}
a.Z = l.ZP.connectStores([c.Z, u.Z], () => ({
	venmoUsername: u.Z.venmoUsername,
	venmoClient: c.Z.getVenmoClient()
}))(A);
