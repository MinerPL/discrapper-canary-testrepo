n.d(t, {
    SR: function () {
        return c;
    },
    Vk: function () {
        return o;
    },
    r2: function () {
        return u;
    },
    xl: function () {
        return d;
    }
});
var s = n(544891), a = n(570140), i = n(981631);
let r = 3628800000;
function l(e, t) {
    let n = new Date(), a = new Date(n.getTime() - (n.getDay() + 1) * 86400000 - r);
    return s.tn.get({
        url: t(e),
        query: {
            start: a.toISOString(),
            end: n.toISOString(),
            interval: 2
        },
        oldFormErrors: !0
    });
}
function o(e) {
    return l(e, i.ANM.GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW).then(t => {
        let {body: n} = t;
        a.Z.dispatch({
            type: 'GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_SUCCESS',
            guildId: e,
            stats: n.slice(0, 2)
        });
    }, e => {
        a.Z.dispatch({
            type: 'GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_FAILURE',
            error: e.body
        });
    });
}
function c(e) {
    return l(e, i.ANM.GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW).then(t => {
        let {body: n} = t;
        a.Z.dispatch({
            type: 'GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_SUCCESS',
            guildId: e,
            stats: n.slice(0, 2)
        });
    }, e => {
        a.Z.dispatch({
            type: 'GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_FAILURE',
            error: e.body
        });
    });
}
function d(e) {
    return l(e, i.ANM.GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION).then(t => {
        let {body: n} = t, s = n.filter(e => e.hasOwnProperty('pct_retained')).map(e => {
                let {
                    interval_start_timestamp: t,
                    pct_retained: n,
                    ...s
                } = e;
                return {
                    interval_start_timestamp: t,
                    pct_retained: n
                };
            });
        a.Z.dispatch({
            type: 'GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_SUCCESS',
            guildId: e,
            stats: s.slice(0, 2)
        });
    }, e => {
        a.Z.dispatch({
            type: 'GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_FAILURE',
            error: e.body
        });
    });
}
function u(e) {
    return s.tn.get({ url: i.ANM.GUILD_ANALYTICS_MEMBER_INSIGHTS(e) }).then(t => {
        a.Z.dispatch({
            type: 'GUILD_ANALYTICS_MEMBER_INSIGHTS_FETCH_SUCCESS',
            guildId: e,
            hasAccessRate: t.body.has_access_rate,
            accessRate: t.body.access_rate
        });
    }, () => {
    });
}
