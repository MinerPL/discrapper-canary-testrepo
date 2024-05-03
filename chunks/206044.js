"use strict";
n.r(t), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("718017"),
  o = n("722770"),
  u = n("581051"),
  d = n("442837"),
  c = n("846519"),
  f = n("481060"),
  E = n("393238"),
  _ = n("607070"),
  m = n("210887"),
  T = n("808268"),
  I = n("810090"),
  p = n("572004"),
  h = n("617136"),
  N = n("113434"),
  S = n("497505"),
  C = n("918701"),
  A = n("685613"),
  g = n("611855"),
  M = n("644646"),
  R = n("670638"),
  v = n("87894"),
  O = n("689938"),
  x = n("945648");
let L = (0, r.animated)(u.ChevronSmallDownIcon),
  D = (0, r.animated)(I.default),
  P = e => {
    let {
      quest: t,
      location: n,
      ...l
    } = e, [i, r] = a.useState(!1), o = a.useRef(new c.Timeout);
    a.useEffect(() => {
      let e = o.current;
      return function() {
        e.stop()
      }
    }, []);
    let u = () => {
      (0, h.trackQuestContentClicked)({
        questId: t.id,
        questContent: n,
        questContentCTA: h.QuestContentCTA.COPY_QUEST_URL
      }), (0, p.copy)((0, C.getQuestUrl)(t.id)), r(!0), o.current.start(1e3, () => r(!1))
    };
    return (0, s.jsx)(f.Tooltip, {
      forceOpen: i,
      shouldShow: i,
      color: f.Tooltip.Colors.GREEN,
      text: O.default.Messages.COPY_SUCCESS_1,
      children: () => (0, s.jsx)(f.Button, {
        ...l,
        className: x.shareButton,
        color: f.Button.Colors.PRIMARY,
        size: f.Button.Sizes.SMALL,
        onClick: u,
        children: O.default.Messages.QUESTS_SHARE_QUEST
      })
    })
  };
