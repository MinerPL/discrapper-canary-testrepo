"use strict";
n.r(t), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("920906"),
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
  O = n("46140"),
  x = n("689938"),
  L = n("257100");
let D = (0, r.animated)(u.ChevronSmallDownIcon),
  P = (0, r.animated)(I.default),
  y = e => {
    let {
      quest: t,
      location: n,
      questContentPosition: l,
      ...i
    } = e, [r, o] = a.useState(!1), u = a.useRef(new c.Timeout);
    a.useEffect(() => {
      let e = u.current;
      return function() {
        e.stop()
      }
    }, []);
    let d = () => {
      (0, h.trackQuestContentClicked)({
        questId: t.id,
        questContent: n,
        questContentCTA: h.QuestContentCTA.COPY_QUEST_URL,
        questContentPosition: l
      }), (0, p.copy)((0, C.getQuestUrl)(t.id)), o(!0), u.current.start(1e3, () => o(!1))
    };
    return (0, s.jsx)(f.Tooltip, {
      forceOpen: r,
      shouldShow: r,
      color: f.Tooltip.Colors.GREEN,
      text: x.default.Messages.COPY_SUCCESS_1,
      children: () => (0, s.jsx)(f.Button, {
        ...i,
        className: L.shareButton,
        color: f.Button.Colors.PRIMARY,
        size: f.Button.Sizes.SMALL,
        onClick: d,
        children: x.default.Messages.QUESTS_SHARE_QUEST
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
    size: I,
    expansionSpring: p,
    isAnimating: U,
    isExpanded: j,
    isInConcurrentQuestExperiment: b,
    contentPosition: B,
    toggleExpanded: F
  } = e, {
    ref: G,
    height: k
  } = (0, E.default)(), {
    ref: w,
    width: H,
    scrollWidth: V
  } = (0, E.default)(), Y = (0, d.useStateFromStores)([m.default], () => m.default.getState().theme), K = (0, d.useStateFromStores)([_.default], () => _.default.useReducedMotion), W = a.useMemo(() => (0, C.isAssetAnimated)(u.config.assets.hero), [u]), z = a.useRef(null), Q = (0, v.isQuestCardInGiftInventory)(c), q = c === S.QuestContent.QUESTS_EMBED, X = (0, N.useQuestInstructionTitle)(u, O.QuestsExperimentLocations.QUESTS_CARD), Z = (null === (t = u.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, J = (0, N.useQuestFormattedDate)(u.config.expiresAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), $ = (0, N.useQuestFormattedDate)(u.config.rewardCodeExpiresAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), ee = e => {
    e.stopPropagation(), e.currentTarget.blur(), F(), (0, h.trackQuestContentClicked)({
      questId: u.id,
      questContent: c,
      questContentCTA: j ? h.QuestContentCTA.COLLAPSE : h.QuestContentCTA.EXPAND,
      questContentPosition: B
    })
  };
  a.useEffect(() => {
    W && null != z.current && (n ? z.current.play() : !n && (z.current.pause(), z.current.currentTime = 0))
  }, [n, W]);
  let et = (0, C.getHeroAssetUrl)(u);
  return (0, s.jsxs)("div", {
    className: i()(L.outerContainer, {
      [L.outerContainerGiftInventory]: Q,
      [L.outerContainerEmbed]: q,
      [L.outerContainerXs]: "xs" === I
    }),
    "aria-label": x.default.Messages.EXPAND,
    style: {
      height: Q ? k : void 0
    },
    children: [(0, s.jsx)(P, {
      style: {
        opacity: p.to({
          range: [0, 1],
          output: [.25, 1]
        })
      },
      autoPlay: !1,
      loop: !1,
      muted: !0,
      playsInline: !0,
      className: L.questSplash,
      controls: !1,
      poster: et,
      ref: z,
      children: !K && W && (0, s.jsx)("source", {
        src: et,
        type: (0, C.getVideoAssetMimeType)(et)
      })
    }), (0, s.jsxs)("div", {
      className: L.header,
      "aria-expanded": j,
      children: [(0, s.jsxs)(r.animated.div, {
        className: i()(L.headerContent, {
          [L.headerContentEmbed]: q
        }),
        style: {
          y: Q ? p.to({
            range: [0, 1],
            output: [v.QUESTS_CARD_COLLAPSED_HEIGHT_PX, 0]
          }) : void 0
        },
        children: [Q && (0, s.jsx)(r.animated.div, {
          className: L.headerCollapsedContent,
          style: {
            opacity: p.to({
              range: [0, 1],
              output: [1, 0]
            }),
            visibility: U || !j ? "visible" : "hidden"
          },
          "aria-hidden": !U && j,
          children: (0, s.jsxs)(f.ClickableContainer, {
            "aria-label": x.default.Messages.EXPAND,
            onClick: ee,
            className: L.headerCollapsedClickableContainer,
            children: [(0, s.jsx)("div", {
              className: L.headerCollapsedContentRewardWrapper,
              children: (0, s.jsx)(M.default, {
                quest: u,
                questContent: c,
                className: L.headerCollapsedRewardTile
              })
            }), (0, s.jsxs)("div", {
              className: L.headerCollapsedContentCopyWrapper,
              children: [(0, s.jsxs)("div", {
                className: L.headerCollapsedContentCopyLogos,
                children: [(0, s.jsx)(A.default, {
                  className: L.partnerBranding,
                  gameTileSize: A.GameTileSizes.MEDIUM,
                  quest: u,
                  theme: Y
                }), (0, s.jsx)(g.default, {
                  color: "always-white"
                })]
              }), (0, s.jsx)(f.Text, {
                variant: "text-xs/medium",
                children: X
              })]
            })]
          })
        }), (0, s.jsxs)(r.animated.div, {
          ref: e => {
            G.current = e
          },
          className: i()(L.headerExpandedContent, {
            [L.outerContainerGiftInventory]: Q,
            [L.outerContainerEmbed]: q
          }),
          style: {
            opacity: p.to({
              range: [0, 1],
              output: [0, 1]
            }),
            visibility: U || j ? "visible" : "hidden"
          },
          "aria-hidden": !U && !j,
          children: [(0, s.jsxs)("div", {
            className: L.headerExpandedWrapper,
            children: [(0, s.jsxs)("div", {
              className: L.iconLogotypeContainer,
              children: [(0, s.jsx)(A.default, {
                className: L.partnerBranding,
                gameTileSize: A.GameTileSizes.MEDIUM,
                quest: u,
                theme: Y
              }), (0, s.jsx)(g.default, {
                color: "always-white"
              })]
            }), (0, s.jsxs)("div", {
              className: L.questInfo,
              children: [(0, s.jsx)(f.Tooltip, {
                text: u.config.messages.questName,
                shouldShow: null != H && null != V && H < V,
                children: e => (0, s.jsx)(f.Heading, {
                  ref: w,
                  variant: "lg" === I ? "heading-xxl/bold" : "sm" === I ? "heading-xl/bold" : "heading-lg/bold",
                  className: L.heading,
                  ...e,
                  children: x.default.Messages.QUEST.format({
                    questName: u.config.messages.questName
                  })
                })
              }), (0, s.jsx)(f.Text, {
                variant: "text-xs/normal",
                children: Z ? x.default.Messages.QUESTS_CLAIM_BY_DATE.format({
                  expirationDate: $
                }) : l ? x.default.Messages.QUESTS_EXPIRED_ON.format({
                  expirationDate: J
                }) : x.default.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                  expirationDate: J
                })
              })]
            })]
          }), !l && Q && (0, s.jsx)(y, {
            quest: u,
            location: c,
            questContentPosition: B
          })]
        })]
      }), (0, s.jsxs)(r.animated.div, {
        className: L.iconsContainer,
        style: {
          top: Q ? p.to({
            range: [0, 1],
            output: [v.QUESTS_CARD_COLLAPSED_HEIGHT_PX / 2 - v.QUESTS_CARD_ICON_SIZE_PX / 2, v.QUESTS_CARD_PADDING_Y_PX]
          }) : v.QUESTS_CARD_PADDING_Y_PX
        },
        children: [(0, s.jsx)(R.QuestsEntryContextMenuPopout, {
          questContent: c,
          quest: u,
          questContentPosition: B,
          shouldShowDisclosure: !0,
          hideLearnMore: Q,
          showShareLink: !l && q,
          children: e => (0, s.jsx)(r.animated.div, {
            style: {
              opacity: p,
              visibility: U || j ? "visible" : "hidden"
            },
            "aria-hidden": !U && !j,
            children: (0, s.jsx)(f.Clickable, {
              ...e,
              className: L.iconWrapper,
              "aria-label": x.default.Messages.ACTIONS,
              children: (0, s.jsx)(T.default, {
                color: o.default.WHITE
              })
            })
          })
        }), b && !(0, v.shouldQuestCardBeExpandedPermanently)(c) && (0, s.jsx)(f.Clickable, {
          onClick: ee,
          className: L.iconWrapper,
          "aria-label": j ? x.default.Messages.COLLAPSE : x.default.Messages.EXPAND,
          children: (0, s.jsx)(D, {
            style: {
              rotate: p.to({
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