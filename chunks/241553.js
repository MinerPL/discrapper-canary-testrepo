n.d(t, {
	e: function () {
		return B;
	}
}),
	n(47120),
	n(653041);
var r = n(735250),
	i = n(470079),
	a = n(338545),
	s = n(442837),
	o = n(704215),
	l = n(780384),
	u = n(481060),
	c = n(845538),
	d = n(410030),
	_ = n(100527),
	E = n(906732),
	f = n(605236),
	h = n(243778),
	p = n(963249),
	m = n(646476),
	I = n(819640),
	T = n(594174),
	g = n(965645),
	S = n(362061),
	A = n(70956),
	N = n(709054),
	v = n(51144),
	O = n(443603),
	R = n(981631),
	C = n(921944),
	y = n(474936),
	D = n(689938),
	L = n(881485),
	b = n(305489);
let M = [
		{
			box: '#FFD89E',
			ribbon: '#FF7476'
		},
		{
			box: '#17B5E2',
			ribbon: '#FFFFFF'
		},
		{
			box: '#EED169',
			ribbon: '#51A1EB'
		},
		{
			box: '#509C65',
			ribbon: '#FFC96E'
		},
		{
			box: '#E4578A',
			ribbon: '#BEC4FF'
		},
		{
			box: '#AFE0FC',
			ribbon: '#FF9356'
		},
		{
			box: '#DB6D6D',
			ribbon: '#67DA9C'
		}
	],
	P = [
		{
			box: '#EABB75',
			ribbon: '#E4595C'
		},
		{
			box: '#2D7AA5',
			ribbon: '#64C7C2'
		},
		{
			box: '#ECBF21',
			ribbon: '#51A1EB'
		},
		{
			box: '#439359',
			ribbon: '#D5A24C'
		},
		{
			box: '#FC90C4',
			ribbon: '#777FCE'
		},
		{
			box: '#549DC6',
			ribbon: '#FF9356'
		},
		{
			box: '#DB6F6F',
			ribbon: '#81C29F'
		}
	],
	U = 1 / 300,
	w = A.Z.Millis.DAYS_30,
	x = (0, a.animated)(g.Z),
	G = (0, a.animated)(S.Z),
	k = (0, a.animated)(u.GiftIcon);
function B(e) {
	let {
			themeOverride: t,
			hovered: n,
			isContentDismissed: a,
			boxColors: s = {
				dark: M,
				light: P
			}
		} = e,
		o = (0, d.ZP)(),
		[c, _] = (function (e) {
			let [t, n] = i.useState(!1),
				[r, a] = i.useState(Math.floor(7 * Math.random()));
			return (
				i.useEffect(() => {
					if (e) return;
					let t = Math.random() <= U;
					if ((n(t), !t)) {
						let e;
						do e = Math.floor(7 * Math.random());
						while (e === r);
						a(e);
					}
				}, [e]),
				[t, r]
			);
		})(n),
		E = (0, u.useSpring)({
			reverse: !n,
			reset: !0,
			from: { scale: 1 },
			to: { scale: 1.14 },
			config: {
				tension: 800,
				friction: 24
			}
		}),
		f = a ? _ : 0,
		h = (0, l.wj)(null != t ? t : o) ? s.dark[f] : s.light[f];
	return !n && a
		? (0, r.jsx)(k, {})
		: a && c
			? (0, r.jsx)(G, {
					isDark: (0, l.wj)(o),
					style: E
				})
			: (0, r.jsx)(x, {
					boxColor: h.box,
					ribbonColor: h.ribbon,
					style: E
				});
}
t.Z = i.memo(function (e) {
	let { disabled: t, channel: n } = e,
		{ analyticsLocations: a } = (0, E.ZP)(_.Z.GIFT_BUTTON),
		[l, d] = i.useState(!1),
		g = (0, s.e7)([I.Z], () => !(null === I.Z || void 0 === I.Z ? void 0 : I.Z.hasLayers())),
		S = (0, s.e7)([T.default], () => T.default.getCurrentUser()),
		A = null != S ? N.default.age(S.id) : 0,
		M = !t && g && A >= w,
		{ enabled: P } = m.RO.useExperiment({ location: 'ChannelPremiumGiftButton' }, { autoTrackExposure: M }),
		U = [];
	P && M && U.push(o.z.SEASONAL_GIFTING_COACHMARK_2023);
	let [x, G] = (0, h.US)(U),
		k = null != x,
		F = (0, v.Ft)(n),
		V = null != F;
	if (t) return null;
	let H = () => {
			(0, p.Z)({
				isGift: !0,
				giftRecipient: null == F ? void 0 : F,
				initialPlanId: null,
				subscriptionTier: y.Si.TIER_2,
				analyticsLocations: a,
				analyticsObject: {
					page: n.isPrivate() ? R.ZY5.DM_CHANNEL : R.ZY5.GUILD_CHANNEL,
					section: R.jXE.CHANNEL_TEXT_AREA,
					object: R.qAy.SEASONAL_BUTTON_ICON,
					objectType: R.Qqv.GIFT
				}
			});
		},
		Z = (0, r.jsxs)('div', {
			className: L.container,
			onMouseEnter: () => {
				!l && d(!0);
			},
			onMouseLeave: () => {
				d(!1);
			},
			children: [
				k &&
					(0, r.jsx)(c.Z, {
						onComplete: () => d(!1),
						onDMCheckItOutClick: H,
						markAsDismissed: G,
						isDM: V
					}),
				(0, r.jsx)(O.Z, {
					innerClassName: b.button,
					'aria-label': D.Z.Messages.PREMIUM_GIFT_BUTTON_LABEL,
					isActive: !1,
					onClick: () => {
						d(!1), (0, f.EW)(o.z.SEASONAL_GIFTING_COACHMARK_2023, { dismissAction: C.L.TAKE_ACTION }), H();
					},
					children: (0, r.jsx)('div', {
						className: L.noPointerEvents,
						children: (0, r.jsx)(B, {
							hovered: l,
							isContentDismissed: !k
						})
					})
				})
			]
		});
	return k
		? Z
		: (0, r.jsx)(u.TooltipContainer, {
				className: L.container,
				text: (0, c.i)(V),
				children: Z
			});
});