t.default = e => {
  var t;
  let {
    isFocused: n,
    isQuestExpired: l,
    quest: u,
    location: c,
    giftInventorySection: I,
    size: p,
    expansionSpring: h,
    isAnimating: y,
    isExpanded: U,
    isInConcurrentQuestExperiment: j,
    toggleExpanded: b
  } = e, {
    ref: B,
    height: G
  } = (0, E.default)(), {
    ref: F,
    width: k,
    scrollWidth: w
  } = (0, E.default)(), H = (0, d.useStateFromStores)([m.default], () => m.default.getState().theme), V = (0, d.useStateFromStores)([_.default], () => _.default.useReducedMotion), Y = a.useMemo(() => (0, C.isAssetAnimated)(u.config.assets.hero), [u]), K = a.useRef(null), W = c === S.QuestContent.QUEST_INVENTORY_CARD, z = c === S.QuestContent.QUESTS_EMBED, Q = (null === (t = u.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, q = (0, N.useQuestFormattedDate)(u.config.expiresAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), X = (0, N.useQuestFormattedDate)(u.config.rewardCodeExpiresAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), Z = e => {
    e.stopPropagation(), b()
  };
  a.useEffect(() => {
    Y && null != K.current && (n ? K.current.play() : !n && (K.current.pause(), K.current.currentTime = 0))
  }, [n, Y]);
  let J = (0, C.getHeroAssetUrl)(u);
  return (0, s.jsxs)("div", {
    className: i()(x.outerContainer, {
      [x.outerContainerGiftInventory]: W,
      [x.outerContainerEmbed]: z,
      [x.outerContainerXs]: "xs" === p
    }),
    "aria-label": O.default.Messages.EXPAND,
    style: {
      height: W ? G : void 0
    },
    children: [(0, s.jsx)(D, {
      style: {
        opacity: h.to({
          range: [0, 1],
          output: [.25, 1]
        })
      },
      autoPlay: !1,
      loop: !1,
      muted: !0,
      playsInline: !0,
      className: x.questSplash,
      controls: !1,
      poster: J,
      ref: K,
      children: !V && Y && (0, s.jsx)("source", {
        src: J,
        type: (0, C.getVideoAssetMimeType)(J)
      })
    }), (0, s.jsxs)("div", {
      className: x.header,
      "aria-expanded": U,
      children: [(0, s.jsxs)(r.animated.div, {
        className: i()(x.headerContent, {
          [x.headerContentEmbed]: z
        }),
        style: {
          y: W ? h.to({
            range: [0, 1],
            output: [v.QUESTS_CARD_COLLAPSED_HEIGHT_PX, 0]
          }) : void 0
        },
        children: [W && (0, s.jsx)(r.animated.div, {
          className: x.headerCollapsedContent,
          style: {
            opacity: h.to({
              range: [0, 1],
              output: [1, 0]
            }),
            visibility: y || !U ? "visible" : "hidden"
          },
          "aria-hidden": !y && U,
          children: (0, s.jsxs)(f.ClickableContainer, {
            "aria-label": O.default.Messages.EXPAND,
            onClick: Z,
            className: x.headerCollapsedClickableContainer,
            children: [(0, s.jsx)("div", {
              className: x.headerCollapsedContentRewardWrapper,
              children: (0, s.jsx)(M.default, {
                quest: u,
                questContent: S.QuestContent.QUEST_INVENTORY_CARD,
                className: x.headerCollapsedRewardTile
              })
            }), (0, s.jsxs)("div", {
              className: x.headerCollapsedContentCopyWrapper,
              children: [(0, s.jsxs)("div", {
                className: x.headerCollapsedContentCopyLogos,
                children: [(0, s.jsx)(A.default, {
                  className: x.partnerBranding,
                  gameTileSize: A.GameTileSizes.MEDIUM,
                  quest: u,
                  theme: H
                }), (0, s.jsx)(g.default, {
                  color: "always-white"
                })]
              }), (0, s.jsx)(f.Text, {
                variant: "text-xs/medium",
                children: O.default.Messages.QUESTS_STREAM_TASK.format({
                  minutes: u.config.streamDurationRequirementMinutes,
                  gameTitle: u.config.messages.gameTitle
                })
              })]
            })]
          })
        }), (0, s.jsxs)(r.animated.div, {
          ref: e => {
            B.current = e
          },
          className: i()(x.headerExpandedContent, {
            [x.outerContainerGiftInventory]: W,
            [x.outerContainerEmbed]: z
          }),
          style: {
            opacity: h.to({
              range: [0, 1],
              output: [0, 1]
            }),
            visibility: y || U ? "visible" : "hidden"
          },
          "aria-hidden": !y && !U,
          children: [(0, s.jsxs)("div", {
            className: x.headerExpandedWrapper,
            children: [(0, s.jsxs)("div", {
              className: x.iconLogotypeContainer,
              children: [(0, s.jsx)(A.default, {
                className: x.partnerBranding,
                gameTileSize: A.GameTileSizes.MEDIUM,
                quest: u,
                theme: H
              }), (0, s.jsx)(g.default, {
                color: "always-white"
              })]
            }), (0, s.jsxs)("div", {
              className: x.questInfo,
              children: [(0, s.jsx)(f.Tooltip, {
                text: u.config.messages.questName,
                shouldShow: null != k && null != w && k < w,
                children: e => (0, s.jsx)(f.Heading, {
                  ref: F,
                  variant: "lg" === p ? "heading-xxl/bold" : "sm" === p ? "heading-xl/bold" : "heading-lg/bold",
                  className: x.heading,
                  ...e,
                  children: u.config.messages.questName
                })
              }), (0, s.jsx)(f.Text, {
                variant: "text-xs/normal",
                children: Q ? O.default.Messages.QUESTS_CLAIM_BY.format({
                  expirationDate: X
                }) : l ? O.default.Messages.QUESTS_EXPIRED_ON.format({
                  expirationDate: q
                }) : O.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
                  expirationDate: q
                })
              })]
            })]
          }), !l && W && (0, s.jsx)(P, {
            quest: u,
            location: c
          })]
        })]
      }), (0, s.jsxs)(r.animated.div, {
        className: x.iconsContainer,
        style: {
          top: W ? h.to({
            range: [0, 1],
            output: [v.QUESTS_CARD_COLLAPSED_HEIGHT_PX / 2 - v.QUESTS_CARD_ICON_SIZE_PX / 2, v.QUESTS_CARD_PADDING_Y_PX]
          }) : v.QUESTS_CARD_PADDING_Y_PX
        },
        children: [(0, s.jsx)(R.QuestsEntryContextMenuPopout, {
          questContent: c,
          quest: u,
          shouldShowDisclosure: !0,
          hideLearnMore: W,
          showShareLink: !l && z,
          children: e => (0, s.jsx)(r.animated.div, {
            style: {
              opacity: h,
              visibility: y || U ? "visible" : "hidden"
            },
            "aria-hidden": !y && !U,
            children: (0, s.jsx)(f.Clickable, {
              ...e,
              className: x.iconWrapper,
              "aria-label": O.default.Messages.ACTIONS,
              children: (0, s.jsx)(T.default, {
                color: o.default.WHITE
              })
            })
          })
        }), j && !(0, v.shouldQuestCardBeExpandedPermanently)({
          location: c,
          giftInventorySection: I
        }) && (0, s.jsx)(f.Clickable, {
          onClick: Z,
          className: x.iconWrapper,
          "aria-label": U ? O.default.Messages.COLLAPSE : O.default.Messages.EXPAND,
          children: (0, s.jsx)(L, {
            style: {
              rotate: h.to({
                range: [0, 1],
                output: [0, 180]
              })
            },
            color: o.default.WHITE
          })
        })]
      })]
    })]
  })
}