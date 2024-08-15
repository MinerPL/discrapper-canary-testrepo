t.d(r, {
	Z: function () {
		return k;
	}
}),
	t(47120),
	t(411104);
var a = t(735250),
	n = t(470079),
	i = t(120356),
	o = t.n(i),
	l = t(399606),
	c = t(544891),
	s = t(481060),
	d = t(355467),
	u = t(78839),
	h = t(246992),
	m = t(981631),
	g = t(535271),
	p = t(384712);
let b = [
		{
			label: 'Nitro Monthly',
			value: '511651880837840896'
		},
		{
			label: 'Nitro Yearly',
			value: '511651885459963904'
		},
		{
			label: 'Nitro Classic Monthly',
			value: '511651871736201216'
		},
		{
			label: 'Nitro Classic Yearly',
			value: '511651876987469824'
		},
		{
			label: 'Basic Monthly',
			value: '978380692553465866'
		},
		{
			label: 'Basic Yearly',
			value: '1024422698568122368'
		},
		{
			label: 'Reverse Trial 1-week',
			value: '1267968635301789696'
		},
		{
			label: 'Reverse Trial 2-week',
			value: '1267969164312576000'
		}
	],
	f = {
		[m.O0b.UNPAID]: 'Unpaid',
		[m.O0b.ACTIVE]: 'Active',
		[m.O0b.PAST_DUE]: 'Past Due',
		[m.O0b.CANCELED]: 'Canceled',
		[m.O0b.ENDED]: 'Ended',
		[m.O0b.ACCOUNT_HOLD]: 'Account Hold',
		[m.O0b.BILLING_RETRY]: 'Billing Retry',
		[m.O0b.PAUSED]: 'Paused',
		[m.O0b.PAUSE_PENDING]: 'Pause Pending'
	},
	y = [
		{
			label: 'Unpaid',
			value: m.O0b.UNPAID
		},
		{
			label: 'Active',
			value: m.O0b.ACTIVE
		},
		{
			label: 'Past Due',
			value: m.O0b.PAST_DUE
		},
		{
			label: 'Canceled',
			value: m.O0b.CANCELED
		},
		{
			label: 'Ended',
			value: m.O0b.ENDED
		},
		{
			label: 'Account Hold',
			value: m.O0b.ACCOUNT_HOLD
		},
		{
			label: 'Billing Retry',
			value: m.O0b.BILLING_RETRY
		},
		{
			label: 'Paused',
			value: m.O0b.PAUSED
		},
		{
			label: 'Pause Pending',
			value: m.O0b.PAUSE_PENDING
		}
	],
	x = {
		'511651880837840896': 'Nitro Monthly',
		'511651885459963904': 'Nitro Yearly',
		'511651871736201216': 'Nitro Classic Monthly',
		'511651876987469824': 'Nitro Classic Yearly',
		'978380692553465866': 'Basic Monthly',
		'1024422698568122368': 'Basic Yearly'
	};
function k() {
	let [e, r] = n.useState('511651880837840896'),
		t = (0, l.e7)([u.ZP], () => u.ZP.getPremiumSubscription()),
		i = async () => {
			await c.tn.post({
				url: '/debug/subscription',
				body: { plan_id: e }
			}),
				await (0, d.jg)();
		},
		m = async () => {
			await c.tn.del('/debug/subscription'), await (0, d.jg)();
		};
	return (0, a.jsx)(s.ScrollerThin, {
		className: o()(g.panel),
		children: (0, a.jsxs)('div', {
			className: p.panelInner,
			children: [
				(0, a.jsx)(s.Text, {
					style: { marginBottom: '16px' },
					variant: 'text-lg/bold',
					children: 'Manage Subscription'
				}),
				(0, a.jsxs)('section', {
					className: p.buttons,
					children: [
						null == t &&
							(0, a.jsxs)(a.Fragment, {
								children: [
									(0, a.jsx)(s.Text, {
										variant: 'text-md/normal',
										children: ' Subscription Type'
									}),
									(0, a.jsx)(s.Select, {
										serialize: (e) => e,
										isSelected: (r) => r === e,
										options: b,
										select: r,
										popoutLayerContext: h.O$
									}),
									(0, a.jsx)(s.Button, {
										size: s.Button.Sizes.SMALL,
										onClick: i,
										children: 'Create Subscription'
									})
								]
							}),
						(0, a.jsx)(s.Button, {
							size: s.Button.Sizes.SMALL,
							onClick: m,
							children: 'Delete Subscription'
						})
					]
				}),
				null != t && (0, a.jsx)(v, { subscription: t })
			]
		})
	});
}
function v(e) {
	let { subscription: r } = e,
		t = (e) => {
			if ((null == e && (e = r.status), e in f)) return f[e];
			throw Error('Unknown status');
		},
		n = async (e) => {
			await c.tn.patch({
				url: '/debug/subscription',
				body: { subscription_status: e }
			});
		},
		i =
			r.planIdFromItems in
			{
				'978380692553465866': !0,
				'1024422698568122368': !0
			};
	return (0, a.jsxs)(a.Fragment, {
		children: [
			(0, a.jsx)(s.Text, {
				style: { marginTop: '15px' },
				variant: 'text-md/normal',
				children: 'Existing Subscription'
			}),
			(0, a.jsxs)('div', {
				className: o()(p.card, i ? p.gradientWrapperTier0 : p.gradientWrapperTier2),
				children: [
					(0, a.jsxs)(s.Text, {
						variant: 'text-md/normal',
						children: [
							' Subscription Type: ',
							(() => {
								let e = r.planIdFromItems;
								if (null == e) throw Error('No plan id');
								if (e in x) return x[e];
								throw Error('Unknown plan id');
							})(),
							' '
						]
					}),
					(0, a.jsxs)(s.Text, {
						variant: 'text-md/normal',
						children: [' Subscription ID ', r.id, ' ']
					}),
					(0, a.jsxs)(s.Text, {
						style: { marginBottom: '15px' },
						variant: 'text-md/normal',
						children: ['Subscription Status: ', t()]
					}),
					(0, a.jsx)(s.Select, {
						serialize: (e) => t(e),
						isSelected: (e) => e === r.status,
						options: y,
						select: n,
						popoutLayerContext: h.O$
					})
				]
			})
		]
	});
}
