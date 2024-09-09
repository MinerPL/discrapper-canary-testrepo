var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(442837),
    l = t(481060),
    c = t(570140),
    d = t(355467),
    _ = t(179360),
    u = t(496929),
    E = t(821849),
    T = t(230711),
    S = t(497321),
    I = t(167354),
    N = t(15640),
    m = t(600164),
    C = t(925329),
    A = t(406174),
    g = t(810762),
    h = t(681833),
    O = t(856888),
    p = t(921801),
    R = t(246946),
    x = t(663389),
    f = t(351402),
    M = t(853872),
    D = t(78839),
    P = t(580130),
    L = t(626135),
    b = t(74538),
    Z = t(639056),
    v = t(52164),
    j = t(91430),
    B = t(474936),
    U = t(981631),
    G = t(526761),
    F = t(726985),
    y = t(689938),
    V = t(897821);
function Y() {
    return (0, n.jsx)(l.Card, {
        className: V.noItemsCard,
        type: l.Card.Types.CUSTOM,
        children: (0, n.jsxs)(m.Z, {
            align: m.Z.Align.CENTER,
            children: [
                (0, n.jsx)(C.Z, {
                    game: null,
                    size: C.Z.Sizes.SMALL,
                    className: V.noItemsIcon
                }),
                (0, n.jsx)('span', {
                    className: V.cardText,
                    children: y.Z.Messages.USER_SETTINGS_NO_SUBSCRIPTION_CREDIT
                })
            ]
        })
    });
}
function w() {
    let e = (0, o.e7)([P.Z], () => P.Z.getForApplication(B.RQ));
    return (
        a.useEffect(() => {
            (0, u.yD)(B.RQ);
        }, []),
        (0, n.jsxs)('section', {
            children: [
                (0, n.jsx)(l.Heading, {
                    variant: 'heading-md/bold',
                    className: V.accountCreditTitle,
                    children: y.Z.Messages.BILLING_SUBSCRIPTION_CREDIT
                }),
                (0, n.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    className: V.accountCreditDescription,
                    children: y.Z.Messages.BILLING_ACCOUNT_CREDIT_DESCRIPTION
                }),
                null != e && b.ZP.hasAccountCredit(e)
                    ? (0, n.jsx)(Z.Z, {
                          className: V.accountCredit,
                          entitlements: e
                      })
                    : (0, n.jsx)(Y, {})
            ]
        })
    );
}
function k() {
    return (0, n.jsx)('hr', { className: V.hr });
}
s.Z = function () {
    let e = (0, o.e7)([D.ZP], () => D.ZP.getPremiumTypeSubscription()),
        s = (0, I.Z)({ subscriptionFilter: (e) => j.eS.has(e.status) }),
        t = s.length > 1,
        i = (0, o.e7)([M.Z], () => (null != e && null != e.paymentSourceId ? M.Z.getPaymentSource(e.paymentSourceId) : null), [e]),
        u = (0, o.e7)([D.ZP], () => D.ZP.hasFetchedSubscriptions()),
        m = (0, o.e7)([f.Z], () => f.Z.isBusy),
        C = (0, N.V)(),
        P = (0, o.e7)([x.Z], () => x.Z.getSubsection()),
        b = (0, o.e7)([D.ZP], () => {
            var e, s;
            return null !== (s = null === (e = D.ZP.getActiveApplicationSubscriptions()) || void 0 === e ? void 0 : e.length) && void 0 !== s ? s : 0;
        }),
        Z = (0, o.e7)([D.ZP], () => {
            var e;
            return Object.values(null !== (e = D.ZP.getSubscriptions()) && void 0 !== e ? e : {})
                .filter((e) => e.type === U.NYc.GUILD)
                .filter((e) => e.status !== U.O0b.ENDED).length;
        });
    return (a.useEffect(
        () => (
            c.Z.wait(() => {
                (0, E.Y2)(), d.jg(), (0, _.X8)(), d.tZ();
            }),
            function () {
                T.Z.clearSubsection();
            }
        ),
        []
    ),
    R.Z.enabled)
        ? (0, n.jsx)(S.Z, {})
        : u && C
          ? P === G.cP
              ? (0, n.jsx)(g.Z, { onGoBack: () => T.Z.clearSubsection() })
              : P === G.XZ
                ? (0, n.jsx)(O.Z, { onGoBack: () => T.Z.clearSubsection() })
                : (0, n.jsx)('div', {
                      className: V.container,
                      children: (0, n.jsxs)('div', {
                          className: V.content,
                          children: [
                              t ? (0, n.jsx)(j.Yn, {}) : null,
                              null != e
                                  ? (0, n.jsx)(j.ZP, {
                                        subscription: e,
                                        paymentSource: i,
                                        busy: m,
                                        subscriptions: s
                                    })
                                  : (0, n.jsx)(j.MM, {}),
                              (0, n.jsx)(p.F, {
                                  setting: F.s6.SUBSCRIPTIONS_CREDITS,
                                  children: (0, n.jsx)(w, {})
                              }),
                              Z > 0 &&
                                  (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)(k, {}),
                                          (0, n.jsx)(A.Z, {
                                              count: Z,
                                              onClickManageSubscription: () => T.Z.setSection(U.oAB.SUBSCRIPTIONS, G.cP)
                                          })
                                      ]
                                  }),
                              b > 0 &&
                                  (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)(k, {}),
                                          (0, n.jsx)(h.Z, {
                                              count: b,
                                              onClickManageSubscription: () => {
                                                  T.Z.setSection(U.oAB.SUBSCRIPTIONS, G.XZ), L.default.track(U.rMx.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED);
                                              }
                                          })
                                      ]
                                  }),
                              (0, n.jsx)(k, {}),
                              null != e
                                  ? (0, n.jsx)(v.Z, {
                                        subscription: e,
                                        withOverheadSeparator: !1
                                    })
                                  : null
                          ]
                      })
                  })
          : (0, n.jsx)('div', {
                className: r()(V.container, V.loading),
                children: (0, n.jsx)(l.Spinner, {})
            });
};
