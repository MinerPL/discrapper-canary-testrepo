t.d(n, {
	P: function () {
		return a;
	}
});
var l = t(544891),
	s = t(570140),
	i = t(981631);
async function a(e) {
	s.Z.dispatch({
		type: 'GUILD_POPOUT_FETCH_START',
		guildId: e
	});
	try {
		let n = await l.tn.get({
			url: i.ANM.GUILD_PREVIEW(e),
			oldFormErrors: !0
		});
		s.Z.dispatch({
			type: 'GUILD_POPOUT_FETCH_SUCCESS',
			guildId: e,
			guild: n.body
		});
	} catch (n) {
		s.Z.dispatch({
			type: 'GUILD_POPOUT_FETCH_FAILURE',
			guildId: e
		});
	}
}
