"use strict";
n.r(t), n.d(t, {
  TextAndImageAnswers: function() {
    return R
  }
}), n("47120"), n("627341");
var s = n("735250"),
  a = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("544323"),
  o = n("718017"),
  u = n("278074"),
  d = n("442837"),
  c = n("481060"),
  f = n("607070"),
  E = n("542578"),
  _ = n("153124"),
  T = n("203143"),
  m = n("79390"),
  I = n("839963"),
  p = n("139256"),
  h = n("294608"),
  N = n("689938"),
  S = n("338231");

function C(e) {
  let {
    percentage: t,
    label: n,
    canShowVoterDetails: l,
    answerId: i
  } = e, o = (0, _.useUID)(), {
    channelId: u,
    messageId: d
  } = (0, h.useMessageIds)(), [f, I] = a.useState(""), [p, N] = a.useState(!1), C = "" !== f && p, A = a.useCallback(() => {
    I((0, m.getPollAnswerVotesTooltipText)(d, u, i))
  }, [d, u, i]), g = a.useCallback(() => {
    A(), N(!0)
  }, [A]), M = a.useCallback(() => {
    N(!1)
  }, []), R = a.useCallback(() => {
    (0, T.handleShowVotesForAnswer)({
      channelId: u,
      messageId: d,
      answerId: i
    })
  }, [u, d, i]);
  a.useEffect(() => {
    if (p) return E.default.addReactChangeListener(A), () => {
      E.default.removeReactChangeListener(A)
    }
  }, [p, A]);
  let O = (0, s.jsx)(c.Text, {
    variant: "text-xs/semibold",
    color: "none",
    className: S.voteCount,
    scaleFontToUserSetting: !0,
    children: n
  });
  return (0, s.jsxs)("div", {
    className: S.votesData,
    children: [l ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(c.Tooltip, {
        text: (0, s.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          scaleFontToUserSetting: !0,
          children: f
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
          className: S.voteCountButton,
          "aria-describedby": C ? o : void 0,
          look: c.Button.Looks.BLANK,
          size: c.Button.Sizes.NONE,
          children: O
        })
      }), C && (0, s.jsx)(r.VisuallyHidden, {
        id: o,
        children: f
      })]
    }) : (0, s.jsx)(s.Fragment, {
      children: O
    }), (0, s.jsxs)(c.Text, {
      variant: "text-md/bold",
      color: "none",
      scaleFontToUserSetting: !0,
      children: [t, "%"]
    })]
  })
}

function A(e) {
  let {
    percentage: t
  } = e, n = (0, d.useStateFromStores)([f.default], () => f.default.useReducedMotion), a = (0, o.useSpring)({
    from: {
      width: "0%"
    },
    to: {
      width: "".concat(t, "%")
    },
    immediate: n,
    config: 100 !== t && 0 !== t ? o.config.wobbly : o.config.default
  });
  return (0, s.jsx)(o.animated.span, {
    className: S.votePercentageBar,
    style: a,
    "aria-hidden": !0
  })
}

function g(e) {
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
    answersInteraction: I.PollChatAnswerInteractionType.RADIO_BUTTONS
  }, () => (0, s.jsx)(p.PollAnswerRadioIcon, {
    isSelected: n,
    size: 24,
    className: r
  })).with({
    answersInteraction: I.PollChatAnswerInteractionType.CHECKBOXES
  }, () => (0, s.jsx)(p.PollAnswerCheckboxIcon, {
    isSelected: n,
    size: 20,
    className: r
  })).with({
    answersInteraction: I.PollChatAnswerInteractionType.LIST,
    didSelfVote: !0
  }, () => (0, s.jsx)(p.PollAnswerVotedIcon, {
    isVictor: l,
    isExpired: i,
    size: 24,
    className: r
  })).otherwise(() => null)
}

function M(e) {
  let {
    answer: t,
    isExpired: n,
    answersInteraction: a,
    canShowVoteCounts: l,
    canShowVoterDetails: o
  } = e, u = !0 === t.isSelected, d = !0 === t.didSelfVote, f = !0 === t.isVictor;
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)("div", {
      className: i()(S.answerInner, {
        [S.currentlyVoting]: a !== I.PollChatAnswerInteractionType.LIST,
        [S.selected]: u
      }),
      children: [l ? (0, s.jsx)(A, {
        percentage: t.votesPercentage
      }) : null, null != t.pollMedia.emoji && (0, s.jsx)(p.PollEmojiMediaView, {
        className: S.emoji,
        emoji: t.pollMedia.emoji
      }), (0, s.jsx)(c.Text, {
        className: S.label,
        variant: "text-sm/semibold",
        color: "none",
        scaleFontToUserSetting: !0,
        children: t.pollMedia.text
      }), t.didSelfVote && (0, s.jsx)(r.VisuallyHidden, {
        children: N.default.Messages.POLL_ANSWER_VOTED_ARIA
      }), l && (0, s.jsx)(C, {
        percentage: t.votesPercentage,
        label: t.votes,
        canShowVoterDetails: o,
        answerId: t.answerId
      }), (0, s.jsx)(g, {
        answersInteraction: a,
        isSelected: u,
        didSelfVote: d,
        isVictor: f,
        isExpired: n,
        className: S.answerSelectionIcon
      })]
    })
  })
}

function R(e) {
  let {
    isExpired: t,
    answersInteraction: n,
    canShowVoteCounts: a,
    canTapAnswers: l,
    ...i
  } = e;
  return (0, s.jsx)(p.PollAnswers, {
    className: S.answersContainer,
    answerClassName: S.answer,
    answersInteraction: n,
    canTapAnswers: l,
    renderAnswerContent: e => (0, s.jsx)(M, {
      answer: e,
      isExpired: t,
      answersInteraction: n,
      canShowVoteCounts: a,
      canShowVoterDetails: l
    }),
    ...i
  })
}