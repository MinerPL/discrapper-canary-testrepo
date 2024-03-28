"use strict";
i.r(t), i.d(t, {
  default: function() {
    return L
  }
});
var s = i("735250");
i("470079");
var a = i("481060"),
  l = i("623624"),
  n = i("430824"),
  o = i("496675"),
  d = i("285952"),
  u = i("976644"),
  r = i("626135"),
  _ = i("565799"),
  c = i("501655"),
  E = i("146085"),
  S = i("981631"),
  T = i("474936"),
  I = i("689938"),
  M = i("867993");

function L(e) {
  var t;
  let i, {
      channel: L,
      transitionState: A,
      onClose: g
    } = e,
    p = n.default.getGuild(L.guild_id),
    O = null !== (t = null == p ? void 0 : p.maxStageVideoChannelUsers) && void 0 !== t ? t : 0,
    m = !!(null == p ? void 0 : p.isCommunity()),
    C = I.default.Messages.STAGE_FULL_TITLE,
    f = m ? O < S.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED : (null == p ? void 0 : p.premiumTier) !== S.BoostedGuildTiers.TIER_3 && O <= S.MAX_STAGE_VIDEO_USER_LIMIT_TIER2,
    B = o.default.can(E.MODERATE_STAGE_CHANNEL_PERMISSIONS, L);
  i = m && (null == p ? void 0 : p.premiumTier) === S.BoostedGuildTiers.TIER_3 ? O <= S.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED ? I.default.Messages.STAGE_FULL_BOOST_MORE_BODY : I.default.Messages.STAGE_FULL_MAX_BODY : f ? I.default.Messages.STAGE_FULL_BODY : I.default.Messages.STAGE_FULL_MAX_BODY;
  let U = () => {
      g(), r.default.track(S.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
        guild_id: L.guild_id,
        type: T.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
        is_moderator: B,
        action: T.BoostingUpsellAction.DISMISS
      })
    },
    h = _.default.getMutableParticipants(L.id, c.StageChannelParticipantNamedIndex.SPEAKER).filter(e => e.type === c.StageChannelParticipantTypes.VOICE).length,
    N = _.default.getParticipantCount(L.id, c.StageChannelParticipantNamedIndex.AUDIENCE);
  return r.default.track(S.AnalyticEvents.BOOSTING_UPSELL_VIEWED, {
    guild_id: L.guild_id,
    type: T.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
    is_moderator: B,
    listener_count: h + N
  }), (0, s.jsxs)(a.ModalRoot, {
    size: a.ModalSize.SMALL,
    transitionState: A,
    "aria-label": C,
    children: [(0, s.jsxs)(a.ModalHeader, {
      justify: d.default.Justify.END,
      separator: !1,
      className: M.header,
      children: [(0, s.jsx)("div", {
        className: M.fullArt
      }), (0, s.jsx)(a.ModalCloseButton, {
        onClick: g
      })]
    }), (0, s.jsxs)(a.ModalContent, {
      className: M.content,
      children: [(0, s.jsx)(a.Heading, {
        variant: "heading-xl/bold",
        children: C
      }), (0, s.jsx)(a.Text, {
        variant: "text-md/medium",
        children: i
      })]
    }), (0, s.jsx)(a.ModalFooter, {
      className: M.footer,
      children: f ? (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(a.Button, {
          look: a.ButtonLooks.LINK,
          className: M.noThanksButton,
          color: a.ButtonColors.CUSTOM,
          size: a.ButtonSizes.SMALL,
          onClick: U,
          children: I.default.Messages.NO_THANKS
        }), (0, s.jsx)(u.default, {
          onClick: () => {
            g(), (0, l.openGuildBoostingMarketingModal)({
              guildId: L.guild_id,
              location: {
                section: S.AnalyticsSections.STAGE_VIDEO_LIMIT
              }
            }), r.default.track(S.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
              guild_id: L.guild_id,
              type: T.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
              is_moderator: B,
              action: T.BoostingUpsellAction.BOOST
            })
          },
          size: a.ButtonSizes.SMALL,
          className: M.boostButton,
          children: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
        })]
      }) : (0, s.jsx)(a.Button, {
        onClick: U,
        size: a.ButtonSizes.SMALL,
        color: a.ButtonColors.CUSTOM,
        className: M.boostButton,
        children: I.default.Messages.GOT_IT
      })
    })]
  })
}