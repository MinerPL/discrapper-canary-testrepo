n.d(t, {
  Z: function() {
return T;
  }
}), n(47120), n(390547);
var s = n(735250),
  a = n(470079),
  i = n(120356),
  r = n.n(i),
  l = n(338545),
  o = n(442837),
  c = n(692547),
  d = n(481060),
  u = n(607070),
  _ = n(259580),
  I = n(593201);

function E(e) {
  let {
checked: t,
children: n
  } = e;
  return (0, s.jsxs)('div', {
className: I.row,
children: [
  (0, s.jsx)(d.Text, {
    variant: 'text-md/normal',
    color: 'interactive-active',
    className: I.rowText,
    children: n
  }),
  t ? (0, s.jsx)(d.CircleCheckIcon, {
    size: 'md',
    color: 'currentColor',
    secondaryColor: c.Z.unsafe_rawColors.WHITE_500.css,
    className: r()(I.rowIcon, I.rowIconChecked)
  }) : (0, s.jsx)('div', {
    className: r()(I.rowIcon, I.rowIconEmpty)
  })
]
  });
}

function T(e) {
  let {
title: t,
children: n,
buttonLabel: i,
buttonCallback: r,
disabled: c
  } = e, [T, m] = a.useState(!1), N = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), S = n.flatMap(e => e.items.map(e => e.completed)), h = S.filter(e => e).length / S.length, g = (0, l.useSpring)({
width: ''.concat(100 * h, '%'),
immediate: N
  });
  return (0, s.jsxs)('div', {
className: I.container,
children: [
  (0, s.jsxs)(d.Clickable, {
    className: I.headerBar,
    onClick: () => m(e => !e),
    children: [
      (0, s.jsx)(d.Heading, {
        variant: 'heading-md/semibold',
        className: I.headerText,
        children: t
      }),
      (0, s.jsx)(_.Z, {
        direction: T ? _.Z.Directions.DOWN : _.Z.Directions.UP,
        className: I.headerCaret
      })
    ]
  }),
  (0, s.jsx)('div', {
    className: I.progressBarOuter,
    children: (0, s.jsx)(l.animated.div, {
      className: I.progressBarInner,
      style: g
    })
  }),
  !T && n.map((e, t) => {
    let {
      title: n,
      items: i
    } = e;
    return (0, s.jsxs)(a.Fragment, {
      children: [
        t > 0 && (0, s.jsx)(d.FormDivider, {
          className: I.divider
        }),
        (0, s.jsx)(d.FormTitle, {
          className: I.categoryTitle,
          children: n
        }),
        i.map((e, t) => (0, s.jsx)(E, {
          children: e.description,
          checked: e.completed
        }, t))
      ]
    }, t);
  }),
  null !== i && '' !== i && null !== r && (0, s.jsxs)('div', {
    children: [
      (0, s.jsx)(d.FormDivider, {
        className: I.divider
      }),
      (0, s.jsx)(d.Button, {
        className: I.button,
        size: d.Button.Sizes.SMALL,
        color: d.Button.Colors.BRAND,
        onClick: r,
        disabled: 1 !== h || c,
        children: i
      })
    ]
  })
]
  });
}