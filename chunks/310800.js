n.d(t, {
	Z: function () {
		return S;
	}
});
var s = n(735250);
n(470079);
var a = n(852229),
	i = n(481060),
	r = n(724598),
	l = n(674180),
	o = n(495437),
	c = n(267101),
	d = n(863663),
	u = n(676651),
	_ = n(613810),
	I = n(391181),
	E = n(689938),
	T = n(852202);
let m = 'guild-product-listings-header';
function N(e) {
	let { guildId: t, handleCreateOrEditProduct: u } = e,
		N = (0, c.ue)(t, { publishedOnly: !1 }),
		{ shouldRestrictUpdatingCreatorMonetizationSettings: S } = (0, l.gX)(t),
		h = (e) => {
			(0, o.Je)(t, e, { published: !1 });
		},
		g = (e, a) => {
			(0, i.openModalLazy)(async () => {
				let { default: i } = await n.e('95925').then(n.bind(n, 673078));
				return (n) =>
					(0, s.jsx)(i, {
						guildId: t,
						productId: e,
						productName: a,
						...n
					});
			});
		},
		C = (e, t) => {
			(0, a.J)((0, d.ar)(e, t));
		},
		x = N.length > 0;
	return (0, s.jsxs)(s.Fragment, {
		children: [
			(0, s.jsx)(i.FormTitle, {
				className: T.productListingsHeader,
				id: m,
				children: x ? E.Z.Messages.GUILD_PRODUCTS_YOUR_PRODUCTS_HEADER : E.Z.Messages.GUILD_PRODUCTS_NO_PRODUCTS_HEADER
			}),
			x
				? (0, s.jsx)('ul', {
						className: T.productListings,
						'aria-labelledby': m,
						children: N.map((e) =>
							(0, s.jsx)(
								'li',
								{
									children: (0, s.jsx)(I.Z, {
										guildId: t,
										product: e,
										onEditProduct: () => u(e.id),
										onUnpublishProduct: () => h(e.id),
										onDeleteProduct: () => g(e.id, e.name),
										onCopyProductLink: () => C(t, e.id),
										onTestDownload: () =>
											_.Z.open({
												guildId: t,
												productId: e.id
											}),
										onReportProduct: () => {},
										disabled: S
									})
								},
								e.id
							)
						)
					})
				: (0, s.jsx)(r.Z, {
						guildId: t,
						showCTA: !1,
						responsive: !1
					})
		]
	});
}
function S(e) {
	let { guildId: t } = e,
		{ shouldRestrictUpdatingCreatorMonetizationSettings: n } = (0, l.gX)(t),
		a = (e) => {
			u.h(t, e);
		};
	return (0, s.jsxs)(s.Fragment, {
		children: [
			(0, s.jsxs)(i.Button, {
				className: T.addButton,
				innerClassName: T.addButtonInner,
				onClick: () => a(null),
				disabled: n,
				children: [
					(0, s.jsx)(i.PlusSmallIcon, {
						size: 'custom',
						color: 'currentColor',
						width: 20,
						height: 20,
						'aria-hidden': !0
					}),
					(0, s.jsx)(i.Spacer, {
						size: 6,
						horizontal: !0
					}),
					E.Z.Messages.GUILD_PRODUCTS_CREATE_PRODUCT_BUTTON
				]
			}),
			(0, s.jsx)(i.Spacer, { size: 24 }),
			(0, s.jsx)(N, {
				guildId: t,
				handleCreateOrEditProduct: a
			})
		]
	});
}
