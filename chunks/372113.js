var i, a, s = n(735250),
  r = n(470079),
  l = n(120356),
  o = n.n(l),
  c = n(442837),
  d = n(481060),
  u = n(230711),
  _ = n(607070),
  E = n(706454),
  I = n(63063),
  m = n(930153),
  T = n(617136),
  h = n(272008),
  N = n(113434),
  f = n(569984),
  p = n(497505),
  C = n(918701),
  g = n(796111),
  S = n(566078),
  A = n(340100),
  R = n(644646),
  x = n(667105),
  O = n(87894),
  M = n(2660),
  v = n(46140),
  L = n(981631),
  Z = n(689938),
  P = n(817024),
  b = n(789002);
let D = (e, t, n) => (0, O.uq)(e) && !n && 'lg' === t ? 'text-lg/medium' : 'lg' === t ? 'text-md/medium' : 'sm' === t ? 'text-sm/medium' : 'text-xs/medium';

function j(e) {
  let {
containerSize: t,
onClick: n,
children: i,
tabIndex: a
  } = e;
  return 'xs' === t ? (0, s.jsx)(d.Clickable, {
tabIndex: a,
className: P.learnMoreLink,
tag: 'span',
onClick: n,
children: (0, s.jsx)(d.Text, {
  variant: 'text-sm/medium',
  color: 'text-link',
  children: i
})
  }) : (0, s.jsx)(d.Button, {
tabIndex: a,
wrapperClassName: P.ctaButtonWrapper,
color: d.ButtonColors.PRIMARY,
onClick: n,
children: i
  });
}
(i = a || (a = {}))[i.UNACCEPTED = 0] = 'UNACCEPTED', i[i.ACCEPTED = 1] = 'ACCEPTED', i[i.IN_PROGRESS = 2] = 'IN_PROGRESS', i[i.COMPLETED = 3] = 'COMPLETED', i[i.CLAIMED = 4] = 'CLAIMED';

function U(e) {
  let {
quest: t,
useReducedMotion: n
  } = e, i = (0, x.g2)({
useReducedMotion: n,
className: P.refreshIcon
  }), {
errorHints: a,
startingConsoleQuest: l,
startConsoleQuest: o
  } = (0, N.GI)({
questId: t.id,
beforeRequest: () => {
  (0, T._3)({
    questId: t.id,
    questContent: p.jn.GIFT_INVENTORY_FOR_YOU,
    questContentCTA: T.jZ.DEFIBRILLATOR
  }), i.startAnimation();
},
afterRequest: i.stopAnimation
  }), {
rawTooltipText: c,
renderTooltipText: u,
buttonText: _
  } = r.useMemo(() => {
let e = S.r.build(t.config).application.name,
  n = (0, C.zK)(t, v.S7.IN_HOUSE_CONSOLE_QUEST),
  i = a.join('\n'),
  r = () => (0, s.jsx)(s.Fragment, {
    children: a.map((e, t) => (0, s.jsx)(d.Text, {
      className: t > 0 ? P.ctaTooltipErrorHint : void 0,
      variant: 'text-xxs/normal',
      children: e
    }, t))
  });
return n ? {
  rawTooltipText: a.length > 0 ? i : Z.Z.Messages.QUESTS_CHECK_FOR_ANY_GAME_LAUNCH_TOOLTIP,
  renderTooltipText: a.length > 0 ? r : () => Z.Z.Messages.QUESTS_CHECK_FOR_ANY_GAME_LAUNCH_TOOLTIP,
  buttonText: a.length > 0 ? Z.Z.Messages.QUESTS_ANY_GAME_NOT_DETECTED : Z.Z.Messages.QUESTS_MICROHPONE_UNIT_BUTTON_CTA
} : {
  rawTooltipText: a.length > 0 ? i : Z.Z.Messages.QUESTS_CHECK_FOR_GAME_LAUNCH_TOOLTIP.format({
    gameTitle: e
  }),
  renderTooltipText: a.length > 0 ? r : () => Z.Z.Messages.QUESTS_CHECK_FOR_GAME_LAUNCH_TOOLTIP.format({
    gameTitle: e
  }),
  buttonText: a.length > 0 ? Z.Z.Messages.QUESTS_GAME_NOT_DETECTED.format({
    gameTitle: e
  }) : Z.Z.Messages.QUESTS_MICROHPONE_UNIT_BUTTON_CTA
};
  }, [
t,
a
  ]);
  return (0, s.jsx)(d.Tooltip, {
'aria-label': c,
text: l ? null : u(),
tooltipContentClassName: a.length > 0 ? P.ctaTooltipErrorText : P.ctaTooltipText,
children: e => (0, s.jsx)(d.Button, {
  ...e,
  wrapperClassName: P.ctaButtonWrapper,
  color: a.length > 0 ? d.ButtonColors.RED : d.ButtonColors.PRIMARY,
  disabled: l,
  onClick: () => o(),
  children: (0, s.jsxs)('div', {
    className: P.ctaButtonInner,
    children: [
      _,
      i.render()
    ]
  })
})
  }, c);
}

