n.d(t, {
	e: function () {
		return E;
	}
}),
	n(47120);
var i = n(735250);
n(470079);
var a = n(481060),
	s = n(765400),
	r = n(937615),
	l = n(817460),
	o = n(290348),
	c = n(367719),
	u = n(882101),
	d = n(689938),
	_ = n(727712);
let E = (e) => {
	let { listingId: t, isListingPublished: n, expanded: E, onToggleExpanded: I } = e,
		m = (0, c.Z)(),
		[T] = o._T(t),
		[h] = o.d9(t, m),
		[N] = o.H9(t);
	return (0, i.jsxs)('div', {
		className: _.container,
		children: [
			(0, i.jsx)(u.BM, { image: h }),
			(0, i.jsxs)('div', {
				className: _.tierTextInfoContainer,
				children: [
					(0, i.jsx)(u.Ey, { listingName: T }),
					(0, i.jsxs)('div', {
						className: _.tierPriceContainer,
						children: [
							!n && (0, i.jsx)(s.v, {}),
							(0, i.jsxs)(a.Text, {
								variant: 'text-xs/normal',
								className: _.tierPrice,
								children: [
									(0, r.T4)(N.price, N.currency),
									' ',
									d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
										period: (0, l.JE)({
											interval: N.interval,
											interval_count: N.interval_count
										})
									})
								]
							})
						]
					})
				]
			}),
			(0, i.jsx)(a.Clickable, {
				onClick: I,
				children: E
					? (0, i.jsx)(a.ChevronSmallUpIcon, {
							size: 'md',
							color: 'currentColor',
							className: _.toggleButton
						})
					: (0, i.jsx)(a.ChevronSmallDownIcon, {
							size: 'md',
							color: 'currentColor',
							className: _.toggleButton
						})
			})
		]
	});
};
