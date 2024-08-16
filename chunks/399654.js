n.d(t, {
    a: function () {
        return m;
    }
});
var i = n(544891),
    a = n(570140),
    o = n(706454),
    l = n(70956),
    d = n(844439),
    c = n(981631);
let r = 10 * l.Z.Millis.MINUTE;
async function m(e) {
    let { channelId: t, location: n, withCommands: l } = e,
        m = Date.now(),
        u = d.ZP.getFetchState({
            location: n,
            channelId: t,
            withCommands: l
        }),
        s = d.ZP.getLastFetchTimeMs({
            location: n,
            channelId: t,
            withCommands: l
        });
    if (u !== d.M.FETCHING && (null == s || !(s + r > m))) {
        a.Z.dispatch({
            type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS',
            location: n,
            channelId: t,
            withCommands: l
        });
        try {
            let e = await i.tn.get({
                url: c.ANM.APP_RECOMMENDATIONS,
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
