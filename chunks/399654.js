n.d(t, {
	a: function () {
		return r;
	}
});
var i = n(544891),
	a = n(570140),
	o = n(706454),
	l = n(70956),
	c = n(844439),
	d = n(981631);
let m = 10 * l.Z.Millis.MINUTE;
async function r(e) {
	let { channelId: t, location: n, withCommands: l } = e,
		r = Date.now(),
		u = c.ZP.getFetchState({
			location: n,
			channelId: t,
			withCommands: l
		}),
		s = c.ZP.getLastFetchTimeMs({
			location: n,
			channelId: t,
			withCommands: l
		});
	if (u !== c.M.FETCHING && (null == s || !(s + m > r))) {
		a.Z.dispatch({
			type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS',
			location: n,
			channelId: t,
			withCommands: l
		});
		try {
			let e = await i.tn.get({
				url: d.ANM.APP_RECOMMENDATIONS,
				query: {
					locale: o.default.locale,
					channel_id: t,
					location: n,
					with_commands: l
				}
			});
			a.Z.dispatch({
				type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS',
				location: n,
				channelId: t,
				recommendations: e.body,
				withCommands: l
			});
		} catch (e) {
			a.Z.dispatch({
				type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE',
				location: n,
				channelId: t,
				withCommands: l
			});
		}
	}
}
