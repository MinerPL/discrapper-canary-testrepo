n.d(t, {
	z: function () {
		return l;
	}
});
var s = n(664751),
	a = n(544891),
	i = n(570140);
n(900849), n(719879);
var r = n(981631);
async function l(e) {
	i.Z.dispatch({
		type: 'DISCOVER_GUILDS_FETCH_START',
		guildIds: e
	});
	try {
		let { guilds: t } = (
			await a.tn.get({
				url: r.ANM.GUILD_DISCOVERY,
				query: s.stringify({ guild_ids: e }),
				oldFormErrors: !0
			})
		).body;
		i.Z.dispatch({
			type: 'DISCOVER_GUILDS_FETCH_SUCCESS',
			guilds: t
		});
	} catch (e) {
		i.Z.dispatch({ type: 'DISCOVER_GUILDS_FETCH_FAILURE' });
	}
}
