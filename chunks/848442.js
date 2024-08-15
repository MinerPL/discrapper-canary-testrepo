n.d(t, {
	Z: function () {
		return b;
	}
});
var i = n(735250);
n(470079);
var l = n(120356),
	r = n.n(l),
	a = n(399606),
	s = n(704215),
	o = n(433517),
	c = n(481060),
	u = n(239091),
	d = n(607070),
	h = n(367907),
	p = n(357352),
	_ = n(652515),
	f = n(550951),
	g = n(886176),
	m = n(605236),
	C = n(703656),
	I = n(984933),
	E = n(430824),
	N = n(626135),
	x = n(434479),
	S = n(981631),
	v = n(176505),
	Z = n(629481),
	T = n(689938),
	L = n(356417);
function A(e) {
	let { guildId: t, selected: n, handleClick: l } = e,
		u = (0, _.RF)(t, 'guild_shop_channel_row'),
		f = (0, a.e7)([E.Z], () => E.Z.getGuild(t)),
		v = (null == f ? void 0 : f.hasFeature(S.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) === !0,
		A = 'false' === o.K.get(Z.tM, 'false'),
		b = (0, a.e7)([d.Z], () => d.Z.useReducedMotion);
	return (0, i.jsx)(x.m, {
		id: 'shop-'.concat(t),
		className: r()(L.previewChannelRow, {
			[L.selected]: n,
			[L.phantomPreview]: A
		}),
		innerClassName: L.previewChannelRowContent,
		renderIcon: (e) =>
			(0, i.jsx)(g.Z, {
				width: 20,
				height: 20,
				className: r()([e, L.shopIcon])
			}),
		text: T.Z.Messages.GUILD_SHOP_CHANNEL_LABEL,
		selected: n,
		onClick: l,
		trailing: (0, i.jsxs)('div', {
			className: L.gifSection,
			children: [
				b
					? (0, i.jsx)(c.TextBadge, {
							color: c.tokens.unsafe_rawColors.BRAND_260.css,
							text: T.Z.Messages.NEW,
							className: L.newBadge
						})
					: (0, i.jsx)('img', {
							src: (0, p.b)('server_products/storefront/money.gif'),
							className: L.money,
							alt: ''
						}),
				n &&
					(0, i.jsx)(c.Clickable, {
						className: L.closeButton,
						onClick: (e) => {
							if (
								(e.stopPropagation(),
								(0, m.EW)(s.z.SERVER_SHOP_PHANTOM_PREVIEW),
								N.default.track(S.rMx.GUILD_SHOP_PREVIEW_CLICK, {
									...(0, h.hH)(t),
									action_taken: Z.mz.DISMISS_CHANNEL_ROW
								}),
								!u || !v)
							) {
								var n;
								(0, C.dL)(S.Z5c.CHANNEL(t, null === (n = I.ZP.getDefaultChannel(t)) || void 0 === n ? void 0 : n.id));
							}
						},
						'aria-label': T.Z.Messages.CLOSE,
						children: (0, i.jsx)(c.CircleXIcon, {
							size: 'xs',
							color: 'currentColor'
						})
					})
			]
		})
	});
}
function b(e) {
	let { guild: t, selected: l } = e,
		r = (0, f.g)(t, 'guild_shop_channel_row'),
		a = () => {
			o.K.set(Z.tM, 'true'), (0, C.uL)(S.Z5c.CHANNEL(t.id, v.oC.GUILD_SHOP));
		};
	return r
		? (0, i.jsx)(A, {
				guildId: t.id,
				selected: l,
				handleClick: a
			})
		: (0, i.jsx)(x.m, {
				id: 'shop-'.concat(t.id),
				renderIcon: (e) =>
					(0, i.jsx)(g.Z, {
						width: 20,
						height: 20,
						className: e
					}),
				text: T.Z.Messages.GUILD_SHOP_CHANNEL_LABEL,
				selected: l,
				onClick: a,
				onContextMenu: (e) => {
					null != t &&
						(0, u.jW)(e, async () => {
							let { default: e } = await n.e('66050').then(n.bind(n, 376573));
							return (n) =>
								(0, i.jsx)(e, {
									...n,
									guild: t
								});
						});
				}
			});
}
