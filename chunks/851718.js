t.d(s, {
    Z: function () {
        return d;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(823379),
    r = t(130991),
    o = t(630656),
    l = t(10970),
    c = t(689938);
function d(e) {
    let { subscriptions: s, updateHeader: t } = e,
        [d, _] = a.useState({ route: o.j.HOME }),
        { route: u } = d,
        E = (e) => {
            _({
                route: o.j.SWITCH_APP_PLANS,
                ...e
            }),
                t(c.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CHOOSE_A_SUBSCRIPTION_PLAN, () => {
                    _({ route: o.j.HOME });
                });
        };
    switch (u) {
        case o.j.HOME:
            return (0, n.jsx)(n.Fragment, {
                children: s.map((e) =>
                    (0, n.jsx)(
                        r.Z,
                        {
                            subscription: e,
                            navigateToSwitchPlan: E
                        },
                        e.id
                    )
                )
            });
        case o.j.SWITCH_APP_PLANS:
            let { route: T, ...S } = d;
            return (0, n.jsx)(l.Z, { ...S });
        default:
            (0, i.vE)(u);
    }
}
