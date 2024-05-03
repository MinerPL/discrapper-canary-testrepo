"use strict";
n.r(t);
var s = n("735250");
n("470079");
var a = n("120356"),
  l = n.n(a),
  i = n("442837"),
  r = n("774867"),
  o = n("481060"),
  u = n("230711"),
  d = n("607070"),
  c = n("706454"),
  f = n("976644"),
  E = n("63063"),
  _ = n("930153"),
  m = n("617136"),
  T = n("272008"),
  I = n("113434"),
  p = n("569984"),
  h = n("497505"),
  N = n("918701"),
  S = n("340100"),
  C = n("644646"),
  A = n("667105"),
  g = n("2660"),
  M = n("981631"),
  R = n("689938"),
  v = n("780320");
let O = (e, t, n, s) => n ? s ? R.default.Messages.COLLECTIBLES_USE_NOW : R.default.Messages.QUESTS_SEE_CODE : e || t ? R.default.Messages.QUESTS_CLAIM_REWARD : R.default.Messages.QUESTS_ACCEPT,
  x = (e, t, n) => e !== h.QuestContent.QUEST_INVENTORY_CARD || n || "lg" !== t ? "lg" === t ? "text-md/medium" : "sm" === t ? "text-sm/medium" : "text-xs/medium" : "text-lg/medium";

