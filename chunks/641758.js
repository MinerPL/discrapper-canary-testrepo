t.r(s), t.d(s, {
  ANSWERS_DISPLAY_DATA: function() {
return h;
  },
  AnswerKey: function() {
return a;
  },
  default: function() {
return S;
  }
}), t(47120), t(390547);
var a, n, o = t(735250),
  _ = t(470079),
  r = t(120356),
  E = t.n(r),
  C = t(481060),
  l = t(471731),
  c = t(626135),
  i = t(124030),
  d = t(981631),
  N = t(689938),
  I = t(87750);
(n = a || (a = {})).WHEN_FRIENDS_PLAY = 'WHEN_FRIENDS_PLAY', n.ACHIEVEMENTS = 'ACHIEVEMENTS', n.NEWS = 'NEWS', n.NONE_OF_BENEFITS = 'NONE_OF_BENEFITS', n.NONE_OF_GAME_TYPES = 'NONE_OF_GAME_TYPES', n.GAMES_I_PLAY_NOW = 'GAMES_I_PLAY_NOW', n.GAMES_I_WANT_TO_PLAY = 'GAMES_I_WANT_TO_PLAY', n.GAMES_FRIENDS_PLAY = 'GAMES_FRIENDS_PLAY', n.FOLLOW_DEV = 'FOLLOW_DEV', n.GENRES = 'GENRES';
let M = {
getTitle: () => N.Z.Messages.GAME_PROFILE_QUESTION_BENEFITS,
answers: {
  WHEN_FRIENDS_PLAY: !1,
  ACHIEVEMENTS: !1,
  NEWS: !1,
  NONE_OF_BENEFITS: !1
}
  },
  A = {
getTitle: () => N.Z.Messages.GAME_PROFILE_QUESTION_GAME_TYPES,
answers: {
  GAMES_I_PLAY_NOW: !1,
  GAMES_I_WANT_TO_PLAY: !1,
  GAMES_FRIENDS_PLAY: !1,
  FOLLOW_DEV: !1,
  GENRES: !1,
  NONE_OF_GAME_TYPES: !1
}
  },
  h = {
WHEN_FRIENDS_PLAY: {
  getTitle: () => N.Z.Messages.GAME_PROFILE_Q1_WHEN_FRIENDS_PLAY,
  Icon: C.GameControllerIcon
},
ACHIEVEMENTS: {
  getTitle: () => N.Z.Messages.GAME_PROFILE_Q1_ACHIEVEMENTS,
  Icon: C.ChatIcon
},
NEWS: {
  getTitle: () => N.Z.Messages.GAME_PROFILE_Q1_NEWS,
  Icon: C.AnnouncementsIcon
},
NONE_OF_BENEFITS: {
  getTitle: () => N.Z.Messages.GAME_PROFILE_NONE,
  Icon: C.DenyIcon
},
NONE_OF_GAME_TYPES: {
  getTitle: () => N.Z.Messages.GAME_PROFILE_NONE,
  Icon: C.DenyIcon
},
GAMES_I_PLAY_NOW: {
  getTitle: () => N.Z.Messages.GAME_PROFILE_Q2_GAMES_I_PLAY_NOW,
  Icon: C.GameControllerIcon
},
GAMES_I_WANT_TO_PLAY: {
  getTitle: () => N.Z.Messages.GAME_PROFILE_Q2_GAMES_I_WANT_TO_PLAY,
  Icon: C.CalendarIcon
},
GAMES_FRIENDS_PLAY: {
  getTitle: () => N.Z.Messages.GAME_PROFILE_Q2_GAMES_FRIENDS_PLAY,
  Icon: C.FriendsIcon
},
FOLLOW_DEV: {
  getTitle: () => N.Z.Messages.GAME_PROFILE_Q2_FOLLOW_DEV,
  Icon: C.AnnouncementsIcon
},
GENRES: {
  getTitle: () => N.Z.Messages.GAME_PROFILE_Q2_GENRES,
  Icon: C.ModerationIcon
}
  };

