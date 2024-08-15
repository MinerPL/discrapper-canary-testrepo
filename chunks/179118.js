n.d(s, {
	Z: function () {
		return Z;
	}
}),
	n(47120);
var t = n(735250),
	a = n(470079),
	i = n(120356),
	r = n.n(i),
	l = n(392711),
	o = n.n(l),
	c = n(442837),
	u = n(481060),
	_ = n(37234),
	d = n(194359),
	I = n(700582),
	E = n(925329),
	m = n(479446),
	C = n(522489),
	T = n(93127),
	N = n(814443),
	S = n(590783),
	p = n(699516),
	L = n(246946),
	A = n(594174),
	O = n(572004),
	P = n(669079),
	R = n(74538),
	M = n(51144),
	x = n(981631),
	f = n(474936),
	g = n(689938),
	h = n(851212);
function Z(e) {
	let {
			giftCode: s,
			application: n,
			sku: i,
			subscriptionPlan: l,
			selectedGiftStyle: o,
			onClose: _,
			hasSentMessage: d,
			giftRecipient: m,
			giftMessageError: T,
			isSendingMessage: N
		} = e,
		[p, A] = a.useState(u.CopyInput.Modes.DEFAULT),
		Z = (0, c.e7)([L.Z], () => L.Z.enabled),
		U = d || (null != o && null != m),
		v = (null == i ? void 0 : i.productLine) === x.POd.COLLECTIBLES,
		b = () => (null != l ? l.skuId : null != i ? i.id : null),
		F = () => {
			let e;
			let s = null != o && f.V4.includes(o);
			return null != T
				? g.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB
				: null == l
					? null
					: (e =
							l.interval === f.rV.MONTH
								? U
									? s
										? g.Z.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY
										: g.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY
									: g.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY
								: U
									? s
										? g.Z.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY
										: g.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY
									: g.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format({
							skuName: (0, R.aq)(l.id),
							intervalCount: l.intervalCount
						});
		},
		y = (e, s) => {
			null != i &&
				(0, P.dM)(
					new S.Z({
						code: s,
						maxUses: 1
					}),
					i
				);
			try {
				(0, O.JG)(e), A(u.CopyInput.Modes.SUCCESS);
			} catch (e) {
				A(u.CopyInput.Modes.ERROR);
			}
			setTimeout(() => {
				A(u.CopyInput.Modes.DEFAULT);
			}, 1500);
		},
		G = () => {
			let e;
			if (null == s) return null;
			switch (p) {
				case u.CopyInput.Modes.SUCCESS:
					e = g.Z.Messages.BILLING_GIFT_COPIED;
					break;
				case u.CopyInput.Modes.ERROR:
					e = g.Z.Messages.FAILED;
					break;
				default:
					e = g.Z.Messages.COPY;
			}
			return (0, t.jsxs)('div', {
				className: h.giftCodeSection,
				children: [
					(0, t.jsx)(u.FormTitle, { children: g.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK }),
					null != s &&
						(0, t.jsx)(u.CopyInput, {
							hideMessage: Z ? g.Z.Messages.GIFT_INVENTORY_HIDDEN : null,
							value: (0, P.Nz)(s),
							mode: p,
							text: e,
							onCopy: (e) => y(e, s),
							supportsCopy: O.wS,
							className: h.__invalid_copyInput,
							buttonColor: u.ButtonColors.LINK,
							buttonLook: u.ButtonLooks.LINK
						}),
					(0, t.jsx)('div', {
						className: h.subtext,
						children: g.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT
					})
				]
			});
		};
	return N
		? (0, t.jsxs)('div', {
				className: h.confirmation,
				children: [
					null != n
						? (0, t.jsx)(E.Z, {
								game: n,
								className: h.__invalid_icon,
								size: E.Z.Sizes.LARGE,
								skuId: b()
							})
						: null,
					(0, t.jsx)(u.Spinner, { type: u.SpinnerTypes.PULSING_ELLIPSIS })
				]
			})
		: (0, t.jsxs)('div', {
				className: h.confirmation,
				children: [
					null != n
						? (0, t.jsx)(E.Z, {
								game: n,
								className: h.__invalid_icon,
								size: E.Z.Sizes.LARGE,
								skuId: b()
							})
						: null,
					(0, t.jsx)(u.Heading, {
						variant: 'heading-lg/semibold',
						className: r()({
							[h.header]: null == o && !v,
							[h.headerCustomGifting]: null != o && !v
						}),
						children:
							null != m || (d && null == T)
								? g.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE
								: null != T
									? g.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED
									: g.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE
					}),
					(d && null != m && null == T) || U
						? (0, t.jsxs)(t.Fragment, {
								children: [
									(0, t.jsx)(I.Z, {
										user: m,
										className: h.giftRecipient,
										size: u.AvatarSizes.SIZE_80
									}),
									(0, t.jsx)(u.Heading, {
										className: h.giftRecipientName,
										variant: 'heading-md/semibold',
										children: M.ZP.getName(m)
									}),
									(0, t.jsxs)('div', {
										className: h.giftRecipientTag,
										children: [' ', M.ZP.getUserTag(m)]
									}),
									(0, t.jsx)('div', {
										className: h.giftSentMessage,
										children: F()
									})
								]
							})
						: (() => {
								let e = (0, P.MY)(m, v),
									{ removeGiftRecipientUI: n } = C.m.getCurrentConfig(
										{ location: 'GiftPurchaseConfirmation' },
										{
											autoTrackExposure: !1,
											disable: __BILLING_STANDALONE__ || e !== P.xr.CUSTOM_STYLE
										}
									);
								return (0, t.jsxs)(t.Fragment, {
									children: [
										(0, t.jsx)('div', {
											className: h.blurb,
											children: F()
										}),
										!n &&
											null == T &&
											(0, t.jsx)(j, {
												giftCode: s,
												onClose: _
											}),
										(0, t.jsx)('div', { className: h.divider }),
										G()
									]
								});
							})()
				]
			});
}
let j = (e) => {
	let { giftCode: s, onClose: n } = e;
	a.useEffect(() => {
		d.Z.fetchRelationships(), (0, T.W)();
	}, []);
	let [i, r] = a.useState(),
		[l, E] = a.useState(!1),
		[C, S] = a.useState(!1),
		{ userAffinities: L, isLoading: O } = (0, c.cj)([N.Z], () => ({
			userAffinities: N.Z.getUserAffinitiesUserIds(),
			isLoading: N.Z.getFetching()
		})),
		P = Array.from(L.values()),
		R = (0, c.e7)([p.Z], () => p.Z.getFriendIDs()),
		x = o().difference(R, P),
		f = [...P, ...x],
		Z = (0, c.e7)([A.default], () => A.default.filter((e) => f.includes(e.id) && !e.bot), [f]);
	if (null == Z || 0 === Z.length) return null;
	let j = o().sortBy(Z, (e) => f.indexOf(e.id));
	return (0, t.jsxs)('div', {
		className: h.giftRecipientSection,
		children: [
			(0, t.jsx)(u.FormTitle, { children: g.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL }),
			(0, t.jsxs)('div', {
				className: h.giftRecipient,
				children: [
					(0, t.jsx)(u.SearchableSelect, {
						placeholder: g.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
						wrapperClassName: h.giftRecipientInputWrapper,
						className: l ? h.giftRecipientInputError : void 0,
						renderOptionPrefix: (e) =>
							(null == e ? void 0 : e.value) == null
								? null
								: (0, t.jsx)(I.Z, {
										user: e.value,
										size: u.AvatarSizes.SIZE_20
									}),
						renderLeading: () => (O ? (0, t.jsx)(u.Spinner, { type: u.SpinnerTypes.PULSING_ELLIPSIS }) : null),
						value: i,
						onChange: (e) => {
							r(e), E(!1);
						},
						options: j.map((e) => ({
							value: e,
							label: ''.concat(M.ZP.getUserTag(e))
						}))
					}),
					(0, t.jsx)(u.Button, {
						disabled: null == i,
						submitting: C,
						className: h.sendToRecipientButton,
						onClick: () => {
							S(!0),
								(0, m.Y)(i, s)
									.then(() => {
										n(), (0, _.Ou)();
									})
									.catch(() => {
										E(!0), S(!1);
									});
						},
						children: g.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
					})
				]
			}),
			(0, t.jsx)('div', {
				className: l ? h.subtextError : h.subtext,
				children: l
					? g.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK
					: g.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
			})
		]
	});
};
