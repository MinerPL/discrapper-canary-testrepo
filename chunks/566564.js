r(47120);
var a = r(735250),
    n = r(470079),
    s = r(120356),
    i = r.n(s),
    o = r(180650),
    l = r(442837),
    c = r(481060),
    d = r(594174),
    u = r(597688),
    f = r(1870),
    p = r(884697),
    m = r(251068),
    C = r(43610),
    _ = r(223143),
    g = r(823941),
    h = r(752053),
    b = r(38900),
    E = r(709999),
    I = r(215023),
    x = r(689938),
    T = r(632007),
    v = r(454410),
    S = r(783433),
    L = r(170873),
    N = r(562292),
    O = r(196315);
t.Z = (e) => {
    var t;
    let { handleTransition: r, numVisibleItems: s } = e,
        { categories: B, isFetchingCategories: k, error: j, refreshCategories: R } = (0, _.Z)(),
        P = Array.from(B.values()),
        A = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        Z = n.createRef(),
        M = (0, C.t)('CollectiblesFeedShop'),
        y = (0, m.m)('CollectiblesFeedShop'),
        w = y ? P[0] : u.Z.getCategory(M ? o.T.SPOOKY_NIGHT : o.T.BAND),
        H = y ? P[1] : u.Z.getCategory(M ? o.T.BAND : o.T.AUTUMN_EQUINOX),
        F = n.useCallback(() => {
            R();
        }, [R]),
        D = M ? I.Ku : I.WC,
        U = n.useMemo(
            () =>
                D.map((e) => u.Z.getProduct(e))
                    .filter((e) => null != e)
                    .map((e) => ({
                        ...e,
                        category: u.Z.getCategoryForProduct(e.skuId)
                    }))
                    .filter((e) => null != e.category)
                    .sort((e, t) => {
                        let r = !!f.Z.getPurchase(e.skuId),
                            a = !!f.Z.getPurchase(t.skuId);
                        return Number(r) - Number(a);
                    })
                    .slice(0, 4),
            [k, M]
        ),
        W = n.useMemo(
            () =>
                I.yo
                    .map((e) => u.Z.getProduct(e))
                    .filter((e) => null != e)
                    .map((e) => ({
                        ...e,
                        category: u.Z.getCategoryForProduct(e.skuId)
                    }))
                    .filter((e) => null != e.category)
                    .sort((e, t) => {
                        let r = !!f.Z.getPurchase(e.skuId),
                            a = !!f.Z.getPurchase(t.skuId);
                        return Number(r) - Number(a);
                    }),
            [k]
        );
    if (null == A) return null;
    let G = x.Z.Messages.COLLECTIBLES_SHOP_CATEGORY_COLLECTION.format({ category_name: null == w ? void 0 : w.name });
    if (j) return (0, a.jsx)(h.Z, { onRetry: F });
    return (0, a.jsx)(a.Fragment, {
        children: (0, a.jsxs)('div', {
            className: T.shop,
            children: [
                (0, a.jsxs)('div', {
                    className: T.banner,
                    children: [
                        (0, a.jsx)('div', {
                            className: T.bannerImage,
                            style: { backgroundImage: 'url('.concat(M ? O : L, ')') }
                        }),
                        (0, a.jsx)('div', { className: i()(T.bannerShadow, T.left) }),
                        (0, a.jsx)('div', { className: i()(T.bannerShadow, T.right) })
                    ]
                }),
                (0, a.jsxs)('div', {
                    className: i()(T.content, T.mainContent),
                    children: [
                        (0, a.jsxs)('div', {
                            className: i()(T.heroHeaderContainer),
                            children: [
                                k
                                    ? (0, a.jsx)('div', { className: i()(T.heroHeaderBadgeLogoSummaryContainer) })
                                    : (0, a.jsxs)('div', {
                                          className: i()(T.heroHeaderBadgeLogoSummaryContainer),
                                          children: [
                                              (null == w ? void 0 : w.unpublishedAt) != null &&
                                                  (0, a.jsx)(c.TextBadge, {
                                                      disableColor: !0,
                                                      text: x.Z.Messages.LIMITED_TIME,
                                                      className: T.limitedTimeBadge
                                                  }),
                                              (0, a.jsx)('img', {
                                                  className: T.heroHeaderLogo,
                                                  src: (0, p.uV)(null !== (t = null == w ? void 0 : w.logo) && void 0 !== t ? t : '', { size: g.n }),
                                                  alt: null == w ? void 0 : w.name
                                              }),
                                              (0, a.jsx)(c.Text, {
                                                  color: 'always-white',
                                                  variant: 'text-md/normal',
                                                  className: T.subHeaderText,
                                                  children: null == w ? void 0 : w.summary
                                              })
                                          ]
                                      }),
                                (0, a.jsx)('div', {
                                    className: T.heroHeaderButtonContainer,
                                    children: (0, a.jsx)(c.Button, {
                                        className: T.heroHeaderButton,
                                        color: c.ButtonColors.WHITE,
                                        onClick: () => r('shop latest category hero', null == w ? void 0 : w.skuId),
                                        children: G
                                    })
                                })
                            ]
                        }),
                        (0, a.jsx)('div', {
                            className: i()(T.row, T.feed, T.feedSingleRow),
                            children: k
                                ? (0, a.jsx)(a.Fragment, {
                                      children: [void 0, void 0, void 0, void 0].map((e, t) => (0, a.jsx)(b.K, {}, t))
                                  })
                                : (0, a.jsx)(a.Fragment, {
                                      children: U.map((e) => {
                                          if (null == e || null == e.category) return null;
                                          let { category: t, ...r } = e;
                                          return (0, a.jsx)(
                                              E.Z,
                                              {
                                                  product: r,
                                                  category: t,
                                                  user: A,
                                                  isInFeedView: !0
                                              },
                                              null == e ? void 0 : e.skuId
                                          );
                                      })
                                  })
                        }),
                        (0, a.jsxs)('div', {
                            className: i()(T.section, T.col2, T.featuredBlocksContainer),
                            children: [
                                (0, a.jsxs)(c.Clickable, {
                                    className: i()(T.featuredBlock),
                                    style: { backgroundImage: 'url('.concat(M ? S : N, ')') },
                                    onClick: () => r('shop marketing tile', null == H ? void 0 : H.skuId),
                                    children: [
                                        (null == H ? void 0 : H.unpublishedAt) != null &&
                                            (0, a.jsx)(c.TextBadge, {
                                                disableColor: !0,
                                                text: x.Z.Messages.LIMITED_TIME,
                                                className: T.featuredBlockBadge
                                            }),
                                        (0, a.jsx)(c.Button, {
                                            className: T.featuredBlockButton,
                                            color: c.ButtonColors.WHITE,
                                            onClick: () => {},
                                            children: x.Z.Messages.TAKE_ME_THERE
                                        })
                                    ]
                                }),
                                (0, a.jsxs)(c.Clickable, {
                                    className: i()(T.featuredBlock),
                                    style: { backgroundImage: 'url('.concat(v, ')') },
                                    onClick: () => r('shop marketing tile', o.T.ANIME_V2),
                                    children: [
                                        (0, a.jsx)(c.TextBadge, {
                                            disableColor: !0,
                                            text: x.Z.Messages.MOST_POPULAR,
                                            className: T.featuredBlockBadge
                                        }),
                                        (0, a.jsx)(c.Button, {
                                            className: T.featuredBlockButton,
                                            color: c.ButtonColors.WHITE,
                                            onClick: () => {},
                                            children: x.Z.Messages.TAKE_ME_THERE
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, a.jsxs)('div', {
                            className: i()(T.row, T.between, T.section),
                            children: [
                                (0, a.jsx)(c.Heading, {
                                    variant: 'heading-lg/semibold',
                                    children: x.Z.Messages.COLLECTIBLES_POPULAR_PICKS
                                }),
                                (0, a.jsxs)(c.Clickable, {
                                    className: T.shopAll,
                                    onClick: () => r('shop all top'),
                                    children: [
                                        (0, a.jsx)(c.ServerGridIcon, {}),
                                        (0, a.jsx)(c.Text, {
                                            variant: 'text-sm/medium',
                                            children: x.Z.Messages.COLLECTIBLES_SHOP_ALL
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, a.jsx)('div', {
                            className: T.feed,
                            ref: Z,
                            children: k
                                ? (0, a.jsx)(a.Fragment, { children: [...Array(12)].map((e, t) => (0, a.jsx)(b.K, {}, t + 1)) })
                                : (0, a.jsx)(a.Fragment, {
                                      children: W.slice(0, s).map((e) => {
                                          if (null == e || null == e.category) return null;
                                          let { category: t, ...r } = e;
                                          return (0, a.jsx)(
                                              E.Z,
                                              {
                                                  product: r,
                                                  category: t,
                                                  user: A,
                                                  isInFeedView: !0
                                              },
                                              null == e ? void 0 : e.skuId
                                          );
                                      })
                                  })
                        }),
                        s >= I.iA &&
                            (0, a.jsxs)('div', {
                                className: T.endOfFeed,
                                children: [
                                    (0, a.jsx)(c.Heading, {
                                        variant: 'heading-md/semibold',
                                        children: x.Z.Messages.COLLECTIBLES_SHOP_FEED_END_OF_SCROLL_TEXT
                                    }),
                                    (0, a.jsx)(c.Button, {
                                        className: T.endOfFeedButton,
                                        onClick: () => {
                                            r('shop all bottom', void 0, !0);
                                        },
                                        children: (0, a.jsx)(c.Text, {
                                            variant: 'text-md/medium',
                                            color: 'always-white',
                                            children: x.Z.Messages.COLLECTIBLES_SHOP_FEED_END_OF_SCROLL_BUTTON
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
