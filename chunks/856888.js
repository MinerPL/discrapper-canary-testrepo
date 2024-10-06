t.d(s, {
    Z: function () {
        return T;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(442837),
    r = t(481060),
    o = t(325997),
    l = t(78839),
    c = t(270144),
    d = t(851718),
    _ = t(238847),
    u = t(689938),
    E = t(917205);
function T(e) {
    let { onGoBack: s } = e,
        t = (0, i.Wu)([l.ZP], () => {
            var e, s;
            return null !==
                (s =
                    null === (e = l.ZP.getActiveApplicationSubscriptions()) || void 0 === e
                        ? void 0
                        : e.slice().sort((e, s) => {
                              var t, n, a, i;
                              return (null !== (a = null === (t = e.createdAt) || void 0 === t ? void 0 : t.getTime()) && void 0 !== a ? a : e.currentPeriodStart.getTime()) - (null !== (i = null === (n = s.createdAt) || void 0 === n ? void 0 : n.getTime()) && void 0 !== i ? i : s.currentPeriodStart.getTime());
                          })) && void 0 !== s
                ? s
                : [];
        }),
        { loading: T } = (0, c.sp)(t),
        { loadState: I } = (0, c.qz)(),
        N = T || I !== c.jd.LOADED,
        { enabled: A } = o.m.useExperiment({ location: 'UserSettingsApplicationSubscriptions' }),
        [C, m] = a.useState();
    return (
        null == C &&
            (C = (0, n.jsx)(S, {
                onBack: s,
                title: u.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAGE_TITLE
            })),
        (0, n.jsxs)('div', {
            children: [
                C,
                N
                    ? (0, n.jsx)(r.Spinner, {})
                    : (0, n.jsx)('div', {
                          className: E.subscriptionsContainer,
                          children: A
                              ? (0, n.jsx)(d.Z, {
                                    subscriptions: t,
                                    updateHeader: (e, s) => {
                                        m(
                                            (0, n.jsx)(S, {
                                                title: e,
                                                onBack: () => {
                                                    s(), m(void 0);
                                                }
                                            })
                                        );
                                    }
                                })
                              : t.map((e) => (0, n.jsx)(_.Z, { subscription: e }, e.id))
                      })
            ]
        })
    );
}
function S(e) {
    let { onBack: s, title: t } = e;
    return (0, n.jsxs)('div', {
        className: E.title,
        children: [
            (0, n.jsx)(r.Button, {
                look: r.Button.Looks.BLANK,
                onClick: s,
                size: r.Button.Sizes.ICON,
                children: (0, n.jsx)(r.ArrowLargeLeftIcon, { size: 'sm' })
            }),
            (0, n.jsx)(r.Heading, {
                variant: 'heading-lg/semibold',
                children: t
            })
        ]
    });
}
