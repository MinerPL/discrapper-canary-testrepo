t(47120), t(653041);
var n = t(735250),
	a = t(470079),
	i = t(120356),
	r = t.n(i),
	o = t(913527),
	l = t.n(o),
	c = t(374470),
	d = t(399606),
	_ = t(481060),
	E = t(570140),
	u = t(37234),
	I = t(960359),
	T = t(853197),
	S = t(430492),
	N = t(688465),
	C = t(594174),
	m = t(55935),
	A = t(288836),
	O = t(689938),
	g = t(161368);
let h = 'YYYY-MM-DD HH:mm';
function p(e) {
	let { drop: s, enrolled: t, completed: i } = e,
		r = a.useRef(null),
		o = (e) => {
			let s = e.target;
			(0, c.k)(s, HTMLAnchorElement) && (0, u.xf)();
		};
	(0, a.useEffect)(() => {
		let e = r.current;
		return (
			null != e && e.addEventListener('click', o),
			() => {
				null != e && e.removeEventListener('click', o);
			}
		);
	}, []);
	let { title: d, endDate: S, dropsQuestId: N, assets: C, articleUrl: m } = s,
		A = (0, T.EW)(N);
	if (null == A) return null;
	let h = () => {
		(0, I.RJ)(N).then(() => {
			E.Z.wait(async () => {
				await (0, I.R5)();
			});
		});
	};
	return (0, n.jsxs)('div', {
		className: g.dropContainer,
		children: [
			(0, n.jsx)('div', {
				className: g.dropCard,
				children: (0, n.jsxs)('div', {
					className: g.mainPromotionCardContainer,
					children: [
						(0, n.jsxs)('div', {
							className: g.promotionCardLeftContainer,
							children: [
								(0, n.jsx)('div', {
									className: g.promotionIcon,
									children: (0, n.jsx)('img', {
										alt: '',
										src: C.iconSrc,
										className: g.promotionIconImage
									})
								}),
								(0, n.jsxs)('div', {
									children: [
										(0, n.jsx)(_.Heading, {
											variant: 'heading-md/semibold',
											children: d
										}),
										(0, n.jsx)(_.Text, {
											variant: 'text-xs/medium',
											color: 'text-normal',
											className: g.availableUntil,
											children: O.Z.Messages.DROPS_CARD_REDEEM_UNTIL.format({
												endDate: l()(S, 'YYYY-MM-DD HH:mm').format('MMMM Do, YYYY')
											})
										})
									]
								})
							]
						}),
						(0, n.jsx)(_.Tooltip, {
							text: t && !i ? O.Z.Messages.DROPS_GIFT_INVENTORY_REDEMPTION_TOOLTIP : null,
							tooltipContentClassName: g.redeemTooltipContent,
							children: (e) =>
								(0, n.jsx)(_.Button, {
									className: g.promotionCardButton,
									color: _.Button.Colors.BRAND,
									size: _.Button.Sizes.SMALL,
									onClick: h,
									disabled: t && !i,
									...e,
									children: t ? O.Z.Messages.REDEEM : O.Z.Messages.DROPS_GIFT_INVENTORY_ENROLL
								})
						})
					]
				})
			}),
			(0, n.jsxs)('div', {
				className: g.dropCriteria,
				children: [
					(0, n.jsx)('img', {
						alt: '',
						src: C.rewardSrc,
						className: g.dropRewardImage
					}),
					(0, n.jsx)('div', {
						ref: r,
						children: (0, n.jsx)(_.Text, {
							color: 'text-muted',
							variant: 'text-sm/normal',
							className: g.dropCriteriaText,
							children: A.messages.giftInfo()
						})
					}),
					(0, n.jsx)(_.Text, {
						color: 'text-muted',
						variant: 'text-sm/normal',
						className: g.dropLearnMore,
						children: O.Z.Messages.DROPS_LEARN_MORE.format({ faqUrl: m })
					})
				]
			})
		]
	});
}
function R(e) {
	let { drop: s, code: t, platform: i } = e,
		[o, c] = a.useState(!1),
		d = void 0 !== t,
		E = (0, m.vc)(l()(s.endDate), 'LL'),
		u = O.Z.Messages.DROPS_CARD_REDEEM_UNTIL.format({ endDate: E }),
		I = d ? O.Z.Messages.OUTBOUND_PROMOTION_SEE_CODE : O.Z.Messages.PROMOTION_CARD_ACTION_CLAIM,
		T = a.useCallback(() => c(!1), []);
	return (0, n.jsxs)(n.Fragment, {
		children: [
			(0, n.jsx)('div', {
				className: r()(g.skuCard, g.promotionCard),
				children: (0, n.jsxs)('div', {
					className: g.mainPromotionCardContainer,
					children: [
						(0, n.jsxs)('div', {
							className: g.promotionCardLeftContainer,
							children: [
								(0, n.jsx)('div', {
									className: g.promotionIcon,
									children: (0, n.jsx)('img', {
										alt: '',
										src: s.assets.iconSrc,
										className: g.promotionIconImage
									})
								}),
								(0, n.jsxs)('div', {
									children: [
										(0, n.jsx)(_.Heading, {
											variant: 'heading-md/semibold',
											children: s.title
										}),
										(0, n.jsx)(_.Text, {
											variant: 'text-sm/normal',
											color: 'text-normal',
											className: g.__invalid_promotionText,
											children: u
										})
									]
								})
							]
						}),
						(0, n.jsx)(_.Button, {
							color: _.Button.Colors.BRAND,
							size: _.Button.Sizes.SMALL,
							onClick: () => c(!0),
							children: I
						})
					]
				})
			}),
			o &&
				(0, n.jsx)(_.Modal, {
					renderModal: (e) =>
						(0, n.jsx)(S.ZP, {
							...e,
							onClose: T,
							code: t,
							drop: s,
							platform: i
						}),
					onCloseRequest: T
				})
		]
	});
}
s.Z = function (e) {
	var s;
	let { dropsOptedOut: t, dropsStatuses: a } = e,
		i = [],
		r = [],
		o = (0, d.e7)([C.default], () => C.default.getCurrentUser()),
		c = !1;
	if (null == a) return null;
	for (let e of Object.keys(a)) {
		let s = (0, T.EW)(e);
		if (null == s) continue;
		let t = a[e],
			n = (0, T.x8)(e);
		if (null == n) continue;
		let d = (0, T.Xt)(n),
			_ = t.eligible && d,
			E = (0, T.A5)(n);
		if (null == E) continue;
		_ && E.trackExposure({ location: 'ENTITLEMENT_GIFTS' });
		let u = !!(
			(null == o ? void 0 : o.isStaff()) &&
			E.getCurrentConfig({ location: '076035_2' }, { autoTrackExposure: !1 }).showUnenroll
		);
		if (!E.getCurrentConfig({ location: '076035_3' }, { autoTrackExposure: !1 }).dropsEnabled) continue;
		c = !0;
		let I = l()(s.endDate, h),
			S = l()();
		(_ && null == t.completed_at) || (null != t.enrolled_at && null == t.completed_at && t.eligible)
			? S < I &&
				i.push({
					dropsQuestId: e,
					dropsStatus: t,
					showUnenroll: u,
					experiment: E
				})
			: (null != t.code || null != t.completed_at) &&
				S < l()(s.finalClaimDate, h) &&
				r.push({
					dropsQuestId: e,
					dropsStatus: t,
					showUnenroll: u,
					experiment: E
				});
	}
	let E = (0, n.jsxs)('div', {
		className: g.dropsHeaderContainer,
		children: [
			(0, n.jsx)(_.Heading, {
				variant: 'heading-md/semibold',
				children: O.Z.Messages.DROPS_GIFT_INVENTORY_TITLE
			}),
			(0, n.jsx)(N.Z, { className: g.betaTagIcon })
		]
	});
	return c && 0 === i.length && 0 === r.length && t
		? (0, n.jsxs)(_.FormSection, {
				children: [
					E,
					(0, n.jsx)(_.FormDivider, { className: g.divider }),
					(0, n.jsx)('div', {
						className: g.dropsHelpText,
						children: O.Z.Messages.DROPS_READ_BLOG_TO_ENABLE.format({ blogURL: A.n4 })
					})
				]
			})
		: 0 === i.length && 0 === r.length
			? null
			: (0, n.jsxs)(_.FormSection, {
					children: [
						E,
						(0, n.jsx)(_.FormDivider, { className: g.divider }),
						i.map((e) => {
							let s = (0, T.EW)(e.dropsQuestId),
								t = null != e.dropsStatus.enrolled_at,
								a = null != e.dropsStatus.completed_at;
							return null != s
								? (0, n.jsxs)(n.Fragment, {
										children: [
											(0, n.jsx)(
												p,
												{
													drop: { ...s },
													enrolled: t,
													completed: a
												},
												s.dropsQuestId
											),
											e.showUnenroll &&
												(0, n.jsx)(_.Button, {
													size: _.Button.Sizes.SMALL,
													onClick: () => (0, I.VT)(e.dropsQuestId),
													children: 'UNENROLL'
												})
										]
									})
								: null;
						}),
						r.map((e) => {
							var s, t;
							let a = (0, T.EW)(e.dropsQuestId);
							return null != a
								? (0, n.jsxs)(n.Fragment, {
										children: [
											(0, n.jsx)(
												R,
												{
													drop: a,
													code: null !== (s = e.dropsStatus.code) && void 0 !== s ? s : void 0,
													platform: null !== (t = e.dropsStatus.platform) && void 0 !== t ? t : void 0
												},
												e.dropsQuestId
											),
											e.showUnenroll &&
												(0, n.jsx)(_.Button, {
													size: _.Button.Sizes.SMALL,
													onClick: () => (0, I.VT)(e.dropsQuestId),
													children: 'UNENROLL'
												})
										]
									})
								: null;
						}),
						'string' == typeof (null == o ? void 0 : o.id) && r.length > 0
							? (0, n.jsx)('div', {
									className: g.feedback,
									children: O.Z.Messages.DROPS_REQUEST_FEEDBACK_SUCCESS.format({
										feedbackURL: 'https://survey.alchemer.com/s3/7043098/Discord-Drops-CSAT?user_id='.concat(
											null !== (s = null == o ? void 0 : o.id) && void 0 !== s ? s : ''
										)
									})
								})
							: null
					]
				});
};
