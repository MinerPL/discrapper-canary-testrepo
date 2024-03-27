"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var s = n("37983");
n("884691");
var a = n("414456"),
  l = n.n(a),
  i = n("597287"),
  r = n("77078"),
  o = n("214400"),
  u = n("426490"),
  d = n("782340"),
  c = n("758888");

function E(e) {
  let {
    didSelfVote: t,
    label: n,
    percentage: a
  } = e;
  return (0, s.jsxs)("div", {
    className: c.votesData,
    children: [t && (0, s.jsx)(i.VisuallyHidden, {
      children: d.default.Messages.POLL_ANSWER_VOTED_ARIA
    }), (0, s.jsxs)(r.Text, {
      variant: "text-md/semibold",
      color: "none",
      children: [a, "%"]
    }), (0, s.jsx)(r.Text, {
      variant: "text-xs/semibold",
      color: "none",
      children: n
    })]
  })
}

function f(e) {
  let {
    answer: t,
    isExpired: n,
    myAvatarUrl: a,
    canShowVoteCounts: i
  } = e, r = !0 === t.isSelected, o = !0 === t.didSelfVote, d = !0 === t.isVictor;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(u.PollMediaView, {
      attachmentClassName: l(c.attachment, {
        [c.attachmentWithResults]: i
      }),
      emojiClassName: c.emoji,
      media: t.pollMedia,
      fallback: (0, s.jsx)("div", {
        className: l(c.attachment, c.mediaMissing)
      })
    }), r && (0, s.jsx)(u.PollAnswerVotedIcon, {
      size: 40,
      isVictor: d,
      isExpired: n,
      className: c.selectedIcon
    }), i && (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(E, {
        didSelfVote: o,
        percentage: t.votesPercentage,
        label: t.votes,
        myAvatarUrl: o ? a : void 0
      }), (!n && o || d) && (0, s.jsx)(u.PollAnswerVotedIcon, {
        size: 18,
        isVictor: d,
        isExpired: n,
        className: c.pollAnswerIcon
      })]
    })]
  })
}

function _(e) {
  let {
    isExpired: t,
    myAvatarUrl: n,
    answersInteraction: a,
    canShowVoteCounts: i,
    ...r
  } = e;
  return (0, s.jsx)(u.PollAnswers, {
    className: c.answersContainer,
    answerClassName: l(c.answer, {
      [c.currentlyVoting]: a !== o.PollChatAnswerInteractionType.LIST
    }),
    myAvatarUrl: n,
    answersInteraction: a,
    renderAnswerContent: e => (0, s.jsx)(f, {
      answer: e,
      isExpired: t,
      myAvatarUrl: n,
      answersInteraction: a,
      canShowVoteCounts: i
    }),
    ...r
  })
}