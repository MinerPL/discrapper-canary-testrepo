"use strict";
i.r(t), i.d(t, {
  default: function() {
    return E
  }
});
var n = i("37983");
i("884691");
var s = i("77078"),
  l = i("95039"),
  r = i("305961"),
  a = i("957255"),
  o = i("145131"),
  u = i("181114"),
  c = i("599110"),
  d = i("488464"),
  f = i("998716"),
  h = i("923510"),
  v = i("49111"),
  p = i("646718"),
  _ = i("782340"),
  C = i("821715");

function E(e) {
  var t;
  let i, {
      channel: E,
      transitionState: m,
      onClose: I
    } = e,
    g = r.default.getGuild(E.guild_id),
    S = null !== (t = null == g ? void 0 : g.maxStageVideoChannelUsers) && void 0 !== t ? t : 0,
    T = !!(null == g ? void 0 : g.isCommunity()),
    M = _.default.Messages.STAGE_FULL_TITLE,
    A = T ? S < v.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED : (null == g ? void 0 : g.premiumTier) !== v.BoostedGuildTiers.TIER_3 && S <= v.MAX_STAGE_VIDEO_USER_LIMIT_TIER2,
    L = a.default.can(h.MODERATE_STAGE_CHANNEL_PERMISSIONS, E);
  i = T && (null == g ? void 0 : g.premiumTier) === v.BoostedGuildTiers.TIER_3 ? S <= v.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED ? _.default.Messages.STAGE_FULL_BOOST_MORE_BODY : _.default.Messages.STAGE_FULL_MAX_BODY : A ? _.default.Messages.STAGE_FULL_BODY : _.default.Messages.STAGE_FULL_MAX_BODY;
  let N = () => {
      I(), c.default.track(v.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
        guild_id: E.guild_id,
        type: p.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
        is_moderator: L,
        action: p.BoostingUpsellAction.DISMISS
      })
    },
    x = d.default.getMutableParticipants(E.id, f.StageChannelParticipantNamedIndex.SPEAKER),
    b = x.filter(e => e.type === f.StageChannelParticipantTypes.VOICE),
    y = b.length,
    R = d.default.getParticipantCount(E.id, f.StageChannelParticipantNamedIndex.AUDIENCE);
  return c.default.track(v.AnalyticEvents.BOOSTING_UPSELL_VIEWED, {
    guild_id: E.guild_id,
    type: p.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
    is_moderator: L,
    listener_count: y + R
  }), (0, n.jsxs)(s.ModalRoot, {
    size: s.ModalSize.SMALL,
    transitionState: m,
    "aria-label": M,
    children: [(0, n.jsxs)(s.ModalHeader, {
      justify: o.default.Justify.END,
      separator: !1,
      className: C.header,
      children: [(0, n.jsx)("div", {
        className: C.fullArt
      }), (0, n.jsx)(s.ModalCloseButton, {
        onClick: I
      })]
    }), (0, n.jsxs)(s.ModalContent, {
      className: C.content,
      children: [(0, n.jsx)(s.Heading, {
        variant: "heading-xl/bold",
        children: M
      }), (0, n.jsx)(s.Text, {
        variant: "text-md/medium",
        children: i
      })]
    }), (0, n.jsx)(s.ModalFooter, {
      className: C.footer,
      children: A ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(s.Button, {
          look: s.ButtonLooks.LINK,
          className: C.noThanksButton,
          color: s.ButtonColors.CUSTOM,
          size: s.ButtonSizes.SMALL,
          onClick: N,
          children: _.default.Messages.NO_THANKS
        }), (0, n.jsx)(u.default, {
          onClick: () => {
            I(), (0, l.openGuildBoostingMarketingModal)({
              guildId: E.guild_id,
              location: {
                section: v.AnalyticsSections.STAGE_VIDEO_LIMIT
              }
            }), c.default.track(v.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
              guild_id: E.guild_id,
              type: p.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
              is_moderator: L,
              action: p.BoostingUpsellAction.BOOST
            })
          },
          size: s.ButtonSizes.SMALL,
          className: C.boostButton,
          children: _.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
        })]
      }) : (0, n.jsx)(s.Button, {
        onClick: N,
        size: s.ButtonSizes.SMALL,
        color: s.ButtonColors.CUSTOM,
        className: C.boostButton,
        children: _.default.Messages.GOT_IT
      })
    })]
  })
}