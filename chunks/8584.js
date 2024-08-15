n.d(t, {
	av: function () {
		return v;
	},
	bL: function () {
		return L;
	},
	kA: function () {
		return O;
	}
}),
	n(653041),
	n(47120);
var s,
	a,
	i = n(735250),
	r = n(470079),
	l = n(120356),
	o = n.n(l),
	c = n(913527),
	d = n.n(c),
	u = n(442837),
	_ = n(481060),
	I = n(167533),
	E = n(766434),
	T = n(937615),
	m = n(289393),
	N = n(264451),
	S = n(759178),
	h = n(462087),
	g = n(685201),
	C = n(981631),
	x = n(198139),
	p = n(689938),
	R = n(88401);
((a = s || (s = {})).DROPDOWN = 'dropdown'), (a.PERIOD = 'period'), (a.SUBSCRIBERS = 'subscribers'), (a.AMOUNT = 'amount'), (a.STATUS = 'status');
let f = (e, t, n, s) => {
		let a = null != s ? d()(s).add(15, 'days').toISOString() : void 0,
			r = (0, N.Zo)(a, 'MMM D');
		switch (e) {
			case x.x_.OPEN:
				return (0, i.jsxs)(i.Fragment, {
					children: [null != r ? p.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PENDING_OR_SCHEDULED_WITH_DATE.format({ payoutDate: r }) : p.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PENDING, (0, i.jsx)(h.Z, { className: R.statusScheduledIcon })]
				});
			case x.x_.CANCELED:
				return (0, i.jsxs)(i.Fragment, {
					children: [
						p.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_CANCELLED,
						(0, i.jsx)(_.CircleXIcon, {
							size: 'md',
							color: 'currentColor',
							className: R.statusErrorIcon
						})
					]
				});
			case x.x_.PAYOUT_DEFERRED:
				if ((null == n ? void 0 : n.includes(x.XL.PAYOUT_SEIZED)) === !0)
					return (0, i.jsxs)(i.Fragment, {
						children: [
							p.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_CANCELLED,
							(0, i.jsx)(_.CircleXIcon, {
								size: 'md',
								color: 'currentColor',
								className: R.statusErrorIcon
							})
						]
					});
				return (0, i.jsxs)(i.Fragment, {
					children: [p.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_DEFERRED, (0, i.jsx)(g.Z, { className: R.statusDeferredIcon })]
				});
		}
		switch (t) {
			case x.jw.MANUAL:
			case x.jw.OPEN:
			case x.jw.PENDING:
			case x.jw.PROCESSING:
			case x.jw.SUBMITTED:
			case x.jw.PENDING_FUNDS:
			case x.jw.CANCELED:
			case x.jw.ERROR:
				return (0, i.jsxs)(i.Fragment, {
					children: [null != r ? p.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PENDING_OR_SCHEDULED_WITH_DATE.format({ payoutDate: r }) : p.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_SCHEDULED, (0, i.jsx)(h.Z, { className: R.statusScheduledIcon })]
				});
			case x.jw.PAID:
				return (0, i.jsxs)(i.Fragment, {
					children: [
						p.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PAID,
						(0, i.jsx)(_.CircleCheckIcon, {
							size: 'md',
							color: 'currentColor',
							className: R.statusPaidIcon
						})
					]
				});
			case x.jw.DEFERRED:
			case x.jw.DEFERRED_INTERNAL:
			case x.jw.REJECTED:
			case x.jw.RISK_REVIEW:
				return (0, i.jsxs)(i.Fragment, {
					children: [
						S.Z.getStatusErrorText(t),
						(0, i.jsx)(_.CircleXIcon, {
							size: 'md',
							color: 'currentColor',
							className: R.statusErrorIcon
						})
					]
				});
		}
		return null;
	},
	L = (e) => {
		let { children: t, className: n } = e;
		return (0, i.jsx)('div', {
			className: o()(R.cell, n),
			children: t
		});
	},
	O = (e) => {
		let { children: t } = e;
		return (0, i.jsx)('div', {
			className: R.cell,
			children: (0, T.T4)(null != t ? t : 0, C.pKx.USD)
		});
	},
	A = (e) => {
		let { children: t } = e;
		return (0, i.jsx)(L, {
			className: R.statusCell,
			children: null != t ? t : '-'
		});
	},
	M = (e) => {
		let { children: t } = e;
		return (0, i.jsx)(L, {
			className: R.periodCell,
			children: d()(t).utc().format('MMMM YYYY')
		});
	},
	D = (e) => {
		var t;
		let { listingId: n } = e,
			s = (0, u.e7)([m.Z], () => m.Z.getSubscriptionListing(n)),
			a = null !== (t = null == s ? void 0 : s.name) && void 0 !== t ? t : '['.concat(p.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_TIER_DELETED, ']');
		return (0, i.jsx)(L, { children: a });
	},
	v = (e) => {
		let { children: t } = e;
		return (0, i.jsxs)(L, {
			className: R.subscribersCell,
			children: [
				null != t ? t : '-',
				' ',
				(0, i.jsx)(_.UserIcon, {
					size: 'md',
					color: 'currentColor',
					className: R.subscribersIcon,
					'aria-hidden': !0
				})
			]
		});
	},
	j = () => {
		let e = (0, i.jsx)(_.Tooltip, {
			text: p.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_AMOUNT_DISCLAIMER,
			children: (e) =>
				(0, i.jsx)(_.CircleInformationIcon, {
					size: 'xs',
					color: 'currentColor',
					className: R.amountDisclaimer,
					...e
				})
		});
		return (0, i.jsxs)(i.Fragment, {
			children: [p.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_AMOUNT, ' ', e]
		});
	},
	Z = () => {
		let e = (0, i.jsx)(_.Tooltip, {
			text: p.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_METRIC_NEXT_PAYMENT_DISCLAIMER,
			children: (e) =>
				(0, i.jsx)(_.CircleInformationIcon, {
					size: 'xs',
					color: 'currentColor',
					className: R.statusDisclaimer,
					...e
				})
		});
		return (0, i.jsxs)(i.Fragment, {
			children: [p.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS, ' ', e]
		});
	},
	b = [
		{
			key: 'dropdown',
			cellClassName: R.toggleExpandColumn,
			renderHeader: () => null,
			render(e, t) {
				let { expandedRows: n, onToggleExpandRow: s } = t,
					a = n.has(e.key);
				return (0, i.jsx)(_.Clickable, {
					className: o()(R.cell, R.toggleExpandCell),
					onClick: () => s(e.key),
					children: (0, i.jsx)(_.ChevronSmallRightIcon, {
						size: 'md',
						color: 'currentColor',
						className: o()(R.caretIcon, { [R.caretDownIcon]: a })
					})
				});
			}
		},
		{
			key: 'period',
			cellClassName: R.periodColumn,
			renderHeader: () => p.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_PERIOD,
			render(e, t) {
				let { expandedRows: n } = t,
					s = [(0, i.jsx)(M, { children: e.periodStartingAt }, e.key)];
				if (n.has(e.key)) for (let t in e.ppgs) s.push((0, i.jsx)(D, { listingId: t }, t));
				return s;
			}
		},
		{
			key: 'amount',
			cellClassName: o()(R.amountColumn, R.cellAlignRight),
			renderHeader: () => (0, i.jsx)(j, {}),
			render(e, t) {
				let { expandedRows: n } = t,
					s = [(0, i.jsx)(O, { children: e.amount }, e.key)];
				if (n.has(e.key))
					for (let t in e.ppgs) {
						let n = e.ppgs[t];
						s.push((0, i.jsx)(O, { children: null == n ? void 0 : n.amount }, t));
					}
				return s;
			}
		},
		{
			key: 'status',
			cellClassName: o()(R.statusColumn, R.cellAlignRight),
			renderHeader: () => (0, i.jsx)(Z, {}),
			render(e) {
				let { ppgStatus: t, payoutStatus: n, ppgDeferralReasons: s, periodEndDate: a } = (0, E.j0)(e);
				return (0, i.jsx)(A, { children: f(t, n, s, a) });
			}
		}
	];
t.ZP = (e) => {
	let { payoutsByPeriod: t } = e,
		[n, s] = r.useState(new Set());
	return (0, i.jsx)('div', {
		className: R.tableContainer,
		children: (0, i.jsx)(I.Z, {
			columns: b,
			data: t,
			className: R.table,
			rowClassName: R.row,
			headerClassName: R.header,
			cellProps: {
				onToggleExpandRow: (e) => {
					s((t) => {
						let n = new Set(t);
						return n.has(e) ? n.delete(e) : n.add(e), n;
					});
				},
				expandedRows: n
			}
		})
	});
};
