"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("442837"),
  o = n("289987"),
  u = n("481060"),
  d = n("808268"),
  c = n("810090"),
  f = n("617136"),
  E = n("272008"),
  h = n("113434"),
  _ = n("569984"),
  C = n("497505"),
  S = n("918701"),
  m = n("977156"),
  p = n("685613"),
  I = n("340100"),
  T = n("644646"),
  g = n("78826"),
  A = n("670638"),
  N = n("667105"),
  v = n("46140"),
  R = n("689938"),
  L = n("844256");
let O = s.forwardRef(function(e, t) {
  var n, l;
  let {
    className: O,
    isExpanded: M,
    isExpansionAnimationComplete: P,
    onCtxMenuOpen: y,
    onCtxMenuClose: x,
    onCtxMenuSelect: D,
    quest: b,
    useReducedMotion: U
  } = e, j = (0, r.useStateFromStores)([_.default], () => _.default.isEnrolling(b.id), [b]), G = (0, h.useQuestFormattedDate)(b.config.expiresAt), w = (0, h.useQuestFormattedDate)(b.config.rewardCodeExpiresAt), k = s.useMemo(() => (0, S.isAssetAnimated)(b.config.assets.questBarHero), [b]), F = s.useCallback(() => {
    (0, E.enrollInQuest)(b.id, {
      questContent: C.QuestContent.QUEST_BAR,
      questContentCTA: f.QuestContentCTA.ACCEPT_QUEST
    })
  }, [b]), B = (0, N.useHandleClaimQuestsReward)({
    quest: b,
    location: C.QuestContent.QUEST_BAR
  }), {
    primaryVariant: H
  } = m.QuestBarExperiment.useExperiment({
    location: v.QuestsExperimentLocations.QUESTS_BAR
  }, {
    autoTrackExposure: !1
  }), V = (null === (n = b.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, Y = (null === (l = b.userStatus) || void 0 === l ? void 0 : l.completedAt) != null, W = M && P, K = (0, S.getQuestBarHeroAssetUrl)(b), z = (0, S.getQuestsInstructionsToWinReward)({
    quest: b,
    useV2Variants: H === m.QuestBarExperimentVariants.V2
  });
  return (0, a.jsx)("div", {
    "aria-hidden": !W,
    className: i()(O, L.contentExpanded, {
      [L.contentInteractable]: W
    }),
    children: V ? (0, a.jsxs)("div", {
      className: L.questAcceptedContent,
      ref: t,
      children: [(0, a.jsxs)("div", {
        className: L.utils,
        children: [(0, a.jsxs)("div", {
          className: L.questAcceptedContentHeading,
          children: [(0, a.jsx)(T.default, {
            className: L.questProgressRewardTile,
            learnMoreStyle: "icon",
            quest: b,
            questContent: C.QuestContent.QUEST_BAR
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)(u.Heading, {
              color: "always-white",
              variant: "heading-sm/semibold",
              children: (0, S.getContextualEntrypointHeading)(b)
            }), (0, a.jsx)(u.Text, {
              className: L.questAcceptedContentCopySubheading,
              color: "always-white",
              variant: "text-xxs/normal",
              children: Y ? R.default.Messages.QUESTS_CLAIM_BY.format({
                expirationDate: w
              }) : R.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
                expirationDate: G
              })
            })]
          })]
        }), (0, a.jsx)(A.QuestsEntryContextMenuPopout, {
          onOpen: y,
          onClose: x,
          onSelect: D,
          questContent: C.QuestContent.QUEST_BAR,
          quest: b,
          shouldShowDisclosure: !1,
          showShareLink: !0,
          children: e => (0, a.jsx)(u.Clickable, {
            ...e,
            className: L.submenuWrapper,
            "aria-label": R.default.Messages.ACTIONS,
            children: (0, a.jsx)(d.default, {
              className: L.submenuIcon
            })
          })
        })]
      }), Y ? (0, a.jsx)(u.Button, {
        className: i()(L.cta, L.ctaClaimReward),
        color: u.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: B,
        size: u.Button.Sizes.NONE,
        children: R.default.Messages.QUESTS_CLAIM_REWARD
      }) : (0, a.jsx)(u.Text, {
        className: L.description,
        color: "always-white",
        variant: "text-xs/normal",
        children: z
      }), (0, a.jsx)(I.default, {
        quest: b
      })]
    }) : (0, a.jsxs)("div", {
      className: L.questUnacceptedContent,
      children: [(0, a.jsxs)("div", {
        className: L.questPromoContent,
        ref: t,
        children: [(0, a.jsxs)("div", {
          className: L.utils,
          children: [(0, a.jsx)(p.default, {
            className: L.partnerBranding,
            quest: b,
            withGameTile: !1
          }), (0, a.jsx)("div", {
            className: L.promotedBadgeWrapper,
            children: (0, a.jsxs)(u.Clickable, {
              className: L.promotedBadge,
              children: [(0, a.jsx)(u.Text, {
                color: "always-white",
                variant: "text-xs/normal",
                children: R.default.Messages.QUESTS_PROMOTED
              }), (0, a.jsx)(o.CircleQuestionIcon, {
                color: u.tokens.colors.WHITE,
                className: L.promotedBadgeIcon
              })]
            })
          }), (0, a.jsx)(A.QuestsEntryContextMenuPopout, {
            onOpen: y,
            onClose: x,
            onSelect: D,
            questContent: C.QuestContent.QUEST_BAR,
            quest: b,
            shouldShowDisclosure: !0,
            showShareLink: !0,
            children: e => (0, a.jsx)(u.Clickable, {
              ...e,
              className: L.submenuWrapper,
              "aria-label": R.default.Messages.ACTIONS,
              children: (0, a.jsx)(d.default, {
                className: L.submenuIcon
              })
            })
          })]
        }), (0, a.jsxs)("div", {
          className: L.details,
          children: [(0, a.jsx)(T.default, {
            className: L.rewardTile,
            learnMoreStyle: "text",
            quest: b,
            questContent: C.QuestContent.QUEST_BAR
          }), (0, a.jsx)(u.Heading, {
            className: L.title,
            color: "always-white",
            variant: "heading-md/medium",
            children: R.default.Messages.QUESTS_TITLE.format({
              questName: b.config.messages.questName
            })
          }), (0, a.jsx)(u.Text, {
            className: L.description,
            color: "always-white",
            variant: "text-xs/normal",
            children: z
          })]
        }), (0, a.jsx)(u.Button, {
          className: L.cta,
          color: u.Button.Colors.BRAND,
          fullWidth: !0,
          onClick: W ? F : void 0,
          size: u.Button.Sizes.SMALL,
          submitting: j,
          children: R.default.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), (0, a.jsx)("div", {
        className: L.heroAssetWrapper,
        children: k ? (0, a.jsx)(g.QuestsAsset, {
          id: "QuestBarV2ContentExpanded_heroAnimated",
          children: e => (0, a.jsx)(c.default, {
            ref: e,
            autoPlay: !U,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: L.heroAsset,
            controls: !1,
            children: (0, a.jsx)("source", {
              src: K,
              type: (0, S.getVideoAssetMimeType)(K)
            })
          })
        }) : (0, a.jsx)(g.QuestsAsset, {
          id: "QuestBarV2ContentExpanded_heroStatic",
          children: e => (0, a.jsx)("img", {
            ref: e,
            alt: "",
            className: L.heroAsset,
            src: K
          })
        })
      })]
    })
  })
});
t.default = O