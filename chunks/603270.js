n.d(t, {
	F: function () {
		return Z;
	},
	P: function () {
		return L;
	}
}),
	n(47120);
var i = n(735250),
	a = n(470079),
	s = n(442837),
	r = n(481060),
	l = n(241159),
	o = n(558381),
	c = n(812206),
	u = n(270144),
	d = n(307643),
	_ = n(171246),
	E = n(359610),
	I = n(592125),
	m = n(509545),
	T = n(238),
	h = n(55563),
	N = n(551428),
	f = n(626135),
	C = n(572004),
	p = n(601911),
	g = n(504211),
	S = n(381961),
	A = n(970321),
	R = n(680005),
	x = n(981631),
	O = n(272242),
	M = n(689938),
	v = n(242271);
let L = b(function (e) {
		let { appId: t, message: o } = e,
			u = (0, A.R)(t),
			[_, m, h, N, C, S, R] = (0, s.Wu)(
				[c.Z, T.Z, I.Z],
				() => {
					var e;
					let n = c.Z.getApplication(t),
						i = null != n ? (0, p.y)(n, 45) : void 0,
						a = null === (e = I.Z.getBasicChannel(o.channel_id)) || void 0 === e ? void 0 : e.guild_id;
					return [n, c.Z.isFetchingApplication(t), c.Z.didFetchingApplicationFail(t), T.Z.getStoreLayout(t), T.Z.getFetchStatus(t), a, i];
				},
				[t, o.channel_id]
			);
		a.useEffect(() => {
			C === T.N.NONE && (0, l.k)(t), null == _ && !m && !h && (0, d.UM)(t);
		}, [_, t, h, m, C]);
		let L = N.subscriptions.length,
			Z = N.otps.length,
			b = a.useMemo(
				() =>
					L > 0 && Z > 0
						? M.Z.Messages.STOREFRONT_SUBSCRIPTION_AND_ITEMS_COUNT.format({
								subCount: L,
								itemCount: Z
							})
						: L > 0
							? M.Z.Messages.STOREFRONT_SUBSCRIPTION_COUNT.format({ count: L })
							: Z > 0
								? M.Z.Messages.STOREFRONT_ITEM_COUNT.format({ count: Z })
								: M.Z.Messages.STOREFRONT_UNKNOWN_SUBSCRIPTIONS_OR_ITEMS,
				[Z, L]
			);
		if (!u || null == _) return null;
		let D = () => {
			(0, r.openModalLazy)(async () => {
				let { default: e } = await Promise.all([n.e('89131'), n.e('21592')]).then(n.bind(n, 7225));
				return (n) =>
					(0, i.jsx)(e, {
						transitionState: n.transitionState,
						onClose: n.onClose,
						appId: t,
						onlySubscribeServerSubForGuildId: S
					});
			});
		};
		return (0, i.jsx)(P, {
			appName: _.name,
			title: M.Z.Messages.STOREFRONT_TITLE.format({ appName: _.name }),
			description: b,
			link: ''.concat(location.protocol, '//').concat(location.host).concat(x.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, O.ApplicationDirectoryProfileSections.STORE)),
			onLinkCopy: () => {
				(0, g.X)(t, g.B.STORE_EMBED);
			},
			iconSrc: R,
			onIconClick: () => {
				D(),
					f.default.track(x.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
						application_id: t,
						area: 'app_icon'
					});
			},
			children: (0, i.jsx)(E.Z, {
				size: r.ButtonSizes.MEDIUM,
				onClick: () => {
					D(),
						f.default.track(x.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
							application_id: t,
							area: 'open_store_button'
						});
				},
				className: v.openStoreButton,
				children: M.Z.Messages.STOREFRONT_OPEN_STORE
			})
		});
	}),
	Z = b(function (e) {
		var t, l;
		let { skuId: d, message: T } = e,
			[C, S, L, Z, b, D, j, U] = (0, s.Wu)(
				[h.Z, N.Z, m.Z, I.Z, c.Z],
				() => {
					var e, t, n, i;
					let a = null === (e = I.Z.getBasicChannel(T.channel_id)) || void 0 === e ? void 0 : e.guild_id,
						s = h.Z.get(d),
						r = null !== (n = null == s ? void 0 : null === (t = s.application) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null == s ? void 0 : s.applicationId,
						l = null !== (i = null != r ? c.Z.getApplication(r) : void 0) && void 0 !== i ? i : null == s ? void 0 : s.application,
						o = null != l ? (0, p.y)(l, 45) : void 0,
						u = m.Z.getForSKU(d);
					return [s, l, N.Z.getForSKU(d), h.Z.isFetching(d), h.Z.didFetchingSkuFail(d), u.length > 0 ? u[0] : null, a, o];
				},
				[T.channel_id, d]
			),
			y = (0, A.R)(null !== (l = null == S ? void 0 : S.id) && void 0 !== l ? l : '');
		a.useEffect(() => {
			null == C && !Z && !b && (0, o.km)(d);
		}, [b, Z, C, d]);
		let { subscriptionGroupListing: B } = (0, u.F5)(null == S ? void 0 : S.id, j);
		if (((0, u.FE)(null == S ? void 0 : S.id, null == S ? void 0 : S.primarySkuId), !y || null == S || null == C)) return null;
		let k = C.type === x.epS.SUBSCRIPTION,
			G = null != B && (0, _.KW)(B.sku_flags),
			F = () => {
				(0, r.openModalLazy)(async () => {
					let { default: e } = await Promise.all([n.e('89131'), n.e('21592')]).then(n.bind(n, 7225));
					return (t) =>
						(0, i.jsx)(e, {
							transitionState: t.transitionState,
							onClose: t.onClose,
							appId: S.id,
							onlySubscribeServerSubForGuildId: j
						});
				});
			},
			w = () => {
				(0, r.openModalLazy)(async () => {
					let e = k ? (await Promise.resolve().then(n.bind(n, 519896))).SubscriptionDetailsModal : null,
						t = k ? null : (await Promise.resolve().then(n.bind(n, 147496))).ItemDetailsModal;
					return (n) => {
						let a = () => {
							n.onClose(), F();
						};
						return null != e && null != B
							? (0, i.jsx)(e, {
									transitionState: n.transitionState,
									appId: S.id,
									skuId: C.id,
									groupListingId: B.id,
									groupListingType: G ? 'user' : 'guild',
									onClose: n.onClose,
									onHeaderTitleClick: a
								})
							: null != t
								? (0, i.jsx)(t, {
										transitionState: n.transitionState,
										appId: S.id,
										skuId: d,
										onClose: n.onClose,
										onHeaderTitleClick: a
									})
								: null;
					};
				});
			},
			V = k
				? G
					? (0, i.jsxs)(i.Fragment, {
							children: [
								(0, i.jsx)(r.UserIcon, {
									size: 'custom',
									width: 12,
									height: 12
								}),
								' ',
								M.Z.Messages.STOREFRONT_USER_SUBSCRIPTION
							]
						})
					: (0, i.jsxs)(i.Fragment, {
							children: [
								(0, i.jsx)(r.ServerIcon, {
									size: 'custom',
									width: 12,
									height: 12
								}),
								' ',
								M.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION
							]
						})
				: null == L
					? void 0
					: null === (t = L.description) || void 0 === t
						? void 0
						: t.trim();
		'' === V && (V = void 0);
		let H = () => {
			f.default.track(x.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
				application_id: S.id,
				sku_id: C.id,
				area: 'purchase_button'
			});
		};
		return (0, i.jsx)(P, {
			appName: S.name,
			title: C.name,
			description: V,
			link: ''.concat(location.protocol, '//').concat(location.host).concat(x.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(S.id, O.ApplicationDirectoryProfileSections.STORE)),
			onLinkCopy: () => {
				(0, g.X)(S.id, g.B.SKU_EMBED, d);
			},
			iconSrc: U,
			onIconClick: () => {
				F(),
					f.default.track(x.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
						application_id: S.id,
						sku_id: C.id,
						area: 'app_icon'
					});
			},
			children: (0, i.jsxs)('div', {
				className: v.skuPurchaseButtons,
				children: [
					(0, i.jsx)(r.Button, {
						color: r.ButtonColors.CUSTOM,
						onClick: () => {
							w(),
								f.default.track(x.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
									application_id: S.id,
									sku_id: C.id,
									area: 'view_details'
								});
						},
						className: v.viewDetailsButton,
						children: M.Z.Messages.STOREFRONT_DETAILS
					}),
					k
						? null != D
							? (0, i.jsx)(R.p, {
									appId: S.id,
									groupListingId: null == B ? void 0 : B.id,
									groupListingType: G ? 'user' : 'guild',
									skuId: C.id,
									subPlan: D,
									icon: (0, i.jsx)(r.ShopIcon, {
										size: 'xs',
										color: 'currentcolor'
									}),
									onHasClicked: H
								})
							: (0, i.jsx)(E.Z, {
									size: r.ButtonSizes.MEDIUM,
									onClick: w,
									children: M.Z.Messages.STOREFRONT_SUBSCRIBE
								})
						: (0, i.jsx)(R.Y, {
								appId: S.id,
								sku: C,
								icon: (0, i.jsx)(r.ShopIcon, {
									size: 'xs',
									color: 'currentcolor'
								}),
								onHasClicked: H
							})
				]
			})
		});
	});
