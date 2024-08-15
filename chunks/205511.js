var s = n(735250),
  o = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(959078),
  i = n(442837),
  c = n(481060),
  d = n(607070),
  u = n(553795),
  p = n(617136),
  x = n(111382),
  m = n(113434),
  g = n(497505),
  _ = n(918701),
  C = n(566078),
  f = n(667105),
  h = n(585857),
  E = n(46140),
  T = n(981631),
  S = n(689938),
  v = n(627196);

function A(e) {
  let {
children: t,
isComplete: n,
hasNextStep: o
  } = e;
  return (0, s.jsxs)('li', {
className: r()(v.stepWrapper, {
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
        children: n && (0, s.jsx)(c.CheckmarkLargeBoldIcon, {
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

function N(e) {
  return (0, s.jsx)(c.Text, {
className: v.microphoneUnitBodyText,
color: 'text-muted',
variant: 'text-xxs/normal',
children: e.children
  });
}

function j(e) {
  let {
quest: t,
useReducedMotion: n
  } = e, a = (0, x.n)(), i = (0, f.k3)(t.id, g.jn.QUEST_BAR_V2), d = (0, f.g2)({
useReducedMotion: n
  }), {
errorHints: h,
startingConsoleQuest: A,
startConsoleQuest: j
  } = (0, m.GI)({
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
      if (e.type === l.K.EXPIRED_CREDENTIAL && a) {
        let o = u.Z.getAccount(e.connected_account_id, e.connected_account_type),
          a = (0, _.C9)(e),
          r = (0, _._j)(e),
          l = r === T.ABu.XBOX;
        return (0, s.jsx)(N, {
          children: a.format({
            account_name: null == o ? void 0 : o.name,
            onClick: () => {
              (0, _.fY)({
                quest: t,
                showInline: l,
                platformType: r
              }, {
                content: g.jn.QUEST_BAR,
                ctaContent: p.jZ.DEFIBRILLATOR_RECONNECT_CONSOLE
              });
            }
          })
        }, n);
      }
      return (0, s.jsx)(N, {
        children: e.message
      }, n);
    })
  });
if ((0, _.zK)(t, E.S7.IN_HOUSE_CONSOLE_QUEST))
  return {
    header: e ? S.Z.Messages.QUESTS_ANY_GAME_NOT_DETECTED : S.Z.Messages.QUESTS_MICROPHONE_UNIT_HEADER,
    renderBody: e ? n : () => (0, s.jsx)(c.Text, {
      className: v.microphoneUnitBodyText,
      color: 'text-muted',
      variant: 'text-xxs/normal',
      children: S.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY_ANY_GAME
    })
  };
let o = C.r.build(t.config).application.name;
return {
  header: e ? S.Z.Messages.QUESTS_GAME_NOT_DETECTED.format({
    gameTitle: o
  }) : S.Z.Messages.QUESTS_LAUNCHED_GAME.format({
    gameTitle: o
  }),
  renderBody: e ? n : () => (0, s.jsx)(c.Text, {
    className: v.microphoneUnitBodyText,
    color: 'text-muted',
    variant: 'text-xxs/normal',
    children: S.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY.format({
      gameTitle: o
    })
  })
};
  }, [
t,
h,
a
  ]);
  return (0, s.jsxs)('div', {
className: v.microphoneUnit,
children: [
  (0, s.jsxs)('div', {
    className: v.microphoneUnitHeader,
    children: [
      (0, s.jsx)(c.CircleWarningIcon, {
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
        className: r()(v.microphoneUnitRefreshIconWrapper, {
          [v.disabled]: A
        }),
        onClick: () => j(),
        children: d.render()
      })
    ]
  }),
  (0, s.jsxs)('div', {
    className: r()({
      [v.opacity_50]: A
    }),
    children: [
      b(),
      0 === h.length ? null : (0, s.jsx)(N, {
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
  } = e, a = (0, i.e7)([d.Z], () => d.Z.useReducedMotion), r = (0, m.z6)(), {
steps: l,
hasConnectedAccounts: u,
isProgressingQuestForLaunchedGame: p,
isQuestComplete: x
  } = o.useMemo(() => {
var e;
let o = r.xboxAndPlaystationAccounts.length > 0,
  a = o && (0, _.Bz)(t),
  l = (0, _.zK)(t, E.S7.IN_HOUSE_CONSOLE_QUEST),
  i = C.r.build(t.config).application.name,
  c = (null === (e = t.userStatus) || void 0 === e ? void 0 : e.completedAt) != null;
return {
  steps: [{
      renderContent: () => (0, s.jsx)(h.Q, {
        ...r,
        quest: t
      }),
      isComplete: o || a || c
    },
    {
      renderContent: () => (0, s.jsx)(B, {
        text: l ? S.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_ANY_GAME : S.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_GAME.format({
          gameTitle: i
        })
      }),
      isComplete: a || c
    },
    {
      renderContent: () => (0, s.jsx)(B, {
        text: S.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_PLAYTIME.format({
          numMinutes: n.targetMinutes
        })
      }),
      isComplete: c
    }
  ],
  hasConnectedAccounts: o,
  isProgressingQuestForLaunchedGame: a,
  isQuestComplete: c
};
  }, [
r,
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
      children: S.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_HEADING
    })
  }),
  (0, s.jsxs)('div', {
    className: v.stepsWrapper,
    children: [
      (0, s.jsx)('ul', {
        children: l.map((e, t) => (0, s.jsx)(A, {
          isComplete: e.isComplete,
          hasNextStep: t < l.length - 1,
          children: e.renderContent()
        }, t))
      }),
      u && !p && !x && (0, s.jsx)(j, {
        useReducedMotion: a,
        quest: t
      })
    ]
  })
]
  });
};