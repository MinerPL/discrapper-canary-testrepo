var s = n(735250),
  o = n(470079),
  r = n(120356),
  a = n.n(r),
  i = n(442837),
  l = n(481060),
  c = n(607070),
  d = n(706454),
  u = n(63063),
  p = n(617136),
  x = n(113434),
  m = n(497505),
  g = n(918701),
  C = n(566078),
  f = n(667105),
  _ = n(585857),
  h = n(46140),
  E = n(981631),
  T = n(689938),
  S = n(778239);

function N(e) {
  let {
children: t,
isComplete: n,
hasNextStep: o
  } = e;
  return (0, s.jsxs)('li', {
className: a()(S.stepWrapper, {
  [S.stepWrapperComplete]: n
}, {
  [S.stepWrapperWithNextStep]: o
}),
children: [
  (0, s.jsxs)('div', {
    className: S.stepIndicator,
    children: [
      (0, s.jsx)('div', {
        className: S.stepIconWrapper,
        children: n && (0, s.jsx)(l.CheckmarkBoldIcon, {
          className: S.stepIcon,
          color: l.tokens.colors.WHITE
        })
      }),
      o && (0, s.jsx)('div', {
        className: S.stepConnector
      })
    ]
  }),
  (0, s.jsx)('div', {
    className: S.stepContent,
    children: t
  })
]
  });
}

function A(e) {
  let {
quest: t,
useReducedMotion: n,
connectedAccounts: r
  } = e, c = (0, i.e7)([d.default], () => d.default.locale), _ = (0, f.g2)({
useReducedMotion: n
  }), {
errorHints: N,
startingConsoleQuest: A,
startConsoleQuest: v
  } = (0, x.GI)({
questId: t.id,
beforeRequest: () => {
  (0, p._3)({
    questId: t.id,
    questContent: m.jn.QUEST_BAR_V2,
    questContentCTA: p.jZ.DEFIBRILLATOR
  }), _.startAnimation();
},
afterRequest: _.stopAnimation
  }), {
header: j,
renderBody: B
  } = o.useMemo(() => {
let e = N.length > 0,
  n = () => (0, s.jsx)('div', {
    children: N.map((e, t) => (0, s.jsx)(l.Text, {
      className: S.microphoneUnitBodyText,
      color: 'text-muted',
      variant: 'text-xxs/normal',
      children: e
    }, t))
  });
if ((0, g.zK)(t, h.S7.IN_HOUSE_CONSOLE_QUEST))
  return {
    header: e ? T.Z.Messages.QUESTS_ANY_GAME_NOT_DETECTED : T.Z.Messages.QUESTS_MICROPHONE_UNIT_HEADER,
    renderBody: e ? n : () => (0, s.jsx)(l.Text, {
      className: S.microphoneUnitBodyText,
      color: 'text-muted',
      variant: 'text-xxs/normal',
      children: T.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY_ANY_GAME
    })
  };
let o = C.r.build(t.config).application.name;
return {
  header: e ? T.Z.Messages.QUESTS_GAME_NOT_DETECTED.format({
    gameTitle: o
  }) : T.Z.Messages.QUESTS_LAUNCHED_GAME.format({
    gameTitle: o
  }),
  renderBody: e ? n : () => (0, s.jsx)(l.Text, {
    className: S.microphoneUnitBodyText,
    color: 'text-muted',
    variant: 'text-xxs/normal',
    children: T.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY.format({
      gameTitle: o
    })
  })
};
  }, [
t,
N
  ]);
  return (0, s.jsxs)('div', {
className: S.microphoneUnit,
children: [
  (0, s.jsxs)('div', {
    className: S.microphoneUnitHeader,
    children: [
      (0, s.jsx)(l.CircleExclamationPointIcon, {
        size: 'custom',
        color: 'currentColor',
        className: 0 === N.length ? S.warningCircle : S.errorCircle,
        width: 16,
        height: 16
      }),
      (0, s.jsx)(l.Text, {
        variant: 'text-xs/medium',
        children: j
      }),
      (0, s.jsx)(l.Clickable, {
        className: a()(S.microphoneUnitRefreshIconWrapper, {
          [S.disabled]: A
        }),
        onClick: () => v(),
        children: _.render()
      })
    ]
  }),
  B(),
  0 === N.length ? null : (0, s.jsx)(l.Text, {
    className: S.microphoneUnitBodyText,
    color: 'text-muted',
    variant: 'text-xxs/normal',
    children: function() {
      let e = r.playstationAccounts.length > 0,
        t = r.xboxAccounts.length > 0;
      return e && !t || !e && t ? 'en-US' === c ? T.Z.Messages.QUESTS_MICROPHONE_UNIT_FOOTER_HELP_ARTICLE_SINGLE.format({
        helpdeskArticle: u.Z.getArticleURL(e ? E.BhN.QUEST_HOW_TO_PLAYSTATION : E.BhN.QUEST_HOW_TO_XBOX)
      }) : T.Z.Messages.QUESTS_MICROPHONE_UNIT_FOOTER_SINGLE_CONSOLE.format({
        helpdeskArticle: u.Z.getArticleURL(e ? E.BhN.PS_CONNECTION : E.BhN.XBOX_CONNECTION)
      }) : 'en-US' === c ? T.Z.Messages.QUESTS_MICROPHONE_UNIT_FOOTER_HELP_ARTICLE_MULTI.format({
        psHelpdeskArticle: u.Z.getArticleURL(E.BhN.QUEST_HOW_TO_PLAYSTATION),
        xboxHelpdeskArticle: u.Z.getArticleURL(E.BhN.QUEST_HOW_TO_XBOX)
      }) : T.Z.Messages.QUESTS_MICROPHONE_UNIT_FOOTER_PLAYSTATION_OR_XBOX.format({
        psHelpdeskArticle: u.Z.getArticleURL(E.BhN.PS_CONNECTION),
        xboxHelpdeskArticle: u.Z.getArticleURL(E.BhN.XBOX_CONNECTION)
      });
    }()
  })
]
  });
}

