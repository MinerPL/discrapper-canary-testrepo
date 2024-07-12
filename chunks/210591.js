n.d(t, {
  Z: function() {
return N;
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
  I = n(293810),
  E = n(689938),
  T = n(601238);

function m(e) {
  let {
checked: t,
children: n
  } = e;
  return (0, s.jsxs)('div', {
className: T.row,
children: [
  (0, s.jsx)(d.Text, {
    variant: 'text-md/normal',
    color: 'interactive-active',
    className: T.rowText,
    children: n
  }),
  t ? (0, s.jsx)(d.CircleCheckIcon, {
    size: 'md',
    color: 'currentColor',
    secondaryColor: c.Z.unsafe_rawColors.WHITE_500.css,
    className: r()(T.rowIcon, T.rowIconChecked)
  }) : (0, s.jsx)('div', {
    className: r()(T.rowIcon, T.rowIconEmpty)
  })
]
  });
}

function N(e) {
  let {
children: t
  } = e, [n, i] = a.useState(!1), r = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), c = t.flatMap(e => e.items.map(e => e.completed)), N = c.filter(e => e).length / c.length, S = 1 === N, h = (0, l.useSpring)({
width: ''.concat(100 * N, '%'),
immediate: r
  }), g = [
E.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_LINK_PROMO_PAGE.format({
  promoPageGuideUrl: I.iv.PROMO_PAGE_GUIDE
}),
E.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_LINK_CASE_STUDIES.format({
  caseStudiesUrl: I.iv.CASE_STUDIES
}),
E.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_LINK_SUBSCRIPTION_OFFERING.format({
  subscriptionOfferingGuideUrl: I.iv.SUBSCRIPTION_OFFERING_GUIDE
}),
E.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_LINK_TIER_STRUCTURE.format({
  tierStructureGuideUrl: I.iv.TIER_STRUCTURE_GUIDE
})
  ], C = n ? null : (0, s.jsxs)(s.Fragment, {
children: [
  !S && t.map((e, t) => {
    let {
      title: n,
      items: i
    } = e;
    return (0, s.jsxs)(a.Fragment, {
      children: [
        t > 0 && (0, s.jsx)(d.FormDivider, {
          className: T.divider
        }),
        (0, s.jsx)(d.FormTitle, {
          className: T.categoryTitle,
          children: n
        }),
        i.map((e, t) => (0, s.jsx)(m, {
          children: e.description,
          checked: e.completed
        }, t))
      ]
    }, t);
  }),
  (0, s.jsx)(d.FormDivider, {
    className: T.divider
  }),
  (0, s.jsx)(d.FormTitle, {
    className: T.categoryTitle,
    children: E.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_LEARN_MORE_SECTION_TITLE
  }),
  g.map((e, t) => (0, s.jsx)('div', {
    className: T.row,
    children: (0, s.jsx)(d.Text, {
      variant: 'text-md/normal',
      children: e
    })
  }, t))
]
  });
  return (0, s.jsx)('div', {
className: T.checklist,
children: (0, s.jsxs)('div', {
  className: T.container,
  children: [
    (0, s.jsxs)(d.Clickable, {
      className: T.headerBar,
      onClick: () => i(e => !e),
      children: [
        (0, s.jsx)(d.Heading, {
          variant: 'heading-md/semibold',
          className: T.headerText,
          children: E.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_HEADER
        }),
        (0, s.jsx)(_.Z, {
          direction: n ? _.Z.Directions.DOWN : _.Z.Directions.UP,
          className: T.headerCaret
        })
      ]
    }),
    !S && (0, s.jsx)('div', {
      className: T.progressBarOuter,
      children: (0, s.jsx)(l.animated.div, {
        className: T.progressBarInner,
        style: h
      })
    }),
    C
  ]
})
  });
}