n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(47120),
    n(411104);
var r = n(735250),
    a = n(470079),
    l = n(120356),
    i = n.n(l),
    o = n(399606),
    s = n(544891),
    c = n(481060),
    u = n(355467),
    d = n(78839),
    h = n(709054),
    m = n(246992),
    x = n(981631),
    f = n(535271),
    g = n(384712);
let p = [
        {
            label: 'Nitro Monthly',
            value: '511651880837840896'
        },
        {
            label: 'Nitro Yearly',
            value: '511651885459963904'
        },
        {
            label: 'Nitro Classic Monthly',
            value: '511651871736201216'
        },
        {
            label: 'Nitro Classic Yearly',
            value: '511651876987469824'
        },
        {
            label: 'Basic Monthly',
            value: '978380692553465866'
        },
        {
            label: 'Basic Yearly',
            value: '1024422698568122368'
        },
        {
            label: 'Reverse Trial 1-week',
            value: '1267968635301789696'
        },
        {
            label: 'Reverse Trial 2-week',
            value: '1267969164312576000'
        }
    ],
    b = {
        [x.O0b.UNPAID]: 'Unpaid',
        [x.O0b.ACTIVE]: 'Active',
        [x.O0b.PAST_DUE]: 'Past Due',
        [x.O0b.CANCELED]: 'Canceled',
        [x.O0b.ENDED]: 'Ended',
        [x.O0b.ACCOUNT_HOLD]: 'Account Hold',
        [x.O0b.BILLING_RETRY]: 'Billing Retry',
        [x.O0b.PAUSED]: 'Paused',
        [x.O0b.PAUSE_PENDING]: 'Pause Pending'
    },
    v = [
        {
            label: 'Unpaid',
            value: x.O0b.UNPAID
        },
        {
            label: 'Active',
            value: x.O0b.ACTIVE
        },
        {
            label: 'Past Due',
            value: x.O0b.PAST_DUE
        },
        {
            label: 'Canceled',
            value: x.O0b.CANCELED
        },
        {
            label: 'Ended',
            value: x.O0b.ENDED
        },
        {
            label: 'Account Hold',
            value: x.O0b.ACCOUNT_HOLD
        },
        {
            label: 'Billing Retry',
            value: x.O0b.BILLING_RETRY
        },
        {
            label: 'Paused',
            value: x.O0b.PAUSED
        },
        {
            label: 'Pause Pending',
            value: x.O0b.PAUSE_PENDING
        }
    ],
    _ = {
        '511651880837840896': 'Nitro Monthly',
        '511651885459963904': 'Nitro Yearly',
        '511651871736201216': 'Nitro Classic Monthly',
        '511651876987469824': 'Nitro Classic Yearly',
        '978380692553465866': 'Basic Monthly',
        '1024422698568122368': 'Basic Yearly'
    };
function C() {
    let [e, t] = a.useState('511651880837840896'),
        n = (0, o.e7)([d.ZP], () => d.ZP.getPremiumSubscription()),
        l = async () => {
            await s.tn.post({
                url: '/debug/subscription',
                body: { plan_id: e }
            }),
                await (0, u.jg)();
        },
        h = async () => {
            await s.tn.del('/debug/subscription'), await (0, u.jg)();
        };
    return (0, r.jsx)(c.ScrollerThin, {
        className: i()(f.panel),
        children: (0, r.jsxs)('div', {
            className: g.panelInner,
            children: [
                (0, r.jsx)(c.Text, {
                    style: { marginBottom: '16px' },
                    variant: 'text-lg/bold',
                    children: 'Manage Subscription'
                }),
                (0, r.jsxs)('section', {
                    className: g.buttons,
                    children: [
                        null == n &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(c.Text, {
                                        variant: 'text-md/normal',
                                        children: ' Subscription Type'
                                    }),
                                    (0, r.jsx)(c.Select, {
                                        serialize: (e) => e,
                                        isSelected: (t) => t === e,
                                        options: p,
                                        select: t,
                                        popoutLayerContext: m.O$
                                    }),
                                    (0, r.jsx)(c.Button, {
                                        size: c.Button.Sizes.SMALL,
                                        onClick: l,
                                        children: 'Create Subscription'
                                    })
                                ]
                            }),
                        (0, r.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: h,
                            children: 'Delete Subscription'
                        })
                    ]
                }),
                null != n && (0, r.jsx)(j, { subscription: n })
            ]
        })
    });
}
function j(e) {
    var t;
    let { subscription: n } = e,
        a = (e) => {
            if ((null == e && (e = n.status), e in b)) return b[e];
            throw Error('Unknown status');
        },
        l = async (e) => {
            await s.tn.patch({
                url: '/debug/subscription',
                body: { subscription_status: e }
            }),
                await (0, u.jg)();
        },
        o = async (e) => {
            let t = new Date(e),
                r = h.default.fromTimestamp(t.getTime());
            await s.tn.patch({
                url: '/debug/subscription',
                body: {
                    subscription_status: n.status,
                    premium_streak_started_at: r
                }
            }),
                await (0, u.jg)();
        },
        d =
            n.planIdFromItems in
            {
                '978380692553465866': !0,
                '1024422698568122368': !0
            };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.Text, {
                style: { marginTop: '15px' },
                variant: 'text-md/normal',
                children: 'Existing Subscription'
            }),
            (0, r.jsxs)('div', {
                className: i()(g.card, d ? g.gradientWrapperTier0 : g.gradientWrapperTier2),
                children: [
                    (0, r.jsxs)(c.Text, {
                        variant: 'text-md/normal',
                        children: [
                            ' Subscription Type: ',
                            (() => {
                                let e = n.planIdFromItems;
                                if (null == e) throw Error('No plan id');
                                if (e in _) return _[e];
                                throw Error('Unknown plan id');
                            })(),
                            ' '
                        ]
                    }),
                    (0, r.jsxs)(c.Text, {
                        variant: 'text-md/normal',
                        children: [' Subscription ID ', n.id, ' ']
                    }),
                    (0, r.jsxs)(c.Text, {
                        style: { marginBottom: '15px' },
                        variant: 'text-md/normal',
                        children: ['Subscription Status: ', a()]
                    }),
                    (0, r.jsx)(c.Select, {
                        serialize: (e) => a(e),
                        isSelected: (e) => e === n.status,
                        options: v,
                        select: l,
                        popoutLayerContext: m.O$
                    }),
                    (0, r.jsx)(c.FormSection, {
                        title: 'Override Premium Streak Start Date',
                        tag: c.FormTitleTags.H3,
                        className: f.premiumStreakOverride,
                        children: (0, r.jsx)('input', {
                            type: 'date',
                            value: null === (t = n.premiumSince) || void 0 === t ? void 0 : t.toISOString().substring(0, 10),
                            onChange: (e) => o(e.target.value)
                        })
                    })
                ]
            })
        ]
    });
}
