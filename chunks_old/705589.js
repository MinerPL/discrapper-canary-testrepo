"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("146606"),
  o = n("446674"),
  u = n("77078"),
  d = n("433487"),
  c = n("58608"),
  f = n("815496"),
  E = n("448881"),
  h = n("879364"),
  _ = n("2973"),
  C = n("588025"),
  S = n("227231"),
  I = n("315130"),
  m = n("762985"),
  p = n("228399"),
  T = n("275986"),
  g = n("385416"),
  A = n("782340"),
  N = n("841274");
let R = s.forwardRef(function(e, t) {
  var n, l;
  let {
    className: R,
    expansionSpring: O,
    isExpanded: v,
    isExpansionAnimationComplete: L,
    onCtxMenuOpen: M,
    onCtxMenuClose: P,
    onCtxMenuSelect: y,
    quest: D,
    useReducedMotion: x
  } = e, b = (0, o.useStateFromStores)([_.default], () => _.default.isEnrolling(D.id), [D]), U = (0, h.useQuestFormattedDate)(D.config.expiresAt), G = (0, h.useQuestFormattedDate)(D.config.rewardCodeExpiresAt), j = s.useMemo(() => D.config.videoAssets.includes(C.QuestContent.QUEST_BAR), [D]), w = s.useCallback(() => {
    (0, E.enrollInQuest)(D.id, {
      questContent: C.QuestContent.QUEST_BAR,
      questContentCTA: f.QuestContentCTA.ACCEPT_QUEST
    })
  }, [D]), k = (0, g.useHandleClaimQuestsReward)({
    quest: D,
    location: C.QuestContent.QUEST_BAR
  }), {
    acceptButtonSpring: F
  } = (0, r.useSpring)({
    from: {
      acceptButtonSpring: v ? 0 : 1
    },
    to: {
      acceptButtonSpring: v ? 1 : 0
    },
    config: {
      tension: 750,
      friction: 24
    },
    delay: !x && v ? 300 : 0,
    immediate: x
  }), B = (null === (n = D.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, H = (null === (l = D.userStatus) || void 0 === l ? void 0 : l.completedAt) != null, V = v && L;
  return (0, a.jsx)(r.animated.div, {
    "aria-hidden": !V,
    className: i(R, N.contentExpanded, {
      [N.contentInteractable]: V
    }),
    style: {
      opacity: O.to({
        range: [0, 1],
        output: [0, 1]
      })
    },
    children: B ? (0, a.jsxs)("div", {
      className: N.questAcceptedContent,
      ref: t,
      children: [(0, a.jsxs)("div", {
        className: N.utils,
        children: [(0, a.jsxs)("div", {
          className: N.questAcceptedContentHeading,
          children: [(0, a.jsx)("img", {
            alt: D.config.messages.rewardName,
            className: N.questProgressRewardTile,
            src: (0, S.getRewardAssetUrl)(D.id)
          }), (0, a.jsxs)("div", {
            className: N.questAcceptedContentCopy,
            children: [(0, a.jsx)(u.Heading, {
              color: "always-white",
              variant: "heading-sm/semibold",
              children: (0, S.getContextualEntrypointHeading)(D)
            }), (0, a.jsx)(u.Text, {
              className: N.questAcceptedContentCopySubheading,
              color: "always-white",
              variant: "text-xxs/normal",
              children: H ? A.default.Messages.QUESTS_CLAIM_BY.format({
                expirationDate: G
              }) : A.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
                expirationDate: U
              })
            })]
          })]
        }), (0, a.jsx)(T.QuestsEntryContextMenuPopout, {
          onOpen: M,
          onClose: P,
          onSelect: y,
          questContent: C.QuestContent.QUEST_BAR,
          quest: D,
          shouldShowDisclosure: !1,
          showShareLink: !0,
          children: e => (0, a.jsx)(u.Clickable, {
            ...e,
            className: N.submenuWrapper,
            "aria-label": A.default.Messages.ACTIONS,
            children: (0, a.jsx)(d.default, {
              className: N.submenuIcon
            })
          })
        })]
      }), H ? (0, a.jsx)(u.Button, {
        className: i(N.cta, N.ctaClaimReward),
        color: u.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: k,
        size: u.Button.Sizes.NONE,
        children: A.default.Messages.QUESTS_CLAIM_REWARD
      }) : (0, a.jsx)(u.Text, {
        className: N.description,
        color: "always-white",
        variant: "text-xs/normal",
        children: A.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
          gameTitle: D.config.messages.gameTitle,
          streamingDurationRequirement: D.config.streamDurationRequirementMinutes,
          questReward: D.config.messages.rewardNameWithArticle
        })
      }), (0, a.jsx)(I.default, {
        quest: D
      })]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)("div", {
        className: N.questPromoContent,
        ref: t,
        children: [(0, a.jsxs)("div", {
          className: N.utils,
          children: [(0, a.jsx)(m.default, {
            color: "always-white"
          }), (0, a.jsx)(T.QuestsEntryContextMenuPopout, {
            onOpen: M,
            onClose: P,
            onSelect: y,
            questContent: C.QuestContent.QUEST_BAR,
            quest: D,
            shouldShowDisclosure: !0,
            children: e => (0, a.jsx)(u.Clickable, {
              ...e,
              className: N.submenuWrapper,
              "aria-label": A.default.Messages.ACTIONS,
              children: (0, a.jsx)(d.default, {
                className: N.submenuIcon
              })
            })
          })]
        }), (0, a.jsxs)("div", {
          className: N.details,
          children: [(0, a.jsx)(p.default, {
            className: N.rewardTile,
            quest: D,
            questContent: C.QuestContent.QUEST_BAR
          }), (0, a.jsx)(u.Heading, {
            className: N.title,
            color: "always-white",
            variant: "heading-md/medium",
            children: A.default.Messages.QUESTS_TITLE.format({
              questName: D.config.messages.questName
            })
          }), (0, a.jsx)(u.Text, {
            className: N.description,
            color: "always-white",
            variant: "text-sm/normal",
            children: A.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
              gameTitle: D.config.messages.gameTitle,
              streamingDurationRequirement: D.config.streamDurationRequirementMinutes,
              questReward: D.config.messages.rewardNameWithArticle
            })
          })]
        }), (0, a.jsx)(r.animated.div, {
          className: N.ctaWrapper,
          style: {
            opacity: F,
            transform: F.to({
              range: [0, 1],
              output: [24, 0]
            }).to(e => "translateY(".concat(e, "px)"))
          },
          children: (0, a.jsx)(u.Button, {
            className: N.cta,
            color: u.Button.Colors.CUSTOM,
            fullWidth: !0,
            onClick: w,
            size: u.Button.Sizes.NONE,
            submitting: b,
            children: A.default.Messages.QUESTS_ACCEPT_QUEST
          })
        })]
      }), (0, a.jsx)("div", {
        className: N.heroAssetWrapper,
        style: {
          color: D.config.colors.secondary
        },
        children: (0, a.jsx)(c.default, {
          autoPlay: !x,
          loop: !0,
          muted: !0,
          playsInline: !0,
          className: N.heroAsset,
          controls: !1,
          poster: (0, S.getQuestBarStaticHeroAssetUrl)(D.id),
          children: x || !j ? null : (0, a.jsx)("source", {
            src: (0, S.getQuestBarAnimatedHeroAssetUrl)(D.id),
            type: "video/webm"
          })
        }, x ? "static" : "animated")
      })]
    })
  })
});
var O = R