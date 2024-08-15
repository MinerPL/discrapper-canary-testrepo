t.d(s, {
	Z: function () {
		return f;
	},
	r: function () {
		return M;
	}
}),
	t(653041),
	t(47120);
var n = t(735250),
	a = t(470079),
	i = t(338545),
	r = t(399606),
	o = t(481060),
	l = t(607070),
	c = t(158153),
	d = t(280942),
	_ = t(314684),
	E = t(209747),
	u = t(430824),
	I = t(267642),
	T = t(709054),
	S = t(357956),
	N = t(275909),
	C = t(300037),
	m = t(981631),
	A = t(474936),
	O = t(689938),
	g = t(160724);
function h(e) {
	let { guildTier: s, guildBoostSlot: t, showAltText: r, isCanceled: l, premiumSubscription: c } = e,
		d = a.useMemo(() => {
			if (l) return O.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PENDING_CANCELATION.format({ date: c.currentPeriodEnd });
			let e = null != t.premiumGuildSubscription ? T.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
			return O.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_DURATION_SHORTENED.format({ date: new Date(e) });
		}, [t, l, c]),
		_ = a.useMemo(
			() =>
				(function (e) {
					if (null == e || e === m.Eu4.NONE) return '';
					let s = [
						O.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_EMOJI_SLOTS.format({ numEmojiSlots: A.HO[e].limits.emoji }),
						O.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_STICKER_SLOTS.format({
							numStickerSlots: A.HO[e].limits.stickers
						}),
						O.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_SOUNDBOARD_SLOTS.format({
							numSoundboardSlots: A.HO[e].limits.soundboardSounds
						}),
						O.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_STREAM_QUALITY.format({
							resolution: A.HO[e].limits.screenShareQualityResolution,
							framerate: A.HO[e].limits.screenShareQualityFramerate
						}),
						O.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_AUDIO_QUALITY.format({
							bitrate: A.HO[e].limits.bitrate / 1000
						}),
						O.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_UPLOAD_SIZE_LIMIT.format({
							filesize: A.HO[e].limits.fileSize / 1024 / 1024
						}),
						O.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_VIDEO_STAGE_SEATS.format({
							numVideoStageSeats: A.HO[e].limits.stageVideoUsers
						}),
						O.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_ANIMATED_GUILD_ICON,
						O.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_GUILD_INVITE_BACKGROUND
					];
					e >= m.Eu4.TIER_2 &&
						(s.push(O.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_GUILD_BANNER),
						s.push(O.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_CUSTOM_ROLE_ICONS)),
						e >= m.Eu4.TIER_3 && s.push(O.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_VANITY_URL);
					let t = s[Math.floor(Math.random() * s.length)];
					return O.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_TEMPLATE.format({ perk: t });
				})(s),
			[s]
		),
		E = (0, o.useTransition)(
			r,
			{
				from: { opacity: 0 },
				enter: { opacity: 1 },
				leave: { opacity: 0 }
			},
			'animate-always'
		);
	return l || s === m.Eu4.NONE
		? (0, n.jsx)('div', {
				className: g.boostDescriptionInnerContainer,
				children: (0, n.jsx)(o.Text, {
					variant: 'text-sm/medium',
					color: 'text-muted',
					children: d
				})
			})
		: E((e, s) =>
				(0, n.jsx)(i.animated.div, {
					style: e,
					className: g.boostDescriptionInnerContainer,
					children: (0, n.jsx)(o.Text, {
						variant: 'text-sm/medium',
						color: 'text-muted',
						children: s ? _ : d
					})
				})
			);
}
function p(e) {
	let {
			guildTier: s,
			guildBoostSlot: t,
			premiumSubscription: i,
			hasCancelableGuildBoostSlot: c,
			showAltText: _,
			isLastGuildBoostSlot: E
		} = e,
		u = (0, r.e7)([l.Z], () => l.Z.useReducedMotion),
		T = a.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t]),
		C = a.useMemo(() => null != T && T > new Date(), [T]),
		m = (0, I.tl)(t);
	return (0, n.jsxs)('div', {
		className: g.boostContainer,
		children: [
			(0, n.jsxs)('div', {
				className: g.boostInnerContainer,
				children: [
					(0, n.jsx)(N.Z, {
						isCanceled: m,
						hasCooldown: C,
						useReducedMotion: u
					}),
					(0, n.jsx)('div', {
						className: g.boostDescriptionContainer,
						children:
							null != T && C && !m
								? (0, n.jsx)(S.Z, {
										className: g.boostDescriptionInnerContainer,
										cooldown: T.getTime()
									})
								: (0, n.jsx)(h, {
										guildTier: s,
										guildBoostSlot: t,
										showAltText: _,
										isCanceled: m,
										premiumSubscription: i
									})
					}),
					(0, n.jsx)(o.Popout, {
						renderPopout: function (e) {
							let { closePopout: s } = e;
							return (0, n.jsx)(d.Z, {
								onClose: s,
								guildBoostSlot: t,
								premiumSubscription: i,
								hasCancelableGuildBoostSlot: c
							});
						},
						position: 'right',
						align: 'center',
						children: (e) =>
							(0, n.jsx)(o.Clickable, {
								...e,
								'aria-label': O.Z.Messages.MORE_OPTIONS,
								className: g.boostSlotMenuIcon,
								children: (0, n.jsx)(o.MoreVerticalIcon, {
									size: 'md',
									color: 'currentColor'
								})
							})
					})
				]
			}),
			!E && (0, n.jsx)('div', { className: g.boostContainerSeparator })
		]
	});
}
function R(e) {
	let {
			guildId: s,
			guildBoostSlotRecords: t,
			premiumSubscription: a,
			hasCancelableGuildBoostSlot: i,
			showAltText: o
		} = e,
		l = (0, r.e7)([u.Z], () => u.Z.getGuild(s), [s]);
	return (0, n.jsxs)('div', {
		className: g.appliedBoostContainer,
		children: [
			(0, n.jsx)(C.Z, {
				guildId: s,
				boostingVariant: !1
			}),
			t.map((e, s) =>
				(0, n.jsx)(
					p,
					{
						guildTier: null == l ? void 0 : l.premiumTier,
						guildBoostSlot: e,
						premiumSubscription: a,
						hasCancelableGuildBoostSlot: i,
						showAltText: o,
						isLastGuildBoostSlot: s === t.length - 1
					},
					e.id
				)
			)
		]
	});
}
function x(e) {
	let { guildId: s, appliedGuildBoosts: t, premiumSubscription: a } = e,
		i = (0, r.e7)([u.Z], () => u.Z.getGuild(s), [s]),
		o = T.default.fromTimestamp(Date.now());
	if (
		(t.forEach((e) => {
			(null == o || 0 > T.default.compare(e.id, o)) && (o = e.id);
		}),
		null == o)
	)
		return null;
	let l = E.Z.createFromServer(
		{
			id: T.default.fromTimestamp(Date.now()),
			subscription_id: a.id,
			canceled: !1,
			premium_guild_subscription: {
				id: o,
				guild_id: s
			},
			cooldown_ends_at: null
		},
		a
	);
	return (0, n.jsxs)('div', {
		className: g.appliedBoostContainer,
		children: [
			(0, n.jsx)(C.Z, {
				guildId: s,
				boostingVariant: !1
			}),
			t.map((e, s) =>
				(0, n.jsx)(
					p,
					{
						guildTier: null == i ? void 0 : i.premiumTier,
						guildBoostSlot: l,
						premiumSubscription: a,
						hasCancelableGuildBoostSlot: !1,
						showAltText: !1,
						isLastGuildBoostSlot: s === t.length - 1
					},
					s
				)
			)
		]
	});
}
function M(e) {
	let { appliedGuildBoosts: s, premiumSubscription: t } = e,
		i = a.useMemo(() => {
			let e = {};
			return (
				s.forEach((s) => {
					let t = s.guildId;
					!(t in e) && (e[t] = []), e[t].push(s);
				}),
				e
			);
		}, [s]);
	return null == t || 0 === s.length
		? null
		: (0, n.jsxs)('div', {
				className: g.wrapper,
				children: [
					(0, n.jsx)('div', {
						className: g.container,
						children: T.default.keys(i).map((e) =>
							(0, n.jsx)(
								x,
								{
									guildId: e,
									premiumSubscription: t,
									appliedGuildBoosts: i[e]
								},
								e
							)
						)
					}),
					(0, n.jsx)('div', { className: g.mainSeparator })
				]
			});
}
function f(e) {
	let { guildBoostSlots: s, premiumSubscription: t } = e,
		[i, r] = a.useState(!1),
		o = (0, _.Vp)();
	a.useEffect(() => {
		let e = -1;
		return (
			null != t &&
				(e = setInterval(() => {
					r((e) => !e);
				}, 3000)),
			() => {
				clearInterval(e);
			}
		);
	}, [t]);
	let { boostsByGuildId: l, numActiveGuildBoostSlots: d } = a.useMemo(() => {
		let e = 0,
			t = {};
		return (
			Object.keys(s).forEach((n) => {
				let a = s[n];
				if ((!(0, I.tl)(a) && e++, null != a.premiumGuildSubscription)) {
					let e = a.premiumGuildSubscription.guildId;
					!(e in t) && (t[e] = []), t[e].push(a);
				}
			}),
			{
				boostsByGuildId: t,
				numActiveGuildBoostSlots: e
			}
		);
	}, [s]);
	if (null == t || 0 === Object.keys(l).length) return null;
	let E = d > (0, c.G)(t, o);
	return (0, n.jsxs)('div', {
		className: g.wrapper,
		children: [
			(0, n.jsx)('div', {
				className: g.container,
				children: T.default.keys(l).map((e) =>
					(0, n.jsx)(
						R,
						{
							guildId: e,
							guildBoostSlotRecords: l[e],
							premiumSubscription: t,
							hasCancelableGuildBoostSlot: E,
							showAltText: i
						},
						e
					)
				)
			}),
			(0, n.jsx)('div', { className: g.mainSeparator })
		]
	});
}
