n(47120);
var a = n(735250),
    r = n(470079),
    s = n(120356),
    o = n.n(s),
    i = n(180081),
    l = n(442837),
    c = n(481060),
    d = n(100527),
    u = n(906732),
    f = n(259580),
    p = n(597688),
    g = n(328347),
    C = n(709999),
    m = n(305271),
    _ = n(689938),
    h = n(178935);
t.Z = (e) => {
    let { className: t, products: n, user: s } = e,
        [b, x] = r.useState(0),
        I = n.length,
        { analyticsLocations: E } = (0, l.cj)([g.Z], () => g.Z.getAnalytics()),
        { analyticsLocations: v } = (0, u.ZP)([...E, d.Z.COLLECTIBLES_SHOP_POPULAR_PICKS_CAROUSEL]),
        { trackPagination: L } = (0, m.X)('collectibles_shop_popular_picks_carousel', v),
        S = r.useCallback((e) => ({ x: (e - b) * 100 }), [b]),
        [T, N] = (0, c.useSprings)(n.length, S);
    return (r.useEffect(() => {
        N(S);
    }, [N, S]),
    null == s || 0 === n.length)
        ? null
        : (0, a.jsx)('div', {
              className: t,
              children: (0, a.jsxs)('div', {
                  className: h.cardContainer,
                  children: [
                      (0, a.jsx)(c.Button, {
                          look: c.Button.Looks.FILLED,
                          color: c.Button.Colors.PRIMARY,
                          className: o()(h.caretButton, h.leftCaret),
                          onClick: () => {
                              x((e) => {
                                  let t = e - 4;
                                  return L(t / 4, b / 4), t;
                              });
                          },
                          disabled: b - 4 < 0,
                          'aria-label': _.Z.Messages.PAGINATION_PREVIOUS,
                          children: (0, a.jsx)(f.Z, { direction: f.Z.Directions.LEFT })
                      }),
                      (0, a.jsx)('div', {
                          className: h.cardInnerContainer,
                          children: T.map((e, t) => {
                              let { x: r } = e,
                                  o = p.Z.getCategoryForProduct(n[t].skuId);
                              if (null != o)
                                  return (0, a.jsx)(
                                      i.animated.div,
                                      {
                                          className: h.card,
                                          style: { transform: null == r ? void 0 : r.to((e) => 'translate3d('.concat(e, '%,0,0)')) },
                                          children: (0, a.jsx)(
                                              C.Z,
                                              {
                                                  product: n[t],
                                                  category: o,
                                                  user: s,
                                                  isPopularPicksRow: !0
                                              },
                                              ''.concat(n[t].name, '_').concat(t, '_perks_card')
                                          )
                                      },
                                      ''.concat(n[t].name, '_').concat(t, '_animated_div')
                                  );
                          })
                      }),
                      (0, a.jsx)(c.Button, {
                          look: c.Button.Looks.FILLED,
                          color: c.Button.Colors.PRIMARY,
                          className: o()(h.caretButton, h.rightCaret),
                          onClick: () => {
                              x((e) => {
                                  let t = e + 4;
                                  return L(t / 4, b / 4), t;
                              });
                          },
                          disabled: b + 4 >= I,
                          'aria-label': _.Z.Messages.PAGINATION_NEXT,
                          children: (0, a.jsx)(f.Z, { direction: f.Z.Directions.RIGHT })
                      })
                  ]
              })
          });
};
