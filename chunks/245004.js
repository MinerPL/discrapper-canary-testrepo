var r = n(735250);
n(470079);
var i = n(399606),
  a = n(481060),
  s = n(607070),
  o = n(689938),
  l = n(6443),
  u = n(567949),
  c = n(552781),
  d = n(952567),
  _ = n(807159);

function E(e) {
  let {
description: t,
heading: n,
imgSrc: i
  } = e;
  return (0, r.jsxs)('div', {
className: l.topPerksCard,
children: [
  (0, r.jsx)('img', {
    className: l.topPerksCardImage,
    src: i,
    alt: ''
  }),
  (0, r.jsx)(a.Heading, {
    className: l.topPerksCardHeading,
    variant: 'heading-lg/extrabold',
    children: n
  }),
  (0, r.jsx)(a.Text, {
    className: l.topPerksCardDescription,
    variant: 'text-sm/normal',
    children: t
  })
]
  });
}
t.Z = function() {
  let e = (0, i.e7)([s.Z], () => s.Z.useReducedMotion);
  return (0, r.jsxs)('div', {
className: l.wrapper,
children: [
  (0, r.jsx)(a.Heading, {
    className: l.heading,
    variant: 'heading-xxl/extrabold',
    children: o.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_CARDS_HEADING
  }),
  (0, r.jsxs)('div', {
    className: l.topPerksCards,
    children: [
      (0, r.jsx)(E, {
        description: o.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_CARDS_HD_STREAMING_DESCRIPTION,
        heading: o.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_CARDS_HD_STREAMING_HEADING,
        imgSrc: d
      }),
      (0, r.jsx)(E, {
        description: o.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_CARDS_ANIMATED_GUILD_ICON_DESCRIPTION,
        heading: o.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_CARDS_ANIMATED_GUILD_ICON_HEADING,
        imgSrc: e ? c : u
      }),
      (0, r.jsx)(E, {
        description: o.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_VANITY_URL_DESCRIPTION,
        heading: o.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_VANITY_URL_HEADING,
        imgSrc: _
      })
    ]
  })
]
  });
};