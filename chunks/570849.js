a.d(t, {
	l: function () {
		return i;
	},
	u: function () {
		return r;
	}
});
var n = a(544891),
	s = a(570140),
	l = a(981631);
function i(e, t) {
	s.Z.dispatch({
		type: 'GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS',
		selectedTemplate: e,
		guildId: t
	});
}
async function r(e) {
	let t = (await n.tn.get({ url: l.ANM.GUILD_ROLE_SUBSCRIPTION_LISTING_TEMPLATES(e) })).body;
	null != t.templates &&
		s.Z.dispatch({
			type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES',
			templates: t.templates,
			guildId: e
		});
}
