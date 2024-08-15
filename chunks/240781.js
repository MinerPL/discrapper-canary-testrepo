n(627341);
var r = n(735250);
n(470079);
var i = n(120356),
	a = n.n(i),
	s = n(278074),
	o = n(442837),
	l = n(481060),
	u = n(884697),
	c = n(449217),
	d = n(706454),
	_ = n(158776),
	E = n(55935),
	f = n(74538),
	h = n(204418),
	p = n(689938),
	I = n(828136);
let m = [
		{
			avatarSize: l.AvatarSizes.SIZE_40,
			showStatus: !1
		},
		{
			avatarSize: l.AvatarSizes.SIZE_32,
			showStatus: !1
		},
		{
			avatarSize: l.AvatarSizes.SIZE_40,
			showStatus: !0
		},
		{
			avatarSize: l.AvatarSizes.SIZE_32,
			showStatus: !0
		}
	],
	T = (e) => {
		let { purchase: t } = e,
			n = (0, o.e7)([d.default], () => d.default.locale),
			i = (0, u.qS)(t),
			a = null != t.expiresAt ? (0, E.TD)(Date.now(), t.expiresAt) : null;
		return (0, r.jsxs)('div', {
			className: I.purchaseInfo,
			children: [
				(0, r.jsx)(l.Text, {
					variant: 'text-sm/semibold',
					color: 'header-primary',
					children: t.name
				}),
				(0, r.jsx)(l.Text, {
					variant: 'text-sm/normal',
					children: t.summary
				}),
				null != a &&
					(0, r.jsx)(l.Text, {
						variant: 'text-xxs/normal',
						color: 'text-muted',
						children: p.Z.Messages.COLLECTIBLES_DAYS_LEFT.format({ days: a.days.toString() })
					}),
				(0, r.jsxs)(l.Text, {
					variant: 'text-xxs/normal',
					color: 'text-muted',
					children: [
						p.Z.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
							date: t.purchasedAt.toLocaleDateString(n, {
								month: 'long',
								year: 'numeric'
							})
						}),
						null != t.expiresAt &&
							(0, r.jsxs)(r.Fragment, {
								children: [
									(0, r.jsx)('br', {}),
									p.Z.Messages.COLLECTIBLES_EXPIRE_DATE.format({
										date: t.expiresAt.toLocaleDateString(n, {
											minute: 'numeric',
											hour: 'numeric',
											day: 'numeric',
											month: 'long',
											year: 'numeric'
										})
									})
								]
							})
					]
				}),
				i &&
					(0, r.jsx)(l.Text, {
						variant: 'text-xxs/normal',
						color: 'text-muted',
						children: p.Z.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC
					})
			]
		});
	};
t.Z = (e) => {
	let { user: t, guildId: n, avatarDecorationOverride: i, className: d } = e,
		E = (0, o.e7)([_.Z], () => _.Z.getStatus(t.id)),
		{ product: g, purchase: S } = (0, c.Z)(null == i ? void 0 : i.skuId),
		A = f.ZP.canUseCollectibles(t),
		N = (0, u.qS)(S),
		v = (0, u.G1)(g),
		O = !A && N;
	return null != g && (null == S || O)
		? (0, r.jsxs)('div', {
				className: a()(I.modalPreview, I.shopPreviewContainer, d),
				children: [
					(0, r.jsx)('div', {
						className: I.shopPreviewBanner,
						children: (0, r.jsx)(h.Z, {
							user: t,
							guildId: n,
							avatarDecorationOverride: i
						})
					}),
					(0, r.jsxs)('div', {
						className: I.shopPreviewTextContainer,
						children: [
							(0, r.jsx)(l.Text, {
								variant: 'text-sm/semibold',
								children: g.name
							}),
							(0, r.jsx)(l.Text, {
								variant: 'text-sm/normal',
								children: O
									? p.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_CHURNED
									: (0, s.EQ)([v, A])
											.with([!0, !0], () => p.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM)
											.with([!0, !1], () => p.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER)
											.otherwise(() => p.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE_PREMIUM)
							})
						]
					})
				]
			})
		: (0, r.jsxs)('div', {
				className: a()(I.modalPreview, d),
				children: [
					(0, r.jsxs)('div', {
						className: I.previewSections,
						children: [
							(0, r.jsx)('div', {
								className: I.decorationPreview,
								children: (0, r.jsx)(h.Z, {
									user: t,
									guildId: n,
									avatarDecorationOverride: i
								})
							}),
							(0, r.jsx)('div', {
								className: I.smallDecorationPreviewsContainer,
								children: m.map((e) => {
									let { avatarSize: a, showStatus: s } = e;
									return (0, r.jsx)(
										'div',
										{
											className: I.smallDecorationPreview,
											children: (0, r.jsx)(h.Z, {
												user: t,
												guildId: n,
												avatarSize: a,
												avatarDecorationOverride: i,
												status: s ? E : void 0,
												'aria-hidden': !0
											})
										},
										''.concat(a).concat(s)
									);
								})
							})
						]
					}),
					null != S && (0, r.jsx)(T, { purchase: S })
				]
			});
};
