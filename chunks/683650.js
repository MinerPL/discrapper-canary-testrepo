n.d(t, {
  o: function() {
return m;
  }
});
var i = n(735250);
n(470079);
var s = n(120356),
  a = n.n(s),
  r = n(481060),
  l = n(266843),
  o = n(341907),
  c = n(709158),
  u = n(46140),
  d = n(689938),
  _ = n(687133),
  E = n(87181);

function I() {
  let e = (0, c.Z)(u.dr.EMBED_DESKTOP);
  return (0, i.jsx)('div', {
className: _.buttonContainer,
children: (0, i.jsx)(r.Button, {
  className: _.button,
  color: r.ButtonColors.BRAND,
  onClick: () => {
    (0, o.navigateToQuestHome)(u.dr.EMBED_DESKTOP);
  },
  children: e ? d.Z.Messages.QUESTS : d.Z.Messages.GIFT_INVENTORY
})
  });
}

function m() {
  let {
containerRef: e,
size: t
  } = (0, l.h)();
  return (0, i.jsxs)('div', {
ref: t => e.current = t,
className: a()(_.container, {
  [_.wide]: 'lg' === t,
  [_.tall]: 'lg' !== t
}),
children: [
  (0, i.jsxs)('div', {
    className: _.contentContainer,
    children: [
      (0, i.jsx)(r.Heading, {
        variant: 'lg' === t ? 'heading-xl/bold' : 'heading-lg/bold',
        color: 'header-primary',
        children: d.Z.Messages.QUESTS_EMBED_INVALID_HEADING
      }),
      (0, i.jsx)(r.Text, {
        variant: 'lg' === t ? 'text-sm/medium' : 'text-xs/medium',
        color: 'text-normal',
        className: _.__invalid_mobileWebCopy,
        children: d.Z.Messages.QUESTS_EMBED_INVALID_BODY_2
      }),
      (0, i.jsx)(I, {})
    ]
  }),
  (0, i.jsx)('div', {
    className: _.imgContainer,
    children: (0, i.jsx)('img', {
      src: E,
      alt: '',
      className: _.missingQuestImage
    })
  })
]
  });
}