function P(e) {
	let { appName: t, title: n, description: a, link: s, iconSrc: l, onIconClick: o, onLinkCopy: c, children: u } = e;
	return (0, i.jsxs)('div', {
		className: v.wrapper,
		children: [
			(0, i.jsxs)('div', {
				className: v.header,
				children: [
					(0, i.jsxs)('div', {
						className: v.headerTitle,
						children: [
							(0, i.jsx)(r.ShopIcon, { size: 'xxs' }),
							(0, i.jsx)(r.Text, {
								variant: 'eyebrow',
								color: 'text-muted',
								children: t
							})
						]
					}),
					C.wS &&
						(0, i.jsx)(r.Button, {
							look: r.ButtonLooks.BLANK,
							size: r.ButtonSizes.ICON,
							'aria-label': M.Z.Messages.COPY_LINK,
							onClick: () => {
								(0, C.JG)(s), (0, r.showToast)((0, r.createToast)(M.Z.Messages.COPIED_LINK, r.ToastType.SUCCESS)), c();
							},
							children: (0, i.jsx)(r.LinkIcon, { size: 'xs' })
						})
				]
			}),
			(0, i.jsxs)('div', {
				className: v.content,
				children: [
					(0, i.jsxs)('div', {
						className: v.contentTextWrapper,
						children: [
							null != l &&
								(0, i.jsx)(r.Button, {
									look: r.ButtonLooks.BLANK,
									size: r.ButtonSizes.NONE,
									onClick: o,
									children: (0, i.jsx)('img', {
										src: l.href,
										alt: '',
										className: v.appIcon
									})
								}),
							(0, i.jsxs)('div', {
								className: v.contentText,
								style: null == a ? { justifyContent: 'space-evenly' } : void 0,
								children: [
									(0, i.jsx)(r.Text, {
										variant: 'heading-md/semibold',
										tag: 'div',
										children: n
									}),
									null != a &&
										(0, i.jsx)(r.Text, {
											variant: 'heading-md/medium',
											color: 'text-muted',
											tag: 'div',
											className: v.description,
											children: a
										})
								]
							})
						]
					}),
					u
				]
			})
		]
	});
}
function b(e) {
	return (t) => {
		let { enabled: n } = S.u.useExperiment({ location: 'AppStorefrontMessageEmbed' });
		return n ? (0, i.jsx)(e, { ...t }) : null;
	};
}
