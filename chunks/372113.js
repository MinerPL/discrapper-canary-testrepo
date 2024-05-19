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
  g = n("87894"),
  M = n("2660"),
  R = n("46140"),
  v = n("981631"),
  O = n("689938"),
  x = n("526123");
let L = (e, t, n, s) => n ? s ? O.default.Messages.COLLECTIBLES_USE_NOW : O.default.Messages.QUESTS_SEE_CODE : e || t ? O.default.Messages.QUESTS_CLAIM_REWARD : O.default.Messages.QUESTS_ACCEPT,
  D = (e, t, n) => (0, g.isQuestCardInGiftInventory)(e) && !n && "lg" === t ? "text-lg/medium" : "lg" === t ? "text-md/medium" : "sm" === t ? "text-sm/medium" : "text-xs/medium";

function P(e) {
  let {
    containerSize: t,
    onClick: n,
    children: a,
    tabIndex: l
  } = e;
  return "xs" === t ? (0, s.jsx)(o.Clickable, {
    tabIndex: l,
    className: x.learnMoreLink,
    tag: "span",
    onClick: n,
    children: (0, s.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "text-link",
      children: a
    })
  }) : (0, s.jsx)(o.Button, {
    tabIndex: l,
    wrapperClassName: x.ctaButtonWrapper,
    color: o.ButtonColors.PRIMARY,
    onClick: n,
    children: a
  })
}
t.default = e => {
  var t, n, a;
  let {
    quest: y,
    location: U,
    size: j,
    isFocused: b,
    isQuestExpired: B,
    isExpanded: F,
    isAnimating: G,
    contentPosition: k
  } = e, w = (null === (t = y.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, H = (null === (n = y.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, V = (0, N.hasQuestCollectibleRewards)(y.config), Y = (null === (a = y.userStatus) || void 0 === a ? void 0 : a.claimedAt) != null, K = F || G, W = (0, I.useQuestInstructionTitle)(y, R.QuestsExperimentLocations.QUESTS_CARD), z = H && !Y && U !== h.QuestContent.QUESTS_EMBED, Q = (0, i.useStateFromStores)([d.default], () => d.default.useReducedMotion), q = L(w, H, Y, V), X = H ? O.default.Messages.QUESTS_IN_PROGRESS_TOOLTIP : O.default.Messages.QUESTS_ACCEPT_TOOLTIP, Z = (0, A.useHandleClaimQuestsReward)({
    quest: y,
    location: U,
    questContentPosition: k
  }), J = H && !w, $ = (0, i.useStateFromStores)([p.default], () => p.default.isEnrolling(y.id)), ee = () => {
    if (!H && !w) return (0, T.enrollInQuest)(y.id, {
      questContent: U,
      questContentCTA: m.QuestContentCTA.ACCEPT_QUEST,
      questContentPosition: k
    });
    Z()
  }, et = (0, i.useStateFromStores)([c.default], () => c.default.locale), en = U === h.QuestContent.QUESTS_EMBED, es = (0, g.isQuestCardInGiftInventory)(U), ea = es && V, el = B && !w, ei = (0, s.jsx)(C.default, {
    autoplay: b,
    className: l()(x.gridImg, {
      [x.questRewardGiftInventory]: es && "lg" === j,
      [x.questRewardEmbed]: en && "lg" === j,
      [x.questRewardEmbedSm]: "sm" === j,
      [x.questRewardEmbedXs]: "xs" === j
    }),
    learnMoreStyle: es ? null : "text",
    quest: y,
    questContent: U,
    questContentPosition: k
  });
  return (0, s.jsxs)("div", {
    className: l()(x.outerContainer, {
      [x.outerContainerSm]: "sm" === j,
      [x.outerContainerXs]: "xs" === j,
      [x.outerContainerNoProgress]: !z
    }),
    style: {
      visibility: K ? "visible" : "hidden"
    },
    "aria-hidden": !K,
    children: [(0, s.jsx)(o.Tooltip, {
      text: el ? O.default.Messages.QUESTS_REWARD_TILE_EXPIRED_QUEST : null,
      tooltipContentClassName: x.rewardTileExpirationTooltip,
      shouldShow: el,
      children: e => (0, s.jsxs)("div", {
        className: x.rewardTileWrapper,
        ...e,
        children: [B && (0, s.jsx)("div", {
          className: x.rewardTileExpired,
          children: (0, s.jsx)(r.CircleExclamationPointIcon, {
            color: o.tokens.colors.WHITE
          })
        }), ea ? (0, s.jsx)(M.default, {
          questConfig: y.config,
          fallback: ei,
          isFocused: b
        }) : ei]
      })
    }), (0, s.jsxs)("div", {
      className: l()(x.gridText, x.taskDetails),
      children: [(0, s.jsx)(o.Text, {
        variant: D(U, j, H),
        className: x.taskInstructions,
        children: B ? O.default.Messages.QUESTS_EXPIRED_QUEST_CARD_HEADING.format({
          questName: y.config.messages.questName
        }) : W
      }), (0, s.jsx)(o.Text, {
        variant: "lg" === j ? "text-sm/medium" : "text-xs/medium",
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
            return null != t ? O.default.Messages.QUEST_REWARD_COMPLETED_CLAIMED.format({
              reward: t,
              date: f
            }) : O.default.Messages.QUEST_REWARD_COMPLETED.format({
              reward: r.config.messages.rewardNameWithArticle,
              date: f
            })
          }
          if (d) return m ? O.default.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({
            date: f
          }) : O.default.Messages.QUEST_REWARD_COMPLETED.format({
            reward: r.config.messages.rewardNameWithArticle,
            date: f
          });
          let T = m ? (0, N.getRewardCodeQuestReward)({
            quest: r,
            idx: 0
          }) : null;
          return u ? O.default.Messages.QUESTS_EXPIRED_QUEST_CARD_SUBHEADING.format({
            reward: null !== (i = null == T ? void 0 : T.messages.nameWithArticle) && void 0 !== i ? i : r.config.messages.rewardNameWithArticle
          }) : null != T && null != T.approximateCount ? O.default.Messages.QUEST_REWARD_TIERED.format({
            maxReward: T.messages.nameWithArticle,
            maxRewardCount: (0, _.humanizeValue)(T.approximateCount, o),
            helpCenterLink: E.default.getArticleURL(v.HelpdeskArticles.QUESTS_LEARN_MORE)
          }) : O.default.Messages.QUEST_REWARD.format({
            reward: r.config.messages.rewardNameWithArticle
          })
        }({
          quest: y,
          locale: et,
          isQuestExpired: B
        })
      })]
    }), (0, s.jsxs)("div", {
      className: l()(x.ctaButtonContainer, x.gridCtaButtons),
      children: [!es && (0, s.jsx)(P, {
        containerSize: j,
        onClick: () => {
          u.default.open(v.UserSettingsSections.INVENTORY), (0, m.trackQuestContentClicked)({
            questId: y.id,
            questContent: U,
            questContentPosition: k,
            questContentCTA: m.QuestContentCTA.LEARN_MORE
          })
        },
        children: O.default.Messages.QUESTS_LEARN_MORE_V2
      }), (!B || w) && (0, s.jsx)(o.Tooltip, {
        text: X,
        tooltipContentClassName: x.ctaTooltipCopy,
        shouldShow: !Y && !w,
        children: e => w && !Q ? (0, s.jsx)(f.default, {
          ...e,
          wrapperClassName: x.ctaButtonWrapper,
          color: o.ButtonColors.BRAND,
          disabled: J,
          submitting: $,
          onClick: ee,
          children: q
        }) : (0, s.jsx)(o.Button, {
          ...e,
          wrapperClassName: x.ctaButtonWrapper,
          color: o.ButtonColors.BRAND,
          disabled: J,
          submitting: $,
          onClick: ee,
          children: q
        })
      }, X)]
    }), z && (0, s.jsx)(S.default, {
      className: x.gridProgressBar,
      color: w ? o.tokens.colors.TEXT_POSITIVE : o.tokens.colors.BG_BRAND,
      quest: y,
      isInventory: es
    })]
  })
}