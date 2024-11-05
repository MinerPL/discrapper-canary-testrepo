n(47120), n(653041);
var r = n(200651),
    a = n(192379),
    s = n(120356),
    i = n.n(s),
    l = n(180650),
    o = n(442837),
    c = n(481060),
    d = n(580747),
    u = n(594174),
    m = n(960048),
    f = n(381585),
    p = n(597688),
    h = n(884697),
    g = n(251068),
    C = n(43610),
    b = n(744112),
    x = n(223143),
    v = n(937510),
    _ = n(823941),
    k = n(752053),
    j = n(38900),
    E = n(709999),
    I = n(215023),
    T = n(388032),
    S = n(632007),
    B = n(454410),
    N = n(783433),
    y = n(170873),
    L = n(562292),
    Z = n(196315);
t.Z = (e) => {
    var t, n, s, w, P, O;
    let { handleTransition: A, numVisibleItems: H } = e,
        { categories: R, isFetchingCategories: F, fetchCategoriesError: D, fetchPurchasesError: M, claimError: V, refreshCategories: W } = (0, x.Z)(),
        U = null !== (t = null != D ? D : M) && void 0 !== t ? t : V,
        z = Array.from(R.values()),
        G = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        K = a.createRef(),
        $ = (0, C.t)('CollectiblesFeedShop'),
        Y = (0, g.m)('CollectiblesFeedShop'),
        J = (0, b.b)('Collectibles Shop Button'),
        q = (0, d.Z)('shop_disable_cache'),
        Q = (0, d.Z)('shop_include_unpublished'),
        X = Y ? z[0] : p.Z.getCategory($ ? l.T.SPOOKY_NIGHT : l.T.BAND),
        ee = Y ? z[1] : p.Z.getCategory($ ? l.T.BAND : l.T.AUTUMN_EQUINOX),
        et = p.Z.getCategory(l.T.ANIME_V2),
        en = Y
            ? (0, h.uV)(null !== (n = null == X ? void 0 : X.heroBanner) && void 0 !== n ? n : '', {
                  size: I.pv,
                  format: 'jpg'
              })
            : $
              ? Z
              : y,
        er = Y
            ? (0, h.uV)(null !== (s = null == ee ? void 0 : ee.featuredBlock) && void 0 !== s ? s : '', {
                  size: I.J0,
                  format: 'png'
              })
            : $
              ? N
              : L,
        ea = Y
            ? (0, h.uV)(null !== (w = null == et ? void 0 : et.featuredBlock) && void 0 !== w ? w : '', {
                  size: I.J0,
                  format: 'png'
              })
            : B,
        es = a.useCallback(() => {
            W();
        }, [W]),
        ei = Y ? (null !== (P = null == X ? void 0 : X.heroRanking) && void 0 !== P ? P : []) : $ ? I.Ku : I.WC,
        el = a.useMemo(() => ei.map((e) => p.Z.getProduct(e)).filter((e) => null != e), [F, $]),
        eo = (0, v.l)(el).slice(0, 4),
        ec = a.useMemo(() => I.yo.map((e) => p.Z.getProduct(e)).filter((e) => null != e), [F]),
        ed = (0, v.l)(ec);
    if (null == G) return null;
    let eu = T.intl.formatToPlainString(T.t.wvKYCg, { category_name: null == X ? void 0 : X.name });
    if (null != U) {
        let e = [];
        return (
            null != D ? e.push('shop load fetch categories error: '.concat(U.message)) : null != M ? e.push('shop load fetch purchase error: '.concat(U.message)) : e.push('shop load claim error: '.concat(U.message)),
            m.Z.captureMessage(e.join('\n'), {
                tags: {
                    isStaff: G.isStaff().toString(),
                    preloadEnabled: J.toString(),
                    disableCache: q.toString(),
                    includeUnpublished: Q.toString()
                }
            }),
            (0, r.jsx)(k.Z, {
                onRetry: es,
                errorMessage: U.message
            })
        );
    }
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsxs)('div', {
            className: S.shop,
            children: [
                (0, r.jsxs)('div', {
                    className: S.banner,
                    children: [
                        (0, r.jsx)('div', {
                            className: S.bannerImage,
                            style: { backgroundImage: 'url('.concat(en, ')') }
                        }),
                        (0, r.jsx)('div', { className: i()(S.bannerShadow, S.left) }),
                        (0, r.jsx)('div', { className: i()(S.bannerShadow, S.right) })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: i()(S.content, S.mainContent),
                    children: [
                        (0, r.jsxs)('div', {
                            className: i()(S.heroHeaderContainer),
                            children: [
                                F
                                    ? (0, r.jsx)('div', { className: i()(S.heroHeaderBadgeLogoSummaryContainer) })
                                    : (0, r.jsxs)('div', {
                                          className: i()(S.heroHeaderBadgeLogoSummaryContainer),
                                          children: [
                                              (null == X ? void 0 : X.unpublishedAt) != null &&
                                                  (0, r.jsx)(c.TextBadge, {
                                                      disableColor: !0,
                                                      text: T.intl.string(T.t['h/uBCQ']),
                                                      className: S.limitedTimeBadge
                                                  }),
                                              (0, r.jsxs)('div', {
                                                  className: i()(S.heroLogoNameContainer),
                                                  style: (null == X ? void 0 : X.skuId) === l.T.MYTHICAL_CREATURES ? { alignItems: 'center' } : {},
                                                  children: [
                                                      (0, r.jsx)('img', {
                                                          className: S.heroHeaderLogo,
                                                          src: (0, h.uV)(null !== (O = null == X ? void 0 : X.logo) && void 0 !== O ? O : '', { size: _.n }),
                                                          alt: null == X ? void 0 : X.name
                                                      }),
                                                      (0, r.jsx)(c.Text, {
                                                          color: 'always-white',
                                                          variant: 'text-md/normal',
                                                          className: S.subHeaderText,
                                                          children: null == X ? void 0 : X.summary
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                !F &&
                                    (0, r.jsx)('div', {
                                        className: S.heroHeaderButtonContainer,
                                        children: (0, r.jsx)(c.Button, {
                                            className: S.heroHeaderButton,
                                            color: c.ButtonColors.WHITE,
                                            onClick: () => A('shop latest category hero', null == X ? void 0 : X.skuId),
                                            children: eu
                                        })
                                    })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: i()(S.row, S.feed, S.feedSingleRow),
                            children: F
                                ? (0, r.jsx)(r.Fragment, {
                                      children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(j.K, {}, t))
                                  })
                                : (0, r.jsx)(r.Fragment, {
                                      children: eo.map((e, t) => {
                                          let n = p.Z.getCategoryForProduct(e.skuId);
                                          return null == e || null == n
                                              ? null
                                              : (0, r.jsx)(
                                                    f.k0,
                                                    {
                                                        newValue: {
                                                            tilePosition: t,
                                                            pageSection: 'top 4'
                                                        },
                                                        children: (0, r.jsx)(
                                                            E.Z,
                                                            {
                                                                product: e,
                                                                category: n,
                                                                user: G,
                                                                isInFeedView: !0
                                                            },
                                                            e.skuId
                                                        )
                                                    },
                                                    null == e ? void 0 : e.skuId
                                                );
                                      })
                                  })
                        }),
                        (0, r.jsx)('div', {
                            className: i()(S.section, S.col2, S.featuredBlocksContainer),
                            children: F
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)('div', {
                                              className: i()(S.skeleton, S.featuredBlock),
                                              children: (0, r.jsx)('div', { className: S.skeletonBody })
                                          }),
                                          (0, r.jsx)('div', {
                                              className: i()(S.skeleton, S.featuredBlock),
                                              children: (0, r.jsx)('div', { className: S.skeletonBody })
                                          })
                                      ]
                                  })
                                : (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsxs)(c.Clickable, {
                                              className: i()(S.featuredBlock),
                                              style: { backgroundImage: 'url('.concat(er, ')') },
                                              onClick: () => A('shop marketing tile', null == ee ? void 0 : ee.skuId),
                                              children: [
                                                  (null == ee ? void 0 : ee.unpublishedAt) != null &&
                                                      (0, r.jsx)(c.TextBadge, {
                                                          disableColor: !0,
                                                          text: T.intl.string(T.t['h/uBCQ']),
                                                          className: S.featuredBlockBadge
                                                      }),
                                                  (0, r.jsx)(c.Button, {
                                                      className: S.featuredBlockButton,
                                                      color: c.ButtonColors.WHITE,
                                                      onClick: () => {},
                                                      children: T.intl.string(T.t.jVcuVV)
                                                  })
                                              ]
                                          }),
                                          (0, r.jsx)(c.Clickable, {
                                              className: i()(S.featuredBlock),
                                              style: { backgroundImage: 'url('.concat(ea, ')') },
                                              onClick: () => A('shop marketing tile', l.T.ANIME_V2),
                                              children:
                                                  !F &&
                                                  (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          (0, r.jsx)(c.TextBadge, {
                                                              disableColor: !0,
                                                              text: T.intl.string(T.t['o/oRJC']),
                                                              className: S.featuredBlockBadge
                                                          }),
                                                          (0, r.jsx)(c.Button, {
                                                              className: S.featuredBlockButton,
                                                              color: c.ButtonColors.WHITE,
                                                              onClick: () => {},
                                                              children: T.intl.string(T.t.jVcuVV)
                                                          })
                                                      ]
                                                  })
                                          })
                                      ]
                                  })
                        }),
                        (0, r.jsxs)('div', {
                            className: i()(S.row, S.between, S.section),
                            children: [
                                (0, r.jsx)(c.Heading, {
                                    variant: 'heading-lg/semibold',
                                    children: T.intl.string(T.t.ivaAAw)
                                }),
                                (0, r.jsxs)(c.Clickable, {
                                    className: S.shopAll,
                                    onClick: () => A('shop all top'),
                                    children: [
                                        (0, r.jsx)(c.ServerGridIcon, {}),
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-sm/medium',
                                            children: T.intl.string(T.t.xFcotb)
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: S.feed,
                            ref: K,
                            children: F
                                ? (0, r.jsx)(r.Fragment, { children: [...Array(12)].map((e, t) => (0, r.jsx)(j.K, {}, t + 1)) })
                                : (0, r.jsx)(r.Fragment, {
                                      children: ed.slice(0, H).map((e, t) => {
                                          let n = p.Z.getCategoryForProduct(e.skuId);
                                          return null == e || null == n
                                              ? null
                                              : (0, r.jsx)(
                                                    f.k0,
                                                    {
                                                        newValue: {
                                                            tilePosition: t,
                                                            pageSection: 'popular picks'
                                                        },
                                                        children: (0, r.jsx)(
                                                            E.Z,
                                                            {
                                                                product: e,
                                                                category: n,
                                                                user: G,
                                                                isInFeedView: !0
                                                            },
                                                            e.skuId
                                                        )
                                                    },
                                                    null == e ? void 0 : e.skuId
                                                );
                                      })
                                  })
                        }),
                        H >= I.iA &&
                            (0, r.jsxs)('div', {
                                className: S.endOfFeed,
                                children: [
                                    (0, r.jsx)(c.Heading, {
                                        variant: 'heading-md/semibold',
                                        children: T.intl.string(T.t.Yr70c3)
                                    }),
                                    (0, r.jsx)(c.Button, {
                                        className: S.endOfFeedButton,
                                        onClick: () => {
                                            A('shop all bottom', void 0, !0);
                                        },
                                        children: (0, r.jsx)(c.Text, {
                                            variant: 'text-md/medium',
                                            color: 'always-white',
                                            children: T.intl.string(T.t.AfrvRE)
                                        })
                                    })
                                ]
                            })
                    ]
                })
            ]
        })
    });
};