function L(e) {
  let {
    containerSize: t,
    onClick: n,
    children: a,
    tabIndex: l
  } = e;
  return "xs" === t ? (0, s.jsx)(o.Clickable, {
    tabIndex: l,
    className: v.learnMoreLink,
    tag: "span",
    onClick: n,
    children: (0, s.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "text-link",
      children: a
    })
  }) : (0, s.jsx)(o.Button, {
    tabIndex: l,
    wrapperClassName: v.ctaButtonWrapper,
    color: o.ButtonColors.PRIMARY,
    onClick: n,
    children: a
  })
}
t.default = e => {
  var t, n, a;
  let {
    quest: D,
    location: P,
    size: y,
    isFocused: U,
    isQuestExpired: j,
    isExpanded: b,
    isAnimating: B
  } = e, G = (null === (t = D.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, F = (null === (n = D.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, k = (0, N.hasQuestCollectibleRewards)(D.config), w = (null === (a = D.userStatus) || void 0 === a ? void 0 : a.claimedAt) != null, H = b || B, V = F && !w && P !== h.QuestContent.QUESTS_EMBED, Y = (0, i.useStateFromStores)([d.default], () => d.default.useReducedMotion), K = O(G, F, w, k), W = F ? R.default.Messages.QUESTS_IN_PROGRESS_TOOLTIP : R.default.Messages.QUESTS_ACCEPT_TOOLTIP, z = (0, A.useHandleClaimQuestsReward)({
    quest: D,
    location: P
  }), Q = F && !G, q = (0, i.useStateFromStores)([p.default], () => p.default.isEnrolling(D.id)), X = () => {
    if (!F && !G) return (0, T.enrollInQuest)(D.id, {
      questContent: P,
      questContentCTA: m.QuestContentCTA.ACCEPT_QUEST
    });
    z()
  }, Z = (0, i.useStateFromStores)([c.default], () => c.default.locale), J = P === h.QuestContent.QUESTS_EMBED, $ = P === h.QuestContent.QUEST_INVENTORY_CARD, ee = $ && k, et = j && !G, en = (0, s.jsx)(C.default, {
    autoplay: U,
    className: l()(v.gridImg, {
      [v.questRewardGiftInventory]: $ && "lg" === y,
      [v.questRewardEmbed]: J && "lg" === y,
      [v.questRewardEmbedSm]: "sm" === y,
      [v.questRewardEmbedXs]: "xs" === y
    }),
    learnMoreStyle: $ ? null : "text",
    quest: D,
    questContent: P
  });
  return (0, s.jsxs)("div", {
    className: l()(v.outerContainer, {
      [v.outerContainerSm]: "sm" === y,
      [v.outerContainerXs]: "xs" === y,
      [v.outerContainerNoProgress]: !V
    }),
    style: {
      visibility: H ? "visible" : "hidden"
    },
    "aria-hidden": !H,
    children: [(0, s.jsx)(o.Tooltip, {
      text: et ? R.default.Messages.QUESTS_REWARD_TILE_EXPIRED_QUEST : null,
      tooltipContentClassName: v.rewardTileExpirationTooltip,
      shouldShow: et,
      children: e => (0, s.jsxs)("div", {
        className: v.rewardTileWrapper,
        ...e,
        children: [j && (0, s.jsx)("div", {
          className: v.rewardTileExpired,
          children: (0, s.jsx)(r.CircleExclamationPointIcon, {
            color: o.tokens.colors.WHITE
          })
        }), ee ? (0, s.jsx)(g.default, {
          questConfig: D.config,
          fallback: en,
          isFocused: U
        }) : en]
      })
    }), (0, s.jsxs)("div", {
      className: l()(v.gridText, v.taskDetails),
      children: [(0, s.jsx)(o.Text, {
        variant: x(P, y, F),
        className: v.taskInstructions,
        children: j ? R.default.Messages.QUESTS_EXPIRED_QUEST_CARD_HEADING.format({
          questName: D.config.messages.questName
        }) : R.default.Messages.QUESTS_STREAM_TASK.format({
          minutes: D.config.streamDurationRequirementMinutes,
          gameTitle: D.config.messages.gameTitle
        })
      }), (0, s.jsx)(o.Text, {
        variant: "lg" === y ? "text-sm/medium" : "text-xs/medium",
        color: "text-muted",
        children: function(e) {
          var t, n, s, a, l, i;
          let {
            quest: r,
            locale: o,
            isQuestExpired: u
          } = e, d = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, c = d && (null === (n = r.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null, f = (0, I.useQuestFormattedDate)(null === (s = r.userStatus) || void 0 === s ? void 0 : s.completedAt, {
            year: "numeric",
            month: "long",
            day: "numeric"
          }), m = (0, N.isTieredRewardCodeQuest)({
            quest: r
          });
          if (c) {
            let e = m ? (0, N.getRewardCodeQuestReward)({
                quest: r,
                idx: null === (a = r.userStatus) || void 0 === a ? void 0 : a.claimedTier
              }) : null,
              t = null !== (l = null == e ? void 0 : e.messages.nameWithArticle) && void 0 !== l ? l : null;
            return null != t ? R.default.Messages.QUEST_REWARD_COMPLETED_CLAIMED.format({
              reward: t,
              date: f
            }) : R.default.Messages.QUEST_REWARD_COMPLETED.format({
              reward: r.config.messages.rewardNameWithArticle,
              date: f
            })
          }
          if (d) return m ? R.default.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({
            date: f
          }) : R.default.Messages.QUEST_REWARD_COMPLETED.format({
            reward: r.config.messages.rewardNameWithArticle,
            date: f
          });
          let T = m ? (0, N.getRewardCodeQuestReward)({
            quest: r,
            idx: 0
          }) : null;
          return u ? R.default.Messages.QUESTS_EXPIRED_QUEST_CARD_SUBHEADING.format({
            reward: null !== (i = null == T ? void 0 : T.messages.nameWithArticle) && void 0 !== i ? i : r.config.messages.rewardNameWithArticle
          }) : null != T && null != T.approximateCount ? R.default.Messages.QUEST_REWARD_TIERED.format({
            maxReward: T.messages.nameWithArticle,
            maxRewardCount: (0, _.humanizeValue)(T.approximateCount, o),
            helpCenterLink: E.default.getArticleURL(M.HelpdeskArticles.QUESTS_LEARN_MORE)
          }) : R.default.Messages.QUEST_REWARD.format({
            reward: r.config.messages.rewardNameWithArticle
          })
        }({
          quest: D,
          locale: Z,
          isQuestExpired: j
        })
      })]
    }), (0, s.jsxs)("div", {
      className: l()(v.ctaButtonContainer, v.gridCtaButtons),
      children: [!$ && (0, s.jsx)(L, {
        containerSize: y,
        onClick: () => {
          u.default.open(M.UserSettingsSections.INVENTORY), (0, m.trackQuestContentClicked)({
            questId: D.id,
            questContent: P,
            questContentCTA: m.QuestContentCTA.LEARN_MORE
          })
        },
        children: R.default.Messages.QUESTS_LEARN_MORE_V2
      }), (!j || G) && (0, s.jsx)(o.Tooltip, {
        text: W,
        tooltipContentClassName: v.ctaTooltipCopy,
        shouldShow: !w && !G,
        children: e => G && !Y ? (0, s.jsx)(f.default, {
          ...e,
          wrapperClassName: v.ctaButtonWrapper,
          color: o.ButtonColors.BRAND,
          disabled: Q,
          submitting: q,
          onClick: X,
          children: K
        }) : (0, s.jsx)(o.Button, {
          ...e,
          wrapperClassName: v.ctaButtonWrapper,
          color: o.ButtonColors.BRAND,
          disabled: Q,
          submitting: q,
          onClick: X,
          children: K
        })
      }, W)]
    }), V && (0, s.jsx)(S.default, {
      className: v.gridProgressBar,
      color: G ? o.tokens.colors.TEXT_POSITIVE : o.tokens.colors.BG_BRAND,
      quest: D,
      isInventory: $
    })]
  })
}