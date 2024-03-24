"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("222007");
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("446674"),
  o = n("862337"),
  u = n("77078"),
  d = n("272030"),
  c = n("206230"),
  E = n("161778"),
  f = n("433487"),
  _ = n("58608"),
  T = n("306160"),
  I = n("815496"),
  m = n("879364"),
  N = n("588025"),
  p = n("227231"),
  S = n("555226"),
  A = n("762985"),
  C = n("782340"),
  h = n("444092");
let g = e => {
  let {
    quest: t,
    location: n
  } = e, [a, i] = l.useState(!1), r = l.useRef(new o.Timeout);
  l.useEffect(() => {
    let e = r.current;
    return function() {
      e.stop()
    }
  }, []);
  let d = () => {
    (0, I.trackQuestContentClicked)(t.id, n, I.QuestContentCTA.COPY_QUEST_URL), (0, T.copy)((0, p.getQuestUrl)(t.id)), i(!0), r.current.start(1e3, () => i(!1))
  };
  return (0, s.jsx)(u.Tooltip, {
    forceOpen: a,
    shouldShow: a,
    color: u.Tooltip.Colors.GREEN,
    text: C.default.Messages.COPY_SUCCESS_1,
    children: () => (0, s.jsx)(u.Button, {
      color: u.Button.Colors.PRIMARY,
      size: u.Button.Sizes.SMALL,
      onClick: () => d(),
      children: C.default.Messages.QUESTS_SHARE_QUEST
    })
  })
};
var M = e => {
  var t;
  let {
    isFocused: a,
    quest: o,
    location: T,
    size: M
  } = e, O = (0, r.useStateFromStores)([E.default], () => E.default.getState().theme), R = (0, r.useStateFromStores)([c.default], () => c.default.useReducedMotion), v = l.useMemo(() => o.config.videoAssets.includes(T), [o, T]), L = l.useRef(null), P = (0, m.useIsQuestExpired)(o), D = (null === (t = o.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, x = (0, m.useQuestFormattedDate)(o.config.expiresAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), y = (0, m.useQuestFormattedDate)(o.config.rewardCodeExpiresAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return l.useEffect(() => {
    null != L.current && (a ? L.current.play() : (L.current.pause(), L.current.currentTime = 0))
  }, [a]), (0, s.jsxs)("div", {
    className: i(h.outerContainer, {
      [h.outerContainerGiftInventory]: T === N.QuestContent.QUEST_INVENTORY_CARD,
      [h.outerContainerEmbed]: T === N.QuestContent.QUESTS_EMBED
    }),
    children: [(0, s.jsx)(_.default, {
      autoPlay: !1,
      loop: !1,
      muted: !0,
      playsInline: !0,
      className: h.questSplash,
      controls: !1,
      poster: (0, p.getHeroStaticAssetUrl)(o.id),
      ref: L,
      children: !R && v && (0, s.jsx)("source", {
        src: (0, p.getHeroAnimatedAssetUrl)(o.id),
        type: "video/webm"
      })
    }), (0, s.jsxs)("div", {
      className: h.header,
      children: [(0, s.jsxs)("div", {
        className: h.headerContent,
        children: [(0, s.jsxs)("div", {
          children: [(0, s.jsxs)("div", {
            className: h.iconLogotypeContainer,
            children: [(0, s.jsx)(S.default, {
              className: h.partnerBranding,
              gameTileSize: S.GameTileSizes.MEDIUM,
              quest: o,
              theme: O
            }), (0, s.jsx)(A.default, {
              color: "always-white"
            })]
          }), (0, s.jsxs)("div", {
            className: h.questInfo,
            children: [(0, s.jsx)(u.Heading, {
              variant: "lg" === M ? "heading-xxl/bold" : "sm" === M ? "heading-xl/bold" : "heading-lg/bold",
              children: C.default.Messages.QUEST.format({
                questName: o.config.messages.questName
              })
            }), (0, s.jsx)(u.Text, {
              variant: "text-xs/normal",
              children: D ? C.default.Messages.QUESTS_CLAIM_BY.format({
                expirationDate: y
              }) : C.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
                expirationDate: x
              })
            })]
          })]
        }), !P && T === N.QuestContent.QUEST_INVENTORY_CARD && (0, s.jsx)(g, {
          quest: o,
          location: T
        })]
      }), (0, s.jsx)(u.Clickable, {
        className: h.submenuWrapper,
        onClick: e => {
          (0, I.trackQuestContentClicked)(o.id, T, I.QuestContentCTA.OPEN_CONTEXT_MENU), (0, d.openContextMenuLazy)(e, async () => {
            let {
              QuestsEntryContextMenu: e
            } = await n.el("275986").then(n.bind(n, "275986"));
            return t => (0, s.jsx)(e, {
              ...t,
              questContent: T,
              quest: o,
              shouldShowDisclosure: !0,
              hideLearnMore: T === N.QuestContent.QUEST_INVENTORY_CARD,
              showShareLink: T === N.QuestContent.QUESTS_EMBED
            })
          })
        },
        children: (0, s.jsx)(f.default, {
          className: h.submenuIcon
        })
      })]
    })]
  })
}