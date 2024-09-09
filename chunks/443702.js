t.d(s, {
    Z: function () {
        return D;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(512722),
    r = t.n(i),
    o = t(442837),
    l = t(481060),
    c = t(570140),
    d = t(355467),
    _ = t(230711),
    u = t(497321),
    E = t(231428),
    T = t(390954),
    S = t(89057),
    I = t(567038),
    N = t(921801),
    m = t(246946),
    C = t(594174),
    A = t(351402),
    g = t(853872),
    h = t(78839),
    O = t(706454),
    p = t(726985),
    R = t(981631),
    x = t(689938),
    f = t(451723);
class M extends a.PureComponent {
    componentDidMount() {
        c.Z.wait(() => {
            d.tZ(), d.jg();
        });
    }
    handleRedemptionRedirect() {
        _.Z.setSection(R.oAB.INVENTORY);
    }
    render() {
        let { syncing: e, hide: s, paymentSources: t, defaultPaymentSourceId: a, locale: i, premiumSubscription: r, isRemovingPaymentSource: o, isUpdatingPaymentSource: c } = this.props;
        return s
            ? (0, n.jsx)(u.Z, {})
            : (0, n.jsxs)('div', {
                  className: f.__invalid_userSettingsBilling,
                  children: [
                      e && 0 === Object.keys(t).length
                          ? (0, n.jsx)('div', {
                                className: f.syncing,
                                children: (0, n.jsx)(l.Spinner, {})
                            })
                          : (0, n.jsx)(N.F, {
                                setting: p.s6.BILLING_PAYMENT_METHODS,
                                children: (0, n.jsx)(T.Z, {
                                    paymentSources: t,
                                    defaultPaymentSourceId: a,
                                    premiumSubscriptionPaymentSourceId: null != r && r.status !== R.O0b.CANCELED ? r.paymentSourceId : null,
                                    locale: i,
                                    removing: o,
                                    submitting: c
                                })
                            }),
                      (0, n.jsx)(N.F, {
                          setting: p.s6.BILLING_TRANSACTION_HISTORY,
                          children: (0, n.jsx)('div', {
                              className: f.paymentHistory,
                              children: (0, n.jsxs)(l.HeadingLevel, {
                                  component: (0, n.jsx)(l.FormTitle, {
                                      tag: 'h1',
                                      children: x.Z.Messages.BILLING_PAYMENT_HISTORY
                                  }),
                                  children: [(0, n.jsx)(S.oQ, {}), (0, n.jsx)(E.Z, { locale: i })]
                              })
                          })
                      }),
                      (0, n.jsx)(l.Card, {
                          className: f.codeRedemptionRedirect,
                          type: l.Card.Types.CUSTOM,
                          children: x.Z.Messages.BILLING_CODE_REDEMPTION_REDIRECT.format({ onClick: this.handleRedemptionRedirect })
                      }),
                      (0, n.jsx)(I.Z, {})
                  ]
              });
    }
}
function D() {
    let e = (0, o.cj)([O.default, A.Z, g.Z, C.default, m.Z, h.ZP], () => {
        let e = h.ZP.getPremiumTypeSubscription(),
            s = C.default.getCurrentUser();
        return (
            r()(null != s, 'UserSettingsBilling: currentUser cannot be undefined'),
            {
                locale: O.default.locale,
                hide: m.Z.enabled,
                isClaimed: s.isClaimed(),
                isVerified: s.verified,
                premiumSubscription: e,
                defaultPaymentSourceId: g.Z.defaultPaymentSourceId,
                paymentSources: g.Z.paymentSources,
                syncing: A.Z.isSyncing,
                isRemovingPaymentSource: A.Z.isRemovingPaymentSource,
                isUpdatingPaymentSource: A.Z.isUpdatingPaymentSource
            }
        );
    });
    return (0, n.jsx)(M, { ...e });
}
