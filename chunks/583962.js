n.d(t, {
	PD: function () {
		return M;
	},
	aR: function () {
		return R;
	}
}),
	n(47120);
var i = n(735250),
	l = n(470079),
	r = n(120356),
	a = n.n(r),
	s = n(338545),
	o = n(91192),
	c = n(442837),
	u = n(477690),
	d = n(481060),
	h = n(239091),
	p = n(100527),
	_ = n(367907),
	f = n(906732),
	g = n(434404),
	m = n(496675),
	C = n(259580),
	I = n(267642),
	E = n(624138),
	N = n(667815),
	x = n(531572),
	S = n(26323),
	v = n(30513),
	Z = n(981631),
	T = n(689938),
	L = n(360084);
let A = (0, E.Mg)(u.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN),
	b = (e) => {
		let { guild: t, onSelect: n } = e,
			[r, a] = l.useState(t.premiumProgressBarEnabled),
			[s, o] = l.useState(!1),
			u = (0, c.e7)([m.Z], () => m.Z.can(Z.Plq.MANAGE_GUILD, t)),
			p = async () => {
				if (!!u) o(!0), await g.Z.saveGuild(t.id, { premiumProgressBarEnabled: !r }), a(!r), o(!1);
			};
		return (0, i.jsx)(d.Menu, {
			navId: 'progress-bar-context',
			onClose: h.Zy,
			'aria-label': T.Z.Messages.PROGRESS_BAR_ACTIONS_MENU_LABEL,
			onSelect: n,
			children: (0, i.jsx)(d.MenuCheckboxItem, {
				id: 'progress-bar-enabled',
				label: T.Z.Messages.GUILD_ENABLE_PROGRESS_BAR,
				checked: r,
				disabled: s,
				action: p
			})
		});
	},
	M = 57,
	R = 57 + A,
	O = {
		tension: 180,
		friction: 80
	};
t.ZP = (e) => {
	let { guild: t, withMargin: n } = e,
		{ analyticsLocations: r } = (0, f.ZP)(p.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY),
		{ premiumSubscriberCount: u, id: g } = t,
		E = (0, I.rF)(u, g),
		A = (0, I.FZ)(E, t.id),
		M = null == A,
		R = null != A ? A : E,
		P = (0, c.e7)([x.Z], () => {
			var e;
			return null !== (e = x.Z.getCountForGuild(g)) && void 0 !== e ? e : 0;
		}),
		y = (0, c.e7)([m.Z], () => m.Z.can(Z.Plq.MANAGE_GUILD, t));
	l.useEffect(() => {
		P !== u && (0, N.v)(g, u);
	}, [g, P, u]);
	let j = ''.concat(Math.min(100, (u / (0, I.vn)(t.id)[R]) * 100), '%'),
		{ current: D } = l.useRef(j),
		w = {
			from: { width: P === u ? D : '0%' },
			to: { width: j },
			config: O
		},
		[U, G] = (0, d.useSpring)(() => w),
		k = () => {
			(0, _.yw)(Z.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
				location: { section: Z.jXE.PREMIUM_GUILD_PROGRESS_BAR },
				guild_id: g,
				location_stack: r
			}),
				(0, S.Z)({
					analyticsLocations: r,
					analyticsSourceLocation: {
						page: Z.ZY5.GUILD_CHANNEL,
						section: Z.jXE.PREMIUM_GUILD_PROGRESS_BAR,
						object: Z.qAy.TOOLTIP
					},
					guild: t,
					perks: (0, v.VF)(),
					perkIntro: T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_PROGRESS_BAR_HEADER
				});
		},
		B = T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_GOAL.format({ levelName: (0, I.e9)(R) }),
		H = T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_PROGRESS_BAR_BLURB.format({
			numBoosts: u,
			numTotal: (0, I.vn)(t.id)[R]
		});
	M && ((B = (0, I.e9)(R)), (H = T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_PROGRESS_BAR_COMPLETED_BLURB.format({ numBoosts: u })));
	let V = (0, o.JA)('boosts-'.concat(t.id));
	return (0, i.jsx)('li', {
		children: (0, i.jsx)(d.Tooltip, {
			text: M ? T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_NUDGE_TOOLTIP_COMPLETE : T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_NUDGE_TOOLTIP.format({ levelName: (0, I.nW)(R) }),
			color: d.Tooltip.Colors.BLACK,
			position: 'top',
			delay: 200,
			hideOnClick: !0,
			children: (e) =>
				(0, i.jsxs)(d.Clickable, {
					...V,
					...e,
					'aria-label': void 0,
					role: 'button',
					focusProps: {
						offset: {
							left: 10,
							right: 4
						}
					},
					onClick: k,
					onMouseEnter: () => {
						var t;
						null === (t = e.onMouseEnter) || void 0 === t || t.call(e), G(w);
					},
					className: a()(L.container, { [L.containerWithMargin]: n }),
					onContextMenu: (e) => {
						y &&
							(0, h.vq)(e, (e) =>
								(0, i.jsx)(b, {
									...e,
									guild: t
								})
							);
					},
					children: [
						(0, i.jsx)(d.HiddenVisually, { children: e['aria-label'] }),
						(0, i.jsxs)('div', {
							className: L.textArea,
							children: [
								(0, i.jsx)('div', {
									className: L.goalTextContainer,
									children: (0, i.jsx)(d.Text, {
										className: L.goalText,
										color: 'interactive-active',
										variant: 'text-xs/bold',
										children: B
									})
								}),
								(0, i.jsxs)('div', {
									className: L.progressFraction,
									children: [
										(0, i.jsx)(d.Text, {
											color: 'interactive-normal',
											variant: 'text-xs/normal',
											children: H
										}),
										(0, i.jsx)(C.Z, {
											className: L.count,
											height: 16,
											width: 16,
											direction: C.Z.Directions.RIGHT
										})
									]
								})
							]
						}),
						(0, i.jsxs)('div', {
							className: a()(L.progressBarContainer, { [L.progressBarContainerComplete]: M }),
							children: [
								(0, i.jsx)(s.animated.div, {
									className: L.progressBar,
									style: U
								}),
								M
									? (0, i.jsx)('span', {
											'aria-label': T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_PROGRESS_BAR_TADA_ICON_ALT_TEXT,
											role: 'img',
											className: L.tadaIcon,
											children: '\uD83C\uDF89'
										})
									: null
							]
						})
					]
				})
		})
	});
};