function v(e) {
  let {
text: t
  } = e;
  return (0, s.jsx)(l.Text, {
color: 'text-muted',
variant: 'text-xs/medium',
children: t
  });
}
t.Z = function(e) {
  let {
quest: t,
taskDetails: n
  } = e, r = (0, i.e7)([c.Z], () => c.Z.useReducedMotion), a = (0, x.z6)(), {
steps: d,
hasConnectedAccounts: u,
isProgressingQuestForLaunchedGame: p,
isQuestComplete: m
  } = o.useMemo(() => {
var e;
let o = a.xboxAndPlaystationAccounts.length > 0,
  r = o && (0, g.Bz)(t),
  i = (0, g.zK)(t, h.S7.IN_HOUSE_CONSOLE_QUEST),
  l = C.r.build(t.config).application.name,
  c = (null === (e = t.userStatus) || void 0 === e ? void 0 : e.completedAt) != null;
return {
  steps: [{
      renderContent: () => (0, s.jsx)(_.Q, {
        ...a,
        quest: t
      }),
      isComplete: o || r || c
    },
    {
      renderContent: () => (0, s.jsx)(v, {
        text: i ? T.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_ANY_GAME : T.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_GAME.format({
          gameTitle: l
        })
      }),
      isComplete: r || c
    },
    {
      renderContent: () => (0, s.jsx)(v, {
        text: T.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_PLAYTIME.format({
          numMinutes: n.targetMinutes
        })
      }),
      isComplete: c
    }
  ],
  hasConnectedAccounts: o,
  isProgressingQuestForLaunchedGame: r,
  isQuestComplete: c
};
  }, [
a,
t,
n
  ]);
  return (0, s.jsxs)('div', {
className: S.wrapper,
children: [
  (0, s.jsx)('div', {
    className: S.headingWrapper,
    children: (0, s.jsx)(l.Heading, {
      className: S.heading,
      variant: 'text-xs/medium',
      children: T.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_HEADING
    })
  }),
  (0, s.jsxs)('div', {
    className: S.stepsWrapper,
    children: [
      (0, s.jsx)('ul', {
        children: d.map((e, t) => (0, s.jsx)(N, {
          isComplete: e.isComplete,
          hasNextStep: t < d.length - 1,
          children: e.renderContent()
        }, t))
      }),
      u && !p && !m && (0, s.jsx)(A, {
        connectedAccounts: a,
        useReducedMotion: r,
        quest: t
      })
    ]
  })
]
  });
};