function y(e) {
  let {
quest: t,
progressState: n,
isCollectibleQuest: i,
location: a,
questContentPosition: l,
inGiftInventory: o,
hasConsoleTasks: u,
hasConsoleConnection: E
  } = e, I = n >= 1, m = n >= 3, p = (0, C.Bz)(t), S = (0, c.e7)([_.Z], () => _.Z.useReducedMotion), A = (0, c.e7)([f.Z], () => f.Z.isEnrolling(t.id)), R = (0, C.zK)(t, v.S7.IN_HOUSE_CONSOLE_QUEST), O = (0, N._s)({
quest: t
  }), M = function(e) {
let {
  quest: t,
  progressState: n,
  isCollectibleQuest: i,
  location: a,
  questContentPosition: s,
  waitingForConsoleConnection: l,
  isInHouseQuest: o,
  inGiftInventory: c
} = e, d = (0, x.hf)({
  quest: t,
  location: a,
  questContentPosition: s
});
return r.useMemo(() => {
  switch (n) {
    case 0:
      return {
        text: Z.Z.Messages.QUESTS_ACCEPT,
          tooltipText: Z.Z.Messages.QUESTS_ACCEPT_TOOLTIP,
          onClick: () => (0, h.AH)(t.id, {
            questContent: a,
            questContentCTA: T.jZ.ACCEPT_QUEST,
            questContentPosition: s
          })
      };
    case 1:
    case 2:
      if (l && c)
        return {
          text: Z.Z.Messages.QUESTS_CONNECT_CONSOLE,
          tooltipText: null,
          onClick: () => (0, C.gI)({
            quest: t,
            showInline: (0, g.i)({
              location: v.dr.QUESTS_CARD
            })
          }, {
            content: a,
            ctaContent: T.jZ.CONNECT_CONSOLE
          })
        };
      return {
        text: Z.Z.Messages.QUESTS_CLAIM_REWARD,
          tooltipText: Z.Z.Messages.QUESTS_IN_PROGRESS_TOOLTIP,
          onClick: null
      };
    case 3:
      return {
        text: Z.Z.Messages.QUESTS_CLAIM_REWARD,
          tooltipText: o ? Z.Z.Messages.QUESTS_IN_HOUSE_REWARD_TOOLTIP : null,
          onClick: d
      };
    case 4:
      let e = {
        tooltipText: null,
        onClick: d
      };
      if (o)
        return {
          ...e,
          text: Z.Z.Messages.QUESTS_MOBILE_HOME_VIEW_REWARD
        };
      if (i)
        return {
          ...e,
          text: Z.Z.Messages.COLLECTIBLES_USE_NOW
        };
      else if ((0, C.vQ)(t.config))
        return {
          ...e,
          text: Z.Z.Messages.QUESTS_MOBILE_HOME_VIEW_REWARD
        };
      return {
        ...e,
        text: Z.Z.Messages.QUESTS_SEE_CODE
      };
  }
}, [
  t,
  i,
  o,
  a,
  d,
  n,
  s,
  l,
  c
]);
  }({
progressState: n,
quest: t,
isInHouseQuest: R,
location: a,
isCollectibleQuest: i,
waitingForConsoleConnection: O,
questContentPosition: l,
inGiftInventory: o
  });
  if (u && I && E && !p && !m && o)
return (0, s.jsx)(U, {
  quest: t,
  useReducedMotion: S
});
  let L = R && o && m,
D = L ? P.inHouseButton : d.ButtonColors.BRAND,
j = m && !S ? d.ShinyButton : d.Button;
  return (0, s.jsx)(d.Tooltip, {
text: M.tooltipText,
tooltipContentClassName: P.ctaTooltipText,
children: e => {
  var t;
  return (0, s.jsx)(j, {
    ...e,
    wrapperClassName: P.ctaButtonWrapper,
    color: D,
    disabled: null == M.onClick,
    submitting: A,
    onClick: null !== (t = M.onClick) && void 0 !== t ? t : () => {},
    children: (0, s.jsxs)('div', {
      className: P.ctaButtonInner,
      children: [
        L && (0, s.jsx)('img', {
          src: b,
          alt: '',
          className: P.inHouseIcon
        }),
        M.text
      ]
    })
  });
}
  }, M.tooltipText);
}
t.Z = e => {
  let {
quest: t,
location: n,
size: i,
isFocused: a,
isQuestExpired: r,
isExpanded: l,
isAnimating: _,
contentPosition: h
  } = e, f = function(e) {
var t, n, i;
let a = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
  s = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
  r = (null === (i = e.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null,
  l = (0, N.Rf)(e).percentComplete > 0;
if (r)
  return 4;
if (s)
  return 3;
if (l)
  return 2;
else if (a)
  return 1;
else
  return 0;
  }(t), g = f >= 1, x = f >= 3, b = f >= 4, U = (0, C.Xv)(t.config), B = (0, O.uq)(n), k = n === p.jn.QUESTS_EMBED, G = l || _, {
xboxAndPlaystationAccounts: F
  } = (0, N.z6)(), w = (0, C.$J)(t), V = g && !b && B, H = F.length > 0, Y = (0, N.t5)(t, v.dr.QUESTS_CARD, n), W = (0, c.e7)([E.default], () => E.default.locale), z = B && U, K = r && !x, Q = (0, s.jsx)(R.Z, {
autoplay: a,
className: o()(P.gridImg, {
  [P.questRewardGiftInventory]: B && 'lg' === i,
  [P.questRewardEmbed]: k && 'lg' === i,
  [P.questRewardEmbedSm]: 'sm' === i,
  [P.questRewardEmbedXs]: 'xs' === i
}),
learnMoreStyle: B ? null : 'text',
quest: t,
questContent: n,
questContentPosition: h
  });
  return (0, s.jsxs)('div', {
className: o()(P.outerContainer, {
  [P.outerContainerSm]: 'sm' === i,
  [P.outerContainerXs]: 'xs' === i,
  [P.outerContainerNoProgress]: !V
}),
style: {
  visibility: G ? 'visible' : 'hidden'
},
'aria-hidden': !G,
children: [
  (0, s.jsx)(d.Tooltip, {
    text: K ? Z.Z.Messages.QUESTS_REWARD_TILE_EXPIRED_QUEST : null,
    tooltipContentClassName: P.rewardTileExpirationTooltip,
    shouldShow: K,
    children: e => (0, s.jsxs)('div', {
      className: P.rewardTileWrapper,
      ...e,
      children: [
        r && (0, s.jsx)('div', {
          className: P.rewardTileExpired,
          children: (0, s.jsx)(d.CircleExclamationPointIcon, {
            color: d.tokens.colors.WHITE
          })
        }),
        z ? (0, s.jsx)(M.Z, {
          questConfig: t.config,
          fallback: Q,
          isFocused: a
        }) : Q
      ]
    })
  }),
  (0, s.jsxs)('div', {
    className: o()(P.gridText, P.taskDetails),
    children: [
      (0, s.jsx)(d.Text, {
        variant: D(n, i, g),
        className: P.taskInstructions,
        children: r ? Z.Z.Messages.QUESTS_EXPIRED_QUEST_CARD_HEADING.format({
          questName: t.config.messages.questName
        }) : Y
      }),
      (0, s.jsx)(d.Text, {
        variant: 'lg' === i ? 'text-sm/medium' : 'text-xs/medium',
        color: 'text-muted',
        children: function(e) {
          var t, n, i, a, s, r;
          let {
            quest: l,
            location: o,
            locale: c,
            isQuestExpired: d
          } = e, u = (null === (t = l.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, _ = u && (null === (n = l.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null, E = (0, C.zK)(l, v.S7.IN_HOUSE_CONSOLE_QUEST), T = (0, O.uq)(o), h = (0, N.B6)(null === (i = l.userStatus) || void 0 === i ? void 0 : i.completedAt, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }), f = (0, C.oo)({
            quest: l
          }), p = S.r.build(l.config).defaultReward.messages.nameWithArticle, g = (0, C.Kr)(l.config);
          if (u && E && T)
            return Z.Z.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({
              date: h
            });
          if (_) {
            let e = f ? (0, C.o9)({
                quest: l,
                idx: null === (a = l.userStatus) || void 0 === a ? void 0 : a.claimedTier
              }) : null,
              t = null !== (s = null == e ? void 0 : e.messages.nameWithArticle) && void 0 !== s ? s : null;
            return null != t ? Z.Z.Messages.QUEST_REWARD_COMPLETED_CLAIMED.format({
              reward: t,
              date: h
            }) : Z.Z.Messages.QUEST_REWARD_COMPLETED.format({
              reward: p,
              date: h
            });
          }
          if (u)
            return f ? Z.Z.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({
              date: h
            }) : Z.Z.Messages.QUEST_REWARD_COMPLETED.format({
              reward: p,
              date: h
            });
          let A = f ? (0, C.o9)({
            quest: l,
            idx: 0
          }) : null;
          return d ? Z.Z.Messages.QUESTS_EXPIRED_QUEST_CARD_SUBHEADING.format({
            reward: null !== (r = null == A ? void 0 : A.messages.nameWithArticle) && void 0 !== r ? r : p
          }) : null != A && null != A.approximateCount ? Z.Z.Messages.QUEST_REWARD_TIERED.format({
            maxReward: A.messages.nameWithArticle,
            maxRewardCount: (0, m.Bs)(A.approximateCount, c),
            helpCenterLink: I.Z.getArticleURL(L.BhN.QUESTS_LEARN_MORE)
          }) : null != g ? Z.Z.Messages.QUEST_REWARD_WITH_EXPIRATION.format({
            reward: p,
            duration: g
          }) : Z.Z.Messages.QUEST_REWARD.format({
            reward: p
          });
        }({
          quest: t,
          location: n,
          locale: W,
          isQuestExpired: r
        })
      })
    ]
  }),
  (0, s.jsxs)('div', {
    className: o()(P.ctaButtonContainer, P.gridCtaButtons),
    children: [
      !B && (0, s.jsx)(j, {
        containerSize: i,
        onClick: () => {
          u.Z.open(L.oAB.INVENTORY), (0, T._3)({
            questId: t.id,
            questContent: n,
            questContentPosition: h,
            questContentCTA: T.jZ.LEARN_MORE
          });
        },
        children: Z.Z.Messages.QUESTS_LEARN_MORE_V2
      }),
      r && !x ? null : (0, s.jsx)(y, {
        quest: t,
        progressState: f,
        isCollectibleQuest: U,
        location: n,
        inGiftInventory: B,
        hasConsoleTasks: w,
        hasConsoleConnection: H
      })
    ]
  }),
  V && (0, s.jsx)(A.Z, {
    className: P.gridProgressBar,
    color: x ? d.tokens.colors.TEXT_POSITIVE : d.tokens.colors.BG_BRAND,
    quest: t,
    isInventory: B
  })
]
  });
};