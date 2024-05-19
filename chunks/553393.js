"use strict";
n.r(t), n("47120");
var i = n("735250"),
  r = n("470079"),
  a = n("920906"),
  s = n("91192"),
  o = n("946835"),
  l = n("442837"),
  u = n("780384"),
  d = n("481060"),
  _ = n("287734"),
  c = n("872810"),
  E = n("230711"),
  I = n("393238"),
  T = n("40851"),
  f = n("607070"),
  S = n("258609"),
  h = n("102172"),
  A = n("210887"),
  m = n("592125"),
  N = n("430824"),
  p = n("496675"),
  O = n("979651"),
  C = n("617136"),
  R = n("113434"),
  g = n("497505"),
  L = n("918701"),
  v = n("874137"),
  D = n("644646"),
  M = n("667105"),
  y = n("981631"),
  P = n("231338"),
  U = n("689938"),
  b = n("500766");
let G = "11px";

function w(e, t) {
  return null != e && null != t && (0, h.canWatchStream)(t, O.default, N.default, p.default, S.default)[0]
}
t.default = function(e) {
  var t, S, h;
  let {
    quest: N,
    memberListItemRef: p,
    applicationStream: O,
    position: k,
    closePopout: B,
    updatePosition: V
  } = e, x = (0, l.useStateFromStores)([m.default], () => {
    var e;
    return null !== (e = m.default.getChannel(null == O ? void 0 : O.channelId)) && void 0 !== e ? e : null
  }), F = (0, M.useHandleClaimQuestsReward)({
    quest: N,
    location: g.QuestContent.MEMBERS_LIST
  }), H = (0, R.useIsQuestExpired)(N), Y = (null == N ? void 0 : null === (t = N.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null, j = (null == N ? void 0 : null === (S = N.userStatus) || void 0 === S ? void 0 : S.enrolledAt) != null, W = (null == N ? void 0 : null === (h = N.userStatus) || void 0 === h ? void 0 : h.completedAt) != null, K = (0, l.useStateFromStores)([A.default], () => A.default.getState().theme), z = (0, u.isThemeDark)(K) ? P.ThemeTypes.DARK : P.ThemeTypes.LIGHT, Z = (0, l.useStateFromStores)([f.default], () => f.default.useReducedMotion), {
    ref: X,
    height: Q
  } = (0, I.default)(), [q, J] = r.useState(Z), $ = (0, T.useWindowDispatch)(), ee = (0, s.useListContainerScrollerRef)();
  r.useEffect(() => {
    let e = ee.current;
    return null == e || e.addEventListener("scroll", B), () => {
      null == e || e.removeEventListener("scroll", B)
    }
  }, [B, ee]), r.useEffect(() => {
    let e = ee.current,
      t = p.current;
    if (null == e || null == t) return;
    let n = new MutationObserver(() => V());
    return n.observe(e, {
      childList: !0,
      subtree: !0
    }), () => {
      n.disconnect()
    }
  }, [p, ee, V]);
  let et = (0, a.useSpring)({
      from: {
        height: 0
      },
      height: null != Q ? Q : 0,
      config: {
        tension: 450,
        friction: 45
      },
      immediate: Z,
      onRest: () => J(!0)
    }),
    en = (0, a.useTransition)(q, {
      from: {
        opacity: 0,
        scale: 0
      },
      enter: {
        opacity: 1,
        scale: 1
      }
    }),
    ei = () => {
      $.dispatch(y.ComponentActions.POPOUT_CLOSE)
    },
    er = "top" === k ? "".concat("4px", " ").concat("4px", " 0 0") : "0 0 ".concat("4px", " ").concat("4px");
  if (null == N || H || Y && !w(O, x)) return null;
  let ea = () => {
      (0, C.trackQuestContentClicked)({
        questId: N.id,
        questContent: g.QuestContent.MEMBERS_LIST,
        questContentCTA: C.QuestContentCTA.OPEN_DISCLOSURE,
        trackGuildAndChannelMetadata: !0
      }), (0, d.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("4266")]).then(n.bind(n, "316210"));
        return t => (0, i.jsx)(e, {
          ...t,
          questContent: g.QuestContent.MEMBERS_LIST,
          questConfig: N.config
        })
      })
    },
    es = () => {
      (0, C.trackQuestContentClicked)({
        questId: N.id,
        questContent: g.QuestContent.MEMBERS_LIST,
        questContentCTA: C.QuestContentCTA.LEARN_MORE,
        trackGuildAndChannelMetadata: !0
      }), E.default.open(y.UserSettingsSections.INVENTORY)
    },
    eo = e => {
      e.stopPropagation(), ea()
    },
    el = () => {
      if (w(O, x) && null != x) return (0, C.trackQuestContentClicked)({
        questId: N.id,
        questContent: g.QuestContent.MEMBERS_LIST,
        questContentCTA: C.QuestContentCTA.WATCH_STREAM,
        trackGuildAndChannelMetadata: !0
      }), _.default.selectVoiceChannel(x.id), (0, c.watchStreamAndTransitionToStream)(O);
      es()
    },
    eu = W && !Y ? {
      headerText: U.default.Messages.QUESTS_MEMBERS_LIST_CLAIM_REWARD,
      ctaText: U.default.Messages.QUESTS_CLAIM_REWARD,
      handleClickCta: F,
      tileAssetType: "reward"
    } : j && !Y ? {
      headerText: U.default.Messages.QUESTS_MEMBERS_LIST_FINISH,
      ctaText: U.default.Messages.QUESTS_CHECK_PROGRESS,
      handleClickCta: es,
      tileAssetType: "reward"
    } : w(O, x) ? {
      headerText: U.default.Messages.QUESTS_MEMBERS_LIST_AVAILBLE,
      ctaText: U.default.Messages.QUESTS_JOIN_ME,
      handleClickCta: el,
      tileAssetType: "game"
    } : {
      headerText: U.default.Messages.QUESTS_MEMBERS_LIST_AVAILBLE,
      ctaText: U.default.Messages.QUESTS_UNLOCK_REWARDS,
      handleClickCta: es,
      tileAssetType: "game"
    };
  return (0, i.jsx)(v.QuestContentImpressionTracker, {
    questOrQuests: N,
    questContent: g.QuestContent.MEMBERS_LIST,
    trackGuildAndChannelMetadata: !0,
    children: e => {
      var t, n;
      return (0, i.jsx)(a.animated.div, {
        ref: t => {
          e.current = t
        },
        "aria-expanded": q,
        className: b.wrapper,
        style: {
          width: null !== (n = null === (t = p.current) || void 0 === t ? void 0 : t.clientWidth) && void 0 !== n ? n : 222,
          height: et.height,
          overflow: q ? "visible" : "hidden",
          borderRadius: er
        },
        children: (0, i.jsxs)("div", {
          ref: e => {
            X.current = e
          },
          className: b.container,
          style: {
            borderRadius: er
          },
          children: [(0, i.jsxs)("div", {
            className: b.top,
            children: [(0, i.jsxs)("div", {
              className: b.left,
              children: [(0, i.jsx)(d.Heading, {
                variant: "heading-sm/semibold",
                children: eu.headerText
              }), (0, i.jsxs)(d.Clickable, {
                className: b.help,
                onClick: e => {
                  ei(), eo(e)
                },
                children: [(0, i.jsx)(d.Text, {
                  variant: "text-xs/medium",
                  color: "text-muted",
                  className: b.helpText,
                  children: U.default.Messages.QUESTS_MEMBERS_LIST_PROMOTED_BY.format({
                    gamePublisher: N.config.messages.gamePublisher
                  })
                }), (0, i.jsx)(o.CircleQuestionIcon, {
                  className: b.helpIcon,
                  width: G,
                  height: G,
                  color: d.tokens.colors.INTERACTIVE_NORMAL
                })]
              })]
            }), (0, i.jsx)("div", {
              className: b.right,
              children: (0, i.jsxs)("div", {
                className: b.imgWrapper,
                children: [en((e, t) => t && (0, i.jsx)(a.animated.div, {
                  style: e,
                  className: b.imgUnderlay
                })), "game" === eu.tileAssetType && (0, i.jsx)("img", {
                  alt: U.default.Messages.QUESTS_MEMBERS_LIST_GAME_TILE_ALT.format({
                    gameTitle: N.config.messages.gameTitle,
                    gamePublisher: N.config.messages.gamePublisher
                  }),
                  className: b.assetTile,
                  src: (0, L.getGameTileAssetUrl)(N, z)
                }), "reward" === eu.tileAssetType && (0, i.jsx)(D.default, {
                  className: b.assetTile,
                  quest: N,
                  questContent: g.QuestContent.MEMBERS_LIST,
                  learnMoreStyle: "icon",
                  onClick: ei
                })]
              })
            })]
          }), (0, i.jsx)(d.Button, {
            onClick: () => {
              ei(), eu.handleClickCta()
            },
            color: d.Button.Colors.CUSTOM,
            hover: d.Button.Hovers.PRIMARY,
            className: b.ctaButton,
            children: eu.ctaText
          })]
        })
      })
    }
  })
}