var s,
	a,
	i = n(735250);
n(470079);
var r = n(120356),
	l = n.n(r),
	o = n(167533),
	c = n(73346),
	d = n(169903),
	u = n(8584),
	_ = n(689938),
	I = n(799095),
	E = n(88401);
((s = a || (a = {})).TIER_NAME = 'tier_name'), (s.SUBSCRIBERS = 'subscribers'), (s.AMOUNT = 'amount'), (s.PRICE = 'price');
let T = [
	{
		key: 'tier_name',
		cellClassName: I.tierNameColumn,
		renderHeader: () => _.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_TIERS,
		render(e) {
			let t,
				{ subscriptionListing: n } = e;
			if (null != n) {
				let e = (null == n ? void 0 : n.image_asset) == null ? void 0 : (0, c._W)(n.application_id, n.image_asset, 128);
				t = (0, i.jsxs)(i.Fragment, {
					children: [
						(0, i.jsx)('img', {
							src: e,
							alt: '',
							className: I.tierImage
						}),
						n.name
					]
				});
			}
			return (0, i.jsx)(u.bL, {
				className: I.tierNameCell,
				children: t
			});
		}
	},
	{
		key: 'subscribers',
		cellClassName: l()(I.subscribersColumn, E.cellAlignRight),
		renderHeader: () => _.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_MEMBERS,
		render: (e) => (0, i.jsx)(u.av, { children: e.roleMemberCount })
	},
	{
		key: 'price',
		cellClassName: l()(I.priceColumn, E.cellAlignRight),
		renderHeader: () => _.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_PRICE,
		render(e) {
			let { subscriptionListing: t } = e,
				n = null == t ? void 0 : t.subscription_plans[0],
				s = null == n ? void 0 : n.price;
			return (0, i.jsx)(u.kA, { children: s });
		}
	}
];
t.Z = (e) => {
	let { totalPayoutsForPeriod: t, guildId: n, className: s } = e,
		a = (0, d.Z)(n, t);
	return (0, i.jsx)('div', {
		className: l()(E.tableContainer, s),
		children: (0, i.jsx)(o.Z, {
			columns: T,
			data: a,
			className: l()(E.table, I.table),
			rowClassName: I.row,
			headerClassName: l()(E.header, I.header)
		})
	});
};
