i.d(n, {
	Z: function () {
		return R;
	}
}),
	i(315314),
	i(610138),
	i(216116),
	i(78328),
	i(815648),
	i(47120);
var t = i(735250),
	a = i(470079),
	r = i(468194),
	o = i(442837),
	l = i(477690),
	s = i(481060),
	c = i(887706),
	d = i(34674),
	u = i(817460),
	_ = i(703656),
	p = i(351402),
	m = i(937615),
	I = i(73346),
	f = i(270144),
	g = i(359610),
	h = i(245561),
	C = i(696906),
	v = i(981631),
	E = i(689938),
	x = i(683181);
let b = (0, r.Mg)(l.Z.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE),
	A = 'start_application_subscription',
	P = (e) => {
		let { listing: n } = e,
			i = n.image_asset;
		if (null == i) return null;
		let a = (0, I._W)(n.application_id, i, b);
		return (0, t.jsx)('div', {
			children: (0, t.jsx)('img', {
				src: a,
				alt: '',
				className: x.listingImage
			})
		});
	},
	T = (e) => {
		let { children: n } = e;
		return (0, t.jsx)(s.Button, {
			look: s.Button.Looks.OUTLINED,
			color: s.Button.Colors.PRIMARY,
			disabled: !0,
			size: s.Button.Sizes.SMALL,
			children: n
		});
	};
function R(e) {
	let { listing: n, groupListingId: i, guildId: r, analyticsLocation: l, onComplete: I, forcesTransitionToGuild: b } = e,
		R = (0, o.e7)([p.Z], () => p.Z.isSyncing),
		{ activeSubscription: N, activeSubscriptionListing: S } = (0, f.F5)(n.application_id, r),
		{
			openModal: L,
			canOpenModal: O,
			cannotOpenReason: j
		} = (0, C.Z)({
			guildId: r,
			groupListingId: i,
			showBenefitsFirst: !1,
			analyticsLocation: l,
			onComplete: I,
			forcesTransitionToGuild: b,
			skuId: n.id
		}),
		y = n.subscription_plans[0],
		D = 0 === y.price,
		Z = (null == S ? void 0 : S.id) === n.id,
		M = (0, c.Z)(),
		B = (M && !O) || R,
		k = () => {
			M ? L() : (0, d.rf)({ [A]: 'true' });
		};
	return (
		a.useEffect(() => {
			let e = new URL(location.href);
			if (M && !B && 'true' === e.searchParams.get(A)) {
				e.searchParams.delete(A);
				let n = e.pathname + e.search;
				(0, _.dL)(n), L();
			}
		}, [M, L, B]),
		(0, t.jsxs)('div', {
			className: x.container,
			children: [
				(0, t.jsxs)('div', {
					className: x.cardHeader,
					children: [
						(0, t.jsx)(P, { listing: n }),
						(0, t.jsx)(s.Text, {
							variant: 'text-lg/medium',
							color: 'interactive-active',
							children: n.name
						}),
						(0, t.jsxs)('div', {
							className: x.priceAndButtonContainer,
							children: [
								(0, t.jsx)(s.Text, {
									variant: 'text-md/normal',
									color: 'interactive-normal',
									children: D
										? E.Z.Messages.APPLICATION_SUBSCRIPTION_FREE
										: E.Z.Messages.APPLICATION_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
												amount: (0, m.T4)(y.price, y.currency),
												period: (0, u.JE)(y)
											})
								}),
								(() => {
									var e;
									if (Z) return (0, t.jsx)(T, { children: (null == N ? void 0 : N.status) === v.O0b.CANCELED ? E.Z.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : E.Z.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL });
									if (D) return null == S ? (0, t.jsx)(T, { children: E.Z.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL }) : null;
									return (0, t.jsx)(s.Tooltip, {
										tooltipClassName: x.subscribeButtonTooltip,
										text: O || !M ? null : j,
										'aria-label': null !== (e = !O && j) && void 0 !== e && e,
										children: (e) =>
											(0, t.jsx)(g.Z, {
												...e,
												disabled: B,
												submitting: !1,
												onClick: k,
												children: E.Z.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
											})
									});
								})()
							]
						})
					]
				}),
				(0, t.jsx)('div', {
					className: x.benefitsContainer,
					children: (0, t.jsx)(h.GU, {
						applicationId: n.application_id,
						storeListingBenefits: n.store_listing_benefits,
						skuBenefits: n.sku_benefits.benefits,
						className: x.benefit
					})
				})
			]
		})
	);
}
