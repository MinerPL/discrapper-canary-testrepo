var n = t(735250);
t(470079);
var a = t(481060),
	i = t(230711),
	r = t(63063),
	o = t(74538),
	l = t(937615),
	c = t(981631),
	d = t(474936),
	_ = t(689938),
	E = t(110938);
s.Z = function (e) {
	let { hasAppliedGuildBoosts: s, isUserPremiumTier2: t, hasGuildAffinitiesOrInGuild: u, subscriptionIsPausedOrPausePending: I } = e,
		{ subtitle: T, flavor: S } = (function (e) {
			let { hasAppliedGuildBoosts: s, isUserPremiumTier2: t, hasGuildAffinitiesOrInGuild: n, subscriptionIsPausedOrPausePending: a } = e;
			if (a) return { flavor: _.Z.Messages.GUILD_BOOSTING_DISABLED_FOR_PAUSED_SUBSCRIPTION_WITH_LINK.format({ onClick: () => i.Z.open(c.oAB.SUBSCRIPTIONS) }) };
			if (!n) return { subtitle: _.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_NO_JOINED_SERVER_SUBTITLE };
			if (s)
				return {
					subtitle: _.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_SUBTITLE_ACTIVE_BOOSTS,
					flavor: _.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_SUBTITLE_ACTIVE_BOOSTS_FLAVOR.format({ helpdeskArticle: r.Z.getArticleURL(c.BhN.GUILD_SUBSCRIPTIONS) })
				};
			let E = d.GP[d.Xh.PREMIUM_MONTH_GUILD],
				u = o.ZP.getDefaultPrice(E.id, t),
				I = (0, l.og)((0, l.T4)(u.amount, u.currency), E.interval, E.intervalCount);
			return {
				subtitle: t ? _.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_SUBTITLE_SUBBED_NO_ACTIVE_BOOSTS : _.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_SUBTITLE_NO_SUB_NO_ACTIVE_BOOSTS,
				flavor: _.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_SUBTITLE_NO_ACTIVE_BOOSTS_FLAVOR.format({ monthlyGuildBoostPrice: I })
			};
		})({
			hasAppliedGuildBoosts: s,
			isUserPremiumTier2: t,
			hasGuildAffinitiesOrInGuild: u,
			subscriptionIsPausedOrPausePending: I
		});
	return (0, n.jsxs)('div', {
		className: E.wrapper,
		children: [
			(0, n.jsx)(a.Heading, {
				variant: 'heading-lg/bold',
				className: E.subtitle,
				children: T
			}),
			null != S &&
				(0, n.jsx)(a.Text, {
					variant: 'text-sm/normal',
					children: S
				})
		]
	});
};
