"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("442837"),
  o = n("950104"),
  u = n("780384"),
  d = n("481060"),
  c = n("808268"),
  f = n("810090"),
  E = n("358085"),
  h = n("617136"),
  _ = n("272008"),
  C = n("113434"),
  S = n("569984"),
  m = n("497505"),
  p = n("918701"),
  I = n("865364"),
  T = n("340100"),
  g = n("611855"),
  A = n("644646"),
  N = n("78826"),
  v = n("670638"),
  R = n("667105"),
  L = n("341907"),
  O = n("46140"),
  M = n("689938"),
  P = n("861731");
let y = s.forwardRef(function(e, t) {
  var n, l;
  let {
    className: I,
    isExpanded: y,
    isExpansionAnimationComplete: D,
    onCtxMenuOpen: b,
    onCtxMenuClose: U,
    onCtxMenuSelect: j,
    quest: G,
    useReducedMotion: w
  } = e, k = (0, r.useStateFromStores)([S.default], () => S.default.isEnrolling(G.id), [G]), F = (0, C.useQuestFormattedDate)(G.config.expiresAt), B = (0, C.useQuestFormattedDate)(G.config.rewardCodeExpiresAt), H = s.useMemo(() => (0, p.isAssetAnimated)(G.config.assets.questBarHero), [G]), V = (0, R.useHasLaunchedGame)(G.config.applicationId), Y = s.useCallback(() => {
    (0, _.enrollInQuest)(G.id, {
      questContent: m.QuestContent.QUEST_BAR,
      questContentCTA: h.QuestContentCTA.ACCEPT_QUEST
    })
  }, [G]), W = (0, R.useHandleClaimQuestsReward)({
    quest: G,
    location: m.QuestContent.QUEST_BAR
  }), K = s.useCallback(() => {
    (0, L.openGameLink)(G, {
      content: m.QuestContent.QUEST_BAR,
      ctaContent: h.QuestContentCTA.OPEN_GAME_LINK
    })
  }, [G]), z = G.config.variants.includes(O.QuestVariants.POST_ENROLLMENT_CTA), q = s.useMemo(() => (0, p.calculatePercentComplete)(G) > 0, [G]), Q = (null === (n = G.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, Z = (null === (l = G.userStatus) || void 0 === l ? void 0 : l.completedAt) != null, X = s.useMemo(() => (0, p.hasQuestCollectibleRewards)(G.config), [G.config]), J = y && D, $ = (0, p.getQuestBarHeroAssetUrl)(G), ee = (0, p.getQuestsInstructionsToWinReward)({
    quest: G
  }), et = (0, E.isWeb)(), en = s.useMemo(() => {
    let e = (0, u.getContrastingColor)(G.config.colors.primary, {
      base: "#ffffff",
      contrastRatio: u.WCAGContrastRatios.Text
    });
    return {
      "--custom-cta-color": e,
      "--custom-cta-color-hover": (0, o.darkenColor)(e, .3),
      "--custom-cta-color-active": (0, o.darkenColor)(e, .35)
    }
  }, [G.config.colors.primary]);
  return (0, a.jsx)("div", {
    "aria-hidden": !J,
    className: i()(I, P.contentExpanded, {
      [P.contentInteractable]: J
    }),
    children: Q ? (0, a.jsxs)("div", {
      className: P.questAcceptedContent,
      ref: t,
      children: [(0, a.jsxs)("div", {
        className: P.utils,
        children: [(0, a.jsxs)("div", {
          className: P.questAcceptedContentHeading,
          children: [(0, a.jsx)(A.default, {
            className: P.questProgressRewardTile,
            learnMoreStyle: "icon",
            quest: G,
            questContent: m.QuestContent.QUEST_BAR
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)(d.Heading, {
              color: "always-white",
              variant: "heading-sm/semibold",
              children: (0, p.getContextualEntrypointHeading)(G)
            }), (0, a.jsx)(d.Text, {
              className: P.questAcceptedContentCopySubheading,
              color: "always-white",
              variant: "text-xxs/normal",
              children: Z ? M.default.Messages.QUESTS_CLAIM_BY.format({
                expirationDate: B
              }) : M.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
                expirationDate: F
              })
            })]
          })]
        }), (0, a.jsx)(v.QuestsEntryContextMenuPopout, {
          onOpen: b,
          onClose: U,
          onSelect: j,
          questContent: m.QuestContent.QUEST_BAR,
          quest: G,
          shouldShowDisclosure: !1,
          showShareLink: !0,
          children: e => (0, a.jsx)(d.Clickable, {
            ...e,
            className: P.submenuWrapper,
            "aria-label": M.default.Messages.ACTIONS,
            children: (0, a.jsx)(c.default, {
              className: P.submenuIcon
            })
          })
        })]
      }), Z ? (0, a.jsx)(d.Button, {
        className: i()(P.cta, P.ctaClaimReward),
        style: X ? en : void 0,
        color: d.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: W,
        size: d.Button.Sizes.NONE,
        children: M.default.Messages.QUESTS_CLAIM_REWARD
      }) : (0, a.jsx)(d.Text, {
        className: P.description,
        color: "always-white",
        variant: "text-xs/normal",
        children: ee
      }), (0, a.jsx)(T.default, {
        quest: G
      }), !et && !q && !V && z && (0, a.jsx)(x, {
        onClick: J ? K : void 0
      })]
    }) : (0, a.jsxs)("div", {
      className: P.questUnacceptedContent,
      children: [(0, a.jsxs)("div", {
        className: P.questPromoContent,
        ref: t,
        children: [(0, a.jsxs)("div", {
          className: P.utils,
          children: [(0, a.jsx)(g.default, {
            color: "always-white"
          }), (0, a.jsx)(v.QuestsEntryContextMenuPopout, {
            onOpen: b,
            onClose: U,
            onSelect: j,
            questContent: m.QuestContent.QUEST_BAR,
            quest: G,
            shouldShowDisclosure: !0,
            showShareLink: !0,
            children: e => (0, a.jsx)(d.Clickable, {
              ...e,
              className: P.submenuWrapper,
              "aria-label": M.default.Messages.ACTIONS,
              children: (0, a.jsx)(c.default, {
                className: P.submenuIcon
              })
            })
          })]
        }), (0, a.jsxs)("div", {
          className: P.details,
          children: [(0, a.jsx)(A.default, {
            className: P.rewardTile,
            learnMoreStyle: "text",
            quest: G,
            questContent: m.QuestContent.QUEST_BAR
          }), (0, a.jsx)(d.Heading, {
            className: P.title,
            color: "always-white",
            variant: "heading-md/medium",
            children: M.default.Messages.QUESTS_TITLE.format({
              questName: G.config.messages.questName
            })
          }), (0, a.jsx)(d.Text, {
            className: P.description,
            color: "always-white",
            variant: "text-sm/normal",
            children: ee
          })]
        }), (0, a.jsx)(d.Button, {
          className: P.cta,
          style: X ? en : void 0,
          color: d.Button.Colors.CUSTOM,
          fullWidth: !0,
          onClick: J ? Y : void 0,
          size: d.Button.Sizes.NONE,
          submitting: k,
          children: M.default.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), (0, a.jsx)("div", {
        className: P.heroAssetWrapper,
        style: {
          color: G.config.colors.secondary
        },
        children: H ? (0, a.jsx)(N.QuestsAsset, {
          id: "QuestBarContentExpanded_heroAnimated",
          children: e => (0, a.jsx)(f.default, {
            ref: e,
            autoPlay: !w,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: P.heroAsset,
            controls: !1,
            children: (0, a.jsx)("source", {
              src: $,
              type: (0, p.getVideoAssetMimeType)($)
            })
          })
        }) : (0, a.jsx)(N.QuestsAsset, {
          id: "QuestBarContentExpanded_heroStatic",
          children: e => (0, a.jsx)("img", {
            ref: e,
            alt: "",
            className: P.heroAsset,
            src: $
          })
        })
      })]
    })
  })
});

function x(e) {
  let {
    style: t,
    onClick: n
  } = e;
  return (0, I.useIsEligibleForQuestBarProgressCTA)({
    location: O.QuestsExperimentLocations.QUESTS_BAR,
    autoTrackExposure: !0
  }) ? (0, a.jsx)(d.Button, {
    className: P.cta,
    style: t,
    color: d.Button.Colors.CUSTOM,
    fullWidth: !0,
    onClick: n,
    size: d.Button.Sizes.NONE,
    children: M.default.Messages.QUESTS_GET_THIS_GAME
  }) : null
}
t.default = y