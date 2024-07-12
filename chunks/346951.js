var n = s(735250),
  a = s(470079),
  i = s(481060),
  r = s(707558),
  o = s(577720),
  l = s(689938),
  c = s(772258);
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
t.Z = _;