"use strict";
n.r(t), n.d(t, {
  TextAndImageAnswers: function() {
    return m
  }
});
var s = n("37983");
n("884691");
var l = n("414456"),
  a = n.n(l),
  i = n("597287"),
  r = n("907002"),
  o = n("446674"),
  u = n("77078"),
  d = n("206230"),
  c = n("426490"),
  f = n("782340"),
  E = n("139583");

function _(e) {
  let {
    percentage: t,
    label: n
  } = e;
  return (0, s.jsxs)("div", {
    className: E.votesData,
    children: [(0, s.jsxs)(u.Text, {
      className: E.voteDataLine,
      variant: "text-md/semibold",
      color: "none",
      children: [t, "%"]
    }), (0, s.jsx)(u.Text, {
      className: E.voteDataLine,
      variant: "text-xs/semibold",
      color: "none",
      children: n
    })]
  })
}

function T(e) {
  let {
    percentage: t
  } = e, n = (0, o.useStateFromStores)([d.default], () => d.default.useReducedMotion), l = (0, r.useSpring)({
    from: {
      width: "0%"
    },
    to: {
      width: "".concat(t, "%")
    },
    immediate: n,
    config: 100 !== t && 0 !== t ? r.config.wobbly : r.config.default
  });
  return (0, s.jsx)(r.animated.span, {
    className: E.votePercentageBar,
    style: l,
    "aria-hidden": !0
  })
}

function I(e) {
  let {
    answer: t,
    isExpired: n,
    hasVoted: l,
    myAvatarUrl: r
  } = e, o = l || n, d = !0 === t.isSelected, I = !0 === t.didSelfVote, m = !0 === t.isVictor;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)("div", {
      className: a(E.answerInner, {
        [E.currentlyVoting]: !l && !n
      }),
      children: [o ? (0, s.jsx)(T, {
        percentage: t.votesPercentage
      }) : null, (0, s.jsxs)("div", {
        className: E.answerContent,
        children: [(0, s.jsx)(c.PollMediaView, {
          attachmentClassName: E.attachment,
          containerClassName: E.mediaContainer,
          media: t.pollMedia,
          fallback: null
        }), (0, s.jsx)(u.Text, {
          className: E.label,
          variant: "text-sm/semibold",
          color: "none",
          children: t.pollMedia.text
        }), (d || t.didSelfVote) && (0, s.jsx)(u.Avatar, {
          className: E.avatarForSelected,
          size: u.AvatarSizes.SIZE_20,
          src: r,
          "aria-hidden": !0
        }), t.didSelfVote && (0, s.jsx)(i.VisuallyHidden, {
          children: f.default.Messages.POLL_ANSWER_VOTED_ARIA
        }), o && (0, s.jsx)(_, {
          percentage: t.votesPercentage,
          label: t.votes
        })]
      })]
    }), !n && I && (0, s.jsx)(c.PollAnswerVotedIcon, {
      size: 18,
      className: E.pollAnswerIcon
    }), m && (0, s.jsx)(c.PollAnswerVictorIcon, {
      size: 18,
      className: E.pollAnswerIcon
    })]
  })
}

function m(e) {
  let {
    hasVoted: t,
    isExpired: n,
    myAvatarUrl: l,
    ...a
  } = e;
  return (0, s.jsx)(c.PollAnswers, {
    className: E.answersContainer,
    answerClassName: E.answer,
    myAvatarUrl: l,
    renderAnswerContent: e => (0, s.jsx)(I, {
      answer: e,
      isExpired: n,
      hasVoted: t,
      myAvatarUrl: l
    }),
    ...a
  })
}