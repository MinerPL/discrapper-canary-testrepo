n.d(t, {
    j: function () {
        return s;
    }
});
let i = (0, n(818083).B)({
        kind: 'user',
        id: '2024-07_cash_app_pay_awareness_campaign',
        label: 'cash_app_pay_awareness',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 0,
                label: 'Users will not see the nagbar',
                config: { enabled: !1 }
            },
            {
                id: 1,
                label: 'Users will see the nagbar',
                config: { enabled: !0 }
            },
            {
                id: 2,
                label: 'Bypass eligibility check (testing only)',
                config: { enabled: !0 }
            }
        ]
    }),
    s = () => {
        let { enabled: e } = i.getCurrentConfig({ location: 'cash_app_pay_awareness_nagbar' });
        return e;
    };
