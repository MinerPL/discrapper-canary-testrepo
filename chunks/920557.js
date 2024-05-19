"use strict";
n.r(t), n.d(t, {
  TextAndImageAnswers: function() {
    return M
  }
}), n("47120"), n("627341");
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("145386"),
  o = n("920906"),
  u = n("278074"),
  d = n("748780"),
  c = n("481060"),
  f = n("542578"),
  E = n("153124"),
  _ = n("203143"),
  m = n("79390"),
  T = n("839963"),
  I = n("139256"),
  p = n("294608"),
  h = n("689938"),
  N = n("583522");

function S(e) {
  let {
    percentage: t,
    label: n,
    canShowVoterDetails: l,
    answerId: i
  } = e, o = (0, E.useUID)(), {
    channelId: u,
    messageId: d
  } = (0, p.useMessageIds)(), [T, I] = a.useState(""), [h, S] = a.useState(!1), C = "" !== T && h, A = a.useCallback(() => {
    I((0, m.getPollAnswerVotesTooltipText)(d, u, i))
  }, [d, u, i]), g = a.useCallback(() => {
    A(), S(!0)
  }, [A]), M = a.useCallback(() => {
    S(!1)
  }, []), R = a.useCallback(() => {
    (0, _.handleShowVotesForAnswer)({
      channelId: u,
      messageId: d,
      answerId: i
    })
  }, [u, d, i]);
  a.useEffect(() => {
    if (h) return f.default.addReactChangeListener(A), () => {
      f.default.removeReactChangeListener(A)
    }
  }, [h, A]);
  let v = (0, s.jsx)(c.Text, {
    variant: "text-xs/semibold",
    color: "none",
    className: N.voteCount,
    scaleFontToUserSetting: !0,
    children: n
  });
  return (0, s.jsxs)("div", {
    className: N.votesData,
    children: [l ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(c.Tooltip, {
        text: (0, s.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          scaleFontToUserSetting: !0,
          children: T
        }),
        forceOpen: C,
        "aria-label": !1,
        children: e => (0, s.jsx)(c.Button, {
          ...e,
          onMouseEnter: g,
          onMouseLeave: M,
          onFocus: g,
          onBlur: M,
          onClick: R,
          className: N.voteCountButton,
          "aria-describedby": C ? o : void 0,
          look: c.Button.Looks.BLANK,
          size: c.Button.Sizes.NONE,
          children: v
        })
      }), C && (0, s.jsx)(r.VisuallyHidden, {
        id: o,
        children: T
      })]
    }) : (0, s.jsx)(s.Fragment, {
      children: v
    }), (0, s.jsxs)(c.Text, {
      variant: "text-md/bold",
      color: "none",
      scaleFontToUserSetting: !0,
      children: [t, "%"]
    })]
  })
}

function C(e) {
  let {
    percentage: t,
    shouldAnimate: n
  } = e, a = (0, o.useSpring)({
    from: {
      width: n ? "0%" : "".concat(t, "%")
    },
    to: {
      width: "".concat(t, "%")
    },
    config: {
      duration: 1200,
      easing: d.default.Easing.inOut(d.default.Easing.ease)
    }
  });
  return (0, s.jsx)(o.animated.span, {
    className: N.votePercentageBar,
    style: a,
    "aria-hidden": !0
  })
}

function A(e) {
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
    answersInteraction: T.PollChatAnswerInteractionType.RADIO_BUTTONS
  }, () => (0, s.jsx)(I.PollAnswerRadioIcon, {
    isSelected: n,
    size: 24,
    className: r
  })).with({
    answersInteraction: T.PollChatAnswerInteractionType.CHECKBOXES
  }, () => (0, s.jsx)(I.PollAnswerCheckboxIcon, {
    isSelected: n,
    size: 20,
    className: r
  })).with({
    answersInteraction: T.PollChatAnswerInteractionType.LIST,
    didSelfVote: !0
  }, () => (0, s.jsx)(I.PollAnswerVotedIcon, {
    isVictor: l,
    isExpired: i,
    size: 24,
    className: r
  })).otherwise(() => null)
}

function g(e) {
  let {
    answer: t,
    isExpired: n,
    answersInteraction: a,
    canShowVoteCounts: l,
    canShowVoterDetails: o
  } = e, u = !0 === t.isSelected, d = !0 === t.didSelfVote, f = !0 === t.isVictor, E = t.shouldAnimateTransition;
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)("div", {
      className: i()(N.answerInner, {
        [N.currentlyVoting]: a !== T.PollChatAnswerInteractionType.LIST,
        [N.selected]: u
      }),
      children: [l ? (0, s.jsx)(C, {
        percentage: t.votesPercentage,
        shouldAnimate: E
      }) : null, null != t.pollMedia.emoji && (0, s.jsx)(I.PollEmojiMediaView, {
        className: N.emoji,
        emoji: t.pollMedia.emoji
      }), (0, s.jsx)(c.Text, {
        className: N.label,
        variant: "text-sm/semibold",
        color: "none",
        scaleFontToUserSetting: !0,
        children: t.pollMedia.text
      }), t.didSelfVote && (0, s.jsx)(r.VisuallyHidden, {
        children: h.default.Messages.POLL_ANSWER_VOTED_ARIA
      }), l && (0, s.jsx)(S, {
        percentage: t.votesPercentage,
        label: t.votes,
        canShowVoterDetails: o,
        answerId: t.answerId
      }), (0, s.jsx)(A, {
        answersInteraction: a,
        isSelected: u,
        didSelfVote: d,
        isVictor: f,
        isExpired: n,
        className: N.answerSelectionIcon
      })]
    })
  })
}

function M(e) {
  let {
    isExpired: t,
    answersInteraction: n,
    canShowVoteCounts: a,
    canTapAnswers: l,
    ...i
  } = e;
  return (0, s.jsx)(I.PollAnswers, {
    className: N.answersContainer,
    answerClassName: N.answer,
    answersInteraction: n,
    canTapAnswers: l,
    renderAnswerContent: e => (0, s.jsx)(g, {
      answer: e,
      isExpired: t,
      answersInteraction: n,
      canShowVoteCounts: a,
      canShowVoterDetails: l
    }),
    ...i
  })
}