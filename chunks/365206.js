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
  u = n(689938),
  d = n(35928);

function _(e) {
  let {
didSelfVote: t,
label: n,
percentage: a
  } = e;
  return (0, i.jsxs)('div', {
className: d.votesData,
children: [
  t && (0, i.jsx)(r.T, {
    children: u.Z.Messages.POLL_ANSWER_VOTED_ARIA
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
  } = e, l = !0 === t.isSelected, o = !0 === t.didSelfVote, u = !0 === t.isVictor;
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(c.$w, {
    attachmentClassName: s()(d.attachment, {
      [d.attachmentWithResults]: r
    }),
    emojiClassName: d.emoji,
    media: t.pollMedia,
    fallback: (0, i.jsx)('div', {
      className: s()(d.attachment, d.mediaMissing)
    })
  }),
  l && (0, i.jsx)(c.ZY, {
    size: 40,
    isVictor: u,
    isExpired: n,
    className: d.selectedIcon
  }),
  r && (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsx)(_, {
        didSelfVote: o,
        percentage: t.votesPercentage,
        label: t.votes,
        myAvatarUrl: o ? a : void 0
      }),
      (!n && o || u) && (0, i.jsx)(c.ZY, {
        size: 18,
        isVictor: u,
        isExpired: n,
        className: d.pollAnswerIcon
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
className: d.answersContainer,
answerClassName: s()(d.answer, {
  [d.currentlyVoting]: a !== o.Y7.LIST
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