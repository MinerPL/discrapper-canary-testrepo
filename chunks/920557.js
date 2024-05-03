"use strict";
n.r(t), n.d(t, {
  TextAndImageAnswers: function() {
    return g
  }
}), n("47120"), n("627341");
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("544323"),
  o = n("718017"),
  u = n("278074"),
  d = n("481060"),
  c = n("542578"),
  f = n("153124"),
  E = n("203143"),
  _ = n("79390"),
  m = n("839963"),
  T = n("139256"),
  I = n("294608"),
  p = n("689938"),
  h = n("273746");

function N(e) {
  let {
    percentage: t,
    label: n,
    canShowVoterDetails: l,
    answerId: i
  } = e, o = (0, f.useUID)(), {
    channelId: u,
    messageId: m
  } = (0, I.useMessageIds)(), [T, p] = a.useState(""), [N, S] = a.useState(!1), C = "" !== T && N, A = a.useCallback(() => {
    p((0, _.getPollAnswerVotesTooltipText)(m, u, i))
  }, [m, u, i]), g = a.useCallback(() => {
    A(), S(!0)
  }, [A]), M = a.useCallback(() => {
    S(!1)
  }, []), R = a.useCallback(() => {
    (0, E.handleShowVotesForAnswer)({
      channelId: u,
      messageId: m,
      answerId: i
    })
  }, [u, m, i]);
  a.useEffect(() => {
    if (N) return c.default.addReactChangeListener(A), () => {
      c.default.removeReactChangeListener(A)
    }
  }, [N, A]);
  let v = (0, s.jsx)(d.Text, {
    variant: "text-xs/semibold",
    color: "none",
    className: h.voteCount,
    scaleFontToUserSetting: !0,
    children: n
  });
  return (0, s.jsxs)("div", {
    className: h.votesData,
    children: [l ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(d.Tooltip, {
        text: (0, s.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          scaleFontToUserSetting: !0,
          children: T
        }),
        forceOpen: C,
        "aria-label": !1,
        children: e => (0, s.jsx)(d.Button, {
          ...e,
          onMouseEnter: g,
          onMouseLeave: M,
          onFocus: g,
          onBlur: M,
          onClick: R,
          className: h.voteCountButton,
          "aria-describedby": C ? o : void 0,
          look: d.Button.Looks.BLANK,
          size: d.Button.Sizes.NONE,
          children: v
        })
      }), C && (0, s.jsx)(r.VisuallyHidden, {
        id: o,
        children: T
      })]
    }) : (0, s.jsx)(s.Fragment, {
      children: v
    }), (0, s.jsxs)(d.Text, {
      variant: "text-md/bold",
      color: "none",
      scaleFontToUserSetting: !0,
      children: [t, "%"]
    })]
  })
}

function S(e) {
  let {
    percentage: t,
    shouldAnimate: n
  } = e, a = (0, o.useSpring)({
    from: {
      width: "0%"
    },
    to: {
      width: "".concat(t, "%")
    },
    immediate: !n,
    config: 100 !== t && 0 !== t ? o.config.wobbly : o.config.default
  });
  return (0, s.jsx)(o.animated.span, {
    className: h.votePercentageBar,
    style: a,
    "aria-hidden": !0
  })
}

function C(e) {
  let {
    answersInteraction: t,
    isSelected: n,
    didSelfVote: a,
    isVictor: l,
    isExpired: i,
    className: r
  } = e;
  return (0, u.match)({
    answersInteraction: t,
    didSelfVote: a
  }).with({
    answersInteraction: m.PollChatAnswerInteractionType.RADIO_BUTTONS
  }, () => (0, s.jsx)(T.PollAnswerRadioIcon, {
    isSelected: n,
    size: 24,
    className: r
  })).with({
    answersInteraction: m.PollChatAnswerInteractionType.CHECKBOXES
  }, () => (0, s.jsx)(T.PollAnswerCheckboxIcon, {
    isSelected: n,
    size: 20,
    className: r
  })).with({
    answersInteraction: m.PollChatAnswerInteractionType.LIST,
    didSelfVote: !0
  }, () => (0, s.jsx)(T.PollAnswerVotedIcon, {
    isVictor: l,
    isExpired: i,
    size: 24,
    className: r
  })).otherwise(() => null)
}

function A(e) {
  let {
    answer: t,
    isExpired: n,
    answersInteraction: a,
    canShowVoteCounts: l,
    canShowVoterDetails: o
  } = e, u = !0 === t.isSelected, c = !0 === t.didSelfVote, f = !0 === t.isVictor, E = t.shouldAnimateTransition;
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)("div", {
      className: i()(h.answerInner, {
        [h.currentlyVoting]: a !== m.PollChatAnswerInteractionType.LIST,
        [h.selected]: u
      }),
      children: [l ? (0, s.jsx)(S, {
        percentage: t.votesPercentage,
        shouldAnimate: E
      }) : null, null != t.pollMedia.emoji && (0, s.jsx)(T.PollEmojiMediaView, {
        className: h.emoji,
        emoji: t.pollMedia.emoji
      }), (0, s.jsx)(d.Text, {
        className: h.label,
        variant: "text-sm/semibold",
        color: "none",
        scaleFontToUserSetting: !0,
        children: t.pollMedia.text
      }), t.didSelfVote && (0, s.jsx)(r.VisuallyHidden, {
        children: p.default.Messages.POLL_ANSWER_VOTED_ARIA
      }), l && (0, s.jsx)(N, {
        percentage: t.votesPercentage,
        label: t.votes,
        canShowVoterDetails: o,
        answerId: t.answerId
      }), (0, s.jsx)(C, {
        answersInteraction: a,
        isSelected: u,
        didSelfVote: c,
        isVictor: f,
        isExpired: n,
        className: h.answerSelectionIcon
      })]
    })
  })
}

function g(e) {
  let {
    isExpired: t,
    answersInteraction: n,
    canShowVoteCounts: a,
    canTapAnswers: l,
    ...i
  } = e;
  return (0, s.jsx)(T.PollAnswers, {
    className: h.answersContainer,
    answerClassName: h.answer,
    answersInteraction: n,
    canTapAnswers: l,
    renderAnswerContent: e => (0, s.jsx)(A, {
      answer: e,
      isExpired: t,
      answersInteraction: n,
      canShowVoteCounts: a,
      canShowVoterDetails: l
    }),
    ...i
  })
}