n.d(t, {
    Mu: function () {
        return c;
    },
    iM: function () {
        return u;
    }
});
var r = n(442837),
    i = n(987170),
    a = n(594174),
    s = n(111361),
    o = n(474936);
let l = (0, i.Z)({
    id: '2024-08_premium_user_profile_upsell_desktop',
    label: 'User Profile Upsell',
    kind: 'user',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function u(e) {
    let t = s.ZP.isPremium(a.default.getCurrentUser(), o.p9.TIER_2);
    return l.getCurrentConfig(
        { location: e },
        {
            autoTrackExposure: !t,
            disable: t
        }
    ).enabled;
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, r.e7)([a.default], () => s.ZP.isPremium(a.default.getCurrentUser(), o.p9.TIER_2));
    return l.useExperiment(
        { location: e },
        {
            autoTrackExposure: !n && !t,
            disable: n || t
        }
    ).enabled;
}
