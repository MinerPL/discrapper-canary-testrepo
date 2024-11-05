e.d(i, {
    AF: function () {
        return O;
    },
    hd: function () {
        return C;
    },
    zz: function () {
        return w;
    }
}),
    e(47120);
var t = e(200651),
    l = e(192379),
    r = e(905322),
    s = e(200207),
    a = e(269210),
    o = e(442837),
    d = e(481060),
    u = e(607070),
    c = e(100527),
    m = e(906732),
    v = e(270144),
    p = e(171246),
    x = e(930155),
    h = e(929011),
    g = e(889989),
    I = e(696906),
    b = e(55563),
    j = e(551428),
    k = e(626135),
    f = e(768581),
    S = e(73346),
    P = e(624138),
    N = e(591759),
    R = e(601911),
    M = e(150414),
    T = e(110742),
    Z = e(147496),
    E = e(680005),
    y = e(955335),
    _ = e(519896),
    L = e(981631),
    U = e(388032),
    A = e(335567);
let F = new Intl.DateTimeFormat(U.intl.currentLocale, {
    month: 'short',
    day: 'numeric'
});
function O(n) {
    let { app: i, guildId: e, subscriptions: s, otps: a } = n,
        v = l.useMemo(() => (0, R.y)(i, 100), [i]),
        { bot: x } = i,
        h = l.useMemo(() => {
            var n;
            if ((null == x ? void 0 : x.banner) == null) return;
            let i = (0, f.aN)({
                id: x.id,
                banner: x.banner,
                size: 1024,
                canAnimate: !1
            });
            return null != i && null !== (n = N.Z.toURLSafe(i)) && void 0 !== n ? n : void 0;
        }, [x]),
        g = l.useMemo(() => {
            var n;
            if ((null == x ? void 0 : x.banner) == null) return;
            let i = (0, f.aN)({
                id: x.id,
                banner: x.banner,
                size: 1024,
                canAnimate: !0
            });
            return null != i && null !== (n = N.Z.toURLSafe(i)) && void 0 !== n ? n : void 0;
        }, [x]),
        I = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        b = l.useMemo(() => [...s.map((n) => n.skuId), ...a.map((n) => n.skuId)], [s, a]),
        { analyticsLocations: j } = (0, m.ZP)(c.Z.APP_STOREFRONT);
    return (
        l.useEffect(() => {
            0 !== b.length &&
                k.default.track(L.rMx.VIEW_PREMIUM_APP_STOREFRONT, {
                    application_id: i.id,
                    sku_ids: b,
                    location_stack: j
                });
        }, [j, i.id, b]),
        (0, t.jsxs)('div', {
            className: A.wrapper,
            children: [
                (0, t.jsx)(r.j, {
                    title: i.name,
                    iconSrc: v,
                    backgroundSrc: h,
                    animatedBackgroundSrc: g,
                    prefersReducedMotion: I
                }),
                s.length > 0 &&
                    (0, t.jsxs)('div', {
                        className: A.productSection,
                        children: [
                            (0, t.jsx)(y.r, { subscriptions: s }),
                            (0, t.jsx)('div', {
                                className: A.productList,
                                children: s.map((n) =>
                                    (0, t.jsx)(
                                        w,
                                        {
                                            appId: i.id,
                                            guildId: e,
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
                    (0, t.jsxs)('div', {
                        className: A.productSection,
                        children: [
                            (0, t.jsx)(d.Heading, {
                                variant: 'heading-lg/semibold',
                                children: U.intl.string(U.t.yUGTs7)
                            }),
                            (0, t.jsx)('div', {
                                className: A.productList,
                                children: a.map((n) =>
                                    (0, t.jsx)(
                                        C,
                                        {
                                            skuId: n.skuId,
                                            appId: i.id
                                        },
                                        n.id
                                    )
                                )
                            })
                        ]
                    })
            ]
        })
    );
}
function w(n) {
    var i, e;
    let r,
        { appId: s, guildId: u, listing: c, subscriptionType: m, onDetails: p } = n,
        { data: h } = (0, x.H)(c.skuId),
        j = null == h ? void 0 : h[0],
        k = (0, o.e7)([b.Z], () => b.Z.getParentSKU(c.skuId), [c.skuId]),
        f = (0, v.Ev)(k, u),
        S = (0, v.cr)(k, u),
        P = null != S && (null == f ? void 0 : null === (i = f.subscriptionPlan) || void 0 === i ? void 0 : i.id) !== (null == S ? void 0 : S.subscriptionPlan.id),
        N = (null == S ? void 0 : S.subscriptionPlan.skuId) === c.skuId,
        R = (null == f ? void 0 : f.subscriptionPlan.skuId) === c.skuId,
        { openModal: T, cannotOpenReason: Z } = (0, I.ZP)({
            skuId: c.skuId,
            subscribeForGuild: u,
            analyticsLocation: L.Sbl.APP_STOREFRONT
        }),
        y = l.useMemo(() => {
            var n;
            return null === (n = c.benefits) || void 0 === n
                ? void 0
                : n.map((n) => ({
                      id: n.id,
                      title: n.name,
                      description: n.description,
                      icon: (0, g.n)(s, n.icon)
                  }));
        }, [s, c.benefits]),
        A = l.useMemo(() => (null != c.thumbnail ? (0, M.q)(s, c.thumbnail, 256) : void 0), [s, c.thumbnail]),
        O = l.useCallback(
            (n) =>
                (0, t.jsx)(E.p, {
                    ...n,
                    appId: s,
                    subscriptionType: m,
                    skuId: c.skuId,
                    subscriptionPlan: j,
                    cannotOpenReason: Z
                }),
            [s, m, c.skuId, j, Z]
        );
    if (P && (null == f ? void 0 : f.subscription.currentPeriodEnd) != null) {
        let n = F.format(null == f ? void 0 : f.subscription.currentPeriodEnd);
        R ? (r = U.intl.formatToPlainString(U.t.EV2lZ2, { date: n })) : N && (r = U.intl.formatToPlainString(U.t['2w6+ND'], { date: n }));
    }
    let w =
        null != r
            ? (0, t.jsx)(d.Text, {
                  color: 'header-secondary',
                  variant: 'text-sm/normal',
                  children: r
              })
            : void 0;
    return (0, t.jsx)(a.U, {
        title: c.summary,
        description: null !== (e = c.description) && void 0 !== e ? e : void 0,
        imgSrc: A,
        onPurchase: T,
        renderPurchaseButton: O,
        benefitItems:
            null != y
                ? y.map((n) =>
                      (0, t.jsx)(
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
            null != p
                ? p
                : null != y
                  ? () => {
                        (0, d.openModal)((n) => {
                            let { onClose: i, transitionState: e } = n;
                            return (0, t.jsx)(_.SubscriptionDetailsModal, {
                                appId: s,
                                subscriptionType: m,
                                onClose: i,
                                skuId: c.skuId,
                                transitionState: e,
                                guildId: u
                            });
                        });
                    }
                  : void 0,
        subtitle: w
    });
}
function C(n) {
    var i, e, l, r;
    let { skuId: a, appId: u, onDetails: v } = n,
        { analyticsLocations: p } = (0, m.ZP)(c.Z.APP_STOREFRONT),
        x = (0, o.e7)([j.Z], () => j.Z.getForSKU(a), [a]),
        g = (0, o.e7)([b.Z], () => b.Z.get(a), [a]),
        I = (0, T.M)(a);
    if (null == g) return null;
    let k = null !== (e = g.name) && void 0 !== e ? e : '',
        f = null !== (l = null == x ? void 0 : null === (i = x.description) || void 0 === i ? void 0 : i.trim()) && void 0 !== l ? l : void 0,
        R = (null == x ? void 0 : x.headerBackground) != null && null !== (r = N.Z.toURLSafe((0, S._W)(u, x.headerBackground, 256))) && void 0 !== r ? r : void 0,
        M = g.type === L.epS.DURABLE && I,
        y = g.type === L.epS.DURABLE ? (M ? U.intl.string(U.t.bm82mp) : U.intl.string(U.t['6gprwc'])) : void 0,
        { price: _ } = g;
    return null == _
        ? null
        : (0, t.jsx)(s.I, {
              title: k,
              description: f,
              headerImage: R,
              availabilityLabel: y,
              onDetails:
                  null != v
                      ? v
                      : (0, P.Ew)(f)
                        ? void 0
                        : () => {
                              (0, d.openModal)((n) => {
                                  let { onClose: i, transitionState: e } = n;
                                  return (0, t.jsx)(Z.ItemDetailsModal, {
                                      appId: u,
                                      skuId: a,
                                      onClose: i,
                                      transitionState: e
                                  });
                              });
                          },
              PurchaseButton: (n) =>
                  (0, t.jsx)(E.Y, {
                      ...n,
                      appId: u,
                      sku: g
                  }),
              onPurchase: () => {
                  (0, h.r)({
                      appId: u,
                      skuId: g.id,
                      analyticsLocations: p
                  });
              }
          });
}
