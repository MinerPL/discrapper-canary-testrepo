n(47120);
var a = n(735250),
    r = n(470079),
    s = n(120356),
    o = n.n(s),
    i = n(180650),
    l = n(442837),
    c = n(481060),
    d = n(594174),
    u = n(597688),
    f = n(1870),
    p = n(884697),
    g = n(223143),
    C = n(823941),
    m = n(38900),
    _ = n(709999),
    h = n(215023),
    b = n(689938),
    x = n(728097),
    I = n(367815),
    E = n(933285),
    v = n(83498);
t.Z = (e) => {
    var t, n, s, L, S, T;
    let { handleTransition: N, numVisibleItems: O } = e,
        { isFetching: k } = (0, g.Z)(),
        B = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        j = r.createRef(),
        Z = (0, l.cj)([u.Z], () => ({ feature: u.Z.getCategory(i.T.THE_VAULT) })),
        P = r.useMemo(
            () =>
                h.$O
                    .map((e) => u.Z.getProduct(e))
                    .filter((e) => null != e)
                    .map((e) => ({
                        ...e,
                        category: u.Z.getCategoryForProduct(e.skuId)
                    }))
                    .filter((e) => null != e.category)
                    .sort((e, t) => {
                        let n = !!f.Z.getPurchase(e.skuId),
                            a = !!f.Z.getPurchase(t.skuId);
                        return Number(n) - Number(a);
                    })
                    .slice(0, 4),
            [k]
        ),
        A = r.useMemo(
            () =>
                h.yo
                    .map((e) => u.Z.getProduct(e))
                    .filter((e) => null != e)
                    .map((e) => ({
                        ...e,
                        category: u.Z.getCategoryForProduct(e.skuId)
                    }))
                    .filter((e) => null != e.category)
                    .sort((e, t) => {
                        let n = !!f.Z.getPurchase(e.skuId),
                            a = !!f.Z.getPurchase(t.skuId);
                        return Number(n) - Number(a);
                    }),
            [k]
        );
    if (null == B) return null;
    return (0, a.jsx)(a.Fragment, {
        children: (0, a.jsxs)('div', {
            className: x.shop,
            children: [
                (0, a.jsx)('div', {
                    className: x.banner,
                    children: (0, a.jsx)('div', {
                        className: x.bannerImage,
                        style: { backgroundImage: 'url('.concat(v, ')') }
                    })
                }),
                (0, a.jsxs)('div', {
                    className: o()(x.content, x.mainContent),
                    children: [
                        (0, a.jsxs)('div', {
                            className: o()(x.heroHeaderContainer),
                            children: [
                                k
                                    ? (0, a.jsx)('div', { className: o()(x.heroHeaderBadgeLogoSummaryContainer) })
                                    : (0, a.jsxs)('div', {
                                          className: o()(x.heroHeaderBadgeLogoSummaryContainer),
                                          children: [
                                              (null === (n = Z.feature) || void 0 === n ? void 0 : n.unpublishedAt) != null &&
                                                  (0, a.jsx)(c.TextBadge, {
                                                      disableColor: !0,
                                                      text: b.Z.Messages.LIMITED_TIME,
                                                      className: x.limitedTimeBadge
                                                  }),
                                              (0, a.jsx)('img', {
                                                  className: x.heroHeaderLogo,
                                                  src: (0, p.uV)(null !== (T = null === (s = Z.feature) || void 0 === s ? void 0 : s.logo) && void 0 !== T ? T : '', { size: C.n }),
                                                  alt: null === (L = Z.feature) || void 0 === L ? void 0 : L.name
                                              }),
                                              (0, a.jsx)(c.Text, {
                                                  color: 'always-white',
                                                  variant: 'text-md/normal',
                                                  children: null === (S = Z.feature) || void 0 === S ? void 0 : S.summary
                                              })
                                          ]
                                      }),
                                (0, a.jsx)('div', {
                                    className: x.heroHeaderButtonContainer,
                                    children: (0, a.jsx)(c.Button, {
                                        className: x.heroHeaderButton,
                                        color: c.ButtonColors.WHITE,
                                        onClick: () => N('shop latest category hero'),
                                        children: b.Z.Messages.COLLECTIBLES_SHOP_THE_VAULT_COLLECTION
                                    })
                                })
                            ]
                        }),
                        (0, a.jsx)('div', {
                            className: o()(x.row, x.feed, x.feedSingleRow),
                            children: k
                                ? (0, a.jsx)(a.Fragment, {
                                      children: [void 0, void 0, void 0, void 0].map((e, t) => (0, a.jsx)(m.K, {}, t))
                                  })
                                : (0, a.jsx)(a.Fragment, {
                                      children: P.map((e) => {
                                          if (null == e || null == e.category) return null;
                                          let { category: t, ...n } = e;
                                          return (0, a.jsx)(
                                              _.Z,
                                              {
                                                  product: n,
                                                  category: t,
                                                  user: B,
                                                  isInFeedView: !0
                                              },
                                              null == e ? void 0 : e.skuId
                                          );
                                      })
                                  })
                        }),
                        (0, a.jsxs)('div', {
                            className: o()(x.section, x.col2, x.featuredBlocksContainer),
                            children: [
                                (0, a.jsxs)(c.Clickable, {
                                    className: o()(x.featuredBlock),
                                    style: { backgroundImage: 'url('.concat(E, ')') },
                                    onClick: () => N('shop marketing tile', i.T.DOJO),
                                    children: [
                                        (null === (t = u.Z.getCategory(i.T.DOJO)) || void 0 === t ? void 0 : t.unpublishedAt) != null &&
                                            (0, a.jsx)(c.TextBadge, {
                                                disableColor: !0,
                                                text: b.Z.Messages.LIMITED_TIME,
                                                className: x.featuredBlockBadge
                                            }),
                                        (0, a.jsx)(c.Button, {
                                            className: x.featuredBlockButton,
                                            color: c.ButtonColors.WHITE,
                                            onClick: () => {},
                                            children: b.Z.Messages.TAKE_ME_THERE
                                        })
                                    ]
                                }),
                                (0, a.jsxs)(c.Clickable, {
                                    className: o()(x.featuredBlock),
                                    style: { backgroundImage: 'url('.concat(I, ')') },
                                    onClick: () => N('shop marketing tile', i.T.ANIME_V2),
                                    children: [
                                        (0, a.jsx)(c.TextBadge, {
                                            disableColor: !0,
                                            text: b.Z.Messages.MOST_POPULAR,
                                            className: x.featuredBlockBadge
                                        }),
                                        (0, a.jsx)(c.Button, {
                                            className: x.featuredBlockButton,
                                            color: c.ButtonColors.WHITE,
                                            onClick: () => {},
                                            children: b.Z.Messages.TAKE_ME_THERE
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, a.jsxs)('div', {
                            className: o()(x.row, x.between, x.section),
                            children: [
                                (0, a.jsx)(c.Heading, {
                                    variant: 'heading-lg/semibold',
                                    children: b.Z.Messages.COLLECTIBLES_POPULAR_PICKS
                                }),
                                (0, a.jsxs)(c.Clickable, {
                                    className: x.shopAll,
                                    onClick: () => N('shop all top'),
                                    children: [
                                        (0, a.jsx)(c.ServerGridIcon, {}),
                                        (0, a.jsx)(c.Text, {
                                            variant: 'text-sm/medium',
                                            children: b.Z.Messages.COLLECTIBLES_SHOP_ALL
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, a.jsx)('div', {
                            className: x.feed,
                            ref: j,
                            children: k
                                ? (0, a.jsx)(a.Fragment, { children: [...Array(12)].map((e, t) => (0, a.jsx)(m.K, {}, t + 1)) })
                                : (0, a.jsx)(a.Fragment, {
                                      children: A.slice(0, O).map((e) => {
                                          if (null == e || null == e.category) return null;
                                          let { category: t, ...n } = e;
                                          return (0, a.jsx)(
                                              _.Z,
                                              {
                                                  product: n,
                                                  category: t,
                                                  user: B,
                                                  isInFeedView: !0
                                              },
                                              null == e ? void 0 : e.skuId
                                          );
                                      })
                                  })
                        }),
                        O >= h.iA &&
                            (0, a.jsxs)('div', {
                                className: x.endOfFeed,
                                children: [
                                    (0, a.jsx)(c.Heading, {
                                        variant: 'heading-md/semibold',
                                        children: b.Z.Messages.COLLECTIBLES_SHOP_FEED_END_OF_SCROLL_TEXT
                                    }),
                                    (0, a.jsx)(c.Button, {
                                        className: x.endOfFeedButton,
                                        onClick: () => {
                                            N('shop all bottom', void 0, !0);
                                        },
                                        children: (0, a.jsx)(c.Text, {
                                            variant: 'text-md/medium',
                                            color: 'always-white',
                                            children: b.Z.Messages.COLLECTIBLES_SHOP_FEED_END_OF_SCROLL_BUTTON
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
