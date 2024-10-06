i.d(e, {
    AF: function () {
        return L;
    },
    hd: function () {
        return F;
    },
    zz: function () {
        return y;
    }
}),
    i(47120);
var l = i(735250),
    s = i(470079),
    t = i(905322),
    r = i(200207),
    a = i(269210),
    o = i(442837),
    d = i(481060),
    u = i(607070),
    c = i(100527),
    m = i(906732),
    v = i(87484),
    p = i(171246),
    x = i(930155),
    h = i(889989),
    g = i(696906),
    I = i(55563),
    S = i(551428),
    j = i(626135),
    R = i(768581),
    f = i(73346),
    N = i(624138),
    P = i(591759),
    T = i(601911),
    k = i(150414),
    b = i(110742),
    O = i(147496),
    _ = i(680005),
    E = i(955335),
    M = i(519896),
    A = i(981631),
    U = i(689938),
    Z = i(335567);
function L(n) {
    let { app: e, guildId: i, subscriptions: r, otps: a } = n,
        v = s.useMemo(() => (0, T.y)(e, 100), [e]),
        { bot: x } = e,
        h = s.useMemo(() => {
            var n;
            if ((null == x ? void 0 : x.banner) == null) return;
            let e = (0, R.aN)({
                id: x.id,
                banner: x.banner,
                size: 1024,
                canAnimate: !1
            });
            return null != e && null !== (n = P.Z.toURLSafe(e)) && void 0 !== n ? n : void 0;
        }, [x]),
        g = s.useMemo(() => {
            var n;
            if ((null == x ? void 0 : x.banner) == null) return;
            let e = (0, R.aN)({
                id: x.id,
                banner: x.banner,
                size: 1024,
                canAnimate: !0
            });
            return null != e && null !== (n = P.Z.toURLSafe(e)) && void 0 !== n ? n : void 0;
        }, [x]),
        I = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        S = s.useMemo(() => [...r.map((n) => n.skuId), ...a.map((n) => n.skuId)], [r, a]),
        { analyticsLocations: f } = (0, m.ZP)(c.Z.APP_STOREFRONT);
    return (
        s.useEffect(() => {
            0 !== S.length &&
                j.default.track(A.rMx.VIEW_PREMIUM_APP_STOREFRONT, {
                    application_id: e.id,
                    sku_ids: S,
                    location_stack: f
                });
        }, [f, e.id, S]),
        (0, l.jsxs)('div', {
            className: Z.wrapper,
            children: [
                (0, l.jsx)(t.j, {
                    title: e.name,
                    iconSrc: v,
                    backgroundSrc: h,
                    animatedBackgroundSrc: g,
                    prefersReducedMotion: I
                }),
                r.length > 0 &&
                    (0, l.jsxs)('div', {
                        className: Z.productSection,
                        children: [
                            (0, l.jsx)(E.r, { subscriptions: r }),
                            (0, l.jsx)('div', {
                                className: Z.productList,
                                children: r.map((n) =>
                                    (0, l.jsx)(
                                        y,
                                        {
                                            appId: e.id,
                                            guildId: i,
                                            listing: n,
                                            subscriptionType: (0, p.KW)(n.skuFlags) ? 'user' : 'guild'
                                        },
                                        n.id
                                    )
                                )
                            })
                        ]
                    }),
                a.length > 0 &&
                    (0, l.jsxs)('div', {
                        className: Z.productSection,
                        children: [
                            (0, l.jsx)(d.Heading, {
                                variant: 'heading-lg/semibold',
                                children: U.Z.Messages.STOREFRONT_APP_PRODUCTS
                            }),
                            (0, l.jsx)('div', {
                                className: Z.productList,
                                children: a.map((n) =>
                                    (0, l.jsx)(
                                        F,
                                        {
                                            skuId: n.skuId,
                                            appId: e.id
                                        },
                                        n.id
                                    )
                                )
                            })
                        ]
                    }),
                (0, l.jsx)(d.Text, {
                    variant: 'text-md/normal',
                    className: Z.legalText,
                    children:
                        null != e.termsOfServiceUrl && null != e.privacyPolicyUrl
                            ? U.Z.Messages.STOREFRONT_VIEW_TOS_PP.format({
                                  tosUrl: e.termsOfServiceUrl,
                                  ppUrl: e.privacyPolicyUrl
                              })
                            : U.Z.Messages.STOREFRONT_NO_TOS_PP
                })
            ]
        })
    );
}
function y(n) {
    var e;
    let { appId: i, guildId: t, listing: r, subscriptionType: o, onDetails: u } = n,
        { data: c } = (0, x.H)(r.skuId),
        {
            openModal: m,
            canOpenModal: v,
            cannotOpenReason: p
        } = (0, g.Z)({
            guildId: t,
            showBenefitsFirst: !1,
            analyticsLocation: A.Sbl.APP_STOREFRONT,
            skuId: r.skuId
        }),
        I = s.useMemo(() => {
            var n;
            return null === (n = r.benefits) || void 0 === n
                ? void 0
                : n.map((n) => ({
                      id: n.id,
                      title: n.name,
                      description: n.description,
                      icon: (0, h.n)(i, n.icon)
                  }));
        }, [i, r.benefits]),
        S = s.useMemo(() => (null != r.thumbnail ? (0, k.q)(i, r.thumbnail, 256) : void 0), [i, r.thumbnail]),
        j = s.useCallback(
            (n) =>
                null == c || 0 === c.length
                    ? null
                    : (0, l.jsx)(_.p, {
                          ...n,
                          appId: i,
                          subscriptionType: o,
                          skuId: r.skuId,
                          subscriptionPlan: c[0],
                          canPurchase: v,
                          cannotPurchaseReason: p
                      }),
            [i, o, r.skuId, c, v, p]
        );
    return null == c
        ? null
        : (0, l.jsx)(a.U, {
              title: r.summary,
              description: null !== (e = r.description) && void 0 !== e ? e : void 0,
              imgSrc: S,
              onPurchase: m,
              renderPurchaseButton: j,
              benefitItems:
                  null != I
                      ? I.map((n) =>
                            (0, l.jsx)(
                                a.G,
                                {
                                    name: n.title,
                                    icon: n.icon
                                },
                                n.id
                            )
                        )
                      : void 0,
              onDetails:
                  null != u
                      ? u
                      : null != I
                        ? () => {
                              (0, d.openModal)((n) => {
                                  let { onClose: e, transitionState: s } = n;
                                  return (0, l.jsx)(M.SubscriptionDetailsModal, {
                                      appId: i,
                                      subscriptionType: o,
                                      onClose: e,
                                      skuId: r.skuId,
                                      transitionState: s,
                                      guildId: t
                                  });
                              });
                          }
                        : void 0
          });
}
function F(n) {
    var e, i, s, t;
    let { skuId: a, appId: u, onDetails: p } = n,
        { analyticsLocations: x } = (0, m.ZP)(c.Z.APP_STOREFRONT),
        h = (0, o.e7)([S.Z], () => S.Z.getForSKU(a), [a]),
        g = (0, o.e7)([I.Z], () => I.Z.get(a), [a]),
        j = (0, b.M)(a);
    if (null == g) return null;
    let R = null !== (i = g.name) && void 0 !== i ? i : '',
        T = null !== (s = null == h ? void 0 : null === (e = h.description) || void 0 === e ? void 0 : e.trim()) && void 0 !== s ? s : void 0,
        k = (null == h ? void 0 : h.headerBackground) != null && null !== (t = P.Z.toURLSafe((0, f._W)(u, h.headerBackground, 256))) && void 0 !== t ? t : void 0,
        E = g.type === A.epS.DURABLE && j,
        M = g.type === A.epS.DURABLE ? (E ? U.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : U.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY) : void 0,
        { price: Z } = g;
    return null == Z
        ? null
        : (0, l.jsx)(r.I, {
              title: R,
              description: T,
              headerImage: k,
              availabilityLabel: M,
              onDetails:
                  null != p
                      ? p
                      : (0, N.Ew)(T)
                        ? void 0
                        : () => {
                              (0, d.openModal)((n) => {
                                  let { onClose: e, transitionState: i } = n;
                                  return (0, l.jsx)(O.ItemDetailsModal, {
                                      appId: u,
                                      skuId: a,
                                      onClose: e,
                                      transitionState: i
                                  });
                              });
                          },
              PurchaseButton: (n) =>
                  (0, l.jsx)(_.Y, {
                      ...n,
                      appId: u,
                      sku: g
                  }),
              onPurchase: () => {
                  (0, v.Z)({
                      applicationId: u,
                      skuId: g.id,
                      analyticsLocations: x
                  });
              }
          });
}
