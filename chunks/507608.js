i.d(n, {
    AF: function () {
        return L;
    },
    hd: function () {
        return E;
    },
    zz: function () {
        return y;
    }
}),
    i(47120);
var l = i(735250),
    t = i(470079),
    s = i(905322),
    r = i(200207),
    a = i(269210),
    o = i(442837),
    d = i(481060),
    u = i(607070),
    c = i(100527),
    p = i(906732),
    m = i(87484),
    v = i(171246),
    g = i(889989),
    x = i(696906),
    h = i(55563),
    S = i(551428),
    f = i(626135),
    j = i(768581),
    _ = i(73346),
    I = i(624138),
    b = i(591759),
    R = i(601911),
    N = i(110742),
    T = i(147496),
    P = i(680005),
    k = i(519896),
    O = i(981631),
    Z = i(689938),
    M = i(637714);
function L(e) {
    let { app: n, subscriptionGroupListing: i, onlySubscribeServerSubForGuildId: r, subscriptionListings: a, otpListings: m } = e,
        g = t.useMemo(() => (0, R.y)(n, 100), [n]),
        { bot: x } = n,
        h = t.useMemo(() => {
            var e;
            if ((null == x ? void 0 : x.banner) == null) return;
            let n = (0, j.aN)({
                id: x.id,
                banner: x.banner,
                size: 1024,
                canAnimate: !1
            });
            return null != n && null !== (e = b.Z.toURLSafe(n)) && void 0 !== e ? e : void 0;
        }, [x]),
        S = t.useMemo(() => {
            var e;
            if ((null == x ? void 0 : x.banner) == null) return;
            let n = (0, j.aN)({
                id: x.id,
                banner: x.banner,
                size: 1024,
                canAnimate: !0
            });
            return null != n && null !== (e = b.Z.toURLSafe(n)) && void 0 !== e ? e : void 0;
        }, [x]),
        _ = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        I = t.useMemo(() => [...a.map((e) => e.id), ...m.map((e) => e.id)], [a, m]),
        { analyticsLocations: N } = (0, p.ZP)(c.Z.APP_STOREFRONT);
    return (
        t.useEffect(() => {
            0 !== I.length &&
                f.default.track(O.rMx.VIEW_PREMIUM_APP_STOREFRONT, {
                    application_id: n.id,
                    sku_ids: I,
                    location_stack: N
                });
        }, [N, n.id, I]),
        (0, l.jsxs)('div', {
            className: M.wrapper,
            children: [
                (0, l.jsx)(s.j, {
                    title: n.name,
                    iconSrc: g,
                    backgroundSrc: h,
                    animatedBackgroundSrc: S,
                    prefersReducedMotion: _
                }),
                a.length > 0 &&
                    null != i &&
                    (0, l.jsxs)('div', {
                        className: M.productSection,
                        children: [
                            (0, l.jsx)(d.Heading, {
                                variant: 'heading-lg/semibold',
                                color: 'header-secondary',
                                children: Z.Z.Messages.STOREFRONT_APP_SUBSCRIPTIONS
                            }),
                            (0, l.jsx)('div', {
                                className: M.productList,
                                children: a.map((e) =>
                                    (0, l.jsx)(
                                        y,
                                        {
                                            appId: n.id,
                                            groupListingId: i.id,
                                            onlySubscribeServerSubForGuildId: r,
                                            listing: e,
                                            groupListingType: (0, v.KW)(i.sku_flags) ? 'user' : 'guild'
                                        },
                                        e.id
                                    )
                                )
                            })
                        ]
                    }),
                m.length > 0 &&
                    (0, l.jsxs)('div', {
                        className: M.productSection,
                        children: [
                            (0, l.jsx)(d.Heading, {
                                variant: 'heading-lg/semibold',
                                color: 'header-secondary',
                                children: Z.Z.Messages.STOREFRONT_APP_PRODUCTS
                            }),
                            (0, l.jsx)('div', {
                                className: M.productList,
                                children: m.map((e) =>
                                    (0, l.jsx)(
                                        E,
                                        {
                                            skuId: e.sku.id,
                                            appId: n.id
                                        },
                                        e.id
                                    )
                                )
                            })
                        ]
                    }),
                (0, l.jsx)(d.Text, {
                    variant: 'text-md/normal',
                    className: M.legalText,
                    children:
                        null != n.termsOfServiceUrl && null != n.privacyPolicyUrl
                            ? Z.Z.Messages.STOREFRONT_VIEW_TOS_PP.format({
                                  tosUrl: n.termsOfServiceUrl,
                                  ppUrl: n.privacyPolicyUrl
                              })
                            : Z.Z.Messages.STOREFRONT_NO_TOS_PP
                })
            ]
        })
    );
}
function y(e) {
    let { appId: n, groupListingId: i, onlySubscribeServerSubForGuildId: s, listing: r, groupListingType: o, onDetails: u } = e,
        { openModal: c } = (0, x.Z)({
            guildId: s,
            groupListingId: i,
            showBenefitsFirst: !1,
            analyticsLocation: O.Sbl.APP_STOREFRONT,
            skuId: r.id
        }),
        p = t.useMemo(() => {
            var e;
            return null === (e = r.store_listing_benefits) || void 0 === e
                ? void 0
                : e.map((e) => ({
                      id: e.id,
                      title: e.name,
                      description: e.description,
                      icon: (0, g.n)(n, e.icon)
                  }));
        }, [n, r.store_listing_benefits]),
        m = t.useMemo(() => {
            var e;
            return null != r.image_asset && null !== (e = b.Z.toURLSafe((0, _._W)(n, r.image_asset, 256))) && void 0 !== e ? e : void 0;
        }, [n, r.image_asset]),
        v = r.subscription_plans.length > 0 ? r.subscription_plans[0] : null;
    return null === v
        ? null
        : (0, l.jsx)(a.U, {
              title: r.name,
              description: r.description,
              imgSrc: m,
              subscriptionType: o,
              onPurchase: c,
              PurchaseButton: (e) =>
                  (0, l.jsx)(P.p, {
                      ...e,
                      appId: n,
                      groupListingId: i,
                      groupListingType: o,
                      guildId: s,
                      skuId: r.id,
                      subPlan: v
                  }),
              benefitItems:
                  null != p
                      ? p.map((e) =>
                            (0, l.jsx)(
                                a.G,
                                {
                                    name: e.title,
                                    icon: e.icon
                                },
                                e.id
                            )
                        )
                      : void 0,
              onDetails:
                  null != u
                      ? u
                      : null != p
                        ? () => {
                              (0, d.openModal)((e) => {
                                  let { onClose: t, transitionState: s } = e;
                                  return (0, l.jsx)(k.SubscriptionDetailsModal, {
                                      appId: n,
                                      groupListingId: i,
                                      groupListingType: o,
                                      onClose: t,
                                      skuId: r.id,
                                      transitionState: s
                                  });
                              });
                          }
                        : void 0
          });
}
function E(e) {
    var n, i, t, s;
    let { skuId: a, appId: u, onDetails: v } = e,
        { analyticsLocations: g } = (0, p.ZP)(c.Z.APP_STOREFRONT),
        x = (0, o.e7)([S.Z], () => S.Z.getForSKU(a), [a]),
        f = (0, o.e7)([h.Z], () => h.Z.get(a), [a]),
        j = (0, N.M)(a);
    if (null == f) return null;
    let R = null !== (i = f.name) && void 0 !== i ? i : '',
        k = null !== (t = null == x ? void 0 : null === (n = x.description) || void 0 === n ? void 0 : n.trim()) && void 0 !== t ? t : void 0,
        M = (null == x ? void 0 : x.headerBackground) != null && null !== (s = b.Z.toURLSafe((0, _._W)(u, x.headerBackground, 256))) && void 0 !== s ? s : void 0,
        L = f.type === O.epS.DURABLE && j,
        y = f.type === O.epS.DURABLE ? (L ? Z.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : Z.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY) : void 0,
        { price: E } = f;
    return null == E
        ? null
        : (0, l.jsx)(r.I, {
              title: R,
              description: k,
              headerImage: M,
              availabilityLabel: y,
              onDetails:
                  null != v
                      ? v
                      : (0, I.Ew)(k)
                        ? void 0
                        : () => {
                              (0, d.openModal)((e) => {
                                  let { onClose: n, transitionState: i } = e;
                                  return (0, l.jsx)(T.ItemDetailsModal, {
                                      appId: u,
                                      skuId: a,
                                      onClose: n,
                                      transitionState: i
                                  });
                              });
                          },
              PurchaseButton: (e) =>
                  (0, l.jsx)(P.Y, {
                      ...e,
                      appId: u,
                      sku: f
                  }),
              onPurchase: () => {
                  (0, m.Z)({
                      applicationId: u,
                      skuId: f.id,
                      analyticsLocations: g
                  });
              }
          });
}
