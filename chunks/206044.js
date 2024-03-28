"use strict";
n.r(t), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("442837"),
  o = n("846519"),
  u = n("481060"),
  d = n("607070"),
  c = n("210887"),
  f = n("808268"),
  E = n("810090"),
  _ = n("572004"),
  T = n("617136"),
  m = n("113434"),
  I = n("497505"),
  p = n("918701"),
  h = n("685613"),
  N = n("611855"),
  S = n("670638"),
  C = n("689938"),
  A = n("478840");
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
    }), (0, _.copy)((0, p.getQuestUrl)(t.id)), i(!0), r.current.start(1e3, () => i(!1))
  };
  return (0, s.jsx)(u.Tooltip, {
    forceOpen: l,
    shouldShow: l,
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
t.default = e => {
  var t;
  let {
    isFocused: n,
    quest: l,
    location: o,
    size: _
  } = e, T = (0, r.useStateFromStores)([c.default], () => c.default.getState().theme), M = (0, r.useStateFromStores)([d.default], () => d.default.useReducedMotion), R = a.useMemo(() => (0, p.isAssetAnimated)(l.config.assets.hero), [l]), O = a.useRef(null), v = (0, m.useIsQuestExpired)(l), L = (null === (t = l.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, x = (0, m.useQuestFormattedDate)(l.config.expiresAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), D = (0, m.useQuestFormattedDate)(l.config.rewardCodeExpiresAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  a.useEffect(() => {
    null != O.current && (n ? O.current.play() : (O.current.pause(), O.current.currentTime = 0))
  }, [n]);
  let P = (0, p.getHeroAssetUrl)(l);
  return (0, s.jsxs)("div", {
    className: i()(A.outerContainer, {
      [A.outerContainerGiftInventory]: o === I.QuestContent.QUEST_INVENTORY_CARD,
      [A.outerContainerEmbed]: o === I.QuestContent.QUESTS_EMBED
    }),
    children: [(0, s.jsx)(E.default, {
      autoPlay: !1,
      loop: !1,
      muted: !0,
      playsInline: !0,
      className: A.questSplash,
      controls: !1,
      poster: P,
      ref: O,
      children: !M && R && (0, s.jsx)("source", {
        src: P,
        type: (0, p.getVideoAssetMimeType)(P)
      })
    }), (0, s.jsxs)("div", {
      className: A.header,
      children: [(0, s.jsxs)("div", {
        className: A.headerContent,
        children: [(0, s.jsxs)("div", {
          children: [(0, s.jsxs)("div", {
            className: A.iconLogotypeContainer,
            children: [(0, s.jsx)(h.default, {
              className: A.partnerBranding,
              gameTileSize: h.GameTileSizes.MEDIUM,
              quest: l,
              theme: T
            }), (0, s.jsx)(N.default, {
              color: "always-white"
            })]
          }), (0, s.jsxs)("div", {
            className: A.questInfo,
            children: [(0, s.jsx)(u.Heading, {
              variant: "lg" === _ ? "heading-xxl/bold" : "sm" === _ ? "heading-xl/bold" : "heading-lg/bold",
              children: C.default.Messages.QUEST.format({
                questName: l.config.messages.questName
              })
            }), (0, s.jsx)(u.Text, {
              variant: "text-xs/normal",
              children: L ? C.default.Messages.QUESTS_CLAIM_BY.format({
                expirationDate: D
              }) : C.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
                expirationDate: x
              })
            })]
          })]
        }), !v && o === I.QuestContent.QUEST_INVENTORY_CARD && (0, s.jsx)(g, {
          quest: l,
          location: o
        })]
      }), (0, s.jsx)(S.QuestsEntryContextMenuPopout, {
        questContent: o,
        quest: l,
        shouldShowDisclosure: !0,
        hideLearnMore: o === I.QuestContent.QUEST_INVENTORY_CARD,
        showShareLink: o === I.QuestContent.QUESTS_EMBED,
        children: e => (0, s.jsx)(u.Clickable, {
          ...e,
          className: A.submenuWrapper,
          "aria-label": C.default.Messages.ACTIONS,
          children: (0, s.jsx)(f.default, {
            className: A.submenuIcon
          })
        })
      })]
    })]
  })
}