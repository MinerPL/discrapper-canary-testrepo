"use strict";
s.r(t);
var a = s("735250"),
  n = s("470079"),
  l = s("481060"),
  i = s("707558"),
  r = s("577720"),
  o = s("689938"),
  d = s("675521");
let u = () => [{
  icon: d.perkNewsletter,
  title: o.default.Messages.HYPESQUAD_PERK_TITLE_NEWSLETTER,
  description: o.default.Messages.HYPESQUAD_PERK_DESCRIPTION_NEWSLETTER
}, {
  icon: d.perkBadge,
  title: o.default.Messages.HYPESQUAD_PERK_TITLE_PROFILE_BADGE,
  description: o.default.Messages.HYPESQUAD_PERK_DESCRIPTION_PROFILE_BADGE
}, {
  icon: d.perkChallenges,
  title: o.default.Messages.HYPESQUAD_PERK_TITLE_SQUAD_CHALLENGES,
  description: o.default.Messages.HYPESQUAD_PERK_DESCRIPTION_SQUAD_CHALLENGES
}];
class c extends n.Component {
  render() {
    return (0, a.jsxs)("div", {
      className: d.features,
      children: [(0, a.jsx)(r.default, {
        className: d.video,
        videoID: "SWzB1mx2o5k"
      }), (0, a.jsx)(l.Heading, {
        className: d.perksHeading,
        variant: "heading-sm/semibold",
        children: o.default.Messages.HYPESQUAD_PERKS_HEADING
      }), (0, a.jsx)(i.default, {
        features: u()
      })]
    })
  }
}
t.default = c