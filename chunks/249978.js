n.d(t, {
    U: function () {
        return r;
    },
    v: function () {
        return a;
    }
});
var i = n(818083),
    l = n(987338);
let a = (0, i.B)({
        kind: 'user',
        id: '2024-10_user_profile_panel_recent_activity_status',
        label: 'User Profile Panel Recent Activity Status',
        commonTriggerPoint: l.$P.DM_GDM_LIST_RENDER,
        defaultConfig: { recentActivityStatusEnabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Recent activity in user profile panels and status in private channels list enabled',
                config: { recentActivityStatusEnabled: !0 }
            }
        ]
    }),
    r = (e) => {
        let { location: t } = e;
        return a.useExperiment({ location: t });
    };
