n.d(t, {
    OW: function () {
        return i;
    },
    fR: function () {
        return s;
    },
    sg: function () {
        return a;
    }
});
var r = n(818083);
let i = (0, r.B)({
        kind: 'user',
        id: '2024-03_nitro_tenure_reward_card',
        label: 'Nitro Tenure Reward Card',
        defaultConfig: { enableNitroTenureRewardCard: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enables the nitro tenure reward card for users',
                config: { enableNitroTenureRewardCard: !0 }
            }
        ]
    }),
    a = (0, r.B)({
        kind: 'user',
        id: '2024-02_nitro_tenure_rewards',
        label: 'Nitro Tenure Reward Experiment',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enables the nitro tenure reward UI for the user',
                config: { enabled: !0 }
            }
        ]
    }),
    s = (0, r.B)({
        kind: 'user',
        id: '2024-08_nitro_tenure_rewards_backfill',
        label: 'Nitro Tenure Reward Backfill',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enables the nitro tenure reward backfill for the user',
                config: { enabled: !0 }
            }
        ]
    });
