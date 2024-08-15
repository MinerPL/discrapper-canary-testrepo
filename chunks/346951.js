var n = t(735250),
  a = t(470079),
  i = t(481060),
  r = t(707558),
  o = t(577720),
  l = t(689938),
  c = t(815420);
let d = () => [{
icon: c.perkNewsletter,
title: l.Z.Messages.HYPESQUAD_PERK_TITLE_NEWSLETTER,
description: l.Z.Messages.HYPESQUAD_PERK_DESCRIPTION_NEWSLETTER
  },
  {
icon: c.perkBadge,
title: l.Z.Messages.HYPESQUAD_PERK_TITLE_PROFILE_BADGE,
description: l.Z.Messages.HYPESQUAD_PERK_DESCRIPTION_PROFILE_BADGE
  },
  {
icon: c.perkChallenges,
title: l.Z.Messages.HYPESQUAD_PERK_TITLE_SQUAD_CHALLENGES,
description: l.Z.Messages.HYPESQUAD_PERK_DESCRIPTION_SQUAD_CHALLENGES
  }
];
class _ extends a.Component {
  render() {
return (0, n.jsxs)('div', {
  className: c.features,
  children: [
    (0, n.jsx)(o.Z, {
      className: c.video,
      videoID: 'SWzB1mx2o5k'
    }),
    (0, n.jsx)(i.Heading, {
      className: c.perksHeading,
      variant: 'heading-sm/semibold',
      children: l.Z.Messages.HYPESQUAD_PERKS_HEADING
    }),
    (0, n.jsx)(r.Z, {
      features: d()
    })
  ]
});
  }
}
s.Z = _;