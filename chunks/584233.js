n.d(t, {
	x: function () {
		return r;
	}
});
var i = n(447543),
	a = n(652898),
	s = n(430824);
async function r(e) {
	let { code: t } = e,
		r = (await (0, a.Z)(t)).invite;
	if (null == r || null == r.guild) return;
	if (
		(await (function () {
			return new Promise((e) => {
				s.Z.addConditionalChangeListener(() => !s.Z.isLoaded() || (e(), !1));
			});
		})(),
		null == s.Z.getGuild(r.guild.id))
	)
		return;
	let { default: l } = await Promise.resolve().then(n.bind(n, 17181));
	await l({ guildId: r.guild.id }), i.Z.transitionToInvite(r);
}
