n.d(t, {
	Z: function () {
		return L;
	}
});
var s,
	a,
	i = n(735250),
	r = n(470079),
	l = n(512722),
	o = n.n(l),
	c = n(913527),
	d = n.n(c),
	u = n(481060),
	_ = n(264451),
	I = n(759178),
	E = n(462087),
	T = n(685201),
	m = n(766434),
	N = n(755930),
	S = n(334820),
	h = n(198139),
	g = n(689938),
	C = n(512797);
((s = a || (a = {})).DROPDOWN = 'DROPDOWN'), (s.PERIOD = 'PERIOD'), (s.AMOUNT = 'AMOUNT '), (s.STATUS = 'STATUS ');
let x = (e) => {
	let { dateUtc: t } = e;
	return (0, i.jsx)(u.Text, {
		variant: 'text-md/medium',
		color: 'interactive-active',
		children: d()(t).utc().format('MMMM YYYY')
	});
};
function p(e) {
	let { item: t } = e,
		{ ppgStatus: n, payoutStatus: s, ppgDeferralReasons: a, periodEndDate: r } = (0, m.j0)(t),
		l = null != r ? d()(r).add(15, 'days').toISOString() : void 0,
		o = (0, _.Zo)(l, 'MMM D');
	switch (n) {
		case h.x_.OPEN:
			return (0, i.jsxs)(i.Fragment, {
				children: [
					null != o
						? g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PENDING_OR_SCHEDULED_WITH_DATE.format({
								payoutDate: o
							})
						: g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PENDING,
					(0, i.jsx)(E.Z, { className: C.statusScheduledIcon })
				]
			});
		case h.x_.CANCELED:
			return (0, i.jsxs)(i.Fragment, {
				children: [
					g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_CANCELLED,
					(0, i.jsx)(u.CircleXIcon, {
						size: 'md',
						color: 'currentColor',
						className: C.statusErrorIcon
					})
				]
			});
		case h.x_.PAYOUT_DEFERRED:
			if ((null == a ? void 0 : a.includes(h.XL.PAYOUT_SEIZED)) === !0)
				return (0, i.jsxs)(i.Fragment, {
					children: [
						g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_CANCELLED,
						(0, i.jsx)(u.CircleXIcon, {
							size: 'md',
							color: 'currentColor',
							className: C.statusErrorIcon
						})
					]
				});
			return (0, i.jsxs)(i.Fragment, {
				children: [
					g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_DEFERRED,
					(0, i.jsx)(T.Z, { className: C.statusDeferredIcon })
				]
			});
	}
	switch (s) {
		case h.jw.MANUAL:
		case h.jw.OPEN:
		case h.jw.PENDING:
		case h.jw.PROCESSING:
		case h.jw.SUBMITTED:
		case h.jw.PENDING_FUNDS:
		case h.jw.CANCELED:
		case h.jw.ERROR:
			return (0, i.jsxs)(i.Fragment, {
				children: [
					null != o
						? g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PENDING_OR_SCHEDULED_WITH_DATE.format({
								payoutDate: o
							})
						: g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_SCHEDULED,
					(0, i.jsx)(E.Z, { className: C.statusScheduledIcon })
				]
			});
		case h.jw.PAID:
			return (0, i.jsxs)(i.Fragment, {
				children: [
					g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PAID,
					(0, i.jsx)(u.CircleCheckIcon, {
						size: 'md',
						color: 'currentColor',
						className: C.statusPaidIcon
					})
				]
			});
		case h.jw.DEFERRED:
		case h.jw.DEFERRED_INTERNAL:
		case h.jw.REJECTED:
		case h.jw.RISK_REVIEW:
			return (0, i.jsxs)(i.Fragment, {
				children: [
					I.Z.getStatusErrorText(s),
					(0, i.jsx)(u.CircleXIcon, {
						size: 'md',
						color: 'currentColor',
						className: C.statusErrorIcon
					})
				]
			});
	}
	return null;
}
let R = (0, N.i$)({
		key: 'AMOUNT ',
		cellClassName: C.amountColumn,
		renderHeader() {
			let e = (0, i.jsx)(u.Tooltip, {
				text: g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_AMOUNT_DISCLAIMER,
				children: (e) =>
					(0, i.jsx)(u.CircleInformationIcon, {
						size: 'xs',
						color: 'currentColor',
						className: C.amountDisclaimer,
						...e
					})
			});
			return (0, i.jsxs)(N.qN, {
				children: [g.Z.Messages.GUILD_PRODUCT_EARNINGS_TABLE_PRICE_COLUMN_TITLE, e]
			});
		},
		getAmount: (e) => e.amount
	}),
	f = (0, S.rM)(
		[
			(0, S.Fd)({
				key: 'PERIOD',
				cellClassName: C.periodColumn,
				renderHeader: () => (0, i.jsx)(N.qN, { children: g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_PERIOD }),
				renderContent: (e) => (0, i.jsx)(x, { dateUtc: e.periodStartingAt }),
				renderExpandedContent(e, t) {
					o()(null != t, 'CellProps should always be provided');
					let { ListingIdLabel: n } = t;
					return (0, i.jsx)(n, { listingId: e.listingId });
				}
			}),
			(0, S.Fd)({
				...R,
				renderContent: R.render,
				renderExpandedContent: (e, t) => R.render(e, t)
			}),
			(0, N.wy)({
				key: 'STATUS ',
				cellClassName: C.statusColumn,
				renderHeader() {
					let e = (0, i.jsx)(u.Tooltip, {
						text: g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_METRIC_NEXT_PAYMENT_DISCLAIMER,
						children: (e) =>
							(0, i.jsx)(u.CircleInformationIcon, {
								size: 'xs',
								color: 'currentColor',
								className: C.statusDisclaimer,
								...e
							})
					});
					return (0, i.jsxs)(N.qN, {
						children: [g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS, e]
					});
				},
				renderContent: (e) =>
					(0, i.jsx)(N.bL, {
						className: C.statusCell,
						children: (0, i.jsx)(p, { item: e })
					})
			})
		],
		{ expandableToggleColumnKey: 'DROPDOWN' }
	);
function L(e) {
	let { ListingIdLabel: t, payoutsByPeriod: n } = e,
		{ cellProps: s, data: a } = (0, S.GN)(n, {
			generateExpandedRows: (e) =>
				Object.keys(e.ppgs).map((t) => {
					var n;
					return {
						key: e.key + t,
						listingId: t,
						amount: null === (n = e.ppgs[t]) || void 0 === n ? void 0 : n.amount
					};
				})
		}),
		l = r.useMemo(
			() => ({
				ListingIdLabel: t,
				...s
			}),
			[s, t]
		);
	return (0, i.jsx)(N.ZP, {
		columns: f,
		data: a,
		cellProps: l
	});
}
