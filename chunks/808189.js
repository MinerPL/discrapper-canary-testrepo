"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(535322),
  l = n(642113),
  u = n(57128),
  _ = n(705077),
  d = n(115102),
  c = n(757698),
  E = n(645284),
  I = n(503705),
  T = n(31698),
  h = n(528771),
  S = n(632184),
  f = n(170039),
  N = n(617506),
  A = n(267642),
  m = n(981631),
  O = n(474936),
  R = n(689938),
  C = n(845138);
let p = [{
  tier: m.Eu4.TIER_1,
  perks: [{
    icon: l.Z,
    getCopy: () => R.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_CUSTOM_EMOJI.format({
      numEmojiSlots: O.HO[m.Eu4.TIER_1].limits.emoji
    })
  }, {
    icon: I.Z,
    getCopy: () => R.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_CUSTOM_SOUNDS.format({
      numSoundboardSlots: O.HO[m.Eu4.TIER_1].limits.soundboardSounds
    }),
    isNew: !0
  }, {
    icon: d.Z,
    getCopy: () => R.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_ANIMATED_GUILD_ICON
  }, {
    icon: S.Z,
    getCopy: () => R.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_AUDIO_QUALITY
  }]
}, {
  tier: m.Eu4.TIER_2,
  perks: [{
    icon: E.Z,
    getCopy: () => R.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_STREAM_QUALITY
  }, {
    icon: N.Z,
    getCopy: () => R.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_LARGER_FILE_UPLOADS.format({
      uploadSizeLimit: R.Z.Messages.FILE_UPLOAD_LIMIT_BOOSTED_GUILD_TIER_2
    })
  }, {
    icon: u.Z,
    getCopy: () => R.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_ROLE_ICONS
  }, {
    icon: _.Z,
    getCopy: () => R.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_GUILD_BANNER
  }]
}, {
  tier: m.Eu4.TIER_3,
  perks: [{
    icon: c.Z,
    getCopy: () => R.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_VANITY_URL
  }, {
    icon: N.Z,
    getCopy: () => R.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_LARGER_FILE_UPLOADS.format({
      uploadSizeLimit: R.Z.Messages.FILE_UPLOAD_LIMIT_BOOSTED_GUILD_TIER_3
    })
  }, {
    icon: S.Z,
    getCopy: () => R.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_HIGHEST_AUDIO_QUALITY
  }, {
    icon: d.Z,
    getCopy: () => R.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_ANIMATED_GUILD_BANNER
  }, {
    icon: f.Z,
    getCopy: () => R.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_STAGE_SEATS_AND_MORE.format({
      numStageSeats: m.RcX
    })
  }]
}];
t.Z = function(e) {
  let {
    guild: t
  } = e;
  return (0, i.jsx)("div", {
    className: C.tierCards,
    children: p.map(e => (0, i.jsxs)("div", {
      className: C.tierCard,
      children: [e.tier === m.Eu4.TIER_3 && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          className: s()(C.tierCardBorderHighlight, C.tierCardBorderHighlightTopRight)
        }), (0, i.jsx)("div", {
          className: s()(C.tierCardBorderHighlight, C.tierCardBorderHighlightBottomLeft)
        }), (0, i.jsxs)("div", {
          className: s()(C.tierCardSparkleHighlight, C.tierCardSparkleHighlightTopRight),
          children: [(0, i.jsx)(h.Z, {
            className: C.tierCardSparkle1
          }), (0, i.jsx)(h.Z, {
            className: C.tierCardSparkle2
          }), (0, i.jsx)(T.Z, {
            className: C.tierCardSparkle3
          })]
        }), (0, i.jsx)("div", {
          className: s()(C.tierCardSparkleHighlight, C.tierCardSparkleHighlightBottomLeft),
          children: (0, i.jsx)(h.Z, {
            className: C.tierCardSparkle1
          })
        })]
      }), e.tier === t.premiumTier && (0, i.jsx)(o.Text, {
        className: C.tierCardCurrentTier,
        tag: "div",
        variant: "text-xs/semibold",
        color: "always-white",
        children: R.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_CURRENT_TIER_LABEL
      }), (0, i.jsxs)("div", {
        className: C.tierCardHeader,
        children: [(0, i.jsx)(o.Heading, {
          className: C.tierCardHeading,
          variant: "heading-xxl/semibold",
          color: "always-white",
          children: (0, A.nW)(e.tier, {
            useLevels: !1
          })
        }), (0, i.jsx)(o.Text, {
          className: C.tierCardBoostRequirement,
          variant: "text-md/normal",
          color: "always-white",
          children: R.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTS_REQUIRED.format({
            numBoostsRequired: m.oCV[e.tier]
          })
        })]
      }), (0, i.jsx)("ul", {
        className: C.tierCardList,
        children: e.perks.map((e, t) => null == e.predicate || e.predicate() ? (0, i.jsxs)("li", {
          className: C.tierCardPerkRow,
          children: [(0, i.jsxs)(o.Text, {
            className: C.tierCardListItem,
            variant: "text-md/normal",
            color: "always-white",
            children: [(0, i.jsx)(e.icon, {
              className: C.tierCardListIcon
            }), e.getCopy()]
          }), e.isNew ? (0, i.jsx)(a.Z, {
            className: C.tierCardNewFeatureBadge,
            forceUseColorForSparkles: !0,
            shouldInheritBackgroundColor: !0,
            shouldInheritTextColor: !0
          }) : null]
        }, t) : null)
      })]
    }, e.tier))
  })
}