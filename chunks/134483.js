"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("442837"),
  o = n("780384"),
  u = n("481060"),
  d = n("230711"),
  c = n("358221"),
  f = n("687516"),
  h = n("210887"),
  m = n("937995"),
  p = n("158776"),
  E = n("594174"),
  C = n("808268"),
  g = n("617136"),
  S = n("272008"),
  _ = n("113434"),
  T = n("569984"),
  I = n("497505"),
  A = n("918701"),
  N = n("5881"),
  v = n("874137"),
  x = n("340100"),
  M = n("611855"),
  R = n("644646"),
  L = n("670638"),
  y = n("667105"),
  O = n("860151"),
  j = n("46140"),
  P = n("981631"),
  D = n("354459"),
  b = n("689938"),
  U = n("934065");
t.default = function(e) {
  var t, n;
  let {
    channelId: s
  } = e, [F, w] = l.useState(!1), k = l.useCallback(() => w(!0), []), H = l.useCallback(() => w(!1), []), B = l.useContext(m.IdleStateContext), G = (0, r.useStateFromStores)([E.default], () => E.default.getCurrentUser()), V = (0, r.useStateFromStores)([h.default], () => h.default.getState().theme), W = (0, o.isThemeDark)(V) ? P.ThemeTypes.DARK : P.ThemeTypes.LIGHT, {
    isCurrentUserStreamingQuestApplication: Y,
    quest: z
  } = (0, r.useStateFromStoresObject)([p.default, c.default, T.default], () => {
    let e = c.default.getParticipants(s),
      t = function(e, t, n) {
        for (let l of e)
          if (l.type === D.ParticipantTypes.STREAM) {
            var a;
            let e = (0, f.getStreamerApplication)(l.stream, n),
              s = (null == e ? void 0 : e.id) != null ? (0, A.getQuestByApplicationId)(t, e.id) : null;
            if (null != s && (null === (a = s.userStatus) || void 0 === a ? void 0 : a.claimedAt) == null) return s
          } return null
      }(e, T.default.quests, p.default);
    return {
      isCurrentUserStreamingQuestApplication: null != t && null != G && function(e, t, n, a) {
        for (let s of e) {
          var l;
          if (s.type === D.ParticipantTypes.STREAM && s.user.id === n.id && t.config.applicationId === (null === (l = (0, f.getStreamerApplication)(s.stream, a)) || void 0 === l ? void 0 : l.id)) return !0
        }
        return !1
      }(e, t, G, p.default),
      quest: t
    }
  }, [s, G]), K = (0, r.useStateFromStores)([T.default], () => null != z && T.default.isEnrolling(z.id), [z]), Z = (0, r.useStateFromStores)([c.default], () => ((null == G ? void 0 : G.id) == null ? null : c.default.getParticipant(s, G.id)) != null, [s, G]), q = (0, _.useQuestFormattedDate)(null == z ? void 0 : z.config.expiresAt), X = (0, _.useQuestFormattedDate)(null == z ? void 0 : z.config.rewardCodeExpiresAt), Q = l.useCallback(() => {
    null != z && (0, S.enrollInQuest)(z.id, {
      questContent: I.QuestContent.QUEST_LIVE_STREAM,
      questContentCTA: g.QuestContentCTA.ACCEPT_QUEST
    })
  }, [z]), J = l.useCallback(() => {
    null != z && ((0, g.trackQuestContentClicked)({
      questId: z.id,
      questContent: I.QuestContent.QUEST_LIVE_STREAM,
      questContentCTA: g.QuestContentCTA.TRACK_PROGRESS
    }), d.default.open(P.UserSettingsSections.INVENTORY))
  }, [z]), $ = l.useCallback(() => {
    null != z && ((0, g.trackQuestContentClicked)({
      questId: z.id,
      questContent: I.QuestContent.QUEST_LIVE_STREAM,
      questContentCTA: g.QuestContentCTA.LEARN_MORE
    }), d.default.open(P.UserSettingsSections.INVENTORY))
  }, [z]), ee = (0, y.useHandleClaimQuestsReward)({
    quest: z,
    location: I.QuestContent.QUEST_LIVE_STREAM
  }), et = l.useMemo(() => (0, N.getQuestLogger)({
    quest: z,
    location: j.QuestsExperimentLocations.QUEST_CHANNEL_CALL_HEADER
  }), [z]), en = (0, _.useIsQuestExpired)(z);
  if (null == z) return null;
  let ea = (null === (t = z.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
    el = (null === (n = z.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
    es = null != z.userStatus && (0, A.isDismissed)(z.userStatus, I.QuestContent.QUEST_LIVE_STREAM),
    ei = null != z.userStatus && (0, A.isDismissed)(z.userStatus, I.QuestContent.QUEST_BAR),
    er = (0, A.isTargetedForContent)(z, I.QuestContent.QUEST_BAR) && !ei;
  if (et.info({
      isQuestCallHeaderDismissed: es,
      isQuestExpired: en,
      isQuestBarShowing: er,
      isCurrentUserCallParticipant: Z
    }), es || en || er || !Z) return null;
  let eo = (0, a.jsx)(R.default, {
    className: U.rewardTile,
    autoplay: F,
    quest: z,
    questContent: I.QuestContent.QUEST_LIVE_STREAM
  });
  return (0, a.jsx)(v.QuestContentImpressionTracker, {
    questOrQuests: z,
    overrideVisibility: !B,
    questContent: I.QuestContent.QUEST_LIVE_STREAM,
    children: () => {
      var e;
      return (0, a.jsxs)("div", {
        className: i()(U.wrapper, {
          [U.wrapperAccepted]: ea
        }),
        onFocus: k,
        onMouseEnter: k,
        onBlur: H,
        onMouseLeave: H,
        children: [!ea && (0, a.jsxs)("div", {
          className: U.rewardTileWrapper,
          children: [eo, (0, a.jsx)(M.default, {
            bgOpacity: .32,
            className: U.promotedTag
          })]
        }), (0, a.jsxs)("div", {
          className: U.content,
          children: [(0, a.jsxs)("div", {
            className: U.heading,
            children: [ea && Y ? eo : (0, a.jsx)("img", {
              className: U.gameTile,
              alt: z.config.messages.gameTitle,
              src: (0, A.getGameTileAssetUrl)(z, W)
            }), (0, a.jsxs)("div", {
              className: U.__invalid_details,
              children: [(0, a.jsxs)("div", {
                className: U.headingWithSubmenu,
                children: [(0, a.jsx)(u.Heading, {
                  className: U.questTitle,
                  variant: "heading-md/semibold",
                  color: "header-primary",
                  children: Y ? (0, A.getContextualEntrypointHeading)(z) : b.default.Messages.QUESTS_TITLE.format({
                    questName: z.config.messages.questName
                  })
                }), (0, a.jsx)(L.QuestsEntryContextMenuPopout, {
                  questContent: I.QuestContent.QUEST_LIVE_STREAM,
                  quest: z,
                  preventIdle: !0,
                  shouldShowDisclosure: (null === (e = z.userStatus) || void 0 === e ? void 0 : e.enrolledAt) == null,
                  children: e => (0, a.jsx)(u.Clickable, {
                    ...e,
                    className: U.submenuWrapper,
                    "aria-label": b.default.Messages.ACTIONS,
                    children: (0, a.jsx)(C.default, {
                      className: U.submenuIcon
                    })
                  })
                })]
              }), (0, a.jsx)(u.Text, {
                color: "header-secondary",
                variant: "text-xs/medium",
                children: el ? b.default.Messages.QUESTS_CLAIM_BY.format({
                  expirationDate: X
                }) : b.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
                  expirationDate: q
                })
              })]
            })]
          }), ea && !el && !Y && (0, a.jsx)(O.default, {
            autoplay: F,
            quest: z,
            questContent: I.QuestContent.QUEST_LIVE_STREAM
          }), (0, a.jsxs)("div", {
            className: U.ctas,
            children: [!ea && (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(u.Button, {
                className: U.cta,
                color: u.Button.Colors.PRIMARY,
                fullWidth: !0,
                size: u.Button.Sizes.SMALL,
                onClick: $,
                children: b.default.Messages.QUESTS_LEARN_MORE_V2
              }), (0, a.jsx)(u.Button, {
                className: U.cta,
                color: u.Button.Colors.BRAND,
                fullWidth: !0,
                onClick: Q,
                size: u.Button.Sizes.SMALL,
                submitting: K,
                children: b.default.Messages.QUESTS_ACCEPT_QUEST
              })]
            }), ea && !el && Y && (0, a.jsx)(x.default, {
              color: u.tokens.colors.BG_BRAND,
              quest: z
            }), ea && !el && !Y && (0, a.jsx)(u.Button, {
              className: U.cta,
              color: u.Button.Colors.BRAND,
              fullWidth: !0,
              onClick: J,
              size: u.Button.Sizes.SMALL,
              children: b.default.Messages.QUESTS_TRACK_YOUR_PROGRESS
            }), el && (0, a.jsx)(u.Button, {
              className: U.cta,
              color: u.Button.Colors.BRAND,
              fullWidth: !0,
              onClick: ee,
              size: u.Button.Sizes.SMALL,
              children: b.default.Messages.QUESTS_CLAIM_REWARD
            })]
          })]
        })]
      })
    }
  })
}