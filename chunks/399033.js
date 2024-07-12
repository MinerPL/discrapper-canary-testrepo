n(47120);
var r = n(735250),
  s = n(470079),
  a = n(120356),
  o = n.n(a),
  i = n(338545),
  l = n(442837),
  c = n(481060),
  d = n(100527),
  u = n(906732),
  p = n(259580),
  g = n(328347),
  f = n(709999),
  C = n(305271),
  m = n(689938),
  h = n(994479);
t.Z = e => {
  let {
className: t,
products: n,
user: a,
productToCategoryMap: _
  } = e, [b, x] = s.useState(0), I = n.length, {
analyticsLocations: E
  } = (0, l.cj)([g.Z], () => g.Z.getAnalytics()), {
analyticsLocations: L
  } = (0, u.ZP)([
...E,
d.Z.COLLECTIBLES_SHOP_POPULAR_PICKS_CAROUSEL
  ]), {
trackPagination: S
  } = (0, C.X)('collectibles_shop_popular_picks_carousel', L), v = s.useCallback(e => ({
x: (e - b) * 100
  }), [b]), [T, N] = (0, i.useSprings)(n.length, v);
  return (s.useEffect(() => {
N(v);
  }, [
N,
v
  ]), null == a || 0 === n.length) ? null : (0, r.jsx)('div', {
className: t,
children: (0, r.jsxs)('div', {
  className: h.cardContainer,
  children: [
    (0, r.jsx)(c.Button, {
      look: c.Button.Looks.FILLED,
      color: c.Button.Colors.PRIMARY,
      className: o()(h.caretButton, h.leftCaret),
      onClick: () => {
        x(e => {
          let t = e - 4;
          return S(t / 4, b / 4), t;
        });
      },
      disabled: b - 4 < 0,
      'aria-label': m.Z.Messages.PAGINATION_PREVIOUS,
      children: (0, r.jsx)(p.Z, {
        direction: p.Z.Directions.LEFT
      })
    }),
    (0, r.jsx)('div', {
      className: h.cardInnerContainer,
      children: T.map((e, t) => {
        let {
          x: s
        } = e, o = _.get(n[t].skuId);
        if (null != o)
          return (0, r.jsx)(i.animated.div, {
            className: h.card,
            style: {
              transform: null == s ? void 0 : s.to(e => 'translate3d('.concat(e, '%,0,0)'))
            },
            children: (0, r.jsx)(f.Z, {
              product: n[t],
              category: o,
              user: a,
              isPopularPicksRow: !0
            }, ''.concat(n[t].name, '_').concat(t, '_perks_card'))
          }, ''.concat(n[t].name, '_').concat(t, '_animated_div'));
      })
    }),
    (0, r.jsx)(c.Button, {
      look: c.Button.Looks.FILLED,
      color: c.Button.Colors.PRIMARY,
      className: o()(h.caretButton, h.rightCaret),
      onClick: () => {
        x(e => {
          let t = e + 4;
          return S(t / 4, b / 4), t;
        });
      },
      disabled: b + 4 >= I,
      'aria-label': m.Z.Messages.PAGINATION_NEXT,
      children: (0, r.jsx)(p.Z, {
        direction: p.Z.Directions.RIGHT
      })
    })
  ]
})
  });
};