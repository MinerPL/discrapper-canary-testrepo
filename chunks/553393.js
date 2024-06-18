"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(920906),
  o = n(91192),
  a = n(946835),
  l = n(442837),
  u = n(780384),
  _ = n(481060),
  d = n(287734),
  c = n(872810),
  E = n(230711),
  I = n(393238),
  T = n(40851),
  h = n(607070),
  S = n(258609),
  f = n(102172),
  N = n(210887),
  A = n(592125),
  m = n(430824),
  O = n(496675),
  R = n(979651),
  C = n(617136),
  p = n(113434),
  g = n(497505),
  L = n(918701),
  v = n(602667),
  D = n(644646),
  M = n(667105),
  P = n(981631),
  y = n(231338),
  U = n(689938),
  b = n(500766);
let G = "11px";

function w(e, t) {
  return null != e && null != t && (0, f.p9)(t, R.Z, m.Z, O.Z, S.Z)[0]
}
t.Z = function(e) {
  var t, S, f;
  let {
    quest: m,
    memberListItemRef: O,
    applicationStream: R,
    position: k,
    closePopout: B,
    updatePosition: x
  } = e, V = (0, l.e7)([A.Z], () => {
    var e;
    return null !== (e = A.Z.getChannel(null == R ? void 0 : R.channelId)) && void 0 !== e ? e : null
  }), Z = (0, M.hf)({
    quest: m,
    location: g.jn.MEMBERS_LIST
  }), H = (0, p.tP)(m), F = (null == m ? void 0 : null === (t = m.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null, Y = (null == m ? void 0 : null === (S = m.userStatus) || void 0 === S ? void 0 : S.enrolledAt) != null, j = (null == m ? void 0 : null === (f = m.userStatus) || void 0 === f ? void 0 : f.completedAt) != null, W = (0, l.e7)([N.Z], () => N.Z.getState().theme), K = (0, u.wj)(W) ? y.BR.DARK : y.BR.LIGHT, z = (0, l.e7)([h.Z], () => h.Z.useReducedMotion), {
    ref: q,
    height: X
  } = (0, I.Z)(), [Q, J] = r.useState(z), $ = (0, T.Aq)(), ee = (0, o.eg)();
  r.useEffect(() => {
    let e = ee.current;
    return null == e || e.addEventListener("scroll", B), () => {
      null == e || e.removeEventListener("scroll", B)
    }
  }, [B, ee]), r.useEffect(() => {
    let e = ee.current,
      t = O.current;
    if (null == e || null == t) return;
    let n = new MutationObserver(() => x());
    return n.observe(e, {
      childList: !0,
      subtree: !0
    }), () => {
      n.disconnect()
    }
  }, [O, ee, x]);
  let et = (0, s.useSpring)({
      from: {
        height: 0
      },
      height: null != X ? X : 0,
      config: {
        tension: 450,
        friction: 45
      },
      immediate: z,
      onRest: () => J(!0)
    }),
    en = (0, s.useTransition)(Q, {
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
      $.dispatch(P.CkL.POPOUT_CLOSE)
    },
    er = "top" === k ? "".concat("4px", " ").concat("4px", " 0 0") : "0 0 ".concat("4px", " ").concat("4px");
  if (null == m || H || F && !w(R, V)) return null;
  let es = () => {
      (0, C._3)({
        questId: m.id,
        questContent: g.jn.MEMBERS_LIST,
        questContentCTA: C.jZ.OPEN_DISCLOSURE,
        trackGuildAndChannelMetadata: !0
      }), (0, _.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("4266")]).then(n.bind(n, 316210));
        return t => (0, i.jsx)(e, {
          ...t,
          questContent: g.jn.MEMBERS_LIST,
          quest: m
        })
      })
    },
    eo = () => {
      (0, C._3)({
        questId: m.id,
        questContent: g.jn.MEMBERS_LIST,
        questContentCTA: C.jZ.LEARN_MORE,
        trackGuildAndChannelMetadata: !0
      }), E.Z.open(P.oAB.INVENTORY)
    },
    ea = e => {
      e.stopPropagation(), es()
    },
    el = () => {
      if (w(R, V) && null != V) return (0, C._3)({
        questId: m.id,
        questContent: g.jn.MEMBERS_LIST,
        questContentCTA: C.jZ.WATCH_STREAM,
        trackGuildAndChannelMetadata: !0
      }), d.default.selectVoiceChannel(V.id), (0, c.iV)(R);
      eo()
    },
    eu = j && !F ? {
      headerText: U.Z.Messages.QUESTS_MEMBERS_LIST_CLAIM_REWARD,
      ctaText: U.Z.Messages.QUESTS_CLAIM_REWARD,
      handleClickCta: Z,
      tileAssetType: "reward"
    } : Y && !F ? {
      headerText: U.Z.Messages.QUESTS_MEMBERS_LIST_FINISH,
      ctaText: U.Z.Messages.QUESTS_CHECK_PROGRESS,
      handleClickCta: eo,
      tileAssetType: "reward"
    } : w(R, V) ? {
      headerText: U.Z.Messages.QUESTS_MEMBERS_LIST_AVAILBLE,
      ctaText: U.Z.Messages.QUESTS_JOIN_ME,
      handleClickCta: el,
      tileAssetType: "game"
    } : {
      headerText: U.Z.Messages.QUESTS_MEMBERS_LIST_AVAILBLE,
      ctaText: U.Z.Messages.QUESTS_UNLOCK_REWARDS,
      handleClickCta: eo,
      tileAssetType: "game"
    };
  return (0, i.jsx)(v.A, {
    questOrQuests: m,
    questContent: g.jn.MEMBERS_LIST,
    trackGuildAndChannelMetadata: !0,
    children: e => {
      var t, n;
      return (0, i.jsx)(s.animated.div, {
        ref: t => {
          e.current = t
        },
        "aria-expanded": Q,
        className: b.wrapper,
        style: {
          width: null !== (n = null === (t = O.current) || void 0 === t ? void 0 : t.clientWidth) && void 0 !== n ? n : 222,
          height: et.height,
          overflow: Q ? "visible" : "hidden",
          borderRadius: er
        },
        children: (0, i.jsxs)("div", {
          ref: e => {
            q.current = e
          },
          className: b.container,
          style: {
            borderRadius: er
          },
          children: [(0, i.jsxs)("div", {
            className: b.top,
            children: [(0, i.jsxs)("div", {
              className: b.left,
              children: [(0, i.jsx)(_.Heading, {
                variant: "heading-sm/semibold",
                children: eu.headerText
              }), (0, i.jsxs)(_.Clickable, {
                className: b.help,
                onClick: e => {
                  ei(), ea(e)
                },
                children: [(0, i.jsx)(_.Text, {
                  variant: "text-xs/medium",
                  color: "text-muted",
                  className: b.helpText,
                  children: U.Z.Messages.QUESTS_MEMBERS_LIST_PROMOTED_BY.format({
                    gamePublisher: m.config.messages.gamePublisher
                  })
                }), (0, i.jsx)(a.i, {
                  className: b.helpIcon,
                  width: G,
                  height: G,
                  color: _.tokens.colors.INTERACTIVE_NORMAL
                })]
              })]
            }), (0, i.jsx)("div", {
              className: b.right,
              children: (0, i.jsxs)("div", {
                className: b.imgWrapper,
                children: [en((e, t) => t && (0, i.jsx)(s.animated.div, {
                  style: e,
                  className: b.imgUnderlay
                })), "game" === eu.tileAssetType && (0, i.jsx)("img", {
                  alt: U.Z.Messages.QUESTS_MEMBERS_LIST_GAME_TILE_ALT.format({
                    gameTitle: m.config.messages.gameTitle,
                    gamePublisher: m.config.messages.gamePublisher
                  }),
                  className: b.assetTile,
                  src: (0, L.uo)(m, K)
                }), "reward" === eu.tileAssetType && (0, i.jsx)(D.Z, {
                  className: b.assetTile,
                  quest: m,
                  questContent: g.jn.MEMBERS_LIST,
                  learnMoreStyle: "icon",
                  onClick: ei
                })]
              })
            })]
          }), (0, i.jsx)(_.Button, {
            onClick: () => {
              ei(), eu.handleClickCta()
            },
            color: _.Button.Colors.CUSTOM,
            className: b.ctaButton,
            children: eu.ctaText
          })]
        })
      })
    }
  })
}