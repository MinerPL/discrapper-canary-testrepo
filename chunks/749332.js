"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("446674"),
  o = n("862337"),
  u = n("77078"),
  d = n("206230"),
  c = n("161778"),
  E = n("433487"),
  f = n("58608"),
  _ = n("306160"),
  T = n("815496"),
  I = n("879364"),
  m = n("588025"),
  N = n("227231"),
  p = n("555226"),
  S = n("762985"),
  C = n("275986"),
  A = n("782340"),
  h = n("444092");
let g = e => {
  let {
    quest: t,
    location: n
  } = e, [l, i] = a.useState(!1), r = a.useRef(new o.Timeout);
  a.useEffect(() => {
    let e = r.current;
    return function() {
      e.stop()
    }
  }, []);
  let d = () => {
    (0, T.trackQuestContentClicked)({
      questId: t.id,
      questContent: n,
      questContentCTA: T.QuestContentCTA.COPY_QUEST_URL
    }), (0, _.copy)((0, N.getQuestUrl)(t.id)), i(!0), r.current.start(1e3, () => i(!1))
  };
  return (0, s.jsx)(u.Tooltip, {
    forceOpen: l,
    shouldShow: l,
    color: u.Tooltip.Colors.GREEN,
    text: A.default.Messages.COPY_SUCCESS_1,
    children: () => (0, s.jsx)(u.Button, {
      color: u.Button.Colors.PRIMARY,
      size: u.Button.Sizes.SMALL,
      onClick: () => d(),
      children: A.default.Messages.QUESTS_SHARE_QUEST
    })
  })
};
var M = e => {
  var t;
  let {
    isFocused: n,
    quest: l,
    location: o,
    size: _
  } = e, T = (0, r.useStateFromStores)([c.default], () => c.default.getState().theme), M = (0, r.useStateFromStores)([d.default], () => d.default.useReducedMotion), O = a.useMemo(() => l.config.videoAssets.includes(o), [l, o]), R = a.useRef(null), L = (0, I.useIsQuestExpired)(l), v = (null === (t = l.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, P = (0, I.useQuestFormattedDate)(l.config.expiresAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), D = (0, I.useQuestFormattedDate)(l.config.rewardCodeExpiresAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return a.useEffect(() => {
    null != R.current && (n ? R.current.play() : (R.current.pause(), R.current.currentTime = 0))
  }, [n]), (0, s.jsxs)("div", {
    className: i(h.outerContainer, {
      [h.outerContainerGiftInventory]: o === m.QuestContent.QUEST_INVENTORY_CARD,
      [h.outerContainerEmbed]: o === m.QuestContent.QUESTS_EMBED
    }),
    children: [(0, s.jsx)(f.default, {
      autoPlay: !1,
      loop: !1,
      muted: !0,
      playsInline: !0,
      className: h.questSplash,
      controls: !1,
      poster: (0, N.getHeroStaticAssetUrl)(l.id),
      ref: R,
      children: !M && O && (0, s.jsx)("source", {
        src: (0, N.getHeroAnimatedAssetUrl)(l.id),
        type: "video/webm"
      })
    }), (0, s.jsxs)("div", {
      className: h.header,
      children: [(0, s.jsxs)("div", {
        className: h.headerContent,
        children: [(0, s.jsxs)("div", {
          children: [(0, s.jsxs)("div", {
            className: h.iconLogotypeContainer,
            children: [(0, s.jsx)(p.default, {
              className: h.partnerBranding,
              gameTileSize: p.GameTileSizes.MEDIUM,
              quest: l,
              theme: T
            }), (0, s.jsx)(S.default, {
              color: "always-white"
            })]
          }), (0, s.jsxs)("div", {
            className: h.questInfo,
            children: [(0, s.jsx)(u.Heading, {
              variant: "lg" === _ ? "heading-xxl/bold" : "sm" === _ ? "heading-xl/bold" : "heading-lg/bold",
              children: A.default.Messages.QUEST.format({
                questName: l.config.messages.questName
              })
            }), (0, s.jsx)(u.Text, {
              variant: "text-xs/normal",
              children: v ? A.default.Messages.QUESTS_CLAIM_BY.format({
                expirationDate: D
              }) : A.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
                expirationDate: P
              })
            })]
          })]
        }), !L && o === m.QuestContent.QUEST_INVENTORY_CARD && (0, s.jsx)(g, {
          quest: l,
          location: o
        })]
      }), (0, s.jsx)(C.QuestsEntryContextMenuPopout, {
        questContent: o,
        quest: l,
        shouldShowDisclosure: !0,
        hideLearnMore: o === m.QuestContent.QUEST_INVENTORY_CARD,
        showShareLink: o === m.QuestContent.QUESTS_EMBED,
        children: e => (0, s.jsx)(u.Clickable, {
          ...e,
          className: h.submenuWrapper,
          "aria-label": A.default.Messages.ACTIONS,
          children: (0, s.jsx)(E.default, {
            className: h.submenuIcon
          })
        })
      })]
    })]
  })
}