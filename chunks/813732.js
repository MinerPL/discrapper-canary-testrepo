var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(355467),
    u = n(179360),
    m = n(496929),
    h = n(821849),
    g = n(230711),
    p = n(497321),
    x = n(167354),
    S = n(15640),
    T = n(600164),
    C = n(925329),
    _ = n(406174),
    E = n(810762),
    f = n(681833),
    I = n(856888),
    N = n(921801),
    A = n(246946),
    b = n(663389),
    v = n(351402),
    j = n(853872),
    O = n(78839),
    R = n(580130),
    P = n(626135),
    D = n(63063),
    y = n(74538),
    B = n(391077),
    L = n(639056),
    Z = n(52164),
    F = n(91430),
    M = n(474936),
    k = n(981631),
    w = n(526761),
    U = n(726985),
    V = n(388032),
    G = n(982241);
function Y() {
    return (0, i.jsx)(o.Card, {
        className: G.noItemsCard,
        type: o.Card.Types.CUSTOM,
        children: (0, i.jsxs)(T.Z, {
            align: T.Z.Align.CENTER,
            children: [
                (0, i.jsx)(C.Z, {
                    game: null,
                    size: C.Z.Sizes.SMALL,
                    className: G.noItemsIcon
                }),
                (0, i.jsx)('span', {
                    className: G.cardText,
                    children: V.intl.string(V.t['jy/hys'])
                })
            ]
        })
    });
}
function H() {
    let e = (0, a.e7)([R.Z], () => R.Z.getForApplication(M.CL));
    return (
        s.useEffect(() => {
            (0, m.yD)(M.CL);
        }, []),
        (0, i.jsxs)('section', {
            children: [
                (0, i.jsx)(o.Heading, {
                    variant: 'heading-md/bold',
                    className: G.accountCreditTitle,
                    children: V.intl.string(V.t['2GKrvr'])
                }),
                (0, i.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    className: G.accountCreditDescription,
                    children: V.intl.string(V.t.kNEjGh)
                }),
                null != e && y.ZP.hasAccountCredit(e)
                    ? (0, i.jsx)(L.Z, {
                          className: G.accountCredit,
                          entitlements: e
                      })
                    : (0, i.jsx)(Y, {})
            ]
        })
    );
}
function z() {
    return (0, i.jsx)('hr', { className: G.hr });
}
t.Z = function () {
    var e, t;
    let n = (0, a.e7)([O.ZP], () => O.ZP.getPremiumTypeSubscription()),
        r = (0, x.Z)({ subscriptionFilter: (e) => F.eS.has(e.status) }),
        m = r.length > 1,
        T = (0, a.e7)([j.Z], () => (null != n && null != n.paymentSourceId ? j.Z.getPaymentSource(n.paymentSourceId) : null), [n]),
        C = (0, a.e7)([O.ZP], () => O.ZP.hasFetchedSubscriptions()),
        y = (0, a.e7)([v.Z], () => v.Z.isBusy),
        L = (0, S.V)(),
        M = (0, a.e7)([b.Z], () => b.Z.getSubsection()),
        Y = (0, a.e7)([O.ZP], () => {
            var e, t;
            return null !== (t = null === (e = O.ZP.getActiveApplicationSubscriptions()) || void 0 === e ? void 0 : e.length) && void 0 !== t ? t : 0;
        }),
        W = (0, a.e7)([O.ZP], () => {
            var e;
            return Object.values(null !== (e = O.ZP.getSubscriptions()) && void 0 !== e ? e : {})
                .filter((e) => e.type === k.NYc.GUILD)
                .filter((e) => e.status !== k.O0b.ENDED).length;
        }),
        K = (0, a.e7)([R.Z], () => R.Z.getFractionalPremium(!1)),
        q = (0, a.e7)([R.Z], () => R.Z.getUnactivatedFractionalPremiumUnits()),
        Q = null !== n ? n.currentPeriodEnd : void 0,
        X = K.length > 0 || q.length > 0;
    if (
        (s.useEffect(
            () => (
                c.Z.wait(() => {
                    (0, h.Y2)(), d.jg(), (0, u.X8)(), d.tZ();
                }),
                function () {
                    g.Z.clearSubsection();
                }
            ),
            []
        ),
        A.Z.enabled)
    )
        return (0, i.jsx)(p.Z, {});
    if (!C || !L)
        return (0, i.jsx)('div', {
            className: l()(G.container, G.loading),
            children: (0, i.jsx)(o.Spinner, {})
        });
    if (M === w.cP) return (0, i.jsx)(E.Z, { onGoBack: () => g.Z.clearSubsection() });
    if (M === w.XZ) return (0, i.jsx)(I.Z, { onGoBack: () => g.Z.clearSubsection() });
    return (0, i.jsx)('div', {
        className: G.container,
        children: (0, i.jsxs)('div', {
            className: G.content,
            children: [
                m ? (0, i.jsx)(F.Yn, {}) : null,
                null != n
                    ? (0, i.jsx)(F.ZP, {
                          subscription: n,
                          paymentSource: T,
                          busy: y,
                          subscriptions: r
                      })
                    : (0, i.jsx)(F.MM, {}),
                X &&
                    ((e = q),
                    (t = Q),
                    (0, i.jsxs)('section', {
                        children: [
                            (0, i.jsx)(o.Heading, {
                                variant: 'heading-md/bold',
                                className: G.accountCreditTitle,
                                children: V.intl.string(V.t.Obre8v)
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                className: G.accountCreditDescription,
                                children: V.intl.format(V.t['7Zi06e'], { helpCenterLink: D.Z.getArticleURL(k.BhN.FRACTIONAL_PREMIUM_ABOUT) })
                            }),
                            (0, i.jsx)(B.Z, {
                                className: G.accountCredit,
                                unactivatedUnits: e,
                                activationDate: t
                            })
                        ]
                    })),
                (0, i.jsx)(N.F, {
                    setting: U.s6.SUBSCRIPTIONS_CREDITS,
                    children: (0, i.jsx)(H, {})
                }),
                W > 0 &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(z, {}),
                            (0, i.jsx)(_.Z, {
                                count: W,
                                onClickManageSubscription: () => g.Z.setSection(k.oAB.SUBSCRIPTIONS, w.cP)
                            })
                        ]
                    }),
                Y > 0 &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(z, {}),
                            (0, i.jsx)(f.Z, {
                                count: Y,
                                onClickManageSubscription: () => {
                                    g.Z.setSection(k.oAB.SUBSCRIPTIONS, w.XZ), P.default.track(k.rMx.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED);
                                }
                            })
                        ]
                    }),
                (0, i.jsx)(z, {}),
                null != n
                    ? (0, i.jsx)(Z.Z, {
                          subscription: n,
                          withOverheadSeparator: !1
                      })
                    : null
            ]
        })
    });
};
