t.d(n, {
    a: function () {
        return u;
    }
});
var i = t(544891),
    l = t(570140),
    a = t(706454),
    o = t(70956),
    r = t(844439),
    c = t(981631);
let d = 10 * o.Z.Millis.MINUTE;
async function u(e) {
    let { channelId: n, location: t, withCommands: o } = e,
        u = Date.now(),
        s = r.ZP.getFetchState({
            location: t,
            channelId: n,
            withCommands: o
        }),
        m = r.ZP.getLastFetchTimeMs({
            location: t,
            channelId: n,
            withCommands: o
        });
    if (s !== r.M.FETCHING && (null == m || !(m + d > u))) {
        l.Z.dispatch({
            type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS',
            location: t,
            channelId: n,
            withCommands: o
        });
        try {
            var E;
            let e = await i.tn.get({
                url: c.ANM.APP_RECOMMENDATIONS,
                query: {
                    locale: a.default.locale,
                    channel_id: n,
                    location: t,
                    with_commands: o
                }
            });
            l.Z.dispatch({
                type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS',
                location: t,
                channelId: n,
                recommendations: null !== (E = e.body) && void 0 !== E ? E : [],
                withCommands: o
            });
        } catch (e) {
            l.Z.dispatch({
                type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE',
                location: t,
                channelId: n,
                withCommands: o
            });
        }
    }
}
