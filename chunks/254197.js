"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("442837"),
  o = n("289987"),
  u = n("481060"),
  d = n("976644"),
  c = n("757206"),
  f = n("808268"),
  E = n("810090"),
  h = n("617136"),
  _ = n("272008"),
  C = n("113434"),
  m = n("569984"),
  S = n("497505"),
  p = n("918701"),
  g = n("977156"),
  I = n("685613"),
  T = n("644646"),
  A = n("78826"),
  N = n("670638"),
  v = n("667105"),
  R = n("341907"),
  O = n("759853"),
  L = n("95985"),
  M = n("46140"),
  y = n("689938"),
  P = n("263094");
let x = e => {
    let {
      quest: t,
      useReducedMotion: n
    } = e, s = (0, v.useHandleClaimQuestsReward)({
      quest: t,
      location: S.QuestContent.QUEST_BAR
    });
    return (0, a.jsx)("div", {
      className: P.ctaContainer,
      children: (0, a.jsx)(d.default, {
        fullWidth: !0,
        size: u.Button.Sizes.SMALL,
        onClick: s,
        pauseAnimation: n,
        children: y.default.Messages.QUESTS_CLAIM_REWARD
      })
    })
  },
  D = e => {
    let {
      quest: t
    } = e;
    return (0, a.jsxs)("div", {
      className: P.ctaContainer,
      children: [(0, a.jsx)(u.Button, {
        className: P.flex,
        size: u.Button.Sizes.SMALL,
        onClick: () => (0, R.openGameLink)(t, {
          content: S.QuestContent.QUEST_BAR_V2,
          ctaContent: h.QuestContentCTA.OPEN_GAME_LINK
        }),
        children: y.default.Messages.QUESTS_PLAY_GAME
      }), (0, a.jsx)(u.Tooltip, {
        text: y.default.Messages.QUESTS_SHARE_LINK,
        children: e => (0, a.jsx)(u.Button, {
          ...e,
          className: P.iconButton,
          innerClassName: P.shareIcon,
          size: u.Button.Sizes.ICON,
          color: u.Button.Colors.CUSTOM,
          onClick: () => (0, R.copyShareLink)(t.id, {
            content: S.QuestContent.QUEST_BAR_V2,
            ctaContent: h.QuestContentCTA.QUEST_BAR_COPY_LINK
          }),
          children: (0, a.jsx)(c.default, {
            width: 16,
            height: 16
          })
        })
      })]
    })
  },
  b = s.forwardRef(function(e, t) {
    var n, l;
    let {
      className: d,
      isExpanded: c,
      isExpansionAnimationComplete: v,
      onCtxMenuOpen: b,
      onCtxMenuClose: U,
      onCtxMenuSelect: j,
      quest: G,
      useReducedMotion: k
    } = e, w = s.useRef(null), B = (0, r.useStateFromStores)([m.default], () => m.default.isEnrolling(G.id), [G]), F = (0, C.useQuestFormattedDate)(G.config.expiresAt), H = s.useMemo(() => (0, p.isAssetAnimated)(G.config.assets.questBarHero), [G]), V = s.useCallback(() => {
      (0, _.enrollInQuest)(G.id, {
        questContent: S.QuestContent.QUEST_BAR,
        questContentCTA: h.QuestContentCTA.ACCEPT_QUEST
      })
    }, [G]), Y = s.useCallback(() => {
      (0, R.openGameLink)(G, {
        content: S.QuestContent.QUEST_BAR,
        ctaContent: h.QuestContentCTA.OPEN_GAME_LINK
      })
    }, [G]), W = s.useCallback(() => {
      (0, R.openDisclosureModal)(G, {
        content: S.QuestContent.QUEST_BAR,
        ctaContent: h.QuestContentCTA.OPEN_DISCLOSURE
      })
    }, [G]), {
      primaryVariant: K
    } = g.QuestBarExperiment.useExperiment({
      location: M.QuestsExperimentLocations.QUESTS_BAR
    }, {
      autoTrackExposure: !1
    }), z = (null === (n = G.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, q = (null === (l = G.userStatus) || void 0 === l ? void 0 : l.completedAt) != null, Q = c && v, Z = (0, p.getQuestBarHeroAssetUrl)(G), X = (0, p.getQuestsInstructionsToWinReward)({
      quest: G,
      location: M.QuestsExperimentLocations.QUESTS_BAR,
      useV2Variants: K === g.QuestBarExperimentVariants.V2
    });
    return (0, a.jsx)("div", {
      "aria-hidden": !Q,
      className: i()(d, P.contentExpanded, {
        [P.contentInteractable]: Q,
        [P.contentExpandedAccepted]: z
      }),
      children: z ? (0, a.jsxs)("div", {
        className: P.questAcceptedContent,
        ref: t,
        children: [(0, a.jsxs)("div", {
          className: P.questAcceptedHeader,
          children: [(0, a.jsx)(u.Text, {
            variant: "text-xxs/medium",
            className: i()(P.flex, P.headerText),
            children: y.default.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
              expirationDate: F
            })
          }), (0, a.jsx)(N.QuestsEntryContextMenuPopout, {
            onOpen: b,
            onClose: U,
            onSelect: j,
            questContent: S.QuestContent.QUEST_BAR,
            quest: G,
            shouldShowDisclosure: !1,
            showShareLink: !0,
            children: e => (0, a.jsx)(u.Clickable, {
              ...e,
              className: P.submenuWrapper,
              "aria-label": y.default.Messages.ACTIONS,
              children: (0, a.jsx)(f.default, {
                className: i()(P.submenuIcon, P.interactiveNormal)
              })
            })
          })]
        }), (0, a.jsx)("div", {
          className: P.divider
        }), (0, a.jsx)(O.default, {
          progressBarRef: w,
          quest: G
        }), (0, a.jsx)(L.default, {
          quest: G,
          progressBarRef: w,
          isExpanded: !0
        }), q ? (0, a.jsx)(x, {
          quest: G,
          useReducedMotion: k
        }) : (0, a.jsx)(D, {
          quest: G,
          useReducedMotion: k
        })]
      }) : (0, a.jsxs)("div", {
        className: P.questUnacceptedContent,
        children: [(0, a.jsxs)("div", {
          className: P.questPromoContent,
          ref: t,
          children: [(0, a.jsxs)("div", {
            className: P.utils,
            children: [(0, a.jsx)(u.Clickable, {
              className: P.promotedBadge,
              onClick: Y,
              children: (0, a.jsx)(I.default, {
                className: P.partnerBranding,
                quest: G,
                withGameTile: !1
              })
            }), (0, a.jsx)("div", {
              className: P.promotedBadgeWrapper,
              children: (0, a.jsxs)(u.Clickable, {
                className: P.promotedBadge,
                onClick: W,
                children: [(0, a.jsx)(u.Text, {
                  color: "always-white",
                  variant: "text-xs/normal",
                  children: y.default.Messages.QUESTS_PROMOTED
                }), (0, a.jsx)(o.CircleQuestionIcon, {
                  color: u.tokens.colors.WHITE,
                  className: P.promotedBadgeIcon
                })]
              })
            }), (0, a.jsx)(N.QuestsEntryContextMenuPopout, {
              onOpen: b,
              onClose: U,
              onSelect: j,
              questContent: S.QuestContent.QUEST_BAR,
              quest: G,
              shouldShowDisclosure: !0,
              showShareLink: !0,
              children: e => (0, a.jsx)(u.Clickable, {
                ...e,
                className: P.submenuWrapper,
                "aria-label": y.default.Messages.ACTIONS,
                children: (0, a.jsx)(f.default, {
                  className: i()(P.submenuIcon, P.white)
                })
              })
            })]
          }), (0, a.jsxs)("div", {
            className: P.details,
            children: [(0, a.jsx)(T.default, {
              className: P.rewardTile,
              learnMoreStyle: "text",
              quest: G,
              questContent: S.QuestContent.QUEST_BAR
            }), (0, a.jsx)(u.Heading, {
              className: P.title,
              color: "always-white",
              variant: "heading-md/medium",
              children: y.default.Messages.QUESTS_TITLE.format({
                questName: G.config.messages.questName
              })
            }), (0, a.jsx)(u.Text, {
              className: P.description,
              color: "always-white",
              variant: "text-xs/normal",
              children: X
            })]
          }), (0, a.jsx)(u.Button, {
            className: P.cta,
            color: u.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: Q ? V : void 0,
            size: u.Button.Sizes.SMALL,
            submitting: B,
            children: y.default.Messages.QUESTS_ACCEPT_QUEST
          })]
        }), (0, a.jsx)("div", {
          className: P.heroAssetWrapper,
          children: H ? (0, a.jsx)(A.QuestsAsset, {
            id: "QuestBarV2ContentExpanded_heroAnimated",
            children: e => (0, a.jsx)(E.default, {
              ref: e,
              autoPlay: !k,
              loop: !0,
              muted: !0,
              playsInline: !0,
              className: P.heroAsset,
              controls: !1,
              children: (0, a.jsx)("source", {
                src: Z,
                type: (0, p.getVideoAssetMimeType)(Z)
              })
            })
          }) : (0, a.jsx)(A.QuestsAsset, {
            id: "QuestBarV2ContentExpanded_heroStatic",
            children: e => (0, a.jsx)("img", {
              ref: e,
              alt: "",
              className: P.heroAsset,
              src: Z
            })
          })
        })]
      })
    })
  });
t.default = b