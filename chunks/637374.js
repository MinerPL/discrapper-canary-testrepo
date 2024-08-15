n(47120);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	r = n.n(s),
	l = n(913527),
	o = n.n(l),
	c = n(442837),
	u = n(481060),
	d = n(230711),
	_ = n(568836),
	E = n(730749),
	I = n(112724),
	m = n(607070),
	T = n(884697),
	h = n(600164),
	N = n(479446),
	f = n(930114),
	C = n(981632),
	p = n(108989),
	g = n(703656),
	S = n(314897),
	A = n(82142),
	R = n(283595),
	x = n(594174),
	O = n(509545),
	M = n(55563),
	v = n(199480),
	L = n(626135),
	Z = n(669079),
	P = n(74538),
	b = n(296848),
	D = n(51144),
	j = n(626799),
	U = n(981631),
	y = n(474936),
	B = n(689938),
	k = n(145312);
function G(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = n),
		e
	);
}
function F(e) {
	let { onClick: t, libraryApplication: n } = e;
	return (0, i.jsxs)(u.Clickable, {
		className: k.libraryLink,
		onClick: t,
		children: [
			(0, i.jsx)(u.InventoryIcon, {
				size: 'md',
				color: 'currentColor',
				className: k.libraryIcon
			}),
			(0, i.jsx)('div', { children: n.isHidden() ? B.Z.Messages.APPLICATION_STORE_PURCHASE_IN_LIBRARY_HIDDEN : B.Z.Messages.APPLICATION_STORE_PURCHASE_IN_LIBRARY })
		]
	});
}
class w extends a.PureComponent {
	get isHorizontal() {
		let { width: e } = this.props;
		return e >= _.aL;
	}
	handleViewInventory() {
		d.Z.open(U.oAB.INVENTORY);
	}
	render() {
		return (0, i.jsx)(_.$G, {
			isHorizontal: this.isHorizontal,
			renderTitle: this.renderTitle,
			renderTagline: this.renderTagline,
			renderMedia: this.renderMedia,
			renderActions: this.renderActions
		});
	}
	constructor(...e) {
		super(...e),
			G(this, 'renderMedia', () => (0, i.jsx)('div', { className: r()(k.invalidPoop, { [k.invalidPoopHorizontal]: this.isHorizontal }) })),
			G(this, 'renderTitle', () => (this.props.isSelfGift ? B.Z.Messages.GIFT_EMBED_INVALID_TITLE_SELF : B.Z.Messages.GIFT_EMBED_INVALID_TITLE_OTHER)),
			G(this, 'renderActions', () =>
				this.props.isSelfGift
					? (0, i.jsx)(u.Button, {
							size: u.Button.Sizes.SMALL,
							onClick: this.handleViewInventory,
							children: B.Z.Messages.GIFT_INVENTORY
						})
					: (0, i.jsx)(u.Button, {
							disabled: !0,
							size: u.Button.Sizes.SMALL,
							children: B.Z.Messages.GIFT_EMBED_BUTTON_ACCEPT
						})
			),
			G(this, 'renderTagline', () => (this.props.isSelfGift ? B.Z.Messages.GIFT_EMBED_INVALID_TAGLINE_SELF : B.Z.Messages.GIFT_EMBED_INVALID_TAGLINE_OTHER));
	}
}
class V extends a.Component {
	get analyticsLocation() {
		let {
			analyticsContext: { location: e }
		} = this.props;
		return {
			...e,
			section: U.jXE.GIFT_CODE_EMBED
		};
	}
	renderActions(e) {
		let { libraryApplication: t } = this.props;
		return (0, i.jsxs)(h.Z, {
			justify: h.Z.Justify.BETWEEN,
			children: [
				(0, i.jsxs)(h.Z, {
					children: [
						this.renderButton(e),
						null == t || e.isSubscription
							? null
							: (0, i.jsx)(F, {
									onClick: this.handleViewLibrary,
									libraryApplication: t
								})
					]
				}),
				(0, i.jsxs)(h.Z, {
					align: h.Z.Align.END,
					justify: h.Z.Justify.END,
					className: k.metadata,
					direction: h.Z.Direction.VERTICAL,
					children: [e.hasMultipleCopies ? (0, i.jsx)('div', { children: this.renderGiftCodeCopiesLeft(e) }) : null, e.redeemed || e.isClaimed || null != t || null == e.expiresAt ? null : (0, i.jsx)('div', { children: B.Z.Messages.GIFT_EMBED_EXPIRATION.format({ hours: e.expiresAt.diff(o()(), 'h') }) })]
				})
			]
		});
	}
	renderGiftCodeCopiesLeft(e) {
		return (e.isSubscription ? B.Z.Messages.GIFT_EMBED_SUBSCRIPTIONS_LEFT : B.Z.Messages.GIFT_EMBED_COPIES_LEFT).format({
			remaining: e.remainingUses,
			total: e.maxUses
		});
	}
	renderButton(e) {
		let { libraryApplication: t, currentUser: n, isSelfGift: a } = this.props,
			s = {
				onClick: this.handleAccept,
				color: u.Button.Colors.BRAND
			},
			r = (!e.isSubscription && null != t) || (!e.isSelfRedeemable && a) || (e.isExistingPremiumSubscriptionDisallowed && (0, P.I5)(n));
		return (
			(e.redeemed || r || e.isClaimed || !n.verified) && ((s.color = u.Button.Colors.BRAND), (s.disabled = !0)),
			(0, i.jsx)(u.Button, {
				...s,
				className: (0, T.mO)(e) ? k.collectiblesAcceptButton : null,
				size: u.Button.Sizes.SMALL,
				children: e.redeemed ? B.Z.Messages.GIFT_EMBED_BUTTON_CLAIMED : null != e.giftStyle ? B.Z.Messages.SEASONAL_GIFTING_OPEN_GIFT : B.Z.Messages.GIFT_EMBED_BUTTON_ACCEPT
			})
		);
	}
	isCustomGiftMessage() {
		let { type: e } = this.props;
		return e === U.uaV.CUSTOM_GIFT;
	}
	renderTitle(e) {
		let { currentUser: t, isSelfGift: n, sku: i } = this.props;
		return this.isCustomGiftMessage() && !n ? B.Z.Messages.GIFT_RECIPIENT_NOTIFICATION.format({ recipientDisplayName: D.ZP.getName(t) }) : null == i ? null : e.isSubscription ? (n ? B.Z.Messages.GIFT_EMBED_TITLE_SUBSCRIPTION_SELF : B.Z.Messages.GIFT_EMBED_TITLE_SUBSCRIPTION) : n ? B.Z.Messages.GIFT_EMBED_TITLE_SELF : B.Z.Messages.GIFT_EMBED_TITLE;
	}
	renderBody(e) {
		let { libraryApplication: t, isSelfGift: n, sku: i, gifter: a, subscriptionPlan: s, currentUser: r } = this.props;
		if (null == i) return B.Z.Messages.LOADING;
		if (!n && this.isCustomGiftMessage() && !e.redeemed) return;
		let l = i.isPreorder() ? B.Z.Messages.PREORDER_SKU_NAME.format({ name: i.name }) : i.name;
		if (e.redeemed)
			return e.isSubscription || (0, T.mO)(e)
				? B.Z.Messages.GIFT_EMBED_BODY_CLAIMED_SELF_SUBSCRIPTION
				: B.Z.Messages.GIFT_EMBED_BODY_CLAIMED_SELF.format({
						skuName: l,
						onViewInLibrary: this.handleViewLibrary
					});
		if (!e.isSubscription && null != t)
			return B.Z.Messages.GIFT_EMBED_BODY_OWNED.format({
				skuName: l,
				onViewInLibrary: this.handleViewLibrary
			});
		if (e.isClaimed) return B.Z.Messages.GIFT_EMBED_BODY_CLAIMED_OTHER;
		if (!r.verified) return B.Z.Messages.GIFT_EMBED_BODY_REQUIRES_VERIFICATION.format({ onClick: this.handleVerificationClick });
		if (n) return e.isSelfRedeemable ? B.Z.Messages.GIFT_EMBED_BODY_SELF : B.Z.Messages.GIFT_EMBED_BODY_SELF_NOT_REDEEMABLE.format({ skuName: l });
		if (e.isExistingPremiumSubscriptionDisallowed) return B.Z.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_ALREADY_ACTIVE;
		if (e.hasMultipleCopies)
			return null != a
				? e.isSubscription
					? B.Z.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_GIVEAWAY.format({
							username: D.ZP.getUserTag(a),
							maxUses: e.maxUses,
							skuName: l
						})
					: B.Z.Messages.GIFT_EMBED_BODY_GIVEAWAY.format({
							username: D.ZP.getUserTag(a),
							totalCopies: e.maxUses,
							skuName: l
						})
				: e.isSubscription
					? B.Z.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_NO_USER_GIVEAWAY.format({
							maxUses: e.maxUses,
							skuName: l
						})
					: B.Z.Messages.GIFT_EMBED_BODY_NO_USER_GIVEAWAY.format({
							totalCopies: e.maxUses,
							skuName: l
						});
		if (e.isSubscription)
			return null == s
				? B.Z.Messages.LOADING
				: null != a
					? (s.interval === y.rV.MONTH ? B.Z.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_DEFAULT_MONTHS : B.Z.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_DEFAULT_YEARS).format({
							username: D.ZP.getUserTag(a),
							skuName: l,
							intervalCount: s.intervalCount
						})
					: (s.interval === y.rV.MONTH ? B.Z.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_NO_USER_DEFAULT_MONTHS : B.Z.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_NO_USER_DEFAULT_YEARS).format({
							skuName: l,
							intervalCount: s.intervalCount
						});
		return null != a ? B.Z.Messages.GIFT_EMBED_BODY_DEFAULT.format({ username: D.ZP.getUserTag(a) }) : B.Z.Messages.GIFT_EMBED_BODY_NO_USER_DEFAULT;
	}
	renderPromotionActions() {
		return (0, i.jsx)(u.Button, {
			size: u.Button.Sizes.SMALL,
			onClick: this.handleClaimPromotion,
			children: B.Z.Messages.GIFT_EMBED_BUTTON_CLAIM
		});
	}
	renderEmbed() {
		let { giftCode: e, width: t } = this.props;
		return null == e
			? null
			: (0, i.jsx)(j.$, {
					skuId: e.skuId,
					onEmbedClick: this.handleEmbedClick,
					analyticsSection: U.jXE.GIFT_CODE_EMBED,
					renderCustomActions: () => this.renderActions(e),
					renderCustomTitle: () => this.renderTitle(e),
					renderCustomTagline: () => this.renderBody(e),
					renderCustomMedia: null == e.giftStyle ? void 0 : () => this.renderCustomGiftBox(e),
					width: t
				});
	}
	render() {
		let { giftCode: e, resolved: t, width: n, isSelfGift: a } = this.props;
		if (null != e && null != e.promotion)
			return (0, i.jsx)(j.$, {
				skuId: e.skuId,
				onEmbedClick: this.handleClaimPromotion,
				analyticsSection: U.jXE.GIFT_CODE_EMBED,
				renderCustomActions: () => this.renderPromotionActions(),
				renderCustomTitle: () => B.Z.Messages.GIFT_EMBED_TITLE_PROMOTION,
				renderCustomTagline: () => B.Z.Messages.GIFT_EMBED_TAGLINE_PROMOTION,
				width: n
			});
		if (null == e || e.revoked)
			return t
				? (0, i.jsx)(w, {
						isSelfGift: a,
						width: n
					})
				: (0, i.jsx)(_.OR, { isHorizontal: n >= _.aL });
		return (0, T.mO)(e)
			? (0, i.jsx)('div', {
					className: k.collectiblesEmbedWrapper,
					children: this.renderEmbed()
				})
			: this.renderEmbed();
	}
	constructor(...e) {
		super(...e),
			G(this, 'handleViewLibrary', (e) => {
				let { libraryApplication: t } = this.props;
				e.preventDefault(), null != t && t.isHidden() ? (0, g.uL)(U.Z5c.APPLICATION_LIBRARY_SETTINGS) : (0, g.uL)(U.Z5c.APPLICATION_LIBRARY, { state: { applicationId: null != t ? t.id : void 0 } });
			}),
			G(this, 'handleVerificationClick', (e) => {
				e.stopPropagation(), e.preventDefault(), d.Z.open(U.oAB.ACCOUNT);
			}),
			G(this, 'handleAccept', (e) => {
				let { channelId: t, code: n, content: i, type: a, giftInfo: s } = this.props;
				e.preventDefault(),
					e.stopPropagation(),
					L.default.track(U.rMx.OPEN_MODAL, {
						type: 'gift_accept',
						location: {
							...this.analyticsLocation,
							object: U.qAy.BUTTON_CTA
						}
					});
				let r = a !== U.uaV.CUSTOM_GIFT ? void 0 : i;
				(0, f.V)({
					processedCode: n,
					channelContext: t,
					customGiftMessage: r,
					giftInfo: s
				});
			}),
			G(this, 'handleEmbedClick', (e) => {
				let { giftCode: t } = this.props;
				null != t && t.isSubscription && (e.preventDefault(), d.Z.open(U.oAB.PREMIUM));
			}),
			G(this, 'handleClaimPromotion', (e) => {
				var t;
				e.stopPropagation(), e.preventDefault();
				let n = null === (t = this.props.giftCode) || void 0 === t ? void 0 : t.code;
				if (null != n) window.open(U.Z5c.BILLING_PROMOTION_REDEMPTION(n));
			}),
			G(this, 'renderCustomGiftBox', (e) => {
				let { useReducedMotion: t, width: n } = this.props;
				if (null == e || null == e.giftStyle) return null;
				let a = y.jy.includes(e.giftStyle),
					s = r()(k.customGiftEmbedWrapper, {
						[k.legacySeasonalGiftEmbedWrapper]: a,
						[k.giftEmbedWrapperHorizontal]: n >= _.aL
					}),
					l = r()({
						[k.legacySeasonalGiftEmbedBox]: a,
						[k.legacySeasonalGiftEmbedBoxHorizontal]: a && n >= _.aL,
						[k.customGiftEmbedBox]: !a,
						[k.customGiftEmbedBoxHorizontal]: !a && n >= _.aL
					});
				return (0, i.jsxs)('div', {
					className: s,
					children: [
						!t &&
							y.eZ.includes(e.giftStyle) &&
							(0, i.jsx)(p.Z, {
								className: k.snow,
								wind: 5
							}),
						a && (0, i.jsx)(v.Z, { className: k.headerIcon }),
						null != e.giftStyle &&
							(0, i.jsx)(C.Z, {
								defaultAnimationState: e.redeemed ? N.S.LOOP : N.S.IDLE,
								giftStyle: e.giftStyle,
								className: l
							})
					]
				});
			});
	}
}
let H = (0, I.Z)((0, E.Z)(V));
t.Z = c.ZP.connectStores([A.Z, M.Z, x.default, R.Z, O.Z, S.default, m.Z], (e) => {
	let { code: t, author: n, currentUser: i } = e,
		a = A.Z.get(t),
		s = null != a ? M.Z.get(a.skuId) : null,
		r = null != a && null != a.userId ? x.default.getUser(a.userId) : null,
		l = m.Z.useReducedMotion;
	return {
		sku: s,
		giftCode: a,
		gifter: r,
		currentUser: i,
		subscriptionPlan: null != a && null != a.subscriptionPlanId ? (0, b.oE)(a.subscriptionPlanId) : null,
		isSelfGift: null != a ? S.default.getId() === a.userId : S.default.getId() === n.id,
		resolved: A.Z.getIsResolved(t),
		libraryApplication: null != s && (null == a ? void 0 : a.entitlementBranches) != null ? Z.z2(a.entitlementBranches, s, R.Z) : null,
		useReducedMotion: l
	};
})(H);
