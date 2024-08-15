n.d(t, {
  Z: function() {
return I;
  }
}), n(47120), n(390547);
var s = n(735250),
  a = n(470079),
  i = n(120356),
  r = n.n(i),
  l = n(338545),
  o = n(692547),
  c = n(481060),
  d = n(259580),
  u = n(169044);

function _(e) {
  let {
checked: t,
children: n
  } = e;
  return (0, s.jsxs)('div', {
className: u.row,
children: [
  (0, s.jsx)(c.Text, {
    variant: 'text-md/normal',
    color: 'interactive-active',
    className: u.rowText,
    children: n
  }),
  t ? (0, s.jsx)(c.CircleCheckIcon, {
    size: 'md',
    color: 'currentColor',
    secondaryColor: o.Z.unsafe_rawColors.WHITE_500.css,
    className: r()(u.rowIcon, u.rowIconChecked)
  }) : (0, s.jsx)('div', {
    className: r()(u.rowIcon, u.rowIconEmpty)
  })
]
  });
}

function I(e) {
  let {
title: t,
children: n,
buttonLabel: i,
buttonCallback: r,
disabled: o
  } = e, [I, E] = a.useState(!1), T = n.flatMap(e => e.items.map(e => e.completed)), m = T.filter(e => e).length / T.length, N = (0, c.useSpring)({
width: ''.concat(100 * m, '%')
  });
  return (0, s.jsxs)('div', {
className: u.container,
children: [
  (0, s.jsxs)(c.Clickable, {
    className: u.headerBar,
    onClick: () => E(e => !e),
    children: [
      (0, s.jsx)(c.Heading, {
        variant: 'heading-md/semibold',
        className: u.headerText,
        children: t
      }),
      (0, s.jsx)(d.Z, {
        direction: I ? d.Z.Directions.DOWN : d.Z.Directions.UP,
        className: u.headerCaret
      })
    ]
  }),
  (0, s.jsx)('div', {
    className: u.progressBarOuter,
    children: (0, s.jsx)(l.animated.div, {
      className: u.progressBarInner,
      style: N
    })
  }),
  !I && n.map((e, t) => {
    let {
      title: n,
      items: i
    } = e;
    return (0, s.jsxs)(a.Fragment, {
      children: [
        t > 0 && (0, s.jsx)(c.FormDivider, {
          className: u.divider
        }),
        (0, s.jsx)(c.FormTitle, {
          className: u.categoryTitle,
          children: n
        }),
        i.map((e, t) => (0, s.jsx)(_, {
          children: e.description,
          checked: e.completed
        }, t))
      ]
    }, t);
  }),
  null !== i && '' !== i && null !== r && (0, s.jsxs)('div', {
    children: [
      (0, s.jsx)(c.FormDivider, {
        className: u.divider
      }),
      (0, s.jsx)(c.Button, {
        className: u.button,
        size: c.Button.Sizes.SMALL,
        color: c.Button.Colors.BRAND,
        onClick: r,
        disabled: 1 !== m || o,
        children: i
      })
    ]
  })
]
  });
}