l.d(n, {
    AF: function () {
        return A;
    },
    hd: function () {
        return L;
    },
    zz: function () {
        return C;
    }
}),
    l(47120);
var i = l(735250),
    t = l(470079),
    s = l(905322),
    a = l(200207),
    r = l(269210),
    o = l(442837),
    d = l(481060),
    u = l(607070),
    c = l(100527),
    m = l(906732),
    p = l(87484),
    v = l(171246),
    h = l(930155),
    S = l(889989),
    x = l(696906),
    g = l(55563),
    I = l(551428),
    N = l(626135),
    T = l(768581),
    j = l(73346),
    R = l(624138),
    f = l(591759),
    b = l(601911),
    O = l(110742),
    k = l(147496),
    E = l(680005),
    P = l(519896),
    M = l(981631),
    _ = l(689938),
    Z = l(637714);
function A(e) {
    let { app: n, onlySubscribeServerSubForGuildId: l, subscriptions: a, otps: r } = e,
        p = t.useMemo(() => (0, b.y)(n, 100), [n]),
        { bot: h } = n,
        S = t.useMemo(() => {
            var e;
            if ((null == h ? void 0 : h.banner) == null) return;
            let n = (0, T.aN)({
                id: h.id,
                banner: h.banner,
                size: 1024,
                canAnimate: !1
            });
            return null != n && null !== (e = f.Z.toURLSafe(n)) && void 0 !== e ? e : void 0;
        }, [h]),
        x = t.useMemo(() => {
            var e;
            if ((null == h ? void 0 : h.banner) == null) return;
            let n = (0, T.aN)({
                id: h.id,
                banner: h.banner,
                size: 1024,
                canAnimate: !0
            });
            return null != n && null !== (e = f.Z.toURLSafe(n)) && void 0 !== e ? e : void 0;
        }, [h]),
        g = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        I = t.useMemo(() => [...a.map((e) => e.skuId), ...r.map((e) => e.skuId)], [a, r]),
        { analyticsLocations: j } = (0, m.ZP)(c.Z.APP_STOREFRONT);
    return (
        t.useEffect(() => {
            0 !== I.length &&
                N.default.track(M.rMx.VIEW_PREMIUM_APP_STOREFRONT, {
                    application_id: n.id,
                    sku_ids: I,
                    location_stack: j
                });
        }, [j, n.id, I]),
        (0, i.jsxs)('div', {
            className: Z.wrapper,
            children: [
                (0, i.jsx)(s.j, {
                    title: n.name,
                    iconSrc: p,
                    backgroundSrc: S,
                    animatedBackgroundSrc: x,
                    prefersReducedMotion: g
                }),
                a.length > 0 &&
                    (0, i.jsxs)('div', {
                        className: Z.productSection,
                        children: [
                            (0, i.jsx)(d.Heading, {
                                variant: 'heading-lg/semibold',
                                color: 'header-secondary',
                                children: _.Z.Messages.STOREFRONT_APP_SUBSCRIPTIONS
                            }),
                            (0, i.jsx)('div', {
                                className: Z.productList,
                                children: a.map((e) =>
                                    (0, i.jsx)(
                                        C,
                                        {
                                            appId: n.id,
                                            onlySubscribeServerSubForGuildId: l,
                                            listing: e,
                                            subscriptionType: (0, v.KW)(e.skuFlags) ? 'user' : 'guild'
                                        },
                                        e.id
                                    )
                                )
                            })
                        ]
                    }),
                r.length > 0 &&
                    (0, i.jsxs)('div', {
                        className: Z.productSection,
                        children: [
                            (0, i.jsx)(d.Heading, {
                                variant: 'heading-lg/semibold',
                                color: 'header-secondary',
                                children: _.Z.Messages.STOREFRONT_APP_PRODUCTS
                            }),
                            (0, i.jsx)('div', {
                                className: Z.productList,
                                children: r.map((e) =>
                                    (0, i.jsx)(
                                        L,
                                        {
                                            skuId: e.skuId,
                                            appId: n.id
                                        },
                                        e.id
                                    )
                                )
                            })
                        ]
                    }),
                (0, i.jsx)(d.Text, {
                    variant: 'text-md/normal',
                    className: Z.legalText,
                    children:
                        null != n.termsOfServiceUrl && null != n.privacyPolicyUrl
                            ? _.Z.Messages.STOREFRONT_VIEW_TOS_PP.format({
                                  tosUrl: n.termsOfServiceUrl,
                                  ppUrl: n.privacyPolicyUrl
                              })
                            : _.Z.Messages.STOREFRONT_NO_TOS_PP
                })
            ]
        })
    );
}
function C(e) {
    var n;
    let { appId: l, onlySubscribeServerSubForGuildId: s, listing: a, subscriptionType: u, onDetails: c } = e,
        { data: m } = (0, h.H)(a.skuId),
        p = (0, o.e7)([g.Z], () => g.Z.getParentSKU(a.skuId), [a.skuId]),
        { openModal: v } = (0, x.Z)({
            guildId: s,
            groupListingId: null == p ? void 0 : p.id,
            showBenefitsFirst: !1,
            analyticsLocation: M.Sbl.APP_STOREFRONT,
            skuId: a.skuId
        }),
        I = t.useMemo(() => {
            var e;
            return null === (e = a.benefits) || void 0 === e
                ? void 0
                : e.map((e) => ({
                      id: e.id,
                      title: e.name,
                      description: e.description,
                      icon: (0, S.n)(l, e.icon)
                  }));
        }, [l, a.benefits]),
        N = t.useMemo(() => {
            var e;
            return null != a.thumbnail && null !== (e = f.Z.toURLSafe((0, j._W)(l, a.thumbnail, 256))) && void 0 !== e ? e : void 0;
        }, [l, a.thumbnail]),
        T = t.useCallback(
            (e) =>
                null == m || 0 === m.length
                    ? null
                    : (0, i.jsx)(E.p, {
                          ...e,
                          appId: l,
                          groupListingId: null == p ? void 0 : p.id,
                          subscriptionType: u,
                          guildId: s,
                          skuId: a.skuId,
                          subscriptionPlan: m[0]
                      }),
            [l, null == p ? void 0 : p.id, u, s, a.skuId, m]
        );
    return null == m
        ? null
        : (0, i.jsx)(r.U, {
              title: a.summary,
              description: null !== (n = a.description) && void 0 !== n ? n : void 0,
              imgSrc: N,
              subscriptionType: u,
              onPurchase: v,
              renderPurchaseButton: T,
              benefitItems:
                  null != I
                      ? I.map((e) =>
                            (0, i.jsx)(
                                r.G,
                                {
                                    name: e.title,
                                    icon: e.icon
                                },
                                e.id
                            )
                        )
                      : void 0,
              onDetails:
                  null != c
                      ? c
                      : null != I
                        ? () => {
                              (0, d.openModal)((e) => {
                                  let { onClose: n, transitionState: t } = e;
                                  return (0, i.jsx)(P.SubscriptionDetailsModal, {
                                      appId: l,
                                      groupListingId: null == p ? void 0 : p.id,
                                      subscriptionType: u,
                                      onClose: n,
                                      skuId: a.skuId,
                                      transitionState: t
                                  });
                              });
                          }
                        : void 0
          });
}
function L(e) {
    var n, l, t, s;
    let { skuId: r, appId: u, onDetails: v } = e,
        { analyticsLocations: h } = (0, m.ZP)(c.Z.APP_STOREFRONT),
        S = (0, o.e7)([I.Z], () => I.Z.getForSKU(r), [r]),
        x = (0, o.e7)([g.Z], () => g.Z.get(r), [r]),
        N = (0, O.M)(r);
    if (null == x) return null;
    let T = null !== (l = x.name) && void 0 !== l ? l : '',
        b = null !== (t = null == S ? void 0 : null === (n = S.description) || void 0 === n ? void 0 : n.trim()) && void 0 !== t ? t : void 0,
        P = (null == S ? void 0 : S.headerBackground) != null && null !== (s = f.Z.toURLSafe((0, j._W)(u, S.headerBackground, 256))) && void 0 !== s ? s : void 0,
        Z = x.type === M.epS.DURABLE && N,
        A = x.type === M.epS.DURABLE ? (Z ? _.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : _.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY) : void 0,
        { price: C } = x;
    return null == C
        ? null
        : (0, i.jsx)(a.I, {
              title: T,
              description: b,
              headerImage: P,
              availabilityLabel: A,
              onDetails:
                  null != v
                      ? v
                      : (0, R.Ew)(b)
                        ? void 0
                        : () => {
                              (0, d.openModal)((e) => {
                                  let { onClose: n, transitionState: l } = e;
                                  return (0, i.jsx)(k.ItemDetailsModal, {
                                      appId: u,
                                      skuId: r,
                                      onClose: n,
                                      transitionState: l
                                  });
                              });
                          },
              PurchaseButton: (e) =>
                  (0, i.jsx)(E.Y, {
                      ...e,
                      appId: u,
                      sku: x
                  }),
              onPurchase: () => {
                  (0, p.Z)({
                      applicationId: u,
                      skuId: x.id,
                      analyticsLocations: h
                  });
              }
          });
}
