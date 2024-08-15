t.d(n, {
	c: function () {
		return o;
	}
});
var i = t(954955),
	c = t.n(i),
	r = t(544891),
	l = t(570140),
	u = t(486527),
	a = t(981631);
let o = c()(async (e) => {
	try {
		l.Z.dispatch({ type: 'EVENT_DIRECTORY_FETCH_START' });
		let n = await r.tn.get({
			url: a.ANM.DIRECTORY_CHANNEL_ENTRIES(e),
			query: { type: u.C2.GUILD_SCHEDULED_EVENT }
		});
		l.Z.dispatch({
			type: 'EVENT_DIRECTORY_FETCH_SUCCESS',
			channelId: e,
			entries: n.body
		});
	} catch (e) {
		l.Z.dispatch({ type: 'EVENT_DIRECTORY_FETCH_FAILURE' });
	}
}, 200);
