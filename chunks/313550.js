n.d(t, {
	Z: function () {
		return o;
	}
}),
	n(47120),
	n(653041);
var i = n(470079),
	a = n(468988),
	s = n(817460),
	r = n(570533),
	l = n(689938);
function o(e) {
	let { includeFlairAsBenefit: t, listing: n, guildId: o } = e,
		c = 0,
		u = 0;
	for (let e of n.role_benefits.benefits) (0, s.rC)(e) ? (c += 1) : (0, s.lL)(e) && (u += 1);
	let d = n.role_id,
		_ = (0, r.Z)(o).filter((e) => e.roles.includes(d)).length;
	return i.useMemo(() => {
		let e = [];
		return (
			!0 === t && e.push(l.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_VISUAL_FLAIR),
			0 !== c &&
				e.push(
					l.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_EXCLUSIVE_CHANNELS_SUBTITLE.format({
						channelCount: c
					})
				),
			0 !== u &&
				e.push(
					l.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format({
						benefitCount: u
					})
				),
			0 !== _ &&
				e.push(
					l.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_EMOJI_SUBTITLE.format({ emojiCount: _ })
				),
			new a.Z(e)
		);
	}, [c, u, _, t]);
}
