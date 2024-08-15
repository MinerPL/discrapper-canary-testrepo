n.d(t, {
	Z: function () {
		return _;
	}
});
var s = n(735250);
n(470079);
var a = n(481060),
	i = n(791382),
	r = n(937615),
	l = n(217597),
	o = n(685389),
	c = n(981631),
	d = n(689938),
	u = n(481904);
function _(e) {
	let { children: t, revenue: n, revenueTrend: _, summaryMetricLabel: I, summaryMetricValue: E, summaryMetricTrend: T, summaryMetricTrendIsPercent: m } = e;
	return (0, s.jsx)(a.FormSection, {
		title: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_HEADER,
		children: (0, s.jsxs)('div', {
			className: u.paymentInfoGroup,
			children: [
				(0, s.jsxs)(o.H, {
					children: [
						(0, s.jsx)(l.Z, {
							label: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_METRIC_REVENUE,
							value: (0, r.T4)(null != n ? n : 0, c.pKx.USD),
							additionalContent: (0, s.jsx)(i.H, {
								value: _,
								isPercent: !0
							})
						}),
						(0, s.jsx)(l.Z, {
							label: I,
							value: E,
							additionalContent: (0, s.jsx)(i.H, {
								value: T,
								isPercent: m
							})
						})
					]
				}),
				t
			]
		})
	});
}
