n.d(t, {
    g: function () {
        return u;
    }
}), n(411104);
var r = n(544891), i = n(570140), a = n(881052), o = n(70956), s = n(672458), l = n(981631);
async function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    if (c > 3)
        throw Error('Unable to search guild members after max retries');
    let {
        autoRetry: d = !0,
        signal: _
    } = n;
    try {
        var E;
        let a = await r.tn.post({
            url: l.ANM.GUILD_MEMBER_SEARCH(e),
            body: t,
            signal: _
        });
        if (a.status === s.t) {
            if (null == a.body.retry_after)
                throw Error('Indexing response did not include retry_after');
            if (!d)
                throw Error('Indexing response received but autoRetry is disabled');
            return await i.Z.dispatch({
                type: 'MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING',
                guildId: e
            }), await new Promise(e => setTimeout(e, a.body.retry_after * o.Z.Millis.SECOND)), u(e, t, n, c + 1);
        }
        return {
            type: s.d.SUCCESSFUL_QUERY,
            body: {
                guild_id: (E = a.body).guild_id,
                members: E.members,
                page_result_count: E.page_result_count,
                total_result_count: E.total_result_count
            }
        };
    } catch (t) {
        let e = new a.Hx(t);
        return {
            type: s.d.ERROR,
            body: e
        };
    }
}
