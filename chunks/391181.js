t.d(n, {
	Z: function () {
		return p;
	},
	m: function () {
		return g;
	}
});
var r = t(735250);
t(470079);
var i = t(120356),
	o = t.n(i),
	l = t(481060),
	u = t(239091),
	a = t(166081),
	s = t(937615),
	c = t(942833),
	d = t(48691),
	_ = t(231338),
	f = t(689938),
	E = t(954888);
function I(e) {
	let { showEditProduct: n, showUnpublishProduct: t, showCopyLink: i, showTestDownload: o, showDeleteProduct: u, showReportProduct: a, onEditProduct: s, onUnpublishProduct: c, onDeleteProduct: d, onCopyLink: _, onTestDownload: I, onReportProduct: g, closePopout: p, onSelect: S } = e;
	return (0, r.jsx)('div', {
		className: E.menuContainer,
		children: (0, r.jsxs)(l.Menu, {
			navId: 'guild-product-context',
			onClose: p,
			'aria-label': f.Z.Messages.GUILD_PRODUCTS_ACTION_MENU_LABEL,
			onSelect: S,
			children: [
				(0, r.jsxs)(l.MenuGroup, {
					children: [
						n &&
							(0, r.jsx)(l.MenuItem, {
								id: 'guild-product-edit',
								label: f.Z.Messages.GUILD_PRODUCT_EDIT,
								action: s
							}),
						i &&
							(0, r.jsx)(l.MenuItem, {
								id: 'guild-product-copy-link',
								label: f.Z.Messages.GUILD_PRODUCT_COPY_LINK,
								icon: l.LinkIcon,
								action: _
							}),
						o &&
							(0, r.jsx)(l.MenuItem, {
								id: 'guild-product-test-download',
								label: f.Z.Messages.GUILD_PRODUCT_TEST_DOWNLOAD,
								icon: l.DownloadIcon,
								action: I
							})
					]
				}),
				(0, r.jsxs)(l.MenuGroup, {
					children: [
						t &&
							(0, r.jsx)(l.MenuItem, {
								id: 'guild-product-unpublish',
								label: f.Z.Messages.GUILD_PRODUCT_UNPUBLISH,
								action: c
							}),
						u &&
							(0, r.jsx)(l.MenuItem, {
								id: 'guild-product-delete',
								label: f.Z.Messages.GUILD_PRODUCT_DELETE,
								color: 'danger',
								action: d
							})
					]
				}),
				(0, r.jsx)(l.MenuGroup, {
					children:
						a &&
						(0, r.jsx)(l.MenuItem, {
							id: 'guild-product-report',
							label: f.Z.Messages.GUILD_PRODUCT_REPORT,
							color: 'danger',
							action: g
						})
				})
			]
		})
	});
}
function g(e) {
	let { product: n, guildId: t, showEditProduct: i, showUnpublishProduct: o, showTestDownload: u, showCopyLink: a, showDeleteProduct: s, showReportProduct: c, onEditProduct: d, onUnpublishProduct: _, onDeleteProduct: g, onCopyProductLink: p, onTestDownload: S, onReportProduct: C } = e;
	return (0, r.jsx)('div', {
		onClick: (e) => {
			e.stopPropagation();
		},
		children: (0, r.jsx)(l.Popout, {
			position: 'right',
			align: 'top',
			spacing: -8,
			animation: l.Popout.Animation.FADE,
			renderPopout: (e) =>
				(0, r.jsx)(I, {
					...e,
					guildId: t,
					productId: n.id,
					showEditProduct: i,
					showUnpublishProduct: o,
					showCopyLink: a,
					showTestDownload: u,
					showReportProduct: c,
					showDeleteProduct: s,
					onEditProduct: d,
					onUnpublishProduct: _,
					onDeleteProduct: g,
					onCopyLink: p,
					onTestDownload: S,
					onReportProduct: C
				}),
			children: (e, t) => {
				let { isShown: i } = t;
				return (0, r.jsx)(l.Clickable, {
					...e,
					'aria-label': f.Z.Messages.GUILD_PRODUCTS_ACTION_MENU_BUTTON_ARIA_LABEL.format({ productName: n.name }),
					'aria-haspopup': 'listbox',
					'aria-expanded': i,
					className: E.productActionMenuButton,
					children: (0, r.jsx)(l.MoreVerticalIcon, {
						size: 'md',
						color: 'currentColor',
						className: E.productActionMenuIcon,
						'aria-hidden': !0
					})
				});
			}
		})
	});
}
function p(e) {
	let { product: n, guildId: t, onEditProduct: i, onUnpublishProduct: p, onDeleteProduct: S, onCopyProductLink: C, onTestDownload: T, disabled: m = !1 } = e,
		A = (0, a.U)(n, 600),
		N = null !== n.price_tier ? (0, s.T4)(n.price_tier, _.pK.USD) : void 0,
		h = (0, c.C)(n);
	return (0, r.jsxs)(l.ClickableContainer, {
		tag: 'article',
		className: o()(E.productCardClickable, E.productCard, { [E.disabled]: m }),
		onClick: m ? void 0 : i,
		onContextMenu: function (e) {
			(0, u.jW)(e, () =>
				Promise.resolve((e) =>
					(0, r.jsx)(I, {
						...e,
						closePopout: u.Zy,
						guildId: t,
						productId: n.id,
						showEditProduct: !0,
						showUnpublishProduct: n.published,
						showCopyLink: n.published,
						showTestDownload: null != n.attachments,
						showDeleteProduct: !0,
						showReportProduct: !1,
						onEditProduct: i,
						onUnpublishProduct: p,
						onDeleteProduct: S,
						onCopyLink: C,
						onTestDownload: T,
						onReportProduct: () => {}
					})
				)
			);
		},
		'aria-label': f.Z.Messages.GUILD_PRODUCT_EDIT_ARIA_LABEL.format({ productName: n.name }),
		children: [
			(0, r.jsx)('img', {
				alt: '',
				src: A,
				className: E.productThumbnail
			}),
			(0, r.jsxs)('div', {
				className: E.productInfo,
				children: [
					(0, r.jsxs)('div', {
						className: E.productInfoContent,
						children: [
							(0, r.jsx)(l.Heading, {
								variant: 'text-md/semibold',
								color: 'header-primary',
								className: E.productName,
								children: n.name
							}),
							(0, r.jsx)(l.Spacer, { size: 8 }),
							(0, r.jsxs)('div', {
								className: E.productDetails,
								children: [
									(0, r.jsx)(l.Text, {
										variant: 'text-md/normal',
										color: 'header-secondary',
										children: N
									}),
									null != h
										? (0, r.jsxs)(r.Fragment, {
												children: [
													(0, r.jsx)('div', { className: E.dotSeparator }),
													(0, r.jsx)(l.Text, {
														variant: 'text-md/normal',
														color: 'header-secondary',
														children: h
													})
												]
											})
										: null
								]
							}),
							(0, r.jsx)(l.Spacer, { size: 16 }),
							n.published ? (0, r.jsx)(d.t, {}) : (0, r.jsx)(d.b, {})
						]
					}),
					!m &&
						(0, r.jsx)(g, {
							product: n,
							guildId: t,
							showEditProduct: !0,
							showUnpublishProduct: n.published,
							showCopyLink: n.published,
							showTestDownload: null != n.attachments,
							showDeleteProduct: !0,
							showReportProduct: !1,
							onEditProduct: i,
							onUnpublishProduct: p,
							onDeleteProduct: S,
							onCopyProductLink: C,
							onTestDownload: T,
							onReportProduct: () => {}
						})
				]
			})
		]
	});
}
