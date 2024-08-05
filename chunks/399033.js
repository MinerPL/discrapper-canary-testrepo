n(47120);
var s = n(735250),
  r = n(470079),
  a = n(120356),
  o = n.n(a),
  i = n(338545),
  c = n(442837),
  l = n(481060),
  d = n(100527),
  u = n(906732),
  f = n(259580),
  p = n(328347),
  g = n(709999),
  C = n(305271),
  _ = n(689938),
  m = n(994479);
t.Z = e => {
  let {
className: t,
products: n,
user: a,
productToCategoryMap: b
  } = e, [h, x] = r.useState(0), E = n.length, {
analyticsLocations: I
  } = (0, c.cj)([p.Z], () => p.Z.getAnalytics()), {
analyticsLocations: v
  } = (0, u.ZP)([
...I,
d.Z.COLLECTIBLES_SHOP_POPULAR_PICKS_CAROUSEL
  ]), {
trackPagination: L
  } = (0, C.X)('collectibles_shop_popular_picks_carousel', v), S = r.useCallback(e => ({
x: (e - h) * 100
  }), [h]), [T, N] = (0, l.useSprings)(n.length, S);
  return (r.useEffect(() => {
N(S);
  }, [
N,
S
  ]), null == a || 0 === n.length) ? null : (0, s.jsx)('div', {
className: t,
children: (0, s.jsxs)('div', {
  className: m.cardContainer,
  children: [
    (0, s.jsx)(l.Button, {
      look: l.Button.Looks.FILLED,
      color: l.Button.Colors.PRIMARY,
      className: o()(m.caretButton, m.leftCaret),
      onClick: () => {
        x(e => {
          let t = e - 4;
          return L(t / 4, h / 4), t;
        });
      },
      disabled: h - 4 < 0,
      'aria-label': _.Z.Messages.PAGINATION_PREVIOUS,
      children: (0, s.jsx)(f.Z, {
        direction: f.Z.Directions.LEFT
      })
    }),
    (0, s.jsx)('div', {
      className: m.cardInnerContainer,
      children: T.map((e, t) => {
        let {
          x: r
        } = e, o = b.get(n[t].skuId);
        if (null != o)
          return (0, s.jsx)(i.animated.div, {
            className: m.card,
            style: {
              transform: null == r ? void 0 : r.to(e => 'translate3d('.concat(e, '%,0,0)'))
            },
            children: (0, s.jsx)(g.Z, {
              product: n[t],
              category: o,
              user: a,
              isPopularPicksRow: !0
            }, ''.concat(n[t].name, '_').concat(t, '_perks_card'))
          }, ''.concat(n[t].name, '_').concat(t, '_animated_div'));
      })
    }),
    (0, s.jsx)(l.Button, {
      look: l.Button.Looks.FILLED,
      color: l.Button.Colors.PRIMARY,
      className: o()(m.caretButton, m.rightCaret),
      onClick: () => {
        x(e => {
          let t = e + 4;
          return L(t / 4, h / 4), t;
        });
      },
      disabled: h + 4 >= E,
      'aria-label': _.Z.Messages.PAGINATION_NEXT,
      children: (0, s.jsx)(f.Z, {
        direction: f.Z.Directions.RIGHT
      })
    })
  ]
})
  });
};