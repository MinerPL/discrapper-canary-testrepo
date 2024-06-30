e.d(t, {
    $J: function () {
        return A;
    },
    He: function () {
        return s;
    },
    av: function () {
        return E;
    },
    df: function () {
        return N;
    },
    hY: function () {
        return R;
    },
    oL: function () {
        return O;
    },
    wE: function () {
        return l;
    },
    wZ: function () {
        return _;
    },
    yk: function () {
        return u;
    },
    zo: function () {
        return T;
    }
});
var a = e(544891), i = e(570140), o = e(728345), r = e(981631), c = e(674563);
async function s(n) {
    await a.tn.post({ url: r.ANM.CREATOR_MONETIZATION_ENABLE_REQUESTS(n) });
}
async function u(n) {
    return (await a.tn.get({ url: r.ANM.CREATOR_MONETIZATION_ELIGIBILITY(n) })).body;
}
async function l(n, t) {
    await a.tn.post({ url: r.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS(n, t) });
}
async function T(n) {
    await a.tn.post({ url: r.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(n) });
}
async function _(n) {
    return (await a.tn.get({ url: r.ANM.CREATOR_MONETIZATION_MARKETING_ONBOARDING(n) })).body;
}
async function E(n) {
    try {
        let t = await a.tn.get({
            url: r.ANM.CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY,
            query: { nag_guild_ids: n }
        });
        i.Z.dispatch({
            type: 'CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS',
            eligibleGuilds: t.body.eligible_guilds
        });
    } catch (n) {
    }
}
async function N(n, t) {
    let e = (await a.tn.post({
        url: r.ANM.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(n),
        body: { team_id: t }
    })).body;
    return null != e.application && i.Z.dispatch({
        type: 'APPLICATION_FETCH_SUCCESS',
        application: e.application
    }), e;
}
function R(n) {
    return a.tn.post({ url: r.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(n) });
}
function A(n) {
    return a.tn.post({ url: r.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(n) });
}
async function I(n) {
    await a.tn.post({
        url: r.ANM.CREATOR_MONETIZATION_REMOVE_MONETIZATION(n),
        body: {}
    });
}
async function O(n) {
    return await I(n), await o.Z.getApplicationsForGuild(n, {
        type: c.wW.GUILD_ROLE_SUBSCRIPTIONS,
        includeTeam: !0
    });
}
