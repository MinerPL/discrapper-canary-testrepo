n.d(t, {
	P: function () {
		return p;
	}
}),
	n(411104);
var r = n(735250);
n(470079);
var i = n(120356),
	a = n.n(i),
	s = n(338545),
	o = n(481060),
	l = n(906732),
	u = n(471885),
	c = n(267642),
	d = n(879892),
	_ = n(198466),
	E = n(981631),
	f = n(689938),
	h = n(656988);
let p = {
	[E.Eu4.NONE]: 0,
	[E.Eu4.TIER_1]: 1 / 3,
	[E.Eu4.TIER_2]: 2 / 3,
	[E.Eu4.TIER_3]: 1
};
t.Z = function (e) {
	let { children: t, confettiTriggerRef: n, guild: i, isProgressBarAnimationComplete: m, setConfettiCount: I, setShouldFireConfetti: T, tier: g, tierMarkerAnimationPosition: S } = e,
		{ analyticsLocations: A } = (0, l.ZP)(),
		N = E.oCV[g] - i.premiumSubscriberCount,
		v = g <= S || m,
		O = v && g <= i.premiumTier,
		R = v && g < i.premiumTier,
		C = v && g === i.premiumTier,
		{ scaleFactor: y } = (0, o.useSpring)({
			from: { scaleFactor: 0 },
			to: { scaleFactor: S >= g || (m && S + 1 === g) || (m && -1 === S && g === E.Eu4.NONE) ? 1 : 0 },
			config: {
				tension: 360,
				friction: 12
			}
		}),
		D = (0, r.jsxs)(r.Fragment, {
			children: [
				(0, r.jsx)(s.animated.div, {
					className: h.progressBarMarkerIndicator,
					style: { transform: y.to((e) => 'translate(-50%, -50%) scale('.concat(e, ')')) }
				}),
				g !== E.Eu4.NONE &&
					(0, r.jsx)(u.Z, {
						tier: g,
						className: h.boostedTierIcon
					})
			]
		}),
		L = O ? 'div' : o.Clickable,
		b = O
			? {}
			: {
					onClick: function () {
						v &&
							(0, d.u)({
								analyticsLocations: A,
								analyticsLocation: {
									page: E.ZY5.PREMIUM_GUILD_USER_MODAL,
									section: E.jXE.PREMIUM_GUILD_USER_MODAL_PROGRESS_BAR,
									object: E.qAy.SUBSCRIBE_TO_TIER_BUTTON,
									objectType: (function (e) {
										switch (e) {
											case E.Eu4.TIER_3:
												return E.Qqv.TIER_3;
											case E.Eu4.TIER_2:
												return E.Qqv.TIER_2;
											case E.Eu4.TIER_1:
												return E.Qqv.TIER_1;
											default:
												throw Error('Unsupported Boosting tier: '.concat(e));
										}
									})(g)
								},
								numberOfBoostsToAdd: N,
								guild: i
							});
					}
				};
	return (0, r.jsx)(o.Tooltip, {
		text: O
			? f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_TOOLTIP_TIER_UNLOCKED.format({ tierName: (0, c.nW)(g, { useLevels: !1 }) })
			: f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_TOOLTIP_REMAINING_FOR_TIER.format({
					numBoostsRequired: N,
					tierName: (0, c.nW)(g, { useLevels: !1 })
				}),
		shouldShow: g !== E.Eu4.NONE,
		children: (e) =>
			(0, r.jsxs)(L, {
				className: a()(h.progressBarMarker, {
					[h.progressBarMarkerUnlocked]: O,
					[h.progressBarMarkerLocked]: !O,
					[h.progressBarMarkerLower]: R,
					[h.progressBarMarkerCurrent]: C
				}),
				style: { left: ''.concat(100 * p[g], '%') },
				...e,
				...b,
				children: [
					!O && (0, r.jsx)('div', { className: h.boostedTierIconBackground }),
					O && g === E.Eu4.TIER_3
						? (0, r.jsx)(_.m, {
								confettiTriggerRef: n,
								setConfettiCount: I,
								setShouldFireConfetti: T,
								children: D
							})
						: D,
					(0, r.jsxs)(o.Text, {
						className: h.progressBarMarkerLabel,
						variant: 'text-md/normal',
						children: [
							O &&
								g !== E.Eu4.NONE &&
								(0, r.jsx)(o.CheckmarkLargeIcon, {
									size: 'md',
									color: 'currentColor',
									className: h.progressBarMarkerUnlockedIcon
								}),
							t
						]
					})
				]
			})
	});
};
