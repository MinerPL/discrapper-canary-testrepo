n.d(t, {
  Z: function() {
return I;
  }
});
var i = n(735250);
n(470079);
var a = n(120356),
  s = n.n(a),
  r = n(297821),
  l = n(481060),
  o = n(839963),
  c = n(139256),
  d = n(689938),
  u = n(622264);

function _(e) {
  let {
didSelfVote: t,
label: n,
percentage: a
  } = e;
  return (0, i.jsxs)('div', {
className: u.votesData,
children: [
  t && (0, i.jsx)(r.T, {
    children: d.Z.Messages.POLL_ANSWER_VOTED_ARIA
  }),
  (0, i.jsxs)(l.Text, {
    variant: 'text-md/semibold',
    color: 'none',
    children: [
      a,
      '%'
    ]
  }),
  (0, i.jsx)(l.Text, {
    variant: 'text-xs/semibold',
    color: 'none',
    children: n
  })
]
  });
}

function E(e) {
  let {
answer: t,
isExpired: n,
myAvatarUrl: a,
canShowVoteCounts: r
  } = e, l = !0 === t.isSelected, o = !0 === t.didSelfVote, d = !0 === t.isVictor;
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(c.$w, {
    attachmentClassName: s()(u.attachment, {
      [u.attachmentWithResults]: r
    }),
    emojiClassName: u.emoji,
    media: t.pollMedia,
    fallback: (0, i.jsx)('div', {
      className: s()(u.attachment, u.mediaMissing)
    })
  }),
  l && (0, i.jsx)(c.ZY, {
    size: 40,
    isVictor: d,
    isExpired: n,
    className: u.selectedIcon
  }),
  r && (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsx)(_, {
        didSelfVote: o,
        percentage: t.votesPercentage,
        label: t.votes,
        myAvatarUrl: o ? a : void 0
      }),
      (!n && o || d) && (0, i.jsx)(c.ZY, {
        size: 18,
        isVictor: d,
        isExpired: n,
        className: u.pollAnswerIcon
      })
    ]
  })
]
  });
}

function I(e) {
  let {
isExpired: t,
myAvatarUrl: n,
answersInteraction: a,
canShowVoteCounts: r,
...l
  } = e;
  return (0, i.jsx)(c.$e, {
className: u.answersContainer,
answerClassName: s()(u.answer, {
  [u.currentlyVoting]: a !== o.Y7.LIST
}),
myAvatarUrl: n,
answersInteraction: a,
renderAnswerContent: e => (0, i.jsx)(E, {
  answer: e,
  isExpired: t,
  myAvatarUrl: n,
  answersInteraction: a,
  canShowVoteCounts: r
}),
...l
  });
}