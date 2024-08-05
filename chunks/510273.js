n.d(t, {
  Z: function() {
return E;
  }
});
var s = n(735250),
  a = n(470079),
  r = n(120356),
  i = n.n(r),
  l = n(481060),
  o = n(955204),
  c = n(818765),
  d = n(674680),
  _ = n(918207);
let u = e => {
  let {
color: t
  } = e;
  return (0, s.jsxs)('svg', {
width: '48',
height: '28',
viewBox: '0 0 55 34',
fill: 'none',
xmlns: 'http://www.w3.org/2000/svg',
children: [
  (0, s.jsx)('rect', {
    x: '10.1968',
    y: '7',
    width: '14.4203',
    height: '14.4203',
    transform: 'rotate(45 10.1968 7)',
    className: _.__invalid_toastBG
  }),
  (0, s.jsx)('rect', {
    x: '27.3936',
    y: '0.59021',
    width: '23.4851',
    height: '23.4851',
    transform: 'rotate(45 27.3936 0.59021)',
    className: _.__invalid_toastBG
  }),
  (0, s.jsx)('rect', {
    x: '44.5903',
    y: '7',
    width: '14.4203',
    height: '14.4203',
    transform: 'rotate(45 44.5903 7)',
    className: _.__invalid_toastBG
  }),
  (0, s.jsx)('rect', {
    x: '10.1968',
    y: '13',
    width: '6',
    height: '6',
    transform: 'rotate(45 10.1968 13)',
    fill: t
  }),
  (0, s.jsx)('path', {
    d: 'M27.3936 4.39355L34.1233 16.2873L27.3936 28.1811L20.6638 16.2873L27.3936 4.39355Z',
    fill: t
  }),
  (0, s.jsx)('rect', {
    x: '44.5903',
    y: '13',
    width: '6',
    height: '6',
    transform: 'rotate(45 44.5903 13)',
    fill: t
  })
]
  });
};

function E(e) {
  let {
achievement: t,
unlocked: n
  } = e, {
name: r,
description: E,
rarity: T,
hideDescriptionUntilUnlock: I,
onAction: R
  } = t, {
color: C
  } = (0, o.F7)(T);
  a.useEffect(() => {
let e = setTimeout(() => {
  c.Z.playAchievementUnlockSound();
}, 50);
return () => {
  clearTimeout(e);
};
  }, []);
  let g = null != R && n,
p = g ? l.Clickable : 'div';
  return (0, s.jsxs)(p, {
className: i()(_.container, g && _.actionable),
onClick: () => {
  g && R();
},
children: [
  (0, s.jsx)('div', {
    className: _.iconContainer,
    children: (0, s.jsx)(d.Z, {
      achievementId: t.id,
      size: d.Z.Sizes.SIZE_40,
      unlocked: n
    })
  }),
  (0, s.jsxs)('div', {
    className: _.__invalid_nameContainer,
    children: [
      (0, s.jsx)(l.Text, {
        variant: 'text-md/semibold',
        color: 'header-primary',
        children: r()
      }),
      (0, s.jsx)(l.Text, {
        variant: 'text-xs/medium',
        color: 'header-secondary',
        children: I && !n ? '?????' : E()
      })
    ]
  }),
  (0, s.jsx)('div', {
    className: _.flair,
    children: (0, s.jsx)(u, {
      color: C
    })
  })
]
  });
}