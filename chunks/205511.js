var s = n(735250),
  o = n(470079),
  r = n(120356),
  a = n.n(r),
  l = n(959078),
  i = n(442837),
  c = n(481060),
  d = n(607070),
  u = n(553795),
  p = n(617136),
  m = n(111382),
  x = n(113434),
  g = n(497505),
  f = n(918701),
  C = n(566078),
  _ = n(667105),
  h = n(585857),
  E = n(46140),
  S = n(981631),
  T = n(689938),
  v = n(778239);

function N(e) {
  let {
children: t,
isComplete: n,
hasNextStep: o
  } = e;
  return (0, s.jsxs)('li', {
className: a()(v.stepWrapper, {
  [v.stepWrapperComplete]: n
}, {
  [v.stepWrapperWithNextStep]: o
}),
children: [
  (0, s.jsxs)('div', {
    className: v.stepIndicator,
    children: [
      (0, s.jsx)('div', {
        className: v.stepIconWrapper,
        children: n && (0, s.jsx)(c.CheckmarkBoldIcon, {
          className: v.stepIcon,
          color: c.tokens.colors.WHITE
        })
      }),
      o && (0, s.jsx)('div', {
        className: v.stepConnector
      })
    ]
  }),
  (0, s.jsx)('div', {
    className: v.stepContent,
    children: t
  })
]
  });
}

function j(e) {
  return (0, s.jsx)(c.Text, {
className: v.microphoneUnitBodyText,
color: 'text-muted',
variant: 'text-xxs/normal',
children: e.children
  });
}

function A(e) {
  let {
quest: t,
useReducedMotion: n
  } = e, r = (0, m.n)(), i = (0, _.k3)(t.id, g.jn.QUEST_BAR_V2), d = (0, _.g2)({
useReducedMotion: n
  }), {
errorHints: h,
startingConsoleQuest: N,
startConsoleQuest: A
  } = (0, x.GI)({
questId: t.id,
beforeRequest: () => {
  (0, p._3)({
    questId: t.id,
    questContent: g.jn.QUEST_BAR_V2,
    questContentCTA: p.jZ.DEFIBRILLATOR
  }), d.startAnimation();
},
afterRequest: d.stopAnimation
  }), {
header: B,
renderBody: b
  } = o.useMemo(() => {
let e = h.length > 0,
  n = () => (0, s.jsx)(s.Fragment, {
    children: h.map((e, n) => {
      if (e.type === l.K.EXPIRED_CREDENTIAL && r) {
        let o = u.Z.getAccount(e.connected_account_id, e.connected_account_type),
          r = (0, f.C9)(e),
          a = (0, f._j)(e),
          l = a === S.ABu.XBOX;
        return (0, s.jsx)(j, {
          children: r.format({
            account_name: null == o ? void 0 : o.name,
            onClick: () => {
              (0, f.fY)({
                quest: t,
                showInline: l,
                platformType: a
              }, {
                content: g.jn.QUEST_BAR,
                ctaContent: p.jZ.DEFIBRILLATOR_RECONNECT_CONSOLE
              });
            }
          })
        }, n);
      }
      return (0, s.jsx)(j, {
        children: e.message
      }, n);
    })
  });
if ((0, f.zK)(t, E.S7.IN_HOUSE_CONSOLE_QUEST))
  return {
    header: e ? T.Z.Messages.QUESTS_ANY_GAME_NOT_DETECTED : T.Z.Messages.QUESTS_MICROPHONE_UNIT_HEADER,
    renderBody: e ? n : () => (0, s.jsx)(c.Text, {
      className: v.microphoneUnitBodyText,
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
  renderBody: e ? n : () => (0, s.jsx)(c.Text, {
    className: v.microphoneUnitBodyText,
    color: 'text-muted',
    variant: 'text-xxs/normal',
    children: T.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY.format({
      gameTitle: o
    })
  })
};
  }, [
t,
h,
r
  ]);
  return (0, s.jsxs)('div', {
className: v.microphoneUnit,
children: [
  (0, s.jsxs)('div', {
    className: v.microphoneUnitHeader,
    children: [
      (0, s.jsx)(c.CircleExclamationPointIcon, {
        size: 'custom',
        color: 'currentColor',
        className: 0 === h.length ? v.warningCircle : v.errorCircle,
        width: 16,
        height: 16
      }),
      (0, s.jsx)(c.Text, {
        variant: 'text-xs/medium',
        children: B
      }),
      (0, s.jsx)(c.Clickable, {
        className: a()(v.microphoneUnitRefreshIconWrapper, {
          [v.disabled]: N
        }),
        onClick: () => A(),
        children: d.render()
      })
    ]
  }),
  (0, s.jsxs)('div', {
    className: a()({
      [v.opacity_50]: N
    }),
    children: [
      b(),
      0 === h.length ? null : (0, s.jsx)(j, {
        children: i
      })
    ]
  })
]
  });
}

function B(e) {
  let {
text: t
  } = e;
  return (0, s.jsx)(c.Text, {
color: 'text-muted',
variant: 'text-xs/medium',
children: t
  });
}
t.Z = function(e) {
  let {
quest: t,
taskDetails: n
  } = e, r = (0, i.e7)([d.Z], () => d.Z.useReducedMotion), a = (0, x.z6)(), {
steps: l,
hasConnectedAccounts: u,
isProgressingQuestForLaunchedGame: p,
isQuestComplete: m
  } = o.useMemo(() => {
var e;
let o = a.xboxAndPlaystationAccounts.length > 0,
  r = o && (0, f.Bz)(t),
  l = (0, f.zK)(t, E.S7.IN_HOUSE_CONSOLE_QUEST),
  i = C.r.build(t.config).application.name,
  c = (null === (e = t.userStatus) || void 0 === e ? void 0 : e.completedAt) != null;
return {
  steps: [{
      renderContent: () => (0, s.jsx)(h.Q, {
        ...a,
        quest: t
      }),
      isComplete: o || r || c
    },
    {
      renderContent: () => (0, s.jsx)(B, {
        text: l ? T.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_ANY_GAME : T.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_GAME.format({
          gameTitle: i
        })
      }),
      isComplete: r || c
    },
    {
      renderContent: () => (0, s.jsx)(B, {
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
className: v.wrapper,
children: [
  (0, s.jsx)('div', {
    className: v.headingWrapper,
    children: (0, s.jsx)(c.Heading, {
      className: v.heading,
      variant: 'text-xs/medium',
      children: T.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_HEADING
    })
  }),
  (0, s.jsxs)('div', {
    className: v.stepsWrapper,
    children: [
      (0, s.jsx)('ul', {
        children: l.map((e, t) => (0, s.jsx)(N, {
          isComplete: e.isComplete,
          hasNextStep: t < l.length - 1,
          children: e.renderContent()
        }, t))
      }),
      u && !p && !m && (0, s.jsx)(A, {
        useReducedMotion: r,
        quest: t
      })
    ]
  })
]
  });
};