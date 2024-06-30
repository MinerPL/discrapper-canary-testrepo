n.d(t, {
    I1: function () {
        return I;
    },
    eM: function () {
        return p;
    },
    rK: function () {
        return m;
    },
    rj: function () {
        return h;
    }
}), n(789020);
var r = n(544891), i = n(570140), a = n(367907), o = n(314897), s = n(271383), l = n(430824), u = n(626135), c = n(630388), d = n(45966), _ = n(290511), E = n(981631), f = n(372897);
function h(e) {
    u.default.track(E.rMx.GUILD_ONBOARDING_LOADED, {
        ...(0, a.hH)(e),
        has_new_prompts: !1,
        number_of_prompts: 0
    });
}
function p(e) {
    return i.Z.dispatch({
        type: 'GUILD_ONBOARDING_PROMPTS_FETCH_START',
        guildId: e
    }), r.tn.get({ url: E.ANM.GUILD_ONBOARDING(e) }).then(t => {
        let {body: n} = t, r = (0, _.cf)(n);
        return i.Z.dispatch({
            type: 'GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS',
            guildId: e,
            ...r
        }).then(() => r.prompts);
    }, t => (i.Z.dispatch({
        type: 'GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE',
        guildId: e
    }), t));
}
async function m(e) {
    var t, n;
    let r = o.default.getId(), i = (0, c.yE)(null !== (n = null === (t = s.ZP.getMember(e, r)) || void 0 === t ? void 0 : t.flags) && void 0 !== n ? n : 0, f.q.COMPLETED_ONBOARDING), a = l.Z.getGuild(e);
    if (null == a || !a.hasFeature(E.oNc.GUILD_ONBOARDING))
        return Promise.resolve();
    let u = d.Z.shouldFetchPrompts(e), _ = d.Z.getOnboardingPrompts(e);
    if (!u && _.length > 0)
        return _.every(e => !e.inOnboarding) ? (T(e), Promise.resolve()) : (!i && I(e), Promise.resolve());
    let h = await p(e);
    return Array.isArray(h) && h.every(e => !e.inOnboarding) ? (T(e), Promise.resolve()) : (!i && I(e), h);
}
function I(e) {
    i.Z.dispatch({
        type: 'GUILD_ONBOARDING_START',
        guildId: e
    });
}
function T(e) {
    u.default.track(E.rMx.GUILD_ONBOARDING_STEP_VIEWED, {
        ...(0, a.hH)(e),
        step: -2,
        required: !0
    }), u.default.track(E.rMx.GUILD_ONBOARDING_STEP_COMPLETED, {
        ...(0, a.hH)(e),
        step: -2,
        skipped: !1,
        is_final_step: !0,
        in_onboarding: !0
    });
}
