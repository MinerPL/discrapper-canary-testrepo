n(47120);
var s = n(735250),
  a = n(470079),
  r = n(120356),
  i = n.n(r),
  l = n(338545),
  o = n(481060),
  c = n(320319),
  d = n(759603);
t.Z = e => {
  let {
cards: t,
className: n,
cardType: r
  } = e, _ = () => window.innerWidth < 890 ? 1 : window.innerWidth < 1080 ? 2 : 3, [u, E] = a.useState(0), [T, I] = a.useState(_()), [R, C] = a.useState(!1), p = t.length;
  a.useEffect(() => {
let e = () => {
  I(_());
};
return window.addEventListener('resize', e), () => {
  window.removeEventListener('resize', e);
};
  }, []), a.useEffect(() => {
p > T && u > p - T ? E(p - T) : p <= T && E(0);
  }, [
p,
T
  ]);
  let g = a.useCallback(e => ({
  x: (e - u) * 100
}), [u]),
[A, m] = (0, l.useSprings)(t.length, g);
  return a.useEffect(() => {
m(g);
  }, [
m,
g
  ]), (0, s.jsx)('div', {
className: n,
children: (0, s.jsxs)('div', {
  className: d.cardContainer,
  children: [
    p > T && (0, s.jsx)(o.Clickable, {
      onClick: R ? () => {
        E(e => 0 === e ? p - T : e - 1);
      } : void 0,
      className: i()({
        [d.leftArrow]: R,
        [d.inactiveArrow]: !R
      }),
      children: (0, s.jsx)(o.ArrowSmallLeftIcon, {
        className: d.arrowIcon,
        colorClass: d.arrowIcon
      })
    }),
    (0, s.jsx)('div', {
      className: d.cardInnerContainer,
      children: A.map((e, n) => {
        let {
          x: a
        } = e;
        return (0, s.jsx)(l.animated.div, {
          className: d.card,
          style: {
            transform: null == a ? void 0 : a.to(e => 'translate3d('.concat(e, '%,0,0)'))
          },
          children: (0, s.jsx)(c.Z, {
            ...t[n],
            cardType: r
          }, ''.concat(t[n].name, '_').concat(n, '_perks_card'))
        }, ''.concat(t[n].name, '_').concat(n, '_animated_div'));
      })
    }),
    p > T && (0, s.jsx)(o.Clickable, {
      onClick: () => {
        E(e => e >= p - T ? (C(!0), 0) : e + 1);
      },
      className: d.rightArrow,
      children: (0, s.jsx)(o.ArrowSmallRightIcon, {
        className: d.arrowIcon,
        colorClass: d.arrowIcon
      })
    }),
    p > T && (0, s.jsx)('div', {
      className: d.cardProgressBar,
      children: t.map((e, t) => {
        if (!(t > p - T))
          return (0, s.jsx)('div', {
            className: t === u ? d.selectedDot : d.dot
          }, 'progress_bar_dot_'.concat(t));
      })
    })
  ]
})
  });
};