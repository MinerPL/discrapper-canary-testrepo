"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("718017"),
  o = n("442837"),
  u = n("481060"),
  d = n("808268"),
  c = n("810090"),
  f = n("617136"),
  E = n("272008"),
  h = n("113434"),
  _ = n("569984"),
  C = n("497505"),
  m = n("918701"),
  S = n("340100"),
  I = n("611855"),
  p = n("644646"),
  T = n("78826"),
  g = n("670638"),
  A = n("667105"),
  N = n("689938"),
  v = n("881521");
let O = s.forwardRef(function(e, t) {
  var n, l;
  let {
    className: O,
    expansionSpring: R,
    isExpanded: L,
    isExpansionAnimationComplete: P,
    onCtxMenuOpen: M,
    onCtxMenuClose: y,
    onCtxMenuSelect: D,
    quest: b,
    useReducedMotion: x
  } = e, U = (0, o.useStateFromStores)([_.default], () => _.default.isEnrolling(b.id), [b]), j = (0, h.useQuestFormattedDate)(b.config.expiresAt), G = (0, h.useQuestFormattedDate)(b.config.rewardCodeExpiresAt), w = s.useMemo(() => (0, m.isAssetAnimated)(b.config.assets.questBarHero), [b]), k = s.useCallback(() => {
    (0, E.enrollInQuest)(b.id, {
      questContent: C.QuestContent.QUEST_BAR,
      questContentCTA: f.QuestContentCTA.ACCEPT_QUEST
    })
  }, [b]), F = (0, A.useHandleClaimQuestsReward)({
    quest: b,
    location: C.QuestContent.QUEST_BAR
  }), {
    acceptButtonSpring: B
  } = (0, r.useSpring)({
    from: {
      acceptButtonSpring: L ? 0 : 1
    },
    to: {
      acceptButtonSpring: L ? 1 : 0
    },
    config: {
      tension: 750,
      friction: 24
    },
    delay: !x && L ? 300 : 0,
    immediate: x
  }), H = (null === (n = b.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, V = (null === (l = b.userStatus) || void 0 === l ? void 0 : l.completedAt) != null, Y = L && P, W = (0, m.getQuestBarHeroAssetUrl)(b);
  return (0, a.jsx)(r.animated.div, {
    "aria-hidden": !Y,
    className: i()(O, v.contentExpanded, {
      [v.contentInteractable]: Y
    }),
    style: {
      opacity: R.to({
        range: [0, 1],
        output: [0, 1]
      })
    },
    children: H ? (0, a.jsxs)("div", {
      className: v.questAcceptedContent,
      ref: t,
      children: [(0, a.jsxs)("div", {
        className: v.utils,
        children: [(0, a.jsxs)("div", {
          className: v.questAcceptedContentHeading,
          children: [(0, a.jsx)(T.QuestsAsset, {
            id: "QuestsBarContentExpanded_rewardTile",
            children: e => (0, a.jsx)("img", {
              ref: e,
              alt: b.config.messages.rewardName,
              className: v.questProgressRewardTile,
              src: (0, m.getRewardAssetUrl)(b)
            })
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)(u.Heading, {
              color: "always-white",
              variant: "heading-sm/semibold",
              children: (0, m.getContextualEntrypointHeading)(b)
            }), (0, a.jsx)(u.Text, {
              className: v.questAcceptedContentCopySubheading,
              color: "always-white",
              variant: "text-xxs/normal",
              children: V ? N.default.Messages.QUESTS_CLAIM_BY.format({
                expirationDate: G
              }) : N.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
                expirationDate: j
              })
            })]
          })]
        }), (0, a.jsx)(g.QuestsEntryContextMenuPopout, {
          onOpen: M,
          onClose: y,
          onSelect: D,
          questContent: C.QuestContent.QUEST_BAR,
          quest: b,
          shouldShowDisclosure: !1,
          showShareLink: !0,
          children: e => (0, a.jsx)(u.Clickable, {
            ...e,
            className: v.submenuWrapper,
            "aria-label": N.default.Messages.ACTIONS,
            children: (0, a.jsx)(d.default, {
              className: v.submenuIcon
            })
          })
        })]
      }), V ? (0, a.jsx)(u.Button, {
        className: i()(v.cta, v.ctaClaimReward),
        color: u.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: F,
        size: u.Button.Sizes.NONE,
        children: N.default.Messages.QUESTS_CLAIM_REWARD
      }) : (0, a.jsx)(u.Text, {
        className: v.description,
        color: "always-white",
        variant: "text-xs/normal",
        children: N.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
          gameTitle: b.config.messages.gameTitle,
          streamingDurationRequirement: b.config.streamDurationRequirementMinutes,
          questReward: b.config.messages.rewardNameWithArticle
        })
      }), (0, a.jsx)(S.default, {
        quest: b
      })]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)("div", {
        className: v.questPromoContent,
        ref: t,
        children: [(0, a.jsxs)("div", {
          className: v.utils,
          children: [(0, a.jsx)(I.default, {
            color: "always-white"
          }), (0, a.jsx)(g.QuestsEntryContextMenuPopout, {
            onOpen: M,
            onClose: y,
            onSelect: D,
            questContent: C.QuestContent.QUEST_BAR,
            quest: b,
            shouldShowDisclosure: !0,
            children: e => (0, a.jsx)(u.Clickable, {
              ...e,
              className: v.submenuWrapper,
              "aria-label": N.default.Messages.ACTIONS,
              children: (0, a.jsx)(d.default, {
                className: v.submenuIcon
              })
            })
          })]
        }), (0, a.jsxs)("div", {
          className: v.details,
          children: [(0, a.jsx)(p.default, {
            className: v.rewardTile,
            quest: b,
            questContent: C.QuestContent.QUEST_BAR
          }), (0, a.jsx)(u.Heading, {
            className: v.title,
            color: "always-white",
            variant: "heading-md/medium",
            children: N.default.Messages.QUESTS_TITLE.format({
              questName: b.config.messages.questName
            })
          }), (0, a.jsx)(u.Text, {
            className: v.description,
            color: "always-white",
            variant: "text-sm/normal",
            children: N.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
              gameTitle: b.config.messages.gameTitle,
              streamingDurationRequirement: b.config.streamDurationRequirementMinutes,
              questReward: b.config.messages.rewardNameWithArticle
            })
          })]
        }), (0, a.jsx)(r.animated.div, {
          className: v.ctaWrapper,
          style: {
            opacity: B,
            transform: B.to({
              range: [0, 1],
              output: [24, 0]
            }).to(e => "translateY(".concat(e, "px)"))
          },
          children: (0, a.jsx)(u.Button, {
            className: v.cta,
            color: u.Button.Colors.CUSTOM,
            fullWidth: !0,
            onClick: k,
            size: u.Button.Sizes.NONE,
            submitting: U,
            children: N.default.Messages.QUESTS_ACCEPT_QUEST
          })
        })]
      }), (0, a.jsx)("div", {
        className: v.heroAssetWrapper,
        style: {
          color: b.config.colors.secondary
        },
        children: w ? (0, a.jsx)(T.QuestsAsset, {
          id: "QuestsBarContentExpanded_heroAnimated",
          children: e => (0, a.jsx)(c.default, {
            ref: e,
            autoPlay: !x,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: v.heroAsset,
            controls: !1,
            children: (0, a.jsx)("source", {
              src: W,
              type: (0, m.getVideoAssetMimeType)(W)
            })
          })
        }) : (0, a.jsx)(T.QuestsAsset, {
          id: "QuestsBarContentExpanded_heroStatic",
          children: e => (0, a.jsx)("img", {
            ref: e,
            alt: "",
            className: v.heroAsset,
            src: W
          })
        })
      })]
    })
  })
});
t.default = O