function S(e) {
  let {
transitionState: s,
applicationId: t,
viewId: a,
background: n,
onClose: r
  } = e, S = (0, C.useToken)(C.tokens.colors.BORDER_STRONG).hex(), [O, u] = _.useState(!1), [g, x] = _.useState([
M,
A
  ]), [T, L] = _.useState(0), m = T === g.length - 1, R = Object.values(g[T].answers).filter(e => e).length > 0, [F, G] = _.useState(!1), P = Object.entries(g[T].answers).filter(e => {
let [s, t] = e;
return t;
  }).map(e => {
let [s] = e;
return s;
  }), j = P.some(e => e.startsWith('NONE')), Y = !j && P.length > 0, Z = Object.entries(g[T].answers).map(e => {
let [s, t] = e;
return {
  key: s,
  isChecked: t,
  text: h[s].getTitle(),
  Icon: h[s].Icon,
  disabled: s.startsWith('NONE') ? Y : j
};
  });

  function p() {
c.default.track(d.rMx.GAME_PROFILE_FOLLOW_SURVEY, {
  application_id: t,
  question_no: T,
  notify_on_launch: O,
  affirmative_answers: g.flatMap(e => Object.entries(e.answers).filter(e => {
    let [s, t] = e;
    return t;
  }).map(e => {
    let [s] = e;
    return s;
  })),
  view_id: a
});
  }
  return (0, o.jsxs)(C.ModalRoot, {
transitionState: s,
className: I.modalRoot,
size: C.ModalSize.LARGE,
children: [
  (0, o.jsx)('img', {
    src: n,
    className: I.backgroundImage,
    alt: ''
  }),
  (0, o.jsx)('div', {
    className: I.background
  }),
  (0, o.jsx)(C.ModalCloseButton, {
    onClick: r,
    className: I.closeIcon
  }),
  F && (0, o.jsxs)('div', {
    className: I.thankYou,
    children: [
      (0, o.jsx)(C.Heading, {
        variant: 'heading-md/bold',
        color: 'header-primary',
        children: N.Z.Messages.GAME_PROFILE_SURVEY_TY
      }),
      (0, o.jsx)(C.Text, {
        variant: 'text-sm/normal',
        color: 'text-muted',
        children: N.Z.Messages.GAME_PROFILE_SURVEY_TY_MORE
      })
    ]
  }),
  !F && (0, o.jsxs)(C.Scroller, {
    className: I.modalContent,
    children: [
      (0, o.jsxs)('div', {
        className: I.intro,
        children: [
          (0, o.jsx)(l.Z, {
            width: 84,
            height: 16
          }),
          0 === T && (0, o.jsx)(C.Text, {
            variant: 'text-sm/normal',
            color: 'text-muted',
            children: N.Z.Messages.GAME_PROFILE_SURVEY_INTRO
          })
        ]
      }),
      (0, o.jsxs)('div', {
        className: I.bottomHalf,
        children: [
          (0, o.jsx)(C.Text, {
            variant: 'eyebrow',
            color: 'header-muted',
            children: N.Z.Messages.GAME_PROFILE_SURVEY_PROGRESS.format({
              step: T + 1,
              total: g.length
            })
          }),
          (0, o.jsx)(C.Heading, {
            className: I.question,
            variant: 'heading-lg/medium',
            color: 'header-primary',
            children: g[T].getTitle()
          }),
          (0, o.jsx)('div', {
            className: E()(I.answers, {
              [I.gridFour]: Z.length % 4 == 0
            }),
            children: Z.map(e => {
              let {
                key: s,
                text: t,
                isChecked: a,
                Icon: n,
                disabled: _
              } = e;
              return (0, o.jsxs)(C.Checkbox, {
                className: E()(I.answerLabel, {
                  [I.checked]: a,
                  [I.disabled]: _
                }),
                reverse: !0,
                disabled: _,
                type: C.Checkbox.Types.INVERTED,
                shape: C.Checkbox.Shapes.SMALL_BOX,
                checkboxColor: S,
                value: a,
                onChange: (e, t) => function(e, s, t) {
                  let a = [...g];
                  a[e] = {
                    ...a[e],
                    answers: {
                      ...a[e].answers,
                      [s]: t
                    }
                  }, x(a), (0, i.A)();
                }(T, s, t),
                children: [
                  (0, o.jsx)(n, {
                    color: C.tokens.colors.INTERACTIVE_ACTIVE,
                    className: I.answerIcon
                  }),
                  (0, o.jsx)(C.Heading, {
                    variant: 'heading-md/medium',
                    className: I.answerText,
                    children: t
                  })
                ]
              }, s);
            })
          }),
          (0, o.jsxs)('div', {
            className: I.footer,
            children: [
              (0, o.jsx)(C.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                className: I.selectAll,
                children: N.Z.Messages.GAME_PROFILE_SURVEY_SELECT_ALL
              }),
              !m && R && (0, o.jsx)(C.Button, {
                onClick: function() {
                  p(), L(1);
                },
                children: N.Z.Messages.NEXT
              }),
              m && (0, o.jsxs)(o.Fragment, {
                children: [
                  (0, o.jsx)(C.Checkbox, {
                    className: I.notify,
                    type: C.Checkbox.Types.INVERTED,
                    shape: C.Checkbox.Shapes.ROUND,
                    checkboxColor: 'var(--border-strong)',
                    value: O,
                    onChange: (e, s) => u(s),
                    children: (0, o.jsx)(C.Text, {
                      variant: 'text-xs/normal',
                      color: 'text-primary',
                      children: N.Z.Messages.GAME_PROFILE_SURVEY_NOTIFY_ME
                    })
                  }),
                  (0, o.jsx)(C.Button, {
                    onClick: function() {
                      p(), G(!0);
                    },
                    disabled: !R,
                    children: N.Z.Messages.SUBMIT
                  })
                ]
              })
            ]
          })
        ]
      })
    ]
  })
]
  });
}