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
  m = n("569984"),
  S = n("497505"),
  p = n("918701"),
  g = n("865364"),
  I = n("340100"),
  T = n("611855"),
  A = n("644646"),
  N = n("78826"),
  v = n("670638"),
  R = n("667105"),
  O = n("341907"),
  L = n("46140"),
  M = n("689938"),
  y = n("96268");
let P = s.forwardRef(function(e, t) {
  var n, l;
  let {
    className: g,
    isExpanded: P,
    isExpansionAnimationComplete: D,
    onCtxMenuOpen: b,
    onCtxMenuClose: U,
    onCtxMenuSelect: j,
    quest: G,
    useReducedMotion: k
  } = e, w = (0, r.useStateFromStores)([m.default], () => m.default.isEnrolling(G.id), [G]), B = (0, C.useQuestFormattedDate)(G.config.expiresAt), F = (0, C.useQuestFormattedDate)(G.config.rewardCodeExpiresAt), H = s.useMemo(() => (0, p.isAssetAnimated)(G.config.assets.questBarHero), [G]), V = (0, R.useHasLaunchedGame)(G.config.applicationId), Y = s.useCallback(() => {
    (0, _.enrollInQuest)(G.id, {
      questContent: S.QuestContent.QUEST_BAR,
      questContentCTA: h.QuestContentCTA.ACCEPT_QUEST
    })
  }, [G]), W = (0, R.useHandleClaimQuestsReward)({
    quest: G,
    location: S.QuestContent.QUEST_BAR
  }), K = s.useCallback(() => {
    (0, O.openGameLink)(G, {
      content: S.QuestContent.QUEST_BAR,
      ctaContent: h.QuestContentCTA.OPEN_GAME_LINK
    })
  }, [G]), z = G.config.variants.includes(L.QuestVariants.POST_ENROLLMENT_CTA), q = s.useMemo(() => (0, p.calculatePercentComplete)(G) > 0, [G]), Q = (null === (n = G.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, Z = (null === (l = G.userStatus) || void 0 === l ? void 0 : l.completedAt) != null, X = s.useMemo(() => (0, p.hasQuestCollectibleRewards)(G.config), [G.config]), J = P && D, $ = (0, p.getQuestBarHeroAssetUrl)(G), ee = (0, p.getQuestsInstructionsToWinReward)({
    quest: G,
    location: L.QuestsExperimentLocations.QUESTS_BAR
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
    className: i()(g, y.contentExpanded, {
      [y.contentInteractable]: J
    }),
    children: Q ? (0, a.jsxs)("div", {
      className: y.questAcceptedContent,
      ref: t,
      children: [(0, a.jsxs)("div", {
        className: y.utils,
        children: [(0, a.jsxs)("div", {
          className: y.questAcceptedContentHeading,
          children: [(0, a.jsx)(A.default, {
            className: y.questProgressRewardTile,
            learnMoreStyle: "icon",
            quest: G,
            questContent: S.QuestContent.QUEST_BAR
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)(d.Heading, {
              color: "always-white",
              variant: "heading-sm/semibold",
              children: (0, p.getContextualEntrypointHeading)(G)
            }), (0, a.jsx)(d.Text, {
              className: y.questAcceptedContentCopySubheading,
              color: "always-white",
              variant: "text-xxs/normal",
              children: Z ? M.default.Messages.QUESTS_CLAIM_BY_DATE.format({
                expirationDate: F
              }) : M.default.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                expirationDate: B
              })
            })]
          })]
        }), (0, a.jsx)(v.QuestsEntryContextMenuPopout, {
          onOpen: b,
          onClose: U,
          onSelect: j,
          questContent: S.QuestContent.QUEST_BAR,
          quest: G,
          shouldShowDisclosure: !1,
          showShareLink: !0,
          children: e => (0, a.jsx)(d.Clickable, {
            ...e,
            className: y.submenuWrapper,
            "aria-label": M.default.Messages.ACTIONS,
            children: (0, a.jsx)(c.default, {
              className: y.submenuIcon
            })
          })
        })]
      }), Z ? (0, a.jsx)(d.Button, {
        className: i()(y.cta, y.ctaClaimReward),
        style: X ? en : void 0,
        color: d.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: W,
        size: d.Button.Sizes.NONE,
        children: M.default.Messages.QUESTS_CLAIM_REWARD
      }) : (0, a.jsx)(d.Text, {
        className: y.description,
        color: "always-white",
        variant: "text-xs/normal",
        children: ee
      }), (0, a.jsx)(I.default, {
        quest: G
      }), !et && !q && !V && z && (0, a.jsx)(x, {
        onClick: J ? K : void 0
      })]
    }) : (0, a.jsxs)("div", {
      className: y.questUnacceptedContent,
      children: [(0, a.jsxs)("div", {
        className: y.questPromoContent,
        ref: t,
        children: [(0, a.jsxs)("div", {
          className: y.utils,
          children: [(0, a.jsx)(T.default, {
            color: "always-white"
          }), (0, a.jsx)(v.QuestsEntryContextMenuPopout, {
            onOpen: b,
            onClose: U,
            onSelect: j,
            questContent: S.QuestContent.QUEST_BAR,
            quest: G,
            shouldShowDisclosure: !0,
            showShareLink: !0,
            children: e => (0, a.jsx)(d.Clickable, {
              ...e,
              className: y.submenuWrapper,
              "aria-label": M.default.Messages.ACTIONS,
              children: (0, a.jsx)(c.default, {
                className: y.submenuIcon
              })
            })
          })]
        }), (0, a.jsxs)("div", {
          className: y.details,
          children: [(0, a.jsx)(A.default, {
            className: y.rewardTile,
            learnMoreStyle: "text",
            quest: G,
            questContent: S.QuestContent.QUEST_BAR
          }), (0, a.jsx)(d.Heading, {
            className: y.title,
            color: "always-white",
            variant: "heading-md/medium",
            children: M.default.Messages.QUESTS_TITLE.format({
              questName: G.config.messages.questName
            })
          }), (0, a.jsx)(d.Text, {
            className: y.description,
            color: "always-white",
            variant: "text-sm/normal",
            children: ee
          })]
        }), (0, a.jsx)(d.Button, {
          className: y.cta,
          style: "1232852290197655573" !== G.id ? en : void 0,
          color: d.Button.Colors.CUSTOM,
          fullWidth: !0,
          onClick: J ? Y : void 0,
          size: d.Button.Sizes.NONE,
          submitting: w,
          children: M.default.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), (0, a.jsx)("div", {
        className: y.heroAssetWrapper,
        style: {
          color: G.config.colors.secondary
        },
        children: H ? (0, a.jsx)(N.QuestsAsset, {
          id: "QuestBarContentExpanded_heroAnimated",
          children: e => (0, a.jsx)(f.default, {
            ref: e,
            autoPlay: !k,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: y.heroAsset,
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
            className: y.heroAsset,
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
  return (0, g.useIsEligibleForQuestBarProgressCTA)({
    location: L.QuestsExperimentLocations.QUESTS_BAR,
    autoTrackExposure: !0
  }) ? (0, a.jsx)(d.Button, {
    className: y.cta,
    style: t,
    color: d.Button.Colors.CUSTOM,
    fullWidth: !0,
    onClick: n,
    size: d.Button.Sizes.NONE,
    children: M.default.Messages.QUESTS_GET_THIS_GAME
  }) : null
}
t.default = P