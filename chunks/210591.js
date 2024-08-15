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
  o = n(692547),
  c = n(481060),
  d = n(259580),
  u = n(293810),
  _ = n(689938),
  I = n(347878);

function E(e) {
  let {
checked: t,
children: n
  } = e;
  return (0, s.jsxs)('div', {
className: I.row,
children: [
  (0, s.jsx)(c.Text, {
    variant: 'text-md/normal',
    color: 'interactive-active',
    className: I.rowText,
    children: n
  }),
  t ? (0, s.jsx)(c.CircleCheckIcon, {
    size: 'md',
    color: 'currentColor',
    secondaryColor: o.Z.unsafe_rawColors.WHITE_500.css,
    className: r()(I.rowIcon, I.rowIconChecked)
  }) : (0, s.jsx)('div', {
    className: r()(I.rowIcon, I.rowIconEmpty)
  })
]
  });
}

function T(e) {
  let {
children: t
  } = e, [n, i] = a.useState(!1), r = t.flatMap(e => e.items.map(e => e.completed)), o = r.filter(e => e).length / r.length, T = 1 === o, m = (0, c.useSpring)({
width: ''.concat(100 * o, '%')
  }), N = [
_.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_LINK_PROMO_PAGE.format({
  promoPageGuideUrl: u.iv.PROMO_PAGE_GUIDE
}),
_.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_LINK_CASE_STUDIES.format({
  caseStudiesUrl: u.iv.CASE_STUDIES
}),
_.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_LINK_SUBSCRIPTION_OFFERING.format({
  subscriptionOfferingGuideUrl: u.iv.SUBSCRIPTION_OFFERING_GUIDE
}),
_.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_LINK_TIER_STRUCTURE.format({
  tierStructureGuideUrl: u.iv.TIER_STRUCTURE_GUIDE
})
  ], S = n ? null : (0, s.jsxs)(s.Fragment, {
children: [
  !T && t.map((e, t) => {
    let {
      title: n,
      items: i
    } = e;
    return (0, s.jsxs)(a.Fragment, {
      children: [
        t > 0 && (0, s.jsx)(c.FormDivider, {
          className: I.divider
        }),
        (0, s.jsx)(c.FormTitle, {
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
  (0, s.jsx)(c.FormDivider, {
    className: I.divider
  }),
  (0, s.jsx)(c.FormTitle, {
    className: I.categoryTitle,
    children: _.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_LEARN_MORE_SECTION_TITLE
  }),
  N.map((e, t) => (0, s.jsx)('div', {
    className: I.row,
    children: (0, s.jsx)(c.Text, {
      variant: 'text-md/normal',
      children: e
    })
  }, t))
]
  });
  return (0, s.jsx)('div', {
className: I.checklist,
children: (0, s.jsxs)('div', {
  className: I.container,
  children: [
    (0, s.jsxs)(c.Clickable, {
      className: I.headerBar,
      onClick: () => i(e => !e),
      children: [
        (0, s.jsx)(c.Heading, {
          variant: 'heading-md/semibold',
          className: I.headerText,
          children: _.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_HEADER
        }),
        (0, s.jsx)(d.Z, {
          direction: n ? d.Z.Directions.DOWN : d.Z.Directions.UP,
          className: I.headerCaret
        })
      ]
    }),
    !T && (0, s.jsx)('div', {
      className: I.progressBarOuter,
      children: (0, s.jsx)(l.animated.div, {
        className: I.progressBarInner,
        style: m
      })
    }),
    S
  ]
})
  });
}