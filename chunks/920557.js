n.d(t, {
  K: function() {
return R;
  }
}), n(47120), n(627341);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(297821),
  o = n(338545),
  c = n(278074),
  u = n(748780),
  d = n(481060),
  _ = n(542578),
  E = n(153124),
  I = n(203143),
  m = n(79390),
  T = n(839963),
  h = n(139256),
  N = n(294608),
  C = n(689938),
  f = n(720760);

function p(e) {
  let {
percentage: t,
label: n,
canShowVoterDetails: a,
answerId: r
  } = e, o = (0, E.Dt)(), {
channelId: c,
messageId: u
  } = (0, N.pE)(), [T, h] = s.useState(''), [C, p] = s.useState(!1), g = '' !== T && C, S = s.useCallback(() => {
h((0, m.e1)(u, c, r));
  }, [
u,
c,
r
  ]), A = s.useCallback(() => {
S(), p(!0);
  }, [S]), R = s.useCallback(() => {
p(!1);
  }, []), O = s.useCallback(() => {
(0, I.n)({
  channelId: c,
  messageId: u,
  answerId: r
});
  }, [
c,
u,
r
  ]);
  s.useEffect(() => {
if (!!C)
  return _.Z.addReactChangeListener(S), () => {
    _.Z.removeReactChangeListener(S);
  };
  }, [
C,
S
  ]);
  let x = (0, i.jsx)(d.Text, {
variant: 'text-xs/semibold',
color: 'none',
className: f.voteCount,
scaleFontToUserSetting: !0,
children: n
  });
  return (0, i.jsxs)('div', {
className: f.votesData,
children: [
  a ? (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsx)(d.Tooltip, {
        text: (0, i.jsx)(d.Text, {
          variant: 'text-sm/normal',
          color: 'text-muted',
          scaleFontToUserSetting: !0,
          children: T
        }),
        forceOpen: g,
        'aria-label': !1,
        children: e => (0, i.jsx)(d.Button, {
          ...e,
          onMouseEnter: A,
          onMouseLeave: R,
          onFocus: A,
          onBlur: R,
          onClick: O,
          className: f.voteCountButton,
          'aria-describedby': g ? o : void 0,
          look: d.Button.Looks.BLANK,
          size: d.Button.Sizes.NONE,
          children: x
        })
      }),
      g && (0, i.jsx)(l.T, {
        id: o,
        children: T
      })
    ]
  }) : (0, i.jsx)(i.Fragment, {
    children: x
  }),
  (0, i.jsxs)(d.Text, {
    variant: 'text-md/bold',
    color: 'none',
    scaleFontToUserSetting: !0,
    children: [
      t,
      '%'
    ]
  })
]
  });
}

function g(e) {
  let {
percentage: t,
shouldAnimate: n
  } = e, s = (0, d.useSpring)({
from: {
  width: n ? '0%' : ''.concat(t, '%')
},
to: {
  width: ''.concat(t, '%')
},
config: {
  duration: 1200,
  easing: u.Z.Easing.inOut(u.Z.Easing.ease)
}
  }, 'animate-always');
  return (0, i.jsx)(o.animated.span, {
className: f.votePercentageBar,
style: s,
'aria-hidden': !0
  });
}

function S(e) {
  let {
answersInteraction: t,
isSelected: n,
didSelfVote: s,
isVictor: a,
isExpired: r,
className: l
  } = e;
  return (0, c.EQ)({
answersInteraction: t,
didSelfVote: s
  }).with({
answersInteraction: T.Y7.RADIO_BUTTONS
  }, () => (0, i.jsx)(h.Og, {
isSelected: n,
size: 24,
className: l
  })).with({
answersInteraction: T.Y7.CHECKBOXES
  }, () => (0, i.jsx)(h.zs, {
isSelected: n,
size: 20,
className: l
  })).with({
answersInteraction: T.Y7.LIST,
didSelfVote: !0
  }, () => (0, i.jsx)(h.ZY, {
isVictor: a,
isExpired: r,
size: 24,
className: l
  })).otherwise(() => null);
}

function A(e) {
  let {
answer: t,
isExpired: n,
answersInteraction: s,
canShowVoteCounts: a,
canShowVoterDetails: o
  } = e, c = !0 === t.isSelected, u = !0 === t.didSelfVote, _ = !0 === t.isVictor, E = t.shouldAnimateTransition;
  return (0, i.jsx)(i.Fragment, {
children: (0, i.jsxs)('div', {
  className: r()(f.answerInner, {
    [f.currentlyVoting]: s !== T.Y7.LIST,
    [f.selected]: c
  }),
  children: [
    a ? (0, i.jsx)(g, {
      percentage: t.votesPercentage,
      shouldAnimate: E
    }) : null,
    null != t.pollMedia.emoji && (0, i.jsx)(h.sc, {
      className: f.emoji,
      emoji: t.pollMedia.emoji
    }),
    (0, i.jsx)(d.Text, {
      className: f.label,
      variant: 'text-sm/semibold',
      color: 'none',
      scaleFontToUserSetting: !0,
      children: t.pollMedia.text
    }),
    t.didSelfVote && (0, i.jsx)(l.T, {
      children: C.Z.Messages.POLL_ANSWER_VOTED_ARIA
    }),
    a && (0, i.jsx)(p, {
      percentage: t.votesPercentage,
      label: t.votes,
      canShowVoterDetails: o,
      answerId: t.answerId
    }),
    (0, i.jsx)(S, {
      answersInteraction: s,
      isSelected: c,
      didSelfVote: u,
      isVictor: _,
      isExpired: n,
      className: f.answerSelectionIcon
    })
  ]
})
  });
}

function R(e) {
  let {
isExpired: t,
answersInteraction: n,
canShowVoteCounts: s,
canTapAnswers: a,
...r
  } = e;
  return (0, i.jsx)(h.$e, {
className: f.answersContainer,
answerClassName: f.answer,
answersInteraction: n,
canTapAnswers: a,
renderAnswerContent: e => (0, i.jsx)(A, {
  answer: e,
  isExpired: t,
  answersInteraction: n,
  canShowVoteCounts: s,
  canShowVoterDetails: a
}),
...r
  });
}